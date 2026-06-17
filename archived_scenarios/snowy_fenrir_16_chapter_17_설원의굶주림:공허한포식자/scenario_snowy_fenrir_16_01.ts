export const scenario_snowy_fenrir_16_01 = {
	"scenario_id": "snowy_fenrir_16_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없는 설원, 숨 쉬는 것조차 얼어붙는 대지.",
			"전설 속 맹수, 펜리르가 나타났다.",
			"무모한 추격인가, 아니면 피할 수 없는 운명인가.",
			"미지의 굶주림이, 서서히 모든 것을 집어삼키려 한다."
		],
		"english": [
			"Endless snowfields, a land where even breathing freezes.",
			"Fenrir, the legendary beast, has appeared.",
			"A reckless pursuit, or unavoidable fate?",
			"An unknown hunger slowly begins to devour everything."
		],
		"japanese": [
			"終わりのない雪原、息をする事さえ凍てつく大地。",
			"伝説の猛獣、フェンリルが現れた。",
			"無謀な追跡か、それとも避けられぬ運命か。",
			"未知の飢えが、ゆっくりと全てを呑み込もうとしている。"
		],
		"chinese": [
			"无尽的雪原，连呼吸都会冻结的大地。",
			"传说中的猛兽，芬里尔出现了。",
			"是鲁莽的追击，还是无法逃避的命运？",
			"未知的饥饿，正缓缓吞噬一切。"
		],
		"french": [
			"Plaines enneigées sans fin, une terre où même respirer gèle.",
			"Fenrir, la bête légendaire, est apparu.",
			"Une poursuite téméraire, ou un destin inévitable ?",
			"Une faim inconnue commence lentement à tout dévorer."
		],
		"spanish": [
			"Campos de nieve interminables, una tierra donde incluso respirar se congela.",
			"Fenrir, la bestia legendaria, ha aparecido.",
			"¿Una persecución temeraria o un destino ineludible?",
			"Un hambre desconocida comienza lentamente a devorarlo todo."
		],
		"vietnamese": [
			"Tuyết nguyên vô tận, vùng đất mà ngay cả hơi thở cũng đóng băng.",
			"Fenrir, mãnh thú trong truyền thuyết, đã xuất hiện.",
			"Một cuộc truy đuổi liều lĩnh, hay số phận không thể tránh khỏi?",
			"Một cơn đói vô định, đang dần nuốt chửng mọi thứ."
		],
		"thai": [
			"ทุ่งหิมะอันไร้ที่สิ้นสุด แผ่นดินที่แม้แต่ลมหายใจยังแข็งตัว",
			"เฟนรีร์ สัตว์ร้ายในตำนาน ปรากฏกายแล้ว",
			"การไล่ล่าที่บ้าระห่ำ หรือชะตากรรมที่ไม่อาจหลีกเลี่ยง?",
			"ความหิวโหยที่ไม่รู้จัก กำลังค่อยๆ กลืนกินทุกสิ่ง"
		],
		"hindi": [
			"अंतहीन बर्फीले मैदान, एक ऐसी भूमि जहाँ साँस लेना भी जम जाता है।",
			"फेन्रिर, पौराणिक जानवर, प्रकट हुआ है।",
			"एक लापरवाह पीछा, या अपरिहार्य भाग्य?",
			"एक अज्ञात भूख, धीरे-धीरे सब कुछ निगलने लगती है।"
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
						"korean": "눈보라가 몰아치는 설원. 발자국조차 남기기 힘든 곳이었다.",
						"english": "A blizzard-swept snowfield. A place where even footprints were hard to leave.",
						"japanese": "吹雪が吹き荒れる雪原。足跡さえ残しにくい場所だった。",
						"chinese": "暴风雪肆虐的雪原。一个连脚印都难以留下之地。",
						"french": "Une plaine enneigée balayée par le blizzard. Un endroit où même les empreintes de pas étaient difficiles à laisser.",
						"spanish": "Un campo de nieve azotado por la ventisca. Un lugar donde incluso las huellas eran difíciles de dejar.",
						"vietnamese": "Tuyết nguyên bão tuyết càn quét. Một nơi mà ngay cả dấu chân cũng khó lòng lưu lại.",
						"thai": "ทุ่งหิมะที่พายุหิมะโหมกระหน่ำ เป็นสถานที่ที่แม้แต่รอยเท้าก็ยังทิ้งไว้ยาก",
						"hindi": "बर्फीला तूफ़ान से घिरा एक बर्फीला मैदान। एक ऐसी जगह जहाँ पदचिह्न छोड़ना भी मुश्किल था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "대체 어디까지 가는 거야?",
						"english": "Just how far are we going?",
						"japanese": "一体どこまで行くんだ？",
						"chinese": "到底要去哪儿？",
						"french": "Jusqu'où allons-nous ?",
						"spanish": "¿Hasta dónde vamos?",
						"vietnamese": "Rốt cuộc là đi đến đâu đây?",
						"thai": "เราจะไปไกลแค่ไหนกัน?",
						"hindi": "आखिर हम कहाँ तक जा रहे हैं?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "곧 펜리르의 흔적이 나올 거다. 정신 차려.",
						"english": "Fenrir's traces will appear soon. Stay sharp.",
						"japanese": "もうすぐフェンリルの痕跡が見つかるだろう。気を引き締めろ。",
						"chinese": "芬里尔的踪迹很快就会出现。振作起来。",
						"french": "Les traces de Fenrir apparaîtront bientôt. Reste vigilant.",
						"spanish": "Pronto aparecerán las huellas de Fenrir. Mantente alerta.",
						"vietnamese": "Dấu vết của Fenrir sẽ sớm xuất hiện thôi. Tỉnh táo lại đi.",
						"thai": "ร่องรอยของเฟนรีร์จะปรากฏขึ้นในไม่ช้า ตั้งสติไว้",
						"hindi": "फेन्रिर के निशान जल्द ही दिखेंगे। सतर्क रहो।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저 괴물이 정말 전설 속 늑대일까?",
						"english": "Is that monster really the legendary wolf?",
						"japanese": "あの怪物が本当に伝説の狼なのか？",
						"chinese": "那个怪物真的是传说中的狼吗？",
						"french": "Ce monstre est-il vraiment le loup légendaire ?",
						"spanish": "¿Ese monstruo es realmente el lobo legendario?",
						"vietnamese": "Con quái vật đó có thật sự là con sói trong truyền thuyết không?",
						"thai": "สัตว์ประหลาดตัวนั้นเป็นหมาป่าในตำนานจริงหรือ?",
						"hindi": "क्या वह दानव वाकई पौराणिक भेड़िया है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "전설은 괜히 생기는 게 아니야. 눈에 담은 공허함… 단순한 짐승이 아니지.",
						"english": "Legends don't just appear for no reason. The emptiness in its eyes... it's no mere beast.",
						"japanese": "伝説は伊達に生まれるものじゃない。目に宿る虚無…ただの獣ではない。",
						"chinese": "传说并非空穴来风。眼中蕴含的空虚…绝非寻常野兽。",
						"french": "Les légendes ne naissent pas sans raison. Le vide dans ses yeux… ce n'est pas une simple bête.",
						"spanish": "Las leyendas no surgen de la nada. El vacío en sus ojos... no es una bestia cualquiera.",
						"vietnamese": "Truyền thuyết không tự nhiên mà có. Sự trống rỗng trong mắt nó... đó không phải là một con thú đơn thuần.",
						"thai": "ตำนานไม่ได้เกิดขึ้นมาโดยไม่มีเหตุผล ความว่างเปล่าในดวงตาของมัน... ไม่ใช่แค่สัตว์ร้ายธรรมดา",
						"hindi": "किंवदंतियाँ यूँ ही नहीं बनतीं। उसकी आँखों में शून्यपन... वह मात्र एक जानवर नहीं है।"
					},
					"speaker": "bran",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "놈이 지나간 자리다. 뭔가 이상해.",
						"english": "This is where it passed. Something's off.",
						"japanese": "奴が通り過ぎた場所だ。何かおかしい。",
						"chinese": "它经过的地方。有些不对劲。",
						"french": "C'est là qu'il est passé. Quelque chose ne va pas.",
						"spanish": "Es por donde pasó. Algo no está bien.",
						"vietnamese": "Đây là nơi nó đã đi qua. Có gì đó không ổn.",
						"thai": "นี่คือที่ที่มันผ่านไป มีบางอย่างผิดปกติ",
						"hindi": "यह वह जगह है जहाँ वह गुजरा था। कुछ गड़बड़ है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가?",
						"english": "What?",
						"japanese": "「何を？」",
						"chinese": "“什么？”",
						"french": "« Quoi ? »",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไรนะ?",
						"hindi": "क्या?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "보통 맹수는 먹고 남은 흔적을 남기지. 이건… 흔적 자체가 없어.",
						"english": "Usually, predators leave traces after eating. This… there's no trace at all.",
						"japanese": "「普通の猛獣は食べた痕跡を残す。これは…痕跡自体がない。」",
						"chinese": "“通常猛兽吃完会留下痕迹。但这…根本没有痕迹。”",
						"french": "« D'habitude, les prédateurs laissent des traces après avoir mangé. Là... il n'y a aucune trace. »",
						"spanish": "Normalmente, los depredadores dejan rastros después de comer. Esto... no hay rastro en absoluto.",
						"vietnamese": "Thường thì thú dữ sẽ để lại dấu vết sau khi ăn. Còn cái này... không có dấu vết nào cả.",
						"thai": "ปกติแล้ว สัตว์ร้ายจะทิ้งร่องรอยไว้หลังจากกิน นี่มัน... ไม่มีร่องรอยเลย",
						"hindi": "आमतौर पर, शिकारी खाने के बाद निशान छोड़ते हैं। यह... कोई निशान ही नहीं है।"
					},
					"speaker": "bran",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "깔끔하게 먹어치운 거 아니야?",
						"english": "Didn't it just eat it cleanly?",
						"japanese": "「きれいに食べ尽くしたんじゃない？」",
						"chinese": "“不是吃得很干净吗？”",
						"french": "« N'aurait-il pas tout dévoré sans laisser de trace ? »",
						"spanish": "¿No se lo comió limpiamente?",
						"vietnamese": "Không phải là nó đã ăn sạch sẽ sao?",
						"thai": "มันไม่ได้กินจนหมดเกลี้ยงเลยเหรอ?",
						"hindi": "क्या उसने बस इसे साफ़-सुथरा नहीं खाया?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니, 마치… 존재 자체가 사라진 듯이.",
						"english": "No, it's like… its very existence vanished.",
						"japanese": "「いや、まるで…存在自体が消え去ったかのように。」",
						"chinese": "“不，就像…它的存在本身消失了一样。”",
						"french": "« Non, c'est comme si... son existence même avait disparu. »",
						"spanish": "No, es como si... su existencia misma hubiera desaparecido.",
						"vietnamese": "Không, cứ như thể... sự tồn tại của nó đã biến mất vậy.",
						"thai": "ไม่สิ เหมือนว่า... การมีอยู่ของมันหายไปเลย",
						"hindi": "नहीं, ऐसा लगता है... जैसे उसका अस्तित्व ही मिट गया हो।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "펜리르는 이 정도 상처엔 쓰러져야 했다.",
						"english": "Fenrir should have fallen from a wound like this.",
						"japanese": "「フェンリルはこれほどの傷で倒れるはずだった。」",
						"chinese": "“芬里尔应该在这种伤势下倒下。”",
						"french": "« Fenrir aurait dû succomber à une telle blessure. »",
						"spanish": "Fenrir debería haber caído con una herida como esta.",
						"vietnamese": "Fenrir đáng lẽ đã gục ngã với vết thương như thế này.",
						"thai": "เฟนรีร์ควรจะล้มลงด้วยบาดแผลแค่นี้",
						"hindi": "इस तरह के घाव से फेनरि़र को गिर जाना चाहिए था।"
					},
					"speaker": "bran",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "상처가… 감쪽같이 사라졌어.",
						"english": "The wound… completely vanished.",
						"japanese": "「傷が…跡形もなく消えた。」",
						"chinese": "“伤口…完全消失了。”",
						"french": "« La blessure… a complètement disparu. »",
						"spanish": "La herida... desapareció por completo.",
						"vietnamese": "Vết thương... biến mất một cách thần kỳ.",
						"thai": "บาดแผล... หายไปอย่างไร้ร่องรอย",
						"hindi": "घाव... पूरी तरह से गायब हो गया।"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내 평생 이런 맹수는 본 적이 없어. 내가 아는 모든 게 틀렸단 말인가?",
						"english": "I've never seen such a beast in my life. Is everything I know wrong?",
						"japanese": "「こんな猛獣は生まれて初めて見た。私の知るすべてが間違っていたのか？」",
						"chinese": "“我这辈子从未见过这样的猛兽。难道我所知的一切都是错的吗？”",
						"french": "« Je n'ai jamais vu une telle bête de ma vie. Tout ce que je sais est-il faux ? »",
						"spanish": "Nunca he visto una bestia así en mi vida. ¿Acaso todo lo que sé está mal?",
						"vietnamese": "Tôi chưa từng thấy con thú dữ nào như vậy trong đời. Có lẽ tất cả những gì tôi biết đều sai?",
						"thai": "ฉันไม่เคยเห็นสัตว์ร้ายแบบนี้มาก่อนในชีวิต หรือว่าทุกสิ่งที่ฉันรู้มันผิดไปหมดแล้ว?",
						"hindi": "मैंने अपने जीवन में ऐसा जानवर कभी नहीं देखा। क्या जो कुछ भी मैं जानता हूँ वह गलत है?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "놈은 죽지 않아. 싸울수록 더 강해지는 것 같아.",
						"english": "It won't die. It seems to get stronger the more it fights.",
						"japanese": "「あいつは死なない。戦えば戦うほど強くなるようだ。」",
						"chinese": "“它不会死。似乎越战越强。”",
						"french": "« Il ne mourra pas. Il semble devenir plus fort à mesure qu'il se bat. »",
						"spanish": "No morirá. Parece que se vuelve más fuerte cuanto más lucha.",
						"vietnamese": "Nó không chết. Dường như càng chiến đấu, nó càng mạnh hơn.",
						"thai": "มันไม่ตาย มันดูเหมือนจะแข็งแกร่งขึ้นเรื่อยๆ ยิ่งสู้ยิ่งแข็งแกร่ง",
						"hindi": "वह नहीं मरेगा। ऐसा लगता है कि वह जितना लड़ता है, उतना ही मजबूत होता जाता है।"
					},
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 사냥이 아니야. 차라리… 저주에 가깝지.",
						"english": "This isn't a hunt. Rather… it's closer to a curse.",
						"japanese": "「これは狩りじゃない。むしろ…呪いに近い。」",
						"chinese": "“这不是狩猎。倒不如说…更像是诅咒。”",
						"french": "« Ce n'est pas une chasse. C'est plutôt… une malédiction. »",
						"spanish": "Esto no es una cacería. Más bien... se acerca a una maldición.",
						"vietnamese": "Đây không phải là một cuộc săn. Thay vào đó... nó gần giống một lời nguyền.",
						"thai": "นี่ไม่ใช่การล่าสัตว์ แต่มัน... ใกล้เคียงกับคำสาปมากกว่า",
						"hindi": "यह शिकार नहीं है। बल्कि... यह एक अभिशाप के करीब है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "설원의 심장부. 매 발걸음마다 희망이 얼어붙는 곳.",
						"english": "The heart of the snowfield. Where hope freezes with every step.",
						"japanese": "「雪原の心臓部。一歩ごとに希望が凍りつく場所。」",
						"chinese": "“雪原深处。每一步都让希望冻结的地方。”",
						"french": "« Le cœur du champ de neige. Là où l'espoir gèle à chaque pas. »",
						"spanish": "El corazón del campo de nieve. Donde la esperanza se congela con cada paso.",
						"vietnamese": "Trung tâm của cánh đồng tuyết. Nơi hy vọng đóng băng với mỗi bước chân.",
						"thai": "ใจกลางทุ่งหิมะ สถานที่ที่ความหวังแข็งตัวไปพร้อมกับทุกย่างก้าว",
						"hindi": "बर्फ़ीले मैदान का हृदय। जहाँ हर कदम पर उम्मीद जम जाती है।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "이 길의 끝은 파멸뿐일지도 모른다.",
						"english": "The end of this path might be ruin.",
						"japanese": "この道の先は破滅だけかもしれない。",
						"chinese": "这条路的尽头可能只有毁灭。",
						"french": "Le bout de ce chemin pourrait n'être que ruine.",
						"spanish": "El final de este camino podría ser solo la ruina.",
						"vietnamese": "Cuối con đường này có lẽ chỉ có sự hủy diệt.",
						"thai": "ปลายทางของเส้นทางนี้อาจมีแต่ความพินาศ.",
						"hindi": "इस रास्ते का अंत सिर्फ़ तबाही हो सकता है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래도 멈출 수 없어. 우리는 여기까지 왔어.",
						"english": "Still, we can't stop. We've come this far.",
						"japanese": "それでも、止まるわけにはいかない。ここまで来たんだ。",
						"chinese": "即使如此，也无法停止。我们已经走到这里了。",
						"french": "Pourtant, nous ne pouvons pas nous arrêter. Nous sommes arrivés jusqu'ici.",
						"spanish": "Aun así, no podemos parar. Hemos llegado hasta aquí.",
						"vietnamese": "Dù vậy, không thể dừng lại. Chúng ta đã đi đến đây rồi.",
						"thai": "ถึงอย่างนั้นก็หยุดไม่ได้ เรามาถึงนี่แล้ว.",
						"hindi": "फिर भी, हम रुक नहीं सकते। हम इतनी दूर आ गए हैं।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "너희를… 집으로 돌려보낼 수 있을까.",
						"english": "Can I... send you all home?",
						"japanese": "お前たちを…故郷へ帰してやれるだろうか。",
						"chinese": "能把你们…送回家吗？",
						"french": "Pourrai-je… vous renvoyer chez vous ?",
						"spanish": "¿Podré… enviaros a casa?",
						"vietnamese": "Liệu mình có thể… đưa các cậu về nhà không?",
						"thai": "ฉันจะ… ส่งพวกเธอกลับบ้านได้ไหมนะ.",
						"hindi": "क्या मैं… तुम्हें घर वापस भेज पाऊँगा?"
					},
					"speaker": "bran",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 눈보라를 가르고 나타났다. 압도적인 존재감.",
						"english": "A colossal shadow split the blizzard and appeared. An overwhelming presence.",
						"japanese": "巨大な影が吹雪を裂いて現れた。圧倒的な存在感。",
						"chinese": "巨大的身影划破暴风雪出现。压倒性的存在感。",
						"french": "Une ombre colossale a fendu le blizzard et est apparue. Une présence écrasante.",
						"spanish": "Una sombra colosal hendió la tormenta de nieve y apareció. Una presencia abrumadora.",
						"vietnamese": "Một bóng đen khổng lồ xé toạc bão tuyết xuất hiện. Một sự hiện diện áp đảo.",
						"thai": "เงาขนาดมหึมาแหวกพายุหิมะปรากฏขึ้น. การคงอยู่ที่เป็นที่สุด.",
						"hindi": "एक विशाल छाया बर्फ़ीले तूफ़ान को चीरते हुए प्रकट हुई। एक圧倒的な उपस्थिति।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…다가오지 마라. 이 공허는 너희마저 삼킬 것이다.",
						"english": "...Don't come closer. This void will swallow even you.",
						"japanese": "…近づくな。この虚無はお前たちすら飲み込むだろう。",
						"chinese": "…别过来。这片虚无会将你们也吞噬。",
						"french": "...Ne vous approchez pas. Ce vide vous engloutira aussi.",
						"spanish": "...No os acerquéis. Este vacío os devorará también.",
						"vietnamese": "…Đừng lại gần. Khoảng trống này sẽ nuốt chửng cả các ngươi.",
						"thai": "...อย่าเข้ามาใกล้. ความว่างเปล่านี้จะกลืนกินพวกเจ้าทั้งหมด.",
						"hindi": "...पास मत आना। यह शून्यता तुम्हें भी निगल जाएगी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "저게… 펜리르!",
						"english": "Is that... Fenrir!",
						"japanese": "あれは…フェンリルか！",
						"chinese": "那个是…芬里尔！",
						"french": "C'est… Fenrir !",
						"spanish": "¡Ese es… Fenrir!",
						"vietnamese": "Kia là… Fenrir!",
						"thai": "นั่นมัน… เฟนริร์!",
						"hindi": "वो… फेनrir है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나의 굶주림은… 끝이 없다.",
						"english": "My hunger... is endless.",
						"japanese": "我が飢えは…終わりなきもの。",
						"chinese": "我的饥饿…永无止境。",
						"french": "Ma faim… est sans fin.",
						"spanish": "Mi hambre… es infinita.",
						"vietnamese": "Cơn đói của ta… là vô tận.",
						"thai": "ความหิวของข้า… ไม่มีที่สิ้นสุด.",
						"hindi": "मेरी भूख… अनंत है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…나는 그저… 채워지지 않는….",
						"english": "...I am merely... unfulfilled...",
						"japanese": "…私はただ…満たされない…。",
						"chinese": "…我只是…无法被满足…。",
						"french": "...Je suis simplement… insatisfait…",
						"spanish": "...Yo solo… insatisfecho…",
						"vietnamese": "…Ta chỉ là… không thể thỏa mãn…",
						"thai": "...ฉันแค่… ไม่เต็มอิ่ม…",
						"hindi": "...मैं बस… अधूरा हूँ…।"
					}
				},
				{
					"content": {
						"korean": "죽었나?",
						"english": "Is it dead?",
						"japanese": "死んだのか？",
						"chinese": "死了吗？",
						"french": "Est-il mort ?",
						"spanish": "¿Ha muerto?",
						"vietnamese": "Chết rồi sao?",
						"thai": "ตายแล้วเหรอ?",
						"hindi": "मर गया क्या?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "놈의 흔적조차 남지 않았어. 이런 일은 처음이야.",
						"english": "Not even a trace of it remains. This is a first.",
						"japanese": "奴の痕跡さえ残っていない。こんなことは初めてだ。",
						"chinese": "连它的痕迹都没留下。这种事还是第一次。",
						"french": "Pas même une trace de lui ne subsiste. C'est une première.",
						"spanish": "Ni siquiera queda rastro de él. Esto es la primera vez.",
						"vietnamese": "Ngay cả dấu vết của nó cũng không còn. Đây là lần đầu tiên.",
						"thai": "ไม่มีแม้แต่ร่องรอยของมันเหลืออยู่เลย. นี่เป็นครั้งแรกเลยนะเนี่ย.",
						"hindi": "उसका नामोनिशान भी नहीं बचा। ऐसा पहली बार हुआ है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그러나 설원은 여전히 굶주렸다. 또 다른 공허가 채워지기를 기다리며.",
						"english": "But the snowfield remained hungry, awaiting another void to fill.",
						"japanese": "しかし、雪原は依然として飢えていた。新たな虚無が満たされるのを待ちながら。",
						"chinese": "然而，雪原依然饥饿。等待着另一个虚空被填满。",
						"french": "Mais l'étendue enneigée restait affamée, attendant qu'un autre vide soit comblé.",
						"spanish": "Pero el campo de nieve seguía hambriento, esperando que otro vacío se llenara.",
						"vietnamese": "Tuy nhiên, cánh đồng tuyết vẫn đói khát, chờ đợi một khoảng trống khác được lấp đầy.",
						"thai": "แต่ทุ่งหิมะก็ยังคงหิวโหย รอคอยช่องว่างอื่นให้เต็มเปี่ยม",
						"hindi": "परंतु बर्फीला मैदान अभी भी भूखा था, किसी और रिक्तता के भरने की प्रतीक्षा में।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 생명도… 나의 일부가 될 것이다.",
						"english": "Your lives too... shall become a part of me.",
						"japanese": "お前たちの命も… 私の一部となるだろう。",
						"chinese": "你们的生命… 也将成为我的一部分。",
						"french": "Vos vies aussi… feront partie de moi.",
						"spanish": "Vuestras vidas también… se convertirán en parte de mí.",
						"vietnamese": "Mạng sống của các ngươi… cũng sẽ trở thành một phần của ta.",
						"thai": "ชีวิตของพวกเจ้า… ก็จะกลายเป็นส่วนหนึ่งของข้า",
						"hindi": "तुम्हारे प्राण भी… मेरे ही अंश बन जाएंगे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it... it's not over yet!",
						"japanese": "くそっ… まだ終わってない！",
						"chinese": "该死… 还没结束！",
						"french": "Zut… ce n'est pas encore fini !",
						"spanish": "¡Maldita sea… aún no ha terminado!",
						"vietnamese": "Chết tiệt… vẫn chưa kết thúc!",
						"thai": "บ้าเอ๊ย... มันยังไม่จบ!",
						"hindi": "धिक्कार है… अभी खत्म नहीं हुआ!"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "bran",
					"action": "enter"
				},
				{
					"content": {
						"korean": "다시… 다시 시도해야 한다.",
						"english": "Again... I must try again.",
						"japanese": "もう一度… もう一度試さなければならない。",
						"chinese": "再次… 必须再试一次。",
						"french": "De nouveau… je dois réessayer.",
						"spanish": "De nuevo… debo intentarlo otra vez.",
						"vietnamese": "Lại nữa… phải thử lại.",
						"thai": "อีกครั้ง... ต้องลองอีกครั้ง",
						"hindi": "फिर से… मुझे फिर से कोशिश करनी होगी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				}
			]
		}
	]
} as const;
