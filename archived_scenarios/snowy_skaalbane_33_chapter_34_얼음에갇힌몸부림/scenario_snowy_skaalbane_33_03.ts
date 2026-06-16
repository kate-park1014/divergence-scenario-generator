export const scenario_snowy_skaalbane_33_03 = {
	"scenario_id": "snowy_skaalbane_33_03",
	"order": 3,
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
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "잔해탑 중심부의 거대한 빙실. 푸른 빛이 섬뜩하게 빛났다.",
						"english": "A colossal ice chamber in the heart of the Ruined Tower. A haunting blue light glowed eerily.",
						"japanese": "瓦礫の塔の中心部にある巨大な氷室。青い光が不気味に輝いていた。",
						"chinese": "残骸塔中心处巨大的冰室。蓝光诡异地闪烁着。",
						"french": "Une chambre de glace colossale au cœur de la Tour en Ruines. Une lumière bleue sinistre brillait étrangement.",
						"spanish": "Una gigantesca cámara de hielo en el corazón de la Torre Ruinosa. Una inquietante luz azul brillaba misteriosamente.",
						"vietnamese": "Một buồng băng khổng lồ ở trung tâm Tháp Đổ nát. Ánh sáng xanh ma quái phát ra một cách rùng rợn.",
						"thai": "ห้องน้ำแข็งขนาดมหึมาใจกลางหอคอยปรักหักพัง แสงสีน้ำเงินสว่างเรืองรองอย่างน่าขนลุก",
						"hindi": "खंडहर मीनार के केंद्र में एक विशाल बर्फीला कक्ष। एक भयावह नीली रोशनी रहस्यमय ढंग से चमक रही थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 소리… 뭐야?",
						"english": "This sound... what is it?",
						"japanese": "この音… 何だ？",
						"chinese": "这声音……是什么？",
						"french": "Ce son... qu'est-ce que c'est ?",
						"spanish": "Este sonido... ¿qué es?",
						"vietnamese": "Âm thanh này… là gì vậy?",
						"thai": "เสียงนี่... อะไรนะ?",
						"hindi": "यह आवाज़... क्या है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음 속에 갇힌 바이킹들의 절규가 귓가를 찢었다.",
						"english": "The screams of Vikings trapped in the ice pierced her ears.",
						"japanese": "氷の中に閉じ込められたヴァイキングたちの絶叫が耳をつんざいた。",
						"chinese": "被困在冰中的维京人的尖叫声刺耳。",
						"french": "Les cris des Vikings piégés dans la glace lui transperçaient les oreilles.",
						"spanish": "Los gritos de los vikingos atrapados en el hielo le desgarraban los oídos.",
						"vietnamese": "Tiếng gào thét của các chiến binh Viking bị mắc kẹt trong băng xé toạc màng nhĩ.",
						"thai": "เสียงกรีดร้องของไวกิ้งที่ติดอยู่ในน้ำแข็งบาดหู",
						"hindi": "बर्फ में फंसे वाइकिंगों की चीखें उसके कानों को चीर रही थीं।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…끔찍해. 귀를 막고 싶어.",
						"english": "...Horrible. I want to cover my ears.",
						"japanese": "…恐ろしい。耳を塞ぎたい。",
						"chinese": "……太可怕了。我想捂住耳朵。",
						"french": "...Horrible. Je veux me boucher les oreilles.",
						"spanish": "...Horrible. Quiero taparme los oídos.",
						"vietnamese": "…Khủng khiếp. Tôi muốn bịt tai lại.",
						"thai": "...น่ากลัวจัง. อยากจะเอามือปิดหู",
						"hindi": "...भयानक। मैं अपने कान बंद करना चाहती हूँ।"
					}
				},
				{
					"speaker": "inka",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "막지 마세요. 이들은… 무서웠을 거예요.",
						"english": "Don't cover them. They must have been... scared.",
						"japanese": "塞がないでください。彼らは… 怖かったでしょう。",
						"chinese": "不要捂住。他们可能……很害怕。",
						"french": "Ne les couvrez pas. Ils ont dû avoir... peur.",
						"spanish": "No los tapes. Debieron tener... miedo.",
						"vietnamese": "Đừng bịt lại. Họ hẳn đã… sợ hãi lắm.",
						"thai": "อย่าเพิ่งปิดเลยค่ะ พวกเขาน่าจะ... กลัว",
						"hindi": "उन्हें मत ढको। वे... डरे हुए होंगे।"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "너무 외로워서, 마지막까지 비명을 멈출 수 없었을 거예요.",
						"english": "So lonely, they couldn't stop screaming until the very end.",
						"japanese": "あまりにも寂しくて、最後まで悲鳴を止められなかったでしょう。",
						"chinese": "太寂寞了，直到最后也无法停止尖叫吧。",
						"french": "Si seuls, ils n'auraient pas pu arrêter de crier jusqu'à la fin.",
						"spanish": "Tan solos, no pudieron dejar de gritar hasta el final.",
						"vietnamese": "Cô đơn quá, họ hẳn đã không thể ngừng la hét cho đến cuối cùng.",
						"thai": "เดียวดายเหลือเกิน คงจะกรีดร้องไม่หยุดจนวาระสุดท้าย",
						"hindi": "इतना अकेला, वे अंत तक चीखना बंद नहीं कर पाए होंगे।"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "inka",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "들리나요? 저 비명 속에서… 절규하는 마음이.",
						"english": "Do you hear it? In those screams... a heart in agony.",
						"japanese": "聞こえますか？あの悲鳴の中に…叫び苦しむ心が。",
						"chinese": "你听到了吗？在那尖叫声中…那颗呐喊的心。",
						"french": "Entendez-vous ? Dans ces cris... un cœur en agonie.",
						"spanish": "¿Lo oyes? En esos gritos... un corazón agonizante.",
						"vietnamese": "Bạn có nghe thấy không? Trong những tiếng la hét đó... một trái tim đang gào thét.",
						"thai": "ได้ยินไหม? ในเสียงกรีดร้องเหล่านั้น... มีหัวใจที่ร่ำไห้",
						"hindi": "क्या आप सुनते हैं? उन चीखों में... एक तड़पता दिल।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그냥 죽은 자들의 소리 아냐?",
						"english": "...Isn't that just the sound of the dead?",
						"japanese": "…ただ死者の声じゃないのか？",
						"chinese": "...不就是死者的声音吗？",
						"french": "...Ce n'est pas juste le bruit des morts ?",
						"spanish": "...¿No es solo el sonido de los muertos?",
						"vietnamese": "...Không phải chỉ là tiếng của người chết thôi sao?",
						"thai": "...นั่นไม่ใช่แค่เสียงของคนตายหรอกเหรอ?",
						"hindi": "...क्या यह सिर्फ मृतकों की आवाज़ नहीं है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니요. 이들은… 지금도 고통받고 있어요.",
						"english": "No. They... are still suffering.",
						"japanese": "いいえ。彼らは…今も苦しんでいます。",
						"chinese": "不。他们…现在仍在受苦。",
						"french": "Non. Ils... souffrent encore.",
						"spanish": "No. Ellos... todavía están sufriendo.",
						"vietnamese": "Không. Họ... vẫn đang đau khổ.",
						"thai": "ไม่ใช่ พวกเขา... ยังคงทุกข์ทรมานอยู่",
						"hindi": "नहीं। वे... अभी भी पीड़ित हैं।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "도망치지 않을게요. 제가 당신들의 마지막이 되어 줄게요.",
						"english": "I won't run. I'll be your end.",
						"japanese": "逃げません。私があなたたちの最後になってあげましょう。",
						"chinese": "我不会逃跑。我将成为你们的终结。",
						"french": "Je ne fuirai pas. Je serai votre fin.",
						"spanish": "No huiré. Seré vuestro fin.",
						"vietnamese": "Tôi sẽ không chạy trốn. Tôi sẽ là điểm kết thúc của các bạn.",
						"thai": "ฉันจะไม่หนี ฉันจะเป็นจุดจบของพวกเธอ",
						"hindi": "मैं भागूंगा नहीं। मैं तुम्हारा अंत बनूंगा।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "inka"
				},
				{
					"emotion": "base",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "비명이… 점점 선명해지는 것 같아요.",
						"english": "The screams... seem to be getting clearer.",
						"japanese": "悲鳴が…だんだん鮮明になっているようです。",
						"chinese": "尖叫声…好像越来越清晰了。",
						"french": "Les cris... semblent devenir de plus en plus clairs.",
						"spanish": "Los gritos... parecen volverse cada vez más claros.",
						"vietnamese": "Tiếng la hét... dường như ngày càng rõ ràng hơn.",
						"thai": "เสียงกรีดร้อง... เหมือนจะชัดเจนขึ้นเรื่อยๆ",
						"hindi": "चीखें... ज़्यादा स्पष्ट होती जा रही हैं।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "섬뜩해… 죽은 자가 어떻게 이럴 수 있어?",
						"english": "It's chilling... How can the dead do this?",
						"japanese": "ぞっとする…死者がどうしてこんなことを？",
						"chinese": "毛骨悚然…死者怎会如此？",
						"french": "C'est effrayant... Comment les morts peuvent-ils faire ça ?",
						"spanish": "Es espeluznante... ¿Cómo pueden hacer esto los muertos?",
						"vietnamese": "Thật đáng sợ... Người chết làm sao có thể làm được điều này?",
						"thai": "น่าขนลุก... คนตายจะทำแบบนี้ได้ยังไง?",
						"hindi": "यह भयावह है... मरे हुए लोग ऐसा कैसे कर सकते हैं?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "빙실 깊숙한 곳의 푸른 빛이, 절규의 파동에 맞춰 일렁였다.",
						"english": "The blue light deep within the ice chamber pulsed with the waves of agony.",
						"japanese": "氷室の奥深くの青い光が、絶叫の波動に合わせて揺らめいた。",
						"chinese": "冰室深处的蓝光，随着绝望的波动而闪烁。",
						"french": "La lumière bleue au plus profond de la chambre de glace ondulait au rythme des ondes d'agonie.",
						"spanish": "La luz azul en lo profundo de la cámara de hielo palpitaba al ritmo de las ondas de agonía.",
						"vietnamese": "Ánh sáng xanh sâu trong buồng băng dao động theo từng đợt sóng của tiếng kêu gào.",
						"thai": "แสงสีน้ำเงินที่อยู่ลึกเข้าไปในห้องน้ำแข็ง สั่นไหวตามคลื่นแห่งความทุกข์ทรมาน",
						"hindi": "बर्फ़ीले कक्ष की गहराई में नीली रोशनी, चीखने की तरंगों के साथ हिल रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "누군가… 이들의 고통을 이용하고 있어요.",
						"english": "Someone... is using their pain.",
						"japanese": "誰かが…彼らの苦痛を利用しています。",
						"chinese": "有人…正在利用他们的痛苦。",
						"french": "Quelqu'un... utilise leur douleur.",
						"spanish": "Alguien... está usando su dolor.",
						"vietnamese": "Ai đó... đang lợi dụng nỗi đau của họ.",
						"thai": "มีใครบางคน... กำลังใช้ความเจ็บปวดของพวกเขา",
						"hindi": "कोई... उनके दर्द का इस्तेमाल कर रहा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무엇을 위해서?",
						"english": "For what purpose?",
						"japanese": "何のために？",
						"chinese": "为了什么？",
						"french": "Dans quel but ?",
						"spanish": "¿Con qué propósito?",
						"vietnamese": "Vì mục đích gì?",
						"thai": "เพื่ออะไร?",
						"hindi": "किस उद्देश्य से?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "여기까지 온 게… 맞을까요?",
						"english": "Is this… the right way?",
						"japanese": "ここまで来たのは… 正しいのでしょうか？",
						"chinese": "走到这里… 对吗？",
						"french": "Est-ce… le bon chemin ?",
						"spanish": "¿Es… este el camino correcto?",
						"vietnamese": "Đến đây… có đúng không nhỉ?",
						"thai": "มาถึงที่นี่...ถูกต้องแล้วเหรอ?",
						"hindi": "क्या यह… सही रास्ता है?"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "수많은 바이킹의 입이, 한결같이 빙실 중심을 향해 벌어져 있었다.",
						"english": "Countless Viking mouths uniformly gaped towards the center of the ice chamber.",
						"japanese": "数えきれないほどのヴァイキングの口が、氷室の中心に向けて一様に開いていた。",
						"chinese": "无数维京人的嘴，不约而同地朝着冰室中心张开。",
						"french": "D'innombrables bouches de Vikings s'ouvraient uniformément vers le centre de la chambre de glace.",
						"spanish": "Innumerables bocas vikingas se abrían uniformemente hacia el centro de la cámara de hielo.",
						"vietnamese": "Vô số miệng của người Viking đều há hốc về phía trung tâm của phòng băng.",
						"thai": "ปากของชาวไวกิ้งนับไม่ถ้วนต่างอ้ากว้างไปทางใจกลางห้องน้ำแข็ง",
						"hindi": "असंख्य वाइकिंग के मुँह एक समान रूप से बर्फ के कक्ष के केंद्र की ओर खुले हुए थे।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "모두… 저 안을 향해 울부짖었어.",
						"english": "All of them… screamed towards that place.",
						"japanese": "皆… あの場所に向かって叫び続けていた。",
						"chinese": "所有人都… 朝着那里咆哮。",
						"french": "Tous… hurlaient vers cet endroit.",
						"spanish": "Todos… gritaron hacia ese lugar.",
						"vietnamese": "Tất cả… đều gào thét về phía đó.",
						"thai": "ทั้งหมด… ต่างกรีดร้องไปที่นั่น",
						"hindi": "वे सभी… उस जगह की ओर चिल्लाए।"
					}
				},
				{
					"content": {
						"korean": "그들의 공포와 외로움이… 모두 저 비명에 담겨 있어요.",
						"english": "Their fear and loneliness… all contained in that scream.",
						"japanese": "彼らの恐怖と孤独が… すべてあの悲鳴に込められている。",
						"chinese": "他们的恐惧和孤独… 都融入了那声尖叫。",
						"french": "Leur peur et leur solitude… tout est contenu dans ce cri.",
						"spanish": "Su miedo y soledad… todo contenido en ese grito.",
						"vietnamese": "Nỗi sợ hãi và cô đơn của họ… tất cả đều chứa đựng trong tiếng hét đó.",
						"thai": "ความกลัวและความโดดเดี่ยวของพวกเขา… ทั้งหมดถูกรวมอยู่ในเสียงกรีดร้องนั้น",
						"hindi": "उनका डर और अकेलापन… सब कुछ उस चीख में समाया हुआ है।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "우리도… 같은 운명이 될지도 몰라.",
						"english": "We too… might share the same fate.",
						"japanese": "私たちも… 同じ運命を辿るかもしれない。",
						"chinese": "我们… 也可能面临同样的命运。",
						"french": "Nous aussi… pourrions partager le même destin.",
						"spanish": "Nosotros también… podríamos compartir el mismo destino.",
						"vietnamese": "Chúng ta cũng… có thể chung số phận.",
						"thai": "เราก็… อาจมีชะตากรรมเดียวกัน",
						"hindi": "हम भी… शायद उसी भाग्य का सामना करेंगे।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "두렵지 않아요. 저는… 당신들과 함께할게요.",
						"english": "I'm not afraid. I will… stay with you all.",
						"japanese": "怖くありません。私は… 皆さんと共にいます。",
						"chinese": "我不害怕。我… 会和你们在一起。",
						"french": "Je n'ai pas peur. Je… resterai avec vous tous.",
						"spanish": "No tengo miedo. Yo… estaré con todos ustedes.",
						"vietnamese": "Tôi không sợ. Tôi sẽ… ở lại cùng với các bạn.",
						"thai": "ฉันไม่กลัว ฉันจะ… อยู่กับทุกคน",
						"hindi": "मुझे डर नहीं है। मैं… आप सभी के साथ रहूँगा।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "빙실의 가장 깊은 곳, 절규를 집어삼키는 거대한 그림자가 나타났다.",
						"english": "In the deepest part of the ice chamber, a giant shadow appeared, devouring the screams.",
						"japanese": "氷室の最も深い場所で、絶叫を飲み込む巨大な影が現れた。",
						"chinese": "在冰室最深处，一个吞噬尖叫的巨大黑影出现了。",
						"french": "Dans la partie la plus profonde de la chambre de glace, une ombre gigantesque est apparue, dévorant les cris.",
						"spanish": "En lo más profundo de la cámara de hielo, apareció una sombra gigante que devoraba los gritos.",
						"vietnamese": "Tại nơi sâu nhất của phòng băng, một bóng đen khổng lồ nuốt chửng những tiếng kêu gào đã xuất hiện.",
						"thai": "ในส่วนที่ลึกที่สุดของห้องน้ำแข็ง เงาขนาดยักษ์ที่กลืนกินเสียงกรีดร้องได้ปรากฏขึ้น",
						"hindi": "बर्फ के कक्ष के सबसे गहरे हिस्से में, एक विशाल छाया प्रकट हुई, जो चीखों को निगल रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "왔구나. 나의 양식들아.",
						"english": "You've come. My sustenance.",
						"japanese": "来たか。我が糧よ。",
						"chinese": "你们来了。我的食粮。",
						"french": "Vous êtes venus. Ma subsistance.",
						"spanish": "Han venido. Mi sustento.",
						"vietnamese": "Các ngươi đã đến rồi. Món ăn của ta.",
						"thai": "มาแล้วสินะ อาหารของข้า",
						"hindi": "तुम आ गए। मेरा पोषण।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가… 이 비명을 만들어 낸 거야?",
						"english": "You… created these screams?",
						"japanese": "あなたが… この悲鳴を生み出したの？",
						"chinese": "你… 制造了这些尖叫？",
						"french": "C'est toi… qui as créé ces cris ?",
						"spanish": "¿Tú… creaste estos gritos?",
						"vietnamese": "Ngươi… đã tạo ra những tiếng hét này ư?",
						"thai": "แก… เป็นคนสร้างเสียงกรีดร้องพวกนี้เหรอ?",
						"hindi": "तुमने… ये चीखें बनाईं?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니. 난 그저… 배고팠을 뿐.",
						"english": "No. I was just… hungry.",
						"japanese": "いや。私はただ… 空腹だっただけ。",
						"chinese": "不。我只是… 饿了而已。",
						"french": "Non. J'avais juste… faim.",
						"spanish": "No. Yo solo… tenía hambre.",
						"vietnamese": "Không. Ta chỉ… đói mà thôi.",
						"thai": "เปล่า ข้าแค่… หิวเท่านั้น",
						"hindi": "नहीं। मैं बस… भूखा था।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "당신은… 이들의 고통을 먹이로 삼았군요.",
						"english": "You... you fed on their pain.",
						"japanese": "貴様は… 彼らの苦痛を糧としていたのか。",
						"chinese": "你…竟以他们的痛苦为食。",
						"french": "Vous... vous vous êtes nourri de leur douleur.",
						"spanish": "Tú... te alimentaste de su dolor.",
						"vietnamese": "Ngươi... đã lấy nỗi đau của chúng làm thức ăn.",
						"thai": "เจ้า... เจ้ากินความเจ็บปวดของพวกมันเป็นอาหารหรือนี่",
						"hindi": "तुम... तुमने इनके दर्द को अपना भोजन बनाया।"
					},
					"speaker": "inka",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 그리고 네 비명도… 곧 나의 것이 될 거다.",
						"english": "Yes. And your screams... will soon be mine.",
						"japanese": "そうだ。そしてお前の悲鳴も… すぐに私のものとなるだろう。",
						"chinese": "没错。而你的尖叫… 也将很快属于我。",
						"french": "Oui. Et tes cris... seront bientôt miens.",
						"spanish": "Sí. Y tus gritos... pronto serán míos.",
						"vietnamese": "Đúng vậy. Và tiếng thét của ngươi... cũng sẽ sớm là của ta.",
						"thai": "ใช่แล้ว และเสียงกรีดร้องของเจ้า... ก็จะเป็นของข้าในไม่ช้า",
						"hindi": "हाँ। और तुम्हारी चीखें भी... जल्द ही मेरी होंगी।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"speaker": "inka",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 겨우 이런 존재들에게…!",
						"english": "Ugh... Defeated by mere beings like these...!",
						"japanese": "くぅっ… たかがこんな者たちに…！",
						"chinese": "呃啊… 竟被这种存在…",
						"french": "Urgh... Vaincu par de simples êtres comme eux... !",
						"spanish": "¡Ugh... derrotado por simples seres como estos...!",
						"vietnamese": "Khụ... Bởi những kẻ tầm thường như thế này sao...!",
						"thai": "อึก... แค่พวกสิ่งมีชีวิตแบบนี้เนี่ยนะ...!",
						"hindi": "उफ़... केवल ऐसे प्राणियों से...!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝났어.",
						"english": "It's over.",
						"japanese": "終わったわ。",
						"chinese": "结束了。",
						"french": "C'est fini.",
						"spanish": "Se acabó.",
						"vietnamese": "Kết thúc rồi.",
						"thai": "จบแล้ว",
						"hindi": "ख़त्म हो गया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "당신도… 두려웠나요? 외로웠나요?",
						"english": "Were you... afraid? Were you lonely?",
						"japanese": "あなたも… 恐ろしかったのですか？ 孤独だったのですか？",
						"chinese": "你…也曾恐惧过吗？孤独过吗？",
						"french": "Vous aussi... avez-vous eu peur ? Étiez-vous seul ?",
						"spanish": "¿Tú también... tenías miedo? ¿Estabas solo?",
						"vietnamese": "Ngươi cũng... đã sợ hãi sao? Đã cô đơn sao?",
						"thai": "ท่านก็... หวาดกลัวงั้นหรือ? โดดเดี่ยวหรือเปล่า?",
						"hindi": "क्या तुम भी... डरे हुए थे? अकेले थे?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "헛소리… 비명은… 영원히… 끝나지… 않아…!",
						"english": "Nonsense... The screams... will never... end...!",
						"japanese": "たわごと… 悲鳴は… 永遠に… 終わら… ない…！",
						"chinese": "胡说… 尖叫… 永… 远… 不会… 停止…！",
						"french": "Absurdités... Les cris... ne... finiront... jamais... !",
						"spanish": "Tonterías... Los gritos... nunca... terminarán...!",
						"vietnamese": "Vô lý... Tiếng thét... sẽ không... bao giờ... kết thúc...!",
						"thai": "เหลวไหล... เสียงกรีดร้อง... จะไม่มีวัน... สิ้นสุด...!",
						"hindi": "बकवास... चीखें... कभी... ख़त्म... नहीं... होंगी...!"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자는 스러졌지만, 얼음 속의 비명은 쉬이 가라앉지 않았다.",
						"english": "The colossal shadow fell, but the screams trapped in the ice did not easily subside.",
						"japanese": "巨大な影は崩れ去ったが、氷の中の悲鳴は容易には鎮まらなかった。",
						"chinese": "巨大的黑影倒下了，但冰中的尖叫声却久久不散。",
						"french": "L'ombre colossale s'est effondrée, mais les cris piégés dans la glace ne se sont pas facilement tus.",
						"spanish": "La sombra colosal cayó, pero los gritos atrapados en el hielo no se calmaron fácilmente.",
						"vietnamese": "Bóng đen khổng lồ đã sụp đổ, nhưng tiếng thét trong băng không dễ dàng lắng xuống.",
						"thai": "เงาอันมหึมาล้มลง แต่เสียงกรีดร้องที่ติดอยู่ในน้ำแข็งก็ยังไม่จางหายไปง่ายๆ",
						"hindi": "विशालकाय छाया गिर गई, लेकिन बर्फ में फंसी चीखें आसानी से शांत नहीं हुईं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 절규의 근원… 아직 밝혀지지 않은 진실이 남아 있었다.",
						"english": "The source of these screams... an unrevealed truth still remained.",
						"japanese": "この絶叫の根源… まだ明かされていない真実が残っていた。",
						"chinese": "这绝望的根源… 还有未被揭示的真相残留着。",
						"french": "La source de ces hurlements... une vérité non révélée demeurait.",
						"spanish": "La fuente de estos gritos... una verdad aún no revelada permanecía.",
						"vietnamese": "Nguồn gốc của tiếng thét này... một sự thật chưa được tiết lộ vẫn còn.",
						"thai": "ต้นตอของเสียงกรีดร้องนี้... ยังมีปริศนาที่ยังไม่ถูกเปิดเผยหลงเหลืออยู่",
						"hindi": "इन चीखों का स्रोत... एक अनकही सच्चाई अभी भी बाकी थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "하찮은 것들. 내 배를 채울 뿐.",
						"english": "Worthless creatures. Merely filling my belly.",
						"japanese": "取るに足らない者たち。我が腹を満たすだけだ。",
						"chinese": "卑微的家伙们。不过是充饥罢了。",
						"french": "Créatures insignifiantes. Juste de quoi me remplir l'estomac.",
						"spanish": "Criaturas insignificantes. Solo llenan mi estómago.",
						"vietnamese": "Những thứ vô dụng. Chỉ để lấp đầy bụng ta.",
						"thai": "พวกไร้ค่า แค่มาเติมท้องข้าเท่านั้น",
						"hindi": "तुच्छ प्राणी। बस मेरा पेट भरने वाले।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…다시 한번. 절대로 멈추지 않아.",
						"english": "...Once more. I will never stop.",
						"japanese": "…もう一度。決して止まらない。",
						"chinese": "…再来一次。我绝不会停下。",
						"french": "...Encore une fois. Je ne m'arrêterai jamais.",
						"spanish": "...Una vez más. Nunca me detendré.",
						"vietnamese": "...Thêm một lần nữa. Ta sẽ không bao giờ dừng lại.",
						"thai": "...อีกครั้ง ข้าจะไม่มีวันหยุด",
						"hindi": "...एक बार और। मैं कभी नहीं रुकूंगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "당신은… 계속 배고플 거예요. 영원히.",
						"english": "You... will hunger. Forever.",
						"japanese": "貴様は… 永遠に飢え続けるだろう。",
						"chinese": "你… 将永远饥饿下去。",
						"french": "Tu... auras faim. Éternellement.",
						"spanish": "Tú... tendrás hambre. Para siempre.",
						"vietnamese": "Ngươi... sẽ đói. Mãi mãi.",
						"thai": "เจ้า... จะหิวโหยไปตลอดกาล",
						"hindi": "तुम... भूखे रहोगे। हमेशा के लिए।"
					},
					"speaker": "inka",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"잔해탑 깊숙한 곳, 거대한 빙실이 그 모습을 드러냈다.",
			"수많은 바이킹들이 얼음 속에 갇혀, 영원히 절규하고 있었다.",
			"그들의 마지막 비명은 멈추지 않고, 빙실 전체에 메아리쳤다.",
			"누군가는 그 비명에 귀를 막았지만, 인카는 달랐다.",
			"그녀는 망자들의 공포와 고독에, 기꺼이 마음을 열었다."
		],
		"english": [
			"Deep within the Ruined Tower, a colossal ice chamber revealed itself.",
			"Countless Vikings were trapped in the ice, screaming eternally.",
			"Their final screams echoed relentlessly throughout the ice chamber.",
			"Some covered their ears against the screams, but Inka was different.",
			"She willingly opened her heart to the fear and solitude of the departed."
		],
		"japanese": [
			"瓦礫の塔の奥深く、巨大な氷室がその姿を現した。",
			"無数のヴァイキングたちが氷の中に閉じ込められ、永遠に叫び続けていた。",
			"彼らの最後の悲鳴は止むことなく、氷室全体に響き渡った。",
			"誰かはその悲鳴に耳を塞いだが、インカは違った。",
			"彼女は喜んで、亡者たちの恐怖と孤独に心を開いた。"
		],
		"chinese": [
			"在残骸塔深处，一个巨大的冰室显露出来。",
			"无数的维京人被困在冰中，永远地尖叫着。",
			"他们最后的尖叫声不停歇地回荡在整个冰室中。",
			"有些人捂住了耳朵不听那些尖叫，但因卡不同。",
			"她欣然向逝者的恐惧和孤独敞开心扉。"
		],
		"french": [
			"Au plus profond de la Tour en Ruines, une chambre de glace colossale se révéla.",
			"D'innombrables Vikings étaient piégés dans la glace, hurlant éternellement.",
			"Leurs derniers cris résonnaient sans relâche dans toute la chambre de glace.",
			"Certains se bouchaient les oreilles face à ces cris, mais Inka était différente.",
			"Elle ouvrit volontiers son cœur à la peur et à la solitude des défunts."
		],
		"spanish": [
			"En lo más profundo de la Torre Ruinosa, una gigantesca cámara de hielo se reveló.",
			"Incontables vikingos estaban atrapados en el hielo, gritando eternamente.",
			"Sus últimos gritos resonaban sin cesar por toda la cámara de hielo.",
			"Algunos se taparon los oídos ante los gritos, pero Inka era diferente.",
			"Abrió su corazón de buen grado al miedo y la soledad de los difuntos."
		],
		"vietnamese": [
			"Sâu trong Tháp Đổ nát, một buồng băng khổng lồ hiện ra.",
			"Vô số chiến binh Viking bị mắc kẹt trong băng, mãi mãi gào thét.",
			"Tiếng hét cuối cùng của họ không ngừng vang vọng khắp buồng băng.",
			"Ai đó bịt tai lại trước tiếng thét, nhưng Inka thì khác.",
			"Cô ấy sẵn lòng mở lòng trước nỗi sợ hãi và sự cô đơn của những người đã khuất."
		],
		"thai": [
			"ลึกเข้าไปในหอคอยปรักหักพัง ห้องน้ำแข็งขนาดมหึมาได้ปรากฏตัวขึ้น",
			"ไวกิ้งนับไม่ถ้วนติดอยู่ในน้ำแข็ง ร่ำไห้ชั่วนิรันดร์",
			"เสียงกรีดร้องสุดท้ายของพวกเขาดังก้องไปทั่วห้องน้ำแข็งไม่หยุดหย่อน",
			"บางคนเอามือปิดหูเพื่อหนีเสียงกรีดร้อง แต่คุณอินก้าไม่เหมือนใคร",
			"เธอเปิดใจรับความกลัวและความโดดเดี่ยวของผู้จากไปโดยเต็มใจ"
		],
		"hindi": [
			"खंडहर मीनार की गहराई में, एक विशाल बर्फीला कक्ष प्रकट हुआ।",
			"अनगिनत वाइकिंग बर्फ में फंसे थे, अनंत काल तक चीखते हुए।",
			"उनकी अंतिम चीखें बर्फीले कक्ष में लगातार गूँज रही थीं।",
			"कुछ ने चीखों से अपने कान बंद कर लिए, लेकिन इंका अलग थी।",
			"उसने मृतकों के डर और अकेलेपन के लिए खुशी-खुशी अपना दिल खोल दिया।"
		]
	}
} as const;
