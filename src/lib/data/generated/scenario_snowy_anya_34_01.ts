export const scenario_snowy_anya_34_01 = {
	"scenario_id": "snowy_anya_34_01",
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
					"emotion": "base",
					"content": {
						"korean": "눈보라가 잦아든 분지. 흰 눈 위에 작은 발자국이 찍혀 있었다.",
						"english": "The blizzard subsided in the basin. Small footprints were imprinted on the white snow.",
						"japanese": "吹雪が収まった盆地。白い雪の上に小さな足跡がついていた。",
						"chinese": "暴风雪平息的盆地。洁白的雪地上印着小小的脚印。",
						"french": "Le blizzard s'est calmé dans le bassin. De petites empreintes de pas étaient marquées sur la neige blanche.",
						"spanish": "La ventisca amainó en la cuenca. Pequeñas huellas estaban marcadas en la nieve blanca.",
						"vietnamese": "Cơn bão tuyết đã lắng xuống trong thung lũng. Những dấu chân nhỏ in trên nền tuyết trắng.",
						"thai": "พายุหิมะสงบลงในแอ่ง รอยเท้าเล็กๆ ปรากฏอยู่บนหิมะขาว.",
						"hindi": "घाटी में बर्फीला तूफ़ान थम गया। सफ़ेद बर्फ़ पर छोटे पदचिह्न अंकित थे।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게 발자국이라고?",
						"english": "Is this a footprint?",
						"japanese": "これが足跡だって？",
						"chinese": "这是脚印？",
						"french": "C'est une empreinte de pas ?",
						"spanish": "¿Esto es una huella?",
						"vietnamese": "Đây là dấu chân à?",
						"thai": "นี่คือรอยเท้าเหรอ?",
						"hindi": "क्या यह पदचिह्न है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너무 작아. 새 발자국인가?",
						"english": "Too small. A bird's footprint?",
						"japanese": "小さすぎる。鳥の足跡かな？",
						"chinese": "太小了。是鸟的脚印吗？",
						"french": "Trop petit. Une empreinte d'oiseau ?",
						"spanish": "Demasiado pequeña. ¿La huella de un pájaro?",
						"vietnamese": "Nhỏ quá. Dấu chân chim à?",
						"thai": "เล็กเกินไป รอยเท้านกเหรอ?",
						"hindi": "बहुत छोटा। क्या यह पक्षी का पदचिह्न है?"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "아니, 인간의 발자국이야. 아주 오래된.",
						"english": "No, it's a human footprint. Very old.",
						"japanese": "いや、人間の足跡だ。すごく古い。",
						"chinese": "不，是人类的脚印。非常古老。",
						"french": "Non, c'est une empreinte humaine. Très ancienne.",
						"spanish": "No, es una huella humana. Muy antigua.",
						"vietnamese": "Không, là dấu chân người. Rất cổ xưa.",
						"thai": "ไม่ใช่ รอยเท้ามนุษย์ต่างหาก เก่าแก่มาก.",
						"hindi": "नहीं, यह इंसान का पदचिह्न है। बहुत पुराना।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "봐. 같은 자리로 되돌아왔다가, 다시 나아가고 있어.",
						"english": "Look. It returned to the same spot, then moved forward again.",
						"japanese": "見て。同じ場所に戻ってきて、また進んでる。",
						"chinese": "看。它回到了同一个地方，然后又向前延伸。",
						"french": "Regarde. Il est revenu au même endroit, puis est reparti.",
						"spanish": "Mira. Volvió al mismo lugar y luego avanzó de nuevo.",
						"vietnamese": "Nhìn kìa. Nó quay lại cùng một chỗ, rồi lại đi tiếp.",
						"thai": "ดูสิ มันย้อนกลับมาที่เดิม แล้วก็เดินหน้าต่อไปอีก.",
						"hindi": "देखो। यह उसी जगह पर वापस आया, और फिर आगे बढ़ रहा है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…이상하네.",
						"english": "...Strange.",
						"japanese": "…おかしいな。",
						"chinese": "……奇怪。",
						"french": "...Étrange.",
						"spanish": "...Extraño.",
						"vietnamese": "...Lạ thật.",
						"thai": "...แปลกจัง.",
						"hindi": "...अजीब है।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "발자국은 계속 반복되고 있어.",
						"english": "The footsteps keep repeating.",
						"japanese": "足跡が繰り返し続いている。",
						"chinese": "脚印不断重复。",
						"french": "Les empreintes se répètent sans cesse.",
						"spanish": "Las huellas se repiten una y otra vez.",
						"vietnamese": "Dấu chân cứ lặp đi lặp lại.",
						"thai": "รอยเท้ายังคงซ้ำไปซ้ำมา",
						"hindi": "पदचिह्न लगातार दोहराए जा रहे हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "마치 무언가를 기다리는 것처럼… 혹은 찾지 못하는 것처럼.",
						"english": "As if waiting for something... or unable to find it.",
						"japanese": "何かを待っているかのように…あるいは見つけられないかのように。",
						"chinese": "仿佛在等待什么…又或是找不到什么。",
						"french": "Comme si elle attendait quelque chose... ou ne parvenait pas à le trouver.",
						"spanish": "Como si esperara algo... o no pudiera encontrarlo.",
						"vietnamese": "Cứ như thể đang chờ đợi điều gì đó... hoặc không thể tìm thấy.",
						"thai": "ราวกับกำลังรอคอยอะไรบางอย่าง... หรือหาไม่พบ.",
						"hindi": "मानो किसी चीज़ का इंतज़ार कर रहा हो... या उसे ढूंढ नहीं पा रहा हो।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왜 같은 길을 계속 걷는 거지?",
						"english": "Why keep walking the same path?",
						"japanese": "なぜ同じ道を歩き続けるのだろう？",
						"chinese": "为什么一直走同一条路？",
						"french": "Pourquoi continuer à emprunter le même chemin ?",
						"spanish": "¿Por qué sigue caminando por el mismo camino?",
						"vietnamese": "Sao cứ đi mãi một lối vậy?",
						"thai": "ทำไมถึงยังคงเดินบนเส้นทางเดิม?",
						"hindi": "एक ही रास्ते पर क्यों चलते रहना है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그 답은, 이 발자국이 닿는 곳에 있겠지.",
						"english": "The answer must be where these footsteps lead.",
						"japanese": "その答えは、この足跡が辿り着く場所にあるのだろう。",
						"chinese": "答案，就在这些脚印所及之处吧。",
						"french": "La réponse se trouve sûrement là où ces empreintes mènent.",
						"spanish": "La respuesta debe estar donde estas huellas llegan.",
						"vietnamese": "Câu trả lời, hẳn là ở nơi những dấu chân này dừng lại.",
						"thai": "คำตอบคงอยู่ที่ที่รอยเท้าเหล่านี้ไปถึง.",
						"hindi": "उस सवाल का जवाब, इन पदचिह्नों के छोर पर होगा।"
					},
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 룬을 봐. 발자국과 함께 새겨져 있어.",
						"english": "Look at this rune. It's carved alongside the footsteps.",
						"japanese": "このルーンを見て。足跡と一緒に刻まれている。",
						"chinese": "看这符文。它和脚印刻在一起。",
						"french": "Regarde cette rune. Elle est gravée à côté des empreintes.",
						"spanish": "Mira esta runa. Está tallada junto a las huellas.",
						"vietnamese": "Nhìn cổ ngữ này. Nó được khắc cùng dấu chân.",
						"thai": "ดูรูนนี้สิ. มันถูกสลักคู่กับรอยเท้า.",
						"hindi": "इस रूण को देखो। यह पदचिह्नों के साथ खुदा हुआ है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "아주 오래된, 잊힌 언어의 흔적이야.",
						"english": "Traces of a very old, forgotten language.",
						"japanese": "とても古い、忘れ去られた言語の痕跡だ。",
						"chinese": "是 G古老，被遗忘语言的痕迹。",
						"french": "Les traces d'une langue très ancienne et oubliée.",
						"spanish": "Vestigios de una lengua muy antigua y olvidada.",
						"vietnamese": "Dấu vết của một ngôn ngữ rất cổ xưa, đã bị lãng quên.",
						"thai": "ร่องรอยของภาษาเก่าแก่ที่ถูกลืมเลือน.",
						"hindi": "यह एक बहुत पुरानी, भूली हुई भाषा का निशान है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What does it mean?",
						"japanese": "どういう意味だ？",
						"chinese": "这是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa?",
						"vietnamese": "Có nghĩa là gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					}
				},
				{
					"content": {
						"korean": "…",
						"english": "...",
						"japanese": "...",
						"chinese": "...",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "…\"빛\" 그리고 \"기다림\".",
						"english": "...",
						"japanese": "…「光」そして「待ち望む」。",
						"chinese": "…“光”和“等待”。",
						"french": "...« Lumière » et « Attente ».",
						"spanish": "...\"Luz\" y \"Espera\".",
						"vietnamese": "...",
						"thai": "...“แสง” และ “การรอคอย”.",
						"hindi": "...\"प्रकाश\" और \"इंतज़ार\"।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "빛을 기다린다고?",
						"english": "Waiting for light?",
						"japanese": "光を待つのか？",
						"chinese": "等待光？",
						"french": "Attendre la lumière ?",
						"spanish": "¿Esperando la luz?",
						"vietnamese": "Chờ đợi ánh sáng sao?",
						"thai": "รอคอยแสงงั้นเหรอ?",
						"hindi": "प्रकाश का इंतज़ार?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "발자국이 점점 선명해지고 있어.",
						"english": "The footprints are becoming clearer.",
						"japanese": "足跡がだんだん鮮明になってきている。",
						"chinese": "脚印越来越清晰了。",
						"french": "Les empreintes deviennent de plus en plus nettes.",
						"spanish": "Las huellas se están volviendo cada vez más claras.",
						"vietnamese": "Dấu chân ngày càng rõ nét hơn.",
						"thai": "รอยเท้าเริ่มชัดขึ้นเรื่อยๆ",
						"hindi": "पदचिह्न और भी स्पष्ट होते जा रहे हैं।"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "여기가, 그 \"빛\"이 가장 오래 머문 자리인가…?",
						"english": "Is this where \"the Light\" lingered the longest...?",
						"japanese": "ここが、「光」が最も長く留まった場所なのか…？",
						"chinese": "这里是“光”停留最久的地方吗……？",
						"french": "Est-ce ici que \"la Lumière\" s'est attardée le plus longtemps...?",
						"spanish": "¿Es aquí donde \"la Luz\" permaneció más tiempo...?",
						"vietnamese": "Đây có phải là nơi \"Ánh Sáng\" nán lại lâu nhất không...?",
						"thai": "ที่นี่คือที่ที่ \"แสง\" อยู่ได้นานที่สุดงั้นหรือ...?",
						"hindi": "क्या यह वह जगह है जहाँ \"प्रकाश\" सबसे लंबे समय तक रहा...?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "점점… 깊어지는 기분이야.",
						"english": "It feels... deeper and deeper.",
						"japanese": "だんだん…深くなっていく気がする。",
						"chinese": "感觉…越来越深了。",
						"french": "On dirait que ça s'enfonce... de plus en plus.",
						"spanish": "Se siente... cada vez más profundo.",
						"vietnamese": "Cảm giác như... càng lúc càng sâu hơn.",
						"thai": "รู้สึก… ลึกขึ้นเรื่อยๆ เลย",
						"hindi": "यह और भी गहरा होता जा रहा है… ऐसा लग रहा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이 자취의 끝에서… 우리는 무엇을 발견하게 될까.",
						"english": "At the end of this trail... what will we discover?",
						"japanese": "この足跡の果てに…私たちは何を発見するのだろう。",
						"chinese": "在这痕迹的尽头…我们会发现什么呢？",
						"french": "Au bout de cette trace... que découvrirons-nous ?",
						"spanish": "Al final de este rastro... ¿qué descubriremos?",
						"vietnamese": "Cuối con con đường này... chúng ta sẽ khám phá ra điều gì?",
						"thai": "ณ ปลายทางของร่องรอยนี้… เราจะค้นพบอะไรกันนะ",
						"hindi": "इस निशान के अंत में… हम क्या खोजेंगे?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…설마, {random_boss}와 관련 있는 건가?",
						"english": "...Could it be related to {random_boss}?",
						"japanese": "…まさか、{random_boss}と関係があるのか？",
						"chinese": "……难道，这和{random_boss}有关？",
						"french": "...Serait-ce lié à {random_boss} ?",
						"spanish": "...¿Podría estar relacionado con {random_boss}?",
						"vietnamese": "...Lẽ nào, điều này liên quan đến {random_boss}?",
						"thai": "…หรือว่าเกี่ยวข้องกับ {random_boss} กันแน่?",
						"hindi": "...कहीं यह {random_boss} से संबंधित तो नहीं?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "너희도… 결국, 되풀이될 뿐.",
						"english": "You too... in the end, will only repeat.",
						"japanese": "お前たちも…結局、繰り返されるだけだ。",
						"chinese": "你们也…终将，只是重蹈覆辙。",
						"french": "Vous aussi... finalement, ne ferez que vous répéter.",
						"spanish": "Vosotros también... al final, solo os repetiréis.",
						"vietnamese": "Các ngươi cũng... rốt cuộc, chỉ là lặp lại mà thôi.",
						"thai": "พวกเจ้าเองก็... สุดท้ายแล้ว ก็แค่ซ้ำรอยเดิม.",
						"hindi": "तुम भी... अंततः, सिर्फ दोहराए जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "...まだ終わってない。",
						"chinese": "...还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Esto aún no ha terminado.",
						"vietnamese": "...Chưa xong đâu.",
						"thai": "...ยังไม่จบแค่นี้หรอก!",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "반드시 이 미로를 끝낼 거야.",
						"english": "I will definitely finish this maze.",
						"japanese": "必ずこの迷路を終わらせる。",
						"chinese": "我一定要走出这个迷宫。",
						"french": "Je finirai ce labyrinthe, c'est certain.",
						"spanish": "Definitivamente terminaré este laberinto.",
						"vietnamese": "Tôi nhất định sẽ kết thúc mê cung này.",
						"thai": "ฉันจะจบเขาวงกตนี้ให้ได้!",
						"hindi": "मैं इस भूलभुलैया को निश्चित रूप से खत्म करूँगा।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…또다시, 침입자들이 오는구나.",
						"english": "...Again, the invaders are coming.",
						"japanese": "…また、侵入者たちが来るのか。",
						"chinese": "……入侵者又来了。",
						"french": "...Encore une fois, les envahisseurs arrivent.",
						"spanish": "...De nuevo, los invasores vienen.",
						"vietnamese": "...Lại một lần nữa, những kẻ xâm nhập đang đến.",
						"thai": "…อีกครั้งที่พวกผู้บุกรุกมาเยือน",
						"hindi": "...फिर से, घुसपैठिए आ रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "이 작은 흔적을 따라… 여기까지.",
						"english": "Following this small trace... all the way here.",
						"japanese": "この小さな痕跡を追って…ここまで。",
						"chinese": "循着这微小的痕迹…来到了这里。",
						"french": "En suivant cette petite trace... jusqu'ici.",
						"spanish": "Siguiendo este pequeño rastro... hasta aquí.",
						"vietnamese": "Theo dấu vết nhỏ bé này... đến tận đây.",
						"thai": "ตามรอยเล็กๆ นี้มา… จนถึงที่นี่",
						"hindi": "इस छोटे से निशान का पीछा करते हुए… यहाँ तक।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 발자국을 만든 거야?",
						"english": "Did you make these footprints?",
						"japanese": "お前がこの足跡をつけたのか？",
						"chinese": "这些脚印是你留下的吗？",
						"french": "C'est toi qui as fait ces empreintes ?",
						"spanish": "¿Tú hiciste estas huellas?",
						"vietnamese": "Ngươi đã tạo ra những dấu chân này sao?",
						"thai": "เจ้าเป็นคนสร้างรอยเท้าพวกนี้งั้นหรือ?",
						"hindi": "क्या तुमने ये पदचिह्न बनाए हैं?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…나는 그저, 지켜보는 자.",
						"english": "...I am merely, the one who watches.",
						"japanese": "…私はただ、見守る者。",
						"chinese": "……我只是，旁观者。",
						"french": "...Je ne suis qu'un observateur.",
						"spanish": "...Yo solo soy, el que observa.",
						"vietnamese": "...Ta chỉ là, kẻ đứng nhìn.",
						"thai": "…ข้าเป็นเพียงผู้เฝ้ามอง",
						"hindi": "...मैं तो बस, देखने वाला हूँ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "…그림자 안에 잊힌 룬이 가득해.",
						"english": "...The shadows are filled with forgotten runes.",
						"japanese": "…影の中には忘れられたルーンが満ちている。",
						"chinese": "……阴影中充满了被遗忘的符文。",
						"french": "...Les ombres sont remplies de runes oubliées.",
						"spanish": "...Las sombras están llenas de runas olvidadas.",
						"vietnamese": "...Trong bóng tối tràn ngập những rune bị lãng quên.",
						"thai": "…เงาเต็มไปด้วยอักษรรูนที่ถูกลืม",
						"hindi": "...परछाइयों में भूले हुए रून्स भरे हैं।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은… 이 모든 기록의 시작이군요.",
						"english": "You... are the beginning of all these records.",
						"japanese": "あなたは…このすべての記録の始まりですね。",
						"chinese": "你…是所有这些记录的开端。",
						"french": "Vous êtes... le début de tous ces enregistrements.",
						"spanish": "Tú... eres el comienzo de todos estos registros.",
						"vietnamese": "Ngươi... là khởi đầu của tất cả những ghi chép này.",
						"thai": "เจ้า... คือจุดเริ่มต้นของบันทึกทั้งหมดนี้",
						"hindi": "तुम... इन सभी अभिलेखों की शुरुआत हो।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기록… 하려는가? 모든 것을?",
						"english": "Will you... record? Everything?",
						"japanese": "記録…するつもりか？すべてを？",
						"chinese": "要记录…吗？所有的一切？",
						"french": "Allez-vous... enregistrer ? Tout ?",
						"spanish": "¿Vas a... registrarlo? ¿Todo?",
						"vietnamese": "Ngươi định... ghi lại? Tất cả sao?",
						"thai": "จะ... บันทึกงั้นหรือ? ทุกสิ่งเลยหรือ?",
						"hindi": "क्या तुम... रिकॉर्ड करोगे? सब कुछ?"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "물러서. 우리의 길을 막지 마.",
						"english": "Step back. Do not block our path.",
						"japanese": "退け。我らの道を阻むな。",
						"chinese": "退下。别挡我们的路。",
						"french": "Reculez. Ne barrez pas notre chemin.",
						"spanish": "Apártate. No bloquees nuestro camino.",
						"vietnamese": "Lùi lại. Đừng cản đường chúng ta.",
						"thai": "ถอยไป. อย่าขวางทางเรา.",
						"hindi": "पीछे हटो। हमारा रास्ता मत रोको।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 이 길은, 끝이 없다.",
						"english": "Fools... This path has no end.",
						"japanese": "愚かな者たちよ…この道に、終わりはない。",
						"chinese": "愚蠢的东西…这条路，没有尽头。",
						"french": "Fous... Ce chemin est sans fin.",
						"spanish": "Necios... Este camino no tiene fin.",
						"vietnamese": "Những kẻ ngu ngốc... Con đường này, không có hồi kết.",
						"thai": "พวกโง่เขลา... เส้นทางนี้ ไม่มีที่สิ้นสุด.",
						"hindi": "मूर्खों... इस मार्ग का कोई अंत नहीं है।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "결국… 나는 또다시, 되돌아가겠지.",
						"english": "In the end... I will return again.",
						"japanese": "結局…私はまた、戻るのだろう。",
						"chinese": "最终…我终将再次，回到原点吧。",
						"french": "Finalement... je reviendrai encore une fois.",
						"spanish": "Al final... volveré de nuevo.",
						"vietnamese": "Rốt cuộc... ta sẽ lại quay trở lại thôi.",
						"thai": "สุดท้าย... ข้าก็คงจะย้อนกลับไปอีกครั้ง",
						"hindi": "अंततः... मैं फिर से लौट आऊँगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐라고?",
						"english": "What?",
						"japanese": "何だと？",
						"chinese": "你说什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไรนะ?",
						"hindi": "क्या कहा?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…발자국은 사라졌지만… 그의 영혼은 여전히 반복되는 빛 속에 갇혀있어.",
						"english": "...The footprints are gone... but his soul is still trapped in the repeating light.",
						"japanese": "…足跡は消えたが…彼の魂は、未だ繰り返される光の中に囚われている。",
						"chinese": "…脚印消失了…但他的灵魂仍被困在循环的光芒中。",
						"french": "...Les empreintes ont disparu... mais son âme est toujours piégée dans la lumière répétitive.",
						"spanish": "...Las huellas desaparecieron... pero su alma sigue atrapada en la luz que se repite.",
						"vietnamese": "...Dấu chân đã biến mất... nhưng linh hồn hắn vẫn bị mắc kẹt trong ánh sáng lặp lại.",
						"thai": "...รอยเท้าหายไปแล้ว... แต่ดวงวิญญาณของเขายังคงถูกขังอยู่ในแสงที่ซ้ำไปมา.",
						"hindi": "...पगचिह्न मिट गए... लेकिन उसकी आत्मा अभी भी दोहराई जाने वाली रोशनी में फंसी है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어쩌면, 우리는 아직 시작점에 서 있는지도 모른다.",
						"english": "Perhaps, we might still be at the starting point.",
						"japanese": "ひょっとしたら、我々はまだ、始点に立っているのかもしれない。",
						"chinese": "或许，我们还站在起点。",
						"french": "Peut-être sommes-nous encore au point de départ.",
						"spanish": "Quizás, todavía estamos en el punto de partida.",
						"vietnamese": "Có lẽ, chúng ta vẫn đang đứng ở điểm khởi đầu.",
						"thai": "บางที เราอาจจะยังคงอยู่ที่จุดเริ่มต้น.",
						"hindi": "शायद, हम अभी भी शुरुआती बिंदु पर खड़े हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…우리가 본 건, 일부에 불과했어.",
						"english": "...What we saw, was just a part.",
						"japanese": "…我々が見たのは、一部に過ぎなかった。",
						"chinese": "…我们所见的，不过是冰山一角。",
						"french": "...Ce que nous avons vu n'était qu'une partie.",
						"spanish": "...Lo que vimos, fue solo una parte.",
						"vietnamese": "...Những gì chúng ta thấy, chỉ là một phần nhỏ.",
						"thai": "...สิ่งที่เราเห็น เป็นเพียงส่วนหนึ่งเท่านั้น.",
						"hindi": "...जो हमने देखा, वह सिर्फ एक हिस्सा था।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 잦아들었다. 고요한 분지 위.",
			"새하얀 눈밭에 희미한 발자국 하나.",
			"아주 작고, 끝없이 되풀이되는 흔적이었다.",
			"우리는 그 자취를 따라, 잊힌 시간을 걷는다."
		],
		"english": [
			"The blizzard subsided. Above the quiet basin.",
			"A faint footprint in the pristine white snow.",
			"It was a very small, endlessly repeating trace.",
			"We follow that trace, walking through forgotten time."
		],
		"japanese": [
			"吹雪が収まった。静かな盆地の上。",
			"真っ白な雪原に、かすかな足跡が一つ。",
			"それはとても小さく、限りなく繰り返される痕跡だった。",
			"我々はその足跡を辿り、忘れ去られた時を歩む。"
		],
		"chinese": [
			"暴风雪停了。在宁静的盆地之上。",
			"洁白的雪地上，一个模糊的脚印。",
			"那是一个非常小，却无止境重复的痕迹。",
			"我们循着那痕迹，走过被遗忘的时光。"
		],
		"french": [
			"La tempête de neige s'est calmée. Au-dessus du bassin paisible.",
			"Une faible empreinte dans la neige immaculée.",
			"C'était une très petite trace, se répétant à l'infini.",
			"Nous suivons cette trace, marchant à travers un temps oublié."
		],
		"spanish": [
			"La ventisca amainó. Sobre la cuenca silenciosa.",
			"Una tenue huella en la nieve inmaculada.",
			"Era un rastro muy pequeño, que se repetía sin cesar.",
			"Seguimos esa huella, caminando por el tiempo olvidado."
		],
		"vietnamese": [
			"Cơn bão tuyết đã lắng xuống. Trên thung lũng yên tĩnh.",
			"Một dấu chân mờ nhạt trên nền tuyết trắng tinh.",
			"Đó là một dấu vết rất nhỏ, lặp đi lặp lại không ngừng.",
			"Chúng ta dõi theo dấu vết đó, bước đi qua thời gian bị lãng quên."
		],
		"thai": [
			"พายุหิมะสงบลงแล้ว เหนือแอ่งที่เงียบสงบ.",
			"รอยเท้าจางๆ หนึ่งรอยบนหิมะขาวบริสุทธิ์.",
			"มันเป็นรอยที่เล็กมาก ซ้ำไปซ้ำมาไม่รู้จบ.",
			"เราเดินตามรอยนั้น ก้าวผ่านกาลเวลาที่ถูกลืม."
		],
		"hindi": [
			"बर्फीला तूफ़ान थम गया। शांत घाटी के ऊपर।",
			"बिलकुल सफ़ेद बर्फ़ पर एक धुंधला पदचिह्न।",
			"वह एक बहुत छोटा, अंतहीन रूप से दोहराया जाने वाला निशान था।",
			"हम उस निशान का पीछा करते हुए, भूले हुए समय में चलते हैं।"
		]
	}
} as const;
