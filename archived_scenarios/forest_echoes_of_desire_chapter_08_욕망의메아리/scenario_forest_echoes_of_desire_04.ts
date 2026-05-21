export const scenario_forest_echoes_of_desire_04 = {
	scenario_id: 'forest_echoes_of_desire_04',
	order: 4,
	act: 'rising',
	theme: 'forest',
	actors: {
		ela: {
			id: 'mon_24765cb2-6fc0-452e-8969-871a82349c70',
			name: {
				korean: '엘라',
				english: 'Ela',
				japanese: 'エラ',
				chinese: '艾拉',
				french: 'Ela',
				spanish: 'Ela',
				vietnamese: 'Ela',
				thai: 'เอล่า',
				hindi: 'एला'
			},
			description: '',
			face_image_url:
				'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public',
			battle_sprite_url:
				'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public'
		}
	},
	boss: {
		pool_id: 'random_boss'
	},
	rooms: [
		{
			id: 1,
			dialogue: [
				{
					emotion: 'base',
					speaker: 'narrator',
					content: {
						korean: '숲의 깊은 곳. 이상하게 평온하지만, 무언가 잘못되어 있었다.',
						english: 'Deep within the forest. Strangely calm, yet something was wrong.',
						japanese: '森の奥深く。奇妙なほど穏やかだが、何かがおかしかった。',
						chinese: '森林深处。异常平静，但有什么不对劲。',
						french:
							"Au plus profond de la forêt. Étrangement calme, et pourtant quelque chose n'allait pas.",
						spanish: 'En lo profundo del bosque. Extrañamente tranquilo, pero algo andaba mal.',
						vietnamese: 'Sâu trong rừng. Yên bình một cách lạ lùng, nhưng có điều gì đó không ổn.',
						thai: 'ลึกเข้าไปในป่า สงบเงียบอย่างประหลาด แต่มีบางอย่างผิดปกติ',
						hindi: 'जंगल की गहराइयों में। अजीब तरह से शांत, फिर भी कुछ गलत था।'
					},
					type: 'speech'
				},
				{
					emotion: 'base',
					speaker: 'character_any',
					content: {
						korean: '이 평온함이 더 불안하게 느껴져.',
						english: 'This calmness feels even more unsettling.',
						japanese: 'この静けさが、かえって不安を感じさせる。',
						chinese: '这种平静反而让我更不安。',
						french: 'Ce calme me semble encore plus inquiétant.',
						spanish: 'Esta calma se siente aún más inquietante.',
						vietnamese: 'Sự yên bình này càng khiến tôi bất an hơn.',
						thai: 'ความสงบนี้ทำให้รู้สึกไม่สบายใจมากขึ้น',
						hindi: 'यह शांति और भी विचलित करने वाली लगती है।'
					},
					type: 'speech'
				},
				{
					type: 'direction',
					spot: [3, 2],
					action: 'enter',
					duration_ms: 500,
					speaker: 'ela'
				},
				{
					content: {
						korean: '이 숲은 슬픈 게 아니야.',
						english: "This forest isn't sad.",
						japanese: 'この森は悲しんでいない。',
						chinese: '这片森林不悲伤。',
						french: "Cette forêt n'est pas triste.",
						spanish: 'Este bosque no está triste.',
						vietnamese: 'Rừng này không buồn đâu.',
						thai: 'ป่านี้ไม่เศร้า',
						hindi: 'यह जंगल दुखी नहीं है।'
					},
					type: 'speech',
					emotion: 'base',
					speaker: 'ela'
				},
				{
					type: 'speech',
					content: {
						korean: '그럼 뭔데?',
						english: 'Then what is it?',
						japanese: 'じゃあ、何なの？',
						chinese: '那是什么？',
						french: 'Alors quoi ?',
						spanish: '¿Entonces qué?',
						vietnamese: 'Vậy thì là gì?',
						thai: 'แล้วมันคืออะไรล่ะ?',
						hindi: 'तो क्या है?'
					},
					speaker: 'character_any',
					emotion: 'base'
				},
				{
					type: 'speech',
					content: {
						korean: '행복하고 싶어서 아픈 거야.',
						english: "It's sick because it wants to be happy.",
						japanese: '幸せになりたいから病んでいるんだ。',
						chinese: '它生病是因为它想幸福。',
						french: "Il est malade parce qu'il veut être heureux.",
						spanish: 'Está enfermo porque quiere ser feliz.',
						vietnamese: 'Nó bệnh vì nó muốn hạnh phúc.',
						thai: 'มันป่วยเพราะมันอยากมีความสุข',
						hindi: 'यह बीमार है क्योंकि यह खुश होना चाहता है।'
					},
					speaker: 'ela',
					emotion: 'sad'
				}
			]
		},
		{
			id: 3,
			dialogue: [
				{
					duration_ms: 500,
					speaker: 'ela',
					type: 'direction',
					spot: [2, 3],
					action: 'enter'
				},
				{
					content: {
						korean: '돌아온 사람들이 숲을 그리워하는 거 아니야.',
						english: "It's not that the returning people miss the forest.",
						japanese: '戻ってきた人々が森を懐かしんでいるわけじゃない。',
						chinese: '不是归来的人们思念森林。',
						french: "Ce n'est pas que les gens de retour regrettent la forêt.",
						spanish: 'No es que la gente que regresó extrañe el bosque.',
						vietnamese: 'Không phải những người trở về đang nhớ rừng.',
						thai: 'ไม่ใช่ว่าคนที่กลับมาคิดถึงป่า',
						hindi: 'ऐसा नहीं है कि लौटे हुए लोग जंगल को याद कर रहे हैं।'
					},
					type: 'speech',
					emotion: 'base',
					speaker: 'ela'
				},
				{
					content: {
						korean: '그럼 뭘 그리워하는데?',
						english: 'Then what do they miss?',
						japanese: 'じゃあ、何を懐かしんでいるの？',
						chinese: '那他们思念什么？',
						french: 'Alors, que regrettent-ils ?',
						spanish: '¿Entonces qué extrañan?',
						vietnamese: 'Vậy thì họ nhớ gì?',
						thai: 'แล้วพวกเขาคิดถึงอะไรล่ะ?',
						hindi: 'तो वे क्या याद कर रहे हैं?'
					},
					type: 'speech',
					emotion: 'base',
					speaker: 'character_any'
				},
				{
					content: {
						korean: '숲에 남은 사람들이 행복해 보이니까. 그게 부러운 거야.',
						english: 'They look happy, the ones who stayed. I envy that.',
						japanese: '森に残った者たちが幸せそうに見えるから。それが羨ましいんだ。',
						chinese: '留在森林里的人们看起来很幸福。我嫉妒那个。',
						french: 'Ceux qui sont restés dans la forêt semblent heureux. Je les envie.',
						spanish: 'Los que se quedaron en el bosque parecen felices. Eso me da envidia.',
						vietnamese: 'Những người ở lại rừng trông hạnh phúc. Tôi ghen tị lắm.',
						thai: 'ก็เพราะคนที่อยู่ในป่าดูมีความสุขน่ะสิ ฉันอิจฉาพวกเขา',
						hindi: 'क्योंकि जंगल में जो लोग बचे हैं, वे खुश दिखते हैं। मुझे यही जलन है。'
					},
					type: 'speech',
					emotion: 'sad',
					speaker: 'ela'
				},
				{
					speaker: 'character_any',
					emotion: 'base',
					type: 'speech',
					content: {
						korean: '질투라고?',
						english: 'Jealousy?',
						japanese: '嫉妬だって？',
						chinese: '嫉妒？',
						french: 'De la jalousie ?',
						spanish: '¿Celos?',
						vietnamese: 'Ghen tị ư?',
						thai: 'อิจฉาเหรอ?',
						hindi: 'ईर्ष्या?'
					}
				},
				{
					emotion: 'sad',
					speaker: 'ela',
					content: {
						korean: '응. 슬픔이랑 질투가 섞여서, 숲이 점점 더 아파.',
						english: 'Yes. Sadness and envy mix, and the forest slowly withers.',
						japanese: 'うん。悲しみと嫉妬が混ざり合って、森はどんどん病んでいく。',
						chinese: '嗯。悲伤和嫉妒交织，森林也变得越来越痛苦。',
						french: "Oui. La tristesse et l'envie se mêlent, et la forêt dépérit peu à peu.",
						spanish: 'Sí. La tristeza y los celos se mezclan, y el bosque enferma poco a poco.',
						vietnamese: 'Ừ. Nỗi buồn và sự ghen tị lẫn vào nhau, khiến khu rừng ngày càng héo mòn.',
						thai: 'ใช่ ความเศร้าและความอิจฉาปะปนกัน ทำให้ป่ายิ่งเจ็บปวดขึ้นเรื่อยๆ',
						hindi: 'हाँ। दुख और ईर्ष्या मिलकर, जंगल को धीरे-धीरे और बीमार कर रहे हैं।'
					},
					type: 'speech'
				}
			]
		},
		{
			id: 5,
			dialogue: [
				{
					type: 'direction',
					action: 'enter',
					spot: [4, 3],
					duration_ms: 500,
					speaker: 'ela'
				},
				{
					content: {
						korean: '오래된 나무의 뿌리가 마치 서로에게 속삭이듯 미세하게 움직였다.',
						english: 'The roots of old trees moved subtly as if whispering to each other.',
						japanese: '古木の根が、まるで互いにささやき合うように微かに動いた。',
						chinese: '古树的根仿佛在互相低语，细微地蠕动着。',
						french:
							'Les racines des vieux arbres bougeaient subtilement, comme si elles se chuchotaient des secrets.',
						spanish:
							'Las raíces de los árboles viejos se movían sutilmente como si se susurraran entre sí.',
						vietnamese: 'Rễ cây cổ thụ khẽ động đậy, như thể đang thì thầm với nhau.',
						thai: 'รากของต้นไม้เก่าแก่ขยับไหวเล็กน้อยราวกับกำลังกระซิบกระซาบกัน',
						hindi:
							'पुराने पेड़ों की जड़ें धीरे से हिलने लगीं, मानो एक-दूसरे से कानाफूसी कर रही हों।'
					},
					type: 'speech',
					emotion: 'base',
					speaker: 'narrator'
				},
				{
					type: 'speech',
					content: {
						korean: '봐. 나무들이 서로의 행복을 탐내고 있어.',
						english: "See? The trees are coveting each other's happiness.",
						japanese: '見て。木々が互いの幸せを羨んでいる。',
						chinese: '看。树木们都在觊觎彼此的幸福。',
						french: 'Regarde. Les arbres convoitent le bonheur des autres.',
						spanish: 'Mira. Los árboles están codiciando la felicidad de los demás.',
						vietnamese: 'Nhìn kìa. Những cái cây đang thèm muốn hạnh phúc của nhau.',
						thai: 'ดูสิ ต้นไม้กำลังริษยาความสุขของกันและกัน',
						hindi: 'देखो। पेड़ एक-दूसरे की खुशियों को ललचा रहे हैं।'
					},
					speaker: 'ela',
					emotion: 'sad'
				},
				{
					content: {
						korean: '숲이 욕망의 늪이 됐다는 말이야?',
						english: 'So the forest has become a swamp of desire?',
						japanese: '森が欲望の沼になったってこと？',
						chinese: '你是说，森林变成了欲望的沼泽？',
						french: 'Tu veux dire que la forêt est devenue un marécage de désirs ?',
						spanish: '¿Quieres decir que el bosque se ha convertido en un pantano de deseos?',
						vietnamese: 'Ý ngươi là rừng đã trở thành đầm lầy của dục vọng?',
						thai: 'หมายความว่าป่ากลายเป็นบึงแห่งความปรารถนาเหรอ?',
						hindi: 'क्या तुम कह रहे हो कि जंगल इच्छाओं का दलदल बन गया है?'
					},
					type: 'speech',
					emotion: 'base',
					speaker: 'character_any'
				},
				{
					content: {
						korean: '늪은 원래 예뻐. 근데 빠지면 못 나와.',
						english: "Swamps are beautiful. But once you fall in, you can't escape.",
						japanese: '沼は元々美しい。でも一度落ちたら、もう出られない。',
						chinese: '沼泽原本很美。但一旦陷进去，就出不来了。',
						french: 'Les marais sont beaux. Mais une fois dedans, on ne peut plus en sortir.',
						spanish: 'Los pantanos son hermosos. Pero si caes en ellos, no puedes salir.',
						vietnamese: 'Đầm lầy vốn đẹp. Nhưng một khi đã sa vào thì không thoát ra được.',
						thai: 'บึงน่ะสวยงามนะ แต่ถ้าตกลงไปแล้วก็ขึ้นมาไม่ได้',
						hindi: 'दलदल तो खूबसूरत होते हैं। लेकिन एक बार उसमें गिर जाओ, तो निकल नहीं सकते।'
					},
					type: 'speech',
					emotion: 'sad',
					speaker: 'ela'
				},
				{
					content: {
						korean: '너무 늦은 건가…',
						english: 'Is it too late...?',
						japanese: 'もう遅すぎるのか…',
						chinese: '是不是太迟了……',
						french: 'Est-ce trop tard… ?',
						spanish: '¿Es demasiado tarde…?',
						vietnamese: 'Đã quá muộn rồi sao…?',
						thai: 'สายเกินไปแล้วงั้นเหรอ...',
						hindi: 'क्या बहुत देर हो चुकी है...?'
					},
					type: 'speech',
					emotion: 'sad',
					speaker: 'character_any'
				}
			]
		},
		{
			id: 9,
			dialogue: [
				{
					duration_ms: 500,
					speaker: 'ela',
					type: 'direction',
					action: 'enter',
					spot: [3, 2]
				},
				{
					content: {
						korean: '숲은 거울이야. 우리가 바라는 걸 그대로 보여줘.',
						english: 'The forest is a mirror. It reflects our desires.',
						japanese: '森は鏡だよ。私たちが願うものをそのまま映し出す。',
						chinese: '森林是一面镜子。它如实地反映出我们所渴望的。',
						french: 'La forêt est un miroir. Elle nous révèle nos désirs.',
						spanish: 'El bosque es un espejo. Nos muestra lo que deseamos.',
						vietnamese: 'Rừng là một tấm gương. Nó phản chiếu đúng những gì ta mong muốn.',
						thai: 'ป่าคือกระจก มันแสดงให้เราเห็นสิ่งที่เราปรารถนา',
						hindi: 'जंगल एक आईना है। यह हमें वही दिखाता है जो हम चाहते हैं।'
					},
					type: 'speech',
					emotion: 'base',
					speaker: 'ela'
				},
				{
					content: {
						korean: '우리가 행복을 바라면 행복을 보여주는 거야?',
						english: 'If we desire happiness, will it show us happiness?',
						japanese: '私たちが幸せを願えば、幸せを見せてくれるの？',
						chinese: '如果我们渴望幸福，它就会展现幸福吗？',
						french: 'Si nous désirons le bonheur, nous montrera-t-il le bonheur ?',
						spanish: '¿Si deseamos felicidad, nos mostrará felicidad?',
						vietnamese: 'Nếu ta khao khát hạnh phúc, nó sẽ cho ta thấy hạnh phúc ư?',
						thai: 'ถ้าเราปรารถนาความสุข มันก็จะแสดงความสุขให้เราเห็นเหรอ?',
						hindi: 'अगर हम खुशी चाहते हैं, तो क्या यह हमें खुशी दिखाएगा?'
					},
					type: 'speech',
					emotion: 'base',
					speaker: 'character_any'
				},
				{
					speaker: 'ela',
					emotion: 'sad',
					type: 'speech',
					content: {
						korean: '아니. 다른 사람의 행복을 탐내는 마음이 보이지.',
						english: 'No. I see a heart coveting the happiness of others.',
						japanese: 'いいえ。他人の幸せを羨む心がみえます。',
						chinese: '不。我看到了觊觎他人幸福的心。',
						french: 'Non. Je vois un cœur convoitant le bonheur des autres.',
						spanish: 'No. Veo un corazón que codicia la felicidad ajena.',
						vietnamese: 'Không. Ta thấy một trái tim thèm khát hạnh phúc của người khác.',
						thai: 'ไม่สิ ข้าเห็นจิตใจที่โลภอยากได้ความสุขของผู้อื่น',
						hindi: 'नहीं। मुझे दूसरों की खुशियों का लालच करने वाला मन दिख रहा है।'
					}
				},
				{
					speaker: 'character_any',
					emotion: 'angry',
					type: 'speech',
					content: {
						korean: '그래서 숲이 병든 거라고? 우리의 욕망 때문에?',
						english: 'So the forest got sick? Because of our desires?',
						japanese: 'だから森は病んだのか？私たちの欲望のせいで？',
						chinese: '所以森林病了？因为我们的欲望？',
						french: "C'est pour ça que la forêt est tombée malade ? À cause de nos désirs ?",
						spanish: 'Así que el bosque enfermó? ¿Por nuestros deseos?',
						vietnamese: 'Vậy là khu rừng bị bệnh? Vì ham muốn của chúng ta?',
						thai: 'งั้นป่าถึงได้ป่วยงั้นเหรอ? เพราะความปรารถนาของเราเหรอ?',
						hindi: 'तो जंगल बीमार हो गया? हमारी इच्छाओं के कारण?'
					}
				},
				{
					emotion: 'sad',
					speaker: 'ela',
					content: {
						korean: '응. 모두가 자기만 생각하니까.',
						english: 'Yes. Because everyone only thinks of themselves.',
						japanese: 'うん。みんな自分のことしか考えてないから。',
						chinese: '嗯。因为每个人都只想着自己。',
						french: "Oui. Parce que tout le monde ne pense qu'à soi.",
						spanish: 'Sí. Porque todos solo piensan en sí mismos.',
						vietnamese: 'Đúng vậy. Vì ai cũng chỉ nghĩ cho bản thân mình.',
						thai: 'ใช่ เพราะทุกคนคิดถึงแต่ตัวเอง',
						hindi: 'हाँ। क्योंकि हर कोई सिर्फ अपने बारे में सोचता है।'
					},
					type: 'speech'
				}
			]
		},
		{
			id: 15,
			lose_dialogue: [
				{
					type: 'speech',
					content: {
						korean: '그래, 더 깊이 빠져봐라. 너희의 탐욕이 나를 더 강하게 만들 테니!',
						english: 'Yes, dive deeper. Your greed will only make me stronger!',
						japanese: 'そうだ、もっと深く堕ちてみろ。お前たちの貪欲さが私をさらに強くするだろう！',
						chinese: '是的，再陷深一点吧。你们的贪婪只会让我更强大！',
						french:
							'Oui, plongez plus profondément. Votre cupidité ne fera que me rendre plus fort !',
						spanish: 'Sí, adéntrense más. ¡Vuestra codicia solo me hará más fuerte!',
						vietnamese:
							'Phải, hãy lún sâu hơn nữa đi. Lòng tham của các ngươi sẽ chỉ khiến ta mạnh hơn thôi!',
						thai: 'ใช่แล้ว จงดำดิ่งลงไปให้ลึกกว่านี้ ความโลภของพวกเจ้าจะทำให้ข้าแข็งแกร่งขึ้น!',
						hindi: 'हाँ, और गहराई में डूबो। तुम्हारा लालच मुझे और मजबूत ही बनाएगा!'
					},
					speaker: 'random_boss',
					emotion: 'angry'
				},
				{
					type: 'speech',
					content: {
						korean: '…젠장. 아직 끝나지 않았어.',
						english: "...Damn it. It's not over yet.",
						japanese: '…くそ。まだ終わってない。',
						chinese: '……该死。还没结束。',
						french: "...Maudit. Ce n'est pas encore fini.",
						spanish: '...Maldita sea. Todavía no ha terminado.',
						vietnamese: '...Chết tiệt. Vẫn chưa kết thúc đâu.',
						thai: '...บ้าเอ๊ย ยังไม่จบหรอก',
						hindi: '...लानत है। अभी खत्म नहीं हुआ है।'
					},
					speaker: 'character_any',
					emotion: 'angry'
				},
				{
					type: 'direction',
					spot: [3, 2],
					action: 'enter',
					duration_ms: 500,
					speaker: 'ela'
				},
				{
					type: 'speech',
					content: {
						korean: '숲이 더 아파졌어…',
						english: 'The forest hurts even more...',
						japanese: '森がもっと痛くなった…',
						chinese: '森林更痛苦了……',
						french: 'La forêt souffre encore plus...',
						spanish: 'El bosque duele aún más...',
						vietnamese: 'Rừng lại càng đau đớn hơn...',
						thai: 'ป่ายิ่งเจ็บปวดขึ้น...',
						hindi: 'जंगल और दर्द में डूब गया...'
					},
					speaker: 'ela',
					emotion: 'sad'
				}
			],
			dialogue: [
				{
					emotion: 'angry',
					speaker: 'random_boss',
					content: {
						korean: '환영에 빠져라! 이 늪에서 영원히 허우적대라!',
						english: 'Fall into illusion! Struggle forever in this swamp!',
						japanese: '幻影に堕ちろ！この沼で永遠にもがけ！',
						chinese: '坠入幻象！在这沼泽中永远挣扎吧！',
						french: "Tombe dans l'illusion ! Débats-toi éternellement dans ce marais !",
						spanish: '¡Cae en la ilusión! ¡Lucha eternamente en este pantano!',
						vietnamese: 'Sa vào ảo ảnh! Mãi mãi vùng vẫy trong đầm lầy này đi!',
						thai: 'ตกอยู่ในภาพลวงตาเสีย! ดิ้นรนอยู่ในหนองน้ำนี้ชั่วนิรันดร์!',
						hindi: 'भ्रम में पड़ो! इस दलदल में हमेशा के लिए संघर्ष करो!'
					},
					type: 'speech'
				},
				{
					emotion: 'angry',
					speaker: 'character_any',
					content: {
						korean: '우리는 너처럼 욕망에 눈 멀지 않아!',
						english: "We won't be blinded by desire like you!",
						japanese: '私たちはあなたのように欲望に盲目にはならない！',
						chinese: '我们不会像你一样被欲望蒙蔽！',
						french: 'Nous ne serons pas aveuglés par le désir comme toi !',
						spanish: '¡No seremos cegados por el deseo como tú!',
						vietnamese: 'Chúng ta sẽ không bị ham muốn làm mù quáng như ngươi!',
						thai: 'เราจะไม่ตาบอดด้วยความปรารถนาเหมือนเจ้า!',
						hindi: 'हम तुम्हारी तरह इच्छाओं से अंधे नहीं होंगे!'
					},
					type: 'speech'
				},
				{
					duration_ms: 500,
					speaker: 'ela',
					type: 'direction',
					action: 'enter',
					spot: [2, 2]
				},
				{
					speaker: 'ela',
					emotion: 'sad',
					type: 'speech',
					content: {
						korean: '저 괴물은 모두의 욕망을 먹고 커졌어.',
						english: "That monster grew by feeding on everyone's desires.",
						japanese: 'あの怪物はみんなの欲望を食べて大きくなったんだ。',
						chinese: '那个怪物吞噬了所有人的欲望而成长。',
						french: 'Ce monstre a grandi en se nourrissant des désirs de chacun.',
						spanish: 'Ese monstruo creció alimentándose de los deseos de todos.',
						vietnamese: 'Con quái vật đó đã lớn mạnh nhờ nuốt chửng ham muốn của mọi người.',
						thai: 'สัตว์ประหลาดตัวนั้นเติบโตจากการกินความปรารถนาของทุกคน',
						hindi: 'वह राक्षस सबकी इच्छाओं को खाकर बड़ा हुआ।'
					}
				},
				{
					content: {
						korean: '네 순수한 갈망도 결국은 나를 키울 뿐.',
						english: 'Even your pure longing will only feed me in the end.',
						japanese: 'お前の純粋な渇望も、結局は私を育てるだけだ。',
						chinese: '你的纯粹渴望最终也只会滋养我。',
						french: 'Même ton pur désir ne fera que me nourrir au final.',
						spanish: 'Incluso tu puro anhelo solo me alimentará al final.',
						vietnamese:
							'Ngay cả khát khao thuần khiết của ngươi cuối cùng cũng chỉ nuôi dưỡng ta mà thôi.',
						thai: 'แม้แต่ความปรารถนาอันบริสุทธิ์ของเจ้าก็มีแต่จะบำรุงข้าเท่านั้น',
						hindi: 'तुम्हारी शुद्ध लालसा भी अंततः मुझे ही पोषित करेगी।'
					},
					type: 'speech',
					emotion: 'base',
					speaker: 'random_boss'
				},
				{
					action: 'exit',
					type: 'direction',
					direction: 'down',
					speaker: 'ela',
					duration_ms: 400
				}
			],
			win_dialogue: [
				{
					content: {
						korean: '…결국, 너도 다르지 않아. 네 안에도 욕망이 꿈틀댈 뿐…',
						english: "...In the end, you're no different. Desire merely squirms within you too...",
						japanese: '…結局、お前も同じだ。お前の中にも欲望が蠢いているだけだ…',
						chinese: '……最终，你也没有什么不同。欲望也只是在你体内蠢蠢欲动……',
						french: "...Au final, tu n'es pas différent. Le désir frémit aussi en toi...",
						spanish:
							'...Al final, tú tampoco eres diferente. El deseo también se agita dentro de ti...',
						vietnamese:
							'...Cuối cùng, ngươi cũng chẳng khác gì. Ham muốn cũng chỉ đang cựa quậy bên trong ngươi mà thôi...',
						thai: '...สุดท้ายแล้ว เจ้าก็ไม่ต่างกัน ความปรารถนาเพียงแค่กระสับกระส่ายอยู่ในตัวเจ้าเท่านั้น...',
						hindi: '...अंत में, तुम भी अलग नहीं हो। तुम्हारे अंदर भी इच्छाएँ कुलबुला रही हैं...'
					},
					type: 'speech',
					emotion: 'sad',
					speaker: 'random_boss'
				},
				{
					type: 'speech',
					content: {
						korean: '아니. 우리는 너처럼 되지 않아.',
						english: "No. We won't become like you.",
						japanese: 'いいえ。私たちはあなたのようににはならない。',
						chinese: '不。我们不会变得像你一样。',
						french: 'Non. Nous ne deviendrons pas comme toi.',
						spanish: 'No. No seremos como tú.',
						vietnamese: 'Không. Chúng ta sẽ không trở thành như ngươi.',
						thai: 'ไม่สิ เราจะไม่เป็นเหมือนเจ้า',
						hindi: 'नहीं। हम तुम्हारी तरह नहीं बनेंगे।'
					},
					speaker: 'character_any',
					emotion: 'angry'
				},
				{
					duration_ms: 500,
					speaker: 'ela',
					type: 'direction',
					spot: [3, 2],
					action: 'enter'
				},
				{
					emotion: 'happy',
					speaker: 'ela',
					content: {
						korean: '숲이 조금 조용해졌어.',
						english: 'The forest has become a little quieter.',
						japanese: '森が少し静かになった。',
						chinese: '森林变得稍微安静了一些。',
						french: 'La forêt est devenue un peu plus silencieuse.',
						spanish: 'El bosque se ha vuelto un poco más tranquilo.',
						vietnamese: 'Khu rừng đã trở nên yên tĩnh hơn một chút.',
						thai: 'ป่าเงียบลงเล็กน้อย',
						hindi: 'जंगल थोड़ा शांत हो गया है।'
					},
					type: 'speech'
				},
				{
					emotion: 'base',
					speaker: 'narrator',
					content: {
						korean:
							'괴물은 사라졌지만, 숲에 남은 욕망의 잔재는 여전히 미세하게 흔들렸다. 진정한 정화는 아직 멀었다.',
						english:
							'The monster is gone, but the remnants of desire in the forest still subtly tremble. True purification is still far off.',
						japanese:
							'化け物はいなくなったが、森に残る欲望の残滓は依然として微かに揺らめいていた。真の浄化はまだ遠い。',
						chinese: '怪物消失了，但森林中残留的欲望仍在微微颤动。真正的净化还远未到来。',
						french:
							'Le monstre a disparu, mais les vestiges du désir dans la forêt tremblent encore subtilement. La véritable purification est encore loin.',
						spanish:
							'El monstruo ha desaparecido, pero los restos del deseo en el bosque todavía tiemblan sutilmente. La verdadera purificación aún está lejos.',
						vietnamese:
							'Quái vật đã biến mất, nhưng tàn dư của ham muốn trong rừng vẫn còn rung động nhẹ. Sự thanh tẩy đích thực vẫn còn xa.',
						thai: 'สัตว์ประหลาดหายไปแล้ว แต่เศษซากของความปรารถนาที่หลงเหลืออยู่ในป่ายังคงสั่นไหวเล็กน้อย การชำระล้างที่แท้จริงยังอีกยาวไกล',
						hindi:
							'राक्षस चला गया है, लेकिन जंगल में बची हुई इच्छा के अवशेष अभी भी सूक्ष्म रूप से कांप रहे हैं। सच्ची शुद्धि अभी भी बहुत दूर है।'
					},
					type: 'speech'
				}
			]
		}
	],
	prologue: {
		korean: [
			'숲은 병들었다. 돌아온 자들의 슬픔 때문이 아니었다.',
			'어린 엘라는 직감했다. 그것은 깊은 곳에서 피어나는 갈망이었다.',
			'아름다운 위장 아래, 숲은 모두의 욕망이 뒤섞인 끈적한 늪이 되어가고 있었다.'
		],
		english: [
			"The forest was sick. It wasn't because of the sorrow of those who returned.",
			'Young Ella sensed it. It was a yearning blooming from deep within.',
			"Beneath a beautiful facade, the forest was becoming a sticky swamp, a tangle of everyone's desires."
		],
		japanese: [
			'森は病んでいた。戻りし者たちの悲しみゆえではなかった。',
			'若きエラは直感した。それは心の奥底から咲き誇る渇望だった。',
			'美しい偽りの下、森は皆の欲望が絡み合う、ねばつく沼と化しつつあった。'
		],
		chinese: [
			'森林病了。并非因为归来者的悲伤。',
			'年幼的艾拉直觉到了。那是一种从深处萌发的渴望。',
			'在美丽的伪装之下，森林正变成一片粘稠的沼泽，混合着所有人的欲望。'
		],
		french: [
			"La forêt était malade. Ce n'était pas à cause du chagrin de ceux qui étaient revenus.",
			"La jeune Ella le pressentit. C'était un désir ardent qui fleurissait des profondeurs.",
			'Sous un beau camouflage, la forêt devenait un marécage visqueux, un mélange des désirs de tous.'
		],
		spanish: [
			'El bosque estaba enfermo. No era por la tristeza de los que regresaron.',
			'La joven Ella lo intuyó. Era un anhelo que florecía desde lo más profundo.',
			'Bajo un hermoso camuflaje, el bosque se estaba convirtiendo en un pantano pegajoso, una mezcla de los deseos de todos.'
		],
		vietnamese: [
			'Rừng đã bệnh. Không phải vì nỗi buồn của những người đã trở về.',
			'Ella bé nhỏ linh cảm được điều đó. Đó là một khát khao đang nở rộ từ sâu thẳm bên trong.',
			'Dưới lớp ngụy trang tuyệt đẹp, rừng đang dần trở thành một đầm lầy dính nhớp, nơi hòa quyện những dục vọng của mọi người.'
		],
		thai: [
			'ป่าป่วย ไม่ใช่เพราะความเศร้าโศกของผู้ที่กลับมา',
			'เอลล่าตัวน้อยสัมผัสได้ มันคือความปรารถนาที่ผลิบานจากส่วนลึก',
			'ภายใต้การอำพรางอันสวยงาม ป่ากำลังกลายเป็นหนองน้ำเหนียวเหนอะหนะที่ปะปนไปด้วยความปรารถนาของทุกคน'
		],
		hindi: [
			'जंगल बीमार था। यह लौटे हुए लोगों के दुख के कारण नहीं था।',
			'नन्ही एला ने महसूस किया। यह गहराई से उभरती हुई एक लालसा थी।',
			'एक खूबसूरत नकाब के नीचे, जंगल हर किसी की इच्छाओं से मिला हुआ एक चिपचिपा दलदल बनता जा रहा था।'
		]
	}
} as const;
