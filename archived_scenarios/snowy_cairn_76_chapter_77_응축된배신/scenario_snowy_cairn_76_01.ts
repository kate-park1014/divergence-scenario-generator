export const scenario_snowy_cairn_76_01 = {
	"scenario_id": "snowy_cairn_76_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"돌무덤. 거대한 화강암 조각들이 켜켜이 쌓인 곳.",
			"그 안에 갇힌 것은 시간. 그리고… 배신.",
			"에이라는 돌 조각을 읽어낼 수 있다고 했다.",
			"잊힌 진실이 깨어날 시간이었다."
		],
		"english": [
			"Stone tomb. A place where colossal granite fragments are piled up.",
			"Trapped within it was time. And… betrayal.",
			"Aira said she could read the stone fragments.",
			"It was time for forgotten truths to awaken."
		],
		"japanese": [
			"石塚。巨大な花崗岩の破片が積み重なった場所。",
			"その中に閉じ込められたのは時間。そして…裏切り。",
			"エイラは石の破片を読み解けると言った。",
			"忘れ去られた真実が目覚める時だった。"
		],
		"chinese": [
			"石冢。巨大的花岗岩碎片层层堆积之地。",
			"困于其中的是时间。以及…背叛。",
			"艾拉说她能解读那些石刻。",
			"遗忘的真相是时候觉醒了。"
		],
		"french": [
			"Tombeau de pierre. Un lieu où d'énormes fragments de granit sont empilés.",
			"Le temps y était emprisonné. Et… la trahison.",
			"Aira disait pouvoir lire les fragments de pierre.",
			"Il était temps que les vérités oubliées se révèlent."
		],
		"spanish": [
			"Tumba de piedra. Un lugar donde enormes fragmentos de granito se apilan.",
			"Atrapados dentro estaban el tiempo. Y… la traición.",
			"Aira dijo que podía leer los fragmentos de piedra.",
			"Era hora de que las verdades olvidadas despertaran."
		],
		"vietnamese": [
			"Mộ đá. Nơi những mảnh đá hoa cương khổng lồ chất chồng.",
			"Bị giam cầm bên trong là thời gian. Và… sự phản bội.",
			"Aira nói cô ấy có thể đọc được những mảnh đá.",
			"Đã đến lúc những sự thật bị lãng quên thức tỉnh."
		],
		"thai": [
			"สุสานหิน สถานที่ซึ่งเศษหินแกรนิตมหึมาทับถมกันเป็นชั้นๆ",
			"สิ่งที่ถูกกักขังอยู่ภายในคือเวลา และ...การทรยศ",
			"เอร่าบอกว่าเธออ่านเศษหินได้",
			"ถึงเวลาที่ความจริงที่ถูกลืมจะตื่นขึ้น"
		],
		"hindi": [
			"पत्थरों का मकबरा। एक ऐसी जगह जहाँ विशाल ग्रेनाइट के टुकड़े ढेर हो गए हैं।",
			"उसके भीतर फँसा हुआ था समय। और… धोखा।",
			"ऐरा ने कहा कि वह पत्थरों के टुकड़ों को पढ़ सकती है।",
			"यह भूली हुई सच्चाइयों के जागने का समय था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 돌무덤. 수많은 화강암 조각들이 침묵 속에 쌓여 있었다.",
						"english": "A colossal stone tomb. Countless granite fragments were piled up in silence.",
						"japanese": "巨大な石塚。数えきれないほどの花崗岩の破片が静かに積み重なっていた。",
						"chinese": "巨大的石冢。无数花岗岩碎片在沉默中堆积。",
						"french": "Un tombeau de pierre colossal. D'innombrables fragments de granit s'empilaient en silence.",
						"spanish": "Una colosal tumba de piedra. Innumerables fragmentos de granito se apilaban en silencio.",
						"vietnamese": "Một ngôi mộ đá khổng lồ. Vô số mảnh đá hoa cương chất chồng trong im lặng.",
						"thai": "สุสานหินขนาดมหึมา เศษหินแกรนิตนับไม่ถ้วนกองทับถมกันอยู่เงียบๆ",
						"hindi": "एक विशाल पत्थर का मकबरा। अनगिनत ग्रेनाइट के टुकड़े खामोशी में ढेर हो गए थे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 돌 조각들… 뭔가 적혀있어.",
						"english": "These stone fragments… something is written on them.",
						"japanese": "この石の破片… 何か書かれている。",
						"chinese": "这些石刻…上面刻着什么。",
						"french": "Ces fragments de pierre… quelque chose y est écrit.",
						"spanish": "Estos fragmentos de piedra… algo está escrito en ellos.",
						"vietnamese": "Những mảnh đá này… có gì đó được viết lên.",
						"thai": "เศษหินเหล่านี้… มีบางอย่างเขียนอยู่",
						"hindi": "ये पत्थरों के टुकड़े… कुछ लिखा हुआ है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…돌에 새겨진 룬. 장면이 얼어붙어 있네요.",
						"english": "…Runes carved into the stone. The scene is frozen.",
						"japanese": "…石に刻まれたルーン。場面が凍りついている。",
						"chinese": "…刻在石头上的符文。画面仿佛凝固了。",
						"french": "…Des runes gravées dans la pierre. La scène est figée.",
						"spanish": "…Runas grabadas en la piedra. La escena está congelada.",
						"vietnamese": "…Những ký tự rune khắc trên đá. Khung cảnh như đóng băng.",
						"thai": "…อักษรรูนสลักอยู่บนหิน ภาพนั้นถูกแช่แข็งไว้",
						"hindi": "…पत्थर पर खुदे हुए रूण। दृश्य जम गया है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "형제가 형제를 등지고, 동지가 동지를 배신하는… 그런 순간들이.",
						"english": "Moments where brother turns against brother, comrade betrays comrade… such moments.",
						"japanese": "兄弟が兄弟に背を向け、同志が同志を裏切る…そんな瞬間が。",
						"chinese": "兄弟反目，同志背叛…这样的瞬间。",
						"french": "Des moments où un frère se retourne contre son frère, un camarade trahit un camarade… de tels moments.",
						"spanish": "Momentos en que un hermano se vuelve contra su hermano, un camarada traiciona a un camarada… tales momentos.",
						"vietnamese": "Những khoảnh khắc anh em quay lưng, đồng chí phản bội đồng chí… những khoảnh khắc như vậy.",
						"thai": "ช่วงเวลาที่พี่น้องหันหลังให้กัน สหายทรยศสหาย… ช่วงเวลาเหล่านั้น",
						"hindi": "ऐसे पल जब भाई भाई के खिलाफ हो जाता है, साथी साथी को धोखा देता है… ऐसे पल।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "배신이라고? 이 돌무덤이… 배신으로 쌓인 건가?",
						"english": "Betrayal? Is this stone tomb… built upon betrayal?",
						"japanese": "裏切りだと？この石塚が…裏切りによって築かれたのか？",
						"chinese": "背叛？这座石冢…是由背叛堆砌而成的吗？",
						"french": "Trahison ? Ce tombeau de pierre… a-t-il été construit par la trahison ?",
						"spanish": "Traición? ¿Esta tumba de piedra… fue construida con traición?",
						"vietnamese": "Phản bội ư? Ngôi mộ đá này… được xây dựng bằng sự phản bội sao?",
						"thai": "การทรยศงั้นเหรอ? สุสานหินแห่งนี้… สร้างขึ้นจากการทรยศหรือ?",
						"hindi": "धोखा? क्या यह पत्थर का मकबरा… धोखे से बना है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네. 모든 조각이… 잊힌 배신의 기록이에요.",
						"english": "Yes. Every fragment… is a record of forgotten betrayal.",
						"japanese": "はい。すべての破片が…忘れ去られた裏切りの記録です。",
						"chinese": "是的。每一个碎片…都是被遗忘的背叛记录。",
						"french": "Oui. Chaque fragment… est un récit de trahison oubliée.",
						"spanish": "Sí. Cada fragmento… es un registro de traición olvidada.",
						"vietnamese": "Vâng. Mỗi mảnh… là một ghi chép về sự phản bội bị lãng quên.",
						"thai": "ใช่ ทุกๆ ชิ้นส่วน… คือบันทึกของการทรยศที่ถูกลืม",
						"hindi": "हाँ। हर टुकड़ा… भूली हुई धोखे की एक रिकॉर्ड है।"
					},
					"emotion": "base",
					"speaker": "eira"
				}
			]
		}
	]
} as const;
