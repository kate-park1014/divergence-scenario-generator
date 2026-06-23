export const scenario_snowy_draugrhorn_39_02 = {
	"scenario_id": "snowy_draugrhorn_39_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흐릿한 안개가 시야를 가렸다. 드라우그혼의 환영은 더욱 선명해졌다.",
						"english": "A hazy mist obscured the view. Draughorn's vision became clearer.",
						"japanese": "霞んだ霧が視界を遮った。ドラウグホーンの幻影はより鮮明になった。",
						"chinese": "朦胧的薄雾遮蔽了视线。德拉格霍恩的幻象变得更加清晰。",
						"french": "Une brume floue obscurcissait la vue. La vision de Draughorn devint plus claire.",
						"spanish": "Una niebla difusa nubló la vista. La visión de Draughorn se hizo más clara.",
						"vietnamese": "Sương mù mờ ảo che khuất tầm nhìn. Ảo ảnh của Draughorn trở nên rõ nét hơn.",
						"thai": "หมอกจางๆ บดบังทัศนวิสัย ภาพหลอนของ Draughorn ชัดเจนขึ้น",
						"hindi": "धुंधली धुंध ने दृश्य को बाधित कर दिया। ड्रेगहॉर्न का दर्शन और स्पष्ट हो गया।"
					}
				},
				{
					"content": {
						"korean": "여기가… 그곳인가?",
						"english": "Is this... the place?",
						"japanese": "ここが… あそこか？",
						"chinese": "这里… 就是那里吗？",
						"french": "Est-ce… cet endroit ?",
						"spanish": "¿Es este… el lugar?",
						"vietnamese": "Đây là… nơi đó sao?",
						"thai": "ที่นี่... คือที่นั่นหรือ?",
						"hindi": "क्या यह... वह जगह है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이곳은 영광의 그림자가 맴도는 곳. 기록에 남아있지 않은 이름들…",
						"english": "This is where the shadow of glory lingers. Names not found in records...",
						"japanese": "ここは栄光の影が漂う場所。記録に残らない名たち…",
						"chinese": "这里是荣耀之影萦绕之地。未载入史册的名字…",
						"french": "C'est là que plane l'ombre de la gloire. Des noms qui ne figurent pas dans les annales…",
						"spanish": "Este es el lugar donde se cierne la sombra de la gloria. Nombres no registrados...",
						"vietnamese": "Đây là nơi bóng tối vinh quang vẫn còn vương vấn. Những cái tên không có trong sử sách...",
						"thai": "ที่นี่คือที่ที่เงาแห่งเกียรติยศยังคงอยู่ ชื่อที่ไม่มีในบันทึก…",
						"hindi": "यह वह जगह है जहाँ महिमा की छाया मंडराती है। वे नाम जो अभिलेखों में नहीं हैं..."
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "이 문양… 어디서 본 것 같아.",
						"english": "This emblem... I feel like I've seen it before.",
						"japanese": "この紋様… どこかで見たような。",
						"chinese": "这个纹章… 我好像在哪里见过。",
						"french": "Cet emblème… J'ai l'impression de l'avoir déjà vu.",
						"spanish": "Este emblema… Me parece haberlo visto antes.",
						"vietnamese": "Biểu tượng này… hình như tôi đã từng thấy ở đâu đó.",
						"thai": "สัญลักษณ์นี้... เหมือนเคยเห็นที่ไหนมาก่อน",
						"hindi": "यह प्रतीक... मुझे लगता है कि मैंने इसे पहले देखा है।"
					}
				},
				{
					"content": {
						"korean": "오랜 옛날… 빛을 잃은 영웅들의 것이죠.",
						"english": "Long ago... it belonged to heroes who lost their light.",
						"japanese": "遠い昔… 光を失った英雄たちのものです。",
						"chinese": "很久以前… 它是那些失去光芒的英雄们的。",
						"french": "Il y a longtemps… c'était celui de héros qui ont perdu leur lumière.",
						"spanish": "Hace mucho tiempo… perteneció a héroes que perdieron su luz.",
						"vietnamese": "Rất lâu về trước… nó thuộc về những anh hùng đã mất đi ánh sáng của mình.",
						"thai": "นานมาแล้ว... มันเป็นของเหล่าฮีโร่ที่สูญเสียแสงสว่าง",
						"hindi": "बहुत पहले... यह उन नायकों का था जिन्होंने अपनी रोशनी खो दी थी।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "환영은 달콤한 약속을 ше합니다. 잊힌 승리를 보여주며.",
						"english": "The illusion offers sweet promises, showing forgotten victories.",
						"japanese": "幻影は甘い約束を囁く。忘れられた勝利を見せつけながら。",
						"chinese": "幻象提供着甜蜜的承诺，展示着被遗忘的胜利。",
						"french": "L'illusion offre de douces promesses, montrant des victoires oubliées.",
						"spanish": "La ilusión ofrece dulces promesas, mostrando victorias olvidadas.",
						"vietnamese": "Ảo ảnh đưa ra những lời hứa ngọt ngào, cho thấy những chiến thắng bị lãng quên.",
						"thai": "ภาพลวงตาเสนอลางบอกเหตุที่หอมหวาน แสดงถึงชัยชนะที่ถูกลืม",
						"hindi": "भ्रम मीठे वादे करता है, भूली हुई विजयों को दर्शाता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "승리… 우리의 복수도 결국 승리해야 해.",
						"english": "Victory... Our revenge must also ultimately triumph.",
						"japanese": "勝利… 我らの復讐も、結局は勝利しなければならない。",
						"chinese": "胜利… 我们的复仇最终也必须取得胜利。",
						"french": "Victoire… Notre vengeance doit aussi finalement triompher.",
						"spanish": "Victoria… Nuestra venganza también debe triunfar al final.",
						"vietnamese": "Chiến thắng… Cuộc báo thù của chúng ta cuối cùng cũng phải chiến thắng.",
						"thai": "ชัยชนะ... การแก้แค้นของเราก็ต้องชนะในที่สุด",
						"hindi": "विजय... हमारे प्रतिशोध को भी अंततः विजयी होना चाहिए।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 안개 속에서… 뭔가 보였어. 우리가 이기는 모습.",
						"english": "In this fog... I saw something. Us winning.",
						"japanese": "この霧の中で…何かが視えた。私たちが勝つ姿が。",
						"chinese": "在这片迷雾中……我看到了什么。我们胜利的样子。",
						"french": "Dans ce brouillard... j'ai vu quelque chose. Nous l'emportant.",
						"spanish": "En esta niebla... vi algo. Nuestra victoria.",
						"vietnamese": "Trong màn sương này... tôi đã thấy gì đó. Cảnh chúng ta chiến thắng.",
						"thai": "ในม่านหมอกนี้...ฉันเห็นบางอย่าง. ภาพที่เรากำลังชนะ.",
						"hindi": "इस कोहरे में... मुझे कुछ दिखा। हमारी जीत।"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "승리의 환영은 가장 강력한 유혹이죠.",
						"english": "The illusion of victory is the most powerful temptation.",
						"japanese": "勝利の幻は、最も強力な誘惑ですね。",
						"chinese": "胜利的幻象是最强大的诱惑。",
						"french": "L'illusion de la victoire est la tentation la plus puissante.",
						"spanish": "La ilusión de la victoria es la tentación más poderosa.",
						"vietnamese": "Ảo ảnh chiến thắng là cám dỗ mạnh mẽ nhất.",
						"thai": "ภาพลวงตาแห่งชัยชนะคือสิ่งล่อใจที่ทรงพลังที่สุด.",
						"hindi": "जीत का भ्रम सबसे शक्तिशाली प्रलोभन है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "멀리서 절규 같은 메아리가 들렸다. 환성처럼 들리기도 했다.",
						"english": "From afar, an echoing scream was heard. Or perhaps a cheer.",
						"japanese": "遠くから、絶叫のような木霊が聞こえた。歓声のようにも聞こえたが。",
						"chinese": "远处传来一声声尖叫般的回音。有时听起来又像是欢呼。",
						"french": "De loin, un écho semblable à un cri retentit. Parfois, ça sonnait comme un hurrah.",
						"spanish": "De lejos, se escuchó un eco como un grito. A veces, parecía un vítores.",
						"vietnamese": "Từ xa, một tiếng vọng như tiếng thét vang lên. Đôi khi lại nghe như tiếng reo hò.",
						"thai": "จากที่ไกลออกไป, ได้ยินเสียงสะท้อนคล้ายเสียงกรีดร้อง. บางครั้งก็ฟังดูเหมือนเสียงโห่ร้อง.",
						"hindi": "दूर से, एक चीख जैसी गूंज सुनाई दी। कभी-कभी यह जयकार जैसी भी लगती थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 소리는… 과거의 메아리. 영광에 취한 자들의 마지막 울음.",
						"english": "This sound... an echo of the past. The final cries of those intoxicated by glory.",
						"japanese": "この音は…過去の木霊。栄光に酔いしれた者たちの最後の叫びだ。",
						"chinese": "这声音……是过去的余音。是那些沉迷于荣耀之人的最后哀嚎。",
						"french": "Ce son... un écho du passé. Le dernier cri de ceux enivrés par la gloire.",
						"spanish": "Este sonido... un eco del pasado. El último lamento de aquellos embriagados por la gloria.",
						"vietnamese": "Âm thanh này... là tiếng vọng của quá khứ. Tiếng khóc cuối cùng của những kẻ say sưa trong vinh quang.",
						"thai": "เสียงนี้...คือเสียงสะท้อนจากอดีต. เสียงร่ำไห้ครั้งสุดท้ายของผู้ที่มัวเมาในเกียรติยศ.",
						"hindi": "यह आवाज़... अतीत की गूंज है। महिमा में डूबे लोगों की अंतिम चीख।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "절규라고? 난 승리의 함성으로 들렸는데.",
						"english": "A scream? I heard it as a cry of victory.",
						"japanese": "絶叫だと？私には勝利の雄叫びに聞こえたが。",
						"chinese": "尖叫？我听起来像是胜利的呐喊。",
						"french": "Un cri ? J'ai entendu un cri de victoire.",
						"spanish": "¿Un grito? A mí me pareció un grito de victoria.",
						"vietnamese": "Tiếng thét sao? Tôi lại nghe như tiếng reo hò chiến thắng.",
						"thai": "เสียงกรีดร้องเหรอ? ฉันได้ยินเป็นเสียงโห่ร้องแห่งชัยชนะ.",
						"hindi": "चीख? मैंने इसे जीत की हुंकार के रूप में सुना।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "뭐가 진실이지…?",
						"english": "What is the truth...?",
						"japanese": "何が真実なんだ…？",
						"chinese": "什么是真相……？",
						"french": "Quelle est la vérité...?",
						"spanish": "¿Cuál es la verdad...?",
						"vietnamese": "Sự thật là gì...?",
						"thai": "อะไรคือความจริง...?",
						"hindi": "सच क्या है...?"
					}
				},
				{
					"content": {
						"korean": "진실은 언제나… 스스로 찾아야 하는 것.",
						"english": "The truth is always... something one must find for themselves.",
						"japanese": "真実はいつだって…自ら見つけ出すものだ。",
						"chinese": "真相总是……需要自己去寻找的东西。",
						"french": "La vérité est toujours... ce que l'on doit trouver soi-même.",
						"spanish": "La verdad es siempre... algo que uno debe encontrar por sí mismo.",
						"vietnamese": "Sự thật luôn là... điều bạn phải tự mình tìm kiếm.",
						"thai": "ความจริงมักจะเป็น...สิ่งที่เราต้องค้นหาด้วยตัวเองเสมอ.",
						"hindi": "सच हमेशा... वही होता है जिसे खुद खोजना होता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더… 현실 같아. 이 환영 속의 전투가.",
						"english": "It's becoming more and more... real. This battle within the illusion.",
						"japanese": "ますます…現実味を帯びてきたな。この幻影の中の戦いが。",
						"chinese": "越来越……真实了。这幻象中的战斗。",
						"french": "Ça devient de plus en plus... réel. Cette bataille dans l'illusion.",
						"spanish": "Cada vez es más... real. Esta batalla en la ilusión.",
						"vietnamese": "Càng ngày càng... thật. Trận chiến trong ảo ảnh này.",
						"thai": "มันยิ่งกว่า...ความจริง. การต่อสู้ในภาพลวงตานี้.",
						"hindi": "यह और भी... वास्तविक होता जा रहा है। इस भ्रम में लड़ाई।"
					}
				},
				{
					"content": {
						"korean": "그들이 품었던 미련이… 당신을 부르는 겁니다.",
						"english": "Their lingering regrets... are calling to you.",
						"japanese": "彼らが抱いた未練が…あなたを呼んでいるのです。",
						"chinese": "他们心中的留恋……正在呼唤你。",
						"french": "Leurs regrets persistants... vous appellent.",
						"spanish": "Sus arrepentimientos persistentes... te están llamando.",
						"vietnamese": "Nỗi tiếc nuối của họ... đang gọi bạn.",
						"thai": "ความเสียดายที่พวกเขามี...กำลังเรียกหาคุณ.",
						"hindi": "उनकी बची हुई ख्वाहिशें... तुम्हें बुला रही हैं।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이게 정말 우리가 바랐던 승리일까?",
						"english": "Is this truly the victory we desired?",
						"japanese": "これが本当に、私たちが望んだ勝利なのか？",
						"chinese": "这真的是我们所渴望的胜利吗？",
						"french": "Est-ce vraiment la victoire que nous désirions ?",
						"spanish": "¿Es esta realmente la victoria que deseábamos?",
						"vietnamese": "Đây có thực sự là chiến thắng chúng ta mong muốn?",
						"thai": "นี่คือชัยชนะที่เราปรารถนาจริงหรือ?",
						"hindi": "क्या यह सचमुच वही जीत है जिसकी हमने कामना की थी?"
					}
				},
				{
					"content": {
						"korean": "잊힌 자들의 영광은… 결국 허무에 닿죠.",
						"english": "The glory of the forgotten... ultimately leads to nothingness.",
						"japanese": "忘れ去られた者たちの栄光は… 結局、虚無に辿り着くのですね。",
						"chinese": "被遗忘者的荣光……终将归于虚无。",
						"french": "La gloire des oubliés... mène finalement au néant.",
						"spanish": "La gloria de los olvidados... al final, no es más que vacío.",
						"vietnamese": "Vinh quang của những kẻ bị lãng quên… cuối cùng cũng chỉ về hư vô.",
						"thai": "ความรุ่งโรจน์ของผู้ถูกลืม… สุดท้ายก็ว่างเปล่า",
						"hindi": "विस्मृतों की महिमा… अंततः शून्यता में विलीन हो जाती है。"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "회색 안개는 더욱 짙어져, 모든 감각을 마비시키는 듯했다.",
						"english": "The gray mist thickened, as if numbing all senses.",
						"japanese": "灰色の霧はさらに濃くなり、あらゆる感覚を麻痺させるかのようだった。",
						"chinese": "灰色迷雾愈发浓重，仿佛麻痹了所有感官。",
						"french": "La brume grise s'épaississait, comme pour engourdir tous les sens.",
						"spanish": "La niebla gris se espesó aún más, como si adormeciera todos los sentidos.",
						"vietnamese": "Sương mù xám càng dày đặc, dường như làm tê liệt mọi giác quan.",
						"thai": "หมอกสีเทาหนาแน่นขึ้น ราวกับทำให้ทุกสัมผัสชาชิน",
						"hindi": "धुंधलका और घना हो गया, मानो सारी इंद्रियों को सुन्न कर रहा हो।"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그대들 또한 영광을 찾는가? 이 드라우그혼에서 영원한 승리를 얻으리라.",
						"english": "Do you also seek glory? In this Draughorn, you shall achieve eternal victory.",
						"japanese": "お前たちも栄光を求めるのか？このドラウグホルンで永遠の勝利を得るだろう。",
						"chinese": "你们也渴望荣光吗？在这德劳格霍恩，你将获得永恒的胜利。",
						"french": "Vous aussi, vous cherchez la gloire ? Dans ce Draughorn, vous obtiendrez la victoire éternelle.",
						"spanish": "¿Vosotros también buscáis gloria? En este Draughorn, alcanzaréis la victoria eterna.",
						"vietnamese": "Các ngươi cũng tìm kiếm vinh quang ư? Tại Draughorn này, các ngươi sẽ đạt được chiến thắng vĩnh cửu.",
						"thai": "เจ้าเองก็แสวงหาความรุ่งโรจน์หรือ? ณ ดราวก์ฮอร์นนี้ เจ้าจะได้ชัยชนะชั่วนิรันดร์",
						"hindi": "क्या तुम भी गौरव की तलाश में हो? इस ड्राउगहॉर्न में, तुम शाश्वत विजय प्राप्त करोगे।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "너는… 대체 누구냐!",
						"english": "Who... who are you, really!",
						"japanese": "お前は…一体誰だ！",
						"chinese": "你……你到底是谁！",
						"french": "Toi... qui es-tu, au juste !",
						"spanish": "¡Tú... quién eres, en realidad!",
						"vietnamese": "Ngươi… rốt cuộc là ai!",
						"thai": "เจ้า… เจ้าเป็นใครกันแน่!",
						"hindi": "तुम... आखिर कौन हो!"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이것은… 이름 없는 존재의 기록. 룬에 쓰여진 거짓된 약속이군요.",
						"english": "This is... a record of the nameless one. A false promise written in runes.",
						"japanese": "これは… 名もなき存在の記録。ルーンに記された偽りの約束ですね。",
						"chinese": "这是……无名者的记录。符文中记载的虚假承诺啊。",
						"french": "C'est... l'archive d'un être sans nom. Une fausse promesse écrite en runes.",
						"spanish": "Esto es... el registro de un ser sin nombre. Una falsa promesa escrita en runas.",
						"vietnamese": "Đây là… ghi chép của một thực thể vô danh. Một lời hứa dối trá được viết trên đá rune.",
						"thai": "นี่คือ… บันทึกของสิ่งไร้นาม คำสัญญาจอมปลอมที่เขียนบนอักษรรูนสินะ",
						"hindi": "यह... किसी अनाम सत्ता का अभिलेख है। रूणों में लिखा गया एक झूठा वादा।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히… 나의 유혹을 거부하려는가?",
						"english": "How dare you... try to defy my temptation?",
						"japanese": "よくも… 私の誘惑を拒むというのか？",
						"chinese": "竟敢……拒绝我的诱惑？",
						"french": "Comment oses-tu... défier ma tentation ?",
						"spanish": "¿Osas... rechazar mi tentación?",
						"vietnamese": "Dám… từ chối sự cám dỗ của ta ư?",
						"thai": "กล้า… ที่จะปฏิเสธคำล่อลวงของข้าหรือ?",
						"hindi": "हिम्मत कैसे हुई तुम्हारी... मेरे प्रलोभन को ठुकराने की?"
					}
				},
				{
					"content": {
						"korean": "우린 네 환영에 놀아나지 않아!",
						"english": "We won't fall for your illusions!",
						"japanese": "私たちはあなたの幻影に惑わされない！",
						"chinese": "我们不会被你的幻象戏弄！",
						"french": "Nous ne nous laisserons pas berner par tes illusions !",
						"spanish": "¡No caeremos en tus ilusiones!",
						"vietnamese": "Chúng ta sẽ không bị ảo ảnh của ngươi lừa gạt!",
						"thai": "เราจะไม่หลงกลมายาของเจ้า!",
						"hindi": "हम तुम्हारे भ्रमों से नहीं बहकेंगे!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "하… 결국, 그대들도… 이 허무 속으로….",
						"english": "Ha... in the end, you too... into this void...",
						"japanese": "はぁ…結局、お前たちも…この虚無の中へ…",
						"chinese": "哈……最终，你们也……进入这虚无之中……",
						"french": "Ah... finalement, vous aussi... dans ce néant...",
						"spanish": "Ja... al final, vosotros también... a este vacío...",
						"vietnamese": "Ha… cuối cùng, các ngươi cũng… vào hư vô này…",
						"thai": "ฮ่า… ในที่สุด พวกเจ้าก็… เข้าสู่ความว่างเปล่านี้…",
						"hindi": "हा... अंततः, तुम भी... इस शून्यता में..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이겼지만… 기쁘지 않아.",
						"english": "We won... but I'm not happy.",
						"japanese": "勝ったけど…嬉しくない。",
						"chinese": "虽然赢了……但并不高兴。",
						"french": "Nous avons gagné... mais je ne suis pas content.",
						"spanish": "Ganamos... pero no me alegro.",
						"vietnamese": "Thắng rồi… nhưng không vui.",
						"thai": "ชนะแล้ว… แต่ไม่รู้สึกยินดีเลย",
						"hindi": "जीत गए... पर खुशी नहीं है।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "승리는 환영을 흩뜨렸을 뿐… 진실은 아직….",
						"english": "Victory only scattered the illusions... the truth is still...",
						"japanese": "勝利は幻影を散らしただけ…真実はまだ…",
						"chinese": "胜利只是驱散了幻象……真相仍未……",
						"french": "La victoire n'a fait que disperser les illusions... la vérité est toujours...",
						"spanish": "La victoria solo dispersó las ilusiones... la verdad aún está...",
						"vietnamese": "Chiến thắng chỉ làm tan biến ảo ảnh… sự thật vẫn còn…",
						"thai": "ชัยชนะเพียงแค่ทำให้ภาพลวงตาจางหายไป… ความจริงยังคง…",
						"hindi": "विजय ने केवल भ्रमों को बिखेरा... सच्चाई अभी भी..."
					}
				},
				{
					"content": {
						"korean": "회색 안개는 잠시 걷혔다. 하지만 그 안에서 들리는 절규는 더욱 선명해졌다. 다음 목적지는… 절망의 심연이었다.",
						"english": "The grey mist briefly lifted. But the screams from within became clearer. Our next destination... the Abyss of Despair.",
						"japanese": "灰色の霧は一時的に晴れた。しかし、その中から聞こえる叫び声はより鮮明になった。次の目的地は…絶望の淵だった。",
						"chinese": "灰色迷雾暂时消散。然而，其中传来的尖叫声却愈发清晰。下一个目的地……是绝望的深渊。",
						"french": "La brume grise s'est brièvement dissipée. Mais les cris provenant de l'intérieur sont devenus plus distincts. Notre prochaine destination... l'Abîme du Désespoir.",
						"spanish": "La niebla gris se disipó brevemente. Pero los gritos que venían de su interior se hicieron más claros. Nuestro próximo destino... el Abismo de la Desesperación.",
						"vietnamese": "Màn sương xám tạm thời tan đi. Nhưng tiếng gào thét từ bên trong lại càng rõ ràng hơn. Điểm đến tiếp theo của chúng ta... là Vực thẳm của Tuyệt vọng.",
						"thai": "หมอกสีเทาจางหายไปชั่วขณะ แต่เสียงกรีดร้องจากภายในกลับชัดเจนยิ่งขึ้น จุดหมายต่อไปของเรา...คือห้วงลึกแห่งความสิ้นหวัง",
						"hindi": "धूसर कोहरा क्षण भर के लिए छट गया। पर भीतर से आती चीखें और स्पष्ट हो गईं। हमारी अगली मंज़िल... निराशा की खाई थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그대들 또한… 영원히… 이 환영 속에 갇히리라!",
						"english": "You too... shall be trapped... forever... in this illusion!",
						"japanese": "お前たちも…永遠に…この幻影の中に囚われるだろう！",
						"chinese": "你们也将……永远……被困于这幻象之中！",
						"french": "Vous aussi... serez piégés... pour toujours... dans cette illusion !",
						"spanish": "¡Vosotros también... quedaréis atrapados... para siempre... en esta ilusión!",
						"vietnamese": "Các ngươi cũng sẽ... mãi mãi... bị mắc kẹt trong ảo ảnh này!",
						"thai": "พวกเจ้าเองก็... จะถูกขัง... ชั่วนิรันดร์... ในภาพลวงตานี้!",
						"hindi": "तुम सब भी... हमेशा के लिए... इस मायाजाल में फँसे रहोगे!"
					}
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어. 우린 여기서 멈출 수 없어!",
						"english": "It's not... over yet. We can't stop here!",
						"japanese": "まだ…終わってない。ここで止まるわけにはいかない！",
						"chinese": "还没……结束。我们不能止步于此！",
						"french": "Ce n'est pas... encore fini. Nous ne pouvons pas nous arrêter ici !",
						"spanish": "No ha... terminado aún. ¡No podemos detenernos aquí!",
						"vietnamese": "Vẫn chưa... kết thúc đâu. Chúng ta không thể dừng lại ở đây!",
						"thai": "ยัง... ไม่จบ. เราหยุดอยู่ตรงนี้ไม่ได้!",
						"hindi": "अभी... ख़त्म नहीं हुआ। हम यहाँ रुक नहीं सकते!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "기록되지 못한 자들의… 슬픈 결말이 반복될 뿐….",
						"english": "Only the sad end... of the unrecorded... repeats itself...",
						"japanese": "記録されなかった者たちの…悲しい結末が繰り返されるだけ…。",
						"chinese": "只是未被记载之人的……悲惨结局……不断重演罢了……",
						"french": "Seule la triste fin... de ceux qui n'ont pas été enregistrés... se répète...",
						"spanish": "Solo el triste final... de los que no fueron registrados... se repite...",
						"vietnamese": "Chỉ là kết cục buồn... của những kẻ không được ghi nhận... lặp lại mà thôi...",
						"thai": "เพียงแค่จุดจบอันน่าเศร้า...ของผู้ที่มิได้ถูกบันทึก...จะซ้ำรอยอีกครั้ง...",
						"hindi": "बस अलिखित लोगों का... दुखद अंत... दोहराया जाएगा..."
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"회색 안개. 모든 것을 집어삼키는 환상.",
			"드라우그혼의 속삭임이 영웅들을 유혹한다.",
			"승리라는 달콤한 거짓. 그 그림자에 모두가 잠식된다."
		],
		"english": [
			"Grey mist. An illusion that devours all.",
			"Draughorn's whispers lure the heroes.",
			"The sweet lie of victory. Everyone is consumed by its shadow."
		],
		"japanese": [
			"灰色の霧。すべてを飲み込む幻想。",
			"ドラウグホーンの囁きが英雄たちを誘惑する。",
			"勝利という甘い偽り。その影にすべてが蝕まれる。"
		],
		"chinese": [
			"灰色迷雾。吞噬一切的幻象。",
			"德拉格霍恩的低语诱惑着英雄们。",
			"胜利的甜蜜谎言。所有人都被其阴影吞噬。"
		],
		"french": [
			"Brouillard gris. Une illusion qui dévore tout.",
			"Les murmures de Draughorn séduisent les héros.",
			"Le doux mensonge de la victoire. Tous sont consumés par son ombre."
		],
		"spanish": [
			"Niebla gris. Una ilusión que lo devora todo.",
			"Los susurros de Draughorn atraen a los héroes.",
			"La dulce mentira de la victoria. Todos son consumidos por su sombra."
		],
		"vietnamese": [
			"Sương mù xám. Ảo ảnh nuốt chửng mọi thứ.",
			"Lời thì thầm của Draughorn dụ dỗ các anh hùng.",
			"Lời nói dối ngọt ngào về chiến thắng. Mọi người đều bị cái bóng của nó nuốt chửng."
		],
		"thai": [
			"หมอกสีเทา ภาพลวงตาที่กลืนกินทุกสิ่ง",
			"เสียงกระซิบของ Draughorn ล่อลวงเหล่าฮีโร่",
			"คำโกหกอันหอมหวานของชัยชนะ ทุกคนถูกกลืนกินด้วยเงาของมัน"
		],
		"hindi": [
			"धूसर कोहरा। सब कुछ निगलने वाला भ्रम।",
			"ड्रेगहॉर्न की फुसफुसाहट नायकों को लुभाती है।",
			"जीत का मीठा झूठ। हर कोई उसकी छाया से भस्म हो जाता है।"
		]
	}
} as const;
