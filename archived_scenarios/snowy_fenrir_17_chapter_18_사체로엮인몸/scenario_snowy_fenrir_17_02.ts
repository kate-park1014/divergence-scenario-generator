export const scenario_snowy_fenrir_17_02 = {
	"scenario_id": "snowy_fenrir_17_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"눈보라가 집어삼킨 설원.",
			"늑대가 남긴 흔적은 죽음뿐이었다.",
			"차가운 몸뚱이 위로, 수많은 얼굴들이 얼어붙어 있었다.",
			"살아있는 것은 아무것도 없었다."
		],
		"english": [
			"A blizzard-devoured snowfield.",
			"The wolf's trail led only to death.",
			"Countless faces were frozen upon the cold bodies.",
			"Nothing was left alive."
		],
		"japanese": [
			"吹雪に飲み込まれた雪原。",
			"狼が残した痕跡は死のみだった。",
			"冷たい体の上には、無数の顔が凍りついていた。",
			"生きているものは何もなかった。"
		],
		"chinese": [
			"暴风雪吞噬的雪原。",
			"狼留下的只有死亡的痕迹。",
			"冰冷的躯体上，无数面孔冻结着。",
			"什么都没有活下来。"
		],
		"french": [
			"Une étendue enneigée dévorée par le blizzard.",
			"Les traces du loup ne menaient qu'à la mort.",
			"D'innombrables visages étaient figés sur les corps froids.",
			"Rien n'était vivant."
		],
		"spanish": [
			"Un campo de nieve devorado por la ventisca.",
			"Las huellas del lobo solo conducían a la muerte.",
			"Innumerables rostros estaban congelados sobre los cuerpos fríos.",
			"Nada estaba vivo."
		],
		"vietnamese": [
			"Cánh đồng tuyết bị bão tuyết nuốt chửng.",
			"Dấu vết của chó sói chỉ toàn là cái chết.",
			"Vô số gương mặt đóng băng trên những thân xác lạnh lẽo.",
			"Không có gì sống sót."
		],
		"thai": [
			"ทุ่งหิมะที่ถูกพายุหิมะกลืนกิน.",
			"ร่องรอยที่หมาป่าทิ้งไว้มีแต่ความตาย.",
			"บนร่างที่เย็นเฉียบ ใบหน้ามากมายจับตัวเป็นน้ำแข็ง.",
			"ไม่มีอะไรมีชีวิตเหลืออยู่."
		],
		"hindi": [
			"बर्फीले तूफान से ढका बर्फ़ीला मैदान।",
			"भेड़िये के छोड़े निशान सिर्फ़ मौत के थे।",
			"ठंडे शरीरों पर, अनगिनत चेहरे जमे हुए थे।",
			"कुछ भी जीवित नहीं बचा था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "눈보라가 더욱 거세졌다. 늑대가 지나간 자리마다 짐승들의 사체가 흩뿌려져 있었다.",
						"english": "The blizzard intensified. Animal carcasses were strewn everywhere the wolf had passed.",
						"japanese": "吹雪はさらに激しさを増した。狼が通った場所には、獣の死体が散らばっていた。",
						"chinese": "暴风雪愈发猛烈。狼经过之处，遍布着野兽的尸体。",
						"french": "Le blizzard s'intensifia. Des carcasses d'animaux jonchaient chaque endroit où le loup était passé.",
						"spanish": "La ventisca se intensificó. Cadáveres de animales estaban esparcidos por donde había pasado el lobo.",
						"vietnamese": "Bão tuyết càng lúc càng dữ dội. Xác thú vật nằm rải rác khắp những nơi sói đi qua.",
						"thai": "พายุหิมะทวีความรุนแรงขึ้น. ซากสัตว์กระจัดกระจายไปทั่วทุกที่ที่หมาป่าผ่านไป.",
						"hindi": "बर्फीला तूफ़ान और भी तेज़ हो गया। जहाँ-जहाँ से भेड़िया गुज़रा था, वहाँ-वहाँ जानवरों के शव बिखरे पड़े थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 너무 많잖아.",
						"english": "Damn... there's too many.",
						"japanese": "くそ…多すぎる。",
						"chinese": "该死…太多了。",
						"french": "Merde... il y en a trop.",
						"spanish": "Maldición... hay demasiados.",
						"vietnamese": "Chết tiệt… nhiều quá.",
						"thai": "ให้ตายสิ...เยอะเกินไปแล้ว.",
						"hindi": "धिक्कार है... बहुत ज़्यादा हैं।"
					}
				},
				{
					"spot": [
						3,
						1
					],
					"type": "direction",
					"speaker": "inka",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "(천천히 다가가 늑대의 몸을 살펴본다)",
						"english": "(Slowly approaches and examines the wolf's body)",
						"japanese": "（ゆっくりと近づき、狼の体を調べる）",
						"chinese": "（慢慢靠近并检查狼的身体）",
						"french": "(S'approche lentement et examine le corps du loup)",
						"spanish": "(Se acerca lentamente y examina el cuerpo del lobo)",
						"vietnamese": "(Từ từ tiếp cận và kiểm tra cơ thể chó sói)",
						"thai": "(ค่อยๆ เข้าใกล้และตรวจสอบร่างของหมาป่า)",
						"hindi": "(धीरे-धीरे पास जाकर भेड़िये के शरीर का निरीक्षण करता है)"
					}
				},
				{
					"content": {
						"korean": "…이것들… 다 한때는 살아 있었어.",
						"english": "...These... they were all once alive.",
						"japanese": "…これら…みんな、かつては生きていたんだ。",
						"chinese": "……这些……它们都曾活过。",
						"french": "...Ceux-ci... ils étaient tous vivants autrefois.",
						"spanish": "...Estos... todos estuvieron vivos una vez.",
						"vietnamese": "...Những thứ này... tất cả từng sống.",
						"thai": "...พวกนี้...ทั้งหมดเคยมีชีวิตอยู่.",
						"hindi": "...ये सब... ये कभी जीवित थे।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "인카! 가까이 가지 마!",
						"english": "Inka! Don't go near it!",
						"japanese": "インカ！近づくな！",
						"chinese": "因卡！别靠近！",
						"french": "Inka ! Ne t'approche pas !",
						"spanish": "¡Inka! ¡No te acerques!",
						"vietnamese": "Inka! Đừng lại gần!",
						"thai": "อิงคา! อย่าเข้าไปใกล้!",
						"hindi": "इंका! पास मत जाओ!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						1
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka",
					"type": "direction"
				},
				{
					"content": {
						"korean": "(얼어붙은 몸에서 작은 발톱과 눈동자를 발견한다)",
						"english": "(Discovers small claws and eyes on the frozen body)",
						"japanese": "（凍りついた体から、小さな爪と瞳を見つける）",
						"chinese": "（在冰冻的身体上发现了小爪子和眼睛）",
						"french": "(Découvre de petites griffes et des yeux sur le corps gelé)",
						"spanish": "(Descubre pequeñas garras y ojos en el cuerpo congelado)",
						"vietnamese": "(Phát hiện móng vuốt nhỏ và đôi mắt trên thân xác đóng băng)",
						"thai": "(พบคงเล็บเล็กและดวงตาบนร่างที่จับตัวเป็นน้ำแข็ง)",
						"hindi": "(जमे हुए शरीर पर छोटे पंजे और आँखें पाता है)"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "이 늑대는… 수많은 죽음으로 만들어졌어.",
						"english": "This wolf… it's made of countless deaths.",
						"japanese": "この狼は… 無数の死によって作られている。",
						"chinese": "这匹狼…是由无数死亡铸就的。",
						"french": "Ce loup… est fait d'innombrables morts.",
						"spanish": "Este lobo… está hecho de incontables muertes.",
						"vietnamese": "Con sói này… được tạo nên từ vô số cái chết.",
						"thai": "หมาป่าตัวนี้… สร้างขึ้นจากความตายมากมายนับไม่ถ้วน",
						"hindi": "यह भेड़िया… अनगिनत मौतों से बना है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "괴물은 괴물일 뿐이야.",
						"english": "A monster is just a monster.",
						"japanese": "化け物はただの化け物だ。",
						"chinese": "怪物就是怪物。",
						"french": "Un monstre n'est qu'un monstre.",
						"spanish": "Un monstruo es solo un monstruo.",
						"vietnamese": "Quái vật thì vẫn là quái vật thôi.",
						"thai": "สัตว์ประหลาดก็คือสัตว์ประหลาด",
						"hindi": "एक राक्षस बस एक राक्षस होता है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "아니… 죽은 자들의 비명 같아.",
						"english": "No… it sounds like the screams of the dead.",
						"japanese": "いや… 死者の悲鳴のようだ。",
						"chinese": "不…那听起来像是死者的尖叫。",
						"french": "Non… ça ressemble aux cris des morts.",
						"spanish": "No… suena como los gritos de los muertos.",
						"vietnamese": "Không… nó giống như tiếng thét của những người đã chết.",
						"thai": "ไม่… เหมือนเสียงกรีดร้องของผู้ตาย",
						"hindi": "नहीं… यह मृतकों की चीखों जैसा लगता है।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						1
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "inka",
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "늑대의 몸 표면에 얼어붙은 작은 짐승들의 얼굴과 발이 더욱 선명하게 드러났다.",
						"english": "The faces and paws of small beasts, frozen onto the wolf's surface, became even clearer.",
						"japanese": "狼の体表に凍り付いた小さな獣たちの顔と足が、さらに鮮明に現れた。",
						"chinese": "冻结在狼身体表面的小动物的脸和爪子变得更加清晰。",
						"french": "Les visages et les pattes de petites bêtes, gelés sur la surface du loup, devinrent encore plus clairs.",
						"spanish": "Las caras y patas de pequeñas bestias, congeladas en la superficie del lobo, se hicieron aún más claras.",
						"vietnamese": "Những khuôn mặt và bàn chân của những con thú nhỏ, đóng băng trên bề mặt của con sói, trở nên rõ ràng hơn.",
						"thai": "ใบหน้าและอุ้งเท้าของสัตว์เล็กๆ ที่แข็งอยู่บนพื้นผิวของหมาป่าปรากฏชัดเจนยิ่งขึ้น",
						"hindi": "भेड़िये की सतह पर जमे हुए छोटे जानवरों के चेहरे और पंजे और भी स्पष्ट हो गए।"
					}
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(몸을 떨며 늑대의 표면을 본다)",
						"english": "(Shudders while looking at the wolf's surface)",
						"japanese": "(体を震わせながら狼の表面を見る)",
						"chinese": "(身体颤抖着看向狼的表面)",
						"french": "(Frissonne en regardant la surface du loup)",
						"spanish": "(Se estremece al mirar la superficie del lobo)",
						"vietnamese": "(Rùng mình khi nhìn vào bề mặt của con sói)",
						"thai": "(ตัวสั่นขณะมองดูพื้นผิวของหมาป่า)",
						"hindi": "(भेड़िये की सतह को देखते हुए कांपता है)"
					}
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기, 봐. 어린 곰의 얼굴이야… 두려움에 질려 있어.",
						"english": "Look, here. It's a young bear's face… terrified.",
						"japanese": "ここを見て。幼い熊の顔だ… 恐怖におののいている。",
						"chinese": "看，这里。这是一只小熊的脸…充满了恐惧。",
						"french": "Regarde, ici. C'est le visage d'un jeune ours… terrifié.",
						"spanish": "Mira, aquí. Es la cara de un oso joven… aterrorizado.",
						"vietnamese": "Nhìn này. Đây là khuôn mặt của một con gấu con… đầy sợ hãi.",
						"thai": "ดูนี่สิ ใบหน้าของลูกหมี… หวาดกลัวสุดขีด",
						"hindi": "यहाँ देखो। यह एक छोटे भालू का चेहरा है… डरा हुआ है।"
					}
				},
				{
					"content": {
						"korean": "끔찍해… 이건 살아있는 게 아니야.",
						"english": "Horrifying… this isn't alive.",
						"japanese": "恐ろしい… これは生きているものじゃない。",
						"chinese": "太可怕了…这不是活物。",
						"french": "Horrible… ce n'est pas vivant.",
						"spanish": "Horrible… esto no está vivo.",
						"vietnamese": "Kinh khủng quá… cái này không phải là vật sống.",
						"thai": "น่าสยดสยอง… นี่ไม่ใช่สิ่งมีชีวิต",
						"hindi": "भयावह… यह जीवित नहीं है।"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "inka",
					"spot": [
						3,
						1
					]
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(슬픔에 잠긴 눈으로 늑대의 거대한 몸을 올려다본다)",
						"english": "(Looks up at the wolf's massive body with sorrowful eyes)",
						"japanese": "(悲しみに沈んだ目で狼の巨大な体を見上げる)",
						"chinese": "(用悲伤的眼神仰望着狼的巨大身体)",
						"french": "(Regarde le corps massif du loup avec des yeux tristes)",
						"spanish": "(Mira el cuerpo masivo del lobo con ojos tristes)",
						"vietnamese": "(Nhìn lên cơ thể khổng lồ của con sói với đôi mắt buồn bã)",
						"thai": "(มองขึ้นไปยังร่างมหึมาของหมาป่าด้วยดวงตาที่เศร้าสร้อย)",
						"hindi": "(दुःख भरी आँखों से भेड़िये के विशाल शरीर को देखता है)"
					}
				},
				{
					"content": {
						"korean": "도대체… 이 늑대가 무슨 죄를 지었길래.",
						"english": "What… what sin could this wolf have possibly committed?",
						"japanese": "一体… この狼が何の罪を犯したというのか。",
						"chinese": "到底…这匹狼犯了什么罪？",
						"french": "Quel… quel crime ce loup a-t-il pu commettre ?",
						"spanish": "¿Qué… qué pecado pudo haber cometido este lobo?",
						"vietnamese": "Rốt cuộc… con sói này đã phạm tội gì?",
						"thai": "นี่มัน… หมาป่าตัวนี้ไปทำกรรมอะไรมากันแน่",
						"hindi": "आखिर… इस भेड़िये ने क्या अपराध किया होगा?"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "인카, 동정하지 마. 우린 이걸 막아야 해.",
						"english": "Inka, don't pity it. We have to stop this.",
						"japanese": "インカ、同情するな。我々はこれを止めなければならない。",
						"chinese": "因卡，不要同情它。我们必须阻止它。",
						"french": "Inka, ne le plains pas. Nous devons arrêter ça.",
						"spanish": "Inka, no lo compadezcas. Tenemos que detener esto.",
						"vietnamese": "Inka, đừng thương hại nó. Chúng ta phải ngăn chặn điều này.",
						"thai": "อิงก้า อย่าไปสงสารมัน เราต้องหยุดมัน",
						"hindi": "इनका, इस पर दया मत करो। हमें इसे रोकना होगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "inka",
					"content": {
						"korean": "알아… 하지만, 이 비극을 멈춰야만 해.",
						"english": "I know... But I have to stop this tragedy.",
						"japanese": "分かってる…だけど、この悲劇を止めなきゃ。",
						"chinese": "我知道……但是，我必须阻止这场悲剧。",
						"french": "Je sais… Mais je dois arrêter cette tragédie.",
						"spanish": "Lo sé... Pero debo detener esta tragedia.",
						"vietnamese": "Tôi biết… Nhưng tôi phải ngăn chặn bi kịch này.",
						"thai": "ฉันรู้… แต่ฉันต้องหยุดโศกนาฏกรรมนี้ให้ได้",
						"hindi": "मुझे पता है… लेकिन मुझे इस त्रासदी को रोकना होगा।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "아직… 부족하다…",
						"english": "Still... not enough...",
						"japanese": "まだ…足りない…",
						"chinese": "还……不够……",
						"french": "Encore… insuffisant…",
						"spanish": "Todavía... no es suficiente...",
						"vietnamese": "Vẫn còn… chưa đủ…",
						"thai": "ยัง… ไม่พอ…",
						"hindi": "अभी… पर्याप्त नहीं…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "늑대의 발톱이 탐험대를 후려쳤다.",
						"english": "The wolf's claws struck the expedition.",
						"japanese": "狼の爪が探検隊を襲った。",
						"chinese": "狼的利爪击中了探险队。",
						"french": "Les griffes du loup ont frappé l'expédition.",
						"spanish": "Las garras del lobo golpearon a la expedición.",
						"vietnamese": "Móng vuốt của sói đã tấn công đoàn thám hiểm.",
						"thai": "กรงเล็บของหมาป่าพุ่งเข้าใส่คณะสำรวจ",
						"hindi": "भेड़िये के पंजे अभियान दल पर लगे।"
					}
				},
				{
					"content": {
						"korean": "크윽… 아직 끝나지 않았어!",
						"english": "Ugh... It's not over yet!",
						"japanese": "くっ… まだ終わってない！",
						"chinese": "咳… 还没结束！",
						"french": "Argh... Ce n'est pas encore fini !",
						"spanish": "Uf... ¡Aún no ha terminado!",
						"vietnamese": "Khụ… Vẫn chưa kết thúc!",
						"thai": "อึก… ยังไม่จบ!",
						"hindi": "उफ़… अभी ख़त्म नहीं हुआ है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "영원히… 끝나지 않을 것이다.",
						"english": "It will never... end.",
						"japanese": "永遠に… 終わらないだろう。",
						"chinese": "永远… 不会结束。",
						"french": "Cela ne finira... jamais.",
						"spanish": "Nunca... terminará.",
						"vietnamese": "Sẽ không… bao giờ kết thúc.",
						"thai": "มันจะไม่มีวัน… สิ้นสุด",
						"hindi": "यह कभी… खत्म नहीं होगा।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "으르르… (위협적으로)",
						"english": "Grrr... (Threateningly)",
						"japanese": "ガルルル… (威嚇するように)",
						"chinese": "呜……（威胁地）",
						"french": "Grrr… (Menaçant)",
						"spanish": "Grrr... (Amenazante)",
						"vietnamese": "Gừ gừ… (Đe dọa)",
						"thai": "คําราม… (อย่างคุกคาม)",
						"hindi": "गुर्र… (खतरनाक ढंग से)"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "드디어 나타났군!",
						"english": "Finally, you've appeared!",
						"japanese": "ついに現れたか！",
						"chinese": "你终于出现了！",
						"french": "Enfin, tu es apparu !",
						"spanish": "¡Por fin apareces!",
						"vietnamese": "Cuối cùng ngươi cũng xuất hiện!",
						"thai": "ในที่สุดแกก็ปรากฏตัว!",
						"hindi": "आखिरकार, तुम आ गए!"
					}
				},
				{
					"content": {
						"korean": "(random_boss의 몸에 새겨진 얼굴들을 보며) 저 늑대도… 고통받고 있어.",
						"english": "(Looking at the faces carved into random_boss's body) That wolf... is suffering too.",
						"japanese": "（random_bossの体に刻まれた顔を見て）あの狼も…苦しんでいる。",
						"chinese": "（看着random_boss身上刻着的面孔）那只狼…也在受苦。",
						"french": "(En regardant les visages gravés sur le corps de random_boss) Ce loup... souffre aussi.",
						"spanish": "(Mirando los rostros grabados en el cuerpo de random_boss) Ese lobo... también está sufriendo.",
						"vietnamese": "(Nhìn những khuôn mặt khắc trên cơ thể của random_boss) Con sói đó… cũng đang đau khổ.",
						"thai": "(มองใบหน้าต่างๆ ที่สลักอยู่บนร่างของ random_boss) หมาป่าตัวนั้น… ก็กำลังทนทุกข์ทรมานอยู่เช่นกัน",
						"hindi": "(random_boss के शरीर पर उकेरे गए चेहरों को देखते हुए) वह भेड़िया भी… पीड़ित है।"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "크아아아!",
						"english": "Kkwaaaah!",
						"japanese": "クアアアア！",
						"chinese": "吼啊啊啊！",
						"french": "Kkwaaaah !",
						"spanish": "¡Kkwaaaah!",
						"vietnamese": "Quào a a a!",
						"thai": "กรี๊ดดดด!",
						"hindi": "क्रूरररर!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…나도… 그저… (사라져간다)",
						"english": "...I too... merely... (fades away)",
						"japanese": "…私も…ただ… (消えていく)",
						"chinese": "……我也……只是……（渐渐消失）",
						"french": "…Moi aussi… simplement… (s'évanouit)",
						"spanish": "...Yo también... solo... (se desvanece)",
						"vietnamese": "…Tôi cũng… chỉ là… (tan biến)",
						"thai": "…ฉันเองก็… แค่… (จางหายไป)",
						"hindi": "...मैं भी... बस... (गायब हो जाता है)"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "종말의 늑대는 무너졌다. 그 몸을 이루던 수많은 사체들이 눈보라와 함께 흩어졌다.",
						"english": "The Wolf of Apocalypse fell. The countless corpses that formed its body scattered with the blizzard.",
						"japanese": "終焉の狼は崩れ落ちた。その体を成していた無数の死体が吹雪と共に散っていった。",
						"chinese": "末日之狼倒下了。构成其身体的无数尸体随着暴风雪四散而去。",
						"french": "Le Loup de l'Apocalypse est tombé. Les innombrables cadavres qui formaient son corps se sont dispersés avec le blizzard.",
						"spanish": "El Lobo del Apocalipsis cayó. Los innumerables cadáveres que formaban su cuerpo se dispersaron con la ventisca.",
						"vietnamese": "Con Sói Khải Huyền đã gục ngã. Vô số xác chết cấu thành nên cơ thể nó đã tan biến cùng bão tuyết.",
						"thai": "หมาป่าแห่งหายนะล้มลง ร่างไร้วิญญาณนับไม่ถ้วนที่ประกอบเป็นกายของมันกระจัดกระจายไปพร้อมกับพายุหิมะ",
						"hindi": "प्रलय का भेड़िया गिर गया। उसके शरीर का निर्माण करने वाले अनगिनत शव बर्फीले तूफान के साथ बिखर गए।"
					}
				},
				{
					"spot": [
						3,
						1
					],
					"speaker": "inka",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "편히 잠들기를…",
						"english": "May you rest in peace...",
						"japanese": "安らかに眠れ…",
						"chinese": "愿你安息……",
						"french": "Repose en paix…",
						"spanish": "Que descanses en paz...",
						"vietnamese": "Hãy yên nghỉ…",
						"thai": "ขอให้หลับอย่างสงบ…",
						"hindi": "तुम्हें शांति मिले..."
					}
				},
				{
					"content": {
						"korean": "그러나 그 시체 속에서, 또 다른 얼어붙은 심장이 들려오는 듯했다.",
						"english": "However, from within those corpses, another frozen heart seemed to beat.",
						"japanese": "しかし、その屍の中から、また別の凍てついた鼓動が聞こえてくるようだった。",
						"chinese": "然而，在那尸体之中，仿佛又传来另一颗冰冷的心脏的跳动声。",
						"french": "Cependant, au milieu de ces cadavres, un autre cœur gelé semblait battre.",
						"spanish": "Sin embargo, de entre esos cadáveres, otro corazón congelado parecía latir.",
						"vietnamese": "Tuy nhiên, từ bên trong những xác chết đó, một trái tim băng giá khác dường như đang đập.",
						"thai": "ทว่า ในบรรดาศพเหล่านั้น ราวกับว่ามีหัวใจที่เยือกแข็งดวงอื่นกำลังเต้นอยู่",
						"hindi": "हालांकि, उन शवों के भीतर से, एक और जमा हुआ दिल धड़कता हुआ प्रतीत हुआ।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
