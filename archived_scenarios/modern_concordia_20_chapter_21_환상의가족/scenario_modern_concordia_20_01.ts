export const scenario_modern_concordia_20_01 = {
	"scenario_id": "modern_concordia_20_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
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
					"content": {
						"korean": "모든 것이 완벽한 듯 보이는 도시의 이면. 콩코르디아 공동체는 그 중심에 있었다.",
						"english": "Behind the city that seemed perfect in every way. The Concordia Community stood at its heart.",
						"japanese": "全てが完璧に見える都市の裏側。コンコルディア共同体はその中心にあった。",
						"chinese": "一切看似完美的城市背面。康科迪亚社区位于其中心。",
						"french": "Derrière la façade parfaite de la ville. La communauté Concordia était en son cœur.",
						"spanish": "Detrás de la ciudad que parecía perfecta en todos los sentidos. La Comunidad Concordia estaba en su corazón.",
						"vietnamese": "Đằng sau thành phố tưởng chừng hoàn hảo. Cộng đồng Concordia nằm ở trung tâm của nó.",
						"thai": "เบื้องหลังของเมืองที่ดูเหมือนสมบูรณ์แบบในทุกด้าน ชุมชนคอนคอร์เดียตั้งอยู่ใจกลาง",
						"hindi": "जिस शहर में सब कुछ सही लग रहा था, उसके पीछे। कॉनकॉर्डिया समुदाय उसके दिल में था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기가 그 '완벽한 조화'의 성지?",
						"english": "Is this the sanctuary of 'perfect harmony'?",
						"japanese": "ここが「完璧な調和」の聖地か？",
						"chinese": "这里就是那“完美和谐”的圣地？",
						"french": "Est-ce le sanctuaire de l'« harmonie parfaite » ?",
						"spanish": "¿Es este el santuario de la 'armonía perfecta'?",
						"vietnamese": "Đây là thánh địa của 'sự hòa hợp hoàn hảo' đó sao?",
						"thai": "นี่คือสถานที่ศักดิ์สิทธิ์ของ 'ความสามัคคีที่สมบูรณ์แบบ' หรือไม่?",
						"hindi": "क्या यह 'पूर्ण सद्भाव' का पवित्र स्थान है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "zoe",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "제 가족들이 저곳에 있어요. 제발, 그들을 찾아주세요.",
						"english": "My family is in there. Please, find them.",
						"japanese": "私の家族がそこにいます。どうか、彼らを見つけてください。",
						"chinese": "我的家人在那里。拜托，请找到他们。",
						"french": "Ma famille est là-dedans. S'il vous plaît, trouvez-les.",
						"spanish": "Mi familia está ahí. Por favor, encuéntralos.",
						"vietnamese": "Gia đình tôi ở trong đó. Làm ơn, hãy tìm họ.",
						"thai": "ครอบครัวของฉันอยู่ในนั้น ได้โปรดตามหาพวกเขาด้วย",
						"hindi": "मेरा परिवार वहाँ है। कृपया, उन्हें ढूँढ़ो।"
					},
					"speaker": "zoe",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…걱정 마. 내가 해결할게.",
						"english": "...Don't worry. I'll handle it.",
						"japanese": "…心配するな。私が解決する。",
						"chinese": "……别担心。我会解决的。",
						"french": "...Ne t'inquiète pas. Je m'en occupe.",
						"spanish": "...No te preocupes. Yo me encargo.",
						"vietnamese": "...Đừng lo. Tôi sẽ lo liệu.",
						"thai": "...ไม่ต้องห่วง ฉันจะจัดการเอง",
						"hindi": "...चिंता मत करो। मैं इसे संभाल लूँगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "zoe",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "콩코르디아는 겉과 달라요. 그곳에선… 사람들이 변해요.",
						"english": "Concordia isn't what it seems. There... people change.",
						"japanese": "コンコルディアは見かけと違う。そこでは…人々が変わるんだ。",
						"chinese": "康科迪亚并非表面那样。在那里……人们会变。",
						"french": "Concordia n'est pas ce qu'elle semble être. Là-bas... les gens changent.",
						"spanish": "Concordia no es lo que parece. Allí... la gente cambia.",
						"vietnamese": "Concordia không như vẻ ngoài của nó. Ở đó... mọi người thay đổi.",
						"thai": "คอนคอร์เดียไม่เป็นอย่างที่เห็น ที่นั่น... ผู้คนเปลี่ยนไป",
						"hindi": "कॉनकॉर्डिया जैसा दिखता है, वैसा नहीं है। वहाँ... लोग बदल जाते हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "낡은 서점에서 오래된 신문 기사 조각을 발견했다. 갱단의 잔혹한 배신극에 대한 짧은 보도였다.",
						"english": "In an old bookstore, I found a fragment of an old newspaper article. It was a brief report on a gang's brutal act of betrayal.",
						"japanese": "古い書店で、古い新聞記事の切れ端を見つけた。それはギャングの残忍な裏切り行為に関する短い報道だった。",
						"chinese": "在一家旧书店里，我发现了一张旧报纸的碎片。那是一篇关于帮派残酷背叛行为的简短报道。",
						"french": "Dans une vieille librairie, j'ai trouvé un fragment d'un vieil article de journal. C'était un bref rapport sur un acte de trahison brutal d'un gang.",
						"spanish": "En una vieja librería, encontré un fragmento de un viejo artículo de periódico. Era un breve informe sobre un brutal acto de traición de una pandilla.",
						"vietnamese": "Trong một hiệu sách cũ, tôi tìm thấy một mẩu tin tức từ một tờ báo cũ. Đó là một báo cáo ngắn về hành vi phản bội tàn bạo của một băng đảng.",
						"thai": "ในร้านหนังสือเก่า ฉันพบเศษบทความจากหนังสือพิมพ์เก่า เป็นรายงานสั้นๆ เกี่ยวกับการทรยศที่โหดร้ายของแก๊งค์",
						"hindi": "एक पुरानी किताब की दुकान में, मुझे एक पुराने अखबार के लेख का एक टुकड़ा मिला। यह एक गिरोह के क्रूर विश्वासघात के कार्य पर एक संक्षिप्त रिपोर्ट थी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "배신… 결국 겉모습만 보고 믿은 결과인가.",
						"english": "Betrayal... Was it just the consequence of trusting appearances?",
						"japanese": "裏切り…結局、見た目だけを信じた結果なのか。",
						"chinese": "背叛…终究是只看表面而轻信的结果吗？",
						"french": "Trahison... Est-ce le résultat d'avoir fait confiance aux apparences, après tout ?",
						"spanish": "Traición... ¿Es el resultado de haber confiado solo en las apariencias?",
						"vietnamese": "Phản bội... Rốt cuộc, đây là hậu quả của việc chỉ tin vào vẻ bề ngoài sao?",
						"thai": "การทรยศ... สุดท้ายแล้วนี่คือผลของการเชื่อแค่รูปลักษณ์ภายนอกสินะ",
						"hindi": "विश्वासघात... क्या यह केवल दिखावे पर भरोसा करने का परिणाम था?"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "당신도, 그 때 그랬잖아요. 겉만 믿고… 외면했잖아요.",
						"english": "You did the same back then, didn't you? Believed only what you saw... and turned away.",
						"japanese": "あなたも、あの時そうだったじゃないですか。見た目だけを信じて…見向きもしなかった。",
						"chinese": "当时，你不也一样吗？只相信表面…然后就置之不理了。",
						"french": "Vous aussi, à l'époque, vous avez fait la même chose. Vous n'avez cru qu'aux apparences... et vous avez détourné les yeux.",
						"spanish": "Tú también hiciste lo mismo en aquel entonces, ¿no? Creíste solo en lo que veías... y le diste la espalda.",
						"vietnamese": "Anh cũng vậy mà. Khi đó, anh cũng chỉ tin vào vẻ bề ngoài... rồi ngoảnh mặt đi.",
						"thai": "คุณเองก็เป็นแบบนั้นตอนนั้นไม่ใช่เหรอ? เชื่อแค่สิ่งที่เห็น... แล้วก็เมินเฉยไป",
						"hindi": "तुम भी उस समय वैसे ही थे, ना? केवल बाहरी दिखावे पर विश्वास किया... और मुंह फेर लिया था।"
					},
					"speaker": "zoe"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "zoe",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 깊이 빠져들 거예요. 당신도, 내 가족들처럼.",
						"english": "You'll fall deeper and deeper. Just like my family.",
						"japanese": "あなたも、私の家族のように、どんどん深みにハマっていくでしょう。",
						"chinese": "你也会越陷越深。就像我的家人一样。",
						"french": "Vous allez vous enfoncer de plus en plus profondément. Tout comme ma famille.",
						"spanish": "Te sumergirás cada vez más. Como mi familia.",
						"vietnamese": "Anh cũng sẽ chìm sâu hơn nữa. Giống như gia đình tôi vậy.",
						"thai": "คุณจะตกดิ่งลึกลงไปเรื่อยๆ เหมือนกับครอบครัวของฉัน",
						"hindi": "तुम भी गहरे और गहरे दलदल में फंस जाओगे। ठीक मेरे परिवार की तरह।"
					},
					"speaker": "zoe",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "공동체 정보를 찾던 중, 익명으로 올라온 도시괴담 포스팅을 접했다. '누군가를 배신하면, 결국 자신도 같은 방식으로 끝을 맞이한다.'",
						"english": "While searching for community info, I came across an anonymous urban legend post: 'If you betray someone, you will eventually meet the same end.'",
						"japanese": "コミュニティ情報を探している最中、匿名で投稿された都市伝説の投稿を目にした。「誰かを裏切れば、結局自分も同じ結末を迎える。」",
						"chinese": "寻找社区信息时，我看到了一条匿名发布的都市怪谈帖子：“如果背叛了某人，最终自己也会以同样的方式走向末路。”",
						"french": "En cherchant des informations sur la communauté, je suis tombé sur un post anonyme de légende urbaine : « Si vous trahissez quelqu'un, vous finirez par connaître la même fin. »",
						"spanish": "Mientras buscaba información de la comunidad, me encontré con una publicación anónima de leyenda urbana: 'Si traicionas a alguien, al final tú también tendrás el mismo destino.'",
						"vietnamese": "Trong lúc tìm kiếm thông tin cộng đồng, tôi đọc được một bài đăng về truyền thuyết đô thị ẩn danh: 'Nếu phản bội ai đó, cuối cùng bạn cũng sẽ kết thúc theo cùng một cách.'",
						"thai": "ระหว่างหาข้อมูลชุมชน ฉันเจอโพสต์ตำนานเมืองที่ไม่ระบุตัวตน: 'ถ้าทรยศใคร สุดท้ายแล้วตัวเองก็จะพบจุดจบแบบเดียวกัน'",
						"hindi": "समुदाय की जानकारी खोजते समय, मुझे एक गुमनाम शहरी किंवदंती पोस्ट मिली: 'यदि आप किसी को धोखा देते हैं, तो अंततः आपका भी उसी तरह से अंत होगा।'"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…섬뜩한 기시감. 설마…",
						"english": "...An eerie déjà vu. No, surely not...",
						"japanese": "…不気味な既視感。まさか…",
						"chinese": "…毛骨悚然的既视感。难道说…",
						"french": "...Un étrange déjà-vu. Non, ce n'est pas possible...",
						"spanish": "...Una escalofriante sensación de déjà vu. No, no puede ser...",
						"vietnamese": "...Một cảm giác deja vu rợn người. Chắc không phải là...",
						"thai": "...ความรู้สึก既視感ที่น่าขนลุก ไม่จริงน่า...",
						"hindi": "...एक भयानक déjà vu। नहीं, ऐसा नहीं हो सकता..."
					}
				},
				{
					"emotion": "angry",
					"speaker": "zoe",
					"content": {
						"korean": "봐요. 결국 모든 게 돌아오는 거예요. 당신이 져버린 책임처럼.",
						"english": "See? Everything comes back eventually. Just like the responsibilities you shirked.",
						"japanese": "ほら。結局、全てが巡り巡ってくるんですよ。あなたが放棄した責任のように。",
						"chinese": "看吧。所有的一切终将回归。就像你逃避的责任一样。",
						"french": "Voyez-vous ? Tout finit par revenir. Comme les responsabilités que vous avez fui.",
						"spanish": "Al final todo vuelve. Como las responsabilidades que abandonaste.",
						"vietnamese": "Thấy không? Cuối cùng mọi thứ đều quay trở lại. Giống như trách nhiệm mà anh đã bỏ rơi vậy.",
						"thai": "เห็นไหม? สุดท้ายทุกอย่างก็ย้อนกลับมา เหมือนกับความรับผิดชอบที่คุณละทิ้งไป",
						"hindi": "देखो? आखिर सब कुछ लौटकर आता है। ठीक उन जिम्मेदारियों की तरह जिनसे तुमने मुंह मोड़ लिया था।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "zoe",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "이대로 가면 모두 콩코르디아에 흡수될 거예요. 돌아올 수 없게 돼요!",
						"english": "If we go on like this, everyone will be absorbed into Concordia. There'll be no turning back!",
						"japanese": "このままでは、みんなコンコルディアに吸収されてしまいます。もう戻れなくなります！",
						"chinese": "再这样下去，所有人都会被和谐家园吞噬的。再也回不来了！",
						"french": "Si nous continuons ainsi, tout le monde sera absorbé par Concordia. Il n'y aura plus de retour possible !",
						"spanish": "Si seguimos así, todos serán absorbidos por Concordia. ¡No habrá vuelta atrás!",
						"vietnamese": "Cứ thế này, tất cả sẽ bị Concordia hấp thụ. Sẽ không thể quay lại được nữa!",
						"thai": "ถ้าเป็นแบบนี้ต่อไป ทุกคนจะถูกกลืนกินไปกับคอนคอร์เดีย จะกลับมาไม่ได้อีกแล้ว!",
						"hindi": "अगर हम ऐसे ही चलते रहे, तो सब कॉनकॉर्डिया में समाहित हो जाएंगे। कोई वापसी नहीं होगी!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "공동체 내부의 감시와 통제는 더욱 노골적으로 변해갔다. 불안하고 서늘한 의심이 확신으로 바뀌었다.",
						"english": "The surveillance and control within the community became more overt. Uneasy, chilling suspicion turned into certainty.",
						"japanese": "コミュニティ内部の監視と統制は、より露骨なものへと変わっていった。不安で冷たい疑念が確信に変わった。",
						"chinese": "社区内部的监视和控制变得越来越露骨。不安而冰冷的怀疑变成了确信。",
						"french": "La surveillance et le contrôle au sein de la communauté sont devenus plus flagrants. Une suspicion troublante et glaçante s'est transformée en certitude.",
						"spanish": "La vigilancia y el control dentro de la comunidad se volvieron más descarados. La sospecha incómoda y escalofriante se convirtió en certeza.",
						"vietnamese": "Sự giám sát và kiểm soát trong cộng đồng ngày càng trở nên trắng trợn. Sự nghi ngờ bất an, lạnh lẽo dần biến thành sự chắc chắn.",
						"thai": "การสอดส่องและควบคุมภายในชุมชนเริ่มชัดเจนขึ้นเรื่อยๆ ความสงสัยที่ไม่สบายใจและเยือกเย็นเปลี่ยนเป็นความมั่นใจ",
						"hindi": "समुदाय के भीतर निगरानी और नियंत्रण और अधिक स्पष्ट हो गया। बेचैन, ठंडक देने वाला संदेह निश्चितता में बदल गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 이제 와서 멈출 순 없어. 더 이상 외면하지 않아.",
						"english": "Damn it... I can't stop now. I won't turn away anymore.",
						"japanese": "くそ…今更止められない。もうこれ以上、見て見ぬふりはしない。",
						"chinese": "该死…事到如今已经无法停止了。我不会再逃避了。",
						"french": "Bon sang... Je ne peux plus m'arrêter maintenant. Je ne détournerai plus les yeux.",
						"spanish": "Maldita sea... No puedo parar ahora. No voy a ignorarlo más.",
						"vietnamese": "Chết tiệt... Giờ thì không thể dừng lại được nữa. Tôi sẽ không ngoảnh mặt làm ngơ nữa.",
						"thai": "บ้าจริง... ตอนนี้หยุดไม่ได้แล้ว ฉันจะไม่เมินเฉยอีกต่อไป",
						"hindi": "धिक्कार है... अब मैं रुक नहीं सकता। अब और मुंह नहीं मोड़ूंगा।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 그림자가 모든 것을 집어삼키는 듯했다.",
						"english": "The unknown shadow seemed to swallow everything.",
						"japanese": "正体不明の影がすべてを飲み込むようだった。",
						"chinese": "身份不明的影子仿佛吞噬了一切。",
						"french": "L'ombre inconnue semblait tout engloutir.",
						"spanish": "La sombra desconocida parecía engullirlo todo.",
						"vietnamese": "Bóng đen không rõ danh tính dường như nuốt chửng mọi thứ.",
						"thai": "เงาลึกลับดูเหมือนจะกลืนกินทุกสิ่ง",
						"hindi": "अज्ञात छाया सब कुछ निगलने वाली लग रही थी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나약한 자. 이곳에선 오직 조화만이 허락된다.",
						"english": "Weakling. Only harmony is permitted here.",
						"japanese": "弱き者よ。ここでは調和のみが許される。",
						"chinese": "弱者。此处只允许和谐。",
						"french": "Faible. Seule l'harmonie est permise ici.",
						"spanish": "Débil. Aquí solo se permite la armonía.",
						"vietnamese": "Kẻ yếu. Nơi đây chỉ cho phép sự hài hòa.",
						"thai": "เจ้าผู้อ่อนแอ ที่นี่อนุญาตแต่ความกลมกลืนเท่านั้น",
						"hindi": "कमजोर। यहाँ केवल सद्भाव की अनुमति है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어. 반드시 돌아온다!",
						"english": "It's not over yet... I will return!",
						"japanese": "まだ…終わってない。必ず戻ってくる！",
						"chinese": "还没…结束。我一定会回来！",
						"french": "Ce n'est pas encore… fini. Je reviendrai !",
						"spanish": "Aún… no ha terminado. ¡Volveré!",
						"vietnamese": "Chưa… kết thúc. Ta nhất định sẽ trở lại!",
						"thai": "ยัง…ไม่จบ ฉันจะกลับมาแน่นอน!",
						"hindi": "अभी… खत्म नहीं हुआ है। मैं ज़रूर वापस आऊँगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "zoe",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "안 돼… 이렇게 끝날 순 없어…!",
						"english": "No... It can't end like this...!",
						"japanese": "ダメだ…こんな終わり方なんて…！",
						"chinese": "不…不能就这样结束…！",
						"french": "Non… Ça ne peut pas finir comme ça… !",
						"spanish": "No… ¡No puede terminar así…!",
						"vietnamese": "Không… Không thể kết thúc như thế này được…!",
						"thai": "ไม่นะ… มันจะจบแบบนี้ไม่ได้…!",
						"hindi": "नहीं… यह ऐसे खत्म नहीं हो सकता…!"
					},
					"speaker": "zoe",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 그림자가 흔들리더니, 이내 형태를 잃었다.",
						"english": "The unknown shadow wavered, then lost its form.",
						"japanese": "正体不明の影が揺らぎ、やがて形を失った。",
						"chinese": "身份不明的影子晃动了一下，随即失去了形态。",
						"french": "L'ombre inconnue vacilla, puis perdit sa forme.",
						"spanish": "La sombra desconocida vaciló y luego perdió su forma.",
						"vietnamese": "Bóng đen không rõ danh tính lung lay, rồi mất đi hình dạng.",
						"thai": "เงาลึกลับสั่นไหว แล้วก็สูญเสียรูปร่างไป",
						"hindi": "अज्ञात छाया डगमगाई, फिर अपना रूप खो दिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…이것은 끝이 아니야. 조화는… 계속될 테니.",
						"english": "...This isn't the end. The harmony will... continue.",
						"japanese": "…これは終わりではない。調和は…続くのだから。",
						"chinese": "……这不是结束。和谐将……继续下去。",
						"french": "...Ce n'est pas la fin. L'harmonie... continuera.",
						"spanish": "...Esto no es el final. La armonía... continuará.",
						"vietnamese": "...Đây không phải là kết thúc. Sự hài hòa sẽ... tiếp diễn.",
						"thai": "...นี่ไม่ใช่จุดจบ ความกลมเกลียวจะ...ดำเนินต่อไป",
						"hindi": "...यह अंत नहीं है। सामंजस्य... जारी रहेगा।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 끝이 아니라고? 설마…",
						"english": "This isn't the end? No way...",
						"japanese": "これが終わりじゃないって？ まさか…",
						"chinese": "这不是结束？不会吧……",
						"french": "Ce n'est pas la fin ? Impossible...",
						"spanish": "¿Esto no es el final? No puede ser...",
						"vietnamese": "Đây không phải kết thúc sao? Không lẽ...",
						"thai": "นี่ไม่ใช่จุดจบงั้นเหรอ? ไม่จริงน่า...",
						"hindi": "यह अंत नहीं है? कहीं ऐसा तो नहीं..."
					}
				},
				{
					"action": "enter",
					"speaker": "zoe",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "zoe",
					"content": {
						"korean": "어떡해요… 내 가족들은? 아무것도 바뀌지 않았어요…",
						"english": "What do I do...? My family? Nothing has changed...",
						"japanese": "どうすればいいの… 私の家族は？ 何も変わってない…",
						"chinese": "该怎么办……我的家人们呢？什么都没改变……",
						"french": "Que faire... Ma famille ? Rien n'a changé...",
						"spanish": "¿Qué hago...? ¿Mi familia? Nada ha cambiado...",
						"vietnamese": "Phải làm sao đây... Gia đình tôi? Không có gì thay đổi cả...",
						"thai": "ทำไงดี... ครอบครัวของฉันล่ะ? ไม่มีอะไรเปลี่ยนแปลงเลย...",
						"hindi": "मैं क्या करूँ... मेरा परिवार? कुछ भी नहीं बदला है..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "겉으로 드러난 적은 사라졌지만, 그늘은 여전했다. 진실을 찾는 여정은 계속된다.",
						"english": "The visible enemy vanished, but the shadow remained. The journey to find the truth continues.",
						"japanese": "目に見える敵は消え去ったが、その影は依然として残っていた。真実を探す旅は続く。",
						"chinese": "显露的敌人消失了，但阴影依然存在。寻找真相的旅程仍在继续。",
						"french": "L'ennemi visible a disparu, mais l'ombre persistait. Le voyage pour trouver la vérité continue.",
						"spanish": "El enemigo visible desapareció, pero la sombra permanecía. El viaje para encontrar la verdad continúa.",
						"vietnamese": "Kẻ thù lộ diện đã biến mất, nhưng bóng tối vẫn còn đó. Cuộc hành trình tìm kiếm sự thật vẫn tiếp diễn.",
						"thai": "ศัตรูที่ปรากฏตัวได้หายไปแล้ว แต่เงามืดก็ยังคงอยู่ การเดินทางเพื่อค้นหาความจริงยังคงดำเนินต่อไป",
						"hindi": "दृश्य शत्रु गायब हो गया, लेकिन छाया बनी रही। सत्य की तलाश का सफ़र जारी है।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "zoe",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "zoe",
					"content": {
						"korean": "저게… 저게 제 가족들을 홀린 장본인이에요!",
						"english": "That's... that's the one who bewitched my family!",
						"japanese": "あれが…あれが私の家族を惑わせた張本人です！",
						"chinese": "那个…那个就是迷惑我家人的人！",
						"french": "C'est... c'est elle qui a ensorcelé ma famille !",
						"spanish": "¡Ese... ese es el que hechizó a mi familia!",
						"vietnamese": "Đó là... đó là kẻ đã mê hoặc gia đình tôi!",
						"thai": "นั่น... นั่นคือคนที่ล่อลวงครอบครัวของฉัน!",
						"hindi": "वह... वह वही है जिसने मेरे परिवार को मोह लिया!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "정체 모를 그림자가 거대한 형태로 모습을 드러냈다. '랜덤 보스'였다.",
						"english": "An unknown shadow revealed itself in a colossal form. It was a 'Random Boss'.",
						"japanese": "正体不明の影が巨大な姿を現した。「ランダムボス」だった。",
						"chinese": "身份不明的影子以巨大的形态现身。那是“随机Boss”。",
						"french": "Une ombre inconnue apparut sous une forme colossale. C'était un \"Boss Aléatoire\".",
						"spanish": "Una sombra desconocida se manifestó en una forma colosal. Era un 'Jefe Aleatorio'.",
						"vietnamese": "Một bóng đen không rõ danh tính hiện hình khổng lồ. Đó là 'Trùm Ngẫu Nhiên'.",
						"thai": "เงาลึกลับปรากฏกายในร่างมหึมา นั่นคือ 'บอสสุ่ม'",
						"hindi": "एक अज्ञात छाया एक विशाल रूप में प्रकट हुई। यह एक 'रैंडम बॉस' था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환영한다, 새로운 가족이여. 이곳은 완전한 조화.",
						"english": "Welcome, new family. This place is perfect harmony.",
						"japanese": "ようこそ、新しい家族よ。ここは完全なる調和。",
						"chinese": "欢迎你，新家人。这里是完全的和谐。",
						"french": "Bienvenue, nouvelle famille. Cet endroit est une harmonie parfaite.",
						"spanish": "Bienvenida, nueva familia. Este lugar es pura armonía.",
						"vietnamese": "Chào mừng, thành viên mới. Nơi đây là sự hài hòa hoàn hảo.",
						"thai": "ยินดีต้อนรับ ครอบครัวใหม่ ที่นี่คือความกลมเกลียวที่สมบูรณ์แบบ",
						"hindi": "स्वागत है, नए परिवार। यह स्थान पूर्ण सामंजस्य है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 꾸민 일이었군!",
						"english": "So you were behind all this!",
						"japanese": "あなたの仕業だったのか！",
						"chinese": "原来是你搞的鬼！",
						"french": "C'était donc votre œuvre !",
						"spanish": "¡Así que tú estuviste detrás de todo esto!",
						"vietnamese": "Thì ra là do ngươi bày ra!",
						"thai": "เป็นฝีมือแกนี่เอง!",
						"hindi": "तो यह तुम्हारा ही किया धरा था!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "오해는 마라. 나는 그저 완벽함을 선사했을 뿐.",
						"english": "Don't misunderstand. I merely brought perfection.",
						"japanese": "誤解するな。私はただ完璧さをもたらしただけだ。",
						"chinese": "别误会。我只是带来了完美。",
						"french": "Ne te méprends pas. J'ai seulement offert la perfection.",
						"spanish": "No me malinterpretes. Yo solo ofrecí la perfección.",
						"vietnamese": "Đừng hiểu lầm. Ta chỉ mang đến sự hoàn hảo mà thôi.",
						"thai": "อย่าเข้าใจผิด ฉันแค่มอบความสมบูรณ์แบบให้เท่านั้น",
						"hindi": "गलत मत समझो। मैंने तो बस पूर्णता प्रदान की है।"
					}
				},
				{
					"duration_ms": 400,
					"speaker": "zoe",
					"type": "direction",
					"action": "exit"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"\"완벽한 조화\"를 약속하는 콩코르디아 공동체.",
			"가족을 잃은 조이의 의뢰는 그곳으로 이끌었다.",
			"겉은 완벽했지만, 드리워진 그림자가 느껴졌다.",
			"과거의 죄책감이, 이곳에서 다시 날 옥죄어온다."
		],
		"english": [
			"The Concordia Community, promising \"perfect harmony.\"",
			"Joey's request, after losing family, led me there.",
			"It seemed perfect on the surface, but I sensed a lurking shadow.",
			"The guilt of the past tightens its grip on me again here."
		],
		"japanese": [
			"「完璧な調和」を約束するコンコルディア共同体。",
			"家族を失ったジョーイの依頼が、私をそこへ導いた。",
			"見た目は完璧だったが、忍び寄る影を感じた。",
			"過去の罪悪感が、ここで再び私を締め付けてくる。"
		],
		"chinese": [
			"承诺“完美和谐”的康科迪亚社区。",
			"失去家人的乔伊的委托，将我引向了那里。",
			"表面看似完美，但我感受到了潜藏的阴影。",
			"过去的罪恶感，在这里再次将我束缚。"
		],
		"french": [
			"La communauté Concordia, promettant une \"harmonie parfaite\".",
			"La requête de Joey, après avoir perdu sa famille, m'a conduit là-bas.",
			"En surface, tout semblait parfait, mais je sentais une ombre menaçante.",
			"La culpabilité du passé me serre à nouveau ici."
		],
		"spanish": [
			"La Comunidad Concordia, que promete una \"armonía perfecta\".",
			"La petición de Joey, tras perder a su familia, me llevó allí.",
			"Parecía perfecto en la superficie, pero sentí una sombra acechando.",
			"La culpa del pasado me oprime de nuevo aquí."
		],
		"vietnamese": [
			"Cộng đồng Concordia, hứa hẹn \"sự hòa hợp hoàn hảo\".",
			"Yêu cầu của Joey, sau khi mất gia đình, đã dẫn tôi đến đó.",
			"Bề ngoài hoàn hảo, nhưng tôi cảm nhận được một bóng tối đang ẩn hiện.",
			"Tội lỗi trong quá khứ lại siết chặt tôi ở đây."
		],
		"thai": [
			"ชุมชนคอนคอร์เดีย ผู้ให้คำมั่น \"ความสามัคคีที่สมบูรณ์แบบ\"",
			"คำขอของจอย หลังจากการสูญเสียครอบครัว นำฉันไปที่นั่น",
			"ดูเหมือนสมบูรณ์แบบภายนอก แต่ฉันสัมผัสได้ถึงเงาที่แฝงอยู่",
			"ความรู้สึกผิดในอดีต กลับมาบีบรัดฉันอีกครั้งที่นี่"
		],
		"hindi": [
			"कॉनकॉर्डिया समुदाय, \"पूर्ण सद्भाव\" का वादा करता है।",
			"परिवार खोने के बाद, जॉय के अनुरोध ने मुझे वहाँ पहुँचाया।",
			"यह सतह पर तो सही लग रहा था, लेकिन मुझे एक छिपा हुआ साया महसूस हुआ।",
			"अतीत का अपराधबोध, यहाँ फिर से मुझे जकड़ रहा है।"
		]
	}
} as const;
