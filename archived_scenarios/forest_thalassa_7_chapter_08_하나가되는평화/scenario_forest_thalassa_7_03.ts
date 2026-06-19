export const scenario_forest_thalassa_7_03 = {
	"scenario_id": "forest_thalassa_7_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"몸이 평화로워지는 치유의 수액.",
			"그러나 그 평온은 곧 몸을 잠식하는 뿌리가 되어 돌아왔다.",
			"글렌은 경악했다. 이것은 치유가 아니다.",
			"몸이, 숲에 먹혀들고 있다."
		],
		"english": [
			"Healing sap that brings peace to the body.",
			"But that peace soon returned as roots consuming the body.",
			"Glen was horrified. This wasn't healing.",
			"His body was being devoured by the forest."
		],
		"japanese": [
			"体を平和にする癒しの樹液。",
			"しかし、その平穏はすぐに体を蝕む根となって戻ってきた。",
			"グレンは恐怖した。これは癒しではない。",
			"体が、森に喰われている。"
		],
		"chinese": [
			"让身体平静下来的治愈树液。",
			"然而，这份平静很快化为侵蚀身体的根系回归。",
			"格伦震惊了。这不是治愈。",
			"身体，正在被森林吞噬。"
		],
		"french": [
			"Une sève curative qui apaise le corps.",
			"Mais cette paix se transforma vite en racines dévorant le corps.",
			"Glen fut horrifié. Ce n'était pas une guérison.",
			"Son corps était dévoré par la forêt."
		],
		"spanish": [
			"Savia curativa que trae paz al cuerpo.",
			"Pero esa paz pronto regresó como raíces que consumían el cuerpo.",
			"Glen estaba horrorizado. Esto no era curación.",
			"Su cuerpo estaba siendo devorado por el bosque."
		],
		"vietnamese": [
			"Dịch cây chữa lành mang lại bình yên cho cơ thể.",
			"Nhưng sự bình yên ấy sớm trở lại thành những rễ cây nuốt chửng cơ thể.",
			"Glen kinh hoàng. Đây không phải là chữa lành.",
			"Cơ thể đang bị khu rừng nuốt chửng."
		],
		"thai": [
			"น้ำเลี้ยงบำบัดที่นำความสงบสุขมาสู่ร่างกาย",
			"แต่ความสงบนั้นกลับกลายเป็นรากที่กัดกินร่างกายในไม่ช้า",
			"เกล็นตกใจมาก นี่ไม่ใช่การรักษา",
			"ร่างกายกำลังถูกป่ากลืนกิน"
		],
		"hindi": [
			"शारीरिक शांति देने वाला उपचारक रस।",
			"परंतु वह शांति जल्द ही शरीर को निगलने वाली जड़ों के रूप में लौट आई।",
			"ग्लेन भयभीत था। यह उपचार नहीं था।",
			"शरीर, जंगल द्वारा निगला जा रहा था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "수액으로 뒤덮인 숲은 기묘한 평온이 감돌았다.",
						"english": "A strange calm hung over the sap-covered forest.",
						"japanese": "樹液に覆われた森は、奇妙な平穏に包まれていた。",
						"chinese": "被树液覆盖的森林弥漫着奇特的平静。",
						"french": "Un calme étrange planait sur la forêt recouverte de sève.",
						"spanish": "Una extraña calma envolvía el bosque cubierto de savia.",
						"vietnamese": "Một sự yên bình kỳ lạ bao trùm khu rừng phủ đầy dịch cây.",
						"thai": "ป่าที่ปกคลุมด้วยน้ำเลี้ยงนั้นมีความสงบประหลาด",
						"hindi": "रस से ढका जंगल एक अजीब शांति से घिरा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이상하게, 몸이 편안해지는 것 같아.",
						"english": "Strangely, my body feels at ease.",
						"japanese": "なぜか、体が楽になる気がする。",
						"chinese": "奇怪的是，身体感觉很放松。",
						"french": "Étrangement, mon corps semble s'apaiser.",
						"spanish": "Extrañamente, mi cuerpo se siente a gusto.",
						"vietnamese": "Lạ thật, cơ thể tôi dường như đang thư thái hơn.",
						"thai": "แปลกจัง ร่างกายรู้สึกสบายขึ้น",
						"hindi": "अजीब बात है, मेरा शरीर आरामदायक महसूस कर रहा है।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "glen"
				},
				{
					"speaker": "glen",
					"emotion": "sad",
					"content": {
						"korean": "이건… 정말 괜찮은 걸까요?",
						"english": "Is this... really okay?",
						"japanese": "これ…本当に大丈夫なのでしょうか？",
						"chinese": "这…真的没问题吗？",
						"french": "Est-ce… vraiment bien ?",
						"spanish": "¿Esto… realmente está bien?",
						"vietnamese": "Chuyện này... thật sự ổn chứ?",
						"thai": "นี่… มันจะดีจริงๆ เหรอ?",
						"hindi": "क्या यह... सचमुच ठीक है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야? 치유되고 있잖아.",
						"english": "What are you talking about? You're being healed.",
						"japanese": "何を言ってるんだ？ 治癒してるじゃないか。",
						"chinese": "说什么呢？ 你正在被治愈。",
						"french": "De quoi parles-tu ? Tu es en train de guérir.",
						"spanish": "¿De qué hablas? Estás siendo curado.",
						"vietnamese": "Cậu đang nói gì vậy? Cậu đang được chữa lành mà.",
						"thai": "พูดอะไรน่ะ? กำลังรักษาอยู่ไม่ใช่เหรอ?",
						"hindi": "क्या बकवास है? तुम ठीक हो रहे हो।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "glen",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…여기 좀 봐요.",
						"english": "...Look here.",
						"japanese": "…ここを見てください。",
						"chinese": "…看看这里。",
						"french": "...Regardez ici.",
						"spanish": "...Mira aquí.",
						"vietnamese": "...Nhìn đây này.",
						"thai": "…ดูนี่สิ",
						"hindi": "...यहाँ देखो।"
					},
					"emotion": "sad",
					"speaker": "glen",
					"type": "speech"
				},
				{
					"speaker": "glen",
					"emotion": "sad",
					"content": {
						"korean": "수액이 닿았던 자리에….",
						"english": "Where the sap touched...",
						"japanese": "樹液が触れた場所に…。",
						"chinese": "在树液接触过的地方…",
						"french": "Là où la sève a touché...",
						"spanish": "Donde la savia tocó...",
						"vietnamese": "Ở nơi dịch cây chạm vào...",
						"thai": "ตรงที่น้ำเลี้ยงสัมผัส…",
						"hindi": "जहाँ रस छूआ था…।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "피부 아래에서 검은 실뿌리들이 돋아나 있었다.",
						"english": "Black root-like threads were sprouting beneath the skin.",
						"japanese": "皮膚の下から黒い糸のような根が伸びていた。",
						"chinese": "皮肤下长出了黑色的丝状根。",
						"french": "Des racines filiformes noires poussaient sous la peau.",
						"spanish": "Hilos de raíces negras brotaban bajo la piel.",
						"vietnamese": "Những sợi rễ đen mọc ra dưới da.",
						"thai": "รากเส้นใยสีดำงอกออกมาใต้ผิวหนัง",
						"hindi": "त्वचा के नीचे से काले धागे जैसी जड़ें उग रही थीं।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이게 뭐야…?",
						"english": "What is this...?",
						"japanese": "これは何だ…？",
						"chinese": "这是什么…？",
						"french": "Qu'est-ce que c'est que ça… ?",
						"spanish": "¿Qué es esto…?",
						"vietnamese": "Cái gì thế này…?",
						"thai": "นี่มันอะไรกัน...?",
						"hindi": "यह क्या है…?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "glen",
					"emotion": "angry",
					"content": {
						"korean": "치유가 아니에요. 먹혀들고 있어요!",
						"english": "It's not healing. It's consuming!",
						"japanese": "治癒じゃない。食い尽くされているんだ！",
						"chinese": "这不是治愈。它在吞噬！",
						"french": "Ce n'est pas une guérison. Ça nous dévore !",
						"spanish": "No es curación. ¡Nos está consumiendo!",
						"vietnamese": "Không phải chữa lành. Nó đang nuốt chửng!",
						"thai": "นี่ไม่ใช่การรักษา มันกำลังกลืนกิน!",
						"hindi": "यह उपचार नहीं है। यह खा रहा है!"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "glen",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "glen",
					"content": {
						"korean": "수액이… 몸속으로 파고들고 있어요.",
						"english": "The sap... it's seeping into my body.",
						"japanese": "樹液が… 体の中に入り込んでいる。",
						"chinese": "树液…正渗入我的身体。",
						"french": "La sève… elle s'infiltre dans mon corps.",
						"spanish": "La savia… se está adentrando en mi cuerpo.",
						"vietnamese": "Nhựa cây… đang ngấm vào cơ thể tôi.",
						"thai": "น้ำเลี้ยง... มันกำลังซึมเข้าสู่ร่างกายของฉัน",
						"hindi": "रस… शरीर में रिस रहा है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "거짓말. 평화로워진다고 했잖아!",
						"english": "A lie. You said it would bring peace!",
						"japanese": "嘘だ。平和になると言ったじゃないか！",
						"chinese": "谎言。你不是说会带来平静吗！",
						"french": "Mensonge. Tu as dit que ça apporterait la paix !",
						"spanish": "Mentira. ¡Dijiste que traería paz!",
						"vietnamese": "Nói dối. Anh đã nói nó sẽ mang lại bình yên mà!",
						"thai": "โกหก! แกบอกว่ามันจะสงบสุข!",
						"hindi": "झूठ। तुमने कहा था कि यह शांति लाएगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "고통을 마비시킬 뿐이에요! 서서히… 몸을 잠식하는 거죠.",
						"english": "It only numbs the pain! Slowly... it's consuming the body.",
						"japanese": "痛みを麻痺させるだけだ！ ゆっくりと…体を蝕んでいるんだ。",
						"chinese": "它只会麻痹痛苦！慢慢地…吞噬身体。",
						"french": "Ça ne fait qu'engourdir la douleur ! Lentement… ça ronge le corps.",
						"spanish": "¡Solo adormece el dolor! Lentamente… está consumiendo el cuerpo.",
						"vietnamese": "Nó chỉ làm tê liệt nỗi đau! Dần dần… nó đang chiếm lấy cơ thể.",
						"thai": "มันแค่ทำให้ความเจ็บปวดชา! ช้าๆ... มันกำลังกัดกินร่างกาย!",
						"hindi": "यह सिर्फ दर्द को सुन्न करता है! धीरे-धीरे… यह शरीर को खा रहा है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "막아야 해. 더 늦기 전에.",
						"english": "We have to stop it. Before it's too late.",
						"japanese": "止めなければ。手遅れになる前に。",
						"chinese": "必须阻止它。趁为时不晚。",
						"french": "Il faut l'arrêter. Avant qu'il ne soit trop tard.",
						"spanish": "Hay que detenerlo. Antes de que sea demasiado tarde.",
						"vietnamese": "Phải ngăn chặn nó. Trước khi quá muộn.",
						"thai": "เราต้องหยุดมัน ก่อนที่จะสายเกินไป",
						"hindi": "हमें इसे रोकना होगा। इससे पहले कि बहुत देर हो जाए।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"speaker": "glen",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이미 너무 많은 사람들이… 숲의 일부가 됐어요.",
						"english": "Already, too many people... have become part of the forest.",
						"japanese": "もうすでに多くの人が… 森の一部になってしまった。",
						"chinese": "已经有太多人…成为了森林的一部分。",
						"french": "Déjà, trop de gens… sont devenus une partie de la forêt.",
						"spanish": "Demasiada gente ya… se ha vuelto parte del bosque.",
						"vietnamese": "Đã có quá nhiều người… trở thành một phần của khu rừng rồi.",
						"thai": "มีคนจำนวนมากเกินไปแล้ว... ที่กลายเป็นส่วนหนึ่งของป่า",
						"hindi": "पहले ही बहुत से लोग… जंगल का हिस्सा बन चुके हैं।"
					},
					"speaker": "glen",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…돌아갈 수 없다는 거야?",
						"english": "...You mean there's no going back?",
						"japanese": "…もう戻れないってことか？",
						"chinese": "…你是说回不去了吗？",
						"french": "…Tu veux dire qu'il n'y a pas de retour possible ?",
						"spanish": "…¿Quieres decir que no hay vuelta atrás?",
						"vietnamese": "…Ý anh là không thể quay lại sao?",
						"thai": "...หมายความว่าจะกลับไปไม่ได้แล้วเหรอ?",
						"hindi": "…क्या तुम्हारा मतलब है कि वापस नहीं जा सकते?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "막지 않으면… 우리도, 모두 숲이 될 거예요.",
						"english": "If we don't stop it... we'll all become the forest too.",
						"japanese": "止めなければ… 私たちも、みんな森になってしまう。",
						"chinese": "如果不阻止…我们也会，所有人都将成为森林。",
						"french": "Si on ne l'arrête pas… nous aussi, nous deviendrons tous la forêt.",
						"spanish": "Si no lo detenemos… nosotros también, todos seremos parte del bosque.",
						"vietnamese": "Nếu không ngăn chặn… chúng ta cũng sẽ, tất cả đều sẽ trở thành rừng.",
						"thai": "ถ้าเราไม่หยุดมัน... เราทุกคนก็จะกลายเป็นป่าไปด้วย",
						"hindi": "अगर हमने इसे नहीं रोका… तो हम भी, सब जंगल बन जाएँगे।"
					},
					"emotion": "angry",
					"speaker": "glen"
				},
				{
					"speaker": "character_3",
					"emotion": "angry",
					"content": {
						"korean": "끝을 봐야 해. 이 기만적인 평화의 끝을.",
						"english": "I must see the end. The end of this deceptive peace.",
						"japanese": "終わりを見なければならない。この欺瞞的な平和の終わりを。",
						"chinese": "我必须看到尽头。这欺骗性和平的尽头。",
						"french": "Je dois voir la fin. La fin de cette paix trompeuse.",
						"spanish": "Debo ver el final. El final de esta paz engañosa.",
						"vietnamese": "Ta phải thấy hồi kết. Hồi kết của nền hòa bình dối trá này.",
						"thai": "ฉันต้องเห็นจุดจบ จุดจบของสันติภาพหลอกลวงนี้",
						"hindi": "मुझे अंत देखना होगा। इस भ्रामक शांति का अंत।"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "마침내, 거대한 뿌리들이 뒤엉킨 공간.",
						"english": "Finally, a space where giant roots intertwine.",
						"japanese": "ついに、巨大な根が絡み合う空間。",
						"chinese": "终于，巨型根系盘绕的空间。",
						"french": "Enfin, un espace où d'immenses racines s'entrelacent.",
						"spanish": "Finalmente, un espacio donde las raíces gigantes se entrelazan.",
						"vietnamese": "Cuối cùng, một không gian nơi những rễ cây khổng lồ đan xen.",
						"thai": "ในที่สุด พื้นที่ที่รากไม้ยักษ์พันกันยุ่งเหยิง",
						"hindi": "अंत में, एक ऐसी जगह जहाँ विशाल जड़ें आपस में गुँथी हुई हैं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…평화롭지 않더냐?",
						"english": "...Is it not peaceful?",
						"japanese": "...平和ではないのか？",
						"chinese": "...难道不平静吗？",
						"french": "...N'est-ce pas paisible ?",
						"spanish": "...¿No es pacífico?",
						"vietnamese": "...Không phải rất bình yên sao?",
						"thai": "...ไม่สงบสุขหรือไง?",
						"hindi": "...क्या यह शांतिपूर्ण नहीं है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고통 없이, 영원히 숲과 하나가 되는 길을 열어주었을 뿐인데.",
						"english": "I merely opened a path to become one with the forest, eternally, without pain.",
						"japanese": "苦痛なく、永遠に森と一つになる道を開いただけなのに。",
						"chinese": "我只是开辟了一条无痛、永远与森林融为一体的道路。",
						"french": "J'ai seulement ouvert un chemin pour ne faire qu'un avec la forêt, éternellement, sans douleur.",
						"spanish": "Solo abrí un camino para unirse al bosque, eternamente, sin dolor.",
						"vietnamese": "Ta chỉ mở ra một con đường để hòa mình vào rừng vĩnh viễn, không đau đớn.",
						"thai": "ฉันแค่เปิดทางให้เป็นหนึ่งเดียวกับป่าตลอดไป โดยปราศจากความเจ็บปวด",
						"hindi": "मैंने तो बस बिना दर्द के, हमेशा के लिए जंगल के साथ एक होने का रास्ता दिखाया है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그게 소멸이라면, 우린 거부한다!",
						"english": "If that is annihilation, we refuse!",
						"japanese": "それが消滅なら、我々は拒否する！",
						"chinese": "如果那是湮灭，我们拒绝！",
						"french": "Si c'est l'anéantissement, nous refusons !",
						"spanish": "¡Si eso es aniquilación, nos negamos!",
						"vietnamese": "Nếu đó là sự tiêu diệt, chúng tôi từ chối!",
						"thai": "ถ้ามันคือการทำลายล้าง พวกเราปฏิเสธ!",
						"hindi": "अगर वह विनाश है, तो हम इनकार करते हैं!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석은 것들. 고통이 사라지면, 평온이 오지.",
						"english": "...Foolish beings. When pain fades, serenity comes.",
						"japanese": "...愚かな者たち。苦痛が消えれば、平穏が訪れる。",
						"chinese": "...愚蠢的家伙。痛苦消散，平静自来。",
						"french": "...Créatures stupides. Quand la douleur disparaît, la sérénité vient.",
						"spanish": "...Criaturas tontas. Cuando el dolor se desvanece, llega la serenidad.",
						"vietnamese": "...Những kẻ ngu ngốc. Khi nỗi đau tan biến, bình yên sẽ đến.",
						"thai": "...พวกโง่เขลา เมื่อความเจ็บปวดหายไป ความสงบก็จะมาเยือน",
						"hindi": "...मूर्ख प्राणी। जब दर्द मिट जाता है, तो शांति आती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "이것은 시작일 뿐… 숲은, 언제나 모든 것을 품는다.",
						"english": "This is merely the beginning... The forest always embraces all.",
						"japanese": "これは始まりに過ぎない… 森は、常に全てを抱擁する。",
						"chinese": "这仅仅是开始……森林，永远包容一切。",
						"french": "Ce n'est que le début... La forêt embrasse toujours tout.",
						"spanish": "Esto es solo el principio... El bosque siempre lo abraza todo.",
						"vietnamese": "Đây chỉ là khởi đầu... Rừng luôn ôm trọn tất cả.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น... ป่าโอบกอดทุกสิ่งเสมอ",
						"hindi": "यह तो बस शुरुआत है... वन हमेशा सब कुछ समेट लेता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "겨우 끝난 건가…?",
						"english": "Is it finally over...?",
						"japanese": "ようやく終わったのか…？",
						"chinese": "终于结束了吗？",
						"french": "Est-ce enfin terminé...?",
						"spanish": "¿Por fin ha terminado...?",
						"vietnamese": "Cuối cùng cũng kết thúc rồi sao...?",
						"thai": "มันจบลงแล้วเหรอ...?",
						"hindi": "क्या यह आखिरकार खत्म हो गया...?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "쓰러진 그림자는 다시 숲으로 스며들었다. 하지만, 진정한 평화는 아직 오지 않았다.",
						"english": "The fallen shadow seeped back into the forest. But true peace has not yet arrived.",
						"japanese": "倒れた影は再び森へと溶け込んだ。しかし、真の平和はまだ訪れていない。",
						"chinese": "倒下的影子再次渗入森林。然而，真正的和平尚未到来。",
						"french": "L'ombre tombée s'est infiltrée de nouveau dans la forêt. Mais la vraie paix n'est pas encore arrivée.",
						"spanish": "La sombra caída se filtró de nuevo en el bosque. Pero la verdadera paz aún no ha llegado.",
						"vietnamese": "Cái bóng đã ngã gục lại thấm vào rừng. Nhưng hòa bình thực sự vẫn chưa đến.",
						"thai": "เงาที่ล้มลงซึมซาบกลับเข้าไปในป่า แต่สันติภาพที่แท้จริงยังมาไม่ถึง",
						"hindi": "गिरी हुई परछाई वापस जंगल में समा गई। लेकिन सच्ची शांति अभी तक नहीं आई है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그리고, 땅속 깊이… 감춰진 것들이 있었다.",
						"english": "And, deep beneath the earth... there were hidden things.",
						"japanese": "そして、地中深くには…隠されたものがあった。",
						"chinese": "而且，在地下深处……隐藏着一些东西。",
						"french": "Et, profondément sous terre... il y avait des choses cachées.",
						"spanish": "Y, en lo profundo de la tierra... había cosas ocultas.",
						"vietnamese": "Và, sâu trong lòng đất... có những thứ bị che giấu.",
						"thai": "และลึกลงไปใต้พื้นดิน... มีบางสิ่งซ่อนอยู่",
						"hindi": "और, धरती के बहुत नीचे... कुछ छिपी हुई चीज़ें थीं।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…아직도 깨닫지 못했더냐.",
						"english": "...Still haven't realized?",
						"japanese": "...まだ気づかぬか。",
						"chinese": "...难道你还没明白吗？",
						"french": "...Toujours pas compris ?",
						"spanish": "¿...Aún no te das cuenta?",
						"vietnamese": "...Vẫn chưa nhận ra sao?",
						"thai": "...ยังไม่รู้ตัวอีกหรือ?",
						"hindi": "...क्या तुम्हें अभी भी एहसास नहीं हुआ?"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "고통은 사라지고, 너희는 숲이 될 것이다.",
						"english": "Pain will vanish, and you shall become the forest.",
						"japanese": "苦痛は消え、お前たちは森となるだろう。",
						"chinese": "痛苦将消逝，你们将化作森林。",
						"french": "La douleur disparaîtra, et vous deviendrez la forêt.",
						"spanish": "El dolor desaparecerá, y os convertiréis en el bosque.",
						"vietnamese": "Nỗi đau sẽ tan biến, và các ngươi sẽ hóa thành rừng cây.",
						"thai": "ความเจ็บปวดจะหายไป และพวกเจ้าจะเป็นป่าไม้",
						"hindi": "दर्द मिट जाएगा, और तुम सब वन बन जाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니! 우린… 멈추지 않아!",
						"english": "No! We... won't stop!",
						"japanese": "いや！ 我らは… 止まらない！",
						"chinese": "不！我们…绝不停止！",
						"french": "Non ! Nous… ne nous arrêterons pas !",
						"spanish": "¡No! ¡Nosotros… no nos detendremos!",
						"vietnamese": "Không! Chúng ta… sẽ không dừng lại!",
						"thai": "ไม่! พวกเรา… จะไม่หยุด!",
						"hindi": "नहीं! हम… रुकेंगे नहीं!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
