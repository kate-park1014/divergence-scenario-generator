// 5단계: webfront /test/adventure 에 넣기 (네트워크 없음). 스토리 묶음 폴더 하나 = 화면의 스토리 탭 하나
//  - data/stories/test/side_test_<스토리>/scenarios.json  시나리오 (방 id 1,3,5,7,10 → 엔진이 방 10개로 배치하면 같은 자리, 방 9 = 이벤트 방)
//  - data/cards/side_<스토리>_0N/card_*.json             카드 (읽기용 _side 는 뺌)
//  - data/additions/side_<스토리>_0N.json                카드 인물·기억 이름
// 그 시나리오의 카드 폴더는 지우고 새로 씀
// node --no-warnings --import ./scripts/side_test/ts-register.mjs scripts/side_test/5_webfront.mjs [--id=…] [--order=1] [--tab=tmp] [--sid=…]
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, ID, ORDER, OUT, ARGV, readJson, loadArc } from './lib.mjs';

const WEB = path.resolve(ROOT, process.env.WEBFRONT_DATA_DIR ?? '../project-mj-webfront/src/routes/(app)/test/adventure/data');
if (!fs.existsSync(WEB)) throw new Error(`webfront 데이터 폴더 없음: ${WEB}`);

const design = readJson('design.json');
const story = readJson('story.json');
const people = readJson('actors.json');
const cardDir = path.join(OUT, 'cards');
const cards = fs.readdirSync(cardDir).map((f) => JSON.parse(fs.readFileSync(path.join(cardDir, f), 'utf8')));
// NPC 얼굴: side_test/faces.json (rewrite_test 시나리오의 actors 에서 옮겨 둠)
const rwActors = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/lib/data/storyarc/side_test/faces.json'), 'utf8'))[ID] ?? {};
const companion = rwActors[design.npc] ?? { name: { korean: design.npc_name } };

// --tab=이름: 그 이름의 스토리 탭으로 따로 넣음 (시나리오 id 도 달라서 기존 side_test 탭 카드를 덮지 않음)
const TAB = ARGV.tab;
const short = ID.replace(/^modern_/, '');
const sid = ARGV.sid ?? (TAB ? `${TAB}_${short}_0${ORDER}` : `side_${short}_0${ORDER}`); // --sid 로 직접 정할 수 있음
const write = (rel, data) => {
	const f = path.join(WEB, rel);
	fs.mkdirSync(path.dirname(f), { recursive: true });
	fs.writeFileSync(f, JSON.stringify(data, null, '\t') + '\n');
	return f;
};

// 시나리오: 묶음 파일 하나에 이 화를 넣음 (다른 화가 이미 있으면 유지)
const bundle = path.join('stories/test', TAB ?? `side_test_${short}`, 'scenarios.json');
const old = fs.existsSync(path.join(WEB, bundle)) ? JSON.parse(fs.readFileSync(path.join(WEB, bundle), 'utf8')).scenarios : [];
const scenario = {
	scenario_id: sid,
	order: ORDER,
	act: ORDER === 1 ? 'intro' : ORDER === 5 ? 'climax_finale' : 'rising',
	theme: 'modern',
	actors: { [design.npc]: companion },
	// 5화: 최종보스 pool (storyarc 5화 boss)
	boss: ORDER === 5 ? { pool_id: (await loadArc()).scenarioOutline.find((x) => x.order === 5).boss } : { pool_id: 'random_boss', role: { korean: design.random_boss } },
	rooms: story.rooms.map(({ id, dialogue, win_dialogue, lose_dialogue }) => ({ id, dialogue, ...(win_dialogue && { win_dialogue }), ...(lose_dialogue && { lose_dialogue }) })),
	prologue: story.prologue,
	...(story.epilogue && { epilogue: story.epilogue })
};
const scenarios = [...old.filter((s) => s.scenario_id !== sid), scenario].sort((a, b) => a.order - b.order);
console.log('시나리오:', write(bundle, { scenarios }));

// 카드
const webCards = path.join(WEB, 'cards', sid);
fs.rmSync(webCards, { recursive: true, force: true });
for (const c of cards) {
	const { _side, kind, ...card } = c;
	write(`cards/${sid}/${c.id}.json`, { ...card, tags: [_side.person.id] });
}
console.log(`카드 ${cards.length}장:`, webCards);

// additions: 3c 단계(additions.json)가 있으면 그것을, 없으면 카드 인물 이름·기억 이름만
const made = path.join(OUT, 'additions.json');
if (fs.existsSync(made)) {
	const { errors, ...add } = JSON.parse(fs.readFileSync(made, 'utf8'));
	console.log('additions:', write(`additions/${sid}.json`, { ...add, scenario_id: sid }));
} else {
	const seeds = {};
	for (const c of cards.filter((x) => x.kind === 'plant'))
		for (const ch of c.choices) if (ch.seed && ch.path !== 'gold') seeds[ch.seed] = { korean: ch.text.korean.replace(/\.$/, '') };
	const actors = {
		[design.npc]: { name: companion.name, style: { korean: '원문 대사 말투 그대로' } },
		...Object.fromEntries(Object.entries(people).map(([k, v]) => [k, { name: v.name, style: { korean: v.role } }]))
	};
	console.log('additions:', write(`additions/${sid}.json`, { scenario_id: sid, actors, seeds, flags: {} }));
}
