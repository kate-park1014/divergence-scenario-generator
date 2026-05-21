export const scenario_forest_echoes_of_desire_05 = {
	scenario_id: 'forest_echoes_of_desire_05',
	order: 5,
	act: 'climax_finale',
	theme: 'forest',
	actors: {
		bracken: {
			id: 'mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d',
			name: {
				korean: '브라켄',
				english: 'Bracken',
				japanese: 'ブラッケン',
				chinese: '布莱肯',
				french: 'Bracken',
				spanish: 'Bracken',
				vietnamese: 'Bracken',
				thai: 'แบรกเคน',
				hindi: 'ब्रैकेन'
			},
			description: '',
			face_image_url:
				'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public',
			battle_sprite_url:
				'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public'
		}
	},
	boss: {
		pool_id: 'pool_016'
	},
	rooms: [
		{
			dialogue: [
				{
					emotion: 'base',
					type: 'speech',
					content: {
						korean: '숲의 심장부로 향하는 길. 고통의 웅얼거림이 발걸음을 붙잡았다.',
						english: "The path to the forest's heart. A murmur of pain held back my steps.",
						japanese: '森の心臓部へ向かう道。苦痛のうめき声が足取りを止めた。',
						chinese: '通往森林之心的小径。痛苦的低语阻碍了我的脚步。',
						french: 'Le chemin vers le cœur de la forêt. Un murmure de douleur retenait mes pas.',
						spanish:
							'El camino hacia el corazón del bosque. Un murmullo de dolor detuvo mis pasos.',
						vietnamese:
							'Con đường dẫn vào sâu thẳm rừng. Tiếng rên rỉ của đau đớn níu giữ bước chân.',
						thai: 'เส้นทางสู่ใจกลางป่า เสียงคร่ำครวญแห่งความเจ็บปวดหยุดยั้งฝีเท้า',
						hindi: 'जंगल के दिल की ओर जाने वाला रास्ता। दर्द की फुसफुसाहट ने मेरे कदम रोक दिए।'
					},
					speaker: 'narrator'
				},
				{
					action: 'enter',
					speaker: 'bracken',
					spot: [4, 3],
					duration_ms: 500,
					type: 'direction'
				},
				{
					content: {
						korean: '흐윽… 머리가… 깨질 것 같아.',
						english: "Ugh... My head... feels like it's going to split.",
						japanese: 'うぅ… 頭が… 割れそうだ。',
						chinese: '呜……我的头……快要裂开了。',
						french: "Ugh... Ma tête... On dirait qu'elle va éclater.",
						spanish: 'Ugh... Mi cabeza... parece que va a estallar.',
						vietnamese: 'Ư… Đầu tôi… như muốn vỡ tung.',
						thai: 'อึก… หัวฉัน… เหมือนจะแตกเป็นเสี่ยงๆ',
						hindi: 'उफ़... मेरा सिर... मानो फट जाएगा।'
					},
					type: 'speech',
					speaker: 'bracken',
					emotion: 'sad'
				},
				{
					content: {
						korean: '브라켄? 여기까지 어떻게…',
						english: 'Bracken? How did you get here...?',
						japanese: 'ブラッケン？ここまでどうやって…',
						chinese: '布莱肯？你怎么会在这里…',
						french: "Bracken ? Comment es-tu arrivé jusqu'ici...",
						spanish: '¿Bracken? ¿Cómo llegaste hasta aquí...?',
						vietnamese: 'Bracken? Sao cô đến được đây...?',
						thai: 'แบร็กเคน? มาที่นี่ได้ยังไง...',
						hindi: 'ब्रैकन? तुम यहाँ कैसे आ गए...?'
					},
					type: 'speech',
					speaker: 'character_any',
					emotion: 'base'
				},
				{
					type: 'speech',
					content: {
						korean: '숲이… 날 부르고 있어. 돌아와 달라고…',
						english: "The forest... it's calling me. Asking me to return...",
						japanese: '森が…私を呼んでいる。戻ってきてと…',
						chinese: '森林…在呼唤我。让我回去…',
						french: "La forêt... elle m'appelle. Me demandant de revenir...",
						spanish: 'El bosque... me está llamando. Pidiéndome que regrese...',
						vietnamese: 'Rừng... đang gọi tôi. Bảo tôi quay về...',
						thai: 'ป่า...กำลังเรียกฉัน ขอให้ฉันกลับไป...',
						hindi: 'जंगल... मुझे बुला रहा है। वापस आने के लिए कह रहा है...'
					},
					speaker: 'bracken',
					emotion: 'sad'
				},
				{
					speaker: 'character_any',
					type: 'speech',
					content: {
						korean: '하지만 이러다간 더 위험해져.',
						english: "But if I do, it'll only get more dangerous.",
						japanese: 'でも、こうしていると、もっと危険になる。',
						chinese: '但这样下去会更危险。',
						french: 'Mais si je fais ça, ce sera encore plus dangereux.',
						spanish: 'Pero si lo hago, será aún más peligroso.',
						vietnamese: 'Nhưng nếu thế, sẽ nguy hiểm hơn thôi.',
						thai: 'แต่ถ้าเป็นแบบนี้ มันจะอันตรายยิ่งขึ้น',
						hindi: 'पर अगर मैं ऐसा करता हूँ, तो यह और खतरनाक हो जाएगा।'
					},
					emotion: 'base'
				}
			],
			id: 1
		},
		{
			id: 3,
			dialogue: [
				{
					type: 'direction',
					action: 'enter',
					speaker: 'bracken',
					spot: [2, 3],
					duration_ms: 500
				},
				{
					content: {
						korean: '숲에 두고 온… 행복이… 날 갉아먹는 기분이야.',
						english:
							"The happiness I left behind in the forest... it feels like it's gnawing at me.",
						japanese: '森に置いてきた…幸せが…私を蝕むような気分だ。',
						chinese: '留在森林里的…幸福…好像正在吞噬我。',
						french: "Le bonheur que j'ai laissé dans la forêt... j'ai l'impression qu'il me ronge.",
						spanish: 'La felicidad que dejé en el bosque... siento que me está carcomiendo.',
						vietnamese: 'Hạnh phúc tôi bỏ lại trong rừng... cảm giác như đang gặm nhấm tôi.',
						thai: 'ความสุขที่ฉันทิ้งไว้ในป่า... รู้สึกเหมือนมันกำลังกัดกินฉัน',
						hindi: 'जंगल में छोड़ी हुई... खुशी... मुझे अंदर से खाए जा रही है।'
					},
					type: 'speech',
					speaker: 'bracken',
					emotion: 'sad'
				},
				{
					emotion: 'base',
					speaker: 'character_any',
					type: 'speech',
					content: {
						korean: '행복?',
						english: 'Happiness?',
						japanese: '幸せ？',
						chinese: '幸福？',
						french: 'Le bonheur ?',
						spanish: '¿Felicidad?',
						vietnamese: 'Hạnh phúc?',
						thai: 'ความสุข?',
						hindi: 'खुशी?'
					}
				},
				{
					emotion: 'sad',
					speaker: 'bracken',
					content: {
						korean: '응… 숲에 남은 자들이… 너무 행복해 보여서…',
						english: 'Yes... because those who remained in the forest... seem too happy...',
						japanese: 'うん…森に残った者たちが…あまりにも幸せそうに見えるから…',
						chinese: '嗯…因为留在森林里的人…看起来太幸福了…',
						french:
							'Oui... parce que ceux qui sont restés dans la forêt... semblent trop heureux...',
						spanish:
							'Sí... porque los que se quedaron en el bosque... parecen demasiado felices...',
						vietnamese: 'Ừm... vì những người ở lại rừng... trông hạnh phúc quá...',
						thai: 'ใช่... เพราะผู้ที่ยังอยู่ในป่า... ดูมีความสุขมากเกินไป...',
						hindi: 'हाँ... क्योंकि जो लोग जंगल में रह गए हैं... वे बहुत खुश दिखते हैं...'
					},
					type: 'speech'
				},
				{
					content: {
						korean: '병의 근원이 육체가 아닌 영혼에 있음을 직감한다.',
						english:
							'I instinctively feel that the root of the illness lies not in the body, but in the soul.',
						japanese: '病の根源が肉体ではなく魂にあることを直感する。',
						chinese: '直觉告诉我，疾病的根源不在肉体，而在灵魂。',
						french:
							"Je sens intuitivement que la racine de la maladie ne réside pas dans le corps, mais dans l'âme.",
						spanish: 'Intuyo que la raíz de la enfermedad no está en el cuerpo, sino en el alma.',
						vietnamese:
							'Trực giác mách bảo tôi rằng căn nguyên của bệnh không nằm ở thể xác, mà ở linh hồn.',
						thai: 'ฉันรู้สึกได้ทันทีว่าต้นตอของโรคนั้นไม่ได้อยู่ที่ร่างกาย แต่อยู่ที่วิญญาณ',
						hindi: 'मुझे सहज ज्ञान है कि बीमारी की जड़ शरीर में नहीं, बल्कि आत्मा में है।'
					},
					type: 'speech',
					speaker: 'narrator',
					emotion: 'base'
				}
			]
		},
		{
			id: 5,
			dialogue: [
				{
					type: 'direction',
					spot: [4, 3],
					action: 'enter',
					speaker: 'bracken',
					duration_ms: 500
				},
				{
					emotion: 'sad',
					speaker: 'bracken',
					type: 'speech',
					content: {
						korean: '떠나온 자들의 후회가… 숲에 남은 자들의 행복과 부딪혀…',
						english:
							'The regrets of those who left... clash with the happiness of those who remained in the forest...',
						japanese: '去っていった者たちの後悔が…森に残った者たちの幸せとぶつかり…',
						chinese: '离去者的悔恨…与留在森林里的人的幸福发生冲突…',
						french:
							'Les regrets de ceux qui sont partis... se heurtent au bonheur de ceux qui sont restés dans la forêt...',
						spanish:
							'Los remordimientos de los que se fueron... chocan con la felicidad de los que se quedaron en el bosque...',
						vietnamese:
							'Sự hối tiếc của những người đã rời đi... va chạm với hạnh phúc của những người ở lại rừng...',
						thai: 'ความเสียใจของผู้ที่จากไป... ปะทะกับความสุขของผู้ที่ยังอยู่ในป่า...',
						hindi: 'जो चले गए, उनका पछतावा... जंगल में बचे लोगों की खुशी से टकराता है...'
					}
				},
				{
					emotion: 'base',
					speaker: 'character_any',
					content: {
						korean: '그게 병의 원인이라고?',
						english: "That's the cause of the illness?",
						japanese: 'それが病の原因だと？',
						chinese: '那就是疾病的原因？',
						french: "C'est la cause de la maladie ?",
						spanish: '¿Esa es la causa de la enfermedad?',
						vietnamese: 'Đó là nguyên nhân của bệnh sao?',
						thai: 'นั่นคือสาเหตุของโรคหรือ?',
						hindi: 'वही बीमारी की वजह है?'
					},
					type: 'speech'
				},
				{
					emotion: 'base',
					speaker: 'bracken',
					content: {
						korean: '숲은… 우리의 모든 감정을 비추는 거울이 됐어.',
						english: 'The forest... has become a mirror reflecting all our emotions.',
						japanese: '森は…私たちのあらゆる感情を映し出す鏡になった。',
						chinese: '森林…已经成为了映照我们所有情感的镜子。',
						french: 'La forêt... est devenue un miroir qui reflète toutes nos émotions.',
						spanish:
							'El bosque... se ha convertido en un espejo que refleja todas nuestras emociones.',
						vietnamese: 'Rừng... đã trở thành tấm gương phản chiếu mọi cảm xúc của chúng ta.',
						thai: 'ป่า...ได้กลายเป็นกระจกที่สะท้อนทุกความรู้สึกของเรา',
						hindi: 'जंगल... हमारे सभी भावनाओं को दर्शाने वाला एक दर्पण बन गया है।'
					},
					type: 'speech'
				},
				{
					content: {
						korean: '욕망과 질투가 뒤엉킨 늪이라니.',
						english: 'A swamp entwined with desire and jealousy.',
						japanese: '欲望と嫉妬が絡み合う沼なのか。',
						chinese: '欲望与嫉妒交织的沼泽。',
						french: 'Un marais où se mêlent désir et jalousie.',
						spanish: 'Un pantano enredado con deseo y celos.',
						vietnamese: 'Một đầm lầy vướng mắc dục vọng và ghen tuông.',
						thai: 'หนองน้ำที่เต็มไปด้วยความปรารถนาและความริษยา.',
						hindi: 'वासना और ईर्ष्या से लिपटा दलदल।'
					},
					type: 'speech',
					speaker: 'character_1',
					emotion: 'sad'
				}
			]
		},
		{
			id: 9,
			dialogue: [
				{
					type: 'direction',
					duration_ms: 500,
					spot: [2, 3],
					action: 'enter',
					speaker: 'bracken'
				},
				{
					emotion: 'sad',
					speaker: 'bracken',
					type: 'speech',
					content: {
						korean: '숲이… 모든 생명력을 흡수하고 있어. 자신을 지키려고…',
						english: 'The forest… is absorbing all life force. To protect itself…',
						japanese: '森が…全ての生命力を吸い取っている。自分を守るために…',
						chinese: '森林…正在吸取所有生命力。为了保护自己…',
						french: 'La forêt… absorbe toute la force vitale. Pour se protéger…',
						spanish: 'El bosque… está absorbiendo toda la fuerza vital. Para protegerse…',
						vietnamese: 'Rừng… đang hấp thụ mọi sinh lực. Để tự bảo vệ mình…',
						thai: 'ป่า…กำลังดูดซับพลังชีวิตทั้งหมด เพื่อปกป้องตัวเอง…',
						hindi: 'जंगल… सारी जीवन शक्ति सोख रहा है। खुद को बचाने के लिए…'
					}
				},
				{
					emotion: 'angry',
					type: 'speech',
					content: {
						korean: '플로라가 숲을 소멸시키려 한다고?',
						english: 'Flora is trying to destroy the forest?',
						japanese: 'フローラが森を消滅させようとしているのか？',
						chinese: '芙罗拉想毁灭森林？',
						french: 'Flora essaie de détruire la forêt ?',
						spanish: '¿Flora está intentando destruir el bosque?',
						vietnamese: 'Flora đang cố gắng hủy diệt rừng sao?',
						thai: 'ฟลอร่ากำลังพยายามทำลายป่าเหรอ?',
						hindi: 'फ्लोरा जंगल को नष्ट करने की कोशिश कर रही है?'
					},
					speaker: 'character_any'
				},
				{
					emotion: 'sad',
					speaker: 'bracken',
					type: 'speech',
					content: {
						korean: '아니… 이 혼란을 막기 위해… 애쓰고 있는 거야.',
						english: "No… she's trying to stop this chaos.",
						japanese: 'いや…この混乱を止めるために…努力しているんだ。',
						chinese: '不…她正在努力阻止这场混乱。',
						french: "Non… elle s'efforce d'arrêter ce chaos.",
						spanish: 'No… está intentando detener este caos.',
						vietnamese: 'Không… cô ấy đang cố gắng ngăn chặn sự hỗn loạn này.',
						thai: 'ไม่…เธอกำลังพยายามหยุดความวุ่นวายนี้',
						hindi: 'नहीं… वह इस अराजकता को रोकने की कोशिश कर रही है।'
					}
				},
				{
					emotion: 'base',
					content: {
						korean: '숲의 웅얼거림이 더욱 거세졌다. 수많은 목소리가 뒤섞인 영적 잡음이다.',
						english:
							"The forest's murmurs grew fiercer. It's spiritual noise, a cacophony of countless voices.",
						japanese: '森のざわめきがさらに激しくなった。無数の声が混じり合う霊的なノイズだ。',
						chinese: '森林的低语更加猛烈。那是无数声音混杂的灵性噪音。',
						french:
							"Les murmures de la forêt devinrent plus féroces. C'est un bruit spirituel, une cacophonie de voix innombrables.",
						spanish:
							'Los murmullos del bosque se hicieron más feroces. Es ruido espiritual, una cacofonía de innumerables voces.',
						vietnamese:
							'Tiếng thì thầm của rừng trở nên dữ dội hơn. Đó là tạp âm tâm linh, một sự hỗn loạn của vô số giọng nói.',
						thai: 'เสียงกระซิบของป่ารุนแรงขึ้น มันคือเสียงรบกวนทางจิตวิญญาณ เสียงโกลาหลของเสียงนับไม่ถ้วน',
						hindi:
							'जंगल की फुसफुसाहट और तेज हो गई। यह आध्यात्मिक शोर है, अनगिनत आवाजों का एक कोलाहल।'
					},
					type: 'speech',
					speaker: 'narrator'
				},
				{
					type: 'speech',
					content: {
						korean: '막아야 해. 이대로는 모두 파멸할 거야.',
						english: 'We must stop it. If this continues, all will be destroyed.',
						japanese: '止めなければ。このままでは全てが破滅するだろう。',
						chinese: '必须阻止它。这样下去，一切都会毁灭的。',
						french: "Nous devons l'arrêter. Si cela continue, tout sera détruit.",
						spanish: 'Debemos detenerlo. Si esto continúa, todo será destruido.',
						vietnamese: 'Chúng ta phải ngăn chặn nó. Cứ thế này, tất cả sẽ bị hủy diệt.',
						thai: 'เราต้องหยุดมัน ถ้าปล่อยไว้แบบนี้ ทุกอย่างจะถูกทำลาย',
						hindi: 'हमें इसे रोकना होगा। अगर ऐसा ही चलता रहा, तो सब कुछ तबाह हो जाएगा।'
					},
					speaker: 'character_any',
					emotion: 'angry'
				}
			]
		},
		{
			id: 15,
			lose_dialogue: [
				{
					emotion: 'base',
					speaker: 'narrator',
					content: {
						korean: '숲의 뒤틀린 에너지가 모든 것을 집어삼켰다.',
						english: "The forest's twisted energy devoured everything.",
						japanese: '森の歪んだエネルギーが全てを飲み込んだ。',
						chinese: '森林扭曲的能量吞噬了一切。',
						french: "L'énergie tordue de la forêt a tout dévoré.",
						spanish: 'La energía retorcida del bosque lo devoró todo.',
						vietnamese: 'Năng lượng méo mó của khu rừng đã nuốt chửng mọi thứ.',
						thai: 'พลังงานบิดเบี้ยวของป่ากลืนกินทุกสิ่ง',
						hindi: 'जंगल की मुड़ी हुई ऊर्जा ने सब कुछ निगल लिया।'
					},
					type: 'speech'
				},
				{
					type: 'speech',
					content: {
						korean: '하찮은 자들… 너희의 욕망은 결코 사라지지 않을 것이다.',
						english: 'Worthless beings... your desires will never disappear.',
						japanese: '卑しい者どもめ…お前たちの欲望は決して消えることはないだろう。',
						chinese: '卑微的生灵…你们的欲望永不会消失。',
						french: 'Êtres insignifiants... vos désirs ne disparaîtront jamais.',
						spanish: 'Seres insignificantes... vuestros deseos nunca desaparecerán.',
						vietnamese: 'Những kẻ hèn mọn... dục vọng của các ngươi sẽ không bao giờ biến mất.',
						thai: 'พวกอ่อนแอ... ความปรารถนาของเจ้าจะไม่มีวันหายไป',
						hindi: 'तुच्छ प्राणी... तुम्हारी इच्छाएँ कभी खत्म नहीं होंगी।'
					},
					speaker: 'random_boss',
					emotion: 'base'
				},
				{
					emotion: 'angry',
					speaker: 'character_any',
					type: 'speech',
					content: {
						korean: '…이대로 포기할 순 없어. 다시 일어설 거야.',
						english: "...I can't give up like this. I'll rise again.",
						japanese: '…このまま諦めるわけにはいかない。もう一度立ち上がる。',
						chinese: '…不能就这样放弃。我会再次站起来。',
						french: '...Je ne peux pas abandonner comme ça. Je me relèverai.',
						spanish: '...No puedo rendirme así. Me levantaré de nuevo.',
						vietnamese: '...Tôi không thể bỏ cuộc như thế này. Tôi sẽ đứng dậy lần nữa.',
						thai: '...ฉันยอมแพ้แบบนี้ไม่ได้ ฉันจะลุกขึ้นอีกครั้ง',
						hindi: '...मैं ऐसे हार नहीं मान सकता। मैं फिर से खड़ा होऊंगा।'
					}
				}
			],
			win_dialogue: [
				{
					content: {
						korean: '…결국 막아내는구나. 하지만… 이것은 끝이 아니야.',
						english: "...You managed to stop it. But... this isn't the end.",
						japanese: '…結局、食い止めるのか。だが…これは終わりではない。',
						chinese: '…最终还是阻止了。但是…这并非结束。',
						french: "...Tu as réussi à l'arrêter. Mais... ce n'est pas la fin.",
						spanish: '...Al final lo detuviste. Pero... esto no es el final.',
						vietnamese:
							'...Cuối cùng thì ngươi cũng đã ngăn cản được. Nhưng... đây không phải là kết thúc.',
						thai: '...ในที่สุดเจ้าก็หยุดมันได้ แต่... นี่ไม่ใช่จุดจบ',
						hindi: '...आखिर तुमने इसे रोक लिया। लेकिन... यह अंत नहीं है।'
					},
					type: 'speech',
					speaker: 'random_boss',
					emotion: 'sad'
				},
				{
					emotion: 'base',
					speaker: 'random_boss',
					type: 'speech',
					content: {
						korean: '숲은… 아직 너희의 선택을 기다리고 있어.',
						english: 'The forest... still awaits your choice.',
						japanese: '森は…まだお前たちの選択を待っている。',
						chinese: '森林…仍在等待你们的选择。',
						french: 'La forêt... attend toujours votre choix.',
						spanish: 'El bosque... aún espera vuestra elección.',
						vietnamese: 'Rừng... vẫn đang chờ đợi lựa chọn của các ngươi.',
						thai: 'ป่า... ยังคงรอคอยการตัดสินใจของพวกเจ้า',
						hindi: 'जंगल... अब भी तुम्हारे चुनाव की प्रतीक्षा कर रहा है।'
					}
				},
				{
					type: 'direction',
					spot: [3, 2],
					action: 'enter',
					speaker: 'bracken',
					duration_ms: 500
				},
				{
					type: 'speech',
					content: {
						korean: '저 존재는… 사라지지 않아. 우리의 마음속에 늘 있을 거야.',
						english: 'That being... will not disappear. It will always be in our hearts.',
						japanese: 'あの存在は…消えない。私たちの心の中にいつもあるだろう。',
						chinese: '那个存在…不会消失。它将永远活在我们心中。',
						french: 'Cette entité... ne disparaîtra pas. Elle sera toujours dans nos cœurs.',
						spanish: 'Esa criatura... no desaparecerá. Siempre estará en nuestros corazones.',
						vietnamese: 'Sinh vật đó... sẽ không biến mất. Nó sẽ luôn ở trong trái tim chúng ta.',
						thai: 'สิ่งนั้น... จะไม่หายไป มันจะอยู่ในใจเราเสมอ',
						hindi: 'वह सत्ता... गायब नहीं होगी। वह हमेशा हमारे दिलों में रहेगी।'
					},
					speaker: 'bracken',
					emotion: 'sad'
				},
				{
					speaker: 'character_any',
					type: 'speech',
					content: {
						korean: '공존… 새로운 길을 찾아야 해.',
						english: 'Coexistence... We must find a new path.',
						japanese: '共存…新しい道を見つけなければならない。',
						chinese: '共存…必须寻找新的道路。',
						french: 'Coexistence... Nous devons trouver une nouvelle voie.',
						spanish: 'Coexistencia... Debemos encontrar un nuevo camino.',
						vietnamese: 'Đồng tồn tại... Chúng ta phải tìm một con đường mới.',
						thai: 'การอยู่ร่วมกัน... เราต้องหาทางใหม่',
						hindi: 'सह-अस्तित्व... हमें एक नया रास्ता खोजना होगा।'
					},
					emotion: 'base'
				},
				{
					emotion: 'base',
					type: 'speech',
					content: {
						korean: '숲은 잠시 침묵했다. 이제 숲의 미래는 그들의 손에 달려 있다.',
						english: 'The forest fell silent for a moment. Now, its future rests in their hands.',
						japanese: '森はしばし沈黙した。今、森の未来は彼らの手に委ねられている。',
						chinese: '森林短暂地沉默了。现在，森林的未来掌握在他们手中。',
						french:
							'La forêt resta silencieuse un instant. Maintenant, son avenir repose entre leurs mains.',
						spanish:
							'El bosque permaneció en silencio por un momento. Ahora, el futuro del bosque está en sus manos.',
						vietnamese:
							'Khu rừng im lặng một lát. Giờ đây, tương lai của khu rừng nằm trong tay họ.',
						thai: 'ป่าเงียบงันชั่วขณะ ตอนนี้อนาคตของป่าอยู่ในมือพวกเขาแล้ว',
						hindi: 'जंगल कुछ देर के लिए शांत हो गया। अब जंगल का भविष्य उनके हाथों में है।'
					},
					speaker: 'narrator'
				}
			],
			dialogue: [
				{
					emotion: 'base',
					type: 'speech',
					content: {
						korean: '숲의 가장 깊은 곳. 거대한 그림자가 나타났다.',
						english: 'The deepest part of the forest. A colossal shadow appeared.',
						japanese: '森の最も深い場所。巨大な影が現れた。',
						chinese: '森林最深处。一个巨大的影子出现了。',
						french: 'La partie la plus profonde de la forêt. Une ombre colossale apparut.',
						spanish: 'La parte más profunda del bosque. Una sombra colosal apareció.',
						vietnamese: 'Phần sâu nhất của khu rừng. Một bóng tối khổng lồ xuất hiện.',
						thai: 'ส่วนที่ลึกที่สุดของป่า เงาขนาดมหึมาปรากฏขึ้น',
						hindi: 'जंगल का सबसे गहरा हिस्सा। एक विशाल छाया प्रकट हुई।'
					},
					speaker: 'narrator'
				},
				{
					emotion: 'base',
					speaker: 'random_boss',
					type: 'speech',
					content: {
						korean: '…왔구나. 너희의 욕망이 여기까지 이끌었을 터.',
						english: "...You've arrived. Your desires must have led you here.",
						japanese: '…来たな。お前たちの欲望がここまで導いたのだろう。',
						chinese: '…你们来了。是你们的欲望把你们引到这里来的吧。',
						french: '...Vous êtes arrivés. Vos désirs vous ont sûrement menés ici.',
						spanish: '...Habéis llegado. Vuestros deseos os deben haber traído hasta aquí.',
						vietnamese: '…Các ngươi đã đến. Ham muốn của các ngươi hẳn đã dẫn lối đến đây.',
						thai: '...มาถึงแล้ว ความปรารถนาของพวกเจ้าคงนำมาที่นี่',
						hindi: '...तुम आ गए। तुम्हारी इच्छाएं तुम्हें यहां तक ले आई होंगी।'
					}
				},
				{
					emotion: 'angry',
					content: {
						korean: '네가 이 모든 혼란의 원인이냐?',
						english: 'Are you the cause of all this chaos?',
						japanese: 'お前がこの全ての混乱の原因なのか？',
						chinese: '你就是所有这些混乱的根源吗？',
						french: 'Es-tu la cause de tout ce chaos ?',
						spanish: '¿Eres la causa de todo este caos?',
						vietnamese: 'Ngươi là nguyên nhân của tất cả sự hỗn loạn này sao?',
						thai: 'เจ้าเป็นสาเหตุของความวุ่นวายทั้งหมดนี้เหรอ?',
						hindi: 'क्या तुम इस सारी अराजकता का कारण हो?'
					},
					type: 'speech',
					speaker: 'character_any'
				},
				{
					speaker: 'random_boss',
					type: 'speech',
					content: {
						korean: '나는 그저… 너희의 거울일 뿐. 버려진 것들의 질투, 남겨진 것들의 행복…',
						english:
							'I am merely… your mirror. The jealousy of the abandoned, the happiness of those left behind…',
						japanese:
							'私はただ…お前たちの鏡にすぎない。捨てられた者たちの嫉妬、残された者たちの幸福…',
						chinese: '我只是…你们的镜子。被遗弃者的嫉妒，被留下者的幸福…',
						french:
							'Je ne suis que… votre miroir. La jalousie des abandonnés, le bonheur de ceux qui sont restés…',
						spanish:
							'Soy simplemente… vuestro espejo. Los celos de los abandonados, la felicidad de los que quedan…',
						vietnamese:
							'Ta chỉ là… tấm gương của các ngươi. Nỗi ghen tị của những kẻ bị bỏ rơi, niềm hạnh phúc của những kẻ còn lại…',
						thai: 'ฉันเป็นเพียง…กระจกสะท้อนของพวกเจ้า ความอิจฉาของผู้ถูกทอดทิ้ง ความสุขของผู้ที่เหลืออยู่…',
						hindi: 'मैं बस… तुम्हारा दर्पण हूँ। छोड़े गए लोगों की ईर्ष्या, पीछे छूटे लोगों का सुख…'
					},
					emotion: 'base'
				},
				{
					emotion: 'base',
					speaker: 'random_boss',
					content: {
						korean: '그 모든 것이 뒤엉켜 태어난 존재.',
						english: 'A being born from all that entanglement.',
						japanese: 'あらゆるものが絡み合い生まれた存在。',
						chinese: '各种纠葛交织而成的存在。',
						french: 'Un être né de cet enchevêtrement.',
						spanish: 'Un ser nacido de todo ese enredo.',
						vietnamese: 'Một sinh vật được sinh ra từ mớ hỗn độn đó.',
						thai: 'สิ่งมีชีวิตที่ถือกำเนิดจากความยุ่งเหยิงทั้งหมดนั้น',
						hindi: 'वह सब कुछ उलझाकर जन्मी एक सत्ता।'
					},
					type: 'speech'
				},
				{
					speaker: 'character_any',
					content: {
						korean: '숲을 파괴하는 건 너야!',
						english: 'You are destroying the forest!',
						japanese: '森を破壊しているのはお前だ！',
						chinese: '破坏森林的是你！',
						french: "C'est toi qui détruis la forêt !",
						spanish: '¡Tú eres quien está destruyendo el bosque!',
						vietnamese: 'Ngươi đang phá hủy khu rừng!',
						thai: 'เจ้ากำลังทำลายป่า!',
						hindi: 'जंगल को नष्ट करने वाले तुम हो!'
					},
					type: 'speech',
					emotion: 'angry'
				}
			]
		}
	],
	prologue: {
		korean: [
			'숲은 고요했다. 모든 것이 잠든 것처럼.',
			'하지만 그 침묵 아래, 수많은 영혼이 울부짖고 있었다.',
			'오랜 갈등이 빚어낸 병. 그 모든 것이 숲의 거울에 비쳐 있었다.',
			'이제 선택의 시간. 숲은 소멸할 것인가, 공존할 것인가.'
		],
		english: [
			'The forest was silent. As if everything was asleep.',
			'But beneath that silence, countless souls were wailing.',
			"A sickness born of ancient conflict. All of it reflected in the forest's mirror.",
			'Now, the time for choice. Will the forest perish, or coexist?'
		],
		japanese: [
			'森は静かだった。全てが眠っているかのように。',
			'しかし、その静寂の下、無数の魂が泣き叫んでいた。',
			'長きにわたる対立が生んだ病。その全てが森の鏡に映し出されていた。',
			'今、選択の時。森は消滅するのか、共存するのか。'
		],
		chinese: [
			'森林一片寂静。仿佛万物都已沉睡。',
			'然而，在这寂静之下，无数灵魂正在哀嚎。',
			'积年冲突滋生的疾病。这一切都映照在森林之镜中。',
			'如今，是选择之时。森林将消亡，抑或共存？'
		],
		french: [
			'La forêt était silencieuse. Comme si tout dormait.',
			"Mais sous ce silence, d'innombrables âmes hurlaient.",
			"Une maladie née d'un ancien conflit. Tout cela se reflétait dans le miroir de la forêt.",
			'Le temps du choix est venu. La forêt périra-t-elle, ou coexistera-t-elle ?'
		],
		spanish: [
			'El bosque estaba en silencio. Como si todo durmiera.',
			'Pero bajo ese silencio, innumerables almas gemían.',
			'Una enfermedad nacida de un antiguo conflicto. Todo ello reflejado en el espejo del bosque.',
			'Ahora, el momento de elegir. ¿Perecerá el bosque, o coexistirá?'
		],
		vietnamese: [
			'Rừng thật tĩnh lặng. Như thể vạn vật đang say ngủ.',
			'Nhưng dưới sự tĩnh lặng ấy, vô số linh hồn đang gào thét.',
			'Một căn bệnh sinh ra từ cuộc xung đột lâu dài. Tất cả đều phản chiếu trong tấm gương của rừng.',
			'Giờ là lúc lựa chọn. Rừng sẽ lụi tàn, hay cùng tồn tại?'
		],
		thai: [
			'ป่าเงียบสงบ ราวกับทุกสิ่งหลับใหล',
			'แต่ภายใต้ความเงียบนั้น มีดวงวิญญาณนับไม่ถ้วนกำลังร่ำไห้',
			'โรคภัยที่เกิดจากความขัดแย้งอันยาวนาน ทั้งหมดสะท้อนอยู่ในกระจกของป่า',
			'ถึงเวลาแห่งการเลือก ป่าจะดับสูญ หรือจะอยู่ร่วมกัน?'
		],
		hindi: [
			'जंगल शांत था। मानो सब सो गए हों।',
			'लेकिन उस चुप्पी के नीचे, अनगिनत आत्माएं रो रही थीं।',
			'लंबे संघर्ष से जन्मी बीमारी। यह सब जंगल के दर्पण में परिलक्षित हो रहा था।',
			'अब, चुनाव का समय है। क्या जंगल नष्ट हो जाएगा, या सह-अस्तित्व में रहेगा?'
		]
	},
	epilogue: {
		korean: [
			'숲의 혼란은 가라앉았다. 하지만 상처는 깊이 남았다.',
			'돌아온 자들과 남은 자들. 그들의 선택은 영원히 숲에 새겨질 것이다.',
			'숲은 더 이상 모든 것을 비추는 거울이 아니었다.',
			'다만, 새로운 시작을 기다리는 텅 빈 공간일 뿐. 그들의 이야기는 이제 막 시작되었다.'
		],
		english: [
			"The forest's turmoil subsided. But the wounds remained deep.",
			'Those who returned and those who remained. Their choices would forever be etched into the forest.',
			'The forest was no longer a mirror reflecting everything.',
			'Only an empty space awaiting a new beginning. Their story had just begun.'
		],
		japanese: [
			'森の混乱は収まった。しかし、傷は深く残った。',
			'戻りし者たちと残りし者たち。彼らの選択は永遠に森に刻まれるだろう。',
			'森はもはや全てを映す鏡ではなかった。',
			'ただ、新たな始まりを待つ空虚な空間にすぎない。彼らの物語は今、始まったばかりだ。'
		],
		chinese: [
			'森林的混乱平息了。但伤痕却深深地留下。',
			'归来者与留下者。他们的选择将永远铭刻在森林中。',
			'森林不再是映照一切的镜子。',
			'仅仅是一个等待新开始的空旷之地。他们的故事才刚刚开始。'
		],
		french: [
			"Le tumulte de la forêt s'est apaisé. Mais les blessures sont restées profondes.",
			'Ceux qui sont revenus et ceux qui sont restés. Leurs choix seraient à jamais gravés dans la forêt.',
			"La forêt n'était plus un miroir reflétant tout.",
			'Seulement un espace vide attendant un nouveau commencement. Leur histoire venait tout juste de commencer.'
		],
		spanish: [
			'La agitación del bosque amainó. Pero las heridas permanecieron profundas.',
			'Los que regresaron y los que se quedaron. Sus elecciones quedarían grabadas para siempre en el bosque.',
			'El bosque ya no era un espejo que lo reflejaba todo.',
			'Solo un espacio vacío esperando un nuevo comienzo. Su historia acababa de empezar.'
		],
		vietnamese: [
			'Sự hỗn loạn của rừng đã lắng xuống. Nhưng vết thương vẫn còn hằn sâu.',
			'Những người trở về và những người ở lại. Lựa chọn của họ sẽ mãi mãi khắc sâu vào rừng.',
			'Rừng không còn là tấm gương phản chiếu mọi thứ nữa.',
			'Chỉ là một không gian trống rỗng chờ đợi một khởi đầu mới. Câu chuyện của họ chỉ mới bắt đầu.'
		],
		thai: [
			'ความวุ่นวายของป่าสงบลงแล้ว แต่บาดแผลยังคงอยู่ลึก',
			'ผู้ที่กลับมาและผู้ที่อยู่ การเลือกของพวกเขาจะถูกจารึกไว้ในป่าตลอดไป',
			'ป่าไม่ใช่กระจกที่สะท้อนทุกสิ่งอีกต่อไปแล้ว',
			'เป็นเพียงพื้นที่ว่างเปล่าที่รอคอยการเริ่มต้นใหม่ เรื่องราวของพวกเขาเพิ่งเริ่มต้นขึ้น'
		],
		hindi: [
			'जंगल का कोहराम शांत हो गया। लेकिन घाव गहरे रह गए।',
			'जो लौट आए और जो रह गए। उनकी पसंद हमेशा के लिए जंगल में अंकित हो जाएगी।',
			'जंगल अब हर चीज़ को दर्शाने वाला दर्पण नहीं था।',
			'केवल एक खाली जगह एक नई शुरुआत का इंतजार कर रही थी। उनकी कहानी अभी शुरू हुई थी।'
		]
	}
} as const;
