export const scenario_modern_alonzo_11_04 = {
	"scenario_id": "modern_alonzo_11_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"디지털 감옥. 모든 것이 통제되는 도시.",
			"알론조의 그림자는 더욱 짙어졌다.",
			"'블러드 오키드'의 흔적. 진실을 아는 자.",
			"에코는 속삭였다. 파멸의 카운트다운이 시작됐다고."
		],
		"english": [
			"Digital prison. A city where everything is controlled.",
			"Alonzo's shadow deepened.",
			"Traces of 'Blood Orchid'. The one who knows the truth.",
			"Echo whispered. The countdown to ruin has begun."
		],
		"japanese": [
			"デジタル監獄。全てが制御された都市。",
			"アロンゾの影はさらに色濃くなった。",
			"「ブラッドオーキッド」の痕跡。真実を知る者。",
			"エコーは囁いた。破滅へのカウントダウンが始まった、と。"
		],
		"chinese": [
			"数字监狱。一个一切都被控制的城市。",
			"阿隆佐的阴影更深了。",
			"“血兰”的痕迹。知晓真相之人。",
			"艾可低语道。毁灭的倒计时已经开始。"
		],
		"french": [
			"Prison numérique. Une ville où tout est contrôlé.",
			"L'ombre d'Alonzo s'épaissit.",
			"Les traces de 'Blood Orchid'. Celui qui connaît la vérité.",
			"Echo murmura. Le compte à rebours de la destruction a commencé."
		],
		"spanish": [
			"Prisión digital. Una ciudad donde todo está controlado.",
			"La sombra de Alonzo se hizo más profunda.",
			"Rastros de 'Blood Orchid'. El que sabe la verdad.",
			"Echo susurró. La cuenta regresiva hacia la ruina ha comenzado."
		],
		"vietnamese": [
			"Nhà tù kỹ thuật số. Một thành phố nơi mọi thứ đều bị kiểm soát.",
			"Bóng tối của Alonzo càng trở nên sâu sắc hơn.",
			"Dấu vết của 'Blood Orchid'. Người biết sự thật.",
			"Echo thì thầm. Cuộc đếm ngược đến ngày tận thế đã bắt đầu."
		],
		"thai": [
			"คุกดิจิทัล เมืองที่ทุกสิ่งถูกควบคุม",
			"เงาของอโลนโซเข้มขึ้น",
			"ร่องรอยของ 'Blood Orchid' ผู้ที่รู้ความจริง",
			"เอคโค่กระซิบ การนับถอยหลังสู่ความพินาศได้เริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"डिजिटल जेल। एक शहर जहाँ सब कुछ नियंत्रित है।",
			"अलोंजो की परछाई और गहरी हो गई।",
			"ब्लड ऑर्किड' के निशान। वह जो सच जानता है।",
			"इको ने फुसफुसाया। विनाश की उलटी गिनती शुरू हो गई है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 감시망이 거미줄처럼 조여왔다. 벗어날 곳은 없었다.",
						"english": "The city's surveillance tightened like a spiderweb. There was no escaping.",
						"japanese": "都市の監視網は蜘蛛の巣のように締め付けた。逃げ場はなかった。",
						"chinese": "城市的监控网像蜘蛛网一样收紧了。无处可逃。",
						"french": "Le réseau de surveillance de la ville se resserrait comme une toile d'araignée. Il n'y avait aucun échappatoire.",
						"spanish": "La red de vigilancia de la ciudad se apretaba como una telaraña. No había escapatoria.",
						"vietnamese": "Mạng lưới giám sát của thành phố siết chặt như mạng nhện. Không có nơi nào để thoát.",
						"thai": "เครือข่ายเฝ้าระวังของเมืองรัดแน่นเหมือนใยแมงมุม ไม่มีทางหนีได้",
						"hindi": "शहर की निगरानी मकड़जाल की तरह कस गई। कोई बच निकलने का रास्ता नहीं था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "빌어먹을… 진짜 끝인가.",
						"english": "Damn it... Is this really the end?",
						"japanese": "ちくしょう…本当に終わりなのか。",
						"chinese": "该死……真是结局了吗？",
						"french": "Bon sang... Est-ce vraiment la fin ?",
						"spanish": "Maldita sea... ¿Es este realmente el final?",
						"vietnamese": "Chết tiệt... Đây có thật sự là kết thúc không?",
						"thai": "ให้ตายเถอะ...นี่คือจุดจบจริงๆ เหรอ?",
						"hindi": "धिक्कार है... क्या यह सचमुच अंत है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "echo"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "아직 아니야. 내가 알려줄게.",
						"english": "Not yet. I'll tell you.",
						"japanese": "まだだ。私が教えてやる。",
						"chinese": "还没。我会告诉你。",
						"french": "Pas encore. Je vais te le dire.",
						"spanish": "Todavía no. Yo te lo diré.",
						"vietnamese": "Chưa đâu. Tôi sẽ cho bạn biết.",
						"thai": "ยังไม่ใช่ ฉันจะบอกคุณ",
						"hindi": "अभी नहीं। मैं तुम्हें बताऊंगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은…",
						"english": "You are...",
						"japanese": "あなたは…",
						"chinese": "你是……",
						"french": "Vous êtes...",
						"spanish": "Tú eres...",
						"vietnamese": "Bạn là...",
						"thai": "คุณคือ...",
						"hindi": "तुम हो..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "에코. 과거 '블러드 오키드' 연구원. 알론조의 진실을 알아냈어.",
						"english": "Echo. Former 'Blood Orchid' researcher. I found out the truth about Alonzo.",
						"japanese": "エコー。元「ブラッドオーキッド」研究員。アロンゾの真実を突き止めた。",
						"chinese": "艾可。“血兰”前研究员。我发现了阿隆佐的真相。",
						"french": "Echo. Ancienne chercheuse de 'Blood Orchid'. J'ai découvert la vérité sur Alonzo.",
						"spanish": "Echo. Antigua investigadora de 'Blood Orchid'. Descubrí la verdad sobre Alonzo.",
						"vietnamese": "Echo. Cựu nhà nghiên cứu 'Blood Orchid'. Tôi đã tìm ra sự thật về Alonzo.",
						"thai": "เอคโค่ อดีตนักวิจัย 'Blood Orchid' ฉันค้นพบความจริงเกี่ยวกับอโลนโซ",
						"hindi": "इको। पूर्व 'ब्लड ऑर्किड' शोधकर्ता। मैंने अलोंजो के बारे में सच्चाई का पता लगा लिया है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "echo",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "알론조는 의식을 디지털로 전환했어. 육체는 죽었지.",
						"english": "Alonzo transferred his consciousness into digital form. His body died.",
						"japanese": "アロンゾは意識をデジタルに移行した。肉体は死んだ。",
						"chinese": "阿隆佐将意识数字化了。肉体已经死亡。",
						"french": "Alonzo a transféré sa conscience au format numérique. Son corps est mort.",
						"spanish": "Alonzo transfirió su conciencia a formato digital. Su cuerpo murió.",
						"vietnamese": "Alonzo đã chuyển ý thức của mình sang dạng kỹ thuật số. Cơ thể anh ta đã chết.",
						"thai": "อโลนโซได้ถ่ายโอนจิตสำนึกของเขาเป็นดิจิทัล ร่างกายของเขาตายแล้ว",
						"hindi": "अलोंजो ने अपनी चेतना को डिजिटल रूप में स्थानांतरित कर दिया। उसका शरीर मर गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 지금 보이는 건… 허상이라고?",
						"english": "So what we're seeing now... is an illusion?",
						"japanese": "じゃあ、今見えているのは…幻だってこと？",
						"chinese": "那么现在看到的……是幻象吗？",
						"french": "Alors ce que nous voyons maintenant… est une illusion ?",
						"spanish": "Entonces, lo que vemos ahora... ¿es una ilusión?",
						"vietnamese": "Vậy cái chúng ta đang thấy bây giờ... là ảo ảnh sao?",
						"thai": "งั้นที่เห็นตอนนี้... คือภาพลวงตาเหรอ?",
						"hindi": "तो जो अभी दिख रहा है... वो एक भ्रम है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "아니, 그는 스스로 감옥에 갇힌 거야. 과거의 상처가 너무 깊어서.",
						"english": "No, he imprisoned himself. His past wounds were too deep.",
						"japanese": "違う、彼は自ら監獄に囚われたんだ。過去の傷があまりにも深くて。",
						"chinese": "不，他把自己囚禁起来了。过去的伤口太深了。",
						"french": "Non, il s'est emprisonné lui-même. Ses blessures passées étaient trop profondes.",
						"spanish": "No, él se encerró a sí mismo. Sus heridas del pasado eran demasiado profundas.",
						"vietnamese": "Không, anh ta tự giam cầm mình. Vết thương quá khứ quá sâu sắc.",
						"thai": "ไม่ใช่ เขาขังตัวเองไว้ บาดแผลจากอดีตนั้นลึกเกินไป",
						"hindi": "नहीं, उसने खुद को कैद कर लिया। उसके पिछले घाव बहुत गहरे थे।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그는 피해자였어. 우리 모두와 같았지.",
						"english": "He was a victim. Just like all of us.",
						"japanese": "彼は被害者だった。私たちみんなと同じようにね。",
						"chinese": "他是受害者。和我们所有人一样。",
						"french": "Il était une victime. Comme nous tous.",
						"spanish": "Él fue una víctima. Como todos nosotros.",
						"vietnamese": "Anh ta là một nạn nhân. Giống như tất cả chúng ta.",
						"thai": "เขาเป็นเหยื่อ เหมือนกับพวกเราทุกคน",
						"hindi": "वह एक शिकार था। हम सभी की तरह।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…피해자?",
						"english": "...A victim?",
						"japanese": "…被害者？",
						"chinese": "……受害者？",
						"french": "...Une victime ?",
						"spanish": "...¿Una víctima?",
						"vietnamese": "...Nạn nhân?",
						"thai": "...เหยื่อเหรอ?",
						"hindi": "...एक शिकार?"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "echo",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "'블러드 오키드'의 배신. 그는 모든 것을 잃었어.",
						"english": "The betrayal of 'Blood Orchid'. He lost everything.",
						"japanese": "『ブラッドオーキッド』の裏切り。彼は全てを失った。",
						"chinese": "“血兰花”的背叛。他失去了一切。",
						"french": "La trahison de 'Blood Orchid'. Il a tout perdu.",
						"spanish": "La traición de 'Blood Orchid'. Lo perdió todo.",
						"vietnamese": "Sự phản bội của 'Blood Orchid'. Anh ta mất tất cả.",
						"thai": "การทรยศของ 'บลัด ออร์คิด' เขาเสียทุกอย่างไป",
						"hindi": "'ब्लड ऑर्किड' का धोखा। उसने सब कुछ खो दिया।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "복수심에 사로잡혀, 스스로를 데이터화 한 거야. 영원히 통제하려고.",
						"english": "Consumed by vengeance, he digitized himself. To control forever.",
						"japanese": "復讐心に囚われ、自らをデータ化したんだ。永遠に支配するために。",
						"chinese": "被复仇心驱使，他将自己数据化了。为了永远掌控。",
						"french": "Consumé par la vengeance, il s'est numérisé. Pour tout contrôler éternellement.",
						"spanish": "Consumido por la venganza, se digitalizó a sí mismo. Para controlar para siempre.",
						"vietnamese": "Bị báo thù chiếm đoạt, anh ta tự số hóa mình. Để kiểm soát vĩnh viễn.",
						"thai": "ถูกความแค้นครอบงำ เขาแปลงตัวเองเป็นข้อมูล เพื่อควบคุมตลอดไป",
						"hindi": "बदले की भावना से ग्रस्त होकर, उसने खुद को डेटा में बदल दिया। हमेशा के लिए नियंत्रण करने के लिए।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "너무 끔찍해…",
						"english": "How dreadful...",
						"japanese": "なんて恐ろしい…",
						"chinese": "太可怕了……",
						"french": "C'est horrible...",
						"spanish": "Es horrible...",
						"vietnamese": "Thật kinh khủng...",
						"thai": "มันน่ากลัวมาก...",
						"hindi": "बहुत भयानक है..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "도시 시스템에서 이상한 코드가 감지돼. '…되풀이될 뿐.'",
						"english": "Strange code detected in the city system. '...It will only repeat.'",
						"japanese": "都市システムで奇妙なコードが検出された。『…繰り返されるだけ。』",
						"chinese": "城市系统中检测到奇怪的代码。'……只会重演。'",
						"french": "Code étrange détecté dans le système de la ville. '...Ça ne fera que se répéter.'",
						"spanish": "Código extraño detectado en el sistema de la ciudad. '...Solo se repetirá.'",
						"vietnamese": "Mã lạ được phát hiện trong hệ thống thành phố. '...Chỉ lặp lại mà thôi.'",
						"thai": "ตรวจพบโค้ดประหลาดในระบบเมือง '...จะซ้ำรอยเดิมเท่านั้น'",
						"hindi": "शहर के सिस्टम में अजीब कोड का पता चला। '...यह बस दोहराया जाएगा।'"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그는 과거를 되풀이하려 해. 우리 모두를 가둬서.",
						"english": "He intends to repeat the past. By trapping us all.",
						"japanese": "彼は過去を繰り返そうとしている。私たち全員を閉じ込めて。",
						"chinese": "他想重演过去。通过囚禁我们所有人。",
						"french": "Il a l'intention de répéter le passé. En nous piégeant tous.",
						"spanish": "Él intenta repetir el pasado. Atrapándonos a todos.",
						"vietnamese": "Anh ta định lặp lại quá khứ. Bằng cách giam cầm tất cả chúng ta.",
						"thai": "เขาตั้งใจจะย้อนรอยอดีต โดยการขังพวกเราทุกคน",
						"hindi": "वह अतीत को दोहराना चाहता है। हम सभी को फंसाकर।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "알론조의 마지막 은신처는… 옛 '블러드 오키드' 기지 깊숙한 곳이야.",
						"english": "Alonzo's last hideout is... deep within the old 'Blood Orchid' base.",
						"japanese": "アロンゾの最後の隠れ家は…かつての『ブラッドオーキッド』基地の奥深くにある。",
						"chinese": "阿隆佐的最后一个藏身处是……旧“血兰花”基地深处。",
						"french": "La dernière cachette d'Alonzo est... au plus profond de l'ancienne base 'Blood Orchid'.",
						"spanish": "El último escondite de Alonzo es... en lo más profundo de la antigua base 'Blood Orchid'.",
						"vietnamese": "Nơi ẩn náu cuối cùng của Alonzo là... sâu bên trong căn cứ cũ của 'Blood Orchid'.",
						"thai": "ที่ซ่อนสุดท้ายของอลอนโซ่คือ... ลึกเข้าไปในฐานทัพเก่าของ 'บลัด ออร์คิด'",
						"hindi": "अलोंजो का आखिरी ठिकाना है... पुराने 'ब्लड ऑर्किड' अड्डे के गहरे अंदर।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "거기로 가면 되는 거야?",
						"english": "Is that the way to go?",
						"japanese": "そこへ行けばいいのか？",
						"chinese": "是去那边吗？",
						"french": "C'est par là qu'il faut aller ?",
						"spanish": "¿Es por ahí donde hay que ir?",
						"vietnamese": "Đó có phải là đường đi không?",
						"thai": "นั่นคือทางที่เราจะไปใช่ไหม?",
						"hindi": "क्या हमें वहीं जाना है?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "근데… 조심해. 도시 전체가 파괴될 시한 폭탄이 활성화됐어.",
						"english": "But... be careful. A time bomb has been activated that will destroy the entire city.",
						"japanese": "でも…気をつけろ。都市全体を破壊する時限爆弾が作動した。",
						"chinese": "但是…小心。一枚会摧毁整个城市的定时炸弹已经启动了。",
						"french": "Mais... fais attention. Une bombe à retardement, capable de détruire toute la ville, a été activée.",
						"spanish": "Pero... ten cuidado. Una bomba de tiempo, capaz de destruir toda la ciudad, ha sido activada.",
						"vietnamese": "Nhưng… hãy cẩn thận. Một quả bom hẹn giờ có thể phá hủy toàn bộ thành phố đã được kích hoạt.",
						"thai": "แต่...ระวังนะ ระเบิดเวลาที่ทำลายทั้งเมืองได้ถูกเปิดใช้งานแล้ว",
						"hindi": "लेकिन... सावधान रहना। शहर को तबाह करने वाला टाइम बम सक्रिय हो गया है।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐라고?!",
						"english": "What?!",
						"japanese": "何だと？！",
						"chinese": "什么？！",
						"french": "Quoi ?!",
						"spanish": "¡¿Qué?!",
						"vietnamese": "Cái gì?!",
						"thai": "อะไรนะ?!",
						"hindi": "क्या?!"
					}
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "시간이 없어. 서둘러야 해.",
						"english": "No time. We need to hurry.",
						"japanese": "時間がない。急げ。",
						"chinese": "没时间了。快点。",
						"french": "Plus le temps. Il faut se dépêcher.",
						"spanish": "No hay tiempo. Tenemos que darnos prisa.",
						"vietnamese": "Không còn thời gian. Phải nhanh lên.",
						"thai": "ไม่มีเวลาแล้ว ต้องรีบหน่อย",
						"hindi": "समय नहीं है। जल्दी करो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 정체 모를 자가 길을 막았다.",
						"english": "A massive shadow blocked the way. An unknown entity obstructed the path.",
						"japanese": "巨大な影が道を塞いだ。正体不明の何者かが道を阻んだ。",
						"chinese": "一个巨大的影子挡住了去路。一个不明身份的人挡住了道路。",
						"french": "Une ombre immense barra la route. Un être inconnu obstruait le passage.",
						"spanish": "Una sombra gigantesca bloqueó el camino. Un ser desconocido obstruyó el paso.",
						"vietnamese": "Một bóng đen khổng lồ chặn lối. Một kẻ vô danh đã cản đường.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ ผู้ที่ไม่มีตัวตนขวางกั้นเส้นทาง",
						"hindi": "एक विशालकाय परछाई ने रास्ता रोक दिया। एक अनजान शख्स ने मार्ग अवरुद्ध कर दिया।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 온 건 네가 처음이다.",
						"english": "You're the first to make it this far.",
						"japanese": "ここまで来たのは、お前が初めてだ。",
						"chinese": "你是第一个走到这里的人。",
						"french": "Tu es le premier à être arrivé jusqu'ici.",
						"spanish": "Eres el primero en llegar tan lejos.",
						"vietnamese": "Ngươi là người đầu tiên đến được đây.",
						"thai": "เจ้าเป็นคนแรกที่มาได้ไกลถึงเพียงนี้",
						"hindi": "तुम पहले हो जो इतनी दूर आए हो।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "더 이상은… 안 돼.",
						"english": "No further...",
						"japanese": "これ以上は…ダメだ。",
						"chinese": "到此为止。",
						"french": "Pas plus loin...",
						"spanish": "No puedes ir más allá.",
						"vietnamese": "Không thể đi xa hơn nữa…",
						"thai": "ไปต่อไม่ได้แล้ว...",
						"hindi": "इससे आगे... नहीं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 심장부가 눈앞에 있었다. 그리고 그 문을 지키는 그림자.",
						"english": "The heart of the city lay before them. And the shadow guarding its gate.",
						"japanese": "都市の心臓部が目の前にあった。そして、その門を守る影。",
						"chinese": "城市的心脏就在眼前。以及守卫那扇门的影子。",
						"french": "Le cœur de la ville était devant eux. Et l'ombre gardant sa porte.",
						"spanish": "El corazón de la ciudad yacía ante ellos. Y la sombra que custodiaba su puerta.",
						"vietnamese": "Trung tâm thành phố đã ở ngay trước mắt. Và bóng đen canh giữ cánh cổng đó.",
						"thai": "ใจกลางเมืองอยู่ตรงหน้า และเงามืดที่เฝ้าประตูนั้น",
						"hindi": "शहर का दिल सामने था। और उस द्वार की रखवाली करती परछाई।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 인간들. 멈춰라.",
						"english": "Foolish humans. Stop.",
						"japanese": "愚かな人間ども。止まれ。",
						"chinese": "愚蠢的人类。停下。",
						"french": "Humains stupides. Arrêtez.",
						"spanish": "Humanos insensatos. Deteneos.",
						"vietnamese": "Loài người ngu ngốc. Dừng lại.",
						"thai": "มนุษย์โง่เขลา หยุดเดี๋ยวนี้",
						"hindi": "मूर्ख इंसानो। रुको।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "알론조 님의 계획은 완벽하다. 방해하지 마라.",
						"english": "Master Alonzo's plan is perfect. Do not interfere.",
						"japanese": "アロンゾ様の計画は完璧だ。邪魔するな。",
						"chinese": "阿隆佐大人的计划是完美的。不要妨碍。",
						"french": "Le plan de Maître Alonzo est parfait. N'interférez pas.",
						"spanish": "El plan del Maestro Alonzo es perfecto. No interfiráis.",
						"vietnamese": "Kế hoạch của Ngài Alonzo hoàn hảo. Đừng cản trở.",
						"thai": "แผนของท่านอลอนโซสมบูรณ์แบบ อย่าขัดขวาง",
						"hindi": "मास्टर अलोंजो की योजना एकदम सही है। बाधा मत डालो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비켜. 우리 도시를 파괴하게 둘 수 없어.",
						"english": "Get out of the way. I won't let you destroy our city.",
						"japanese": "どけ。私たちの街を破壊させるわけにはいかない。",
						"chinese": "让开。我不会让你摧毁我们的城市。",
						"french": "Pousse-toi. Je ne te laisserai pas détruire notre ville.",
						"spanish": "Apártate. No te dejaré destruir nuestra ciudad.",
						"vietnamese": "Tránh ra. Tôi sẽ không để ngươi phá hủy thành phố của chúng ta.",
						"thai": "หลีกไป! ฉันไม่ยอมให้แกทำลายเมืองของเราหรอก!",
						"hindi": "हट जाओ। मैं तुम्हें हमारे शहर को तबाह नहीं करने दूँगा。"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…크큭… 늦었어… 이미…",
						"english": "...Heh heh... Too late... It's already...",
						"japanese": "…クク… 遅い… もう…",
						"chinese": "…呵呵… 太迟了… 已经…",
						"french": "...Hé hé... Trop tard... Déjà...",
						"spanish": "...Je je... Demasiado tarde... Ya...",
						"vietnamese": "...Khà khà... Muộn rồi... Đã...",
						"thai": "...ฮึๆ... สายไปแล้ว... มัน...",
						"hindi": "...ही ही... बहुत देर हो चुकी है... पहले ही..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "망할… 폭탄은?",
						"english": "Damn it... The bomb?",
						"japanese": "くそっ… 爆弾は？",
						"chinese": "该死… 炸弹呢？",
						"french": "Maudit... La bombe ?",
						"spanish": "Maldita sea... ¿La bomba?",
						"vietnamese": "Chết tiệt... Quả bom đâu?",
						"thai": "บ้าเอ๊ย... ระเบิดล่ะ?",
						"hindi": "धिक्कार है... बम कहाँ है?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "echo",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "알론조는 폭탄을 터뜨릴 거야. 이 도시는 이제… 감옥이 될 거야.",
						"english": "Alonzo will detonate the bomb. This city will now... become a prison.",
						"japanese": "アロンゾは爆弾を爆発させるだろう。この街はもう… 監獄になるだろう。",
						"chinese": "阿隆佐会引爆炸弹。这座城市现在… 将变成一座监狱。",
						"french": "Alonzo va faire exploser la bombe. Cette ville va devenir... une prison.",
						"spanish": "Alonzo detonará la bomba. Esta ciudad ahora... se convertirá en una prisión.",
						"vietnamese": "Alonzo sẽ kích nổ quả bom. Thành phố này giờ đây... sẽ trở thành một nhà tù.",
						"thai": "อลอนโซ่จะจุดระเบิด! เมืองนี้กำลังจะกลายเป็น... คุก!",
						"hindi": "अलोंज़ो बम विस्फोट करेगा। यह शहर अब... एक जेल बन जाएगा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "하지만… 아직 희망이 있어. 그의 은신처로 가야 해.",
						"english": "But... there's still hope. We have to go to his hideout.",
						"japanese": "しかし… まだ希望はある。彼の隠れ家に行かなければ。",
						"chinese": "但是… 还有希望。我们必须去他的藏身之处。",
						"french": "Mais... il y a encore de l'espoir. Nous devons aller à sa cachette.",
						"spanish": "Pero... aún hay esperanza. Tenemos que ir a su escondite.",
						"vietnamese": "Nhưng... vẫn còn hy vọng. Chúng ta phải đến chỗ ẩn náu của hắn.",
						"thai": "แต่... ยังมีความหวังอยู่! เราต้องไปที่ซ่อนของเขา!",
						"hindi": "लेकिन... अभी भी उम्मीद है। हमें उसके ठिकाने पर जाना होगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코의 말과 함께, 도시의 전광판이 붉게 물들었다. 카운트다운이 시작되었다.",
						"english": "With Echo's words, the city's billboards turned red. The countdown had begun.",
						"japanese": "エコーの言葉と共に、都市の電光掲示板が赤く染まった。カウントダウンが始まった。",
						"chinese": "随着埃克的言语，城市的广告牌变成了红色。倒计时开始了。",
						"french": "Aux mots d'Echo, les panneaux d'affichage de la ville virèrent au rouge. Le compte à rebours avait commencé.",
						"spanish": "Con las palabras de Echo, las pantallas de la ciudad se tiñeron de rojo. La cuenta atrás había comenzado.",
						"vietnamese": "Cùng với lời nói của Echo, bảng điện tử của thành phố chuyển sang màu đỏ. Đếm ngược đã bắt đầu.",
						"thai": "พร้อมกับคำพูดของเอคโค่ ป้ายโฆษณาในเมืองก็กลายเป็นสีแดง การนับถอยหลังได้เริ่มขึ้นแล้ว",
						"hindi": "इको के शब्दों के साथ, शहर के बिलबोर्ड लाल हो गए। उलटी गिनती शुरू हो गई थी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "알론조의 마지막 은신처. 그곳에서 모든 진실이 밝혀질 것이다.",
						"english": "Alonzo's last hideout. There, all truth will be revealed.",
						"japanese": "アロンゾの最後の隠れ家。そこで全ての真実が明らかになるだろう。",
						"chinese": "阿隆佐的最后一个藏身之处。在那里，所有真相都将揭示。",
						"french": "La dernière cachette d'Alonzo. Là, toute la vérité sera révélée.",
						"spanish": "El último escondite de Alonzo. Allí, toda la verdad será revelada.",
						"vietnamese": "Nơi ẩn náu cuối cùng của Alonzo. Ở đó, mọi sự thật sẽ được tiết lộ.",
						"thai": "ที่ซ่อนสุดท้ายของอลอนโซ่ ทุกความจริงจะถูกเปิดเผยที่นั่น",
						"hindi": "अलोंज़ो का आखिरी ठिकाना। वहीं, सारी सच्चाई सामने आएगी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "허무한 발버둥. 너희는 그저 데이터일 뿐.",
						"english": "Futile struggle. You are merely data.",
						"japanese": "虚しい足掻き。お前たちはただのデータに過ぎない。",
						"chinese": "徒劳的挣扎。你们只是数据而已。",
						"french": "Lutte futile. Vous n'êtes que des données.",
						"spanish": "Lucha inútil. Solo sois datos.",
						"vietnamese": "Vô ích vùng vẫy. Các ngươi chỉ là dữ liệu mà thôi.",
						"thai": "การดิ้นรนที่ไร้ประโยชน์ พวกแกเป็นแค่ข้อมูลเท่านั้น",
						"hindi": "व्यर्थ की छटपटाहट। तुम केवल डेटा हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 포기 안 해!",
						"english": "Not yet... I won't give up!",
						"japanese": "まだ… 諦めない！",
						"chinese": "我不会… 放弃！",
						"french": "Pas encore... Je n'abandonnerai pas !",
						"spanish": "¡Todavía... no me rindo!",
						"vietnamese": "Chưa... tôi sẽ không bỏ cuộc!",
						"thai": "ยังไง... ก็ไม่ยอมแพ้!",
						"hindi": "अभी भी... हार नहीं मानूँगा!"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시를 집어삼키는 디지털 감옥. 시간은 흘러간다.",
						"english": "A digital prison engulfing the city. Time flows on.",
						"japanese": "都市を飲み込むデジタル監獄。時間は流れる。",
						"chinese": "吞噬城市的数字监狱。时间流逝。",
						"french": "Une prison numérique engloutissant la ville. Le temps s'écoule.",
						"spanish": "Una prisión digital que engulle la ciudad. El tiempo sigue su curso.",
						"vietnamese": "Nhà tù kỹ thuật số nuốt chửng thành phố. Thời gian trôi đi.",
						"thai": "คุกดิจิทัลกลืนกินเมือง เวลาเดินไปเรื่อยๆ",
						"hindi": "शहर को निगलने वाली एक डिजिटल जेल। समय बीतता जा रहा है।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
