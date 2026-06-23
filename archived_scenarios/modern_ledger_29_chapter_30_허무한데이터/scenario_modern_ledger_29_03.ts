export const scenario_modern_ledger_29_03 = {
	"scenario_id": "modern_ledger_29_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"ren": {
			"id": "mon_ff398cb9-43e1-44ff-acbe-3d45a3bc6997",
			"name": {
				"korean": "렌",
				"english": "Ren",
				"japanese": "レン",
				"chinese": "仁",
				"french": "Ren",
				"spanish": "Ren",
				"vietnamese": "Ren",
				"thai": "เร็น",
				"hindi": "रेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/147a5f29-8f8d-4531-cc9b-f86c9f45f000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d88aa7-877f-43e6-919b-ee77e6c58e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시의 모든 기억이 잠든 곳.",
			"디지털 기록 보관소. 진실은 데이터 조각 속에 갇혔다.",
			"길잡이 렌. 하지만 그도 두려워하는 구역이 있었다.",
			"이곳에서 우리는 무엇을 마주하게 될까?"
		],
		"english": [
			"Where all the city's memories sleep.",
			"Digital archives. Truth trapped in data fragments.",
			"Len, the guide. But even he had areas he feared.",
			"What will we face here?"
		],
		"japanese": [
			"都市のあらゆる記憶が眠る場所。",
			"デジタル記録保管所。真実はデータの中に囚われた。",
			"案内人レン。しかし彼も恐れる区域があった。",
			"ここで、私たちは何に直面するのだろう？"
		],
		"chinese": [
			"城市所有记忆沉睡之地。",
			"数字档案馆。真相被困在数据碎片中。",
			"向导伦。但他也有恐惧的区域。",
			"我们将在这里面对什么？"
		],
		"french": [
			"Là où dorment tous les souvenirs de la ville.",
			"Archives numériques. La vérité piégée dans des fragments de données.",
			"Len, le guide. Mais même lui avait des zones qu'il craignait.",
			"Qu'allons-nous affronter ici ?"
		],
		"spanish": [
			"Donde duermen todos los recuerdos de la ciudad.",
			"Archivos digitales. La verdad atrapada en fragmentos de datos.",
			"Len, el guía. Pero incluso él temía ciertas zonas.",
			"Aquí, ¿qué enfrentaremos?"
		],
		"vietnamese": [
			"Nơi mọi ký ức của thành phố an nghỉ.",
			"Kho lưu trữ kỹ thuật số. Sự thật bị mắc kẹt trong các mảnh dữ liệu.",
			"Len, người dẫn đường. Nhưng ngay cả anh ta cũng có những khu vực mình sợ hãi.",
			"Chúng ta sẽ đối mặt với điều gì ở đây?"
		],
		"thai": [
			"ที่ซึ่งความทรงจำทั้งหมดของเมืองหลับใหล",
			"หอจดหมายเหตุดิจิทัล ความจริงถูกขังอยู่ในชิ้นส่วนข้อมูล",
			"เลน ผู้นำทาง แต่แม้แต่เขาก็ยังมีพื้นที่ที่เขากลัว",
			"เราจะต้องเผชิญหน้ากับอะไรที่นี่?"
		],
		"hindi": [
			"जहाँ शहर की सभी यादें सोती हैं।",
			"डिजिटल अभिलेखागार। सच डेटा के टुकड़ों में फँसा है।",
			"लेन, मार्गदर्शक। लेकिन उसे भी कुछ इलाकों से डर लगता था।",
			"यहाँ हम क्या सामना करेंगे?"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "회랑에서 얻은 단서. 도시의 모든 기억이 이곳에 잠들어있다.",
						"english": "Clues from the corridor. All the city's memories sleep here.",
						"japanese": "回廊で得た手がかり。都市のあらゆる記憶がここに眠っている。",
						"chinese": "从走廊获得的线索。城市所有的记忆都沉睡在这里。",
						"french": "Indices du couloir. Tous les souvenirs de la ville dorment ici.",
						"spanish": "Pistas del pasillo. Todos los recuerdos de la ciudad duermen aquí.",
						"vietnamese": "Manh mối từ hành lang. Mọi ký ức của thành phố đều ngủ yên ở đây.",
						"thai": "เบาะแสจากโถงทางเดิน ความทรงจำทั้งหมดของเมืองหลับใหลอยู่ที่นี่",
						"hindi": "गलियारे से मिले सुराग। शहर की सभी यादें यहाँ सोती हैं।"
					}
				},
				{
					"content": {
						"korean": "여기가… 기록 보관소?",
						"english": "Is this... the archives?",
						"japanese": "ここが…記録保管所？",
						"chinese": "这里是…档案馆吗？",
						"french": "C'est... les archives ?",
						"spanish": "¿Esto es... el archivo?",
						"vietnamese": "Đây là... kho lưu trữ?",
						"thai": "นี่คือ...หอจดหมายเหตุ?",
						"hindi": "क्या यह... अभिलेखागार है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ren",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "그래. 하지만 모든 진실이 기록된 건 아니야. 아니, 어쩌면 진실이란 처음부터 없었는지도.",
						"english": "Yes. But not all truths are recorded. Or perhaps, truth never existed from the start.",
						"japanese": "そうだ。だが、すべての真実が記録されているわけではない。いや、もしかしたら真実なんて最初から存在しなかったのかもしれない。",
						"chinese": "是的。但并非所有真相都被记录。或者，也许真相从一开始就不存在。",
						"french": "Oui. Mais toutes les vérités ne sont pas enregistrées. Ou peut-être, la vérité n'a jamais existé dès le début.",
						"spanish": "Sí. Pero no todas las verdades están registradas. O quizás, la verdad nunca existió desde el principio.",
						"vietnamese": "Đúng vậy. Nhưng không phải tất cả sự thật đều được ghi lại. Hoặc có lẽ, sự thật chưa bao giờ tồn tại ngay từ đầu.",
						"thai": "ใช่ แต่ไม่ใช่ทุกความจริงที่ถูกบันทึกไว้ หรือบางที ความจริงอาจไม่เคยมีอยู่ตั้งแต่แรก",
						"hindi": "हाँ। लेकिन सभी सच दर्ज नहीं हैं। या शायद, सच शुरू से ही नहीं था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ren"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "안으로 들어가야 해. 진실을 찾아야 하니까.",
						"english": "We have to go inside. To find the truth.",
						"japanese": "中に入らないと。真実を見つけなければならないから。",
						"chinese": "我们必须进去。因为要找到真相。",
						"french": "Nous devons entrer. Pour trouver la vérité.",
						"spanish": "Tenemos que entrar. Para encontrar la verdad.",
						"vietnamese": "Chúng ta phải vào trong. Để tìm sự thật.",
						"thai": "เราต้องเข้าไปข้างใน เพื่อค้นหาความจริง",
						"hindi": "हमें अंदर जाना होगा। सच ढूँढना है।"
					}
				},
				{
					"speaker": "ren",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…어쩔 수 없군. 하지만 조심해. 시스템의 눈은 언제나 우릴 보고 있으니까.",
						"english": "...No choice then. But be careful. The system's eyes are always watching us.",
						"japanese": "…仕方ない。だが、気をつけろ。システムの目は常に我々を見ているからな。",
						"chinese": "…没办法了。但要小心。系统的眼睛总是在监视我们。",
						"french": "...Pas le choix alors. Mais sois prudent. Les yeux du système nous observent toujours.",
						"spanish": "...No hay otra opción. Pero ten cuidado. Los ojos del sistema siempre nos están observando.",
						"vietnamese": "...Không còn lựa chọn nào khác. Nhưng hãy cẩn thận. Mắt của hệ thống luôn theo dõi chúng ta.",
						"thai": "...ไม่มีทางเลือกแล้ว แต่จงระวัง ดวงตาของระบบเฝ้ามองเราอยู่เสมอ",
						"hindi": "...कोई और रास्ता नहीं। लेकिन सावधान रहना। सिस्टम की आँखें हमेशा हमें देख रही हैं।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 데이터 서버들이 미궁처럼 펼쳐졌다.",
						"english": "Giant data servers unfolded like a labyrinth.",
						"japanese": "巨大なデータサーバーが迷宮のように広がっていた。",
						"chinese": "巨大的数据服务器像迷宫一样展开。",
						"french": "D'immenses serveurs de données se déployaient comme un labyrinthe.",
						"spanish": "Gigantescos servidores de datos se desplegaban como un laberinto.",
						"vietnamese": "Các máy chủ dữ liệu khổng lồ trải ra như một mê cung.",
						"thai": "เซิร์ฟเวอร์ข้อมูลขนาดมหึมาแผ่ขยายออกไปราวกับเขาวงกต",
						"hindi": "विशाल डेटा सर्वर भूलभुलैया की तरह फैले हुए थे।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ren",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이쪽이야. 예전에… 딱 한 번 와봤어. 지루해서 도망쳤지만.",
						"english": "This way. I came here once before... It was boring, so I ran away.",
						"japanese": "こっちだよ。昔…一度だけ来たことがある。つまらなくて逃げ出したけど。",
						"chinese": "这边。以前…就来过一次。太无聊了就溜走了。",
						"french": "Par ici. Je suis venu ici une fois… C'était ennuyeux, alors je me suis enfui.",
						"spanish": "Por aquí. Estuve aquí una vez... Era aburrido, así que escapé.",
						"vietnamese": "Lối này. Trước đây… tôi đã đến đây một lần. Chán quá nên trốn mất.",
						"thai": "ทางนี้. เมื่อก่อน...เคยมาครั้งนึง. เบื่อเลยหนีไป.",
						"hindi": "इधर आओ। पहले...बस एक बार आया था। बोरिंग था तो भाग गया।"
					},
					"emotion": "base",
					"speaker": "ren",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "왜 그렇게 긴장해? 그냥 데이터잖아.",
						"english": "Why so tense? It's just data.",
						"japanese": "なんでそんなに緊張してるの？ただのデータでしょ。",
						"chinese": "干嘛那么紧张？不过是数据罢了。",
						"french": "Pourquoi si tendu ? C'est juste des données.",
						"spanish": "¿Por qué tan tenso? Es solo data.",
						"vietnamese": "Sao lại căng thẳng thế? Chỉ là dữ liệu thôi mà.",
						"thai": "ทำไมเครียดขนาดนั้น? มันก็แค่ข้อมูลเอง.",
						"hindi": "इतना तनाव क्यों? यह तो बस डेटा है।"
					}
				},
				{
					"speaker": "ren",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여긴 단순한 데이터가 아니야. 도시의 진짜 기억이, 아니, '있어야 할 기억'이 봉인된 곳이지.",
						"english": "This isn't mere data. This is where the city's true memories, or rather, its 'intended memories,' are sealed.",
						"japanese": "ここはただのデータじゃない。都市の本当の記憶、いや、『あるべき記憶』が封印された場所だ。",
						"chinese": "这里可不是单纯的数据。这是封印着城市真正记忆，不，是‘应有记忆’的地方。",
						"french": "Ce n'est pas de simples données. C'est là que les vrais souvenirs de la ville, ou plutôt, ses 'souvenirs destinés', sont scellés.",
						"spanish": "Esto no es mera data. Aquí es donde los verdaderos recuerdos de la ciudad, o mejor dicho, los 'recuerdos que deberían existir', están sellados.",
						"vietnamese": "Đây không phải dữ liệu đơn thuần. Đây là nơi phong ấn những ký ức thật sự của thành phố, không, là 'ký ức nên có'.",
						"thai": "นี่ไม่ใช่แค่ข้อมูลธรรมดา. ที่นี่คือที่ที่ความทรงจำที่แท้จริงของเมือง, หรือไม่ก็ 'ความทรงจำที่ควรจะมี' ถูกผนึกไว้.",
						"hindi": "यह सिर्फ डेटा नहीं है। यह वह जगह है जहाँ शहर की असली यादें, या यूँ कहो, 'होनी चाहिए वाली यादें', सील की गई हैं।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…진짜 기억?",
						"english": "...True memories?",
						"japanese": "…本当の記憶？",
						"chinese": "…真正记忆？",
						"french": "...Vrais souvenirs ?",
						"spanish": "...¿Recuerdos verdaderos?",
						"vietnamese": "...Ký ức thật sự?",
						"thai": "...ความทรงจำที่แท้จริง?",
						"hindi": "...असली यादें?"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "침입자… 이곳의 질서를 어지럽히는 자들은 제거한다.",
						"english": "Intruders… Those who disturb the order here will be eliminated.",
						"japanese": "侵入者…ここの秩序を乱す者は排除する。",
						"chinese": "入侵者…扰乱此处秩序者，格杀勿论。",
						"french": "Intrus… Ceux qui troublent l'ordre ici seront éliminés.",
						"spanish": "Intrusos… Aquellos que alteren el orden aquí serán eliminados.",
						"vietnamese": "Kẻ xâm nhập… Những kẻ gây rối trật tự nơi đây sẽ bị loại bỏ.",
						"thai": "ผู้บุกรุก... ผู้ที่รบกวนระเบียบที่นี่จะถูกกำจัด.",
						"hindi": "घुसपैठिए... जो यहाँ की व्यवस्था भंग करेंगे, उन्हें मिटा दिया जाएगा।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "또 다른 방해군인가!",
						"english": "Another disturbance?!",
						"japanese": "また別の妨害か！",
						"chinese": "又来捣乱的吗！",
						"french": "Encore un perturbateur !",
						"spanish": "¡¿Otro perturbador?!",
						"vietnamese": "Lại một kẻ phá hoại nữa sao!",
						"thai": "พวกก่อกวนอีกแล้วเหรอ!",
						"hindi": "क्या यह एक और बाधा है!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "알 수 없는 힘이 탐험대를 압도했다.",
						"english": "An unknown force overwhelmed the expedition team.",
						"japanese": "未知の力が探検隊を圧倒した。",
						"chinese": "一股未知的力量压倒了探险队。",
						"french": "Une force inconnue a submergé l'équipe d'expédition.",
						"spanish": "Una fuerza desconocida abrumó al equipo de expedición.",
						"vietnamese": "Một sức mạnh không xác định đã áp đảo đội thám hiểm.",
						"thai": "พลังที่ไม่รู้จักครอบงำทีมสำรวจ",
						"hindi": "एक अज्ञात शक्ति ने अन्वेषण दल को अभिभूत कर दिया।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 시도. 너희의 진실은… 곧 지워질 것이다.",
						"english": "Foolish attempt. Your truth... will soon be erased.",
						"japanese": "愚かな試み。お前たちの真実は…間もなく消し去られるだろう。",
						"chinese": "愚蠢的尝试。你们的真相……很快就会被抹去。",
						"french": "Tentative stupide. Votre vérité... sera bientôt effacée.",
						"spanish": "Intento tonto. Vuestra verdad... pronto será borrada.",
						"vietnamese": "Nỗ lực ngu ngốc. Sự thật của các ngươi... sẽ sớm bị xóa sổ.",
						"thai": "ความพยายามที่โง่เขลา ความจริงของเจ้า...จะถูกลบเลือนในไม่ช้า",
						"hindi": "मूर्खतापूर्ण प्रयास। तुम्हारी सच्चाई... जल्द ही मिटा दी जाएगी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "……还没有结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "시스템의 눈은 모든 것을 보고 있다. 너희의 존재는 오류다.",
						"english": "The System's eye sees all. Your existence is an error.",
						"japanese": "システムの目は全てを見ている。お前たちの存在はエラーだ。",
						"chinese": "系统之眼洞察一切。你们的存在，就是错误。",
						"french": "L'œil du Système voit tout. Votre existence est une erreur.",
						"spanish": "El ojo del Sistema lo ve todo. Vuestra existencia es un error.",
						"vietnamese": "Con mắt của Hệ thống nhìn thấu tất cả. Sự tồn tại của các ngươi là một lỗi.",
						"thai": "ดวงตาของระบบเห็นทุกสิ่ง. การมีอยู่ของพวกเจ้าคือความผิดพลาด.",
						"hindi": "सिस्टम की आँख सब कुछ देखती है। तुम्हारा अस्तित्व एक त्रुटि है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "오류는 너희 같은 조작된 시스템이야!",
						"english": "You manipulated systems are the error!",
						"japanese": "エラーはお前たちのような操作されたシステムだ！",
						"chinese": "错误的是你们这些被操纵的系统！",
						"french": "C'est vous, systèmes manipulés, qui êtes l'erreur !",
						"spanish": "¡Vosotros, sistemas manipulados, sois el error!",
						"vietnamese": "Lỗi là những hệ thống bị thao túng như các ngươi!",
						"thai": "พวกแกต่างหากที่เป็นข้อผิดพลาด, ระบบที่ถูกบงการ!",
						"hindi": "त्रुटि तुम जैसे हेरफेर किए गए सिस्टम हो!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…어리석군.",
						"english": "...Foolish.",
						"japanese": "…愚かだな。",
						"chinese": "…愚蠢。",
						"french": "...Stupide.",
						"spanish": "...Estúpido.",
						"vietnamese": "...Ngu xuẩn.",
						"thai": "...โง่เขลา.",
						"hindi": "...मूर्ख।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 데이터의 잔해 속으로 사라졌다.",
						"english": "A colossal shadow vanished amidst the data debris.",
						"japanese": "巨大な影がデータの残骸の中へ消え去った。",
						"chinese": "巨大的身影消失在数据残骸之中。",
						"french": "Une ombre colossale a disparu au milieu des débris de données.",
						"spanish": "Una sombra colosal desapareció entre los escombros de datos.",
						"vietnamese": "Một cái bóng khổng lồ biến mất vào trong đống dữ liệu tan nát.",
						"thai": "เงาขนาดมหึมาหายไปท่ามกลางซากข้อมูล.",
						"hindi": "एक विशाल छाया डेटा के मलबे में गायब हो गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ren"
				},
				{
					"type": "speech",
					"speaker": "ren",
					"content": {
						"korean": "해냈군! 이 구역의 시스템을 잠시 마비시켰어. 젠장, 두 번은 못 하겠다.",
						"english": "Done! I've temporarily paralyzed this sector's system. Damn, I can't do that twice.",
						"japanese": "やった！この区域のシステムを一時的に麻痺させた。くそ、二度目は無理だ。",
						"chinese": "成功了！我暂时瘫痪了这个区域的系统。该死，我可做不到第二次。",
						"french": "C'est fait ! J'ai temporairement paralysé le système de ce secteur. Bon sang, je ne pourrai pas le faire deux fois.",
						"spanish": "¡Hecho! He paralizado temporalmente el sistema de este sector. Maldita sea, no podré hacerlo dos veces.",
						"vietnamese": "Xong rồi! Tôi đã tạm thời làm tê liệt hệ thống khu vực này. Chết tiệt, tôi không thể làm thế lần thứ hai.",
						"thai": "สำเร็จ! ฉันทำให้ระบบของส่วนนี้เป็นอัมพาตชั่วคราวได้แล้ว ให้ตายสิ ทำสองครั้งไม่ได้หรอกนะ",
						"hindi": "हो गया! मैंने इस सेक्टर के सिस्टम को अस्थायी रूप से ठप कर दिया है। धिक्कार है, मैं यह दो बार नहीं कर सकता।"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기서 뭘 찾았는지 확인해봐야겠어.",
						"english": "I need to check what I found here.",
						"japanese": "ここで何を見つけたか確認しないと。",
						"chinese": "我得看看我在这里找到了什么。",
						"french": "Je dois vérifier ce que j'ai trouvé ici.",
						"spanish": "Tengo que ver qué encontré aquí.",
						"vietnamese": "Tôi cần kiểm tra xem mình đã tìm thấy gì ở đây.",
						"thai": "ฉันต้องตรวจสอบว่าฉันเจออะไรที่นี่",
						"hindi": "मुझे देखना होगा कि मैंने यहां क्या पाया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "파손된 서버 틈에서 오래된 흑백 사진 조각이 발견됐다. 낯설면서도 익숙한 실루엣이었다.",
						"english": "A fragment of an old black and white photograph was found in the damaged server. It was a silhouette both strange and familiar.",
						"japanese": "破損したサーバーの隙間から、古い白黒写真の破片が見つかった。見慣れないようでいて、どこか見覚えのあるシルエットだった。",
						"chinese": "在损坏的服务器缝隙中发现了一张旧的黑白照片碎片。那是一个陌生又熟悉的轮廓。",
						"french": "Un fragment d'une vieille photo en noir et blanc a été trouvé dans le serveur endommagé. C'était une silhouette à la fois étrange et familière.",
						"spanish": "Se encontró un fragmento de una vieja fotografía en blanco y negro entre los servidores dañados. Era una silueta a la vez extraña y familiar.",
						"vietnamese": "Một mảnh ảnh đen trắng cũ được tìm thấy trong khe hở của máy chủ bị hỏng. Đó là một hình bóng vừa xa lạ vừa quen thuộc.",
						"thai": "พบชิ้นส่วนภาพถ่ายขาวดำเก่าแก่ในช่องว่างของเซิร์ฟเวอร์ที่เสียหาย มันเป็นภาพเงาที่ทั้งแปลกและคุ้นเคย",
						"hindi": "क्षतिग्रस्त सर्वर के बीच एक पुरानी श्वेत-श्याम तस्वीर का टुकड़ा मिला। यह एक ऐसी छाया थी जो अजीब और परिचित दोनों थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "이건… 뭐야?",
						"english": "This is... what?",
						"japanese": "これは…何だ？",
						"chinese": "这是…什么？",
						"french": "C'est... quoi ?",
						"spanish": "¿Esto es... qué?",
						"vietnamese": "Cái này... là gì?",
						"thai": "นี่มัน...อะไรกัน?",
						"hindi": "यह... क्या है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…이쪽은 더 이상 안 돼. Ledger의 '오래된 눈'이 깨어나기 전에 서둘러야 해!",
						"english": "...No more of this. We need to hurry before Ledger's 'old eyes' awaken!",
						"japanese": "…もうこれ以上は駄目だ。Ledgerの『古い目』が目覚める前に急がないと！",
						"chinese": "……不能再这样了。我们得在Ledger的“旧眼睛”苏醒之前赶紧离开！",
						"french": "...Pas plus par ici. Nous devons nous dépêcher avant que les 'vieux yeux' de Ledger ne se réveillent !",
						"spanish": "...No más por aquí. ¡Tenemos que darnos prisa antes de que los 'viejos ojos' de Ledger se despierten!",
						"vietnamese": "...Không thể tiếp tục ở đây được nữa. Chúng ta phải nhanh lên trước khi 'đôi mắt cũ' của Ledger thức tỉnh!",
						"thai": "...ไม่เอาอีกแล้ว เราต้องรีบก่อนที่ 'ดวงตาเก่าแก่' ของ Ledger จะตื่นขึ้น!",
						"hindi": "...अब और नहीं। हमें जल्दी करनी होगी इससे पहले कि लेजर की 'पुरानी आँखें' जाग जाएं!"
					},
					"emotion": "sad",
					"speaker": "ren",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "왜 그래? 뭔가 더 있는 것 같잖아!",
						"english": "What's wrong? It looks like there's something more!",
						"japanese": "どうした？何かまだあるみたいじゃないか！",
						"chinese": "怎么了？好像还有什么东西！",
						"french": "Qu'est-ce qu'il y a ? On dirait qu'il y a quelque chose de plus !",
						"spanish": "¿Qué pasa? ¡Parece que hay algo más!",
						"vietnamese": "Sao vậy? Dường như còn có gì đó nữa!",
						"thai": "เป็นอะไรไป? ดูเหมือนจะมีอะไรอีกนะ!",
						"hindi": "क्या हुआ? ऐसा लगता है कि कुछ और भी है!"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "기록 보관소의 가장 깊은 곳. 시스템의 심장부로 향하는 길이었다.",
						"english": "The deepest part of the archives. It was the path to the heart of the system.",
						"japanese": "記録保管所の最も深い場所。システムの心臓部へと続く道だった。",
						"chinese": "档案库最深处。那是通往系统核心的道路。",
						"french": "La partie la plus profonde des archives. C'était le chemin vers le cœur du système.",
						"spanish": "La parte más profunda de los archivos. Era el camino hacia el corazón del sistema.",
						"vietnamese": "Phần sâu nhất của kho lưu trữ. Đó là con đường dẫn đến trái tim của hệ thống.",
						"thai": "ส่วนที่ลึกที่สุดของหอจดหมายเหตุ มันเป็นเส้นทางสู่ใจกลางของระบบ",
						"hindi": "अभिलेखागार का सबसे गहरा हिस्सा। यह सिस्टम के दिल तक का रास्ता था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "ren",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 구역은… Ledger 시스템의 초기 프로토콜에 대한 단서가 있을지도 몰라. 하지만 그건 굳이 몰라도 되는 '쓸모없는' 정보일 거야.",
						"english": "This area... might hold clues about the Ledger system's early protocols. But it's \"useless\" information you don't really need to know.",
						"japanese": "この区域は… レジャーシステムの初期プロトコルに関する手がかりがあるかもしれない。しかし、それはわざわざ知る必要のない「無駄な」情報だろう。",
						"chinese": "这个区域… 也许有关于账本系统早期协议的线索。但这会是你不必知道的“无用”信息。",
						"french": "Cette zone... pourrait détenir des indices sur les premiers protocoles du système Ledger. Mais c'est une information \"inutile\" que tu n'as pas vraiment besoin de connaître.",
						"spanish": "Esta zona... podría contener pistas sobre los primeros protocolos del sistema Ledger. Pero es información \"inútil\" que no necesitas saber.",
						"vietnamese": "Khu vực này... có thể chứa manh mối về các giao thức ban đầu của hệ thống Ledger. Nhưng đó là thông tin \"vô ích\" mà bạn không cần phải biết.",
						"thai": "บริเวณนี้... อาจมีเบาะแสเกี่ยวกับโปรโตคอลเริ่มต้นของระบบบัญชีแยกประเภท แต่มันเป็นข้อมูล \"ไร้ประโยชน์\" ที่คุณไม่จำเป็นต้องรู้",
						"hindi": "यह क्षेत्र... लेज़र सिस्टम के शुरुआती प्रोटोकॉल के बारे में सुराग रख सकता है। लेकिन यह \"बेकार\" जानकारी होगी जिसे आपको जानने की ज़रूरत नहीं है।"
					},
					"type": "speech",
					"speaker": "ren"
				},
				{
					"content": {
						"korean": "그게 뭔데? 왜 그렇게 피하려는 거야?",
						"english": "What is it? Why are you trying to avoid it?",
						"japanese": "それは何？なぜそんなに避けようとするの？",
						"chinese": "那是什么？你为什么要这样回避？",
						"french": "Qu'est-ce que c'est ? Pourquoi essaies-tu de l'éviter ?",
						"spanish": "¿Qué es eso? ¿Por qué intentas evitarlo?",
						"vietnamese": "Đó là gì? Tại sao bạn lại cố gắng né tránh nó?",
						"thai": "นั่นอะไร? ทำไมคุณถึงพยายามหลีกเลี่ยงมัน?",
						"hindi": "वह क्या है? तुम उससे क्यों बचना चाहते हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ren",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…몰라야 할 진실도 있는 법이야. 어차피 뭘 알든 변하는 건 없거든.",
						"english": "...There are truths better left unknown. Knowing them won't change anything anyway.",
						"japanese": "...知るべきではない真実もあるんだ。どうせ何を知っても何も変わらない。",
						"chinese": "……有些真相是最好不要知道的。反正无论知道什么，都不会改变什么。",
						"french": "...Il y a des vérités qu'il vaut mieux ignorer. De toute façon, savoir ne changera rien.",
						"spanish": "...Hay verdades que es mejor no saber. De todas formas, saberlas no cambiará nada.",
						"vietnamese": "...Cũng có những sự thật không nên biết. Dù sao đi nữa, biết cũng chẳng thay đổi được gì.",
						"thai": "...มีบางความจริงที่ไม่ควรรับรู้ ถึงอย่างไรก็ตาม การรู้ก็ไม่ได้เปลี่ยนแปลงอะไร",
						"hindi": "...कुछ सच ऐसे होते हैं जिन्हें जानना बेहतर नहीं होता। वैसे भी, कुछ भी जानने से कुछ नहीं बदलेगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "진실은 언젠가 밝혀지는 거야.",
						"english": "The truth will eventually come to light.",
						"japanese": "真実はいつか明らかになるものだ。",
						"chinese": "真相总有一天会大白于天下。",
						"french": "La vérité finira par éclater.",
						"spanish": "La verdad siempre sale a la luz.",
						"vietnamese": "Sự thật rồi sẽ được phơi bày.",
						"thai": "ความจริงจะถูกเปิดเผยในที่สุด",
						"hindi": "सच एक दिन सामने आ ही जाएगा।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "단말기에 알 수 없는 암호화된 메시지 조각들이 스쳐 지나갔다.",
						"english": "Fragments of unknown encrypted messages flashed across the terminal.",
						"japanese": "端末に、未知の暗号化されたメッセージの断片が通り過ぎた。",
						"chinese": "未知的加密消息片段在终端上闪过。",
						"french": "Des fragments de messages cryptés inconnus défilèrent sur le terminal.",
						"spanish": "Fragmentos de mensajes cifrados desconocidos parpadearon en el terminal.",
						"vietnamese": "Những đoạn tin nhắn được mã hóa không xác định lướt qua màn hình thiết bị đầu cuối.",
						"thai": "ชิ้นส่วนข้อความเข้ารหัสที่ไม่รู้จักแวบผ่านหน้าจอเทอร์มินัล",
						"hindi": "अज्ञात एन्क्रिप्टेड संदेशों के टुकड़े टर्मिनल पर चमक उठे।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ren",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "여기는… 가장 위험한 구역이야. 모든 조작의 근원.",
						"english": "This is... the most dangerous zone. The source of all manipulation.",
						"japanese": "ここは…最も危険な区域だ。全ての操作の根源。",
						"chinese": "这里是……最危险的区域。所有操纵的根源。",
						"french": "Ici... c'est la zone la plus dangereuse. La source de toutes les manipulations.",
						"spanish": "Aquí... esta es la zona más peligrosa. La fuente de toda manipulación.",
						"vietnamese": "Đây là... khu vực nguy hiểm nhất. Nguồn gốc của mọi thao túng.",
						"thai": "ที่นี่คือ... เขตอันตรายที่สุด ต้นกำเนิดของการบงการทั้งหมด",
						"hindi": "यह... सबसे खतरनाक क्षेत्र है। सभी जोड़तोड़ का स्रोत।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ren"
				},
				{
					"content": {
						"korean": "결국 여기까지 왔군. 사라져야 할 존재들.",
						"english": "So you've finally made it here. Beings that must disappear.",
						"japanese": "結局ここまで来たか。消え去るべき存在たちめ。",
						"chinese": "你们终究还是走到这里了。那些应该消失的存在。",
						"french": "Vous êtes finalement arrivés ici. Des êtres qui doivent disparaître.",
						"spanish": "Así que finalmente llegaron aquí. Seres que deben desaparecer.",
						"vietnamese": "Cuối cùng thì các ngươi cũng đến đây rồi. Những kẻ đáng lẽ phải biến mất.",
						"thai": "ในที่สุดพวกเจ้าก็มาถึงที่นี่ สิ่งมีชีวิตที่ต้องหายไป",
						"hindi": "तो तुम आखिरकार यहाँ पहुँच ही गए। ऐसे प्राणी जिन्हें मिटा देना चाहिए।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 감추고 있는 진실을 보여줘!",
						"english": "Show me the truth you're hiding!",
						"japanese": "お前が隠している真実を見せろ！",
						"chinese": "展现你所隐藏的真相！",
						"french": "Montre-moi la vérité que tu caches !",
						"spanish": "¡Muéstrame la verdad que ocultas!",
						"vietnamese": "Hãy cho tôi thấy sự thật mà ngươi đang che giấu!",
						"thai": "แสดงความจริงที่คุณซ่อนไว้!",
						"hindi": "मुझे वह सच दिखाओ जिसे तुम छिपा रहे हो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "진실? 너희는 진실을 감당할 수 없을 것이다.",
						"english": "The truth? You won't be able to handle the truth.",
						"japanese": "真実？お前たちは真実を耐えられないだろう。",
						"chinese": "真相？你们无法承受真相。",
						"french": "La vérité ? Vous ne pourrez pas supporter la vérité.",
						"spanish": "¿La verdad? No podréis soportar la verdad.",
						"vietnamese": "Sự thật? Các ngươi sẽ không thể chịu đựng được sự thật đâu.",
						"thai": "ความจริง? พวกเจ้าจะรับมือกับความจริงไม่ไหวหรอก",
						"hindi": "सच? तुम सच को संभाल नहीं पाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "정체 모를 보스가 산산이 조각나며 데이터 파편이 흩어졌다.",
						"english": "The unknown boss shattered into pieces, scattering data fragments.",
						"japanese": "正体不明のボスが粉々に砕け散り、データ破片が飛び散った。",
						"chinese": "不明身份的Boss四分五裂，数据碎片散落开来。",
						"french": "Le boss inconnu se brisa en morceaux, dispersant des fragments de données.",
						"spanish": "El jefe desconocido se hizo pedazos, esparciendo fragmentos de datos.",
						"vietnamese": "Con trùm không rõ danh tính vỡ tan thành từng mảnh, các mảnh dữ liệu vương vãi khắp nơi.",
						"thai": "บอสที่ไม่ทราบตัวตนแตกเป็นเสี่ยงๆ เศษข้อมูลกระจัดกระจาย",
						"hindi": "अज्ञात बॉस टुकड़ों में बिखर गया, डेटा के टुकड़े बिखर गए।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "진실은 대체 어디 있는 거야…!",
						"english": "Where is the truth, then...!",
						"japanese": "真実は一体どこにあるんだ…！",
						"chinese": "真相到底在哪里…！",
						"french": "Où est la vérité, alors… !",
						"spanish": "¿Dónde está la verdad, entonces...?",
						"vietnamese": "Rốt cuộc thì sự thật ở đâu…!",
						"thai": "แล้วความจริงมันอยู่ไหนกันแน่...!",
						"hindi": "आखिर सच कहाँ है…!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ren",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "ren",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…어쩌면 진실이란 건… 처음부터 없었는지도 몰라. 그냥 보여주고 싶은 것만 보여준 거지.",
						"english": "...Perhaps there was no truth from the start. Only what they wanted to show was shown.",
						"japanese": "…もしかしたら、真実なんて最初からなかったのかもしれない。ただ見せたいものだけを見せていたのさ。",
						"chinese": "……或许真相从一开始就不存在。他们只是展示了想让我们看到的东西。",
						"french": "...Peut-être que la vérité n'existait pas depuis le début. Seulement ce qu'ils voulaient montrer a été montré.",
						"spanish": "...Quizá la verdad nunca existió. Solo nos mostraron lo que querían.",
						"vietnamese": "...Có lẽ sự thật chưa từng tồn tại ngay từ đầu. Chỉ có những gì họ muốn cho thấy là được thể hiện thôi.",
						"thai": "...บางทีความจริงอาจไม่มีอยู่ตั้งแต่แรกก็ได้ แค่แสดงสิ่งที่อยากให้เห็นเท่านั้นเอง",
						"hindi": "शायद सच कभी था ही नहीं। सिर्फ वही दिखाया गया जो वे दिखाना चाहते थे।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 다 의미 없었다는 거야?",
						"english": "What are you saying? That it was all meaningless?",
						"japanese": "何を言ってるんだ？全部無意味だったってことか？",
						"chinese": "你在说什么？意思是所有一切都毫无意义吗？",
						"french": "Qu'est-ce que tu racontes ? Que tout était sans sens ?",
						"spanish": "¿Qué dices? ¿Que todo fue en vano?",
						"vietnamese": "Cậu đang nói gì vậy? Tất cả đều vô nghĩa sao?",
						"thai": "พูดอะไรน่ะ? บอกว่าทั้งหมดไร้ความหมายเหรอ?",
						"hindi": "क्या कह रहे हो? क्या यह सब व्यर्थ था?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "기록 보관소의 심장부가 침묵했다. 그러나 모든 것이 거짓이라고 말하는 듯한 공허만이 남았다.",
						"english": "The heart of the archive went silent. Yet, only an emptiness remained, as if saying everything was a lie.",
						"japanese": "記録保管庫の心臓部は沈黙した。しかし、すべてが嘘だと言わんばかりの虚無だけが残った。",
						"chinese": "档案保管库的心脏陷入了沉寂。然而，只剩下了一片虚无，仿佛在说一切都是谎言。",
						"french": "Le cœur des archives se tut. Pourtant, seul un vide demeura, comme pour dire que tout était un mensonge.",
						"spanish": "El corazón del archivo enmudeció. Sin embargo, solo quedó un vacío, como si dijera que todo era mentira.",
						"vietnamese": "Trung tâm của kho lưu trữ đã im lặng. Tuy nhiên, chỉ còn lại một sự trống rỗng, như thể nói rằng mọi thứ đều là dối trá.",
						"thai": "หัวใจของคลังข้อมูลเงียบลง ทว่ากลับเหลือไว้เพียงความว่างเปล่า ราวกับจะบอกว่าทุกสิ่งคือเรื่องโกหก",
						"hindi": "अभिलेखागार का हृदय शांत हो गया। फिर भी, केवल एक शून्यता बची रही, मानो कह रही हो कि सब कुछ झूठ था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템의 마지막 방어가 모든 것을 삼켰다.",
						"english": "The system's last defense swallowed everything.",
						"japanese": "システムの最後の防御が、すべてを飲み込んだ。",
						"chinese": "系统的最后一道防线吞噬了一切。",
						"french": "La dernière défense du système a tout englouti.",
						"spanish": "La última defensa del sistema lo engulló todo.",
						"vietnamese": "Lớp phòng thủ cuối cùng của hệ thống đã nuốt chửng mọi thứ.",
						"thai": "การป้องกันสุดท้ายของระบบกลืนกินทุกสิ่ง",
						"hindi": "सिस्टम की अंतिम रक्षा ने सब कुछ निगल लिया।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희의 모든 노력은 무의미하다. 이 도시는… 나만의 놀이터니까.",
						"english": "All your efforts are meaningless. This city... is my playground.",
						"japanese": "お前たちの努力はすべて無意味だ。この都市は…私だけの遊び場だからな。",
						"chinese": "你们所有的努力都毫无意义。这座城市……是我的游乐场。",
						"french": "Tous vos efforts sont vains. Cette ville… est mon terrain de jeu.",
						"spanish": "Todos vuestros esfuerzos son inútiles. Esta ciudad... es mi patio de juegos.",
						"vietnamese": "Mọi nỗ lực của các ngươi đều vô nghĩa. Thành phố này… là sân chơi của riêng ta.",
						"thai": "ความพยายามทั้งหมดของพวกเจ้าไร้ความหมาย เมืองนี้…คือสนามเด็กเล่นของข้าคนเดียว",
						"hindi": "तुम्हारे सारे प्रयास व्यर्थ हैं। यह शहर… मेरा खेल का मैदान है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아니야! 끝까지 저항할 거야.",
						"english": "...No! I will resist to the end.",
						"japanese": "…いやだ！最後まで抵抗する！",
						"chinese": "……不！我会抵抗到底。",
						"french": "...Non ! Je résisterai jusqu'au bout.",
						"spanish": "¡No! Resistiré hasta el final.",
						"vietnamese": "...Không! Tôi sẽ chống cự đến cùng.",
						"thai": "...ไม่! ฉันจะต้านทานจนถึงที่สุด",
						"hindi": "नहीं! मैं अंत तक विरोध करूँगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
