export const scenario_snowy_skalhorn_5_01 = {
	"scenario_id": "snowy_skalhorn_5_01",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "탐험대는 얼어붙은 눈밭에 다다랐다. 설원 한가운데 거대한 뿔잔이 차갑게 솟아 있었다.",
						"english": "The expedition team reached the frozen snowfield. In the middle of the wasteland, a colossal horn goblet stood chillingly.",
						"japanese": "探検隊は凍てついた雪原にたどり着いた。雪原の中央には巨大な角杯が冷たくそびえ立っていた。",
						"chinese": "探险队抵达了冰封的雪原。雪原中央，一个巨大的号角杯冰冷地矗立着。",
						"french": "L'équipe d'expédition atteignit le champ de neige gelé. Au milieu de l'étendue glacée, un colossal calice en corne s'élevait froidement.",
						"spanish": "El equipo de expedición llegó al campo de nieve congelado. En medio del páramo helado, un gigantesco cuerno se alzaba fríamente.",
						"vietnamese": "Đội thám hiểm đến cánh đồng tuyết đóng băng. Giữa hoang mạc, một chiếc cúp sừng khổng lồ đứng sừng sững lạnh lẽo.",
						"thai": "คณะสำรวจมาถึงทุ่งหิมะที่กลายเป็นน้ำแข็ง กลางทุ่งหิมะ ถ้วยเขาขนาดใหญ่ตั้งตระหง่านอย่างเย็นยะเยือก",
						"hindi": "अभियान दल जमे हुए बर्फ़ीले मैदान में पहुँचा। बंजर भूमि के बीच, एक विशाल सींग का प्याला ठंडा खड़ा था।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 잊힌 신의 뿔잔인가?",
						"english": "Is this... the forgotten god's horn goblet?",
						"japanese": "これが…忘れ去られた神の角杯なのか？",
						"chinese": "这…就是被遗忘之神的号角杯吗？",
						"french": "Est-ce… le calice en corne du dieu oublié ?",
						"spanish": "¿Es este... el cuerno del dios olvidado?",
						"vietnamese": "Đây là... chiếc cúp sừng của vị thần bị lãng quên sao?",
						"thai": "นี่คือ... ถ้วยเขาของเทพเจ้าที่ถูกลืมงั้นหรือ?",
						"hindi": "क्या यह... भूले हुए देवता का सींग का प्याला है?"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "기록에 있던 것과 같군.",
						"english": "Just as the records described.",
						"japanese": "記録にあったものと同じだ。",
						"chinese": "和记录上的一样。",
						"french": "C'est comme dans les registres.",
						"spanish": "Es tal como lo describían los registros.",
						"vietnamese": "Giống hệt những gì đã ghi chép.",
						"thai": "เหมือนกับที่บันทึกไว้",
						"hindi": "रिकॉर्ड में जैसा था, वैसा ही है।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "엄청나군. 이런 게 아직 남아있었다니.",
						"english": "Incredible. To think something like this still remained.",
						"japanese": "すごいな。こんなものがまだ残っていたとは。",
						"chinese": "太惊人了。没想到这种东西还能留存至今。",
						"french": "Incroyable. Penser que quelque chose comme ça ait pu subsister.",
						"spanish": "Increíble. Pensar que algo así todavía existía.",
						"vietnamese": "Thật không thể tin được. Không ngờ thứ này vẫn còn tồn tại.",
						"thai": "น่าทึ่งมาก ไม่คิดว่ายังมีอะไรแบบนี้หลงเหลืออยู่",
						"hindi": "अविश्वसनीय। यह सोचना कि ऐसा कुछ अभी भी बचा हुआ था।"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…이 뿔잔에서 희미한 노랫소리가 들려와.",
						"english": "...A faint melody emanates from this horn goblet.",
						"japanese": "…この角杯から、かすかな歌声が聞こえる。",
						"chinese": "这个号角杯里…传来微弱的歌声。",
						"french": "...Une mélodie faible émane de ce calice en corne.",
						"spanish": "...Una débil melodía emana de este cuerno.",
						"vietnamese": "...Một giai điệu mờ nhạt phát ra từ chiếc cúp sừng này.",
						"thai": "…มีเสียงเพลงแผ่วเบาเล็ดลอดออกมาจากถ้วยเขานี้",
						"hindi": "...इस सींग के प्याले से एक मधुर धुन आ रही है।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "잊힌 신의 언어로 기록된… 첫 단서로 남겨두자.",
						"english": "Recorded in the forgotten god's language... Let's keep it as our first clue.",
						"japanese": "忘れ去られた神の言語で記録されている…最初の手がかりとして残しておこう。",
						"chinese": "用被遗忘之神的语言记录的…作为第一个线索留着吧。",
						"french": "Écrit dans la langue du dieu oublié... Gardons-le comme notre première piste.",
						"spanish": "Escrito en el idioma del dios olvidado... Guardémoslo como nuestra primera pista.",
						"vietnamese": "Được ghi lại bằng ngôn ngữ của vị thần bị lãng quên... Hãy giữ nó làm manh mối đầu tiên của chúng ta.",
						"thai": "บันทึกด้วยภาษาของเทพเจ้าที่ถูกลืม... เก็บไว้เป็นเบาะแสแรกของเราเถอะ",
						"hindi": "भूले हुए देवता की भाषा में दर्ज... इसे अपने पहले सुराग के रूप में रखते हैं।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"하얀 눈밭, 그 한가운데 잠들어 있었다.",
			"오랜 세월을 버틴 거대한 뿔잔.",
			"다가설수록 옷깃을 여미게 되는 고요한 위엄.",
			"마치 잊힌 신의 성소에 든 것만 같았다."
		],
		"english": [
			"Amidst the white snowfield, it lay dormant.",
			"A colossal horn goblet, enduring through ages.",
			"A serene majesty that compels you to draw your cloak tighter as you approach.",
			"It felt as if I had entered the sanctuary of a forgotten god."
		],
		"japanese": [
			"白い雪原、その真ん中にそれは眠っていた。",
			"悠久の時を耐え抜いた巨大な角杯。",
			"近づくほどに襟元を正したくなる、静謐な威厳。",
			"まるで忘れ去られた神の聖域に足を踏み入れたかのようだった。"
		],
		"chinese": [
			"洁白的雪原中央，它沉睡着。",
			"一个历经沧桑的巨大号角杯。",
			"一种宁静的威严，让你越靠近越想整理衣襟。",
			"仿佛进入了被遗忘之神的圣所。"
		],
		"french": [
			"Au milieu d'un champ de neige blanc, il dormait.",
			"Un calice en corne colossal, ayant traversé les âges.",
			"Une majesté sereine qui vous pousse à resserrer votre cape à mesure que vous vous approchez.",
			"On aurait dit que j'étais entré dans le sanctuaire d'un dieu oublié."
		],
		"spanish": [
			"En medio del manto blanco de nieve, yacía dormido.",
			"Un cuerno gigante que resistió el paso del tiempo.",
			"Una majestuosidad serena que te obliga a abrocharte el abrigo al acercarte.",
			"Era como si hubiera entrado en el santuario de un dios olvidado."
		],
		"vietnamese": [
			"Giữa cánh đồng tuyết trắng, nó nằm im lìm.",
			"Một chiếc cúp sừng khổng lồ, đã tồn tại qua bao thời đại.",
			"Vẻ uy nghi tĩnh lặng khiến bạn phải thắt chặt áo choàng khi đến gần.",
			"Cứ như thể tôi đã bước vào thánh địa của một vị thần bị lãng quên."
		],
		"thai": [
			"ท่ามกลางทุ่งหิมะสีขาว มันหลับใหลอยู่",
			"ถ้วยเขาขนาดใหญ่ที่คงอยู่มาเนิ่นนาน",
			"ความสง่างามอันเงียบสงบที่ทำให้คุณต้องกระชับเสื้อคลุมเมื่อเข้าใกล้",
			"ราวกับว่าได้ก้าวเข้าสู่สถานศักดิ์สิทธิ์ของเทพเจ้าที่ถูกลืม"
		],
		"hindi": [
			"सफेद बर्फ़ीले मैदान के बीच, वह सोया हुआ था।",
			"एक विशाल सींग का प्याला, जो युगों से चला आ रहा था।",
			"एक शांत राजसी महिमा जो करीब आने पर तुम्हें अपना लबादा कसने पर मजबूर करती है।",
			"ऐसा लगा मानो मैं एक भूले हुए देवता के पवित्र स्थान में प्रवेश कर गया हूँ।"
		]
	}
} as const;
