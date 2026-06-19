export const scenario_forest_conduit_8_03 = {
	"scenario_id": "forest_conduit_8_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "숲의 깊은 곳. 묘한 정적만이 감돌았다.",
						"english": "Deep in the forest. Only a strange stillness lingered.",
						"japanese": "森の奥深く。奇妙な静寂だけが漂っていた。",
						"chinese": "森林深处。只有一种诡异的寂静弥漫着。",
						"french": "Au plus profond de la forêt. Seule une étrange quiétude persistait.",
						"spanish": "En lo profundo del bosque. Solo una extraña quietud persistía.",
						"vietnamese": "Sâu trong rừng. Chỉ có một sự tĩnh lặng kỳ lạ bao trùm.",
						"thai": "ลึกเข้าไปในป่า. มีเพียงความเงียบงันแปลกๆ แผ่ซ่าน.",
						"hindi": "जंगल की गहराई में। केवल एक अजीब सन्नाटा पसरा हुआ था।"
					}
				},
				{
					"content": {
						"korean": "숲 소리가… 이상해.",
						"english": "The forest... sounds odd.",
						"japanese": "森の音が…おかしい。",
						"chinese": "森林的声音…很奇怪。",
						"french": "La forêt... sonne étrange.",
						"spanish": "El bosque... suena extraño.",
						"vietnamese": "Tiếng rừng... thật lạ.",
						"thai": "เสียงป่า... แปลกไป.",
						"hindi": "जंगल की आवाजें... अजीब हैं।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "hazel",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hazel",
					"content": {
						"korean": "…점점 더 빨려 들어가.",
						"english": "...Getting sucked in more and more.",
						"japanese": "…どんどん吸い込まれていく。",
						"chinese": "…被吸入得越来越深。",
						"french": "...C'est de plus en plus aspiré.",
						"spanish": "...Se está absorbiendo cada vez más.",
						"vietnamese": "...Càng lúc càng bị hút vào.",
						"thai": "...ถูกดูดเข้าไปลึกขึ้นเรื่อยๆ.",
						"hindi": "...यह और गहरा खींच रहा है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭐가?",
						"english": "What is?",
						"japanese": "何が？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "숲의 기운이… 저 정체 모를 자 주변으로.",
						"english": "The forest's energy... towards that unknown entity.",
						"japanese": "森の気が…あの正体不明の者の周りに。",
						"chinese": "森林的能量…朝向那个不明身份的家伙。",
						"french": "L'énergie de la forêt... vers cette entité inconnue.",
						"spanish": "La energía del bosque... hacia esa entidad desconocida.",
						"vietnamese": "Năng lượng của rừng... hướng về kẻ không rõ danh tính kia.",
						"thai": "พลังของป่า... มุ่งสู่สิ่งนั้นที่ไม่รู้จัก.",
						"hindi": "जंगल की ऊर्जा... उस अज्ञात इकाई की ओर।"
					},
					"speaker": "hazel"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "hazel",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저 소식통은 정보를 주는 게 아니야.",
						"english": "That source isn't a source of information.",
						"japanese": "あの情報源は、情報を与えているわけじゃない。",
						"chinese": "那个消息源不是在提供信息。",
						"french": "Cette source ne donne pas d'informations.",
						"spanish": "Esa fuente no está dando información.",
						"vietnamese": "Nguồn tin đó không phải đang cung cấp thông tin.",
						"thai": "แหล่งข่าวนั้นไม่ได้ให้ข้อมูล.",
						"hindi": "वह स्रोत जानकारी नहीं दे रहा है।"
					},
					"speaker": "hazel"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何なんだ？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "Entonces, ¿qué es?",
						"vietnamese": "Vậy thì là gì?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो फिर क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "hazel",
					"content": {
						"korean": "숲을… 삼키고 있어.",
						"english": "It's... devouring the forest.",
						"japanese": "森を… 飲み込んでいる。",
						"chinese": "它正在…吞噬森林。",
						"french": "Il... dévore la forêt.",
						"spanish": "Está... devorando el bosque.",
						"vietnamese": "Nó đang... nuốt chửng khu rừng.",
						"thai": "มันกำลัง... กลืนกินป่า",
						"hindi": "यह... जंगल को निगल रहा है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그게 무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "那是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là gì?",
						"thai": "นั่นหมายความว่าอะไร?",
						"hindi": "उसका क्या मतलब है?"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "hazel",
					"content": {
						"korean": "모든 숲의 소리, 그림자… 심지어 기억까지. 다 빨아들이고 있다고.",
						"english": "All the forest's sounds, shadows... even memories. It's absorbing everything.",
						"japanese": "森の全ての音、影…記憶まで。全てを吸い込んでいるんだ。",
						"chinese": "森林所有的声音、影子…甚至记忆。它正在吞噬一切。",
						"french": "Tous les sons, les ombres... même les souvenirs de la forêt. Il aspire tout.",
						"spanish": "Todos los sonidos, las sombras... incluso los recuerdos del bosque. Lo está absorbiendo todo.",
						"vietnamese": "Mọi âm thanh, bóng tối... thậm chí cả ký ức của rừng. Nó đang hút cạn mọi thứ.",
						"thai": "ทั้งเสียง, เงา... แม้กระทั่งความทรงจำของป่า มันกำลังดูดกลืนทุกสิ่ง",
						"hindi": "जंगल की सभी आवाज़ें, परछाइयाँ... यहाँ तक कि यादें भी। यह सब कुछ सोख रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "hazel",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "hazel",
					"content": {
						"korean": "정보의 대가라고 생각했지?",
						"english": "You thought it was the price for information, didn't you?",
						"japanese": "情報の代償だと思っただろ？",
						"chinese": "你以为这是情报的代价，是吗？",
						"french": "Tu pensais que c'était le prix de l'information, n'est-ce pas ?",
						"spanish": "Creíste que era el precio de la información, ¿verdad?",
						"vietnamese": "Ngươi nghĩ đó là cái giá của thông tin, phải không?",
						"thai": "นายคิดว่ามันคือค่าตอบแทนของข้อมูลใช่ไหม?",
						"hindi": "तुमने सोचा यह जानकारी की कीमत थी, है ना?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그래.",
						"english": "Yes.",
						"japanese": "ああ。",
						"chinese": "是的。",
						"french": "Oui.",
						"spanish": "Sí.",
						"vietnamese": "Phải.",
						"thai": "ใช่",
						"hindi": "हाँ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "hazel",
					"content": {
						"korean": "아니야. 이건 수확이야. 저 자는 숲 자체를 수확하고 있어.",
						"english": "No. This is a harvest. That one is harvesting the forest itself.",
						"japanese": "違う。これは収穫だ。あいつは森そのものを収穫しているんだ。",
						"chinese": "不。这是收割。那家伙正在收割森林本身。",
						"french": "Non. C'est une récolte. Il récolte la forêt elle-même.",
						"spanish": "No. Esto es una cosecha. Él está cosechando el bosque mismo.",
						"vietnamese": "Không. Đây là sự thu hoạch. Kẻ đó đang thu hoạch chính khu rừng.",
						"thai": "ไม่ใช่ นี่คือการเก็บเกี่ยว หมอนั่นกำลังเก็บเกี่ยวป่าทั้งป่า",
						"hindi": "नहीं। यह फसल है। वह जंगल को ही काट रहा है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "숲을… 삼킨다고?",
						"english": "Devouring the forest...?",
						"japanese": "森を…飲み込むだと？",
						"chinese": "吞噬森林…？",
						"french": "Dévore la forêt... ?",
						"spanish": "¿Devorar el bosque...?",
						"vietnamese": "Nuốt chửng khu rừng...?",
						"thai": "กลืนกินป่า... เหรอ?",
						"hindi": "जंगल को... निगल रहा है?"
					},
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "hazel",
					"content": {
						"korean": "그래. 우리도 조심해야 해. 숲의 일부가 될지도 몰라.",
						"english": "Yes. We need to be careful too. We might become part of the forest.",
						"japanese": "ああ。我々も気をつけなければならない。森の一部になるかもしれない。",
						"chinese": "是的。我们也得小心。我们可能会成为森林的一部分。",
						"french": "Oui. Nous devons faire attention aussi. Nous pourrions devenir une partie de la forêt.",
						"spanish": "Sí. Nosotros también debemos tener cuidado. Podríamos convertirnos en parte del bosque.",
						"vietnamese": "Phải. Chúng ta cũng phải cẩn thận. Chúng ta có thể trở thành một phần của khu rừng.",
						"thai": "ใช่ เราเองก็ต้องระวัง เราอาจจะกลายเป็นส่วนหนึ่งของป่า",
						"hindi": "हाँ। हमें भी सावधान रहना होगा। हम भी जंगल का हिस्सा बन सकते हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "hazel",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "더 이상 거래는 없어.",
						"english": "No more deals.",
						"japanese": "これ以上の取引はない。",
						"chinese": "不再有任何交易。",
						"french": "Plus de transactions.",
						"spanish": "No más tratos.",
						"vietnamese": "Không còn giao dịch nào nữa.",
						"thai": "ไม่มีข้อตกลงอีกต่อไป",
						"hindi": "अब कोई सौदा नहीं।"
					},
					"speaker": "hazel",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "왜?",
						"english": "Why?",
						"japanese": "なぜ？",
						"chinese": "为什么？",
						"french": "Pourquoi ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Tại sao?",
						"thai": "ทำไม?",
						"hindi": "क्यों?"
					}
				},
				{
					"speaker": "hazel",
					"content": {
						"korean": "저 자는 이미 숲의 모든 것을 알고 있어. 우리에게 필요한 건…",
						"english": "He already knows everything about the forest. What we need is...",
						"japanese": "彼はすでに森のすべてを知っている。私たちに必要なのは…",
						"chinese": "他已经知道森林的一切。我们需要的是…",
						"french": "Il sait déjà tout de la forêt. Ce dont nous avons besoin, c'est…",
						"spanish": "Él ya sabe todo sobre el bosque. Lo que necesitamos es...",
						"vietnamese": "Hắn ta đã biết mọi thứ về khu rừng rồi. Thứ chúng ta cần là…",
						"thai": "เขารู้ทุกอย่างเกี่ยวกับป่าแล้ว สิ่งที่เราต้องการคือ...",
						"hindi": "वह जंगल के बारे में सब कुछ जानता है। हमें जिसकी ज़रूरत है वह है…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "hazel",
					"content": {
						"korean": "숲을 되찾는 것 뿐이야.",
						"english": "To reclaim the forest.",
						"japanese": "森を取り戻すことだけだ。",
						"chinese": "夺回森林。",
						"french": "Récupérer la forêt.",
						"spanish": "Recuperar el bosque.",
						"vietnamese": "Lấy lại khu rừng.",
						"thai": "ทวงคืนป่า",
						"hindi": "जंगल को वापस पाना।"
					}
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "그럼 방법은…",
						"english": "Then the way is...",
						"japanese": "ならば方法は…",
						"chinese": "那么方法就是…",
						"french": "Alors la méthode est…",
						"spanish": "Entonces la forma es...",
						"vietnamese": "Vậy cách là…",
						"thai": "ถ้างั้นวิธีก็คือ...",
						"hindi": "तो तरीका है…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저 자를 멈추는 것.",
						"english": "To stop him.",
						"japanese": "彼を止めることだ。",
						"chinese": "阻止他。",
						"french": "L'arrêter.",
						"spanish": "Detenerlo.",
						"vietnamese": "Ngăn chặn hắn ta.",
						"thai": "หยุดเขา",
						"hindi": "उसे रोकना।"
					},
					"speaker": "hazel"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "드디어 마주한 정체불명의 존재. 모든 소리가 멈춘 곳.",
						"english": "Finally, the unknown entity. Where all sounds cease.",
						"japanese": "ついに姿を現した正体不明の存在。すべての音が止まった場所。",
						"chinese": "终于，与不明存在相遇。所有声音都停止的地方。",
						"french": "Enfin, l'entité inconnue. Là où tous les sons s'arrêtent.",
						"spanish": "Finalmente, la entidad desconocida. Donde todos los sonidos cesan.",
						"vietnamese": "Cuối cùng, thực thể bí ẩn đã xuất hiện. Nơi mọi âm thanh đều ngừng lại.",
						"thai": "ในที่สุดก็เผชิญหน้ากับสิ่งลึกลับ สถานที่ที่เสียงทั้งหมดเงียบงัน",
						"hindi": "अंततः, अज्ञात इकाई सामने है। जहाँ सभी ध्वनियाँ शांत हो जाती हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…왔군. 예상대로.",
						"english": "...You've come. As expected.",
						"japanese": "…来たか。予想通りだ。",
						"chinese": "……来了啊。果然如此。",
						"french": "...Vous êtes venu. Comme prévu.",
						"spanish": "...Has venido. Como esperaba.",
						"vietnamese": "…Đã đến rồi sao. Đúng như dự đoán.",
						"thai": "...มาแล้วสินะ อย่างที่คาดไว้",
						"hindi": "...तुम आ गए। जैसा कि अपेक्षित था।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 숲을 삼키고 있었어?",
						"english": "You were devouring the forest?",
						"japanese": "お前が森を飲み込んでいたのか？",
						"chinese": "你一直在吞噬森林？",
						"french": "Tu dévorais la forêt ?",
						"spanish": "¿Estabas devorando el bosque?",
						"vietnamese": "Ngươi đã nuốt chửng khu rừng sao?",
						"thai": "แกกำลังกลืนกินป่าหรือไง?",
						"hindi": "तुम जंगल को निगल रहे थे?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "삼키는 게 아니야. '흡수'하는 거지. 더 큰 완성을 위해.",
						"english": "Not devouring. 'Absorbing'. For a greater completion.",
						"japanese": "飲み込んでいるのではない。『吸収』しているのだ。より大きな完成のために。",
						"chinese": "不是吞噬。而是“吸收”。为了更伟大的完整。",
						"french": "Pas dévorer. 'Absorber'. Pour une plus grande perfection.",
						"spanish": "No devorando. 'Absorbiendo'. Para una mayor perfección.",
						"vietnamese": "Không phải nuốt chửng. Là 'hấp thụ'. Để đạt được sự hoàn thiện vĩ đại hơn.",
						"thai": "ไม่ใช่การกลืนกิน 'ดูดซับ' ต่างหาก เพื่อความสมบูรณ์ที่ยิ่งใหญ่กว่า",
						"hindi": "निगल नहीं रहा। 'अवशोषित' कर रहा हूँ। एक महान पूर्णता के लिए।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마!",
						"english": "Don't talk nonsense!",
						"japanese": "馬鹿なこと言うな！",
						"chinese": "别胡说八道！",
						"french": "Ne dis pas de bêtises !",
						"spanish": "¡No digas tonterías!",
						"vietnamese": "Đừng nói bậy!",
						"thai": "อย่ามาพูดไร้สาระ!",
						"hindi": "बकवास मत करो!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 미숙한 힘이… 뭘 안다고…",
						"english": "Hmph... Such immature power... What do you know...",
						"japanese": "クク… 未熟な力が… 何を知るというのか…",
						"chinese": "呵呵……未成熟的力量……懂得什么……",
						"french": "Héhé... Une force si immature... Que connais-tu...",
						"spanish": "Jeje... Tal poder inmaduro... ¿Qué sabes tú...?",
						"vietnamese": "Khà khà... Sức mạnh non nớt... Biết gì chứ...",
						"thai": "คิกๆ... พลังที่ยังอ่อนหัด... รู้เรื่องอะไร...",
						"hindi": "हँ हँ... यह अपरिपक्व शक्ति... क्या जानती है..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝이야.",
						"english": "It's over.",
						"japanese": "終わりだ。",
						"chinese": "结束了。",
						"french": "C'est fini.",
						"spanish": "Se acabó.",
						"vietnamese": "Kết thúc rồi.",
						"thai": "จบแล้ว",
						"hindi": "खत्म।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "침묵만이 감돌던 숲에, 희미하게 바람 소리가 들려왔다.",
						"english": "In the silent forest, a faint whisper of wind could be heard.",
						"japanese": "沈黙だけが漂う森に、微かな風の音が聞こえてきた。",
						"chinese": "在只有沉默的森林中，隐约传来了风声。",
						"french": "Dans la forêt où seul le silence régnait, un faible murmure du vent se fit entendre.",
						"spanish": "En el bosque donde solo reinaba el silencio, se oyó un leve susurro del viento.",
						"vietnamese": "Trong khu rừng chìm trong im lặng, tiếng gió thoảng qua khe khẽ.",
						"thai": "ในป่าที่เงียบงัน มีเพียงเสียงลมพัดแผ่วเบา",
						"hindi": "शांत वन में, हवा की एक धीमी सरसराहट सुनाई दी।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그러나 사라진 것은 돌아오지 않는다. 아직 많은 것을 잃었다.",
						"english": "But what is lost does not return. Still, much has been lost.",
						"japanese": "しかし、失われたものは戻らない。まだ多くを失った。",
						"chinese": "然而，逝去之物不会回来。仍旧失去了很多。",
						"french": "Mais ce qui est perdu ne revient pas. Beaucoup a encore été perdu.",
						"spanish": "Pero lo que se pierde no regresa. Aún se ha perdido mucho.",
						"vietnamese": "Nhưng những gì đã mất sẽ không trở lại. Vẫn còn nhiều thứ đã mất.",
						"thai": "แต่สิ่งที่หายไปแล้วไม่กลับมา ยังสูญเสียไปอีกมาก",
						"hindi": "परंतु जो खो गया वह वापस नहीं आता। अभी भी बहुत कुछ खो गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "……还没有结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "압도적인 침묵이 모든 것을 집어삼켰다.",
						"english": "Overwhelming silence devoured everything.",
						"japanese": "圧倒的な沈黙がすべてを飲み込んだ。",
						"chinese": "压倒性的沉默吞噬了一切。",
						"french": "Un silence écrasant engloutit tout.",
						"spanish": "Un silencio abrumador lo devoró todo.",
						"vietnamese": "Sự im lặng đáng sợ nuốt chửng mọi thứ.",
						"thai": "ความเงียบงันอันหนักอึ้งกลืนกินทุกสิ่ง",
						"hindi": "दबा देने वाली खामोशी ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…아직 멀었군.",
						"english": "...Not yet.",
						"japanese": "…まだまだだな。",
						"chinese": "……还差得远呢。",
						"french": "...Pas encore.",
						"spanish": "...Aún falta mucho.",
						"vietnamese": "...Vẫn còn xa lắm.",
						"thai": "...ยังอีกไกล",
						"hindi": "...अभी बहुत दूर है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…포기하지 않아.",
						"english": "...I won't give up.",
						"japanese": "…諦めない。",
						"chinese": "……不会放弃。",
						"french": "...Je n'abandonnerai pas.",
						"spanish": "...No me rendiré.",
						"vietnamese": "...Tôi sẽ không bỏ cuộc.",
						"thai": "...ไม่ยอมแพ้",
						"hindi": "...हार नहीं मानूँगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "다시 와라. 더 많은 것을 내어줄 준비가 되면.",
						"english": "Come again. When you are ready to give more.",
						"japanese": "また来るがいい。より多くのものを差し出す準備ができた時に。",
						"chinese": "再来吧。当你准备好付出更多的时候。",
						"french": "Reviens. Quand tu seras prêt à donner plus.",
						"spanish": "Vuelve. Cuando estés listo para dar más.",
						"vietnamese": "Hãy trở lại. Khi ngươi sẵn sàng cống hiến nhiều hơn.",
						"thai": "กลับมาอีกครั้ง เมื่อเจ้าพร้อมที่จะให้มากกว่านี้",
						"hindi": "फिर आना। जब तुम और अधिक देने के लिए तैयार हो।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲이 속삭이는 소리가, 어느 순간부터 침묵으로 변했다.",
			"소식통 주변, 모든 것이 빨려 들어가는 기묘한 공백.",
			"정보를 얻는 대가로 숲이 사라진다.",
			"그리고 그 침묵 속에서, 진실이 모습을 드러냈다."
		],
		"english": [
			"The forest's whispers have fallen silent.",
			"Around the source, a strange void devours everything.",
			"The forest vanishes, a price for information.",
			"And in that silence, the truth revealed itself."
		],
		"japanese": [
			"森の囁きは、いつしか沈黙へと変わった。",
			"情報源の周りには、すべてを吸い込む奇妙な空白。",
			"情報を得る代償として、森が消える。",
			"そしてその沈黙の中で、真実が姿を現した。"
		],
		"chinese": [
			"森林的低语，不知何时变成了寂静。",
			"消息源周围，一切都被吸入的奇异空白。",
			"以森林的消失为代价获取信息。",
			"而在那片寂静中，真相浮出水面。"
		],
		"french": [
			"Les murmures de la forêt se sont tus.",
			"Autour de la source, un vide étrange, aspirant tout.",
			"La forêt disparaît en échange d'informations.",
			"Et dans ce silence, la vérité s'est révélée."
		],
		"spanish": [
			"Los susurros del bosque, de repente, cesaron.",
			"Alrededor de la fuente, un vacío extraño que lo consume todo.",
			"El bosque desaparece a cambio de información.",
			"Y en ese silencio, la verdad se reveló."
		],
		"vietnamese": [
			"Tiếng thì thầm của rừng, từ lúc nào đã hóa thành im lặng.",
			"Xung quanh nguồn tin, một khoảng không kỳ lạ, nuốt chửng mọi thứ.",
			"Rừng cây biến mất để đổi lấy thông tin.",
			"Và trong sự im lặng đó, sự thật đã lộ diện."
		],
		"thai": [
			"เสียงกระซิบของป่า, เมื่อใดไม่รู้, ได้แปรเปลี่ยนเป็นความเงียบงัน.",
			"รอบแหล่งข่าว, ช่องว่างประหลาดที่ดูดกลืนทุกสิ่ง.",
			"ป่าหายไปเพื่อแลกกับข้อมูล.",
			"และในความเงียบงันนั้น, ความจริงได้ปรากฏขึ้น."
		],
		"hindi": [
			"जंगल की सरसराहट, किसी पल, खामोशी में बदल गई।",
			"स्रोत के चारों ओर, एक अजीब शून्य, सब कुछ निगल रहा है।",
			"जानकारी के बदले में जंगल गायब हो जाता है।",
			"और उस खामोशी में, सच्चाई सामने आई।"
		]
	}
} as const;
