export const scenario_desert_ceasefirephantom_v0_05 = {
	scenario_id: 'desert_ceasefirephantom_v0_05',
	order: 5,
	act: 'climax_finale',
	theme: 'desert',
	actors: {
		Naira: {
			name: {
				korean: '나이라',
				english: 'Naira',
				japanese: 'ナイラ',
				chinese: '奈拉',
				french: 'Naïra',
				spanish: 'Naira',
				vietnamese: 'Naira',
				thai: 'นาอิรา',
				hindi: 'नायरा'
			},
			description: '',
			face_image_url:
				'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dc53e5f9-7cfb-462c-c9f5-49e3ac660400/public',
			battle_sprite_url:
				'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/234a2f2e-f59f-4483-45dc-eff293829800/public'
		}
	},
	boss: {
		pool_id: 'pool_053'
	},
	epilogue: {
		korean: [
			'모래폭풍이 잦아들었다. 침묵이 사막을 감쌌다.',
			'균형은 깨졌고, 무엇이 올지 아무도 알 수 없었다.',
			'나이라는 사라졌다. 그녀의 죄책감과 함께.',
			'사막은 여전히 넓고, 갈등의 씨앗은 남아 있었다.',
			'우리는… 무엇을 위해 싸웠던 걸까.'
		],
		english: [
			'The sandstorm subsided. Silence enveloped the desert.',
			'The balance was broken, and no one knew what would come next.',
			'Naira vanished. Along with her guilt.',
			'The desert remained vast, and the seeds of conflict endured.',
			'What... did we fight for?'
		],
		japanese: [
			'砂嵐が収まった。沈黙が砂漠を包んだ。',
			'均衡は破られ、次に何が来るか誰も知らなかった。',
			'ナイラは消えた。彼女の罪悪感と共に。',
			'砂漠は相変わらず広大で、紛争の種は残っていた。',
			'私たちは…何のために戦ったのだろうか。'
		],
		chinese: [
			'沙尘暴平息了。寂静笼罩着沙漠。',
			'平衡被打破了，无人知晓未来。',
			'奈拉消失了。带着她的愧疚。',
			'沙漠依然广阔，冲突的种子依然存在。',
			'我们…到底为何而战？'
		],
		french: [
			"La tempête de sable s'est calmée. Le silence a enveloppé le désert.",
			"L'équilibre était rompu, et personne ne savait ce qui allait arriver.",
			'Naira a disparu. Avec sa culpabilité.',
			'Le désert restait vaste, et les graines du conflit persistaient.',
			'Pour quoi... nous sommes-nous battus ?'
		],
		spanish: [
			'La tormenta de arena amainó. El silencio envolvió el desierto.',
			'El equilibrio se rompió, y nadie sabía qué vendría después.',
			'Naira desapareció. Junto con su culpa.',
			'El desierto seguía siendo vasto, y las semillas del conflicto perduraban.',
			'¿Por qué... luchamos?'
		],
		vietnamese: [
			'Cơn bão cát lắng xuống. Sự im lặng bao trùm sa mạc.',
			'Sự cân bằng đã bị phá vỡ, và không ai biết điều gì sẽ đến.',
			'Naira biến mất. Cùng với sự hối lỗi của cô ấy.',
			'Sa mạc vẫn rộng lớn, và hạt giống xung đột vẫn còn.',
			'Chúng ta… đã chiến đấu vì điều gì?'
		],
		thai: [
			'พายุทรายสงบลง ความเงียบปกคลุมทะเลทราย',
			'ความสมดุลถูกทำลาย และไม่มีใครรู้ว่าอะไรจะเกิดขึ้นต่อไป',
			'ไนราหายไป พร้อมกับความรู้สึกผิดของเธอ',
			'ทะเลทรายยังคงกว้างใหญ่ และเมล็ดพันธุ์แห่งความขัดแย้งยังคงอยู่',
			'เรา... สู้เพื่ออะไรกันแน่?'
		],
		hindi: [
			'रेत का तूफान थम गया। सन्नाटे ने रेगिस्तान को घेर लिया।',
			'संतुलन टूट गया, और कोई नहीं जानता था कि आगे क्या होगा।',
			'नायरा गायब हो गई। अपने अपराधबोध के साथ।',
			'रेगिस्तान अभी भी विशाल था, और संघर्ष के बीज बने हुए थे।',
			'हम... किस लिए लड़े थे?'
		]
	},
	rooms: [
		{
			id: 1,
			dialogue: [
				{
					type: 'speech',
					speaker: 'narrator',
					emotion: 'base',
					content: {
						korean: '마침내, 갈등의 심장부에 다다랐다.',
						english: "Finally, we've reached the heart of the conflict.",
						japanese: 'ついに、この争いの核心に辿り着いた。',
						chinese: '终于，抵达了冲突的核心。',
						french: 'Enfin, nous avons atteint le cœur du conflit.',
						spanish: 'Finalmente, hemos llegado al corazón del conflicto.',
						vietnamese: 'Cuối cùng, chúng ta đã đến trung tâm của cuộc xung đột.',
						thai: 'ในที่สุด เราก็มาถึงใจกลางของความขัดแย้ง',
						hindi: 'आख़िरकार, हम संघर्ष के केंद्र में पहुँच गए हैं।'
					}
				},
				{
					content: {
						korean: '여기가… {boss}의 은신처인가?',
						english: "Is this... {boss}'s hideout?",
						japanese: 'ここが… {boss}の隠れ家か？',
						chinese: '这里是……{boss}的藏身之处吗？',
						french: 'Est-ce… la cachette de {boss} ?',
						spanish: '¿Es este… el escondite de {boss}?',
						vietnamese: 'Đây là... nơi ẩn náu của {boss} ư?',
						thai: 'นี่คือ... รังของ {boss} งั้นหรือ?',
						hindi: 'क्या यह... {boss} का ठिकाना है?'
					},
					emotion: 'base',
					speaker: 'character_any',
					type: 'speech'
				},
				{
					content: {
						korean: '느껴져. 역겨운 균형의 기운이.',
						english: 'I feel it. The repulsive aura of balance.',
						japanese: '感じる。吐き気を催す均衡の気配が。',
						chinese: '我感觉到了。那令人作呕的平衡气息。',
						french: "Je le sens. L'aura écœurante de l'équilibre.",
						spanish: 'Lo siento. El aura repugnante del equilibrio.',
						vietnamese: 'Ta cảm nhận được. Khí tức cân bằng ghê tởm này.',
						thai: 'สัมผัสได้ถึงกลิ่นอายแห่งความสมดุลที่น่ารังเกียจ',
						hindi: 'मैं इसे महसूस कर सकता हूँ। संतुलन की घिनौनी आभा।'
					},
					emotion: 'angry',
					speaker: 'character_1',
					type: 'speech'
				},
				{
					speaker: 'Naira',
					spot: [4, 3],
					action: 'enter',
					duration_ms: 500,
					type: 'direction'
				},
				{
					content: {
						korean: '…기어이 여기까지 왔구나.',
						english: '...So you finally made it here.',
						japanese: '…ついにここまで来たか。',
						chinese: '...你终究还是来了这里。',
						french: "...Tu es donc finalement arrivé jusqu'ici.",
						spanish: '...Así que al final llegaste hasta aquí.',
						vietnamese: '...Ngươi cuối cùng cũng đã đến đây.',
						thai: '...ในที่สุดเจ้าก็มาถึงที่นี่จนได้',
						hindi: '...तो तुम आखिरकार यहाँ आ ही गए।'
					},
					emotion: 'base',
					speaker: 'Naira',
					type: 'speech'
				},
				{
					speaker: 'character_any',
					type: 'speech',
					content: {
						korean: '나이라? 왜 네가 여기에?',
						english: 'Naira? Why are you here?',
						japanese: 'ナイラ？なぜお前がここに？',
						chinese: '娜依拉？你为什么会在这里？',
						french: 'Naira ? Pourquoi es-tu ici ?',
						spanish: '¿Naira? ¿Por qué estás aquí?',
						vietnamese: 'Naira? Sao ngươi lại ở đây?',
						thai: 'ไนรา? ทำไมเจ้าถึงมาอยู่ที่นี่?',
						hindi: 'नायरा? तुम यहाँ क्यों हो?'
					},
					emotion: 'base'
				},
				{
					speaker: 'Naira',
					type: 'speech',
					content: {
						korean: '난 그저… 필요한 것을 팔았을 뿐이야. 평화를 팔고, 전쟁을 팔고.',
						english: 'I merely... sold what was needed. Sold peace, sold war.',
						japanese: '私はただ…必要なものを売っただけだ。平和を売り、戦争を売った。',
						chinese: '我只是…卖掉了所需之物。卖掉了和平，也卖掉了战争。',
						french:
							"Je n'ai fait que… vendre ce qui était nécessaire. Vendre la paix, vendre la guerre.",
						spanish: 'Yo solo… vendí lo que era necesario. Vendí la paz, vendí la guerra.',
						vietnamese: 'Ta chỉ là... bán đi những gì cần thiết. Bán hòa bình, bán chiến tranh.',
						thai: 'ข้าก็แค่... ขายสิ่งที่จำเป็น ขายสันติภาพ, ขายสงคราม',
						hindi: 'मैंने बस... ज़रूरत की चीज़ें बेचीं। शांति बेची, युद्ध बेचा।'
					},
					emotion: 'base'
				}
			]
		},
		{
			id: 3,
			dialogue: [
				{
					duration_ms: 500,
					type: 'direction',
					spot: [4, 3],
					action: 'enter',
					speaker: 'Naira'
				},
				{
					type: 'speech',
					speaker: 'Naira',
					emotion: 'base',
					content: {
						korean: '균형은 깨지지 않아. 깨려는 자가 있을 뿐이지.',
						english: 'Balance cannot be broken. Only those who try to break it exist.',
						japanese: '均衡は破られない。破ろうとする者がいるだけだ。',
						chinese: '平衡不会被打破。只有试图打破它的人。',
						french: "L'équilibre ne peut être brisé. Il n'y a que ceux qui tentent de le briser.",
						spanish: 'El equilibrio no se rompe. Solo existen quienes intentan romperlo.',
						vietnamese: 'Cân bằng không bị phá vỡ. Chỉ có những kẻ muốn phá vỡ nó mà thôi.',
						thai: 'ความสมดุลไม่มีวันแตกสลาย มีแต่ผู้ที่พยายามจะทำลายมันเท่านั้น',
						hindi: 'संतुलन टूटता नहीं है। बस उसे तोड़ने वाले होते हैं।'
					}
				},
				{
					content: {
						korean: '네가 말하는 균형은 거짓된 평화잖아.',
						english: 'The balance you speak of is a false peace.',
						japanese: 'お前の言う均衡は、偽りの平和じゃないか。',
						chinese: '你所说的平衡，不过是虚假的和平。',
						french: "L'équilibre dont tu parles est une fausse paix.",
						spanish: 'El equilibrio del que hablas es una paz falsa.',
						vietnamese: 'Cân bằng mà ngươi nói, chẳng phải là hòa bình giả dối sao?',
						thai: 'ความสมดุลที่เจ้าพูดถึงมันเป็นสันติภาพจอมปลอม',
						hindi: 'जिस संतुलन की तुम बात कर रहे हो, वह एक झूठी शांति है।'
					},
					emotion: 'angry',
					speaker: 'character_any',
					type: 'speech'
				},
				{
					content: {
						korean: '진정한 평화는… 모두를 파멸시킬 거야. 그걸 누가 감당할 수 있겠어?',
						english: 'True peace... will destroy everyone. Who could bear that?',
						japanese: '真の平和は…全てを破滅させるだろう。誰がそれに耐えられるというのか？',
						chinese: '真正的和平…会毁灭一切。谁能承受得了呢？',
						french: 'La vraie paix… anéantira tout. Qui pourrait supporter ça ?',
						spanish: 'La verdadera paz… lo destruirá todo. ¿Quién podría soportarlo?',
						vietnamese:
							'Hòa bình đích thực... sẽ hủy diệt tất cả. Ai có thể gánh chịu điều đó chứ?',
						thai: 'สันติภาพที่แท้จริง... จะทำลายทุกคน ใครจะทนรับมันไหว?',
						hindi: 'सच्ची शांति... सबको तबाह कर देगी। इसे कौन सह पाएगा?'
					},
					emotion: 'sad',
					speaker: 'Naira',
					type: 'speech'
				},
				{
					type: 'speech',
					speaker: 'character_2',
					emotion: 'angry',
					content: {
						korean: '헛소리 마! 네가 대체 뭘 아는데?',
						english: 'Nonsense! What do you even know?',
						japanese: 'ふざけるな！お前に一体何がわかるんだ？',
						chinese: '胡说八道！你到底懂什么？',
						french: "Arrête tes bêtises ! Qu'est-ce que tu en sais ?",
						spanish: '¡No digas tonterías! ¿Qué sabes tú?',
						vietnamese: 'Đừng nói nhảm! Ngươi biết gì chứ?',
						thai: 'ไร้สาระ! เจ้าจะไปรู้อะไร?',
						hindi: 'बकवास बंद करो! तुम्हें क्या पता है?'
					}
				},
				{
					content: {
						korean: '난 알아. 이 사막의 모든 순환을.',
						english: 'I know. Every cycle of this desert.',
						japanese: '私は知っている。この砂漠のすべての循環を。',
						chinese: '我知道。这片沙漠的所有循环。',
						french: 'Je sais. Tous les cycles de ce désert.',
						spanish: 'Lo sé. Cada ciclo de este desierto.',
						vietnamese: 'Ta biết. Mọi vòng lặp của sa mạc này.',
						thai: 'ฉันรู้ วงจรทั้งหมดของทะเลทรายแห่งนี้',
						hindi: 'मैं जानता हूँ। इस रेगिस्तान के हर चक्र को।'
					},
					emotion: 'base',
					speaker: 'Naira',
					type: 'speech'
				}
			]
		},
		{
			id: 5,
			dialogue: [
				{
					type: 'direction',
					duration_ms: 500,
					action: 'enter',
					spot: [4, 3],
					speaker: 'Naira'
				},
				{
					type: 'speech',
					speaker: 'Naira',
					emotion: 'base',
					content: {
						korean: '너희의 분노가 시스템을 강화하는 걸 모르지?',
						english: "Don't you know your rage strengthens the system?",
						japanese: '君たちの怒りがシステムを強化していることに気づかないのか？',
						chinese: '你们难道不知道，你们的愤怒正在强化系统吗？',
						french: 'Ne savez-vous pas que votre rage renforce le système ?',
						spanish: '¿No sabéis que vuestra ira fortalece el sistema?',
						vietnamese: 'Các ngươi không biết sự giận dữ của mình đang củng cố hệ thống sao?',
						thai: 'พวกเจ้าไม่รู้หรือว่าความโกรธของพวกเจ้ากำลังเสริมสร้างระบบ?',
						hindi: 'क्या तुम नहीं जानते कि तुम्हारा क्रोध व्यवस्था को मजबूत करता है?'
					}
				},
				{
					type: 'speech',
					speaker: 'character_any',
					emotion: 'angry',
					content: {
						korean: '무슨 말이야? 우린 싸우는 거라고!',
						english: "What do you mean? We're fighting!",
						japanese: '何を言ってる？私たちは戦っているんだ！',
						chinese: '你 F说什么？我们正在战斗！',
						french: 'Que veux-tu dire ? Nous nous battons !',
						spanish: '¿Qué quieres decir? ¡Estamos luchando!',
						vietnamese: 'Ngươi nói gì? Chúng ta đang chiến đấu!',
						thai: 'หมายความว่าไง? พวกเรากำลังต่อสู้!',
						hindi: 'तुम्हारा क्या मतलब है? हम लड़ रहे हैं!'
					}
				},
				{
					emotion: 'sad',
					content: {
						korean: '이 모든 갈등은… 너희의 의지가 아니야. 누군가의 설계지.',
						english: "All this conflict... it's not your will. It's someone's design.",
						japanese: 'この全ての対立は…君たちの意志ではない。誰かの仕組んだことだ。',
						chinese: '所有的这些冲突……都不是你们的意愿。这是某人的设计。',
						french: "Tout ce conflit... ce n'est pas votre volonté. C'est le dessein de quelqu'un.",
						spanish: 'Todo este conflicto... no es vuestra voluntad. Es el diseño de alguien.',
						vietnamese:
							'Tất cả xung đột này... không phải ý chí của các ngươi. Đó là thiết kế của ai đó.',
						thai: 'ความขัดแย้งทั้งหมดนี้... ไม่ใช่เจตจำนงของพวกเจ้า มันคือการออกแบบของใครบางคน',
						hindi: 'यह सारा संघर्ष... तुम्हारी इच्छा नहीं है। यह किसी का डिज़ाइन है।'
					},
					type: 'speech',
					speaker: 'Naira'
				},
				{
					speaker: 'character_3',
					type: 'speech',
					content: {
						korean: '숨겨진 손! 자피르가 말한 게 사실이었어!',
						english: 'The hidden hand! What Zafira said was true!',
						japanese: '隠された手！ザフィラが言ったことは本当だった！',
						chinese: '幕后黑手！扎菲拉说的都是真的！',
						french: 'La main cachée ! Ce que Zafira a dit était vrai !',
						spanish: '¡La mano oculta! ¡Lo que dijo Zafira era cierto!',
						vietnamese: 'Bàn tay ẩn giấu! Lời Zafira nói là thật!',
						thai: 'มือที่ซ่อนอยู่! สิ่งที่ซาฟิราบอกเป็นความจริง!',
						hindi: 'छिपा हुआ हाथ! ज़ाफ़िरा ने जो कहा था, वह सच था!'
					},
					emotion: 'angry'
				},
				{
					type: 'speech',
					speaker: 'Naira',
					emotion: 'base',
					content: {
						korean: '그래. 진실은 항상 감춰져 있지. 가장 안전한 곳에.',
						english: 'Yes. The truth is always hidden. In the safest place.',
						japanese: 'そうだ。真実は常に隠されている。最も安全な場所に。',
						chinese: '是的。真相总是被隐藏起来。在最安全的地方。',
						french: "Oui. La vérité est toujours cachée. Dans l'endroit le plus sûr.",
						spanish: 'Sí. La verdad siempre está oculta. En el lugar más seguro.',
						vietnamese: 'Phải. Sự thật luôn bị che giấu. Ở nơi an toàn nhất.',
						thai: 'ใช่ ความจริงมักถูกซ่อนไว้ ในที่ที่ปลอดภัยที่สุด',
						hindi: 'हाँ। सच हमेशा छिपा रहता है। सबसे सुरक्षित जगह में।'
					}
				}
			]
		},
		{
			id: 9,
			dialogue: [
				{
					duration_ms: 500,
					type: 'direction',
					speaker: 'Naira',
					spot: [4, 3],
					action: 'enter'
				},
				{
					emotion: 'sad',
					content: {
						korean: '돌아가. 여기서 더 나아가면, 너희는 모든 것을 잃게 될 거야.',
						english: 'Go back. If you go further, you will lose everything.',
						japanese: '戻れ。これ以上進めば、全てを失うだろう。',
						chinese: '回去。如果你再往前走，你将失去一切。',
						french: 'Retournez. Si vous allez plus loin, vous perdrez tout.',
						spanish: 'Regresad. Si vais más lejos, lo perderéis todo.',
						vietnamese: 'Quay lại. Nếu các ngươi đi xa hơn, các ngươi sẽ mất tất cả.',
						thai: 'กลับไปซะ ถ้าพวกเจ้าไปไกลกว่านี้ พวกเจ้าจะสูญเสียทุกสิ่ง',
						hindi: 'वापस जाओ। यदि तुम आगे बढ़ते हो, तो तुम सब कुछ खो दोगे।'
					},
					type: 'speech',
					speaker: 'Naira'
				},
				{
					speaker: 'character_any',
					type: 'speech',
					content: {
						korean: '우린 끝을 볼 거야.',
						english: 'We will see the end.',
						japanese: '私たちは終わりを見るだろう。',
						chinese: '我们会看到结局的。',
						french: 'Nous verrons la fin.',
						spanish: 'Veremos el final.',
						vietnamese: 'Chúng ta sẽ thấy kết cục.',
						thai: 'เราจะเห็นจุดจบ',
						hindi: 'हम अंत देखेंगे।'
					},
					emotion: 'angry'
				},
				{
					type: 'speech',
					speaker: 'Naira',
					emotion: 'base',
					content: {
						korean: '끝은… 공허할 뿐이야. 새로운 시작이 아냐.',
						english: 'The end... is just emptiness. Not a new beginning.',
						japanese: '終わりは…ただの虚無だ。新たな始まりではない。',
						chinese: '结局……只是虚无。不是一个新的开始。',
						french: "La fin... n'est que vide. Pas un nouveau commencement.",
						spanish: 'El final... es solo vacío. No un nuevo comienzo.',
						vietnamese: 'Kết cục... chỉ là sự trống rỗng. Không phải một khởi đầu mới.',
						thai: 'จุดจบ... เป็นเพียงความว่างเปล่า ไม่ใช่การเริ่มต้นใหม่',
						hindi: 'अंत... केवल शून्यता है। नई शुरुआत नहीं।'
					}
				},
				{
					speaker: 'character_4',
					type: 'speech',
					content: {
						korean: '후회는 없어. 적어도 진실을 알고 죽을 테니까.',
						english: "No regrets. At least we'll die knowing the truth.",
						japanese: '後悔はない。少なくとも真実を知って死ぬだろうから。',
						chinese: '没有遗憾。至少我们会知道真相而死。',
						french: 'Aucun regret. Au moins, nous mourrons en connaissant la vérité.',
						spanish: 'Sin arrepentimientos. Al menos moriremos sabiendo la verdad.',
						vietnamese: 'Không hối tiếc. Ít nhất chúng ta sẽ chết khi biết sự thật.',
						thai: 'ไม่เสียใจ อย่างน้อยเราก็ตายโดยรู้ความจริง',
						hindi: 'कोई पछतावा नहीं। कम से कम हम सच्चाई जानकर मरेंगे।'
					},
					emotion: 'base'
				},
				{
					speaker: 'Naira',
					type: 'speech',
					content: {
						korean: '그래… 평화는 너무 비싸거든. 아무도 감당하지 못할 만큼.',
						english: 'Yes... peace is too expensive. More than anyone can afford.',
						japanese: 'そう… 平和はあまりに高価だ。誰も支払えないほどに。',
						chinese: '是啊……和平太昂贵了。昂贵到无人能承受。',
						french: 'Oui… la paix est trop chère. Plus que quiconque ne peut se le permettre.',
						spanish: 'Sí… la paz es demasiado cara. Más de lo que nadie puede permitirse.',
						vietnamese: 'Đúng vậy… hòa bình quá đắt. Đắt đến mức không ai có thể chi trả nổi.',
						thai: 'ใช่แล้ว... สันติภาพนั้นแพงเกินไป แพงเกินกว่าที่ใครจะจ่ายไหว',
						hindi: 'हाँ… शांति बहुत महंगी है। इतनी कि कोई भी इसे वहन नहीं कर सकता।'
					},
					emotion: 'base'
				}
			]
		},
		{
			dialogue: [
				{
					content: {
						korean: "모래의 심장이 뛰는 곳. '휴전의 망령'이 기다리고 있었다.",
						english: "Where the heart of sand beats. The 'Phantom of Truce' awaited.",
						japanese: '砂の心臓が脈打つ場所。『休戦の亡霊』が待っていた。',
						chinese: '沙之心跳动之处。‘休战的幽灵’在那里等待着。',
						french: "Là où bat le cœur du sable. Le 'Fantôme de la Trêve' attendait.",
						spanish: "Donde late el corazón de la arena. El 'Espectro de la Tregua' esperaba.",
						vietnamese: "Nơi trái tim của cát đập. 'Bóng ma đình chiến' đã chờ đợi.",
						thai: "ณ ที่ซึ่งหัวใจแห่งผืนทรายเต้นรัว 'ภูตแห่งการสงบศึก' กำลังรออยู่",
						hindi: "जहाँ रेत का दिल धड़कता है। 'युद्धविराम का प्रेत' इंतजार कर रहा था।"
					},
					emotion: 'base',
					speaker: 'narrator',
					type: 'speech'
				},
				{
					type: 'direction',
					duration_ms: 500,
					action: 'enter',
					spot: [4, 3],
					speaker: 'Naira'
				},
				{
					speaker: 'boss',
					type: 'speech',
					content: {
						korean: '…기어이 여기까지 왔군.',
						english: "...You've finally made it here.",
						japanese: '…ついにここまで来たか。',
						chinese: '……你终究还是来了这里。',
						french: '...Vous êtes enfin arrivés ici.',
						spanish: '...Así que finalmente llegaste aquí.',
						vietnamese: '...Cuối cùng ngươi cũng đến được đây.',
						thai: '...ในที่สุดเจ้าก็มาถึงที่นี่จนได้',
						hindi: '...तो तुम आखिरकार यहाँ पहुँच ही गए।'
					},
					emotion: 'base'
				},
				{
					emotion: 'angry',
					content: {
						korean: '{boss}! 네가 모든 걸 조종한 거야?',
						english: '{boss}! You orchestrated everything?',
						japanese: '{boss}！お前が全てを操っていたのか？',
						chinese: '{boss}！一切都是你操纵的吗？',
						french: "{boss} ! C'est toi qui as tout manipulé ?",
						spanish: '¡{boss}! ¿Tú controlaste todo?',
						vietnamese: '{boss}! Ngươi đã điều khiển tất cả sao?',
						thai: '{boss}! เจ้าเป็นคนบงการทุกสิ่งอย่างงั้นหรือ?',
						hindi: '{boss}! क्या तुमने सब कुछ नियंत्रित किया?'
					},
					type: 'speech',
					speaker: 'character_any'
				},
				{
					content: {
						korean: '조종? 아니. 난 그저 균형을 유지했을 뿐.',
						english: 'Manipulated? No. I merely maintained the balance.',
						japanese: '操る？違う。私はただ均衡を保っていただけだ。',
						chinese: '操纵？不。我只是维持了平衡。',
						french: "Manipuler ? Non. J'ai simplement maintenu l'équilibre.",
						spanish: '¿Controlar? No. Yo solo mantuve el equilibrio.',
						vietnamese: 'Điều khiển? Không. Ta chỉ duy trì sự cân bằng mà thôi.',
						thai: 'บงการงั้นหรือ? ไม่ใช่ ข้าเพียงแค่รักษาสมดุลไว้เท่านั้น',
						hindi: 'नियंत्रित? नहीं। मैंने तो बस संतुलन बनाए रखा।'
					},
					emotion: 'base',
					speaker: 'boss',
					type: 'speech'
				},
				{
					type: 'speech',
					speaker: 'Naira',
					emotion: 'base',
					content: {
						korean: '…(말없이 팔찌 같은 것을 꺼내 들어 {boss}에게 던진다)',
						english: '...(Silently takes out a bracelet-like object and throws it to {boss})',
						japanese: '…（無言で腕輪のようなものを取り出し、{boss}に投げる）',
						chinese: '……（默不作声地取出一个手镯般的东西，扔向{boss}）',
						french:
							'...(Sort silencieusement un objet ressemblant à un bracelet et le lance à {boss})',
						spanish:
							'...(Saca en silencio un objeto similar a una pulsera y se lo arroja a {boss})',
						vietnamese:
							'...(Không nói một lời, lấy ra một vật giống chiếc vòng tay và ném cho {boss})',
						thai: '...(หยิบวัตถุคล้ายกำไลออกมาอย่างเงียบงันแล้วโยนให้ {boss})',
						hindi: '...(खामोशी से एक कंगन जैसी चीज़ निकालकर {boss} की ओर फेंकता है)'
					}
				},
				{
					type: 'direction',
					duration_ms: 800,
					speaker: 'boss',
					action: 'focus'
				},
				{
					emotion: 'base',
					content: {
						korean: '…나이라. 네 도움이 나의 균형을 더욱 견고히 하는군.',
						english: '...Naira. Your help makes my balance even stronger.',
						japanese: '…ナイラ。お前の助けが私の均衡をより強固にする。',
						chinese: '……娜伊拉。你的帮助让我的平衡更加稳固了。',
						french: '...Naira. Ton aide rend mon équilibre encore plus solide.',
						spanish: '...Naira. Tu ayuda fortalece aún más mi equilibrio.',
						vietnamese: '...Naira. Sự giúp đỡ của ngươi làm cân bằng của ta càng thêm vững chắc.',
						thai: '...ไนร่า การช่วยเหลือของเจ้าทำให้สมดุลของข้าแข็งแกร่งยิ่งขึ้น',
						hindi: '...नायरा। तुम्हारी मदद मेरे संतुलन को और मजबूत करती है।'
					},
					type: 'speech',
					speaker: 'boss'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					emotion: 'angry',
					content: {
						korean: '나이라! 네가 어떻게!',
						english: 'Naira! How could you!',
						japanese: 'ナイラ！お前がどうして！',
						chinese: '娜伊拉！你怎敢！',
						french: 'Naira ! Comment as-tu pu !',
						spanish: '¡Naira! ¡Cómo pudiste!',
						vietnamese: 'Naira! Sao ngươi có thể!',
						thai: 'ไนร่า! เจ้าทำได้อย่างไร!',
						hindi: 'नायरा! तुमने ये कैसे किया!'
					}
				},
				{
					content: {
						korean: '미안해. 난… 그저 이 시스템의 일부일 뿐.',
						english: "I'm sorry. I'm... just a part of this system.",
						japanese: 'ごめんなさい。私は…ただこのシステムの一部に過ぎない。',
						chinese: '对不起。我……只是这个系统的一部分。',
						french: "Je suis désolée. Je ne suis... qu'une partie de ce système.",
						spanish: 'Lo siento. Yo... solo soy parte de este sistema.',
						vietnamese: 'Xin lỗi. Ta... chỉ là một phần của hệ thống này.',
						thai: 'ขอโทษนะ ฉัน...เป็นแค่ส่วนหนึ่งของระบบนี้เท่านั้น',
						hindi: 'मुझे माफ़ करना। मैं... बस इस सिस्टम का एक हिस्सा हूँ।'
					},
					emotion: 'sad',
					speaker: 'Naira',
					type: 'speech'
				},
				{
					type: 'speech',
					speaker: 'boss',
					emotion: 'base',
					content: {
						korean: '너희는 끝을 원하지. 하지만 끝은 공허다.',
						english: 'You seek an end. But an end is emptiness.',
						japanese: 'お前たちは終わりを望む。だが終わりは虚無だ。',
						chinese: '你们渴望终结。但终结即是虚无。',
						french: 'Vous désirez la fin. Mais la fin est le vide.',
						spanish: 'Ustedes desean un final. Pero un final es el vacío.',
						vietnamese: 'Các ngươi muốn kết thúc. Nhưng kết thúc là hư vô.',
						thai: 'พวกเจ้าต้องการจุดจบ แต่จุดจบคือความว่างเปล่า',
						hindi: 'तुम अंत चाहते हो। लेकिन अंत शून्यता है।'
					}
				},
				{
					emotion: 'base',
					content: {
						korean: '적이 사라지면, 다음은 무엇을 증오할 건데?',
						english: 'When the enemy is gone, what will you hate next?',
						japanese: '敵がいなくなったら、次は何を憎む？',
						chinese: '敌人消失后，你接下来会憎恨什么？',
						french: "Quand l'ennemi sera parti, que haïras-tu après ?",
						spanish: '¿Cuando el enemigo se vaya, qué odiarás después?',
						vietnamese: 'Khi kẻ thù biến mất, ngươi sẽ căm ghét điều gì tiếp theo?',
						thai: 'เมื่อศัตรูหายไป เจ้าจะเกลียดชังอะไรต่อไป?',
						hindi: 'जब दुश्मन चला जाएगा, तो तुम आगे क्या नफरत करोगे?'
					},
					type: 'speech',
					speaker: 'boss'
				},
				{
					emotion: 'angry',
					content: {
						korean: '너 같은 괴물을!',
						english: 'Monsters like you!',
						japanese: 'お前のような怪物を！',
						chinese: '像你这样的怪物！',
						french: 'Des monstres comme toi !',
						spanish: '¡Monstruos como tú!',
						vietnamese: 'Những quái vật như ngươi!',
						thai: 'สัตว์ประหลาดอย่างเจ้า!',
						hindi: 'तुम जैसे राक्षसों को!'
					},
					type: 'speech',
					speaker: 'character_any'
				},
				{
					emotion: 'base',
					content: {
						korean: '난 전쟁을 만든 적 없다. 단지… 멈추지 않게 했을 뿐이다.',
						english: 'I never started the war. I merely... ensured it never stopped.',
						japanese: '私は戦争を始めたわけじゃない。ただ…終わらせなかっただけだ。',
						chinese: '我从未发动战争。我只是…确保它永不停止。',
						french:
							"Je n'ai jamais commencé la guerre. J'ai seulement... veillé à ce qu'elle ne s'arrête jamais.",
						spanish:
							'Yo nunca inicié la guerra. Simplemente... me aseguré de que nunca se detuviera.',
						vietnamese:
							'Ta chưa từng gây ra chiến tranh. Ta chỉ… đảm bảo nó không bao giờ dừng lại.',
						thai: 'ข้าไม่เคยเริ่มต้นสงคราม ข้าแค่...ทำให้มันไม่หยุด',
						hindi: 'मैंने कभी युद्ध शुरू नहीं किया। मैंने बस... सुनिश्चित किया कि यह कभी रुके नहीं।'
					},
					type: 'speech',
					speaker: 'boss'
				}
			],
			id: 15,
			win_dialogue: [
				{
					emotion: 'base',
					content: {
						korean: '모래의 망령, {boss}가 쓰러졌다.',
						english: 'The Specter of Sand, {boss}, has fallen.',
						japanese: '砂の亡霊、{boss}が倒れた。',
						chinese: '沙之亡灵，{boss}已倒下。',
						french: 'Le Spectre des Sables, {boss}, est tombé.',
						spanish: 'El Espectro de Arena, {boss}, ha caído.',
						vietnamese: 'Bóng ma Cát, {boss}, đã gục ngã.',
						thai: 'วิญญาณแห่งทราย, {boss}, ได้ล้มลงแล้ว',
						hindi: 'रेत का प्रेत, {boss}, गिर गया है।'
					},
					type: 'speech',
					speaker: 'narrator'
				},
				{
					content: {
						korean: '…평화는… 너무 비싸서… 아무도 감당하지 못해…',
						english: '...Peace is... too expensive... no one can afford it...',
						japanese: '…平和は…あまりにも高すぎて…誰も支払えない…',
						chinese: '…和平…太昂贵了…没有人能负担得起…',
						french: '...La paix est... trop chère... personne ne peut se la permettre...',
						spanish: '...La paz es... demasiado cara... nadie puede permitírsela...',
						vietnamese: '...Hòa bình... quá đắt... không ai có thể chi trả nổi...',
						thai: '...สันติภาพ...แพงเกินไป...ไม่มีใครจ่ายได้...',
						hindi: '...शांति... बहुत महंगी है... कोई इसे वहन नहीं कर सकता...'
					},
					emotion: 'sad',
					speaker: 'boss',
					type: 'speech'
				},
				{
					emotion: 'base',
					content: {
						korean: '(쓰러지며 모래가 흩어진다)',
						english: '(Sand scatters as they fall)',
						japanese: '（倒れながら砂が散る）',
						chinese: '（倒下时沙尘四散）',
						french: '(Le sable se disperse en tombant)',
						spanish: '(La arena se dispersa al caer)',
						vietnamese: '(Cát tung bay khi họ ngã xuống)',
						thai: '(ทรายกระจัดกระจายขณะล้มลง)',
						hindi: '(गिरते ही रेत बिखर जाती है)'
					},
					type: 'speech',
					speaker: 'narrator'
				},
				{
					content: {
						korean: '…끝났나?',
						english: '...Is it over?',
						japanese: '…終わったのか？',
						chinese: '…结束了吗？',
						french: "...C'est fini ?",
						spanish: '¿...Ha terminado?',
						vietnamese: '...Kết thúc rồi sao?',
						thai: '...จบแล้วเหรอ?',
						hindi: '...क्या यह खत्म हो गया?'
					},
					emotion: 'base',
					speaker: 'character_any',
					type: 'speech'
				},
				{
					content: {
						korean: '끝? 아니. 이제 시작이야.',
						english: 'Over? No. This is just the beginning.',
						japanese: '終わり？いや。これは始まりに過ぎない。',
						chinese: '结束？不。这只是开始。',
						french: "Fini ? Non. Ce n'est que le début.",
						spanish: '¿Terminado? No. Esto es solo el principio.',
						vietnamese: 'Kết thúc? Không. Đây chỉ là khởi đầu.',
						thai: 'จบแล้วเหรอ? ไม่ นี่เพิ่งจะเริ่มต้น',
						hindi: 'खत्म? नहीं। यह तो बस शुरुआत है।'
					},
					emotion: 'base',
					speaker: 'character_1',
					type: 'speech'
				},
				{
					duration_ms: 500,
					type: 'direction',
					spot: [3, 3],
					action: 'enter',
					speaker: 'Naira'
				},
				{
					content: {
						korean: '그래… 이젠… 정말 모르겠어…',
						english: "Yes... now... I really don't know...",
						japanese: 'そう…もう…本当にわからない…',
						chinese: '是啊…现在…我真的不知道了…',
						french: 'Oui... maintenant... je ne sais vraiment plus...',
						spanish: 'Sí... ahora... realmente no lo sé...',
						vietnamese: 'Phải rồi... bây giờ... ta thật sự không biết nữa...',
						thai: 'ใช่...ตอนนี้...ข้าไม่รู้จริงๆ...',
						hindi: 'हाँ... अब... मुझे सच में नहीं पता...'
					},
					emotion: 'sad',
					speaker: 'Naira',
					type: 'speech'
				},
				{
					emotion: 'base',
					content: {
						korean:
							'균형이 깨진 사막. 새로운 혼돈의 시대가 도래했다. 아니, 어쩌면 진정한 평화의 시작일지도.',
						english:
							"The desert's balance shattered. A new era of chaos has dawned. Or perhaps, the true beginning of peace.",
						japanese:
							'砂漠の均衡は崩れた。新たな混沌の時代が到来した。いや、あるいは真の平和の始まりなのかもしれない。',
						chinese: '沙漠的平衡被打破。一个新混乱时代已经到来。不，也许是真正和平的开始。',
						french:
							"L'équilibre du désert s'est brisé. Une nouvelle ère de chaos a commencé. Ou peut-être, le véritable début de la paix.",
						spanish:
							'El equilibrio del desierto se rompió. Una nueva era de caos ha amanecido. O quizás, el verdadero comienzo de la paz.',
						vietnamese:
							'Sự cân bằng của sa mạc đã tan vỡ. Một kỷ nguyên hỗn loạn mới đã đến. Hoặc có lẽ, là khởi đầu thực sự của hòa bình.',
						thai: 'สมดุลของทะเลทรายพังทลายลง ยุคใหม่แห่งความโกลาหลได้เริ่มขึ้น หรือบางที อาจเป็นจุดเริ่มต้นของสันติภาพที่แท้จริง',
						hindi:
							'रेगिस्तान का संतुलन टूट गया। अराजकता का एक नया युग आ गया है। या शायद, सच्ची शांति की शुरुआत।'
					},
					type: 'speech',
					speaker: 'narrator'
				}
			],
			lose_dialogue: [
				{
					speaker: 'narrator',
					type: 'speech',
					content: {
						korean: '모래의 망령이 다시 일어섰다.',
						english: 'The Specter of Sand has risen again.',
						japanese: '砂の亡霊が再び立ち上がった。',
						chinese: '沙之亡魂再次崛起。',
						french: "Le Spectre des Sables s'est relevé.",
						spanish: 'El Espectro de Arena ha resurgido.',
						vietnamese: 'Bóng ma Cát đã trỗi dậy.',
						thai: 'วิญญาณทรายได้ตื่นขึ้นอีกครั้ง',
						hindi: 'रेत का प्रेत फिर उठ खड़ा हुआ।'
					},
					emotion: 'base'
				},
				{
					speaker: 'boss',
					type: 'speech',
					content: {
						korean: '어리석은 자들. 평화는 너희에게 과분하다.',
						english: 'Fools. Peace is undeserved by you.',
						japanese: '愚か者め。お前たちに平和は過ぎたるものだ。',
						chinese: '愚蠢的家伙。和平对你们而言过于奢望。',
						french: 'Imbéciles. La paix vous est imméritée.',
						spanish: 'Necios. La paz es un lujo que no merecéis.',
						vietnamese: 'Lũ ngu ngốc. Hòa bình là quá mức với các ngươi.',
						thai: 'พวกโง่เขลา สันติภาพนั้นมากเกินไปสำหรับพวกเจ้า',
						hindi: 'मूर्खों। शांति तुम्हारे लिए अनावश्यक है।'
					},
					emotion: 'base'
				},
				{
					speaker: 'character_any',
					type: 'speech',
					content: {
						korean: '…아직 끝나지 않았어!',
						english: "...It's not over yet!",
						japanese: '…まだ終わってない！',
						chinese: '……还没结束！',
						french: "...Ce n'est pas encore fini !",
						spanish: '...¡Todavía no ha terminado!',
						vietnamese: '...Chưa kết thúc đâu!',
						thai: '...มันยังไม่จบ!',
						hindi: '...अभी खत्म नहीं हुआ!'
					},
					emotion: 'angry'
				},
				{
					type: 'speech',
					speaker: 'boss',
					emotion: 'base',
					content: {
						korean: '다시 도전해라. 언제든 받아주마. 너희의 분노가 나를 더 강하게 할 뿐.',
						english: 'Challenge me again. I will accept anytime. Your rage only makes me stronger.',
						japanese:
							'再び挑むがいい。いつでも受けて立とう。お前たちの怒りが私をより強くするだけだ。',
						chinese: '再来挑战吧。我随时奉陪。你们的愤怒只会让我更强大。',
						french:
							'Défiez-moi à nouveau. Je vous accepterai à tout moment. Votre rage ne fait que me rendre plus fort.',
						spanish:
							'Desafíame de nuevo. Os aceptaré en cualquier momento. Vuestra ira solo me hace más fuerte.',
						vietnamese:
							'Thử thách ta lần nữa. Ta sẽ chấp nhận bất cứ lúc nào. Sự phẫn nộ của các ngươi chỉ khiến ta mạnh hơn.',
						thai: 'ท้าทายข้าอีกครั้ง ข้าจะรับคำท้าเสมอ ความโกรธของพวกเจ้าเพียงแต่ทำให้ข้าแข็งแกร่งขึ้นเท่านั้น',
						hindi:
							'मुझे फिर से चुनौती दो। मैं कभी भी स्वीकार करूंगा। तुम्हारा क्रोध मुझे और मजबूत ही करेगा।'
					}
				}
			]
		}
	],
	prologue: {
		korean: [
			'모래폭풍이 몰아치는 사막. 끝나지 않는 갈등의 땅.',
			'모두가 평화를 원했지만, 누구도 얻지 못했다.',
			'숨겨진 손이 모든 것을 조종하고 있었다.',
			'마침내, 균형의 망령이 모습을 드러낸다.',
			'진실은 언제나 비극이다.'
		],
		english: [
			'Desert of raging sandstorms. A land of unending conflict.',
			'Everyone desired peace, but no one achieved it.',
			'A hidden hand manipulated everything.',
			'Finally, the specter of balance reveals itself.',
			'Truth is always a tragedy.'
		],
		japanese: [
			'砂嵐が吹き荒れる砂漠。終わりのない紛争の地。',
			'誰もが平和を望んだが、誰もそれを手に入れられなかった。',
			'隠された手がすべてを操っていた。',
			'ついに、均衡の亡霊がその姿を現す。',
			'真実は常に悲劇である。'
		],
		chinese: [
			'沙尘暴肆虐的沙漠。冲突不断的土地。',
			'所有人都渴望和平，但无人实现。',
			'一只隐藏的手操纵着一切。',
			'最终，平衡的幽灵显现了。',
			'真相总是悲剧。'
		],
		french: [
			'Désert de tempêtes de sable déchaînées. Une terre de conflits sans fin.',
			"Tous désiraient la paix, mais personne ne l'obtint.",
			'Une main cachée manipulait tout.',
			"Enfin, le spectre de l'équilibre se révèle.",
			'La vérité est toujours une tragédie.'
		],
		spanish: [
			'Desierto de tormentas de arena furiosas. Una tierra de conflicto interminable.',
			'Todos deseaban la paz, pero nadie la consiguió.',
			'Una mano oculta manipulaba todo.',
			'Finalmente, el espectro del equilibrio se revela.',
			'La verdad siempre es una tragedia.'
		],
		vietnamese: [
			'Sa mạc bão cát cuồng nộ. Vùng đất xung đột không ngừng.',
			'Mọi người đều khao khát hòa bình, nhưng không ai đạt được.',
			'Một bàn tay ẩn danh đã thao túng mọi thứ.',
			'Cuối cùng, bóng ma của sự cân bằng đã lộ diện.',
			'Sự thật luôn là một bi kịch.'
		],
		thai: [
			'ทะเลทรายแห่งพายุทรายโหมกระหน่ำ ดินแดนแห่งความขัดแย้งที่ไม่มีที่สิ้นสุด',
			'ทุกคนปรารถนาสันติภาพ แต่ไม่มีใครบรรลุได้',
			'มือที่ซ่อนอยู่บงการทุกสิ่ง',
			'ในที่สุด วิญญาณแห่งความสมดุลก็ปรากฏตัว',
			'ความจริงมักเป็นโศกนาฏกรรมเสมอ'
		],
		hindi: [
			'रेगिस्तानी रेत के तूफान। अंतहीन संघर्ष की भूमि।',
			'सभी शांति चाहते थे, पर किसी को नहीं मिली।',
			'एक छिपी हुई शक्ति सब कुछ नियंत्रित कर रही थी।',
			'अंत में, संतुलन का भूत प्रकट होता है।',
			'सच्चाई हमेशा एक त्रासदी होती है।'
		]
	}
} as const;
