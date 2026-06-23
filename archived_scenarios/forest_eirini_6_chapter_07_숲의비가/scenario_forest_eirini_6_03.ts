export const scenario_forest_eirini_6_03 = {
	"scenario_id": "forest_eirini_6_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
		},
		"ela": {
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
		},
		"ivy": {
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "음습한 숲의 입구. 알 수 없는 기운이 발걸음을 붙잡았다.",
						"english": "The damp forest entrance. An unknown energy held my steps.",
						"japanese": "薄暗い森の入り口。未知の気配が足取りを止めた。",
						"chinese": "阴森的森林入口。一股未知的气息拦住了脚步。",
						"french": "L'entrée sombre de la forêt. Une énergie inconnue retenait mes pas.",
						"spanish": "La entrada húmeda del bosque. Una energía desconocida detuvo mis pasos.",
						"vietnamese": "Lối vào khu rừng ẩm ướt. Một luồng khí bí ẩn níu chân tôi.",
						"thai": "ทางเข้าป่าชื้นแฉะ พลังงานลึกลับยึดตรึงฝีเท้าไว้",
						"hindi": "नम जंगल का प्रवेश द्वार। एक अज्ञात ऊर्जा ने मेरे कदमों को रोक लिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 그 숲인가.",
						"english": "Is this... that forest?",
						"japanese": "ここが… あの森か。",
						"chinese": "这里… 就是那片森林吗？",
						"french": "C'est... cette forêt ?",
						"spanish": "¿Es este... ese bosque?",
						"vietnamese": "Đây có phải… khu rừng đó không.",
						"thai": "นี่คือ... ป่านั้นหรือเปล่า",
						"hindi": "क्या यह... वह जंगल है?"
					}
				},
				{
					"action": "enter",
					"speaker": "ela",
					"type": "direction",
					"spot": [
						5,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "길을 잃지 말아라. 이곳은… 모든 것을 집어삼키는 곳.",
						"english": "Don't get lost. This place... devours everything.",
						"japanese": "道に迷うな。ここは… 全てを飲み込む場所だ。",
						"chinese": "别迷路了。这里… 吞噬一切。",
						"french": "Ne te perds pas. Cet endroit... dévore tout.",
						"spanish": "No te pierdas. Este lugar... lo devora todo.",
						"vietnamese": "Đừng lạc đường. Nơi đây… nuốt chửng mọi thứ.",
						"thai": "อย่าหลงทาง ที่นี่... กลืนกินทุกสิ่ง",
						"hindi": "खो मत जाना। यह जगह... सब कुछ निगल जाती है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리지?",
						"english": "What was that sound?",
						"japanese": "何の音だ？",
						"chinese": "什么声音？",
						"french": "Qu'est-ce que c'était ?",
						"spanish": "¿Qué fue eso?",
						"vietnamese": "Tiếng gì vậy?",
						"thai": "เสียงอะไร?",
						"hindi": "वह क्या आवाज थी?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "낡은 주술 도구 잔해가 숲 곳곳에 널려 있었다. 불길한 예감이 숲을 감쌌다.",
						"english": "Remnants of old ritual tools were scattered throughout the forest. An ominous premonition enveloped the forest.",
						"japanese": "古い呪術道具の残骸が森のあちこちに散らばっていた。不吉な予感が森を包み込んだ。",
						"chinese": "废弃的咒术工具残骸散落在森林各处。一股不祥的预感笼罩着森林。",
						"french": "Des vestiges d'anciens outils rituels étaient éparpillés dans la forêt. Une prémonition sinistre enveloppait les lieux.",
						"spanish": "Restos de antiguas herramientas rituales estaban esparcidos por el bosque. Una premonición ominosa envolvía la selva.",
						"vietnamese": "Tàn tích của những công cụ tế lễ cũ nằm rải rác khắp khu rừng. Một điềm báo chẳng lành bao trùm lấy khu rừng.",
						"thai": "ซากเครื่องมือพิธีกรรมเก่าแก่กระจัดกระจายทั่วป่า ลางสังหรณ์ร้ายปกคลุมป่า",
						"hindi": "पुराने अनुष्ठान उपकरणों के अवशेष जंगल भर में बिखरे हुए थे। एक अशुभ पूर्वज्ञान ने जंगल को घेर लिया था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 감시자는 거대한 힘으로 탐험대를 몰아붙였다.",
						"english": "The forest guardian overwhelmed the expedition with immense power.",
						"japanese": "森の監視者は巨大な力で探検隊を圧倒した。",
						"chinese": "森林守护者以巨大的力量击退了探险队。",
						"french": "Le gardien de la forêt a submergé l'expédition avec une puissance immense.",
						"spanish": "El guardián del bosque abrumó a la expedición con un poder inmenso.",
						"vietnamese": "Người canh gác rừng đã áp đảo đội thám hiểm bằng sức mạnh khổng lồ.",
						"thai": "ผู้พิทักษ์ป่าผลักดันคณะสำรวจด้วยพลังอันมหาศาล.",
						"hindi": "वन के संरक्षक ने विशाल शक्ति से अभियान दल को पराजित कर दिया。"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들… 이곳을 떠나라.",
						"english": "Fools... Leave this place.",
						"japanese": "愚か者たちめ… ここを去れ。",
						"chinese": "愚蠢的家伙们… 离开这里吧。",
						"french": "Fous... Quittez ces lieux.",
						"spanish": "Necios... Abandonad este lugar.",
						"vietnamese": "Lũ ngu ngốc... Hãy rời khỏi đây.",
						"thai": "พวกโง่เง่า... จงไปจากที่นี่ซะ",
						"hindi": "मूर्खों... इस जगह को छोड़ दो।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았다!",
						"english": "Damn it... It's not over yet!",
						"japanese": "くそ… まだ… 終わってない！",
						"chinese": "该死… 还没… 结束！",
						"french": "Zut... Ce n'est pas... encore fini !",
						"spanish": "Maldita sea... ¡Aún no... ha terminado!",
						"vietnamese": "Chết tiệt... Vẫn chưa... kết thúc!",
						"thai": "บ้าจริง... ยัง... ไม่จบ!",
						"hindi": "धिक्कार है... अभी तक... खत्म नहीं हुआ!"
					}
				},
				{
					"action": "enter",
					"speaker": "ivy",
					"type": "direction",
					"spot": [
						1,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 숲은 너희를 받아들이지 않는다.",
						"english": "This forest does not accept you.",
						"japanese": "この森は貴様らを受け入れぬ。",
						"chinese": "这片森林不接受你们。",
						"french": "Cette forêt ne vous accepte pas.",
						"spanish": "Este bosque no os acepta.",
						"vietnamese": "Khu rừng này không chấp nhận các ngươi.",
						"thai": "ป่าแห่งนี้ไม่ต้อนรับพวกเจ้า",
						"hindi": "यह जंगल तुम्हें स्वीकार नहीं करता।"
					},
					"speaker": "ivy",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 더욱 깊어졌다. 음울한 그림자가 드리웠다.",
						"english": "The forest grew deeper. Gloomy shadows loomed.",
						"japanese": "森はさらに深く、陰鬱な影が差し込んでいた。",
						"chinese": "森林变得更深了。阴沉的阴影笼罩着。",
						"french": "La forêt s'épaississait. Des ombres lugubres planaient.",
						"spanish": "El bosque se hizo más profundo. Sombras sombrías se cernían.",
						"vietnamese": "Khu rừng càng trở nên sâu thẳm. Những bóng đen u ám bao trùm.",
						"thai": "ป่าลึกขึ้นเรื่อยๆ เงาทมึนทอดยาว",
						"hindi": "जंगल और गहरा होता गया। उदास परछाइयां मंडरा रही थीं।"
					}
				},
				{
					"speaker": "ivy",
					"action": "enter",
					"type": "direction",
					"spot": [
						1,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "더 이상 오지 마라. 이 숲의 평화를 깨지 마.",
						"english": "Come no further. Do not disturb the peace of this forest.",
						"japanese": "これ以上来るな。この森の平和を乱すな。",
						"chinese": "别再过来了。不要打破这片森林的宁静。",
						"french": "N'approchez pas. Ne troublez pas la paix de cette forêt.",
						"spanish": "No vengáis más. No perturbéis la paz de este bosque.",
						"vietnamese": "Đừng đến gần nữa. Đừng phá vỡ sự bình yên của khu rừng này.",
						"thai": "อย่าเข้ามาอีก. อย่าทำลายความสงบของป่านี้.",
						"hindi": "और आगे मत आओ। इस वन की शांति भंग मत करो。"
					},
					"speaker": "ivy",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우린 진실을 찾으러 왔다.",
						"english": "We came seeking the truth.",
						"japanese": "我々は真実を求めて来た。",
						"chinese": "我们为寻求真相而来。",
						"french": "Nous sommes venus chercher la vérité.",
						"spanish": "Vinimos en busca de la verdad.",
						"vietnamese": "Chúng tôi đến để tìm sự thật.",
						"thai": "เรามาเพื่อค้นหาความจริง.",
						"hindi": "हम सच की तलाश में आए हैं।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "너희는 그저 불청객일 뿐. 당장 물러가라!",
						"english": "You are merely uninvited guests. Withdraw at once!",
						"japanese": "お前たちはただの招かれざる客だ。直ちに去れ！",
						"chinese": "你们不过是不速之客。立刻离开！",
						"french": "Vous n'êtes que des intrus. Retirez-vous immédiatement !",
						"spanish": "Solo sois intrusos. ¡Retiraos de inmediato!",
						"vietnamese": "Các ngươi chỉ là những vị khách không mời. Rút lui ngay lập tức!",
						"thai": "พวกเจ้าเป็นแค่แขกไม่ได้รับเชิญ. ถอยไปเดี๋ยวนี้!",
						"hindi": "तुम बस बिन बुलाए मेहमान हो। तुरंत पीछे हट जाओ!"
					},
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그림자 속에서 거대한 적이 모습을 드러냈다.",
						"english": "A colossal enemy emerged from the shadows.",
						"japanese": "影の中から巨大な敵が姿を現した。",
						"chinese": "一个巨大的敌人在阴影中现身。",
						"french": "Un ennemi colossal a émergé des ombres.",
						"spanish": "Un enemigo colosal emergió de las sombras.",
						"vietnamese": "Một kẻ thù khổng lồ xuất hiện từ trong bóng tối.",
						"thai": "ศัตรูขนาดมหึมาปรากฏตัวออกมาจากเงามืด.",
						"hindi": "एक विशालकाय शत्रु छाया से प्रकट हुआ।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "침입자들은… 제거해야 한다.",
						"english": "Intruders… must be eliminated.",
						"japanese": "侵入者は…排除せねばならない。",
						"chinese": "入侵者…必须被清除。",
						"french": "Les intrus… doivent être éliminés.",
						"spanish": "Los intrusos… deben ser eliminados.",
						"vietnamese": "Những kẻ xâm nhập… phải bị loại bỏ.",
						"thai": "ผู้บุกรุก… ต้องถูกกำจัด.",
						"hindi": "घुसपैठियों को… खत्म करना होगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 숲의 고통은… 끝나지 않는다.",
						"english": "Ugh… The forest's suffering… never ends.",
						"japanese": "くっ…森の苦痛は…終わらない。",
						"chinese": "呃…森林的痛苦…永无止境。",
						"french": "Argh… La souffrance de la forêt… ne finit jamais.",
						"spanish": "Uf… El sufrimiento del bosque… no termina.",
						"vietnamese": "Khụ… Nỗi đau của khu rừng… không bao giờ kết thúc.",
						"thai": "อึก… ความทุกข์ทรมานของป่า… ไม่สิ้นสุด.",
						"hindi": "उफ़… वन का कष्ट… समाप्त नहीं होता।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "숲의 고통? 무슨 말이지?",
						"english": "The forest's suffering? What do you mean?",
						"japanese": "森の苦痛？どういう意味だ？",
						"chinese": "森林的痛苦？什么意思？",
						"french": "La souffrance de la forêt ? Qu'est-ce que tu veux dire ?",
						"spanish": "El sufrimiento del bosque? ¿Qué quieres decir?",
						"vietnamese": "Nỗi đau của khu rừng? Ý ngươi là sao?",
						"thai": "ความทุกข์ทรมานของป่า? หมายความว่าอะไร?",
						"hindi": "वन का कष्ट? क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲 한쪽에서 푸른 곰팡이가 꿈틀거렸다. 숲의 고통이 실체화되고 있었다.",
						"english": "Green mold writhed on one side of the forest. The forest's suffering was materializing.",
						"japanese": "森の一角で青いカビが蠢いていた。森の苦痛が実体化しつつあった。",
						"chinese": "森林的一侧，蓝色霉菌正在蠕动。森林的痛苦正在实体化。",
						"french": "Une moisissure verte rampait d'un côté de la forêt. La souffrance de la forêt se matérialisait.",
						"spanish": "Un moho verde se retorcía en un lado del bosque. El sufrimiento del bosque se estaba materializando.",
						"vietnamese": "Nấm mốc xanh đang uốn lượn ở một phía của khu rừng. Nỗi đau của khu rừng đang dần hiện hữu.",
						"thai": "ราสีเขียวเลื้อยอยู่ด้านหนึ่งของป่า. ความทุกข์ทรมานของป่ากำลังเป็นรูปธรรม.",
						"hindi": "वन के एक ओर हरी फफूंद रेंग रही थी। वन का कष्ट साकार हो रहा था।"
					}
				},
				{
					"speaker": "ivy",
					"action": "enter",
					"type": "direction",
					"spot": [
						1,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "숲이… 병들고 있어. 너희도 곧 알게 될 거다.",
						"english": "The forest… is sick. You will soon know.",
						"japanese": "森が…病んでいる。お前たちもじきに分かるだろう。",
						"chinese": "森林…病了。你们很快就会知道的。",
						"french": "La forêt… est malade. Vous le découvrirez bientôt.",
						"spanish": "El bosque… está enfermo. Vosotros también lo sabréis pronto.",
						"vietnamese": "Khu rừng… đang bị bệnh. Các ngươi rồi cũng sẽ sớm biết thôi.",
						"thai": "ป่า… กำลังป่วย. พวกเจ้าเองก็จะรู้ในไม่ช้า.",
						"hindi": "वन… बीमार हो रहा है। तुम भी जल्द जान जाओगे।"
					},
					"speaker": "ivy"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "숲은 더욱 깊고 어두워졌다. 마치 오래된 비밀을 감추려는 듯.",
						"english": "The forest grew deeper and darker, as if trying to hide an ancient secret.",
						"japanese": "森はさらに深く暗くなった。まるで古き秘密を隠そうとするかのように。",
						"chinese": "森林变得更加幽深黑暗，仿佛要隐藏一个古老的秘密。",
						"french": "La forêt devint plus profonde et plus sombre, comme si elle tentait de cacher un ancien secret.",
						"spanish": "El bosque se volvió más profundo y oscuro, como si quisiera ocultar un antiguo secreto.",
						"vietnamese": "Khu rừng trở nên sâu thẳm và tăm tối hơn, như thể muốn che giấu một bí mật cổ xưa.",
						"thai": "ป่าลึกและมืดมิดลงไปอีก ราวกับจะซ่อนความลับเก่าแก่บางอย่าง",
						"hindi": "जंगल और गहरा तथा अंधेरा हो गया, मानो कोई पुराना रहस्य छिपाना चाहता हो।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "glen",
					"action": "enter"
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "거기… 누구시오? 나 말고 또 누가… 이 숲을 헤매는가.",
						"english": "Who... is there? Who else... wanders this forest besides me?",
						"japanese": "そこに… 誰だ？私以外に誰が… この森を彷徨っているのか。",
						"chinese": "那里… 是谁？除了我… 还有谁在这片森林里游荡？",
						"french": "Qui... est là ? Qui d'autre... erre dans cette forêt à part moi ?",
						"spanish": "¿Quién... anda ahí? ¿Quién más... vaga por este bosque además de mí?",
						"vietnamese": "Kia... là ai? Ai nữa... đang lang thang trong khu rừng này ngoài ta?",
						"thai": "นั่น... ใครน่ะ? มีใครอีก... กำลังหลงทางในป่านี้ นอกจากข้า?",
						"hindi": "वहाँ… कौन है? मेरे अलावा और कौन… इस जंगल में भटक रहा है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "貴方は…？",
						"chinese": "你是…？",
						"french": "Vous êtes… ?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Ngài là...?",
						"thai": "ท่านคือ...?",
						"hindi": "आप कौन हैं...?"
					}
				},
				{
					"content": {
						"korean": "나는 글렌. 그저 길을 잃은 떠돌이일 뿐… 이 숲에서 이상한 것을 주웠소.",
						"english": "I am Glenn. Just a lost wanderer... I found something strange in this forest.",
						"japanese": "私はグレン。ただの道に迷った旅人に過ぎない… この森で奇妙なものを拾ったのだ。",
						"chinese": "我是格伦。只是个迷路的流浪者… 我在这片森林里捡到了一个奇怪的东西。",
						"french": "Je suis Glenn. Juste un vagabond égaré... J'ai trouvé quelque chose d'étrange dans cette forêt.",
						"spanish": "Soy Glenn. Solo un vagabundo perdido... Encontré algo extraño en este bosque.",
						"vietnamese": "Tôi là Glenn. Chỉ là một kẻ lang thang lạc lối... Tôi đã nhặt được một thứ kỳ lạ trong khu rừng này.",
						"thai": "ข้าคือเกล็น เป็นเพียงนักเดินทางที่หลงทาง... ข้าเก็บของแปลกๆ ได้ในป่าแห่งนี้",
						"hindi": "मैं ग्लेन हूँ। बस एक खोया हुआ भटकने वाला… मुझे इस जंगल में कुछ अजीब मिला।"
					},
					"speaker": "glen",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이걸 보시오. 낡은 돌문양인데… 흐릿한 여인의 형상이 새겨져 있소.",
						"english": "Look at this. It's an old stone carving... with the faded figure of a woman etched into it.",
						"japanese": "これをご覧なさい。古びた石の模様なのだが… ぼんやりとした女性の姿が刻まれている。",
						"chinese": "看这个。这是一个古老的石刻图案… 刻着一个模糊的女性形象。",
						"french": "Regardez ceci. C'est une vieille gravure sur pierre... avec la silhouette estompée d'une femme gravée dessus.",
						"spanish": "Mira esto. Es un antiguo grabado de piedra... con la figura desvanecida de una mujer grabada.",
						"vietnamese": "Hãy nhìn cái này. Đây là một hoa văn đá cũ kỹ... có khắc hình bóng mờ nhạt của một người phụ nữ.",
						"thai": "ดูนี่สิ มันเป็นลวดลายหินเก่าแก่... มีรูปสลักผู้หญิงเลือนรางอยู่",
						"hindi": "इसे देखो। यह एक पुराना पत्थर का नक्काशी है… जिस पर एक धुंधली महिला की आकृति खुदी हुई है।"
					},
					"speaker": "glen"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "돌문양? 여인의 형상이라…",
						"english": "Stone carving? The figure of a woman, you say...",
						"japanese": "石の模様？女性の姿だと…",
						"chinese": "石刻图案？女性形象…",
						"french": "Une gravure sur pierre ? La silhouette d'une femme, dites-vous...",
						"spanish": "¿Grabado de piedra? La figura de una mujer, dices...",
						"vietnamese": "Hoa văn đá? Hình bóng người phụ nữ à...",
						"thai": "ลวดลายหิน? รูปสลักผู้หญิงรึ...",
						"hindi": "पत्थर का नक्काशी? एक महिला की आकृति, कहते हो…"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "숲에 전해오는 비극이 있소. 오래전, 숲을 지키던 여인이 있었는데…",
						"english": "There's a tragedy told in this forest. Long ago, there was a woman who protected the forest...",
						"japanese": "この森には伝わる悲劇がある。昔々、森を守っていた女人がいたのだが…",
						"chinese": "这片森林流传着一个悲剧。很久以前，曾有一位守护森林的女子…",
						"french": "Il y a une tragédie contée dans cette forêt. Il y a longtemps, il y avait une femme qui protégeait la forêt...",
						"spanish": "Hay una tragedia que se cuenta en este bosque. Hace mucho tiempo, hubo una mujer que protegía el bosque...",
						"vietnamese": "Có một bi kịch được kể lại trong khu rừng này. Rất lâu trước đây, có một người phụ nữ đã bảo vệ khu rừng...",
						"thai": "ในป่าแห่งนี้มีโศกนาฏกรรมเล่าขานกันมา นานมาแล้ว มีหญิงสาวผู้หนึ่งคอยปกป้องป่าแห่งนี้...",
						"hindi": "इस जंगल में एक त्रासदी की कहानी है। बहुत पहले, एक महिला थी जो जंगल की रक्षा करती थी…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "그녀의 희생이… 숲을 영원히 고통에 묶어버렸다는군.",
						"english": "Her sacrifice... bound the forest to eternal suffering.",
						"japanese": "彼女の犠牲が…森を永遠の苦痛に縛り付けたという。",
						"chinese": "她的牺牲…将森林永远束缚在了痛苦之中。",
						"french": "Son sacrifice... a lié la forêt à une souffrance éternelle.",
						"spanish": "Su sacrificio... encadenó al bosque a un sufrimiento eterno.",
						"vietnamese": "Sự hy sinh của cô ấy... đã trói buộc khu rừng vào nỗi đau vĩnh cửu.",
						"thai": "การเสียสละของนาง... ผูกมัดป่าไว้กับความทุกข์ทรมานชั่วนิรันดร์",
						"hindi": "उसका बलिदान... जंगल को अनंत पीड़ा में बाँध गया।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 비극이… 숲을 병들게 하는 건가?",
						"english": "Does that tragedy... sicken the forest?",
						"japanese": "その悲劇が…森を病ませているのか？",
						"chinese": "那个悲剧…让森林病了吗？",
						"french": "Cette tragédie... rend-elle la forêt malade ?",
						"spanish": "Esa tragedia... ¿está enfermando al bosque?",
						"vietnamese": "Bi kịch đó... đang khiến khu rừng mục nát sao?",
						"thai": "โศกนาฏกรรมนั้น... ทำให้ป่าป่วยไข้หรือ?",
						"hindi": "क्या वह त्रासदी... जंगल को बीमार कर रही है?"
					}
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "진실은 기억 속에 잠들어 있소. 깨우지 않는 것이… 때론 평화일지도 모르지.",
						"english": "The truth sleeps in memories. Perhaps, not waking it... is sometimes peace.",
						"japanese": "真実は記憶の中に眠っている。目覚めさせないことこそ…時に平和なのかもしれない。",
						"chinese": "真相沉睡在记忆中。不唤醒它…有时或许就是和平。",
						"french": "La vérité dort dans les souvenirs. Ne pas l'éveiller... est parfois la paix.",
						"spanish": "La verdad duerme en los recuerdos. Quizás, no despertarla... sea a veces la paz.",
						"vietnamese": "Sự thật ngủ yên trong ký ức. Có lẽ, không đánh thức nó... đôi khi là bình yên.",
						"thai": "ความจริงหลับใหลอยู่ในความทรงจำ การไม่ปลุกมันขึ้นมา... บางครั้งอาจเป็นสันติสุข",
						"hindi": "सच यादों में सोया है। शायद, उसे न जगाना... कभी-कभी शांति है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 적이 나타나 앞을 가로막았다. 숲의 비밀을 지키려는 듯.",
						"english": "An unknown enemy appeared, blocking the way. As if to protect the forest's secret.",
						"japanese": "正体不明の敵が現れ、道を阻んだ。森の秘密を守るかのように。",
						"chinese": "一个不明身份的敌人出现，挡住了去路。仿佛是为了守护森林的秘密。",
						"french": "Un ennemi inconnu est apparu, bloquant le chemin. Comme pour protéger le secret de la forêt.",
						"spanish": "Un enemigo desconocido apareció, bloqueando el paso. Como si quisiera proteger el secreto del bosque.",
						"vietnamese": "Một kẻ địch không rõ danh tính xuất hiện, chặn đường. Như thể muốn bảo vệ bí mật của khu rừng.",
						"thai": "ศัตรูนิรนามปรากฏตัวขึ้น ขวางทางไว้ ราวกับจะปกป้องความลับของป่า",
						"hindi": "एक अज्ञात शत्रु प्रकट हुआ, रास्ता रोकते हुए। जैसे जंगल का रहस्य बचाने के लिए।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "더 이상… 발을 들이지 마라.",
						"english": "Do not... step any further.",
						"japanese": "これ以上…足を踏み入れるな。",
						"chinese": "不要再…踏入。",
						"french": "Ne... t'avance pas plus.",
						"spanish": "No... des un paso más.",
						"vietnamese": "Đừng... bước vào sâu hơn nữa.",
						"thai": "อย่า... ก้าวล่วงไปอีกเลย",
						"hindi": "और... कदम मत बढ़ाओ।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 적은 숲의 오랜 비밀처럼 굳건했다.",
						"english": "The unknown enemy was as steadfast as the forest's ancient secret.",
						"japanese": "正体不明の敵は、森の古き秘密のように固く立ちはだかった。",
						"chinese": "那个不明身份的敌人，像森林古老的秘密一样坚不可摧。",
						"french": "L'ennemi inconnu était aussi inébranlable que l'ancien secret de la forêt.",
						"spanish": "El enemigo desconocido era tan inquebrantable como el antiguo secreto del bosque.",
						"vietnamese": "Kẻ địch không rõ danh tính kiên cố như bí mật lâu đời của khu rừng.",
						"thai": "ศัตรูนิรนามแข็งแกร่งราวกับความลับเก่าแก่ของป่า",
						"hindi": "अज्ञात शत्रु जंगल के प्राचीन रहस्य की तरह दृढ़ था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가 알면 안 되는 진실이다… 돌아가라.",
						"english": "This is a truth you shouldn't know... Turn back.",
						"japanese": "お前が知ってはならぬ真実だ… 戻れ。",
						"chinese": "这是你不该知道的真相… 回去吧。",
						"french": "C'est une vérité que tu ne dois pas connaître… Fuis.",
						"spanish": "Esta es una verdad que no debes saber... Vuelve.",
						"vietnamese": "Đây là sự thật ngươi không nên biết… Hãy quay về.",
						"thai": "นี่คือความจริงที่เจ้าไม่ควรล่วงรู้... จงกลับไป",
						"hindi": "यह ऐसा सच है जो तुम्हें नहीं जानना चाहिए... लौट जाओ।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 이대로 포기할 순 없어!",
						"english": "Ugh... I can't give up like this!",
						"japanese": "くっ… このまま諦めるわけにはいかない！",
						"chinese": "呃… 不能就这样放弃！",
						"french": "Urgh… Je ne peux pas abandonner comme ça !",
						"spanish": "Ugh... ¡No puedo rendirme así!",
						"vietnamese": "Khốn kiếp… Không thể bỏ cuộc thế này được!",
						"thai": "อึก... จะยอมแพ้แบบนี้ไม่ได้!",
						"hindi": "धत्त... मैं ऐसे हार नहीं मान सकता!"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "glen",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "glen",
					"content": {
						"korean": "조심하시오… 이 숲은… 모든 것을 집어삼키려 하오.",
						"english": "Be careful… This forest… seeks to devour all.",
						"japanese": "気をつけよ… この森は… 全てを飲み込もうとしている。",
						"chinese": "小心… 这片森林… 正试图吞噬一切。",
						"french": "Prenez garde… Cette forêt… cherche à tout dévorer.",
						"spanish": "Ten cuidado… Este bosque… intenta devorarlo todo.",
						"vietnamese": "Hãy cẩn thận… Khu rừng này… đang muốn nuốt chửng mọi thứ.",
						"thai": "จงระวัง... ป่าแห่งนี้... กำลังจะกลืนกินทุกสิ่ง",
						"hindi": "सावधान रहें... यह जंगल... सब कुछ निगलने पर तुला है।"
					}
				}
			],
			"id": 5,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 숲의… 깊은 곳으로… 가지 마라…",
						"english": "Urgh... Don't... go... into the deep... forest...",
						"japanese": "くっ…森の…奥へは…行くな…",
						"chinese": "呃…别…去…森林深处…",
						"french": "Urgh... Ne... va pas... dans les profondeurs... de la forêt...",
						"spanish": "Argh... No... vayas... al corazón... del bosque...",
						"vietnamese": "Ư... Đừng... đi... vào sâu... trong rừng...",
						"thai": "อึก... อย่า... ไป... ที่ลึก... ของป่า...",
						"hindi": "उह... जंगल के... गहरे... हिस्से में... मत जाओ..."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "도대체 숲의 깊은 곳에 뭐가 있다는 거야!",
						"english": "What on earth is in the deep part of the forest?!",
						"japanese": "一体、森の奥に何があるんだ！",
						"chinese": "森林深处到底有什么？！",
						"french": "Mais qu'y a-t-il donc au plus profond de la forêt ?!",
						"spanish": "¡¿Qué diablos hay en lo profundo del bosque?!",
						"vietnamese": "Rốt cuộc thì có gì ở sâu trong khu rừng đó chứ!",
						"thai": "ในส่วนลึกของป่ามีอะไรกันแน่!",
						"hindi": "आखिर जंगल के गहरे हिस्से में क्या है!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 적 뒤로 숲의 길이 다시 열렸다. 그러나 알 수 없는 불안감이 맴돌았다.",
						"english": "Behind the fallen enemy, the forest path reopened. But an unknown unease lingered.",
						"japanese": "倒れた敵の向こうに、森の道が再び開かれた。しかし、得体の知れない不安感が漂っていた。",
						"chinese": "倒下的敌人身后，森林的道路再次开启。然而，一种莫名的不安感萦绕不散。",
						"french": "Derrière l'ennemi vaincu, le chemin de la forêt s'est rouvert. Mais une inquiétude inconnue planait.",
						"spanish": "Tras el enemigo caído, el camino del bosque se reabrió. Pero una inquietud desconocida persistía.",
						"vietnamese": "Phía sau kẻ địch đã ngã xuống, con đường rừng lại mở ra. Nhưng một nỗi bất an không rõ cứ lảng vảng.",
						"thai": "เบื้องหลังศัตรูที่ล้มลง เส้นทางในป่าก็เปิดออกอีกครั้ง ทว่าความไม่สบายใจที่ไม่รู้จักยังคงค้างอยู่",
						"hindi": "गिरे हुए शत्रु के पीछे, जंगल का रास्ता फिर से खुल गया। लेकिन एक अज्ञात बेचैनी छाई रही।"
					}
				},
				{
					"action": "enter",
					"speaker": "glen",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그 여인의 비극이… 이 숲의 그림자를 드리운 것이오.",
						"english": "That woman's tragedy... cast a shadow over this forest.",
						"japanese": "あの女人の悲劇が…この森に影を落としたのだ。",
						"chinese": "那个女人的悲剧…给这片森林投下了阴影。",
						"french": "La tragédie de cette femme... a jeté une ombre sur cette forêt.",
						"spanish": "La tragedia de esa mujer... proyectó una sombra sobre este bosque.",
						"vietnamese": "Bi kịch của người phụ nữ đó... đã phủ bóng lên khu rừng này.",
						"thai": "โศกนาฏกรรมของหญิงผู้นั้น... ทอดเงาเหนือป่าแห่งนี้",
						"hindi": "उस महिला की त्रासदी... इस जंगल पर एक छाया डाल गई।"
					},
					"speaker": "glen"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 소리조차 없는 깊은 침묵에 잠겼다. 생명체 하나 없는 기묘한 공간.",
						"english": "The forest was plunged into a deep, soundless silence. A strange space devoid of life.",
						"japanese": "森は音すらなく深い沈黙に包まれた。生命一つない奇妙な空間。",
						"chinese": "森林陷入了深沉而无声的寂静。一个没有任何生命的诡异空间。",
						"french": "La forêt était plongée dans un silence profond et sans son. Un espace étrange, dépourvu de vie.",
						"spanish": "El bosque se sumergió en un profundo silencio, sin un solo sonido. Un espacio extraño y sin vida.",
						"vietnamese": "Rừng chìm vào tĩnh lặng sâu thẳm, không một tiếng động. Một không gian kỳ lạ không có sự sống.",
						"thai": "ป่าจมดิ่งสู่ความเงียบงัน ไร้ซึ่งเสียงใดๆ พื้นที่ประหลาดที่ปราศจากสิ่งมีชีวิต",
						"hindi": "जंगल गहरी, निःशब्द शांति में डूब गया था। एक अजीबोगरीब जगह जहाँ जीवन का नामोनिशान नहीं था।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이상해… 왜 이렇게 조용하지?",
						"english": "Strange… Why is it so quiet?",
						"japanese": "おかしい… どうしてこんなに静かなんだ？",
						"chinese": "奇怪… 为什么这么安静？",
						"french": "Étrange… Pourquoi est-ce si silencieux ?",
						"spanish": "Extraño… ¿Por qué está tan silencioso?",
						"vietnamese": "Kỳ lạ thật… Sao lại yên tĩnh thế này?",
						"thai": "แปลกจัง... ทำไมถึงเงียบแบบนี้?",
						"hindi": "अजीब है... इतनी शांति क्यों है?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						1,
						3
					],
					"speaker": "ivy",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivy",
					"content": {
						"korean": "이곳은… 숲의 가장 아픈 기억이 있는 곳이다.",
						"english": "This place… holds the forest's most painful memories.",
						"japanese": "ここは… 森の最も痛ましい記憶がある場所だ。",
						"chinese": "这里… 承载着森林最痛苦的记忆。",
						"french": "Cet endroit… abrite les souvenirs les plus douloureux de la forêt.",
						"spanish": "Este lugar… guarda los recuerdos más dolorosos del bosque.",
						"vietnamese": "Nơi đây… là nơi chứa đựng những ký ức đau khổ nhất của khu rừng.",
						"thai": "ที่แห่งนี้... คือที่ที่เก็บความทรงจำอันเจ็บปวดที่สุดของป่า",
						"hindi": "यह जगह... जंगल की सबसे दर्दनाक यादों का घर है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 일이 있었던 거지?",
						"english": "What happened?",
						"japanese": "何があったんだ？",
						"chinese": "发生什么事了？",
						"french": "Que s'est-il passé ?",
						"spanish": "¿Qué pasó?",
						"vietnamese": "Chuyện gì đã xảy ra?",
						"thai": "เกิดอะไรขึ้น?",
						"hindi": "क्या हुआ था?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "오래전… 숲을 지키려던 모든 것이… 이곳에서 사라졌다.",
						"english": "Long ago… all that sought to protect the forest… vanished here.",
						"japanese": "ずっと昔… 森を守ろうとした全てのものが… ここで消え去った。",
						"chinese": "很久以前… 所有试图守护森林的一切… 都消失在了这里。",
						"french": "Il y a longtemps… tout ce qui cherchait à protéger la forêt… a disparu ici.",
						"spanish": "Hace mucho tiempo… todo lo que intentó proteger el bosque… desapareció aquí.",
						"vietnamese": "Rất lâu rồi… mọi thứ từng muốn bảo vệ khu rừng… đã biến mất ở đây.",
						"thai": "นานมาแล้ว... ทุกสิ่งที่พยายามปกป้องป่า... ได้หายไปที่นี่",
						"hindi": "बहुत पहले... जंगल की रक्षा करने वाला सब कुछ... यहीं गायब हो गया था।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "숲의 침묵을 깨고 거대한 존재가 나타났다. 깊은 분노를 품은 듯.",
						"english": "Breaking the forest's silence, a colossal entity appeared. Seemingly brimming with deep rage.",
						"japanese": "森の沈黙を破り、巨大な存在が現れた。深い怒りを宿しているかのように。",
						"chinese": "打破森林的寂静，一个巨大的存在出现了。似乎带着深深的愤怒。",
						"french": "Brisant le silence de la forêt, une entité colossale apparut. Semblant emplie d'une rage profonde.",
						"spanish": "Rompiendo el silencio del bosque, apareció una entidad colosal. Parecía rebosar de una profunda ira.",
						"vietnamese": "Phá vỡ sự im lặng của rừng, một thực thể khổng lồ xuất hiện. Dường như mang trong mình cơn thịnh nộ sâu sắc.",
						"thai": "ทำลายความเงียบงันของป่า สิ่งมีชีวิตขนาดมหึมาปรากฏขึ้น ราวกับเต็มไปด้วยโทสะอันลึกซึ้ง",
						"hindi": "जंगल की चुप्पी तोड़कर, एक विशालकाय अस्तित्व प्रकट हुआ। मानो वह गहरे क्रोध से भरा हो।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "다가오지 마라… 더 이상의 고통은 없다.",
						"english": "Don't come closer… No more pain.",
						"japanese": "近づくな… これ以上の苦痛はない。",
						"chinese": "别过来… 不会有更多的痛苦了。",
						"french": "N'approche pas… Plus de souffrance.",
						"spanish": "No te acerques… No más dolor.",
						"vietnamese": "Đừng đến gần… Không còn đau khổ nào nữa.",
						"thai": "อย่าเข้ามาใกล้... ไม่มีความเจ็บปวดใดอีกแล้ว",
						"hindi": "पास मत आओ... अब और पीड़ा नहीं।"
					}
				}
			],
			"id": 9,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 고통은 거대한 힘으로 탐험대를 짓눌렀다.",
						"english": "The forest's agony crushed the expedition with immense power.",
						"japanese": "森の苦痛が、巨大な力で探検隊を押し潰した。",
						"chinese": "森林的痛苦，以巨大的力量镇压了探险队。",
						"french": "L'agonie de la forêt écrasa l'expédition avec une force immense.",
						"spanish": "La agonía del bosque aplastó a la expedición con un poder inmenso.",
						"vietnamese": "Nỗi đau của khu rừng đã đè bẹp đoàn thám hiểm bằng một sức mạnh khủng khiếp.",
						"thai": "ความเจ็บปวดของป่าได้บดขยี้คณะสำรวจด้วยพลังอันมหาศาล",
						"hindi": "जंगल की पीड़ा ने अभियान दल को अथाह शक्ति से कुचल दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너희는… 숲의 비극을 바꿀 수 없다.",
						"english": "You… you cannot change the forest's tragedy.",
						"japanese": "お前たちは…森の悲劇を変えることはできない。",
						"chinese": "你们…无法改变森林的悲剧。",
						"french": "Vous… vous ne pouvez pas changer la tragédie de la forêt.",
						"spanish": "Vosotros… no podéis cambiar la tragedia del bosque.",
						"vietnamese": "Các ngươi… không thể thay đổi bi kịch của khu rừng.",
						"thai": "พวกเจ้า… ไม่สามารถเปลี่ยนแปลงโศกนาฏกรรมของป่าได้",
						"hindi": "तुम… जंगल की त्रासदी को नहीं बदल सकते।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어! 우리는 포기하지 않아!",
						"english": "It's not… over yet! We won't give up!",
						"japanese": "まだ…終わってない！我々は諦めない！",
						"chinese": "还没有…结束！我们不会放弃！",
						"french": "Ce n'est pas… fini ! Nous n'abandonnerons pas !",
						"spanish": "¡Aún no… ha terminado! ¡No nos rendiremos!",
						"vietnamese": "Vẫn chưa… kết thúc đâu! Chúng ta sẽ không từ bỏ!",
						"thai": "ยัง… ไม่จบ! เราไม่ยอมแพ้!",
						"hindi": "अभी… ख़त्म नहीं हुआ! हम हार नहीं मानेंगे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						1,
						3
					],
					"speaker": "ivy",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이대로는… 안 돼. 더 강해져야 한다.",
						"english": "This won't do… We need to grow stronger.",
						"japanese": "このままでは…ダメだ。もっと強くなるんだ。",
						"chinese": "这样下去…不行。必须变得更强。",
						"french": "Ça ne suffit pas… Nous devons devenir plus forts.",
						"spanish": "Así no… No podemos seguir así. Debemos fortalecernos.",
						"vietnamese": "Cứ thế này… không được. Phải trở nên mạnh mẽ hơn.",
						"thai": "แบบนี้… ไม่ได้ เราต้องแข็งแกร่งขึ้น",
						"hindi": "यह ऐसे… नहीं चलेगा। हमें और मजबूत होना होगा।"
					},
					"speaker": "ivy",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크으… 이 분노는… 끝나지 않아…",
						"english": "Ugh… This rage… it never ends…",
						"japanese": "くぅ…この怒りは…終わらない…",
						"chinese": "嘶…这份愤怒…永无止境…",
						"french": "Ugh… Cette rage… elle ne finit jamais…",
						"spanish": "Uf… Esta furia… no tiene fin…",
						"vietnamese": "Khừ… Cơn giận này… không bao giờ kết thúc…",
						"thai": "อึก… ความโกรธนี้… ไม่มีวันสิ้นสุด…",
						"hindi": "उफ़… यह क्रोध… कभी ख़त्म नहीं होता…"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "대체 누가 숲을 이렇게 만들었나?",
						"english": "Who… who made the forest like this?",
						"japanese": "一体誰が森をこんな風にしたんだ？",
						"chinese": "究竟是谁…让森林变成这番模样？",
						"french": "Qui… qui a fait ça à la forêt ?",
						"spanish": "¿Quién… quién convirtió el bosque en esto?",
						"vietnamese": "Kẻ nào… đã biến khu rừng thành ra thế này?",
						"thai": "ใครกัน… ที่ทำให้ป่าเป็นแบบนี้?",
						"hindi": "किसने… किसने जंगल को ऐसा बनाया?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "적은 쓰러졌지만 숲의 침묵은 여전했다. 진실은 더 깊은 곳에 있었다.",
						"english": "The enemy fell, but the forest's silence remained. The truth lay deeper.",
						"japanese": "敵は倒れたが、森の沈黙は変わらなかった。真実はもっと深い場所に。",
						"chinese": "敌人倒下了，但森林依旧寂静。真相…隐藏在更深处。",
						"french": "L'ennemi est tombé, mais le silence de la forêt persistait. La vérité se cachait plus profondément.",
						"spanish": "El enemigo cayó, pero el silencio del bosque permaneció. La verdad yacía en lo más profundo.",
						"vietnamese": "Kẻ thù đã gục ngã, nhưng sự tĩnh lặng của khu rừng vẫn còn đó. Sự thật nằm sâu hơn nữa.",
						"thai": "ศัตรูล้มลง แต่ความเงียบของป่ายังคงอยู่ ความจริงซ่อนอยู่ในที่ลึกกว่านั้น",
						"hindi": "शत्रु गिर गया, लेकिन जंगल की ख़ामोशी बनी रही। सच्चाई और गहरी थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						1,
						3
					],
					"duration_ms": 500,
					"speaker": "ivy",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제… 마지막이다. 숲의 심장으로 가라.",
						"english": "Now… this is the end. Go to the heart of the forest.",
						"japanese": "さあ…最後だ。森の心臓へ向かえ。",
						"chinese": "现在…是时候了。前往森林之心。",
						"french": "Maintenant… c'est la fin. Allez au cœur de la forêt.",
						"spanish": "Ahora… es el final. Ve al corazón del bosque.",
						"vietnamese": "Giờ… là lúc cuối cùng. Hãy đến trái tim của khu rừng.",
						"thai": "ตอนนี้… นี่คือจุดจบ ไปยังใจกลางป่า",
						"hindi": "अब… यह अंतिम है। जंगल के हृदय में जाओ।"
					},
					"speaker": "ivy"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "결국… 너희는 숲의 비극을… 끝내는구나…",
						"english": "So... you finally end... the forest's tragedy...",
						"japanese": "「結局…お前たちは森の悲劇を…終わらせるのだな…」",
						"chinese": "最终…你们终结了…森林的悲剧…",
						"french": "Alors... vous finissez enfin... la tragédie de la forêt...",
						"spanish": "Así que... finalmente termináis... la tragedia del bosque...",
						"vietnamese": "Cuối cùng... các ngươi cũng chấm dứt... bi kịch của khu rừng...",
						"thai": "ในที่สุด... พวกเจ้าก็ยุติ... โศกนาฏกรรมของป่าลงได้...",
						"hindi": "तो... तुम आखिरकार... जंगल की त्रासदी को खत्म करते हो..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제… 숲은 평화를 찾을 수 있을까?",
						"english": "Now... can the forest find peace?",
						"japanese": "「これで…森は平和を見つけられるだろうか？」",
						"chinese": "现在…森林能找到平静吗？",
						"french": "Maintenant... la forêt peut-elle trouver la paix ?",
						"spanish": "¿Ahora... podrá el bosque encontrar la paz?",
						"vietnamese": "Giờ đây... liệu khu rừng có thể tìm thấy bình yên không?",
						"thai": "ตอนนี้... ป่าจะพบความสงบสุขได้แล้วหรือ?",
						"hindi": "अब... क्या जंगल शांति पा सकता है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "거대한 숲을 덮었던 그림자가 서서히 걷혔다. 길고 긴 밤이 끝나고 있었다.",
						"english": "The shadow that covered the vast forest slowly receded. The long, long night was ending.",
						"japanese": "「巨大な森を覆っていた影が徐々に晴れた。長く長い夜が終わろうとしていた。」",
						"chinese": "笼罩着巨大森林的阴影渐渐散去。漫漫长夜即将结束。",
						"french": "L'ombre qui recouvrait l'immense forêt s'est lentement dissipée. La longue, très longue nuit touchait à sa fin.",
						"spanish": "La sombra que cubría el vasto bosque se disipó lentamente. La larga, larga noche estaba terminando.",
						"vietnamese": "Bóng tối bao phủ khu rừng rộng lớn dần tan biến. Đêm dài bất tận sắp kết thúc.",
						"thai": "เงามืดที่ปกคลุมป่าอันกว้างใหญ่ค่อยๆ จางหายไป ราตรีอันยาวนานกำลังจะสิ้นสุดลง",
						"hindi": "विशाल जंगल पर छाए बादल धीरे-धीरे छँट गए। लंबी, लंबी रात खत्म हो रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"speaker": "ela",
					"action": "enter"
				},
				{
					"content": {
						"korean": "고맙다… 숲은 이제… 새로운 시작을 맞이할 것이다.",
						"english": "Thank you... The forest will now... embrace a new beginning.",
						"japanese": "「ありがとう…森は今…新たな始まりを迎えるだろう。」",
						"chinese": "谢谢…森林现在…将迎来新的开始。",
						"french": "Merci... La forêt va maintenant... embrasser un nouveau départ.",
						"spanish": "Gracias... El bosque ahora... abrazará un nuevo comienzo.",
						"vietnamese": "Cảm ơn... Giờ đây khu rừng... sẽ đón một khởi đầu mới.",
						"thai": "ขอบคุณ... ป่าแห่งนี้... จะได้พบกับจุดเริ่มต้นใหม่แล้ว",
						"hindi": "धन्यवाद... जंगल अब... एक नई शुरुआत करेगा।"
					},
					"speaker": "ela",
					"emotion": "happy",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 존재가 어둠 속에서 깨어났다.",
						"english": "Deepest in the forest. A colossal entity awakened in the darkness.",
						"japanese": "森の最も深い場所。巨大な存在が闇の中で目覚めた。",
						"chinese": "森林最深处。一个巨大的存在在黑暗中苏醒。",
						"french": "Au plus profond de la forêt. Une entité colossale s'éveilla dans l'obscurité.",
						"spanish": "En lo más profundo del bosque. Una entidad colosal despertó en la oscuridad.",
						"vietnamese": "Nơi sâu thẳm nhất của khu rừng. Một thực thể khổng lồ đã thức tỉnh trong bóng tối.",
						"thai": "ลึกที่สุดในป่า สิ่งมีชีวิตขนาดมหึมาตื่นขึ้นในความมืด",
						"hindi": "जंगल के सबसे गहरे में। एक विशालकाय सत्ता अंधेरे में जागृत हुई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "왔구나… 숲의 진실을 찾는 자들이여.",
						"english": "You've come… seekers of the forest's truth.",
						"japanese": "来たか…森の真実を求める者たちよ。",
						"chinese": "你们来了…探寻森林真相之人。",
						"french": "Vous êtes venus… chercheurs de la vérité de la forêt.",
						"spanish": "Habéis llegado… buscadores de la verdad del bosque.",
						"vietnamese": "Các ngươi đã đến… những kẻ tìm kiếm sự thật của khu rừng.",
						"thai": "มาแล้วสินะ… ผู้แสวงหาความจริงของป่า",
						"hindi": "तुम आ गए… जंगल की सच्चाई के खोजी।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 모든 것의 배후인가?",
						"english": "You... are behind everything?",
						"japanese": "「お前が…全ての黒幕なのか？」",
						"chinese": "你…是这一切的幕后黑手？",
						"french": "Tu... es derrière tout ça ?",
						"spanish": "¿Tú... eres el cerebro de todo?",
						"vietnamese": "Ngươi... là kẻ đứng sau mọi chuyện sao?",
						"thai": "เจ้า... คือเบื้องหลังของทุกสิ่งงั้นรึ?",
						"hindi": "तुम... हर चीज़ के पीछे हो?"
					}
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "나는 숲의 기억. 모든 고통과 비극의… 산 증인이다.",
						"english": "I am the forest's memory. The living witness... of all pain and tragedy.",
						"japanese": "「私は森の記憶。全ての苦痛と悲劇の…生ける証人だ。」",
						"chinese": "我是森林的记忆。所有痛苦和悲剧的…活生生的见证者。",
						"french": "Je suis la mémoire de la forêt. Le témoin vivant... de toute douleur et tragédie.",
						"spanish": "Soy la memoria del bosque. El testigo viviente... de todo dolor y tragedia.",
						"vietnamese": "Ta là ký ức của rừng. Nhân chứng sống... của mọi nỗi đau và bi kịch.",
						"thai": "ข้าคือความทรงจำแห่งป่า พยานผู้มีชีวิต... ของความเจ็บปวดและโศกนาฏกรรมทั้งมวล",
						"hindi": "मैं जंगल की याददाश्त हूँ। हर दर्द और त्रासदी का... जीवित गवाह।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "최종 보스가 거대한 힘을 드러냈다. 숲의 운명을 건 마지막 전투가 시작되었다.",
						"english": "The final boss revealed immense power. The last battle for the forest's fate has begun.",
						"japanese": "「ラスボスが巨大な力を現した。森の運命をかけた最後の戦いが始まった。」",
						"chinese": "最终Boss展现出巨大力量。赌上森林命运的最后一战开始了。",
						"french": "Le boss final a révélé une puissance immense. La dernière bataille pour le destin de la forêt a commencé.",
						"spanish": "El jefe final reveló un poder inmenso. La última batalla por el destino del bosque ha comenzado.",
						"vietnamese": "Trùm cuối đã phô diễn sức mạnh khổng lồ. Trận chiến cuối cùng định đoạt vận mệnh khu rừng đã bắt đầu.",
						"thai": "บอสสุดท้ายได้เผยพลังอันยิ่งใหญ่ การต่อสู้ครั้งสุดท้ายเพื่อชะตากรรมของป่าได้เริ่มต้นขึ้นแล้ว",
						"hindi": "अंतिम बॉस ने अपनी विशाल शक्ति का प्रदर्शन किया। जंगल के भाग्य के लिए अंतिम युद्ध शुरू हो गया है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 심장이 짓밟혔다. 모든 희망이 사라지는 듯했다.",
						"english": "The heart of the forest was crushed. All hope seemed lost.",
						"japanese": "「森の心臓が踏みにじられた。全ての希望が消え去るようだった。」",
						"chinese": "森林之心被践踏。所有希望似乎都消失了。",
						"french": "Le cœur de la forêt fut écrasé. Tout espoir semblait perdu.",
						"spanish": "El corazón del bosque fue aplastado. Toda esperanza parecía perdida.",
						"vietnamese": "Trái tim khu rừng đã bị chà đạp. Mọi hy vọng dường như tan biến.",
						"thai": "หัวใจของป่าถูกเหยียบย่ำ ความหวังทั้งหมดดูเหมือนจะหายไป",
						"hindi": "जंगल का दिल कुचल दिया गया। सारी उम्मीदें खत्म होती दिख रही थीं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들… 숲의 고통은… 영원할 것이다.",
						"english": "Fools... The forest's suffering... will be eternal.",
						"japanese": "「愚か者たちめ…森の苦痛は…永遠に続くだろう。」",
						"chinese": "愚蠢的家伙们…森林的痛苦…将永存。",
						"french": "Fous... La souffrance de la forêt... sera éternelle.",
						"spanish": "Insensatos... El sufrimiento del bosque... será eterno.",
						"vietnamese": "Lũ ngu ngốc... Nỗi đau của rừng... sẽ là vĩnh cửu.",
						"thai": "พวกโง่เง่า... ความเจ็บปวดของป่า... จะคงอยู่ตลอดไป",
						"hindi": "मूर्खों... जंगल का दर्द... शाश्वत रहेगा।"
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 이대로… 끝낼 순 없어!",
						"english": "Ugh... I can't... end it like this!",
						"japanese": "「くっ…このまま…終わらせるわけにはいかない！」",
						"chinese": "呃…不能就这么…结束！",
						"french": "Urgh... Je ne peux pas... finir comme ça !",
						"spanish": "Ugh... ¡No puedo... terminar así!",
						"vietnamese": "Khặc... không thể... kết thúc thế này được!",
						"thai": "อึก... จะจบลงแบบนี้... ไม่ได้เด็ดขาด!",
						"hindi": "उफ़... मैं इसे... ऐसे खत्म नहीं कर सकता!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						3
					],
					"speaker": "ela",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "아직… 끝나지 않았다. 숲은 너희를 기다린다.",
						"english": "It's not over yet... The forest awaits you.",
						"japanese": "まだ…終わってない。森がお前たちを待っている。",
						"chinese": "还没…结束。森林在等着你们。",
						"french": "Ce n'est pas encore fini... La forêt vous attend.",
						"spanish": "Aún no ha terminado... El bosque os espera.",
						"vietnamese": "Chưa… kết thúc đâu. Rừng đang chờ các ngươi.",
						"thai": "ยัง…ไม่จบป่ากำลังรอพวกเจ้าอยู่",
						"hindi": "अभी… ख़त्म नहीं हुआ है। जंगल तुम्हारा इंतज़ार कर रहा है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"짙은 안개 속, 숲은 더 깊은 침묵으로 감싸였다.",
			"길을 잃은 떠돌이의 속삭임이 오래된 진실을 깨운다.",
			"흐려진 여인의 형상. 숲의 비극이 서서히 모습을 드러내고 있었다.",
			"진실에 다가갈수록… 고통스러운 연민이 피어났다."
		],
		"english": [
			"In the thick fog, the forest was enveloped in deeper silence.",
			"The whispers of a lost wanderer awaken an ancient truth.",
			"A blurred female figure. The tragedy of the forest was slowly revealing itself.",
			"As I drew closer to the truth... a painful compassion bloomed."
		],
		"japanese": [
			"濃い霧の中、森はより深い沈黙に包まれた。",
			"道に迷った放浪者のささやきが、古き真実を呼び覚ます。",
			"ぼやけた女の姿。森の悲劇がゆっくりと姿を現し始めていた。",
			"真実に近づくほど… 苦痛なほどの憐憫が芽生えた。"
		],
		"chinese": [
			"浓雾之中，森林陷入了更深的寂静。",
			"迷失流浪者的低语，唤醒了古老的真相。",
			"模糊的女人身影。森林的悲剧正慢慢显现。",
			"越接近真相… 越是涌现出痛苦的怜悯。"
		],
		"french": [
			"Dans l'épais brouillard, la forêt était enveloppée d'un silence plus profond.",
			"Les murmures d'un vagabond égaré éveillent une ancienne vérité.",
			"Une silhouette féminine floue. La tragédie de la forêt se révélait lentement.",
			"À mesure que je me rapprochais de la vérité... une compassion douloureuse émergeait."
		],
		"spanish": [
			"En la densa niebla, el bosque estaba envuelto en un silencio más profundo.",
			"Los susurros de un vagabundo perdido despiertan una verdad ancestral.",
			"Una figura femenina borrosa. La tragedia del bosque se estaba revelando lentamente.",
			"A medida que me acercaba a la verdad... una dolorosa compasión florecía."
		],
		"vietnamese": [
			"Trong màn sương dày đặc, khu rừng chìm sâu hơn vào tĩnh lặng.",
			"Tiếng thì thầm của một kẻ lang thang lạc lối đánh thức sự thật cổ xưa.",
			"Bóng hình người phụ nữ mờ ảo. Bi kịch của khu rừng dần dần lộ diện.",
			"Càng đến gần sự thật… lòng trắc ẩn đau đớn càng nảy nở."
		],
		"thai": [
			"ในม่านหมอกหนาทึบ ป่าถูกปกคลุมด้วยความเงียบงันที่ลึกซึ้งยิ่งขึ้น",
			"เสียงกระซิบของคนพเนจรที่หลงทางปลุกความจริงเก่าแก่ให้ตื่นขึ้น",
			"ร่างสตรีเลือนลาง โศกนาฏกรรมของป่ากำลังค่อยๆ เผยตัว",
			"ยิ่งเข้าใกล้ความจริง... ความสงสารที่เจ็บปวดก็ผลิบานขึ้น"
		],
		"hindi": [
			"घने कोहरे में, जंगल गहरी खामोशी में लिपटा हुआ था।",
			"एक खोए हुए पथिक की फुसफुसाहट एक प्राचीन सत्य को जगाती है।",
			"एक धुंधली स्त्री आकृति। जंगल की त्रासदी धीरे-धीरे सामने आ रही थी।",
			"जैसे-जैसे मैं सच्चाई के करीब आया… एक दर्दनाक करुणा उभर आई।"
		]
	}
} as const;
