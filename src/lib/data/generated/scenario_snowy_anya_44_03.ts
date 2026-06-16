export const scenario_snowy_anya_44_03 = {
	"scenario_id": "snowy_anya_44_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오랜 시간 눈에 갇혔던 정착지가 모습을 드러냈다. 빛은 가장 작은 거처 앞에 멈춰 있었다.",
						"english": "The settlement, long trapped in snow, revealed itself. The light stopped before the smallest dwelling.",
						"japanese": "長い間雪に閉ざされていた集落が姿を現した。光は一番小さな住処の前に止まっていた。",
						"chinese": "被雪困了许久的定居点显露出来。光停在了最小的居所前。",
						"french": "Le campement, longtemps prisonnier des neiges, se révéla. La lumière s'arrêta devant la plus petite demeure.",
						"spanish": "El asentamiento, mucho tiempo atrapado en la nieve, se reveló. La luz se detuvo frente a la morada más pequeña.",
						"vietnamese": "Khu định cư bị tuyết bao phủ lâu ngày đã lộ diện. Ánh sáng dừng lại trước căn nhà nhỏ nhất.",
						"thai": "ถิ่นฐานที่ถูกหิมะปกคลุมมานานได้ปรากฏขึ้น แสงหยุดลงตรงหน้าบ้านที่เล็กที่สุด",
						"hindi": "बर्फ में लंबे समय से फंसी बस्ती सामने आई। प्रकाश सबसे छोटे निवास स्थान के सामने रुका हुआ था।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "여기가… 집이구나. 돌아갈 곳.",
						"english": "This is... home. A place to return to.",
						"japanese": "ここが…家か。帰る場所。",
						"chinese": "这里是……家。可以回去的地方。",
						"french": "C'est... chez moi. Un endroit où revenir.",
						"spanish": "Aquí es... el hogar. Un lugar al que volver.",
						"vietnamese": "Đây là... nhà. Nơi để trở về.",
						"thai": "ที่นี่คือ...บ้าน สินะ ที่ที่จะกลับไป",
						"hindi": "यह है... घर। लौटने की जगह।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "집?",
						"english": "Home?",
						"japanese": "家？",
						"chinese": "家？",
						"french": "Chez moi ?",
						"spanish": "¿Hogar?",
						"vietnamese": "Nhà?",
						"thai": "บ้าน?",
						"hindi": "घर?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "빛이… 집을 잊지 못하는군.",
						"english": "The light... cannot forget its home.",
						"japanese": "光は…家を忘れられないようだな。",
						"chinese": "光……忘不了家啊。",
						"french": "La lumière... ne peut pas oublier sa maison.",
						"spanish": "La luz... no puede olvidar su hogar.",
						"vietnamese": "Ánh sáng... không thể quên nhà.",
						"thai": "แสง...คงลืมบ้านไม่ได้สินะ",
						"hindi": "प्रकाश... घर को भूल नहीं पा रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 룬 기록… '폭풍의 밤'?",
						"english": "These rune records... 'Night of the Storm'?",
						"japanese": "このルーンの記録…「嵐の夜」か？",
						"chinese": "这些符文记录……是‘风暴之夜’？",
						"french": "Ces registres runiques... « Nuit de la Tempête » ?",
						"spanish": "Estos registros rúnicos... ¿'Noche de la Tormenta'?",
						"vietnamese": "Những ghi chép cổ ngữ này... 'Đêm bão tố'?",
						"thai": "บันทึกอักษรรูนนี่... 'คืนพายุ'?",
						"hindi": "ये रूण अभिलेख... 'तूफान की रात'?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "가족이 뿔뿔이 흩어졌다고 적혀 있어.",
						"english": "It says the family was scattered.",
						"japanese": "家族が散り散りになったと書かれている。",
						"chinese": "上面写着家人四散了。",
						"french": "Il est écrit que la famille a été dispersée.",
						"spanish": "Dice que la familia se dispersó.",
						"vietnamese": "Có ghi rằng gia đình đã ly tán.",
						"thai": "มีบันทึกว่าครอบครัวกระจัดกระจาย",
						"hindi": "लिखा है कि परिवार बिखर गया था।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "…그 밤의 아이였나.",
						"english": "...It was the child of that night.",
						"japanese": "…あの夜の子供だったのか。",
						"chinese": "…是那个夜晚的孩子。",
						"french": "...C'était l'enfant de cette nuit-là.",
						"spanish": "...Era el niño de esa noche.",
						"vietnamese": "...Đó là đứa trẻ của đêm đó.",
						"thai": "...เป็นเด็กของค่ำคืนนั้นเอง",
						"hindi": "...वह उस रात का बच्चा था।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누구 말이야?",
						"english": "Who are you talking about?",
						"japanese": "誰のことだ？",
						"chinese": "你在说谁？",
						"french": "De qui parles-tu ?",
						"spanish": "¿De quién hablas?",
						"vietnamese": "Anh đang nói về ai?",
						"thai": "คุณกำลังพูดถึงใคร?",
						"hindi": "तुम किसकी बात कर रहे हो?"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bran",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아이는… 집으로 돌아오지 못했어. 영원히.",
						"english": "The child... never returned home. Forever.",
						"japanese": "その子は…家には戻らなかった。永遠に。",
						"chinese": "孩子…再也没有回家。永远。",
						"french": "L'enfant... n'est jamais rentré chez lui. Pour toujours.",
						"spanish": "El niño... nunca regresó a casa. Para siempre.",
						"vietnamese": "Đứa bé... không bao giờ trở về nhà. Mãi mãi.",
						"thai": "เด็กคนนั้น... ไม่เคยกลับบ้านอีกเลย ตลอดไป",
						"hindi": "बच्चा... कभी घर नहीं लौटा। हमेशा के लिए।"
					},
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그 빛이, 그 아이란 말이야?",
						"english": "That light, is that child?",
						"japanese": "あの光が、その子なのか？",
						"chinese": "那道光，是那个孩子吗？",
						"french": "Cette lumière, c'est l'enfant ?",
						"spanish": "¿Esa luz es ese niño?",
						"vietnamese": "Ánh sáng đó, có phải là đứa trẻ đó không?",
						"thai": "แสงนั้นคือเด็กคนนั้นเหรอ?",
						"hindi": "वह रोशनी, क्या वह बच्चा है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어쩌면. 길을 잃은 영혼은… 빛을 따라가거든.",
						"english": "Perhaps. Lost souls... follow the light.",
						"japanese": "もしかしたら。道に迷った魂は…光を追うから。",
						"chinese": "也许吧。迷失的灵魂…会追随光芒。",
						"french": "Peut-être. Les âmes perdues... suivent la lumière.",
						"spanish": "Quizás. Las almas perdidas... siguen la luz.",
						"vietnamese": "Có lẽ. Những linh hồn lạc lối... đi theo ánh sáng.",
						"thai": "อาจจะ วิญญาณที่หลงทาง... จะตามแสงไป",
						"hindi": "शायद। भटकी हुई आत्माएं... रोशनी का पीछा करती हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "그럼 우리가… 아이를 집으로 돌려보내는 건가?",
						"english": "Then are we... sending the child home?",
						"japanese": "それなら私たちが…子供を家に帰すのか？",
						"chinese": "那我们…是要送孩子回家吗？",
						"french": "Alors, allons-nous... ramener l'enfant à la maison ?",
						"spanish": "¿Entonces nosotros... estamos enviando al niño a casa?",
						"vietnamese": "Vậy chúng ta... đang đưa đứa trẻ về nhà sao?",
						"thai": "ถ้าอย่างนั้น เรา... กำลังส่งเด็กคนนั้นกลับบ้านเหรอ?",
						"hindi": "तो क्या हम... बच्चे को घर भेज रहे हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "bran",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "룬 기록은 폭풍의 밤, 가족이 뿔뿔이 흩어졌다는 구절을 다시 한번 강조했다.",
						"english": "The rune record once again emphasized the passage about the family being scattered on a stormy night.",
						"japanese": "ルーンの記録は、嵐の夜に家族が散り散りになったという一節を改めて強調していた。",
						"chinese": "符文记录再次强调了关于暴风雨之夜家人四散的章节。",
						"french": "Le registre runique soulignait une fois de plus le passage concernant la famille dispersée par une nuit d'orage.",
						"spanish": "El registro rúnico enfatizó una vez más el pasaje sobre la familia dispersa en una noche de tormenta.",
						"vietnamese": "Ghi chép của rune một lần nữa nhấn mạnh đoạn văn về việc gia đình ly tán trong một đêm bão tố.",
						"thai": "บันทึกอักขระรูนเน้นย้ำอีกครั้งถึงข้อความที่ว่าครอบครัวต้องพลัดพรากกันในคืนพายุ",
						"hindi": "रूण रिकॉर्ड ने एक बार फिर तूफानी रात में परिवार के बिखर जाने वाले अंश पर जोर दिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이 슬픔이… 수백 년 전의 이야기라고?",
						"english": "This sorrow... is a story from hundreds of years ago?",
						"japanese": "この悲しみが…数百年前の物語だと？",
						"chinese": "这份悲伤…是几百年前的故事吗？",
						"french": "Cette tristesse... est une histoire d'il y a des centaines d'années ?",
						"spanish": "¿Esta tristeza... es una historia de hace cientos de años?",
						"vietnamese": "Nỗi buồn này... là câu chuyện từ hàng trăm năm trước sao?",
						"thai": "ความเศร้าโศกนี้... เป็นเรื่องราวเมื่อหลายร้อยปีก่อนเหรอ?",
						"hindi": "यह दुख... सैकड़ों साल पहले की कहानी है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "시간은… 슬픔을 묻을 뿐, 지우지 못해.",
						"english": "Time... only buries sorrow, it doesn't erase it.",
						"japanese": "時間は…悲しみを埋めるだけで、消し去ることはできない。",
						"chinese": "时间…只会埋葬悲伤，而不会抹去它。",
						"french": "Le temps... ne fait qu'enfouir la tristesse, il ne l'efface pas.",
						"spanish": "El tiempo... solo entierra la tristeza, no la borra.",
						"vietnamese": "Thời gian... chỉ chôn vùi nỗi buồn, chứ không xóa bỏ nó.",
						"thai": "เวลา... เพียงแต่ฝังความเศร้า ไม่ได้ลบเลือนมัน",
						"hindi": "समय... केवल दुख को दफन करता है, उसे मिटाता नहीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bran"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이대로 가면, 우린… 더 깊은 곳으로 가는 거야.",
						"english": "If we continue like this, we'll... go deeper.",
						"japanese": "このまま行けば、私たちは…もっと深いところへ行くことになる。",
						"chinese": "如果我们继续这样下去，我们…会去更深的地方。",
						"french": "Si nous continuons comme ça, nous allons... aller plus profond.",
						"spanish": "Si seguimos así, nosotros... iremos más profundo.",
						"vietnamese": "Nếu chúng ta tiếp tục thế này, chúng ta... sẽ đi sâu hơn.",
						"thai": "ถ้าเรายังคงเป็นแบบนี้ต่อไป เราก็จะ... ไปยังที่ลึกกว่านี้",
						"hindi": "अगर हम ऐसे ही चलते रहे, तो हम... और गहराई में चले जाएंगे।"
					}
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "아이를 위한 길을 열어야 해.",
						"english": "We must clear a path for the child.",
						"japanese": "子供のために道を開けなければなりません。",
						"chinese": "我们必须为孩子开辟道路。",
						"french": "Nous devons ouvrir la voie à l'enfant.",
						"spanish": "Debemos abrir un camino para el niño.",
						"vietnamese": "Chúng ta phải mở đường cho đứa bé.",
						"thai": "เราต้องเปิดทางให้เด็ก",
						"hindi": "हमें बच्चे के लिए रास्ता खोलना होगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "방의 중앙에, 거대한 그림자가 길을 막았다. 정착지의 마지막 수호자였다.",
						"english": "In the center of the room, a giant shadow blocked the way. It was the last guardian of the settlement.",
						"japanese": "部屋の中央で、巨大な影が道を塞いでいた。それは定住地の最後の守護者だった。",
						"chinese": "在房间中央，一个巨大的黑影挡住了去路。它是定居点的最后守护者。",
						"french": "Au centre de la pièce, une ombre gigantesque bloquait le chemin. C'était le dernier gardien de la colonie.",
						"spanish": "En el centro de la habitación, una sombra gigantesca bloqueaba el paso. Era el último guardián del asentamiento.",
						"vietnamese": "Ở trung tâm căn phòng, một bóng đen khổng lồ chặn lối đi. Đó là người bảo vệ cuối cùng của khu định cư.",
						"thai": "กลางห้อง เงาขนาดยักษ์ขวางทางอยู่ มันคือผู้พิทักษ์สุดท้ายของถิ่นฐาน",
						"hindi": "कमरे के केंद्र में, एक विशाल छाया ने रास्ता रोक दिया। वह बस्ती का अंतिम संरक्षक था।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "더 이상… 과거를 들추지 마라.",
						"english": "No more... Do not unearth the past.",
						"japanese": "これ以上… 過去を暴くな。",
						"chinese": "别再… 揭露过去了。",
						"french": "Plus jamais… Ne remuez pas le passé.",
						"spanish": "No más... No desentierres el pasado.",
						"vietnamese": "Đừng… khơi lại quá khứ nữa.",
						"thai": "อย่า… ขุดคุ้ยอดีตอีกเลย",
						"hindi": "अब और नहीं… अतीत को मत कुरेदो।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "길을 비켜! 우리는 아이를 돌려보내야 해!",
						"english": "Move aside! We must send the child back!",
						"japanese": "道を開けろ！私たちは子供を戻さなければならない！",
						"chinese": "让开！我们必须把孩子送回去！",
						"french": "Écarte-toi ! Nous devons renvoyer l'enfant !",
						"spanish": "¡Apártate! ¡Tenemos que devolver al niño!",
						"vietnamese": "Tránh ra! Chúng ta phải đưa đứa bé trở lại!",
						"thai": "หลบไป! เราต้องส่งเด็กกลับไป!",
						"hindi": "हट जाओ! हमें बच्चे को वापस भेजना होगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이곳은… 슬픔의 무게로 닫혔어.",
						"english": "This place... is sealed by the weight of sorrow.",
						"japanese": "ここは… 悲しみの重みで閉ざされた。",
						"chinese": "这个地方… 被悲伤的重负封闭了。",
						"french": "Cet endroit… est scellé par le poids du chagrin.",
						"spanish": "Este lugar... está sellado por el peso de la tristeza.",
						"vietnamese": "Nơi này… đã bị đóng kín bởi gánh nặng của nỗi buồn.",
						"thai": "ที่นี่… ถูกปิดผนึกด้วยน้ำหนักแห่งความเศร้า",
						"hindi": "यह स्थान… दुख के बोझ से बंद हो गया है।"
					},
					"speaker": "bran"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내 영역이다. 돌아가라.",
						"english": "This is my domain. Go back.",
						"japanese": "ここは私の領域だ。帰れ。",
						"chinese": "这是我的领域。回去吧。",
						"french": "C'est mon domaine. Retournez.",
						"spanish": "Este es mi dominio. Regresa.",
						"vietnamese": "Đây là lãnh địa của ta. Quay về đi.",
						"thai": "นี่คืออาณาเขตของข้า กลับไปซะ",
						"hindi": "यह मेरा क्षेत्र है। वापस जाओ।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "결국… 진실은… 풀려나는가….",
						"english": "In the end... will the truth... be revealed...?",
						"japanese": "結局… 真実は… 明かされるのか…。",
						"chinese": "最终… 真相… 会被揭露吗…。",
						"french": "Finalement… la vérité… sera-t-elle révélée…?",
						"spanish": "Al final... ¿la verdad... será revelada...?",
						"vietnamese": "Cuối cùng… sự thật… sẽ được hé lộ sao…?",
						"thai": "ในที่สุด… ความจริง… จะถูกเปิดเผย…",
						"hindi": "अंत में… क्या सच… सामने आएगा…?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "이젠… 자유로워질 거야.",
						"english": "Now... I will be free.",
						"japanese": "これで… 自由になれるだろう。",
						"chinese": "我将… 获得自由。",
						"french": "Maintenant… je serai libre.",
						"spanish": "Ahora… seré libre.",
						"vietnamese": "Giờ đây… ta sẽ được tự do.",
						"thai": "ตอนนี้… ข้าจะเป็นอิสระแล้ว",
						"hindi": "अब… मैं स्वतंत्र हो जाऊँगा।"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "bran",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "빛이… 조금 더 선명해졌어. 이제… 갈 곳을 알게 되겠지.",
						"english": "The light… has become a little clearer. Now… you will know where to go.",
						"japanese": "光が… 少し鮮明になった。もう… 行くべき場所が分かるだろう。",
						"chinese": "光芒… 变得更加清晰了。现在… 你会知道该去哪里了。",
						"french": "La lumière… est devenue un peu plus claire. Maintenant… tu sauras où aller.",
						"spanish": "La luz… se ha vuelto un poco más clara. Ahora… sabrás adónde ir.",
						"vietnamese": "Ánh sáng… đã rõ ràng hơn một chút. Giờ đây… con sẽ biết nơi phải đến.",
						"thai": "แสง… ชัดเจนขึ้นเล็กน้อยแล้ว ตอนนี้… เจ้าคงรู้ว่าจะไปที่ไหน",
						"hindi": "प्रकाश… थोड़ा और स्पष्ट हो गया है। अब… तुम जान जाओगे कि कहाँ जाना है।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오랜 비극의 한 조각이 마침내 제자리를 찾았다. 그러나 아직, 빛의 모든 이야기가 드러난 것은 아니었다.",
						"english": "A piece of a long tragedy has finally found its place. But still, not all of the light's story has been revealed.",
						"japanese": "長きにわたる悲劇の一片が、ついにその場所を見つけた。しかし、まだ、光の物語のすべてが明らかになったわけではなかった。",
						"chinese": "一段漫长悲剧的碎片终于找到了它的位置。然而，光的全部故事尚未揭示。",
						"french": "Un fragment d'une longue tragédie a enfin trouvé sa place. Mais encore, toute l'histoire de la lumière n'a pas été révélée.",
						"spanish": "Un fragmento de una larga tragedia finalmente ha encontrado su lugar. Pero aún así, no toda la historia de la luz ha sido revelada.",
						"vietnamese": "Một mảnh ghép của bi kịch kéo dài cuối cùng đã tìm thấy vị trí của nó. Nhưng vẫn chưa phải tất cả câu chuyện về ánh sáng đã được tiết lộ.",
						"thai": "ชิ้นส่วนหนึ่งของโศกนาฏกรรมอันยาวนานได้พบที่ของมันในที่สุด แต่เรื่องราวทั้งหมดของแสงสว่างยังไม่ได้ถูกเปิดเผย",
						"hindi": "एक लंबे दुखद प्रसंग का एक टुकड़ा आखिरकार अपनी जगह पर आ गया है। लेकिन अभी भी, प्रकाश की पूरी कहानी सामने नहीं आई है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이곳의 슬픔은… 영원하다.",
						"english": "The sorrow here... is eternal.",
						"japanese": "ここの悲しみは…永遠だ。",
						"chinese": "这里的悲伤…是永恒的。",
						"french": "La tristesse ici... est éternelle.",
						"spanish": "La tristeza aquí... es eterna.",
						"vietnamese": "Nỗi buồn nơi đây... là vĩnh cửu.",
						"thai": "ความเศร้าที่นี่... เป็นนิรันดร์",
						"hindi": "यहाँ का दुख… अनंत है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Aún no... ha terminado!",
						"vietnamese": "Vẫn... chưa kết thúc!",
						"thai": "ยัง...ไม่จบ!",
						"hindi": "अभी… ख़त्म नहीं हुआ है!"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "bran",
					"type": "direction"
				},
				{
					"content": {
						"korean": "포기해선 안 돼. 아이가… 기다리고 있어.",
						"english": "Don't give up. The child... is waiting.",
						"japanese": "諦めるな。子供が…待っている。",
						"chinese": "不能放弃。孩子…在等着。",
						"french": "Il ne faut pas abandonner. L'enfant... attend.",
						"spanish": "No debes rendirte. El niño... está esperando.",
						"vietnamese": "Đừng bỏ cuộc. Đứa bé... đang đợi.",
						"thai": "อย่าเพิ่งยอมแพ้ เด็กคนนั้น...กำลังรออยู่",
						"hindi": "हार मत मानो। बच्चा… इंतज़ार कर रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bran"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"옛 정착지, 눈 아래 잠든 기억.",
			"빛은 하나의 거처 앞에 멈춰 섰다.",
			"그 밤, 폭풍이 모든 것을 흩어놓았다.",
			"그리고, 집을 찾지 못한 작은 온기 하나."
		],
		"english": [
			"An old settlement, memories sleeping beneath the snow.",
			"The light stopped before a single dwelling.",
			"That night, the storm scattered everything.",
			"And a small warmth, unable to find its way home."
		],
		"japanese": [
			"古の集落、雪の下に眠る記憶。",
			"光は一つの住処の前に立ち止まった。",
			"その夜、嵐は全てを散り散りにした。",
			"そして、家を見つけられなかった小さな温もり一つ。"
		],
		"chinese": [
			"古老的定居点，雪下沉睡的记忆。",
			"光停在了一处居所前。",
			"那个夜晚，风暴将一切吹散。",
			"以及，一份未能找到归途的微弱温暖。"
		],
		"french": [
			"Un ancien campement, des souvenirs endormis sous la neige.",
			"La lumière s'arrêta devant une unique demeure.",
			"Cette nuit-là, la tempête dispersa tout.",
			"Et une petite chaleur, incapable de retrouver son chemin."
		],
		"spanish": [
			"Un antiguo asentamiento, recuerdos durmiendo bajo la nieve.",
			"La luz se detuvo frente a una morada.",
			"Esa noche, la tormenta lo dispersó todo.",
			"Y una pequeña calidez, incapaz de encontrar su hogar."
		],
		"vietnamese": [
			"Khu định cư xưa, ký ức ngủ vùi dưới lớp tuyết.",
			"Ánh sáng dừng lại trước một căn nhà.",
			"Đêm đó, bão tố đã cuốn trôi mọi thứ.",
			"Và một chút hơi ấm nhỏ bé, không tìm được về nhà."
		],
		"thai": [
			"ถิ่นฐานเก่าแก่ ความทรงจำหลับใหลใต้หิมะ",
			"แสงหยุดลงตรงหน้าบ้านหลังหนึ่ง",
			"คืนนั้น พายุพัดพาทุกสิ่งกระจัดกระจาย",
			"และไออุ่นเล็กๆ ที่หาทางกลับบ้านไม่เจอ"
		],
		"hindi": [
			"पुरानी बस्ती, बर्फ के नीचे सोई यादें।",
			"प्रकाश एक निवास स्थान के सामने रुका।",
			"उस रात, तूफान ने सब कुछ बिखेर दिया।",
			"और एक छोटी सी गर्माहट, जो घर नहीं ढूंढ पाई।"
		]
	}
} as const;
