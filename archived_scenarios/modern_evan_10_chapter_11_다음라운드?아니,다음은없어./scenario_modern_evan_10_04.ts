export const scenario_modern_evan_10_04 = {
	"scenario_id": "modern_evan_10_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "들어왔던 문이 사라지고, 오직 '다음'으로 향하는 문들만 끝없이 이어졌다.",
						"english": "The door we entered through vanished, and only doors leading to 'Next' stretched endlessly.",
						"japanese": "入ってきた扉は消え、ただ「次」へと続く扉だけが無限に連なっていた。",
						"chinese": "我们进来的门消失了，只有通向“下一个”的门无休止地延伸。",
						"french": "La porte par laquelle nous étions entrés avait disparu, et seules des portes menant au « Suivant » s'étendaient à l'infini.",
						"spanish": "La puerta por la que entramos desapareció, y solo puertas que llevaban al \"Siguiente\" se extendían sin fin.",
						"vietnamese": "Cánh cửa chúng ta bước vào đã biến mất, chỉ còn những cánh cửa dẫn đến 'Cái Tiếp Theo' nối tiếp vô tận.",
						"thai": "ประตูที่เราเข้ามาหายไปแล้ว เหลือเพียงแต่ประตูที่นำไปสู่ 'สิ่งต่อไป' ที่ทอดยาวไม่สิ้นสุด",
						"hindi": "जिस दरवाज़े से हम अंदर आए थे, वह गायब हो गया, और केवल 'अगले' की ओर जाने वाले दरवाज़े अंतहीन रूप से फैले हुए थे।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "말도 안 돼… 뒤가 없어.",
						"english": "This is insane... There's no way back.",
						"japanese": "信じられない…後ろがない。",
						"chinese": "不可能……没有退路。",
						"french": "C'est insensé… Il n'y a pas de retour.",
						"spanish": "Esto es una locura... No hay vuelta atrás.",
						"vietnamese": "Không thể nào… Không có lối ra.",
						"thai": "ไม่จริง… ไม่มีทางกลับ",
						"hindi": "यह पागलपन है... कोई पीछे नहीं है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "nia",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"emotion": "base",
					"content": {
						"korean": "이곳은… 과거를 지우는 공간이니까.",
						"english": "This place... it erases the past.",
						"japanese": "ここは…過去を消し去る空間だから。",
						"chinese": "这里是……抹去过去的空间。",
						"french": "Cet endroit… il efface le passé.",
						"spanish": "Este lugar... borra el pasado.",
						"vietnamese": "Nơi này… là không gian xóa bỏ quá khứ.",
						"thai": "ที่นี่… เป็นสถานที่ที่ลบอดีต",
						"hindi": "यह जगह... अतीत को मिटा देती है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "과거를 지워?",
						"english": "Erases the past?",
						"japanese": "過去を消すって？",
						"chinese": "抹去过去？",
						"french": "Efface le passé ?",
						"spanish": "¿Borra el pasado?",
						"vietnamese": "Xóa bỏ quá khứ ư?",
						"thai": "ลบอดีตเหรอ?",
						"hindi": "अतीत को मिटा दो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "응. 오직 '다음'만이 존재하도록.",
						"english": "Yes. So only 'Next' exists.",
						"japanese": "うん。ただ「次」だけが存在するように。",
						"chinese": "嗯。只让“下一个”存在。",
						"french": "Oui. Pour que seul le « Suivant » existe.",
						"spanish": "Sí. Para que solo \"Siguiente\" exista.",
						"vietnamese": "Đúng vậy. Để chỉ 'Cái Tiếp Theo' tồn tại.",
						"thai": "ใช่ ให้มีแค่ 'สิ่งต่อไป' เท่านั้น",
						"hindi": "हाँ। ताकि केवल 'अगला' ही मौजूद रहे।"
					},
					"emotion": "base",
					"speaker": "nia",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 450,
					"spot": [
						4,
						3
					],
					"speaker": "nia"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "이 수많은 '다음'의 문들이 보여? 전부 똑같아.",
						"english": "See these countless 'Next' doors? They're all the same.",
						"japanese": "この数えきれない「次」の扉が見えるか？全部同じだ。",
						"chinese": "看到这些无数的“下一个”门了吗？它们都一样。",
						"french": "Tu vois toutes ces portes du « Suivant » ? Elles sont toutes pareilles.",
						"spanish": "¿Ves estas incontables puertas del \"Siguiente\"? Todas son iguales.",
						"vietnamese": "Thấy những cánh cửa 'Cái Tiếp Theo' vô số này không? Tất cả đều giống nhau.",
						"thai": "เห็นประตู 'สิ่งต่อไป' เหล่านี้ไหม? ทั้งหมดเหมือนกันหมด",
						"hindi": "क्या तुम इन अनगिनत 'अगले' दरवाज़ों को देख रहे हो? वे सब एक जैसे हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "전부 같은 곳으로 연결되는 건가?",
						"english": "Do they all lead to the same place?",
						"japanese": "全て同じ場所に繋がっているのか？",
						"chinese": "它们都通向同一个地方吗？",
						"french": "Est-ce que tout mène au même endroit ?",
						"spanish": "¿Todo lleva al mismo lugar?",
						"vietnamese": "Tất cả đều dẫn đến cùng một nơi sao?",
						"thai": "ทั้งหมดเชื่อมต่อกันที่เดียวกันหรือ?",
						"hindi": "क्या वे सभी एक ही जगह से जुड़ते हैं?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "아니. 이 자체가 함정이야. 진정한 진행은 없어.",
						"english": "No. This itself is a trap. There's no real progress.",
						"japanese": "違う。これ自体が罠だ。本当の進展はない。",
						"chinese": "不。这本身就是个陷阱。没有真正的进展。",
						"french": "Non. C'est un piège en soi. Il n'y a pas de véritable progression.",
						"spanish": "No. Esto mismo es una trampa. No hay progreso real.",
						"vietnamese": "Không. Bản thân nó là một cái bẫy. Không có tiến triển thực sự.",
						"thai": "ไม่ นี่คือกับดัก ไม่มีทางไปข้างหน้าจริงจัง",
						"hindi": "नहीं। यह खुद एक जाल है। कोई वास्तविक प्रगति नहीं है।"
					}
				},
				{
					"content": {
						"korean": "그럼 우리는 계속… 갇히는 건가?",
						"english": "So are we just... trapped?",
						"japanese": "じゃあ、私たちは…ずっと閉じ込められるのか？",
						"chinese": "那我们就会一直…被困住吗？",
						"french": "Alors, nous allons rester… piégés ?",
						"spanish": "¿Entonces seguiremos… atrapados?",
						"vietnamese": "Vậy là chúng ta sẽ... bị mắc kẹt mãi sao?",
						"thai": "ถ้าอย่างนั้นเราก็จะ… ติดอยู่ตลอดไปหรือ?",
						"hindi": "तो क्या हम बस... फँसे रहेंगे?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"emotion": "angry",
					"content": {
						"korean": "이 시스템은 '다음 기회'라는 허상으로 우리를 붙잡아둬.",
						"english": "This system holds us with the illusion of 'the next chance'.",
						"japanese": "このシステムは「次の機会」という幻想で私たちを捕らえている。",
						"chinese": "这个系统以“下一次机会”的假象困住我们。",
						"french": "Ce système nous retient avec l'illusion d'une 'prochaine chance'.",
						"spanish": "Este sistema nos atrapa con la ilusión de una 'próxima oportunidad'.",
						"vietnamese": "Hệ thống này giữ chân chúng ta bằng ảo ảnh về 'cơ hội tiếp theo'.",
						"thai": "ระบบนี้กักขังเราด้วยภาพลวงตาของ 'โอกาสหน้า'",
						"hindi": "यह प्रणाली हमें 'अगले अवसर' के भ्रम में फँसाए रखती है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"speaker": "nia",
					"type": "direction",
					"duration_ms": 550,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "뒤가 사라진다는 건, 되돌릴 수 없다는 의미만이 아니야.",
						"english": "The disappearance of what's behind us doesn't just mean we can't go back.",
						"japanese": "後ろが消えるというのは、引き返せないという意味だけじゃない。",
						"chinese": "后方消失，不只是意味着无法回头。",
						"french": "Le fait que l'arrière disparaisse ne signifie pas seulement qu'on ne peut pas revenir en arrière.",
						"spanish": "Que lo de atrás desaparezca no solo significa que no podemos volver.",
						"vietnamese": "Việc phía sau biến mất không chỉ có nghĩa là không thể quay lại.",
						"thai": "การที่ข้างหลังหายไป ไม่ได้หมายความแค่ว่ากลับไปไม่ได้",
						"hindi": "पीछे का गायब होना, सिर्फ यह नहीं बताता कि हम वापस नहीं जा सकते।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何なんだ？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì là gì?",
						"thai": "แล้วมันคืออะไร?",
						"hindi": "तो फिर क्या है?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 공간은 우리의 과거를 지우고, 미래를 영원히 고정시키는 덫.",
						"english": "This space is a trap that erases our past and permanently fixes our future.",
						"japanese": "この空間は、私たちの過去を消し、未来を永遠に固定する罠だ。",
						"chinese": "这个空间是一个陷阱，抹去我们的过去，永远固定我们的未来。",
						"french": "Cet espace est un piège qui efface notre passé et fige notre avenir à jamais.",
						"spanish": "Este espacio es una trampa que borra nuestro pasado y fija permanentemente nuestro futuro.",
						"vietnamese": "Không gian này là một cái bẫy xóa đi quá khứ của chúng ta và cố định vĩnh viễn tương lai.",
						"thai": "พื้นที่นี้คือกับดักที่ลบอดีตของเราและตรึงอนาคตไว้ตลอดไป",
						"hindi": "यह स्थान एक जाल है जो हमारे अतीत को मिटा देता है और हमारे भविष्य को स्थायी रूप से निर्धारित कर देता है।"
					},
					"speaker": "nia",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "선택의 자유가 없다는 건가?",
						"english": "Does that mean we have no freedom of choice?",
						"japanese": "選択の自由がないということか？",
						"chinese": "这意味着没有选择的自由吗？",
						"french": "Cela signifie que nous n'avons pas la liberté de choix ?",
						"spanish": "¿Significa que no tenemos libertad de elección?",
						"vietnamese": "Nghĩa là chúng ta không có tự do lựa chọn sao?",
						"thai": "นั่นหมายความว่าเราไม่มีอิสระในการเลือกหรือ?",
						"hindi": "क्या इसका मतलब है कि हमारे पास चुनने की स्वतंत्रता नहीं है?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리의 의지와 상관없이 '다음'으로 떠밀리는 거지.",
						"english": "We're pushed to the 'next' regardless of our will.",
						"japanese": "私たちの意志に関係なく、「次」へと押し流されるんだ。",
						"chinese": "我们被推向“下一步”，与我们的意愿无关。",
						"french": "Nous sommes poussés vers le 'suivant', indépendamment de notre volonté.",
						"spanish": "Somos empujados hacia lo 'siguiente' sin importar nuestra voluntad.",
						"vietnamese": "Chúng ta bị đẩy đến 'tiếp theo' mà không liên quan đến ý chí của mình.",
						"thai": "เราถูกผลักไปสู่ 'ต่อไป' โดยไม่สนใจเจตจำนงของเรา",
						"hindi": "हमारी इच्छा के बिना ही हमें 'अगले' की ओर धकेल दिया जाता है।"
					},
					"speaker": "nia"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "nia",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "더 이상 되돌아갈 수 없어. 오직 앞으로만 나아가는 길.",
						"english": "There's no turning back anymore. Only a path forward.",
						"japanese": "もう引き返せない。ただ前に進む道だけだ。",
						"chinese": "再也无法回头。只有一条向前进的路。",
						"french": "Impossible de revenir en arrière. Seulement un chemin vers l'avant.",
						"spanish": "Ya no se puede volver atrás. Solo un camino hacia adelante.",
						"vietnamese": "Không thể quay lại được nữa. Chỉ có con đường tiến về phía trước.",
						"thai": "กลับไปไม่ได้แล้ว มีแต่ทางเดินไปข้างหน้าเท่านั้น",
						"hindi": "अब वापस नहीं जा सकते। केवल आगे बढ़ने का रास्ता है।"
					},
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "이게 정말 끝없는 루프의 본질인가.",
						"english": "Is this truly the nature of an endless loop?",
						"japanese": "これが本当に終わらないループの本質なのか。",
						"chinese": "这真的是无尽循环的本质吗？",
						"french": "Est-ce vraiment la nature d'une boucle sans fin ?",
						"spanish": "¿Es esta realmente la esencia de un bucle sin fin?",
						"vietnamese": "Đây có thực sự là bản chất của vòng lặp vô tận không?",
						"thai": "นี่คือแก่นแท้ของวงวนที่ไม่สิ้นสุดจริงๆ หรือ",
						"hindi": "क्या यह वास्तव में एक अंतहीन लूप का सार है?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "그래. 하지만 이대로 있을 순 없어. 이 함정을 깨야 해.",
						"english": "Yes. But we can't stay like this. We have to break this trap.",
						"japanese": "そうだ。だが、このままではいられない。この罠を破らねば。",
						"chinese": "是的。但我们不能坐以待毙。我们必须打破这个陷阱。",
						"french": "Oui. Mais nous ne pouvons pas rester comme ça. Nous devons briser ce piège.",
						"spanish": "Sí. Pero no podemos quedarnos así. Tenemos que romper esta trampa.",
						"vietnamese": "Phải. Nhưng chúng ta không thể cứ thế này được. Phải phá cái bẫy này.",
						"thai": "ใช่ แต่เราจะอยู่อย่างนี้ไม่ได้ เราต้องทำลายกับดักนี้",
						"hindi": "हाँ। लेकिन हम ऐसे नहीं रह सकते। हमें इस जाल को तोड़ना होगा।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어떻게…?",
						"english": "How...?",
						"japanese": "どうやって…？",
						"chinese": "怎么…？",
						"french": "Comment... ?",
						"spanish": "¿Cómo...?",
						"vietnamese": "Làm sao...?",
						"thai": "อย่างไร...?",
						"hindi": "कैसे...?"
					},
					"emotion": "base"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "방법은 반드시 있어. 포기하지 마.",
						"english": "There must be a way. Don't give up.",
						"japanese": "必ず方法はある。諦めるな。",
						"chinese": "一定有办法的。别放弃。",
						"french": "Il doit y avoir un moyen. N'abandonne pas.",
						"spanish": "Debe haber una manera. No te rindas.",
						"vietnamese": "Chắc chắn sẽ có cách. Đừng bỏ cuộc.",
						"thai": "ต้องมีทางแน่ อย่าเพิ่งยอมแพ้",
						"hindi": "कोई न कोई रास्ता ज़रूर होगा। हार मत मानो।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "끝없이 이어지는 복도 끝, 정체 모를 존재가 길을 막아섰다.",
						"english": "At the end of the endless corridor, an unknown entity blocked the way.",
						"japanese": "終わりなく続く廊下の果て、正体不明の存在が進路を阻んだ。",
						"chinese": "在无尽走廊的尽头，一个不明身份的存在挡住了去路。",
						"french": "Au bout du couloir sans fin, une entité inconnue bloquait le passage.",
						"spanish": "Al final del pasillo interminable, una entidad desconocida bloqueó el camino.",
						"vietnamese": "Cuối hành lang bất tận, một thực thể không rõ danh tính đã chặn đường.",
						"thai": "ณ สุดทางเดินที่ไร้ที่สิ้นสุด สิ่งมีชีวิตปริศนาได้ขวางทางเอาไว้",
						"hindi": "अंतहीन गलियारे के अंत में, एक अज्ञात सत्ता ने रास्ता रोक लिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "드디어 여기까지 왔군. '다음'을 갈망하는 자여.",
						"english": "You've finally made it this far. You who crave the 'next'.",
						"japanese": "ついにここまで来たか。「次」を渇望する者よ。",
						"chinese": "终于走到这里了啊。渴望“下一个”的人。",
						"french": "Tu es enfin arrivé jusqu'ici. Toi qui désires le \"prochain\".",
						"spanish": "Por fin has llegado hasta aquí. Tú que anhelas el 'siguiente'.",
						"vietnamese": "Cuối cùng ngươi cũng đến được đây. Kẻ khao khát 'kế tiếp'.",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่ ผู้ที่โหยหา 'อนาคต'",
						"hindi": "तुम आख़िरकार यहाँ तक आ गए। तुम, जो 'अगले' की लालसा रखते हो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 루프를 지키는 존재인가!",
						"english": "Are you the one who guards this loop?!",
						"japanese": "お前がこのループを守る存在なのか！",
						"chinese": "你就是守护这个循环的存在吗？！",
						"french": "Es-tu celui qui garde cette boucle ?",
						"spanish": "¿Eres tú quien custodia este bucle?",
						"vietnamese": "Ngươi là kẻ canh giữ vòng lặp này sao?!",
						"thai": "เจ้าคือผู้พิทักษ์วงวนนี้งั้นรึ?!",
						"hindi": "क्या तुम ही इस लूप के रक्षक हो?!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나는 이 순환의 균형. 너희의 '다음'은 이미 정해져 있다.",
						"english": "I am the balance of this cycle. Your 'next' is already predetermined.",
						"japanese": "我はこの循環の均衡。お前たちの「次」は既に定められている。",
						"chinese": "我是这个循环的平衡。你们的“下一个”早已注定。",
						"french": "Je suis l'équilibre de ce cycle. Votre \"prochain\" est déjà prédéterminé.",
						"spanish": "Soy el equilibrio de este ciclo. Vuestro 'siguiente' ya está predeterminado.",
						"vietnamese": "Ta là sự cân bằng của vòng tuần hoàn này. 'Kế tiếp' của các ngươi đã định sẵn rồi.",
						"thai": "ข้าคือสมดุลของวัฏจักรนี้ 'อนาคต' ของพวกเจ้าถูกกำหนดไว้แล้ว",
						"hindi": "मैं इस चक्र का संतुलन हूँ। तुम्हारा 'अगला' पहले से ही तय है।"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "nia",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "저자는 이 시스템의 수호자야. 우리의 발목을 잡으려는 거지.",
						"english": "That one is the guardian of this system. They're trying to hold us back.",
						"japanese": "あれはこのシステムの守護者だ。我々の足止めをしようとしている。",
						"chinese": "那家伙是这个系统的守护者。他们想拖住我们。",
						"french": "C'est le gardien de ce système. Il essaie de nous retenir.",
						"spanish": "Ese es el guardián de este sistema. Está intentando detenernos.",
						"vietnamese": "Kẻ đó là người bảo hộ của hệ thống này. Hắn ta muốn cản bước chúng ta.",
						"thai": "นั่นคือผู้พิทักษ์ของระบบนี้ พวกมันพยายามจะถ่วงเวลาเรา",
						"hindi": "वह इस प्रणाली का संरक्षक है। वह हमें रोकना चाहता है।"
					},
					"emotion": "base",
					"speaker": "nia",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리는 너의 덫에 걸리지 않을 거야!",
						"english": "We won't fall into your trap!",
						"japanese": "我々はお前の罠にはかからない！",
						"chinese": "我们不会掉进你的陷阱！",
						"french": "Nous ne tomberons pas dans ton piège !",
						"spanish": "¡No caeremos en tu trampa!",
						"vietnamese": "Chúng ta sẽ không mắc bẫy của ngươi đâu!",
						"thai": "เราจะไม่ติดกับดักของเจ้าหรอก!",
						"hindi": "हम तुम्हारे जाल में नहीं फँसेंगे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "허락받지 않은 진전은… 곧 소멸이다.",
						"english": "Unauthorized progress… soon leads to annihilation.",
						"japanese": "許可なき前進は…即ち消滅だ。",
						"chinese": "未经允许的进展…终将消亡。",
						"french": "Tout progrès non autorisé… mène à l'annihilation.",
						"spanish": "El progreso no autorizado… pronto será aniquilación.",
						"vietnamese": "Tiến triển không được phép… sẽ sớm dẫn đến sự hủy diệt.",
						"thai": "ความคืบหน้าโดยไม่ได้รับอนุญาต… คือการทำลายล้างในไม่ช้า",
						"hindi": "अनधिकृत प्रगति… शीघ्र ही विनाश है।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 존재의 힘에 휩쓸려, 그들은 다시 '다음'의 기회를 맞이해야 했다.",
						"english": "Swept away by the power of an unknown entity, they had to face the 'Next' opportunity again.",
						"japanese": "正体不明の存在の力に巻き込まれ、彼らは再び「次」の機会に直面しなければならなかった。",
						"chinese": "被不明实体的力量卷走，他们不得不再次面对‘下一场’的机会。",
						"french": "Emportés par la puissance d'une entité inconnue, ils durent à nouveau faire face à l'opportunité du 'Suivant'.",
						"spanish": "Arrastrados por el poder de una entidad desconocida, tuvieron que enfrentar la oportunidad del 'Siguiente' de nuevo.",
						"vietnamese": "Bị cuốn đi bởi sức mạnh của một thực thể không rõ, họ lại phải đối mặt với cơ hội 'Tiếp theo'.",
						"thai": "ถูกพัดพาไปโดยพลังของสิ่งมีชีวิตที่ไม่รู้จัก พวกเขาต้องเผชิญกับโอกาสของ 'สิ่งต่อไป' อีกครั้ง",
						"hindi": "एक अज्ञात सत्ता की शक्ति में बहकर, उन्हें फिर से 'अगले' अवसर का सामना करना पड़ा।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "결국 너희도… 이 순환을 벗어날 수 없지.",
						"english": "In the end, you too… cannot escape this cycle.",
						"japanese": "結局お前たちも…この循環から逃れられないのだ。",
						"chinese": "最终，你们也…无法摆脱这个循环。",
						"french": "Au final, vous aussi… ne pourrez pas échapper à ce cycle.",
						"spanish": "Al final, ustedes también… no pueden escapar de este ciclo.",
						"vietnamese": "Cuối cùng, các ngươi cũng… không thể thoát khỏi vòng tuần hoàn này.",
						"thai": "สุดท้ายแล้ว พวกเจ้าก็… หนีไม่พ้นวงจรนี้หรอก",
						"hindi": "अंततः तुम भी… इस चक्र से बच नहीं सकते।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어. 다음은 없어…!",
						"english": "Damn it… it's not over yet. There is no 'Next'…!",
						"japanese": "くそ…まだ終わってない。次はない…！",
						"chinese": "该死…还没结束。没有‘下一场’了…！",
						"french": "Mince… ce n'est pas encore fini. Il n'y aura pas de 'Suivant'… !",
						"spanish": "Maldita sea… aún no ha terminado. ¡No hay 'Siguiente'…!",
						"vietnamese": "Chết tiệt… vẫn chưa kết thúc. Không có 'Tiếp theo'…!",
						"thai": "ให้ตายสิ… ยังไม่จบ ไม่มี 'สิ่งต่อไป' อีกแล้ว…!",
						"hindi": "धिक्कार है… अभी खत्म नहीं हुआ। 'अगला' नहीं है…!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "nia",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "nia",
					"emotion": "base",
					"content": {
						"korean": "포기하지 마. '다음'이 아닌 진정한 끝을 찾아야 해.",
						"english": "Don't give up. You must find the true end, not the 'Next'.",
						"japanese": "諦めるな。「次」ではない、真の終わりを見つけなければならない。",
						"chinese": "别放弃。我们必须找到真正的结局，而不是‘下一场’。",
						"french": "N'abandonnez pas. Vous devez trouver la véritable fin, pas le 'Suivant'.",
						"spanish": "No te rindas. Debes encontrar el verdadero final, no el 'Siguiente'.",
						"vietnamese": "Đừng bỏ cuộc. Chúng ta phải tìm thấy cái kết thực sự, không phải 'Tiếp theo'.",
						"thai": "อย่ายอมแพ้ ต้องหาจุดจบที่แท้จริง ไม่ใช่ 'สิ่งต่อไป'",
						"hindi": "हार मत मानो। तुम्हें 'अगला' नहीं, बल्कि सच्चा अंत खोजना होगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "이깟 저항으로… '다음'을 막을 순 없다.",
						"english": "This paltry resistance… won't stop the 'Next'.",
						"japanese": "こんな抵抗では…「次」は止められない。",
						"chinese": "区区抵抗…无法阻止‘下一场’。",
						"french": "Cette misérable résistance… ne pourra pas arrêter le 'Suivant'.",
						"spanish": "Con esta insignificante resistencia… no podrán detener el 'Siguiente'.",
						"vietnamese": "Chừng này kháng cự… không thể ngăn cản 'Tiếp theo'.",
						"thai": "การต่อต้านแค่นี้… หยุด 'สิ่งต่อไป' ไม่ได้หรอก",
						"hindi": "इस मामूली प्रतिरोध से… 'अगले' को रोका नहीं जा सकता।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니. 우린 여기서 이 지긋지긋한 '다음'을 끝낼 거야.",
						"english": "No. We'll end this dreadful 'Next' here.",
						"japanese": "違う。我々はここでこの忌まわしい「次」を終わらせる。",
						"chinese": "不。我们就在这里结束这该死的‘下一场’。",
						"french": "Non. Nous allons mettre fin à ce 'Suivant' exécrable ici.",
						"spanish": "No. Aquí acabaremos con este odioso 'Siguiente'.",
						"vietnamese": "Không. Chúng ta sẽ kết thúc 'Tiếp theo' đáng ghét này ở đây.",
						"thai": "ไม่ เราจะยุติ 'สิ่งต่อไป' ที่น่าเบื่อหน่ายนี้ที่นี่",
						"hindi": "नहीं। हम इस भयानक 'अगले' को यहीं समाप्त करेंगे।"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "nia",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "잘했어. 이제 이 루프의 진짜 심장을 향해 나아가자.",
						"english": "Well done. Now, let's head towards the true heart of this loop.",
						"japanese": "よくやった。さあ、このループの本当の心臓部へ向かおう。",
						"chinese": "干得好。现在，让我们走向这个循环真正的核心。",
						"french": "Bien joué. Maintenant, avançons vers le véritable cœur de cette boucle.",
						"spanish": "Bien hecho. Ahora, avancemos hacia el verdadero corazón de este bucle.",
						"vietnamese": "Làm tốt lắm. Giờ thì, hãy tiến tới trái tim thực sự của vòng lặp này.",
						"thai": "ทำได้ดีมาก เอาล่ะ ไปสู่แก่นแท้ของวงวนนี้กันเถอะ",
						"hindi": "बहुत अच्छा किया। अब, चलो इस लूप के असली दिल की ओर बढ़ते हैं।"
					},
					"speaker": "nia",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그러나 시스템은 부서지지 않았다. '다음'은 여전히 그들을 기다리고 있었다.",
						"english": "However, the system was not broken. The 'Next' still awaited them.",
						"japanese": "しかしシステムは破壊されなかった。「次」は依然として彼らを待ち受けていた。",
						"chinese": "然而，系统并未被摧毁。‘下一场’仍在等待着他们。",
						"french": "Cependant, le système n'était pas brisé. Le 'Suivant' les attendait toujours.",
						"spanish": "Sin embargo, el sistema no se rompió. El 'Siguiente' aún los esperaba.",
						"vietnamese": "Tuy nhiên, hệ thống không bị phá vỡ. 'Tiếp theo' vẫn đang chờ đợi họ.",
						"thai": "อย่างไรก็ตาม ระบบไม่ถูกทำลาย 'สิ่งต่อไป' ยังคงรอพวกเขาอยู่",
						"hindi": "हालांकि, सिस्टम टूटा नहीं था। 'अगला' अभी भी उनका इंतजार कर रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"우리는 '다음'을 쫓아왔다.",
			"그러나 돌아볼 때, 등 뒤의 문은 사라졌다.",
			"과거는 지워지고, 미래는 영원히 고정된 덫.",
			"이 끝없는 순환의 경계에서, 우리는 깨달아야만 했다."
		],
		"english": [
			"We chased 'Next'.",
			"But looking back, the door behind us was gone.",
			"The past erased, the future an eternally fixed trap.",
			"At the boundary of this endless cycle, we had to realize."
		],
		"japanese": [
			"私たちは「次」を追ってきた。",
			"しかし振り返ると、背後の扉は消えていた。",
			"過去は消え去り、未来は永遠に固定された罠。",
			"この終わりなき循環の境界で、私たちは気づかなければならなかった。"
		],
		"chinese": [
			"我们追逐着“下一个”。",
			"然而回首时，身后的门已消失。",
			"过去被抹去，未来是永恒固定的陷阱。",
			"在这无尽循环的边界，我们必须醒悟。"
		],
		"french": [
			"Nous avons poursuivi le « Suivant ».",
			"Mais en nous retournant, la porte derrière nous avait disparu.",
			"Le passé effacé, l'avenir, un piège éternellement figé.",
			"Aux confins de ce cycle infini, nous devions le réaliser."
		],
		"spanish": [
			"Perseguimos el \"Siguiente\".",
			"Pero al mirar atrás, la puerta a nuestra espalda había desaparecido.",
			"El pasado borrado, el futuro una trampa fijada para siempre.",
			"En el límite de este ciclo interminable, tuvimos que darnos cuenta."
		],
		"vietnamese": [
			"Chúng ta đã đuổi theo 'Cái Tiếp Theo'.",
			"Nhưng khi nhìn lại, cánh cửa phía sau đã biến mất.",
			"Quá khứ bị xóa bỏ, tương lai là cái bẫy cố định vĩnh viễn.",
			"Tại ranh giới của vòng lặp vô tận này, chúng ta phải nhận ra."
		],
		"thai": [
			"เราไล่ตาม 'สิ่งต่อไป' มา",
			"แต่เมื่อหันกลับไป ประตูข้างหลังก็หายไปแล้ว",
			"อดีตถูกลบเลือน อนาคตคือกับดักที่ถูกตรึงไว้ตลอดกาล",
			"ณ ขอบเขตของวงจรที่ไม่สิ้นสุดนี้ เราต้องตระหนัก"
		],
		"hindi": [
			"हम 'अगले' का पीछा कर रहे थे।",
			"लेकिन जब हमने पीछे मुड़कर देखा, तो हमारे पीछे का दरवाज़ा गायब था।",
			"अतीत मिट गया, भविष्य एक शाश्वत निश्चित जाल।",
			"इस अंतहीन चक्र की सीमा पर, हमें महसूस करना पड़ा।"
		]
	}
} as const;
