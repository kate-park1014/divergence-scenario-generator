export const scenario_forest_echoes_of_desire_03 = {
	scenario_id: 'forest_echoes_of_desire_03',
	order: 3,
	act: 'rising',
	theme: 'forest',
	actors: {
		cedar: {
			id: 'mon_bd67c222-311e-4f31-b81f-931b14f6b5c6',
			name: {
				korean: '시더',
				english: 'Cedar',
				japanese: 'シダー',
				chinese: '雪松',
				french: 'Cèdre',
				spanish: 'Cedro',
				vietnamese: 'Tuyết tùng',
				thai: 'ซีดาร์',
				hindi: 'देवदार'
			},
			description: '',
			face_image_url:
				'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public',
			battle_sprite_url:
				'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public'
		}
	},
	boss: {
		pool_id: 'random_boss'
	},
	prologue: {
		korean: [
			'숲은 변했다. 돌아온 자들은 병들고, 남은 자들은 침묵했다.',
			'현자 시더는 말한다. 이 병은 육체의 것이 아니라고.',
			'숲의 거울은 이제 모두의 내면을 비춘다. 왜곡된 진실을.',
			'그리고 그 거울은, 또 다른 공포를 만들고 있었다.'
		],
		english: [
			'The forest changed. Those who returned fell ill; those who remained fell silent.',
			'Sage Cydar says this illness is not of the body.',
			"The forest's mirror now reflects everyone's inner self. Distorted truths.",
			'And that mirror was creating another terror.'
		],
		japanese: [
			'森は変わった。戻った者は病み、残った者は沈黙した。',
			'賢者シダーは言う。この病は肉体のものではないと。',
			'森の鏡は今、全ての者の内面を映す。歪んだ真実を。',
			'そしてその鏡は、また別の恐怖を生み出していた。'
		],
		chinese: [
			'森林变了。归来者病倒，留下者沉默。',
			'贤者西达尔说，这病症并非源于肉体。',
			'森林之镜如今映照着每个人的内心。扭曲的真相。',
			'而那面镜子，正在制造另一种恐惧。'
		],
		french: [
			'La forêt a changé. Ceux qui sont revenus sont tombés malades ; ceux qui sont restés ont gardé le silence.',
			"Le Sage Cydar dit que cette maladie n'est pas physique.",
			"Le miroir de la forêt reflète désormais l'âme de chacun. Des vérités déformées.",
			'Et ce miroir était en train de créer une autre terreur.'
		],
		spanish: [
			'El bosque cambió. Los que regresaron enfermaron; los que se quedaron, enmudecieron.',
			'El Sabio Cydar dice que esta enfermedad no es del cuerpo.',
			'El espejo del bosque ahora refleja el interior de todos. Verdades distorsionadas.',
			'Y ese espejo estaba creando otro terror.'
		],
		vietnamese: [
			'Rừng đã thay đổi. Những kẻ trở về mang bệnh, những kẻ ở lại thì im lặng.',
			'Hiền nhân Cydar nói rằng bệnh này không phải của thể xác.',
			'Gương của rừng giờ soi chiếu nội tâm của mọi người. Những sự thật méo mó.',
			'Và tấm gương đó đang tạo ra một nỗi kinh hoàng khác.'
		],
		thai: [
			'ป่าเปลี่ยนไป ผู้ที่กลับมาเจ็บป่วย ผู้ที่เหลืออยู่เงียบงัน',
			'ปราชญ์ไซดาร์กล่าวว่าอาการป่วยนี้ไม่เกี่ยวกับร่างกาย',
			'กระจกแห่งป่าบัดนี้สะท้อนจิตใจทุกคน ความจริงที่บิดเบือน',
			'และกระจกบานนั้นกำลังสร้างความหวาดกลัวอีกอย่างหนึ่ง'
		],
		hindi: [
			'जंगल बदल गया। लौटने वाले बीमार पड़ गए; बचे हुए खामोश हो गए।',
			'ऋषि सिडार कहते हैं, यह बीमारी शरीर की नहीं है।',
			'जंगल का दर्पण अब हर किसी के अंदरूनी स्व को दर्शाता है। विकृत सत्य।',
			'और वह दर्पण एक और आतंक पैदा कर रहा था।'
		]
	},
	rooms: [
		{
			dialogue: [
				{
					type: 'direction',
					speaker: 'cedar',
					duration_ms: 500,
					spot: [2, 3],
					action: 'enter'
				},
				{
					content: {
						korean: '이 병, 대체 언제쯤 낫는 거죠?',
						english: 'When will this illness finally heal?',
						japanese: 'この病、一体いつ治るんですか？',
						chinese: '这病，到底什么时候能好？',
						french: 'Quand cette maladie guérira-t-elle enfin ?',
						spanish: '¿Esta enfermedad, cuándo se curará por fin?',
						vietnamese: 'Bệnh này, rốt cuộc khi nào mới khỏi?',
						thai: 'โรคนี้จะหายเมื่อไหร่กันแน่?',
						hindi: 'यह बीमारी आखिर कब ठीक होगी?'
					},
					emotion: 'sad',
					speaker: 'character_any',
					type: 'speech'
				},
				{
					content: {
						korean: '육체의 문제는 아니야. 숲에서 돌아온 후 발병한 것 치고는… 너무나 영적이야.',
						english:
							"It's not a physical issue. For an illness that emerged after returning from the forest... it's far too spiritual.",
						japanese: '肉体の問題ではない。森から戻ってから発病したにしては… あまりにも霊的だ。',
						chinese: '这不是肉体的问题。对于从森林回来后才发病的症状来说……它太过于灵性了。',
						french:
							"Ce n'est pas un problème physique. Pour une maladie apparue après être revenu de la forêt… c'est bien trop spirituel.",
						spanish:
							'No es un problema físico. Para una enfermedad que apareció después de volver del bosque... es demasiado espiritual.',
						vietnamese:
							'Không phải là vấn đề thể xác. Đối với một căn bệnh phát tác sau khi trở về từ rừng… nó quá mức tâm linh.',
						thai: 'ไม่ใช่ปัญหาทางกาย สำหรับอาการป่วยที่เกิดขึ้นหลังจากกลับจากป่า… มันเป็นเรื่องจิตวิญญาณมากเกินไป',
						hindi:
							'यह शारीरिक समस्या नहीं है। जंगल से लौटने के बाद हुई बीमारी के लिए... यह बहुत ही आध्यात्मिक है।'
					},
					emotion: 'base',
					speaker: 'cedar',
					type: 'speech'
				},
				{
					content: {
						korean: '영적이라뇨?',
						english: 'Spiritual?',
						japanese: '霊的ですって？',
						chinese: '灵性？',
						french: 'Spirituel ?',
						spanish: '¿Espiritual?',
						vietnamese: 'Tâm linh sao?',
						thai: 'จิตวิญญาณ?',
						hindi: 'आध्यात्मिक?'
					},
					speaker: 'character_any',
					type: 'speech',
					emotion: 'base'
				},
				{
					content: {
						korean: '숲이 그들의 내면을 잠식했어. 후회, 갈망, 그리고 질투.',
						english:
							'The forest encroached upon their inner selves. Regret, longing, and jealousy.',
						japanese: '森が彼らの内面を蝕んだ。後悔、渇望、そして嫉妬。',
						chinese: '森林侵蚀了他们的内心。后悔、渴望，以及嫉妒。',
						french: 'La forêt a envahi leur être intérieur. Regret, désir, et jalousie.',
						spanish: 'El bosque invadió su interior. Arrepentimiento, anhelo y celos.',
						vietnamese: 'Rừng đã xâm chiếm nội tâm của họ. Hối tiếc, khao khát, và ghen tị.',
						thai: 'ป่าได้กัดกินจิตใจของพวกเขา ความเสียใจ ความปรารถนา และความอิจฉา',
						hindi: 'जंगल ने उनके अंदरूनी स्व को निगल लिया। पछतावा, लालसा और ईर्ष्या।'
					},
					emotion: 'sad',
					speaker: 'cedar',
					type: 'speech'
				}
			],
			id: 1
		},
		{
			dialogue: [
				{
					spot: [2, 3],
					duration_ms: 500,
					action: 'enter',
					type: 'direction',
					speaker: 'cedar'
				},
				{
					speaker: 'cedar',
					type: 'speech',
					emotion: 'base',
					content: {
						korean: '숲의 깊은 곳에서 들려오는 소리가 있어. 수많은 목소리가 섞인 웅얼거림.',
						english:
							"There's a sound coming from deep within the forest. A murmur of countless voices mixed together.",
						japanese: '森の深い所から音が聞こえる。数多くの声が混じり合ったつぶやきが。',
						chinese: '森林深处传来一个声音。无数声音混杂的低语。',
						french:
							'Un son vient des profondeurs de la forêt. Un murmure de nombreuses voix entremêlées.',
						spanish:
							'Hay un sonido que viene de lo más profundo del bosque. Un murmullo de innumerables voces mezcladas.',
						vietnamese:
							'Có một âm thanh vọng ra từ sâu thẳm trong rừng. Một tiếng lầm bầm của vô số giọng nói hòa lẫn vào nhau.',
						thai: 'มีเสียงหนึ่งดังมาจากส่วนลึกของป่า เสียงพึมพำที่ผสมผสานจากหลายเสียง',
						hindi: 'जंगल की गहराइयों से एक आवाज़ आ रही है। अनगिनत आवाज़ों का मिला-जुला बुदबुदाना।'
					}
				},
				{
					speaker: 'character_any',
					type: 'speech',
					emotion: 'base',
					content: {
						korean: '환청인가요?',
						english: 'Is it a hallucination?',
						japanese: '幻聴ですか？',
						chinese: '是幻听吗？',
						french: 'Est-ce une hallucination auditive ?',
						spanish: '¿Es una alucinación?',
						vietnamese: 'Là ảo thanh ư?',
						thai: 'เป็นภาพหลอนเหรอ?',
						hindi: 'क्या यह मतिभ्रम है?'
					}
				},
				{
					content: {
						korean: '아니, 숲이 말하는 방식이야. 그들의 욕망이 숲의 목소리가 된 거지.',
						english: "No, it's how the forest speaks. Their desires became its voice.",
						japanese: '違う。森が語るやり方だ。彼らの欲望が、森の声になったのだ。',
						chinese: '不，那是森林说话的方式。他们的欲望成为了森林的声音。',
						french: "Non, c'est ainsi que la forêt parle. Leurs désirs sont devenus sa voix.",
						spanish:
							'No, es la forma en que el bosque habla. Sus deseos se convirtieron en su voz.',
						vietnamese:
							'Không, đó là cách rừng nói. Khát khao của họ đã trở thành tiếng nói của rừng.',
						thai: 'ไม่ใช่ นั่นคือวิธีที่ป่าพูด ความปรารถนาของพวกเขาได้กลายเป็นเสียงของป่า',
						hindi: 'नहीं, यह जंगल का बोलने का तरीका है। उनकी इच्छाएँ जंगल की आवाज़ बन गईं।'
					},
					speaker: 'cedar',
					type: 'speech',
					emotion: 'base'
				},
				{
					content: {
						korean: '욕망…',
						english: 'Desire…',
						japanese: '欲望…',
						chinese: '欲望…',
						french: 'Désir…',
						spanish: 'Deseo…',
						vietnamese: 'Khát khao…',
						thai: 'ความปรารถนา…',
						hindi: 'इच्छा…'
					},
					speaker: 'character_any',
					type: 'speech',
					emotion: 'sad'
				},
				{
					speaker: 'cedar',
					type: 'speech',
					emotion: 'base',
					content: {
						korean: "숲은 이제 '선택의 거울'이야. 네 안의 가장 깊은 것을 비추지.",
						english:
							"The forest is now the 'Mirror of Choices'. It reflects what's deepest within you.",
						japanese: '森は今や「選択の鏡」だ。お前の内にある最も深いものを映し出す。',
						chinese: '森林现在是‘选择之镜’。它映照出你内心最深处的东西。',
						french:
							"La forêt est maintenant le 'Miroir des Choix'. Elle reflète ce qu'il y a de plus profond en toi.",
						spanish:
							"El bosque es ahora el 'Espejo de las Elecciones'. Refleja lo más profundo de ti.",
						vietnamese:
							"Rừng giờ là 'Gương Lựa Chọn'. Nó phản chiếu điều sâu thẳm nhất trong ngươi.",
						thai: "ป่าตอนนี้คือ 'กระจกแห่งการเลือก' มันสะท้อนสิ่งที่ลึกที่สุดในตัวเจ้า",
						hindi: "जंगल अब 'विकल्पों का दर्पण' है। यह तुम्हारे भीतर सबसे गहरे को दर्शाता है।"
					}
				}
			],
			id: 3
		},
		{
			dialogue: [
				{
					type: 'direction',
					speaker: 'cedar',
					action: 'enter',
					spot: [2, 3],
					duration_ms: 500
				},
				{
					content: {
						korean:
							'특정 지역에선 사람들의 모습이 왜곡되어 보여. 때로는 타인의 모습으로 비치기도 하고.',
						english:
							"In certain areas, people's forms appear distorted. Sometimes, they even reflect as others.",
						japanese:
							'特定の地域では、人々の姿が歪んで見える。時には、他人の姿として映ることもある。',
						chinese: '在某些区域，人们的形象会扭曲。有时，甚至会映照出他人的模样。',
						french:
							"Dans certaines zones, l'apparence des gens est déformée. Parfois, ils reflètent même l'image d'autres personnes.",
						spanish:
							'En ciertas zonas, las formas de las personas se ven distorsionadas. A veces, incluso se reflejan como otros.',
						vietnamese:
							'Ở một số vùng, hình dạng người ta bị méo mó. Đôi khi, còn phản chiếu thành hình bóng của người khác.',
						thai: 'ในบางพื้นที่ รูปร่างของผู้คนบิดเบี้ยว บางครั้งสะท้อนเป็นภาพของผู้อื่นด้วยซ้ำ',
						hindi:
							'कुछ क्षेत्रों में, लोगों के रूप विकृत दिखते हैं। कभी-कभी, वे दूसरों के रूप में भी दिखाई देते हैं।'
					},
					speaker: 'cedar',
					type: 'speech',
					emotion: 'sad'
				},
				{
					content: {
						korean: '거울처럼…',
						english: 'Like a mirror…',
						japanese: '鏡のように…',
						chinese: '像镜子一样…',
						french: 'Comme un miroir…',
						spanish: 'Como un espejo…',
						vietnamese: 'Như một tấm gương…',
						thai: 'เหมือนกระจก…',
						hindi: 'दर्पण की तरह…'
					},
					speaker: 'character_any',
					type: 'speech',
					emotion: 'base'
				},
				{
					emotion: 'base',
					speaker: 'cedar',
					type: 'speech',
					content: {
						korean:
							'맞아. 병든 자들 주변에서 아름답지만 스산한 환영 꽃이 피어나. 그건 그들의 갈망이 현실로 나타나는 증거야.',
						english:
							"Exactly. Around the afflicted, beautiful yet eerie phantom flowers bloom. They're proof their yearning is manifesting.",
						japanese:
							'そうだ。病んだ者たちの周りには、美しくも不気味な幻影の花が咲き誇る。それは彼らの渇望が現実となった証なのだ。',
						chinese: '没错。在病患周围，会开出美丽却诡异的幻影之花。那是他们渴望化为现实的证据。',
						french:
							"Exactement. Autour des affligés, de belles mais étranges fleurs fantômes éclosent. C'est la preuve que leurs désirs se manifestent.",
						spanish:
							'Exacto. Alrededor de los afligidos, florecen hermosas pero inquietantes flores fantasma. Son la prueba de que su anhelo se está manifestando.',
						vietnamese:
							'Đúng vậy. Xung quanh những kẻ bệnh tật, những đóa hoa ảo ảnh đẹp nhưng rùng rợn nở rộ. Đó là bằng chứng cho sự khao khát của họ đang hiện thực hóa.',
						thai: 'ถูกต้อง รอบๆ ผู้ป่วย ดอกไม้มายาที่สวยงามแต่ชวนขนลุกจะผลิบาน นั่นคือหลักฐานว่าความปรารถนาของพวกเขาได้สำแดงออกมาแล้ว',
						hindi:
							'सही है। पीड़ित लोगों के आस-पास, सुंदर लेकिन डरावने प्रेत फूल खिलते हैं। वे इस बात का सबूत हैं कि उनकी लालसा प्रकट हो रही है।'
					}
				},
				{
					content: {
						korean: '그럼 이 병은… 우리가 자초한 건가요?',
						english: 'Then this illness… did we bring it upon ourselves?',
						japanese: 'では、この病は…私たちが招いたものなのですか？',
						chinese: '那么这种病……是我们自作自受的吗？',
						french: "Alors cette maladie… est-ce nous qui l'avons provoquée ?",
						spanish: 'Entonces esta enfermedad… ¿la causamos nosotros mismos?',
						vietnamese: 'Vậy căn bệnh này… là do chúng ta tự chuốc lấy sao?',
						thai: 'ถ้าอย่างนั้น โรคนี้… พวกเราเป็นคนก่อขึ้นเองเหรอ?',
						hindi: 'तो यह बीमारी… क्या हमने खुद बुलाई है?'
					},
					speaker: 'character_any',
					type: 'speech',
					emotion: 'sad'
				},
				{
					emotion: 'angry',
					speaker: 'cedar',
					type: 'speech',
					content: {
						korean: '숲은 그저 비출 뿐. 선택은 너희의 몫이었다. 후회와 질투가 숲을 병들게 했어.',
						english:
							'The forest merely reflects. The choice was yours. Regret and jealousy sickened the forest.',
						japanese:
							'森はただ映し出すだけだ。選択はお前たちのものだった。後悔と嫉妬が森を病ませたのだ。',
						chinese: '森林只是映照。选择权在你们。后悔和嫉妒使森林病倒了。',
						french:
							'La forêt ne fait que refléter. Le choix vous appartenait. Le regret et la jalousie ont rendu la forêt malade.',
						spanish:
							'El bosque solo refleja. La elección fue vuestra. El arrepentimiento y los celos enfermaron al bosque.',
						vietnamese:
							'Rừng chỉ phản chiếu. Lựa chọn là của các ngươi. Hối tiếc và ghen tị đã làm cho rừng bệnh.',
						thai: 'ป่าเพียงแค่สะท้อน การเลือกเป็นของพวกเจ้าเอง ความเสียใจและความอิจฉาริษยาทำให้ป่าป่วย',
						hindi:
							'जंगल तो बस दर्शाता है। चुनाव तुम्हारा था। पछतावे और ईर्ष्या ने जंगल को बीमार कर दिया।'
					}
				}
			],
			id: 5
		},
		{
			id: 9,
			dialogue: [
				{
					type: 'direction',
					speaker: 'cedar',
					action: 'enter',
					spot: [2, 3],
					duration_ms: 500
				},
				{
					speaker: 'cedar',
					type: 'speech',
					emotion: 'angry',
					content: {
						korean:
							'이제 돌이킬 수 없어. 거울은 이미 균열이 생겼고, 숲은 모든 것을 빨아들일 준비를 하고 있어.',
						english:
							"It's irreversible now. The mirror is already cracked, and the forest is ready to devour everything.",
						japanese:
							'もう後戻りはできない。鏡には既に亀裂が入り、森はすべてを吸い込む準備をしている。',
						chinese: '现在已无法挽回。镜子已经开裂，森林正准备吞噬一切。',
						french:
							"C'est irréversible maintenant. Le miroir est déjà fissuré, et la forêt est prête à tout engloutir.",
						spanish:
							'Ya es irreversible. El espejo ya está agrietado, y el bosque está listo para absorberlo todo.',
						vietnamese:
							'Giờ không thể quay lại được nữa. Gương đã nứt, và rừng đang chuẩn bị nuốt chửng mọi thứ.',
						thai: 'ตอนนี้มันแก้ไขไม่ได้แล้ว กระจกแตกแล้ว และป่าก็พร้อมที่จะกลืนกินทุกสิ่ง',
						hindi:
							'अब यह अपरिवर्तनीय है। दर्पण पहले ही टूट चुका है, और जंगल सब कुछ निगलने के लिए तैयार है।'
					}
				},
				{
					content: {
						korean: '막을 방법은요?',
						english: 'How can we stop it?',
						japanese: '止める方法は？',
						chinese: '有什么办法阻止吗？',
						french: "Comment l'arrêter ?",
						spanish: '¿Cómo podemos detenerlo?',
						vietnamese: 'Có cách nào ngăn chặn không?',
						thai: 'มีวิธีหยุดมันไหม?',
						hindi: 'इसे रोकने का कोई तरीका?'
					},
					speaker: 'character_any',
					type: 'speech',
					emotion: 'base'
				},
				{
					content: {
						korean:
							'숲의 영혼을 정화해야 해. 이 왜곡된 거울을 깨뜨리지 않으면, 모두가 자기 안의 악마를 보게 될 거야.',
						english:
							"We must purify the forest's soul. If we don't shatter this warped mirror, everyone will see the demons within themselves.",
						japanese:
							'森の魂を浄化しなければならない。この歪んだ鏡を壊さなければ、皆が自分の中の悪魔を見ることになるだろう。',
						chinese:
							'我们必须净化森林的灵魂。如果不打破这面扭曲的镜子，所有人都会看到自己内心的恶魔。',
						french:
							"Nous devons purifier l'âme de la forêt. Si nous ne brisons pas ce miroir déformé, chacun verra les démons en lui-même.",
						spanish:
							'Debemos purificar el alma del bosque. Si no rompemos este espejo distorsionado, todos verán los demonios dentro de sí mismos.',
						vietnamese:
							'Chúng ta phải thanh tẩy linh hồn khu rừng. Nếu không phá vỡ tấm gương méo mó này, mọi người sẽ thấy ác quỷ trong chính mình.',
						thai: 'เราต้องชำระล้างจิตวิญญาณของป่า ถ้าเราไม่ทำลายกระจกบิดเบี้ยวนี้ ทุกคนจะได้เห็นปีศาจในตัวพวกเขาเอง',
						hindi:
							'हमें जंगल की आत्मा को शुद्ध करना होगा। यदि हम इस विकृत दर्पण को नहीं तोड़ते हैं, तो हर कोई अपने भीतर के राक्षसों को देखेगा।'
					},
					speaker: 'cedar',
					type: 'speech',
					emotion: 'sad'
				},
				{
					speaker: 'character_any',
					type: 'speech',
					emotion: 'sad',
					content: {
						korean: '악마…',
						english: 'Demons...',
						japanese: '悪魔…',
						chinese: '恶魔…',
						french: 'Démons...',
						spanish: 'Demonios...',
						vietnamese: 'Ác quỷ...',
						thai: 'ปีศาจ...',
						hindi: 'राक्षस...'
					}
				},
				{
					speaker: 'cedar',
					type: 'speech',
					emotion: 'base',
					content: {
						korean: '숲의 진짜 공포는, 네가 누구인지 잊게 만드는 거야.',
						english: "The forest's true horror is making you forget who you are.",
						japanese: '森の本当の恐怖は、君が誰であるかを忘れさせることだ。',
						chinese: '森林真正的恐怖是让你忘记自己是谁。',
						french: 'La vraie terreur de la forêt est de te faire oublier qui tu es.',
						spanish: 'El verdadero horror del bosque es hacerte olvidar quién eres.',
						vietnamese: 'Nỗi kinh hoàng thực sự của khu rừng là khiến ngươi quên mất mình là ai.',
						thai: 'ความน่าสะพรึงกลัวที่แท้จริงของป่าคือการทำให้เจ้าลืมว่าเจ้าเป็นใคร',
						hindi: 'जंगल का असली डर तुम्हें यह भूल जाना है कि तुम कौन हो।'
					}
				}
			]
		},
		{
			id: 15,
			dialogue: [
				{
					type: 'direction',
					speaker: 'cedar',
					duration_ms: 500,
					spot: [4, 3],
					action: 'enter'
				},
				{
					emotion: 'angry',
					speaker: 'cedar',
					type: 'speech',
					content: {
						korean: '조심해. 저건 단순한 괴물이 아니야. 숲의 왜곡된 욕망이 형상화된 존재다.',
						english:
							"Be careful. That's no mere monster. It's the materialized form of the forest's distorted desires.",
						japanese: '気をつけろ。あれは単なる怪物ではない。森の歪んだ欲望が具現化した存在だ。',
						chinese: '小心。那不仅仅是怪物。它是森林扭曲欲望的具象化。',
						french:
							"Attention. Ce n'est pas un simple monstre. C'est la forme matérialisée des désirs déformés de la forêt.",
						spanish:
							'Ten cuidado. Eso no es un simple monstruo. Es la forma materializada de los deseos distorsionados del bosque.',
						vietnamese:
							'Cẩn thận. Đó không phải là một con quái vật đơn thuần. Đó là hiện thân của những ham muốn méo mó của khu rừng.',
						thai: 'ระวังให้ดี นั่นไม่ใช่แค่สัตว์ประหลาดธรรมดา มันคือรูปธรรมของความปรารถนาที่บิดเบี้ยวของป่า',
						hindi:
							'सावधान रहो। वह सिर्फ एक राक्षस नहीं है। यह जंगल की विकृत इच्छाओं का मूर्त रूप है।'
					}
				},
				{
					speaker: 'boss',
					type: 'speech',
					emotion: 'base',
					content: {
						korean: '드디어 왔구나. 내 거울 속에 갇힐 자들아.',
						english: "You're finally here. Those who will be trapped in my mirror.",
						japanese: 'ついに来たか。私の鏡に囚われる者たちよ。',
						chinese: '你们终于来了。那些将被困在我镜子里的人。',
						french: 'Vous êtes enfin là. Ceux qui seront piégés dans mon miroir.',
						spanish: 'Finalmente están aquí. Aquellos que serán atrapados en mi espejo.',
						vietnamese:
							'Cuối cùng các ngươi cũng đến rồi. Những kẻ sẽ bị giam cầm trong gương của ta.',
						thai: 'ในที่สุดเจ้าก็มาแล้ว ผู้ที่จะถูกขังอยู่ในกระจกของข้า',
						hindi: 'आखिरकार तुम आ गए। वे जो मेरे दर्पण में फंस जाएंगे।'
					}
				},
				{
					emotion: 'base',
					speaker: 'boss',
					type: 'speech',
					content: {
						korean: '너희 안의 후회, 질투, 갈망이 곧 너희를 집어삼킬 것이다.',
						english: 'The regret, jealousy, and yearning within you will soon consume you.',
						japanese: 'お前たちの心の中の後悔、嫉妬、渇望が、すぐにお前たちを飲み込むだろう。',
						chinese: '你们内心的悔恨、嫉妒和渴望很快就会吞噬你们。',
						french: 'Le regret, la jalousie et le désir en vous vous consumeront bientôt.',
						spanish:
							'El arrepentimiento, la envidia y el anhelo dentro de ustedes pronto los consumirán.',
						vietnamese:
							'Sự hối tiếc, ghen tị và khao khát trong các ngươi sẽ sớm nuốt chửng các ngươi.',
						thai: 'ความเสียใจ ความริษยา และความปรารถนาในตัวพวกเจ้าจะกลืนกินพวกเจ้าในไม่ช้า',
						hindi: 'तुम्हारे अंदर का पछतावा, ईर्ष्या और लालसा जल्द ही तुम्हें निगल जाएगी।'
					}
				},
				{
					content: {
						korean: '웃기지 마! 난 내 자신을 잃지 않아!',
						english: "Don't make me laugh! I won't lose myself!",
						japanese: '笑わせるな！私は自分を見失わない！',
						chinese: '别逗了！我不会迷失自我！',
						french: 'Ne me fais pas rire ! Je ne me perdrai pas !',
						spanish: '¡No me hagas reír! ¡No me perderé a mí mismo!',
						vietnamese: 'Đừng đùa! Ta sẽ không đánh mất chính mình!',
						thai: 'อย่ามาหัวเราะ! ข้าจะไม่เสียตัวเอง!',
						hindi: 'मुझे हंसाओ मत! मैं खुद को नहीं खोऊंगा!'
					},
					speaker: 'character_any',
					type: 'speech',
					emotion: 'angry'
				},
				{
					speaker: 'boss',
					type: 'speech',
					emotion: 'base',
					content: {
						korean: '과연 그럴까? 네 그림자는 이미 다른 얼굴을 하고 있는데.',
						english: 'Is that so? Your shadow already wears a different face.',
						japanese: '本当にそうかな？君の影はすでに別の顔をしているが。',
						chinese: '果真如此吗？你的影子已经换了一副面孔。',
						french: 'Vraiment ? Ton ombre a déjà un autre visage.',
						spanish: '¿De verdad? Tu sombra ya tiene otra cara.',
						vietnamese: 'Thật vậy sao? Bóng của ngươi đã mang một khuôn mặt khác rồi.',
						thai: 'จริงหรือ? เงาของเจ้ากำลังมีใบหน้าอื่นอยู่แล้วนะ',
						hindi: 'क्या ऐसा है? तुम्हारी परछाई पहले से ही एक अलग चेहरा लिए हुए है।'
					}
				}
			],
			lose_dialogue: [
				{
					emotion: 'base',
					speaker: 'boss',
					type: 'speech',
					content: {
						korean: '약한 자들이여. 너희는 스스로를 마주할 용기조차 없구나.',
						english: 'Weaklings. You lack even the courage to face yourselves.',
						japanese: '弱き者たちよ。お前たちは自分自身と向き合う勇気さえ持たぬのか。',
						chinese: '弱者们。你们甚至没有勇气面对自己。',
						french: "Faibles. Vous n'avez même pas le courage de vous regarder en face.",
						spanish: 'Débiles. Ni siquiera tenéis el valor de enfrentaros a vosotros mismos.',
						vietnamese:
							'Những kẻ yếu đuối. Ngươi thậm chí không có dũng khí đối mặt với chính mình.',
						thai: 'พวกอ่อนแอเอ๋ย พวกเจ้าไม่มีแม้แต่ความกล้าที่จะเผชิญหน้ากับตัวเอง',
						hindi: 'कमजोरों। तुममें तो खुद का सामना करने की भी हिम्मत नहीं है।'
					}
				},
				{
					emotion: 'angry',
					speaker: 'character_any',
					type: 'speech',
					content: {
						korean: '…다시 일어설 거야.',
						english: "...I'll rise again.",
						japanese: '…また立ち上がるさ。',
						chinese: '……我会再次站起来的。',
						french: '...Je me relèverai.',
						spanish: '...Me levantaré de nuevo.',
						vietnamese: '...Tôi sẽ đứng dậy lần nữa.',
						thai: '...ฉันจะลุกขึ้นใหม่',
						hindi: '...मैं फिर उठूँगा।'
					}
				},
				{
					emotion: 'base',
					speaker: 'boss',
					type: 'speech',
					content: {
						korean: '그래봤자, 네 안의 거울은 더 깊은 절망을 비출 뿐이다.',
						english: "It's no use. The mirror within you will only reflect deeper despair.",
						japanese: '無駄だ。お前の中の鏡は、より深い絶望を映し出すだけだ。',
						chinese: '没用的。你心中的镜子只会映照出更深的绝望。',
						french: "C'est inutile. Le miroir en toi ne reflétera qu'un désespoir plus profond.",
						spanish:
							'Es inútil. El espejo dentro de ti solo reflejará una desesperación más profunda.',
						vietnamese:
							'Vô ích thôi. Gương trong ngươi sẽ chỉ phản chiếu tuyệt vọng sâu hơn mà thôi.',
						thai: 'ก็เท่านั้นแหละ กระจกในตัวเจ้าจะสะท้อนแต่ความสิ้นหวังที่ลึกซึ้งกว่าเดิมเท่านั้น',
						hindi: 'कोई फायदा नहीं। तुम्हारे भीतर का दर्पण केवल गहरे निराशा को ही दर्शाएगा।'
					}
				}
			],
			win_dialogue: [
				{
					speaker: 'boss',
					type: 'speech',
					emotion: 'sad',
					content: {
						korean: '…결국 거울을 깨뜨리는구나. 하지만 너희 안의 그림자는… 사라지지 않아.',
						english:
							'...So you break the mirror after all. But the shadow within you... will not disappear.',
						japanese: '…結局、鏡を壊すのか。だが、お前たちの心の中の影は…消えないだろう。',
						chinese: '……终究还是打破了镜子。但你们内心的影子……不会消失。',
						french:
							"...Vous brisez le miroir après tout. Mais l'ombre en vous... ne disparaîtra pas.",
						spanish:
							'...Al final rompes el espejo. Pero la sombra dentro de ustedes... no desaparecerá.',
						vietnamese:
							'...Cuối cùng các ngươi cũng phá vỡ tấm gương. Nhưng cái bóng trong các ngươi... sẽ không biến mất.',
						thai: '...ในที่สุดเจ้าก็ทำลายกระจกจนได้ แต่เงาในตัวพวกเจ้า... จะไม่หายไป',
						hindi:
							'...आखिरकार तुम दर्पण तोड़ देते हो। लेकिन तुम्हारे अंदर की परछाई... गायब नहीं होगी।'
					}
				},
				{
					content: {
						korean: '…무슨 소리야.',
						english: '...What do you mean?',
						japanese: '…どういうことだ。',
						chinese: '……什么意思。',
						french: '...Que veux-tu dire ?',
						spanish: '...¿Qué quieres decir?',
						vietnamese: '...Ý ngươi là gì.',
						thai: '...หมายความว่าอะไร',
						hindi: '...तुम्हारा क्या मतलब है।'
					},
					speaker: 'character_any',
					type: 'speech',
					emotion: 'base'
				},
				{
					action: 'enter',
					duration_ms: 500,
					spot: [4, 3],
					type: 'direction',
					speaker: 'cedar'
				},
				{
					emotion: 'sad',
					speaker: 'cedar',
					type: 'speech',
					content: {
						korean: '숲의 그림자는 깊어. 한 번 생긴 균열은 쉽게 아물지 않아.',
						english: "The forest's shadows run deep. A crack once formed does not easily heal.",
						japanese: '森の影は深く、一度できた亀裂は容易には癒えない。',
						chinese: '森林的阴影很深。一旦形成裂痕，便难以愈合。',
						french:
							'Les ombres de la forêt sont profondes. Une fissure, une fois formée, ne se referme pas facilement.',
						spanish:
							'Las sombras del bosque son profundas. Una grieta, una vez abierta, no cicatriza fácilmente.',
						vietnamese: 'Bóng tối rừng sâu thẳm. Vết nứt một khi đã hình thành, khó lòng lành lại.',
						thai: 'เงามืดของป่าลึกซึ้ง รอยร้าวที่เกิดขึ้นแล้วไม่สมานง่ายๆ',
						hindi: 'वन की छायाएँ गहरी हैं। एक बार बनी दरार आसानी से नहीं भरती।'
					}
				},
				{
					emotion: 'base',
					speaker: 'narrator',
					type: 'speech',
					content: {
						korean:
							'숲의 왜곡된 거울은 잠시 멈췄다. 그러나 그 안에서 비춰진 진실은, 모두의 마음에 새로운 균열을 남겼다. 아직 끝나지 않았다.',
						english:
							"The forest's twisted mirror paused. Yet the truth it reflected left new cracks in every heart. It's not over yet.",
						japanese:
							'森の歪んだ鏡は一時停止した。しかし、その中に映し出された真実は、皆の心に新たな亀裂を残した。まだ終わってはいない。',
						chinese:
							'森林扭曲的镜子暂时停滞了。然而，其中映照出的真相，在每个人的心中留下了新的裂痕。一切尚未结束。',
						french:
							"Le miroir tordu de la forêt s'est figé un instant. Pourtant, la vérité qu'il reflétait a laissé de nouvelles fissures dans tous les cœurs. Ce n'est pas encore fini.",
						spanish:
							'El espejo distorsionado del bosque se detuvo un momento. Sin embargo, la verdad que reflejó dejó nuevas grietas en cada corazón. Todavía no ha terminado.',
						vietnamese:
							'Gương méo mó của rừng tạm dừng. Nhưng sự thật phản chiếu trong đó đã để lại những vết nứt mới trong mọi trái tim. Vẫn chưa kết thúc.',
						thai: 'กระจกบิดเบี้ยวของป่าหยุดชะงักชั่วครู่ ทว่าความจริงที่สะท้อนออกมา ได้ทิ้งรอยร้าวใหม่ไว้ในทุกดวงใจ ยังไม่จบลง',
						hindi:
							'वन का विकृत दर्पण थम गया। फिर भी, उसने जो सत्य प्रतिबिंबित किया, उसने हर हृदय में नई दरारें छोड़ दीं। यह अभी खत्म नहीं हुआ है।'
					}
				}
			]
		}
	]
} as const;
