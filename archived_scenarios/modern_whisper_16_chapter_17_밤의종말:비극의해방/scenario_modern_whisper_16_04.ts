export const scenario_modern_whisper_16_04 = {
	"scenario_id": "modern_whisper_16_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세계는 뒤틀렸다.",
			"한때 연민의 대상이었던 존재는, 이제 악몽의 심장이 되었다.",
			"과거의 비극이 검은 기름처럼 스며들어, 모든 것을 오염시킨다.",
			"진실은 잔인하고, 파괴만이 유일한 해답이다."
		],
		"english": [
			"The world is twisted.",
			"What was once an object of pity, is now the heart of a nightmare.",
			"Past tragedies seep in like black oil, contaminating everything.",
			"The truth is cruel, and destruction is the only answer."
		],
		"japanese": [
			"世界は歪んだ。",
			"かつて憐れみの対象だった存在は、今や悪夢の心臓となった。",
			"過去の悲劇が黒い油のように染み込み、すべてを汚染する。",
			"真実は残酷で、破壊だけが唯一の答えだ。"
		],
		"chinese": [
			"世界扭曲了。",
			"曾经怜悯的对象，如今已成为噩梦的核心。",
			"过去的悲剧如黑油般渗透，污染着一切。",
			"真相是残酷的，毁灭是唯一的答案。"
		],
		"french": [
			"Le monde est tordu.",
			"Ce qui était autrefois un objet de pitié, est maintenant le cœur d'un cauchemar.",
			"Les tragédies passées s'infiltrent comme une huile noire, contaminant tout.",
			"La vérité est cruelle, et la destruction est la seule réponse."
		],
		"spanish": [
			"El mundo está retorcido.",
			"Lo que una vez fue objeto de lástima, es ahora el corazón de una pesadilla.",
			"Las tragedias pasadas se filtran como aceite negro, contaminando todo.",
			"La verdad es cruel, y la destrucción es la única respuesta."
		],
		"vietnamese": [
			"Thế giới đã bị vặn vẹo.",
			"Thứ từng là đối tượng của lòng thương hại, giờ đã trở thành trái tim của một cơn ác mộng.",
			"Những bi kịch trong quá khứ thấm đẫm như dầu đen, làm ô nhiễm mọi thứ.",
			"Sự thật thật tàn nhẫn, và hủy diệt là câu trả lời duy nhất."
		],
		"thai": [
			"โลกบิดเบี้ยวไปแล้ว",
			"สิ่งที่เคยเป็นเป้าหมายของความเมตตา บัดนี้ได้กลายเป็นแก่นแท้ของฝันร้าย",
			"โศกนาฏกรรมในอดีตซึมซาบเหมือนน้ำมันสีดำ ปนเปื้อนทุกสิ่ง",
			"ความจริงช่างโหดร้าย และการทำลายล้างคือคำตอบเดียว"
		],
		"hindi": [
			"दुनिया मुड़ गई है।",
			"जो कभी दया का पात्र था, अब एक बुरे सपने का दिल बन गया है।",
			"अतीत की त्रासदियाँ काले तेल की तरह रिसती हैं, सब कुछ दूषित करती हैं।",
			"सच क्रूर है, और विनाश ही एकमात्र उत्तर है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "검은 기름 같은 액체가 길거리를 뒤덮었다. 바닥에선 끔찍한 비명이 새어 나왔다.",
						"english": "A black oil-like liquid covered the streets. Horrific screams emanated from the ground.",
						"japanese": "黒い油のような液体が道を覆い、地面からは恐ろしい悲鳴が漏れ聞こえた。",
						"chinese": "黑油般的液体覆盖了街道。地底下传来了恐怖的尖叫声。",
						"french": "Un liquide noir, semblable à du pétrole, recouvrait les rues. Des cris horribles s'échappaient du sol.",
						"spanish": "Un líquido parecido al aceite negro cubría las calles. Horribles gritos emanaban del suelo.",
						"vietnamese": "Một chất lỏng giống dầu đen bao phủ đường phố. Tiếng hét kinh hoàng phát ra từ lòng đất.",
						"thai": "ของเหลวคล้ายน้ำมันสีดำปกคลุมถนน เสียงกรีดร้องน่ากลัวเล็ดลอดออกมาจากพื้นดิน",
						"hindi": "एक काले तेल जैसा तरल सड़कों पर फैल गया। ज़मीन से भयानक चीखें निकल रही थीं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이게… 놈의 진짜 모습인가?",
						"english": "Is this... its true form?",
						"japanese": "これが…奴の本当の姿なのか？",
						"chinese": "这…是它的真面目吗？",
						"french": "Est-ce là... sa véritable forme ?",
						"spanish": "¿Es esta... su verdadera forma?",
						"vietnamese": "Đây... là hình dạng thật của nó sao?",
						"thai": "นี่คือ...ร่างที่แท้จริงของมันหรือ?",
						"hindi": "क्या यह... उसका असली रूप है?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "sad",
					"content": {
						"korean": "…믿을 수 없어. 그 불쌍한 유기견이….",
						"english": "...I can't believe it. That poor stray dog...",
						"japanese": "…信じられない。あの哀れな野良犬が…。",
						"chinese": "……无法相信。那只可怜的流浪狗……",
						"french": "...Je n'y crois pas. Ce pauvre chien errant...",
						"spanish": "...No puedo creerlo. Ese pobre perro callejero...",
						"vietnamese": "...Không thể tin được. Con chó hoang đáng thương đó...",
						"thai": "...ไม่อยากจะเชื่อเลย สุนัขจรจัดน่าสงสารตัวนั้น...",
						"hindi": "...मैं विश्वास नहीं कर सकता। वह बेचारा आवारा कुत्ता..."
					}
				},
				{
					"content": {
						"korean": "유기견이 아니야. 이건 악몽의 잔재다.",
						"english": "It's not a stray dog. This is the remnant of a nightmare.",
						"japanese": "野良犬じゃない。これは悪夢の残滓だ。",
						"chinese": "这不是流浪狗。这是噩梦的残骸。",
						"french": "Ce n'est pas un chien errant. C'est le vestige d'un cauchemar.",
						"spanish": "No es un perro callejero. Esto es el remanente de una pesadilla.",
						"vietnamese": "Không phải chó hoang. Đây là tàn dư của một cơn ác mộng.",
						"thai": "ไม่ใช่สุนัขจรจัด นี่คือเศษซากของฝันร้าย",
						"hindi": "यह आवारा कुत्ता नहीं है। यह एक बुरे सपने का अवशेष है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "sad",
					"content": {
						"korean": "그럼 우리가 착각했던 거야? 처음부터….",
						"english": "So we were mistaken? From the very beginning...",
						"japanese": "じゃあ、俺たちが勘違いしてたのか？最初から…。",
						"chinese": "所以我们一直都搞错了？从一开始……",
						"french": "Alors nous nous étions trompés ? Depuis le début...",
						"spanish": "¿Entonces nos equivocamos? Desde el principio...",
						"vietnamese": "Vậy là chúng ta đã nhầm sao? Ngay từ đầu...",
						"thai": "ถ้าอย่างนั้นเราเข้าใจผิดไปอย่างนั้นหรือ? ตั้งแต่แรกเริ่ม...",
						"hindi": "तो क्या हम गलत थे? शुरुआत से ही..."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "bex",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "검은 액체가 모여들더니, 끔찍한 살인 현장을 기괴하게 재현했다.",
						"english": "The black liquid gathered, grotesquely recreating a gruesome murder scene.",
						"japanese": "黒い液体が集まり、恐ろしい殺人現場を異様に再現した。",
						"chinese": "黑色液体聚集起来，怪异地重现了可怕的杀人现场。",
						"french": "Le liquide noir s'est rassemblé, recréant de façon grotesque une scène de meurtre horrible.",
						"spanish": "El líquido negro se acumuló, recreando grotescamente una espantosa escena de asesinato.",
						"vietnamese": "Chất lỏng đen tụ lại, tái hiện một cách kỳ quái cảnh giết người rùng rợn.",
						"thai": "ของเหลวสีดำรวมตัวกัน สร้างฉากฆาตกรรมอันน่าสยดสยองขึ้นมาใหม่ได้อย่างประหลาด",
						"hindi": "काला तरल जमा हुआ, एक भयानक हत्या के दृश्य को विकृत रूप से फिर से बनाया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "…이게 놈이 만들어낸 환상이라고? 이 광기….",
						"english": "...This is the illusion he created? This madness...",
						"japanese": "「…これが奴が作り出した幻想だと？この狂気…。」",
						"chinese": "“……这是他制造的幻象？这种疯狂……”",
						"french": "...C'est l'illusion qu'il a créée ? Cette folie...",
						"spanish": "...¿Esta es la ilusión que él creó? Esta locura...",
						"vietnamese": "...Đây là ảo ảnh hắn tạo ra sao? Sự điên loạn này...",
						"thai": "...นี่คือภาพลวงตาที่มันสร้างขึ้นเหรอ? ความบ้าคลั่งนี้...",
						"hindi": "...यह उसका बनाया हुआ भ्रम है? यह पागलपन..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "놈은 과거의 고통을 먹고 자랐어.",
						"english": "He fed on past pain to grow.",
						"japanese": "「奴は過去の苦痛を糧に成長した。」",
						"chinese": "“他以过去的痛苦为食而成长。”",
						"french": "Il s'est nourri de la douleur passée pour grandir.",
						"spanish": "Se alimentó del dolor pasado para crecer.",
						"vietnamese": "Hắn lớn lên nhờ nỗi đau trong quá khứ.",
						"thai": "มันเติบโตมาจากความเจ็บปวดในอดีต",
						"hindi": "वह अतीत के दर्द से पला-बढ़ा है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "연민 따윈 필요 없어. 이건 지옥이야.",
						"english": "No need for pity. This is hell.",
						"japanese": "「同情などいらない。これは地獄だ。」",
						"chinese": "“不需要同情。这是地狱。”",
						"french": "Pas besoin de pitié. C'est l'enfer.",
						"spanish": "No hay lugar para la piedad. Esto es el infierno.",
						"vietnamese": "Không cần lòng trắc ẩn. Đây là địa ngục.",
						"thai": "ไม่ต้องการความสงสาร นี่คือนรก",
						"hindi": "दया की कोई ज़रूरत नहीं। यह नर्क है।"
					},
					"emotion": "angry",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "놈의 존재 기반을 파괴해야 해.",
						"english": "We must destroy the foundation of his existence.",
						"japanese": "「奴の存在基盤を破壊しなければならない。」",
						"chinese": "“我们必须摧毁他存在的根基。”",
						"french": "Nous devons détruire la base de son existence.",
						"spanish": "Debemos destruir la base de su existencia.",
						"vietnamese": "Phải phá hủy nền tảng tồn tại của hắn.",
						"thai": "เราต้องทำลายรากฐานการมีอยู่ของมัน",
						"hindi": "हमें उसके अस्तित्व की नींव को नष्ट करना होगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "bex",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내 팔 좀 봐. 붉은 흉터가 생겼어.",
						"english": "Look at my arm. A red scar has appeared.",
						"japanese": "「私の腕を見て。赤い傷跡ができた。」",
						"chinese": "“看我的手臂。出现了一道红色伤疤。”",
						"french": "Regarde mon bras. Une cicatrice rouge est apparue.",
						"spanish": "Mira mi brazo. Ha aparecido una cicatriz roja.",
						"vietnamese": "Nhìn cánh tay tôi này. Một vết sẹo đỏ đã xuất hiện.",
						"thai": "ดูแขนฉันสิ มีรอยแผลเป็นสีแดงขึ้นมา",
						"hindi": "मेरी बांह देखो। एक लाल निशान बन गया है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…갱단 문신이랑 비슷해. 이 악몽이 우리한테도 스며들고 있어.",
						"english": "...It's like a gang tattoo. This nightmare is seeping into us too.",
						"japanese": "「…ギャングのタトゥーみたいだ。この悪夢が私たちにも染み込んでいる。」",
						"chinese": "“……这就像是帮派纹身。这场噩梦也正在渗透到我们身上。”",
						"french": "...C'est comme un tatouage de gang. Ce cauchemar s'infiltre en nous aussi.",
						"spanish": "...Es como un tatuaje de pandilla. Esta pesadilla también nos está invadiendo.",
						"vietnamese": "...Nó giống hình xăm của băng đảng. Ác mộng này đang thấm vào chúng ta.",
						"thai": "...มันเหมือนรอยสักแก๊งค์ ฝันร้ายนี้กำลังซึมซาบเข้ามาในตัวเราด้วย",
						"hindi": "...यह एक गिरोह के टैटू जैसा है। यह दुःस्वप्न हममें भी समा रहा है।"
					}
				},
				{
					"content": {
						"korean": "서둘러야 해. 더 이상은 안 돼.",
						"english": "We need to hurry. No more delays.",
						"japanese": "「急がなければ。これ以上はだめだ。」",
						"chinese": "“我们得抓紧。不能再拖了。”",
						"french": "Nous devons nous dépêcher. Pas plus de ça.",
						"spanish": "Tenemos que darnos prisa. No podemos permitirlo más.",
						"vietnamese": "Phải nhanh lên. Không thể chịu đựng thêm nữa.",
						"thai": "เราต้องรีบแล้ว ไม่ไหวแล้วจริงๆ",
						"hindi": "हमें जल्दी करनी होगी। अब और नहीं।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그래. 끝내야 해. 무슨 수를 써서라도.",
						"english": "Yes. We have to end this. By any means necessary.",
						"japanese": "「そうだ。終わらせなければ。どんな手を使ってでも。」",
						"chinese": "“是的。必须结束这一切。不惜一切代价。”",
						"french": "Oui. Il faut en finir. Par tous les moyens nécessaires.",
						"spanish": "Sí. Tenemos que acabar con esto. Cueste lo que cueste.",
						"vietnamese": "Đúng vậy. Phải kết thúc chuyện này. Bằng mọi giá.",
						"thai": "ใช่ เราต้องจบเรื่องนี้ ไม่ว่าจะด้วยวิธีใดก็ตาม",
						"hindi": "हाँ। हमें इसे खत्म करना होगा। किसी भी कीमत पर।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "bex"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "놈을 파괴할 방법을 찾아야 해.",
						"english": "We must find a way to destroy him.",
						"japanese": "「奴を破壊する方法を見つけなければ。」",
						"chinese": "“我们必须找到摧毁他的方法。”",
						"french": "Nous devons trouver un moyen de le détruire.",
						"spanish": "Debemos encontrar la forma de destruirlo.",
						"vietnamese": "Phải tìm cách tiêu diệt hắn.",
						"thai": "เราต้องหาวิธีทำลายมัน",
						"hindi": "हमें उसे नष्ट करने का रास्ता खोजना होगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "angry",
					"content": {
						"korean": "이 이상 팀원들이 다치게 둘 순 없어. 내가 막을 거야.",
						"english": "I can't let my teammates get hurt anymore. I'll stop him.",
						"japanese": "「これ以上仲間が傷つくのは許せない。私が止める。」",
						"chinese": "“我不能再让队员受伤了。我会阻止他。”",
						"french": "Je ne peux plus laisser mes coéquipiers se blesser. Je vais l'arrêter.",
						"spanish": "No puedo permitir que mis compañeros sigan sufriendo. Lo detendré.",
						"vietnamese": "Không thể để đồng đội bị thương thêm nữa. Tôi sẽ ngăn chặn hắn.",
						"thai": "ฉันปล่อยให้เพื่อนร่วมทีมบาดเจ็บไปมากกว่านี้ไม่ได้แล้ว ฉันจะหยุดมันเอง",
						"hindi": "मैं अपने साथियों को और चोट नहीं पहुँचने दे सकता। मैं उसे रोकूँगा।"
					}
				},
				{
					"content": {
						"korean": "놈은 과거의 광기와 함께 우리를 집어삼킬 거야.",
						"english": "He will consume us with the madness of the past.",
						"japanese": "奴は過去の狂気と共に我々を飲み込むだろう。",
						"chinese": "他将带着过去的疯狂吞噬我们。",
						"french": "Il nous dévorera avec la folie du passé.",
						"spanish": "Nos consumirá con la locura del pasado.",
						"vietnamese": "Hắn sẽ nuốt chửng chúng ta cùng với sự điên loạn của quá khứ.",
						"thai": "มันจะกลืนกินเราไปพร้อมกับความวิกลจริตในอดีต",
						"hindi": "वह हमें अतीत के पागलपन के साथ निगल जाएगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…아니, 우리가 놈을 끝낼 거야.",
						"english": "…No, we will end him.",
						"japanese": "…いや、我々が奴を終わらせる。",
						"chinese": "…不，我们会解决他。",
						"french": "…Non, nous l'achèverons.",
						"spanish": "…No, nosotros acabaremos con él.",
						"vietnamese": "…Không, chúng ta sẽ kết liễu hắn.",
						"thai": "...ไม่ เราจะจัดการมันเอง",
						"hindi": "…नहीं, हम उसे खत्म करेंगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bex"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…이건… 끝이 아니다….",
						"english": "…This… is not the end….",
						"japanese": "…これは…終わりではない…。",
						"chinese": "…这…不是结束…。",
						"french": "…Ce n'est… pas la fin….",
						"spanish": "…Esto… no es el final….",
						"vietnamese": "…Đây… không phải là kết thúc….",
						"thai": "...นี่...ไม่ใช่จุดจบ...",
						"hindi": "…यह… अंत नहीं है…।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 보스는 검은 연기가 되어 사라졌다.",
						"english": "The unknown boss vanished into black smoke.",
						"japanese": "正体不明のボスは黒い煙となって消え去った。",
						"chinese": "身份不明的头目化作黑烟消失了。",
						"french": "Le boss inconnu disparut en fumée noire.",
						"spanish": "El jefe desconocido se desvaneció en humo negro.",
						"vietnamese": "Con boss vô danh biến mất thành làn khói đen.",
						"thai": "บอสปริศนาหายไปในควันดำ",
						"hindi": "अज्ञात बॉस काले धुएँ में गायब हो गया।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "bex",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "겨우 끝났나….",
						"english": "Is it finally over…?",
						"japanese": "やっと終わったのか…。",
						"chinese": "终于结束了吗…？",
						"french": "Est-ce enfin terminé… ?",
						"spanish": "¿Por fin ha terminado…?",
						"vietnamese": "Cuối cùng cũng kết thúc rồi sao…?",
						"thai": "ในที่สุดก็จบลงแล้วเหรอ...",
						"hindi": "क्या यह आखिरकार खत्म हो गया…?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "아니. 놈의 말이 신경 쓰여.",
						"english": "No. His words bother me.",
						"japanese": "いや。奴の言葉が気になる。",
						"chinese": "不。他的话让我很在意。",
						"french": "Non. Ses mots me perturbent.",
						"spanish": "No. Sus palabras me inquietan.",
						"vietnamese": "Không. Lời nói của hắn khiến ta bận tâm.",
						"thai": "ไม่ คำพูดของมันทำให้ฉันกังวล",
						"hindi": "नहीं। उसके शब्द मुझे परेशान करते हैं।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실의 뿌리는 아직 뽑히지 않았다. 더 깊은 곳에 존재했다.",
						"english": "The root of truth remains unplucked. It lies deeper.",
						"japanese": "真実の根はまだ抜かれていない。もっと深き場所に存在する。",
						"chinese": "真理之根未除，深藏于地。",
						"french": "La racine de la vérité n'est pas encore arrachée. Elle gît plus profondément.",
						"spanish": "La raíz de la verdad aún no ha sido arrancada. Yace en lo más profundo.",
						"vietnamese": "Gốc rễ sự thật vẫn chưa bị nhổ. Nó nằm sâu hơn.",
						"thai": "รากแห่งความจริงยังคงอยู่ มันซ่อนอยู่ลึกกว่านั้น",
						"hindi": "सत्य की जड़ अभी भी है। यह और भी गहराई में छिपी थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "아직… 나의 존재를 이해하지 못했군….",
						"english": "You still... don't grasp my existence...",
						"japanese": "まだ…私の存在を理解できていないようだな…。",
						"chinese": "你还…不理解我的存在啊…",
						"french": "Tu n'as pas encore... saisi mon existence...",
						"spanish": "Aún... no comprendes mi existencia...",
						"vietnamese": "Ngươi vẫn chưa… hiểu được sự tồn tại của ta…",
						"thai": "ยัง...ไม่เข้าใจการมีอยู่ของข้าสินะ...",
						"hindi": "अभी भी... तुम मेरे अस्तित्व को समझ नहीं पाए..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장… 다시….",
						"english": "Damn it... Again.",
						"japanese": "くそっ…もう一度…。",
						"chinese": "该死…再来…",
						"french": "Maudite soit... Encore.",
						"spanish": "¡Maldición... otra vez!",
						"vietnamese": "Khỉ thật... Lại nữa.",
						"thai": "ให้ตายสิ...อีกครั้ง...",
						"hindi": "धत्त तेरी... फिर से..."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "포기하지 마! 다시 일어서야 해!",
						"english": "Don't give up! Rise again!",
						"japanese": "諦めるな！もう一度立ち上がれ！",
						"chinese": "别放弃！必须再站起来！",
						"french": "N'abandonne pas ! Relève-toi !",
						"spanish": "¡No te rindas! ¡Levántate de nuevo!",
						"vietnamese": "Đừng bỏ cuộc! Hãy đứng dậy lần nữa!",
						"thai": "อย่ายอมแพ้! ต้องลุกขึ้นอีกครั้ง!",
						"hindi": "हार मत मानो! तुम्हें फिर से उठना होगा!"
					},
					"type": "speech",
					"speaker": "bex"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "검은 그림자가 움직였다. 놈의 심장은 과거의 고통으로 뒤틀려 있었다.",
						"english": "The black shadow moved. His heart was twisted with past pain.",
						"japanese": "黒い影が動いた。奴の心臓は過去の苦痛でねじ曲がっていた。",
						"chinese": "黑影动了。他的心脏因过去的痛苦而扭曲。",
						"french": "L'ombre noire bougea. Son cœur était tordu par la douleur passée.",
						"spanish": "La sombra negra se movió. Su corazón estaba retorcido por el dolor del pasado.",
						"vietnamese": "Bóng đen di chuyển. Trái tim hắn bị vặn vẹo bởi nỗi đau trong quá khứ.",
						"thai": "เงาดำเคลื่อนไหว หัวใจของมันบิดเบี้ยวด้วยความเจ็บปวดในอดีต",
						"hindi": "काली परछाई हिली। उसका दिल अतीत के दर्द से मुड़ा हुआ था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "크크크… 너희도 결국엔… 나의 일부가 될 것이다.",
						"english": "Hee hee hee… In the end, you too… will become a part of me.",
						"japanese": "ククク…お前たちも結局は…私の一部となるだろう。",
						"chinese": "呵呵呵…你们最终…也将成为我的一部分。",
						"french": "Hé hé hé… Au final, vous aussi… ferez partie de moi.",
						"spanish": "Je je je… Al final, vosotros también… seréis parte de mí.",
						"vietnamese": "Khà khà khà… Cuối cùng thì các ngươi cũng… sẽ trở thành một phần của ta thôi.",
						"thai": "คิก คิก คิก...ในที่สุดพวกแกก็...จะกลายเป็นส่วนหนึ่งของข้า",
						"hindi": "हँ हँ हँ… अंत में, तुम भी… मेरा एक हिस्सा बन जाओगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 네 환상에 갇히지 않아!",
						"english": "Shut up! I won't be trapped in your illusion!",
						"japanese": "黙れ！お前の幻想には囚われない！",
						"chinese": "闭嘴！我不会被你的幻象困住！",
						"french": "Tais-toi ! Je ne serai pas piégé dans ton illusion !",
						"spanish": "¡Cállate! ¡No caeré en tu ilusión!",
						"vietnamese": "Im đi! Ta sẽ không bị mắc kẹt trong ảo ảnh của ngươi!",
						"thai": "หุบปาก! ฉันจะไม่ถูกขังอยู่ในภาพลวงตาของแก!",
						"hindi": "चुप रहो! मैं तुम्हारे भ्रम में नहीं फँसूंगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네 속의 공포가… 나를 강하게 한다….",
						"english": "The fear within you… makes me stronger….",
						"japanese": "お前の中の恐怖が…私を強くする…。",
						"chinese": "你内心的恐惧…让我更强大…。",
						"french": "La peur en toi… me rend plus fort….",
						"spanish": "El miedo dentro de ti… me hace más fuerte….",
						"vietnamese": "Nỗi sợ hãi trong ngươi… khiến ta mạnh hơn….",
						"thai": "ความกลัวในตัวแก...ทำให้ข้าแข็งแกร่งขึ้น...",
						"hindi": "तुम्हारे अंदर का डर… मुझे मजबूत बनाता है…।"
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
