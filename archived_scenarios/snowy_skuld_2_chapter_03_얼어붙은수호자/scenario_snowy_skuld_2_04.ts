export const scenario_snowy_skuld_2_04 = {
	"scenario_id": "snowy_skuld_2_04",
	"order": 4,
	"act": "rising",
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
			"북방의 잊힌 설원 깊은 곳.",
			"끝없는 눈보라 너머, 푸른 빛이 새어 나왔다.",
			"잊힌 전설처럼, 빙하 속 무언가가 깨어나고 있었다.",
			"단순한 자연의 정령이 아니었다. 그것은… 살아 숨 쉬고 있었다."
		],
		"english": [
			"Deep within the forgotten northern wastes.",
			"Beyond the endless blizzard, a blue light emanated.",
			"Like a forgotten legend, something within the glacier was awakening.",
			"It wasn't merely a spirit of nature. It was... alive."
		],
		"japanese": [
			"北方の忘れられた雪原の奥深く。",
			"終わりのない吹雪の向こうに、青い光が漏れ出た。",
			"忘れられた伝説のように、氷河の中で何かが目覚めつつあった。",
			"それはただの自然の精霊ではなかった。それは…生きていた。"
		],
		"chinese": [
			"北方被遗忘的雪原深处。",
			"无尽暴风雪的尽头，一缕蓝光从中透出。",
			"如被遗忘的传说，冰川中有什么东西正在苏醒。",
			"那并非单纯的自然精灵。它…活生生地存在着。"
		],
		"french": [
			"Au plus profond des étendues enneigées oubliées du nord.",
			"Au-delà de la tempête de neige sans fin, une lumière bleue émanait.",
			"Comme une légende oubliée, quelque chose à l'intérieur du glacier s'éveillait.",
			"Ce n'était pas seulement un esprit de la nature. C'était... vivant."
		],
		"spanish": [
			"En lo profundo de los páramos nevados olvidados del norte.",
			"Más allá de la ventisca interminable, una luz azul se filtraba.",
			"Como una leyenda olvidada, algo dentro del glaciar estaba despertando.",
			"No era meramente un espíritu de la naturaleza. Estaba... vivo."
		],
		"vietnamese": [
			"Sâu thẳm trong vùng hoang mạc tuyết phủ lãng quên phía Bắc.",
			"Ngoài trận bão tuyết vô tận, một luồng ánh sáng xanh phát ra.",
			"Như một truyền thuyết bị lãng quên, một thứ gì đó bên trong sông băng đang thức tỉnh.",
			"Đó không chỉ là một tinh linh tự nhiên. Nó... đang sống."
		],
		"thai": [
			"ลึกเข้าไปในทุ่งหิมะอันถูกลืมทางเหนือ",
			"พ้นจากพายุหิมะไม่สิ้นสุด แสงสีน้ำเงินส่องออกมา",
			"ราวกับตำนานที่ถูกลืม บางสิ่งในธารน้ำแข็งกำลังตื่นขึ้น",
			"มันไม่ใช่แค่วิญญาณแห่งธรรมชาติ มัน... มีชีวิตอยู่"
		],
		"hindi": [
			"उत्तर के भूले हुए बर्फीले मैदानों की गहराइयों में।",
			"अविराम बर्फीले तूफान से परे, एक नीली रोशनी फूट रही थी।",
			"एक भूली हुई किंवदंती की तरह, ग्लेशियर के भीतर कुछ जागृत हो रहा था।",
			"वह केवल प्रकृति की आत्मा नहीं थी। वह... जीवित थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "끝없는 눈보라 너머, 거대한 빙하가 솟아 있었다.",
						"english": "Beyond the endless blizzard, a colossal glacier towered.",
						"japanese": "終わりのない吹雪の向こうに、巨大な氷河がそびえ立っていた。",
						"chinese": "无尽暴风雪的尽头，一座巨大的冰川拔地而起。",
						"french": "Au-delà de la tempête de neige sans fin, un glacier colossal s'élevait.",
						"spanish": "Más allá de la ventisca interminable, un glaciar colosal se alzaba.",
						"vietnamese": "Ngoài trận bão tuyết vô tận, một sông băng khổng lồ sừng sững.",
						"thai": "พ้นจากพายุหิมะไม่สิ้นสุด ธารน้ำแข็งขนาดมหึมายืนตระหง่าน",
						"hindi": "अविराम बर्फीले तूफान से परे, एक विशाल ग्लेशियर खड़ा था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 빙하에서… 푸른 빛이 나온다고?",
						"english": "A blue light... from this glacier?",
						"japanese": "この氷河から…青い光が？",
						"chinese": "这冰川里…有蓝光透出？",
						"french": "Une lumière bleue... de ce glacier ?",
						"spanish": "¿Una luz azul... de este glaciar?",
						"vietnamese": "Ánh sáng xanh... từ sông băng này sao?",
						"thai": "แสงสีน้ำเงิน... มาจากธารน้ำแข็งนี้หรือ?",
						"hindi": "इस ग्लेशियर से... नीली रोशनी आ रही है?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…기록하겠습니다. 빙하 속에서 미세한 푸른 빛이 감지됩니다.",
						"english": "...Noted. A faint blue light is detected within the glacier.",
						"japanese": "…記録します。氷河の奥で微かな青い光が感知されます。",
						"chinese": "…已记录。冰川内部检测到微弱的蓝光。",
						"french": "...Noté. Une faible lumière bleue est détectée à l'intérieur du glacier.",
						"spanish": "...Anotado. Una tenue luz azul se detecta dentro del glaciar.",
						"vietnamese": "...Đã ghi nhận. Một luồng ánh sáng xanh mờ nhạt được phát hiện bên trong sông băng.",
						"thai": "...บันทึกแล้ว ตรวจพบแสงสีน้ำเงินจางๆ ภายในธารน้ำแข็ง",
						"hindi": "...दर्ज किया गया। ग्लेशियर के भीतर एक हल्की नीली रोशनी का पता चला है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "평범한 빛은 아닌 것 같아.",
						"english": "Doesn't seem like ordinary light.",
						"japanese": "普通の光ではないようだ。",
						"chinese": "这似乎不是普通的灯光。",
						"french": "Cela ne semble pas être une lumière ordinaire.",
						"spanish": "No parece una luz ordinaria.",
						"vietnamese": "Không giống ánh sáng bình thường.",
						"thai": "ดูเหมือนจะไม่ใช่แสงธรรมดา",
						"hindi": "यह कोई सामान्य रोशनी नहीं लगती।"
					},
					"type": "speech",
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						4
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "빛의 주기가… 일정합니다. 자연 현상이라기엔 지나치게 정교합니다.",
						"english": "The light's cycle... is consistent. Too precise for a natural phenomenon.",
						"japanese": "光の周期が…一定です。自然現象にしては、あまりに精巧すぎます。",
						"chinese": "光的周期…是固定的。这对于自然现象来说过于精确了。",
						"french": "Le cycle de la lumière... est constant. Trop précis pour un phénomène naturel.",
						"spanish": "El ciclo de la luz... es constante. Demasiado preciso para un fenómeno natural.",
						"vietnamese": "Chu kỳ ánh sáng... ổn định. Quá chính xác để là một hiện tượng tự nhiên.",
						"thai": "วัฏจักรของแสง... คงที่ ละเอียดเกินกว่าจะเป็นปรากฏการณ์ทางธรรมชาติ",
						"hindi": "प्रकाश का चक्र... निश्चित है। यह प्राकृतिक घटना के लिए बहुत सटीक है।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼… 누군가 조종하는 건가?",
						"english": "So... is someone controlling it?",
						"japanese": "では…誰かが操っているのか？",
						"chinese": "那么…是有人在操控它吗？",
						"french": "Alors... quelqu'un le contrôle ?",
						"spanish": "¿Entonces... alguien lo está controlando?",
						"vietnamese": "Vậy... có ai đó đang điều khiển nó sao?",
						"thai": "ถ้าอย่างนั้น... มีใครควบคุมมันอยู่เหรอ?",
						"hindi": "तो... क्या कोई इसे नियंत्रित कर रहा है?"
					}
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "아니요. 마치… 거대한 존재가 숨 쉬는 듯한 박동입니다.",
						"english": "No. It's like… a giant being is breathing.",
						"japanese": "「いいえ。まるで…巨大な存在が息をしているかのような鼓動です。」",
						"chinese": "“不。这就像…一个巨大的存在在呼吸。”",
						"french": "“Non. C'est comme… le battement d'un être gigantesque qui respire.”",
						"spanish": "“No. Es como… el latido de un ser gigantesco que respira.”",
						"vietnamese": "“Không. Cứ như… đó là nhịp đập của một thực thể khổng lồ đang thở.”",
						"thai": "“ไม่ครับ/ค่ะ มันเหมือน…ชีพจรของสิ่งมีชีวิตขนาดยักษ์กำลังหายใจอยู่”",
						"hindi": "“नहीं। यह ऐसा है… मानो कोई विशाल सत्ता साँस ले रही हो।”"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "얼음 깊은 곳에서… 옅은 푸른 빛이 안개처럼 피어오릅니다.",
						"english": "From deep within the ice… a faint blue light rises like mist.",
						"japanese": "「氷の奥深くから…淡い青い光が霧のように立ち昇る。」",
						"chinese": "“在冰的深处…一缕浅蓝色的光芒如雾般升起。”",
						"french": "“Du plus profond de la glace… une faible lumière bleue s'élève comme une brume.”",
						"spanish": "“Desde lo más profundo del hielo… una tenue luz azul se eleva como la niebla.”",
						"vietnamese": "“Từ sâu trong băng… một ánh sáng xanh nhạt bốc lên như sương mù.”",
						"thai": "“จากส่วนลึกของน้ำแข็ง…แสงสีฟ้าอ่อนๆ ลอยขึ้นมาเหมือนหมอก”",
						"hindi": "“बर्फ की गहराइयों से… एक हल्की नीली रोशनी धुंध की तरह उठती है।”"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 빛은… 단순한 정령의 흔적이 아닙니다. 마치… 잊힌 의지가 깨어나는 듯.",
						"english": "This light is… not just a mere trace of a spirit. It's like… a forgotten will awakening.",
						"japanese": "「この光は…ただの精霊の痕跡ではない。まるで…忘れ去られた意志が目覚めるようだ。」",
						"chinese": "“这道光…不仅仅是精灵的痕迹。它就像…一个被遗忘的意志正在苏醒。”",
						"french": "“Cette lumière n'est… pas une simple trace d'esprit. C'est comme… une volonté oubliée qui s'éveille.”",
						"spanish": "“Esta luz no es… un mero rastro de un espíritu. Es como… una voluntad olvidada que despierta.”",
						"vietnamese": "“Ánh sáng này… không chỉ là dấu vết của một tinh linh. Cứ như… một ý chí bị lãng quên đang thức tỉnh.”",
						"thai": "“แสงนี้…ไม่ใช่แค่ร่องรอยของวิญญาณ แต่มันเหมือน…เจตจำนงที่ถูกลืมกำลังตื่นขึ้นมา”",
						"hindi": "“यह प्रकाश… केवल किसी आत्मा का निशान नहीं है। यह ऐसा है… मानो कोई भूली हुई इच्छा जागृत हो रही हो।”"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "깨어나는 의지라고?",
						"english": "An awakening will?",
						"japanese": "「目覚める意志だと？」",
						"chinese": "“觉醒的意志？”",
						"french": "“Une volonté qui s'éveille ?”",
						"spanish": "¿Una voluntad despertando?",
						"vietnamese": "“Ý chí đang thức tỉnh ư?”",
						"thai": "“เจตจำนงที่ตื่นขึ้น?”",
						"hindi": "“एक जागृत इच्छा?”"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						4
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "빛이 점점 강해집니다. 이 설원의 모든 것을… 지배하려는 것처럼.",
						"english": "The light grows stronger. As if… it intends to dominate everything in this snowfield.",
						"japanese": "「光がますます強くなる。この雪原のすべてを…支配しようとするかのように。」",
						"chinese": "“光线越来越强。它仿佛…想要支配这片雪原的一切。”",
						"french": "“La lumière devient de plus en plus forte. Comme si… elle voulait dominer tout ce champ de neige.”",
						"spanish": "“La luz se vuelve cada vez más fuerte. Como si… quisiera dominar todo en este campo de nieve.”",
						"vietnamese": "“Ánh sáng ngày càng mạnh hơn. Cứ như… nó muốn thống trị tất cả mọi thứ trên cánh đồng tuyết này.”",
						"thai": "“แสงยิ่งแรงขึ้นเรื่อยๆ ราวกับว่า…มันต้องการจะครอบงำทุกสิ่งในทุ่งหิมะนี้”",
						"hindi": "“प्रकाश और भी प्रबल होता जा रहा है। मानो… यह इस बर्फ़ीले मैदान की हर चीज़ पर हावी होना चाहता हो।”"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "우리… 돌아갈 수 있을까?",
						"english": "Can we… go back?",
						"japanese": "「私たち…帰れるのかな？」",
						"chinese": "“我们…还能回去吗？”",
						"french": "“Nous… pourrons-nous revenir ?”",
						"spanish": "¿Podremos… volver?",
						"vietnamese": "“Chúng ta… có thể quay về không?”",
						"thai": "“พวกเรา…จะกลับไปได้ไหม?”",
						"hindi": "“क्या हम… वापस जा पाएँगे?”"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "멈출 수 없습니다. 이제… 잊힌 역사의 문이 열렸습니다.",
						"english": "It cannot be stopped. Now… the gate of forgotten history has opened.",
						"japanese": "「止められません。もう…忘れ去られた歴史の扉が開かれました。」",
						"chinese": "“无法阻止。现在…被遗忘的历史之门已经打开。”",
						"french": "“On ne peut pas l'arrêter. Maintenant… la porte de l'histoire oubliée s'est ouverte.”",
						"spanish": "“No se puede detener. Ahora… la puerta de la historia olvidada se ha abierto.”",
						"vietnamese": "“Không thể ngăn cản. Giờ đây… cánh cửa của lịch sử bị lãng quên đã mở ra.”",
						"thai": "“หยุดไม่ได้แล้ว ตอนนี้…ประตูแห่งประวัติศาสตร์ที่ถูกลืมได้เปิดออกแล้ว”",
						"hindi": "“इसे रोका नहीं जा सकता। अब… भूले हुए इतिहास का द्वार खुल गया है।”"
					},
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 나를 거스르는가. 얼음 속에서 영원히 잠들게 될 것이다.",
						"english": "How dare you… defy me. You shall sleep forever in the ice.",
						"japanese": "敢えて…私に逆らうか。氷の中で永遠に眠りにつくがいい。",
						"chinese": "竟敢…违抗我。你将在冰中永眠。",
						"french": "Comment oses-tu… me défier. Tu dormiras pour l'éternité dans la glace.",
						"spanish": "¿Cómo osas… desafiarme? Dormirás para siempre en el hielo.",
						"vietnamese": "Ngươi dám… chống lại ta. Ngươi sẽ ngủ vĩnh viễn trong băng giá.",
						"thai": "กล้าดีอย่างไร… มาขัดขวางข้า. เจ้าจะต้องหลับใหลในน้ำแข็งชั่วนิรันดร์.",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… मेरा विरोध करने की। तुम बर्फ में हमेशा के लिए सो जाओगे।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "크으… 아직… 끝나지 않았어!",
						"english": "Ugh… It's not… over yet!",
						"japanese": "くぅ…まだ…終わってない！",
						"chinese": "呃…还没…结束！",
						"french": "Ugh… Ce n'est pas… encore fini !",
						"spanish": "Ugh… ¡Aún no… ha terminado!",
						"vietnamese": "Khừ… Vẫn chưa… kết thúc đâu!",
						"thai": "อึก… ยัง… ไม่จบหรอก!",
						"hindi": "उफ़… अभी… खत्म नहीं हुआ!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 빛의 근원… 잊힌 전설 속 존재… 당신이었군요.",
						"english": "The source of this light… the being from forgotten legends… it was you.",
						"japanese": "「この光の根源…忘れられた伝説の存在…あなただったのですね。」",
						"chinese": "“这光芒的源头…遗忘传说中的存在…原来是你。”",
						"french": "“La source de cette lumière… l'être des légendes oubliées… c'était vous.”",
						"spanish": "“La fuente de esta luz… el ser de las leyendas olvidadas… eras tú.”",
						"vietnamese": "“Nguồn gốc của ánh sáng này… sinh vật trong truyền thuyết bị lãng quên… hóa ra là ngươi.”",
						"thai": "“ต้นกำเนิดของแสงนี้…สิ่งมีชีวิตในตำนานที่ถูกลืม…เป็นคุณนี่เอง”",
						"hindi": "“इस प्रकाश का स्रोत… भूली हुई किंवदंतियों का प्राणी… तुम ही थे।”"
					},
					"speaker": "eira"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내 잠을 방해한 자들… 모두 얼음 속에 가두리라.",
						"english": "Those who disturbed my slumber… I shall imprison you all in ice.",
						"japanese": "「私の眠りを妨げた者たち…すべて氷の中に閉じ込めてやろう。」",
						"chinese": "“那些打扰我沉睡的人…我将把你们全部囚禁在冰中。”",
						"french": "“Ceux qui ont troublé mon sommeil… je vous emprisonnerai tous dans la glace.”",
						"spanish": "“Aquellos que perturbaron mi sueño… los encerraré a todos en el hielo.”",
						"vietnamese": "“Những kẻ đã phá hoại giấc ngủ của ta… tất cả sẽ bị ta giam cầm trong băng tuyết.”",
						"thai": "“ผู้ที่มารบกวนการหลับใหลของข้า…ข้าจะขังพวกเจ้าทั้งหมดไว้ในน้ำแข็ง”",
						"hindi": "“जिन्होंने मेरी नींद में खलल डाला… मैं तुम सबको बर्फ़ में कैद कर दूँगा।”"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 설원을 얼린 괴물이구나!",
						"english": "You… you're the monster that froze the snowfield!",
						"japanese": "「お前が…雪原を凍らせた怪物か！」",
						"chinese": "“你就是…冻结了雪原的怪物！”",
						"french": "“Tu es… le monstre qui a gelé le champ de neige !”",
						"spanish": "“¡Tú eres… el monstruo que congeló el campo de nieve!”",
						"vietnamese": "“Ngươi… chính là con quái vật đã đóng băng cánh đồng tuyết!”",
						"thai": "“แก…คือสัตว์ประหลาดที่ทำให้ทุ่งหิมะแข็งตัว!”",
						"hindi": "“तुम ही हो… वह राक्षस जिसने बर्फ़ीले मैदान को जमा दिया!”"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "침범자들은… 여기서 영원히 잠들게 될 것이다.",
						"english": "Intruders… shall sleep here forever.",
						"japanese": "侵入者どもは…ここで永遠に眠りにつくだろう。",
						"chinese": "入侵者…将在此永眠。",
						"french": "Les intrus… dormiront ici pour l'éternité.",
						"spanish": "Los intrusos… dormirán aquí para siempre.",
						"vietnamese": "Kẻ xâm nhập… sẽ ngủ vĩnh viễn tại đây.",
						"thai": "ผู้บุกรุก… จะหลับใหลที่นี่ชั่วนิรันดร์",
						"hindi": "घुसपैठिए… यहीं हमेशा के लिए सो जाएंगे।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "쓰러뜨렸다….",
						"english": "Defeated…",
						"japanese": "倒した…。",
						"chinese": "击败了…",
						"french": "Vaincu…",
						"spanish": "Derrotado…",
						"vietnamese": "Đã đánh bại…",
						"thai": "โค่นลงแล้ว…",
						"hindi": "हरा दिया…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우… 여기까지 왔나. 하지만… 이것은… 시작일 뿐….",
						"english": "…Barely… made it this far. But… this is… only the beginning…",
						"japanese": "…かろうじて…ここまで来たか。だが…これは…始まりに過ぎない…。",
						"chinese": "…勉强…走到这里。但这…只是…开始…",
						"french": "…À peine… arrivé jusqu'ici. Mais… ce n'est… que le début…",
						"spanish": "…Apenas… llegaste hasta aquí. Pero… esto es… solo el principio…",
						"vietnamese": "…Chỉ… đến được đây thôi. Nhưng… đây chỉ là… khởi đầu…",
						"thai": "…แทบไม่… มาถึงแค่นี้เองรึ. แต่… นี่มัน… แค่จุดเริ่มต้น…",
						"hindi": "…मुश्किल से… यहाँ तक पहुँचे। लेकिन… यह तो… बस शुरुआत है…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "기록합니다. 빙하의 수호자는… 얼어붙은 의지를 가졌습니다. 단순한 힘이 아니었습니다.",
						"english": "Recorded. The Glacier Guardian… possessed a frozen will. It was not mere strength.",
						"japanese": "記録する。氷河の守護者は…凍てついた意志を持っていた。単なる力ではなかった。",
						"chinese": "记录。冰川守护者…拥有冻结的意志。并非单纯的力量。",
						"french": "Enregistré. Le Gardien du Glacier… possédait une volonté gelée. Ce n'était pas une simple force.",
						"spanish": "Registrado. El Guardián Glaciar… poseía una voluntad congelada. No era mera fuerza.",
						"vietnamese": "Đã ghi lại. Kẻ bảo hộ Băng Hà… có một ý chí đóng băng. Đó không phải chỉ là sức mạnh.",
						"thai": "บันทึก. ผู้พิทักษ์ธารน้ำแข็ง… มีเจตจำนงที่แข็งแกร่งดุจน้ำแข็ง. มันไม่ใช่แค่พละกำลังธรรมดา.",
						"hindi": "दर्ज किया गया। ग्लेशियर का संरक्षक… एक जमी हुई इच्छा रखता था। यह केवल शक्ति नहीं थी।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "푸른 빛은 사그라들지 않았다. 빙하의 심장에는… 여전히 무언가 깨어 있었다.",
						"english": "The blue light did not fade. In the heart of the glacier… something still stirred.",
						"japanese": "青い光は消えなかった。氷河の心臓には…まだ何かが目覚めていた。",
						"chinese": "蓝光未曾熄灭。冰川之心深处…仍有某种东西苏醒着。",
						"french": "La lumière bleue ne s'est pas éteinte. Au cœur du glacier… quelque chose s'agitait encore.",
						"spanish": "La luz azul no se desvaneció. En el corazón del glaciar… algo aún latía.",
						"vietnamese": "Ánh sáng xanh không mờ đi. Trong trái tim của sông băng… vẫn còn thứ gì đó đang thức tỉnh.",
						"thai": "แสงสีน้ำเงินไม่จางหายไป. ในใจกลางของธารน้ำแข็ง… ยังคงมีบางสิ่งตื่นอยู่.",
						"hindi": "नीली रोशनी फीकी नहीं पड़ी। ग्लेशियर के हृदय में… कुछ अभी भी जागृत था।"
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
