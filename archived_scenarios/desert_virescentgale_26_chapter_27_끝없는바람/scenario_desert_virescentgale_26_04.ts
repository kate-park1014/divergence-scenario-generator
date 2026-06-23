export const scenario_desert_virescentgale_26_04 = {
	"scenario_id": "desert_virescentgale_26_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"jasper": {
			"id": "mon_f3aa9577-2fd6-4d65-80cd-6b654778b7f4",
			"name": {
				"korean": "재스퍼",
				"english": "Jasper",
				"japanese": "ジャスパー",
				"chinese": "贾斯珀",
				"french": "Jasper",
				"spanish": "Jasper",
				"vietnamese": "Jasper",
				"thai": "แจสเปอร์",
				"hindi": "जैस्पर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1ee5a95-a611-4b33-7264-582262b68800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc87b1ce-d1eb-40ea-ccc4-3c4434d35800/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "뜨거운 모래바람이 살을 태웠다. 의식은 희미해져 갔다.",
						"english": "The hot sandstorm scorched my skin. Consciousness faded.",
						"japanese": "熱い砂嵐が肌を焼いた。意識は薄れていった。",
						"chinese": "灼热的沙尘暴灼烧着皮肤。意识渐渐模糊。",
						"french": "Le vent de sable brûlant me rôtissait la peau. Ma conscience s'est évanouie.",
						"spanish": "El ardiente viento de arena me quemaba la piel. La conciencia se desvanecía.",
						"vietnamese": "Cơn bão cát nóng bỏng đốt cháy da thịt. Ý thức mờ dần.",
						"thai": "พายุทรายร้อนระอุเผาไหม้ผิวหนัง สติค่อยๆ เลือนหายไป",
						"hindi": "गर्म रेतीले तूफान ने त्वचा झुलसा दी। चेतना धूमिल होती गई।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가... 어디지...? 눈앞이 흐려져...",
						"english": "Where... am I...? My vision blurs...",
						"japanese": "ここは…どこだ…？目の前が霞む…",
						"chinese": "这里……是哪……？眼前一片模糊……",
						"french": "Où... suis-je...? Ma vision se trouble...",
						"spanish": "¿Dónde... estoy...? Mi vista se nubla...",
						"vietnamese": "Đây là... đâu...? Mắt tôi mờ đi...",
						"thai": "ที่นี่… ที่ไหน…? ภาพตรงหน้าพร่ามัว…",
						"hindi": "ये... कहां... है...? मेरी आंखों के सामने सब धुंधला रहा है..."
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "jasper",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "벌써 보이는군. 사막의 진짜 얼굴이.",
						"english": "I see it already. The desert's true face.",
						"japanese": "もう見えるか。砂漠の本当の顔が。",
						"chinese": "已经看到了吗。沙漠的真面目。",
						"french": "Je le vois déjà. Le vrai visage du désert.",
						"spanish": "Ya lo veo. El verdadero rostro del desierto.",
						"vietnamese": "Đã thấy rồi. Bộ mặt thật của sa mạc.",
						"thai": "เห็นแล้วสินะ โฉมหน้าที่แท้จริงของทะเลทราย",
						"hindi": "मुझे पहले ही दिख रहा है। रेगिस्तान का असली चेहरा।"
					},
					"type": "speech",
					"speaker": "jasper",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누구냐... 너...",
						"english": "Who... are you...?",
						"japanese": "誰だ…お前は…",
						"chinese": "你是谁……？",
						"french": "Qui... es-tu...?",
						"spanish": "¿Quién... eres...?",
						"vietnamese": "Ngươi là... ai...?",
						"thai": "ใคร… แก…",
						"hindi": "कौन हो... तुम...?"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "불타는 왕국, 무너지는 성벽. 과거의 악몽이 눈앞에 생생하게 펼쳐졌다.",
						"english": "Burning kingdom, crumbling walls. The nightmare of the past unfolded vividly before my eyes.",
						"japanese": "燃える王国、崩れゆく城壁。過去の悪夢が目の前に鮮やかに広がる。",
						"chinese": "燃烧的王国，崩塌的城墙。过去的噩梦在眼前生动地展开。",
						"french": "Royaume en flammes, remparts s'effondrant. Le cauchemar du passé se déroulait vivement sous mes yeux.",
						"spanish": "Reino en llamas, muros que se derrumban. La pesadilla del pasado se desplegó vívidamente ante mis ojos.",
						"vietnamese": "Vương quốc bốc cháy, tường thành sụp đổ. Ác mộng quá khứ hiện ra sống động trước mắt tôi.",
						"thai": "อาณาจักรที่ลุกไหม้ กำแพงที่พังทลาย ฝันร้ายในอดีตปรากฏชัดเจนต่อหน้า",
						"hindi": "जलता हुआ राज्य, ढहती दीवारें। अतीत का दुःस्वप्न मेरी आँखों के सामने सजीव हो उठा।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "안 돼...! 아니야...! 그럴 리 없어...!",
						"english": "No...! It's not true...! It can't be...!",
						"japanese": "ダメだ…！違う…！そんなはずはない…！",
						"chinese": "不…！不是的…！不可能…！",
						"french": "Non...! Ce n'est pas vrai...! Ce n'est pas possible...!",
						"spanish": "¡No...! ¡No es cierto...! ¡No puede ser...!",
						"vietnamese": "Không...! Không phải...! Không thể nào...!",
						"thai": "ไม่นะ...! ไม่จริง...! เป็นไปไม่ได้...!",
						"hindi": "नहीं...! ऐसा नहीं है...! ऐसा नहीं हो सकता...!"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "jasper",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "jasper",
					"content": {
						"korean": "그것은 네 환영이 아니다.",
						"english": "That's no illusion of yours.",
						"japanese": "それは幻ではない。",
						"chinese": "那不是你的幻觉。",
						"french": "Ce n'est pas ton illusion.",
						"spanish": "Esa no es tu ilusión.",
						"vietnamese": "Đó không phải là ảo ảnh của ngươi.",
						"thai": "นั่นไม่ใช่ภาพลวงตาของเจ้า",
						"hindi": "वह तुम्हारा भ्रम नहीं है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야? 내 기억인데!",
						"english": "What are you talking about? It's my memory!",
						"japanese": "何を言っている？私の記憶だ！",
						"chinese": "你 M3说什 M2么？那是我的记忆！",
						"french": "De quoi parles-tu ? C'est mon souvenir !",
						"spanish": "¿De qué hablas? ¡Es mi memoria!",
						"vietnamese": "Ngươi nói gì vậy? Đó là ký ức của ta mà!",
						"thai": "เจ้าพูดอะไร? นั่นมันความทรงจำของข้า!",
						"hindi": "क्या बकवास है? यह मेरी याददाश्त है!"
					},
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"speaker": "jasper",
					"type": "speech",
					"content": {
						"korean": "여기 갇힌 자들은 모두 본다. 저주의 진짜 모습을.",
						"english": "All who are trapped here see it. The true form of the curse.",
						"japanese": "ここに囚われた者たちは皆見る。呪いの本当の姿を。",
						"chinese": "所有被困于此的人都能看到。诅咒的真面目。",
						"french": "Tous ceux qui sont piégés ici le voient. La véritable forme de la malédiction.",
						"spanish": "Todos los que están atrapados aquí lo ven. La verdadera forma de la maldición.",
						"vietnamese": "Tất cả những kẻ bị giam cầm ở đây đều nhìn thấy. Bộ dạng thật sự của lời nguyền.",
						"thai": "ผู้ที่ถูกกักขังที่นี่ล้วนได้เห็น โฉมหน้าที่แท้จริงของคำสาป",
						"hindi": "यहाँ फँसे सभी लोग देखते हैं। शाप का असली रूप।"
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
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "jasper"
				},
				{
					"content": {
						"korean": "말도 안 돼... 내 고통이... 환각이라고?",
						"english": "No way... My suffering... an illusion?",
						"japanese": "まさか…私の苦痛が…幻覚だと？",
						"chinese": "不可能……我的痛苦……是幻觉？",
						"french": "C'est impossible... Ma souffrance... une hallucination ?",
						"spanish": "Imposible... ¿Mi dolor... una alucinación?",
						"vietnamese": "Không thể nào... Nỗi đau của ta... là ảo giác sao?",
						"thai": "ไม่จริงน่า... ความเจ็บปวดของข้า... เป็นภาพหลอนงั้นรึ?",
						"hindi": "बकवास... मेरा दर्द... एक भ्रम है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "jasper",
					"content": {
						"korean": "환각이 아니다. 사막이 보여주는 진실.",
						"english": "It's not an illusion. It's the truth the desert reveals.",
						"japanese": "幻覚ではない。砂漠が見せる真実だ。",
						"chinese": "这不是幻觉。是沙漠揭示的真相。",
						"french": "Ce n'est pas une illusion. C'est la vérité que le désert révèle.",
						"spanish": "No es una ilusión. Es la verdad que el desierto muestra.",
						"vietnamese": "Không phải ảo giác. Là sự thật sa mạc đang bày ra.",
						"thai": "ไม่ใช่อย่างนั้นหรอก มันคือความจริงที่ทะเลทรายเผยให้เห็น",
						"hindi": "यह भ्रम नहीं है। यह वह सच्चाई है जो रेगिस्तान दिखाता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "jasper",
					"type": "speech",
					"content": {
						"korean": "네가 잊고 싶었던 것. 사막은 그걸 이용한다.",
						"english": "What you wanted to forget. The desert uses that.",
						"japanese": "お前が忘れたかったこと。砂漠はそれを利用する。",
						"chinese": "你想要遗忘的东西。沙漠会利用它。",
						"french": "Ce que tu voulais oublier. Le désert s'en sert.",
						"spanish": "Lo que querías olvidar. El desierto lo usa.",
						"vietnamese": "Điều ngươi muốn quên. Sa mạc lợi dụng điều đó.",
						"thai": "สิ่งที่เจ้าอยากจะลืม ทะเลทรายใช้สิ่งนั้น",
						"hindi": "जो तुम भूलना चाहते थे। रेगिस्तान उसका इस्तेमाल करता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "그럼... 우리 모두가... 속고 있었단 말이야?",
						"english": "Then... we were all... being deceived?",
						"japanese": "なら…私たち全員が…騙されていたというのか？",
						"chinese": "那么……我们所有人……都被骗了？",
						"french": "Alors... nous étions tous... dupés ?",
						"spanish": "Entonces... ¿todos estábamos... engañados?",
						"vietnamese": "Vậy thì... tất cả chúng ta... đều bị lừa sao?",
						"thai": "ถ้าอย่างนั้น... พวกเราทุกคน... ถูกหลอกมาตลอดเลยรึ?",
						"hindi": "तो... हम सभी... धोखे में थे?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "사막은 육체뿐 아니라 영혼까지 가둔다. 벗어날 수 없는 고통으로.",
						"english": "The desert traps not only the body but also the soul. With inescapable suffering.",
						"japanese": "砂漠は肉体だけでなく魂までも囚える。逃れられない苦痛で。",
						"chinese": "沙漠不仅禁锢肉体，也禁锢灵魂。以无法摆脱的痛苦。",
						"french": "Le désert emprisonne non seulement le corps mais aussi l'âme. Dans une souffrance inéluctable.",
						"spanish": "El desierto atrapa no solo el cuerpo sino también el alma. Con un sufrimiento ineludible.",
						"vietnamese": "Sa mạc giam cầm không chỉ thể xác mà cả linh hồn. Bằng nỗi đau không thể thoát ly.",
						"thai": "ทะเลทรายกักขังไม่เพียงร่างกายแต่ยังกักขังวิญญาณ ด้วยความเจ็บปวดที่หลีกหนีไม่ได้",
						"hindi": "रेगिस्तान शरीर ही नहीं, आत्मा को भी कैद करता है। ऐसी पीड़ा से जिससे बचा नहीं जा सकता।"
					},
					"speaker": "jasper",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "jasper",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "모든 게 다 의미 없었단 말인가...",
						"english": "So everything was meaningless...?",
						"japanese": "全てが無意味だったというのか…",
						"chinese": "难道一切都毫无意义吗……",
						"french": "Tout cela était donc dénué de sens...?",
						"spanish": "¿Entonces todo fue en vano...?",
						"vietnamese": "Chẳng lẽ mọi thứ đều vô nghĩa sao...?",
						"thai": "หรือว่าทุกสิ่งทุกอย่างไร้ความหมายงั้นรึ...",
						"hindi": "तो क्या सब कुछ व्यर्थ था...?"
					}
				},
				{
					"content": {
						"korean": "절망의 그림자가 깊어졌다. 벗어날 수 없는 굴레처럼.",
						"english": "The shadow of despair deepened. Like an inescapable yoke.",
						"japanese": "絶望の影が深まった。逃れられない輪廻のように。",
						"chinese": "绝望的阴影加深了。如同无法摆脱的枷锁。",
						"french": "L'ombre du désespoir s'épaissit. Comme un joug inéluctable.",
						"spanish": "La sombra de la desesperación se hizo más profunda. Como un yugo ineludible.",
						"vietnamese": "Bóng tối tuyệt vọng đã in sâu. Như một gông xiềng không thể thoát.",
						"thai": "เงาแห่งความสิ้นหวังทอดยาวลึก เหมือนบ่วงกรรมที่หนีไม่พ้น",
						"hindi": "निराशा की छाया गहरी हो गई। एक ऐसे बंधन की तरह जिससे बचा नहीं जा सकता।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "jasper",
					"content": {
						"korean": "더 깊이 갈수록 보게 될 거다. 네가 누구인지, 사막이 무엇인지.",
						"english": "The deeper you go, the more you will see. Who you are, and what the desert is.",
						"japanese": "深く進むほど、分かるだろう。お前が誰で、砂漠が何であるか。",
						"chinese": "越往深处走，你就会看到。你是谁，沙漠是什么。",
						"french": "Plus tu iras loin, plus tu verras. Qui tu es, et ce qu'est le désert.",
						"spanish": "Cuanto más profundo vayas, más verás. Quién eres y qué es el desierto.",
						"vietnamese": "Càng đi sâu, ngươi sẽ càng thấy rõ. Ngươi là ai, và sa mạc là gì.",
						"thai": "ยิ่งลึกเข้าไปเท่าไร เจ้าก็จะยิ่งเห็นว่าเจ้าคือใคร และทะเลทรายคืออะไร",
						"hindi": "जितना गहरा जाओगे, उतना ही देखोगे। तुम कौन हो, और रेगिस्तान क्या है।"
					}
				},
				{
					"direction": "down",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "jasper"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "...나 혼자 남겨졌어.",
						"english": "...I'm left alone.",
						"japanese": "...私一人、残された。",
						"chinese": "...我被独自留下了。",
						"french": "...Je suis seul.",
						"spanish": "...Me quedé solo.",
						"vietnamese": "...Ta bị bỏ lại một mình.",
						"thai": "...ฉันถูกทิ้งให้อยู่คนเดียว",
						"hindi": "...मैं अकेला रह गया हूँ।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "환영이 그림자처럼 덮쳐왔다. 발버둥 칠수록 더 깊이 빠져들었다.",
						"english": "Illusions enveloped me like shadows. The more I struggled, the deeper I sank.",
						"japanese": "幻影が影のように襲いかかった。もがくほど、より深く引きずり込まれた。",
						"chinese": "幻象如影般袭来。挣扎得越厉害，陷得越深。",
						"french": "Les illusions m'enveloppaient comme des ombres. Plus je me débattais, plus je m'enfonçais.",
						"spanish": "Las ilusiones me envolvieron como sombras. Cuanto más luchaba, más me hundía.",
						"vietnamese": "Ảo ảnh bao trùm như bóng tối. Càng vùng vẫy, càng lún sâu.",
						"thai": "ภาพลวงตาเข้าปกคลุมราวกับเงา ยิ่งดิ้นรนเท่าไร ก็ยิ่งจมดิ่งลงไปเท่านั้น",
						"hindi": "भ्रम परछाई की तरह छा गए। जितना मैंने संघर्ष किया, उतना ही गहरा डूबता चला गया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "포기해라. 너는 이미 길을 잃었어. 영원히.",
						"english": "Give up. You're already lost. Forever.",
						"japanese": "諦めろ。お前はもう道に迷っている。永遠に。",
						"chinese": "放弃吧。你已经迷失了。永远。",
						"french": "Abandonne. Tu es déjà perdu. Pour toujours.",
						"spanish": "Ríndete. Ya estás perdido. Para siempre.",
						"vietnamese": "Bỏ cuộc đi. Ngươi đã lạc lối rồi. Mãi mãi.",
						"thai": "ยอมแพ้ซะ เจ้าหลงทางไปแล้ว ตลอดกาล",
						"hindi": "हार मान लो। तुम पहले ही रास्ता भटक चुके हो। हमेशा के लिए।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니... 아직... 포기하지 않아...!",
						"english": "No... not yet... I won't give up...!",
						"japanese": "いや... まだだ... 諦めない...！",
						"chinese": "不... 还没... 我不会放弃...！",
						"french": "Non... pas encore... Je n'abandonnerai pas... !",
						"spanish": "No... todavía no... ¡No me rendiré...!",
						"vietnamese": "Không... chưa đâu... Tôi sẽ không bỏ cuộc...!",
						"thai": "ไม่... ยัง... ฉันจะไม่ยอมแพ้...!",
						"hindi": "नहीं... अभी नहीं... मैं हार नहीं मानूँगा...!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽... 결국... 여기까지인가... 하지만... 네게 남은 건... 아무것도 없어...",
						"english": "Urgh... In the end... is this it...? But... you have nothing left...",
						"japanese": "くっ...結局...ここまでか...だが...お前には何も残っていない...",
						"chinese": "呃... 最终... 就到此为止了吗... 但是... 你已经一无所有了...",
						"french": "Urgh... Finalement... est-ce tout...? Mais... il ne te reste... rien...",
						"spanish": "Uf... Al final... ¿es esto...? Pero... no te queda... nada...",
						"vietnamese": "Khụ... Cuối cùng... chỉ đến đây thôi sao... Nhưng... ngươi chẳng còn lại gì cả...",
						"thai": "อึก... ในที่สุด... ก็แค่นี้เองหรือ... แต่... เจ้าก็ไม่มีอะไรเหลือแล้ว...",
						"hindi": "उफ़... आखिर... यहीं तक था...? लेकिन... तुम्हारे पास कुछ भी नहीं बचा..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니. 아직... 나 자신이 남아있어.",
						"english": "No. I still... have myself.",
						"japanese": "いや。まだ...私自身が残っている。",
						"chinese": "不。我还有...我自己。",
						"french": "Non. J'ai encore... moi-même.",
						"spanish": "No. Todavía... me tengo a mí mismo.",
						"vietnamese": "Không. Ta vẫn còn... chính mình.",
						"thai": "ไม่สิ ฉันยัง... มีตัวเองอยู่",
						"hindi": "नहीं। अभी भी... मैं खुद बचा हूँ।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환영의 주인은 쓰러졌다. 그러나 주인공의 눈은 여전히 혼란으로 물들어 있었다. 사막의 저주는 끝나지 않았다.",
						"english": "The master of illusion fell. Yet, the protagonist's eyes were still clouded with confusion. The desert's curse had not ended.",
						"japanese": "幻影の主は倒れた。しかし、主人公の瞳は依然として混乱に染まっていた。砂漠の呪いは終わっていなかった。",
						"chinese": "幻象之主倒下了。然而，主角的眼中依然充满了困惑。沙漠的诅咒并未结束。",
						"french": "Le maître de l'illusion est tombé. Pourtant, les yeux du protagoniste étaient toujours embués de confusion. La malédiction du désert n'était pas terminée.",
						"spanish": "El amo de la ilusión cayó. Sin embargo, los ojos del protagonista seguían nublados por la confusión. La maldición del desierto no había terminado.",
						"vietnamese": "Chủ nhân của ảo ảnh đã ngã xuống. Tuy nhiên, đôi mắt của nhân vật chính vẫn tràn ngập sự bối rối. Lời nguyền của sa mạc vẫn chưa kết thúc.",
						"thai": "จ้าวแห่งภาพลวงตาพ่ายแพ้แล้ว ทว่าดวงตาของตัวเอกยังคงสับสน คำสาปแห่งทะเลทรายยังไม่สิ้นสุดลง",
						"hindi": "भ्रम का स्वामी गिर गया। फिर भी, नायक की आँखें अभी भी भ्रम से भरी हुई थीं। रेगिस्तान का अभिशाप समाप्त नहीं हुआ था।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "길을 잃었구나. 이제 너는 환영의 일부가 될 뿐.",
						"english": "You are lost. Now you will merely become part of the illusion.",
						"japanese": "道を失ったな。お前はただの幻影の一部となるだけだ。",
						"chinese": "你迷失了。现在你将只是幻象的一部分。",
						"french": "Tu es perdu. Maintenant, tu ne seras plus qu'une partie de l'illusion.",
						"spanish": "Te has perdido. Ahora solo serás parte de la ilusión.",
						"vietnamese": "Ngươi đã lạc lối. Giờ đây, ngươi sẽ chỉ trở thành một phần của ảo ảnh.",
						"thai": "เจ้าหลงทางแล้ว ตอนนี้เจ้าจะเป็นเพียงส่วนหนึ่งของภาพลวงตาเท่านั้น",
						"hindi": "तुम खो गए हो। अब तुम बस भ्रम का हिस्सा बन जाओगे।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "헛소리 마! 네놈이 그 환각들을 보내는 건가?",
						"english": "Nonsense! Are you sending those hallucinations?",
						"japanese": "戯言を言うな！貴様がその幻覚を送っているのか？",
						"chinese": "胡说八道！是你送来了那些幻觉吗？",
						"french": "Absurdités ! C'est toi qui envoies ces hallucinations ?",
						"spanish": "¡Tonterías! ¿Eres tú quien envía esas alucinaciones?",
						"vietnamese": "Vô nghĩa! Ngươi đang gửi những ảo giác đó sao?",
						"thai": "ไร้สาระ! แกเป็นคนส่งภาพหลอนพวกนั้นมาใช่ไหม?",
						"hindi": "बकवास! क्या तुम वो भ्रम भेज रहे हो?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "후후... 환각이 아니라 진실이다. 어차피 네 세상은 무너졌어.",
						"english": "Huhu... It's not a hallucination, but the truth. Your world has already crumbled anyway.",
						"japanese": "フフ...幻覚ではなく、真実だ。どうせお前の世界は崩壊した。",
						"chinese": "呵呵...这不是幻觉，而是真相。反正你的世界已经崩塌了。",
						"french": "Huhu... Ce n'est pas une hallucination, mais la vérité. Ton monde s'est déjà effondré de toute façon.",
						"spanish": "Juju... No es una alucinación, sino la verdad. De todos modos, tu mundo ya se ha derrumbado.",
						"vietnamese": "Hừ hừ... Không phải ảo giác, mà là sự thật. Dù sao thì thế giới của ngươi cũng đã sụp đổ rồi.",
						"thai": "ฮึฮึ... ไม่ใช่ภาพหลอน แต่เป็นความจริง โลกของเจ้าพังทลายไปแล้วไม่ว่ายังไงก็ตาม",
						"hindi": "हुहु... यह भ्रम नहीं, बल्कि सच है। वैसे भी, तुम्हारी दुनिया पहले ही बिखर चुकी है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "닥쳐! 나는... 무너지지 않아!",
						"english": "Shut up! I... will not crumble!",
						"japanese": "黙れ！私は...崩壊しない！",
						"chinese": "闭嘴！我...不会崩溃的！",
						"french": "Tais-toi ! Je... ne m'effondrerai pas !",
						"spanish": "¡Cállate! Yo... ¡no me derrumbaré!",
						"vietnamese": "Câm miệng! Ta... sẽ không sụp đổ!",
						"thai": "หุบปาก! ฉัน... จะไม่พังทลาย!",
						"hindi": "चुप रहो! मैं... नहीं बिखरूँगा!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막의 환영은 달콤한 유혹이었다.",
			"하지만 그 안에는 잊고 싶었던 비극이 숨어 있었다.",
			"갈증과 피로가 빚어낸 현실. 혹은 더 잔혹한 진실.",
			"사막은 모든 것을 빼앗아갔다. 심지어 나 자신까지도."
		],
		"english": [
			"The desert's mirage was a sweet temptation.",
			"But within it lay a tragedy I wished to forget.",
			"A reality born of thirst and fatigue. Or a crueler truth.",
			"The desert took everything. Even myself."
		],
		"japanese": [
			"砂漠の幻影は甘い誘惑だった。",
			"しかし、その中には忘れたい悲劇が隠されていた。",
			"渇きと疲労が生み出した現実。あるいは、より残酷な真実。",
			"砂漠はすべてを奪い去った。私自身さえも。"
		],
		"chinese": [
			"沙漠的幻影是甜蜜的诱惑。",
			"但其中隐藏着一段我渴望遗忘的悲剧。",
			"饥渴与疲惫铸就的现实。亦或是更残酷的真相。",
			"沙漠夺走了我的一切。甚至包括我自己。"
		],
		"french": [
			"Le mirage du désert était une douce tentation.",
			"Mais en son sein se cachait une tragédie que je voulais oublier.",
			"Une réalité née de la soif et de la fatigue. Ou une vérité plus cruelle.",
			"Le désert a tout pris. Même moi-même."
		],
		"spanish": [
			"El espejismo del desierto fue una dulce tentación.",
			"Pero dentro de él yacía una tragedia que deseaba olvidar.",
			"Una realidad forjada por la sed y la fatiga. O una verdad más cruel.",
			"El desierto lo arrebató todo. Incluso a mí mismo."
		],
		"vietnamese": [
			"Ảo ảnh sa mạc là một cám dỗ ngọt ngào.",
			"Nhưng ẩn sâu bên trong là một bi kịch tôi muốn quên đi.",
			"Thực tại sinh ra từ khát khao và mệt mỏi. Hay một sự thật tàn khốc hơn.",
			"Sa mạc đã cướp đi mọi thứ. Kể cả chính bản thân tôi."
		],
		"thai": [
			"ภาพลวงตาในทะเลทรายคือการล่อลวงอันหอมหวาน",
			"แต่ภายในนั้นซ่อนโศกนาฏกรรมที่ฉันอยากจะลืมไว้",
			"ความเป็นจริงที่เกิดจากความกระหายและความเหนื่อยล้า หรือความจริงที่โหดร้ายยิ่งกว่า",
			"ทะเลทรายพรากทุกสิ่งไป แม้กระทั่งตัวฉันเอง"
		],
		"hindi": [
			"रेगिस्तान का मृगतृष्णा एक मीठा लालच था।",
			"लेकिन उसके अंदर एक ऐसी त्रासदी छिपी थी जिसे मैं भूलना चाहता था।",
			"प्यास और थकान से जन्मी हकीकत। या एक और क्रूर सच्चाई।",
			"रेगिस्तान ने सब कुछ छीन लिया। यहां तक कि मुझे भी।"
		]
	}
} as const;
