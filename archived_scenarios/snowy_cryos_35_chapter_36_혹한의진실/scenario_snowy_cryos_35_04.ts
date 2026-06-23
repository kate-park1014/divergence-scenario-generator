export const scenario_snowy_cryos_35_04 = {
	"scenario_id": "snowy_cryos_35_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "폐허가 된 마을. 혹독한 추위가 앗아간 생명의 흔적뿐이었다.",
						"english": "A ruined village. Only traces of life, taken by the harsh cold, remained.",
						"japanese": "廃墟となった村。過酷な寒さが奪った命の痕跡だけがあった。",
						"chinese": "一个废弃的村庄。只剩下严寒夺去的生命痕迹。",
						"french": "Un village en ruines. Seules subsistaient les traces de vie emportées par le froid rigoureux.",
						"spanish": "Un pueblo en ruinas. Solo quedaban rastros de vida, arrebatados por el frío implacable.",
						"vietnamese": "Một ngôi làng đổ nát. Chỉ còn lại dấu vết của sự sống, bị cái lạnh khắc nghiệt cướp đi.",
						"thai": "หมู่บ้านที่พังทลาย มีเพียงร่องรอยของชีวิตที่ถูกพรากไปโดยความหนาวเย็นอันโหดร้าย",
						"hindi": "एक खंडहर गाँव। केवल जीवन के निशान बचे थे, जो कठोर ठंड ने छीन लिए थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "여기가 잊힌 부족의 거주지인가… 전부 얼어붙었어.",
						"english": "Is this the forgotten tribe's dwelling?... Everything's frozen.",
						"japanese": "ここが忘れられた部族の居住地か…すべて凍りついている。",
						"chinese": "这里是被遗忘部落的居住地吗……一切都冻结了。",
						"french": "Est-ce le lieu de résidence de la tribu oubliée ?... Tout est gelé.",
						"spanish": "¿Es este el asentamiento de la tribu olvidada?... Todo está congelado.",
						"vietnamese": "Đây là nơi ở của bộ tộc bị lãng quên ư?... Mọi thứ đều đóng băng rồi.",
						"thai": "ที่นี่คือที่อยู่อาศัยของชนเผ่าที่ถูกลืมเลือนหรือ?... ทุกอย่างกลายเป็นน้ำแข็งไปหมดแล้ว",
						"hindi": "क्या यह भूले हुए कबीले का निवास स्थान है?... सब कुछ जम गया है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "…누구냐. 침입자인가.",
						"english": "...Who are you? An intruder?",
						"japanese": "…誰だ。侵入者か。",
						"chinese": "……你是谁。入侵者吗？",
						"french": "...Qui êtes-vous ? Un intrus ?",
						"spanish": "...¿Quién eres? ¿Un intruso?",
						"vietnamese": "...Ngươi là ai. Kẻ xâm nhập ư?",
						"thai": "...ใครน่ะ ผู้บุกรุกเหรอ",
						"hindi": "...कौन हो तुम? घुसपैठिया हो?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신은… 살아있는 건가?",
						"english": "Are you... alive?",
						"japanese": "あなたは…生きているのか？",
						"chinese": "你……还活着吗？",
						"french": "Vous êtes... vivant ?",
						"spanish": "¿Estás... vivo?",
						"vietnamese": "Ngươi... còn sống sao?",
						"thai": "คุณ... ยังมีชีวิตอยู่เหรอ",
						"hindi": "क्या तुम... जीवित हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "웃기지도 않는군. 나는… 이 비극의 유일한 생존자다.",
						"english": "Don't make me laugh. I am... the sole survivor of this tragedy.",
						"japanese": "笑わせるな。私は…この悲劇の唯一の生存者だ。",
						"chinese": "真可笑。我……是这场悲剧的唯一幸存者。",
						"french": "Ne me faites pas rire. Je suis... le seul survivant de cette tragédie.",
						"spanish": "No me hagas reír. Yo soy... el único superviviente de esta tragedia.",
						"vietnamese": "Đừng làm tôi cười. Tôi là... người sống sót duy nhất của bi kịch này.",
						"thai": "อย่ามาทำให้ฉันหัวเราะ ฉันคือ... ผู้รอดชีวิตเพียงคนเดียวจากโศกนาฏกรรมนี้",
						"hindi": "मुझे हँसाओ मत। मैं... इस त्रासदी का एकमात्र उत्तरजीवी हूँ।"
					},
					"emotion": "sad",
					"speaker": "ivar"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "내 부족은 강했다. 설원 그 어떤 존재도 우리를 막지 못했다.",
						"english": "My tribe was strong. No one in the snowfield could stop us.",
						"japanese": "私の部族は強かった。雪原のどんな存在も私たちを阻むことはできなかった。",
						"chinese": "我的部落很强大。雪原上没有任何存在能阻止我们。",
						"french": "Ma tribu était forte. Personne dans la toundra ne pouvait nous arrêter.",
						"spanish": "Mi tribu era fuerte. Nadie en el campo de nieve podía detenernos.",
						"vietnamese": "Bộ tộc của ta rất mạnh. Không một sinh vật nào trên tuyết nguyên có thể ngăn cản chúng ta.",
						"thai": "เผ่าของข้าแข็งแกร่ง ไม่มีสิ่งใดในทุ่งหิมะหยุดยั้งเราได้",
						"hindi": "मेरा कबीला मजबूत था। बर्फीले मैदान में कोई हमें रोक नहीं सका।"
					},
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "하지만… 그날의 저주는 달랐다. 생명의 온기마저 얼려버렸지.",
						"english": "But... the curse that day was different. It froze even the warmth of life.",
						"japanese": "しかし…あの日の呪いは違った。命の温もりさえ凍らせてしまった。",
						"chinese": "但是……那天的诅咒不同。它甚至冻结了生命的温暖。",
						"french": "Mais… la malédiction de ce jour-là était différente. Elle a gelé même la chaleur de la vie.",
						"spanish": "Pero… la maldición de ese día fue diferente. Congeló incluso el calor de la vida.",
						"vietnamese": "Nhưng… lời nguyền ngày hôm đó thì khác. Nó đóng băng cả hơi ấm của sự sống.",
						"thai": "แต่…คำสาปในวันนั้นแตกต่างออกไป มันแข็งตัวแม้กระทั่งความอบอุ่นของชีวิต",
						"hindi": "लेकिन… उस दिन का श्राप अलग था। इसने जीवन की गर्माहट को भी जमा दिया।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "단순한 겨울이 아니었단 말인가?",
						"english": "It wasn't just a simple winter?",
						"japanese": "単なる冬ではなかったということか？",
						"chinese": "这不仅仅是一个简单的冬天吗？",
						"french": "Ce n'était pas juste un simple hiver ?",
						"spanish": "¿No fue solo un invierno simple?",
						"vietnamese": "Đó không phải là một mùa đông đơn thuần ư?",
						"thai": "นี่ไม่ใช่แค่ฤดูหนาวธรรมดาใช่ไหม?",
						"hindi": "क्या यह सिर्फ एक साधारण सर्दी नहीं थी?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래. 마치… 누군가의 의지처럼. 모든 것을 집어삼키는 얼음이었다.",
						"english": "Yes. As if… someone's will. It was ice that swallowed everything.",
						"japanese": "そうだ。まるで…誰かの意思のように。すべてを飲み込む氷だった。",
						"chinese": "是的。就好像……某个人的意志。那是吞噬一切的冰。",
						"french": "Oui. Comme si… c'était la volonté de quelqu'un. C'était une glace qui engloutissait tout.",
						"spanish": "Sí. Como si… fuera la voluntad de alguien. Era hielo que lo engullía todo.",
						"vietnamese": "Phải. Cứ như… ý chí của ai đó. Đó là băng tuyết nuốt chửng mọi thứ.",
						"thai": "ใช่ ราวกับ…เจตจำนงของใครบางคน มันเป็นน้ำแข็งที่กลืนกินทุกสิ่ง",
						"hindi": "हाँ। जैसे… किसी की इच्छा हो। यह एक ऐसी बर्फ थी जो सब कुछ निगल गई।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "나는 부족을 잃었다. 모든 것을 잃었다. 그 슬픔은 나를 집어삼킬 듯했다.",
						"english": "I lost my tribe. I lost everything. That sorrow almost swallowed me whole.",
						"japanese": "私は部族を失った。すべてを失った。その悲しみは私を飲み込みそうだった。",
						"chinese": "我失去了我的部落。我失去了一切。那悲伤几乎要将我吞噬。",
						"french": "J'ai perdu ma tribu. J'ai tout perdu. Cette tristesse était sur le point de m'engloutir.",
						"spanish": "Perdí a mi tribu. Lo perdí todo. Esa tristeza casi me engulló por completo.",
						"vietnamese": "Ta đã mất bộ tộc. Mất tất cả mọi thứ. Nỗi buồn đó dường như muốn nuốt chửng ta.",
						"thai": "ข้าสูญเสียเผ่าของข้า ข้าสูญเสียทุกสิ่ง ความโศกเศร้านั้นเกือบจะกลืนกินข้า",
						"hindi": "मैंने अपना कबीला खो दिया। मैंने सब कुछ खो दिया। उस दुख ने मुझे लगभग निगल लिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 슬픔이… 설원의 저주와 관련이 있단 말인가?",
						"english": "Is that sorrow… related to the curse of the snowfield?",
						"japanese": "その悲しみが…雪原の呪いと関係があるというのか？",
						"chinese": "那悲伤……与雪原的诅咒有关吗？",
						"french": "Cette tristesse… est-elle liée à la malédiction de la toundra ?",
						"spanish": "¿Esa tristeza… está relacionada con la maldición del campo de nieve?",
						"vietnamese": "Nỗi buồn đó… có liên quan đến lời nguyền của tuyết nguyên sao?",
						"thai": "ความโศกเศร้านั้น…เกี่ยวข้องกับคำสาปแห่งทุ่งหิมะหรือ?",
						"hindi": "क्या वह दुख… बर्फीले मैदान के श्राप से संबंधित है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래. 내 고통이… 이 얼음을 더 강하게 만들었다고 생각한다.",
						"english": "Yes. I believe my pain… made this ice stronger.",
						"japanese": "そうだ。私の苦痛が…この氷をさらに強くしたのだと思う。",
						"chinese": "是的。我相信我的痛苦……让这冰变得更强。",
						"french": "Oui. Je crois que ma douleur… a rendu cette glace plus forte.",
						"spanish": "Sí. Creo que mi dolor… hizo este hielo más fuerte.",
						"vietnamese": "Phải. Ta nghĩ nỗi đau của ta… đã khiến băng tuyết này mạnh hơn.",
						"thai": "ใช่ ข้าเชื่อว่าความเจ็บปวดของข้า…ทำให้ก้อนน้ำแข็งนี้แข็งแกร่งขึ้น",
						"hindi": "हाँ। मेरा मानना ​​है कि मेरे दर्द ने… इस बर्फ को और मजबूत बना दिया।"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이바르의 비탄은 시스템의 연료가 되었다. 얼어붙은 슬픔, 크라이오스.",
						"english": "Ivar's grief became fuel for the system. Frozen sorrow, Cryos.",
						"japanese": "イヴァールの悲嘆はシステムの燃料となった。凍てついた悲しみ、クライオス。",
						"chinese": "伊瓦尔的悲伤成为了系统的燃料。冰冻的悲伤，克莱奥斯。",
						"french": "Le chagrin d'Ivar est devenu le carburant du système. La tristesse gelée, Cryos.",
						"spanish": "El dolor de Ivar se convirtió en combustible para el sistema. Dolor congelado, Cryos.",
						"vietnamese": "Nỗi đau buồn của Ivar đã trở thành nhiên liệu cho hệ thống. Nỗi buồn đóng băng, Cryos.",
						"thai": "ความโศกเศร้าของไอวาร์กลายเป็นเชื้อเพลิงสำหรับระบบ ความโศกเศร้าที่เยือกแข็ง, ไครออส",
						"hindi": "इवर का दुख व्यवस्था के लिए ईंधन बन गया। जमी हुई उदासी, क्रायोस।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "그들은 강함의 끝을 시험받는 자라고 했다.",
						"english": "They said they were those who were tested to the limits of strength.",
						"japanese": "彼らは強さの限界を試される者だと言った。",
						"chinese": "他们说他们是那些经受力量极限考验的人。",
						"french": "Ils disaient qu'ils étaient ceux dont la force était mise à l'épreuve jusqu'à ses limites.",
						"spanish": "Dijeron que eran aquellos que fueron probados hasta los límites de la fuerza.",
						"vietnamese": "Họ nói rằng họ là những người được thử thách đến giới hạn của sức mạnh.",
						"thai": "พวกเขาบอกว่าพวกเขาคือผู้ที่ถูกทดสอบถึงขีดสุดของความแข็งแกร่ง",
						"hindi": "उन्होंने कहा कि वे वे थे जिन्हें शक्ति की सीमाओं तक परखा गया था।"
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "하지만 그 끝은… 비극이었다. 슬픔을 이용당하는 것.",
						"english": "But that end was… a tragedy. Being used for sorrow.",
						"japanese": "しかし、その終わりは…悲劇だった。悲しみを利用されること。",
						"chinese": "但那个结局……是一个悲剧。被利用的悲伤。",
						"french": "Mais cette fin était… une tragédie. Être utilisé pour la tristesse.",
						"spanish": "Pero ese final fue… una tragedia. Ser usado por la tristeza.",
						"vietnamese": "Nhưng cái kết đó… là một bi kịch. Bị lợi dụng nỗi buồn.",
						"thai": "แต่จุดจบนั้น…เป็นโศกนาฏกรรม การถูกใช้ประโยชน์จากความเศร้า",
						"hindi": "लेकिन वह अंत… एक त्रासदी थी। दुख के लिए इस्तेमाल किया जाना।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "누군가의 슬픔이… 이 모든 것을 움직인다고?",
						"english": "Someone's sorrow... moves all of this?",
						"japanese": "誰かの悲しみが…これら全てを動かしていると？",
						"chinese": "某个人的悲伤…驱动着这一切？",
						"french": "La tristesse de quelqu'un... meut tout cela ?",
						"spanish": "¿La tristeza de alguien... mueve todo esto?",
						"vietnamese": "Nỗi buồn của ai đó... đang thúc đẩy tất cả những điều này sao?",
						"thai": "ความเศร้าของใครบางคน... กำลังขับเคลื่อนทั้งหมดนี้งั้นหรือ?",
						"hindi": "किसी का दुख... इन सबको चला रहा है?"
					}
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 앞에 있는 존재도… 나와 다르지 않을 거다. 조심해라.",
						"english": "The being ahead... will be no different from me. Be careful.",
						"japanese": "この先にいる存在も…私と変わりないだろう。気をつけろ。",
						"chinese": "前面的存在…也与我无异。小心。",
						"french": "L'être devant nous... ne sera pas différent de moi. Sois prudent.",
						"spanish": "El ser que está delante... no será diferente a mí. Ten cuidado.",
						"vietnamese": "Kẻ phía trước... cũng sẽ không khác ta. Cẩn thận đấy.",
						"thai": "สิ่งมีชีวิตเบื้องหน้า... ก็คงไม่ต่างจากข้า ระวังตัวด้วย",
						"hindi": "सामने वाला भी... मुझसे अलग नहीं होगा। सावधान रहना।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "설원 깊은 곳. 거대한 그림자가 앞을 가로막았다.",
						"english": "Deep in the snowfield. A giant shadow blocked the way.",
						"japanese": "雪原の奥深く。巨大な影が道を阻んだ。",
						"chinese": "雪原深处。一个巨大的身影挡住了去路。",
						"french": "Au cœur de la plaine enneigée. Une ombre gigantesque barrait le passage.",
						"spanish": "En lo profundo del campo de nieve. Una sombra gigantesca bloqueó el camino.",
						"vietnamese": "Sâu trong cánh đồng tuyết. Một bóng đen khổng lồ chặn đường.",
						"thai": "ลึกเข้าไปในทุ่งหิมะ เงาขนาดยักษ์ขวางทางไว้",
						"hindi": "बर्फ के मैदान की गहराई में। एक विशाल परछाई ने रास्ता रोक दिया।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "왔구나. 이 굶주림의 끝을 보여주겠다.",
						"english": "You've come. I will show you the end of this hunger.",
						"japanese": "来たか。この飢えの終わりを見せてやろう。",
						"chinese": "你来了。我将让你见识这饥饿的终点。",
						"french": "Vous êtes venus. Je vous montrerai la fin de cette faim.",
						"spanish": "Has venido. Te mostraré el fin de esta hambruna.",
						"vietnamese": "Ngươi đã đến. Ta sẽ cho ngươi thấy sự kết thúc của cơn đói này.",
						"thai": "เจ้ามาแล้ว ข้าจะแสดงให้เจ้าเห็นจุดจบของความหิวโหยนี้",
						"hindi": "तुम आ गए। मैं तुम्हें इस भूख का अंत दिखाऊंगा।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신도… 희생자란 말인가?",
						"english": "Are you... a victim too?",
						"japanese": "あなたも…犠牲者なのか？",
						"chinese": "你也是…受害者吗？",
						"french": "Vous aussi... êtes-vous une victime ?",
						"spanish": "¿Tú también... eres una víctima?",
						"vietnamese": "Ngươi cũng... là nạn nhân sao?",
						"thai": "ท่านก็... เป็นเหยื่อด้วยหรือ?",
						"hindi": "क्या तुम भी... एक पीड़ित हो?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "나는… 강함 그 자체다. 너희의 슬픔도 나에게 바쳐라.",
						"english": "I am... strength itself. Offer your sorrows to me as well.",
						"japanese": "私は…強さそのものだ。お前たちの悲しみも私に捧げろ。",
						"chinese": "我就是…强大本身。你们的悲伤也献给我吧。",
						"french": "Je suis... la force incarnée. Offrez-moi vos chagrins aussi.",
						"spanish": "Yo soy... la fuerza misma. Ofrecedme también vuestras penas.",
						"vietnamese": "Ta là... sức mạnh. Nỗi buồn của các ngươi cũng hãy dâng cho ta.",
						"thai": "ข้าคือ... ความแข็งแกร่ง จงมอบความโศกเศร้าของพวกเจ้าให้ข้าซะ",
						"hindi": "मैं... स्वयं शक्ति हूँ। अपने दुख भी मुझे अर्पित करो।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "더 이상은… 희망은 없다. 너희도 얼어붙을 것이다.",
						"english": "No more... hope. You too will freeze.",
						"japanese": "もう…希望はない。お前たちも凍りつくだろう。",
						"chinese": "没有…希望了。你们也会冻结的。",
						"french": "Plus d'espoir... Vous aussi, vous allez geler.",
						"spanish": "No hay más... esperanza. Vosotros también os congelaréis.",
						"vietnamese": "Không còn... hy vọng nữa. Các ngươi cũng sẽ đóng băng thôi.",
						"thai": "ไม่มี... ความหวังอีกแล้ว พวกเจ้าก็จะถูกแช่แข็งเหมือนกัน",
						"hindi": "और नहीं... आशा नहीं है। तुम भी जम जाओगे।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어. 우리는 포기하지 않아!",
						"english": "It's not over yet... We won't give up!",
						"japanese": "まだ…終わってない。私たちは諦めない！",
						"chinese": "还没…结束。我们不会放弃！",
						"french": "Ce n'est pas encore fini... Nous n'abandonnons pas !",
						"spanish": "Aún no ha terminado... ¡No nos rendiremos!",
						"vietnamese": "Chưa… kết thúc đâu. Chúng tôi sẽ không bỏ cuộc!",
						"thai": "ยัง…ไม่จบ เราไม่ยอมแพ้!",
						"hindi": "अभी… खत्म नहीं हुआ है। हम हार नहीं मानेंगे!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 나는… 그저… 강해지고 싶었을 뿐인데….",
						"english": "Ugh... I... just... wanted to be strong...",
						"japanese": "くっ…私は…ただ…強くなりたかっただけなのに…。",
						"chinese": "呃…我…只是…想变强而已…",
						"french": "Urgh... Je... voulais juste... être fort...",
						"spanish": "Ugh... Yo... solo... quería ser fuerte...",
						"vietnamese": "Khụ... Ta... chỉ là... muốn mạnh hơn thôi mà...",
						"thai": "อึก... ข้า... ก็แค่... อยากแข็งแกร่งขึ้นเท่านั้นเอง...",
						"hindi": "उफ़... मैं... बस... मजबूत बनना चाहता था..."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "당신도 시스템의 희생자였어.",
						"english": "You were a victim of the system too.",
						"japanese": "あなたもシステムの犠牲者だったんだ。",
						"chinese": "你也是系统的受害者。",
						"french": "Vous étiez aussi une victime du système.",
						"spanish": "Tú también fuiste una víctima del sistema.",
						"vietnamese": "Ngươi cũng là nạn nhân của hệ thống.",
						"thai": "ท่านก็เป็นเหยื่อของระบบด้วยเหมือนกัน",
						"hindi": "तुम भी सिस्टम के शिकार थे।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "중간 보스를 처치했다. 하지만 얼어붙은 슬픔의 근원은 아직 저 너머에 있었다.",
						"english": "The mid-boss was defeated. But the source of the frozen sorrow was still beyond.",
						"japanese": "中間ボスを倒した。だが、凍てついた悲しみの根源はまだその先にあった。",
						"chinese": "击败了中级头目。但冰封悲伤的根源仍在那边。",
						"french": "Le boss intermédiaire a été vaincu. Mais la source de la tristesse gelée se trouvait encore au-delà.",
						"spanish": "El jefe intermedio fue derrotado. Pero la fuente de la tristeza congelada aún estaba más allá.",
						"vietnamese": "Đã tiêu diệt trùm giữa. Nhưng nguồn gốc của nỗi buồn đóng băng vẫn còn ở phía xa.",
						"thai": "ปราบมินิบอสได้แล้ว แต่ต้นตอของความโศกเศร้าที่ถูกแช่แข็งยังคงอยู่เบื้องหลัง",
						"hindi": "मिड-बॉस को हरा दिया। लेकिन जमे हुए दुख का स्रोत अभी भी उस पार था।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"잊힌 부족의 흔적, 설원 깊숙이 잠들어 있었다.",
			"브란의 단서가 이끈 곳은 폐허가 된 마을.",
			"거기서 이바르를 만났다. 비극 속, 진실을 아는 유일한 생존자를.",
			"설원의 저주, 그 뒤에 거대한 시스템의 그림자가 드리워져 있었다.",
			"강인한 전사의 슬픔마저 이용당하는 잔혹한 진실을 향해."
		],
		"english": [
			"Traces of a forgotten tribe lay dormant deep within the snowfield.",
			"Bran's clues led to a ruined village.",
			"There, I met Ivar. The sole survivor who knew the truth amidst the tragedy.",
			"Behind the curse of the snowfield, the shadow of a colossal system loomed.",
			"Towards a cruel truth where even a strong warrior's sorrow is exploited."
		],
		"japanese": [
			"忘れられた部族の痕跡が、雪原の奥深くに眠っていた。",
			"ブランの手がかりが導いた先は、廃墟となった村だった。",
			"そこでイヴァルに出会った。悲劇の中、真実を知る唯一の生存者を。",
			"雪原の呪い、その背後には巨大なシステムの影が潜んでいた。",
			"強靭な戦士の悲しみさえも利用される、残酷な真実へと。"
		],
		"chinese": [
			"被遗忘部落的痕迹，沉睡在雪原深处。",
			"布兰的线索指向了一个废弃的村庄。",
			"在那里，我遇到了伊瓦尔。悲剧之中，唯一知晓真相的幸存者。",
			"雪原的诅咒背后，一个庞大系统的阴影笼罩着。",
			"迈向残酷的真相，即使是坚韧战士的悲伤也被利用。"
		],
		"french": [
			"Les traces d'une tribu oubliée sommeillaient au plus profond de l'étendue enneigée.",
			"Les indices de Bran menaient à un village en ruines.",
			"Là, j'ai rencontré Ivar. Le seul survivant qui connaissait la vérité au milieu de la tragédie.",
			"Derrière la malédiction de l'étendue enneigée, l'ombre d'un système colossal planait.",
			"Vers une vérité cruelle où même le chagrin d'un guerrier puissant est exploité."
		],
		"spanish": [
			"Las huellas de una tribu olvidada yacían dormidas en lo profundo del campo de nieve.",
			"Las pistas de Bran llevaron a un pueblo en ruinas.",
			"Allí, conocí a Ivar. El único superviviente que conocía la verdad en medio de la tragedia.",
			"Detrás de la maldición del campo de nieve, la sombra de un sistema colosal se cernía.",
			"Hacia una verdad cruel donde incluso el dolor de un guerrero fuerte es explotado."
		],
		"vietnamese": [
			"Dấu vết của một bộ tộc bị lãng quên nằm im lìm sâu trong tuyết.",
			"Dấu vết của Bran dẫn đến một ngôi làng đổ nát.",
			"Ở đó, tôi gặp Ivar. Người sống sót duy nhất biết sự thật giữa bi kịch.",
			"Đằng sau lời nguyền của tuyết, bóng dáng một hệ thống khổng lồ đang ẩn hiện.",
			"Hướng tới một sự thật tàn khốc, nơi ngay cả nỗi buồn của một chiến binh mạnh mẽ cũng bị lợi dụng."
		],
		"thai": [
			"ร่องรอยของชนเผ่าที่ถูกลืมเลือน หลับใหลอยู่ลึกเข้าไปในทุ่งหิมะ",
			"เบาะแสของบรานนำไปสู่หมู่บ้านที่พังทลาย",
			"ที่นั่น ฉันได้พบกับไอบาร์ ผู้รอดชีวิตเพียงคนเดียวที่รู้ความจริงท่ามกลางโศกนาฏกรรม",
			"เบื้องหลังคำสาปของทุ่งหิมะ เงาของระบบขนาดใหญ่ได้แผ่ปกคลุม",
			"มุ่งหน้าสู่ความจริงอันโหดร้าย ที่แม้แต่ความเศร้าของนักรบผู้แข็งแกร่งก็ถูกนำมาใช้ประโยชน์"
		],
		"hindi": [
			"एक भूले हुए कबीले के निशान, बर्फ़ीले मैदान में गहराई से सोए हुए थे।",
			"ब्रैन के सुराग एक खंडहर गाँव की ओर ले गए।",
			"वहाँ, मैं इवार से मिला। त्रासदी के बीच सच्चाई जानने वाला एकमात्र उत्तरजीवी।",
			"बर्फ़ीले मैदान के अभिशाप के पीछे, एक विशाल प्रणाली की छाया मंडरा रही थी।",
			"एक क्रूर सत्य की ओर, जहाँ एक शक्तिशाली योद्धा के दुख का भी फायदा उठाया जाता है।"
		]
	}
} as const;
