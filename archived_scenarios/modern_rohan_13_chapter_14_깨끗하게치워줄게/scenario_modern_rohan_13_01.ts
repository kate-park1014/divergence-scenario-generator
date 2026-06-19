export const scenario_modern_rohan_13_01 = {
	"scenario_id": "modern_rohan_13_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 압축기가 잿빛 도심 한복판에서 굉음을 냈다. 모든 것을 집어삼킬 듯.",
						"english": "The colossal compressor roared in the grey city center, as if to swallow everything.",
						"japanese": "巨大な圧縮機が灰色の都心で轟音を響かせた。すべてを飲み込むかのように。",
						"chinese": "巨大的压缩机在灰色的市中心轰鸣，仿佛要吞噬一切。",
						"french": "Le compresseur colossal rugissait au cœur du centre-ville gris, comme pour tout engloutir.",
						"spanish": "El compresor colosal rugía en el centro gris de la ciudad, como si fuera a tragárselo todo.",
						"vietnamese": "Cỗ máy nén khổng lồ gầm rú giữa trung tâm thành phố xám xịt, như muốn nuốt chửng mọi thứ.",
						"thai": "เครื่องอัดขนาดมหึมากำลังคำรามอยู่ใจกลางเมืองสีเทา ราวกับจะกลืนกินทุกสิ่ง",
						"hindi": "विशाल कंप्रेसर ग्रे शहर के केंद्र में दहाड़ रहा था, मानो सब कुछ निगलने को हो।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기서 사람들의 흔적이 사라졌다고?",
						"english": "Traces of people vanished here?",
						"japanese": "ここで人々の痕跡が消えたのか？",
						"chinese": "人们的痕迹在这里消失了？",
						"french": "Les traces des gens ont disparu ici ?",
						"spanish": "¿Las huellas de la gente desaparecieron aquí?",
						"vietnamese": "Dấu vết của con người biến mất ở đây sao?",
						"thai": "ร่องรอยของผู้คนหายไปที่นี่งั้นหรือ?",
						"hindi": "यहाँ से लोगों के निशान गायब हो गए?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "dax",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사라진 게 아니라… 지워진 거야. 흔적조차 남기지 않게.",
						"english": "Not vanished... erased. Without a trace.",
						"japanese": "消えたのではなく…消されたのだ。痕跡すら残さないように。",
						"chinese": "不是消失…而是被抹去了。不留一丝痕迹。",
						"french": "Pas disparu… effacé. Sans laisser de trace.",
						"spanish": "No desaparecieron... fueron borrados. Sin dejar rastro.",
						"vietnamese": "Không phải biến mất... mà là bị xóa sổ. Không để lại dấu vết nào.",
						"thai": "ไม่ได้หายไป...แต่ถูกลบออก ไม่ให้เหลือแม้แต่ร่องรอย",
						"hindi": "गायब नहीं हुए... मिटा दिए गए। कोई निशान भी नहीं छोड़ा।"
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "난 여기에 무언가 남아있을 거라 확신한다.",
						"english": "I'm certain something remains here.",
						"japanese": "私はここに何かが残っていると確信している。",
						"chinese": "我确信这里会留下些什么。",
						"french": "Je suis certain que quelque chose reste ici.",
						"spanish": "Estoy seguro de que algo queda aquí.",
						"vietnamese": "Tôi chắc chắn rằng có thứ gì đó còn sót lại ở đây.",
						"thai": "ฉันมั่นใจว่ามีบางอย่างหลงเหลืออยู่ที่นี่",
						"hindi": "मुझे यकीन है कि यहाँ कुछ बचा हुआ है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "이 안쪽에… 뭔가가 걸려 있어.",
						"english": "Inside here... something's caught.",
						"japanese": "この奥に…何かが引っかかっている。",
						"chinese": "这里面…有什么东西卡住了。",
						"french": "À l'intérieur... quelque chose est coincé.",
						"spanish": "Aquí dentro... algo está atascado.",
						"vietnamese": "Bên trong này... có gì đó mắc kẹt.",
						"thai": "ข้างในนี้...มีบางอย่างติดอยู่",
						"hindi": "इसके अंदर... कुछ फँसा हुआ है।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "압축기 깊숙한 곳에서 닥스의 손에 잡힌 건, 낡은 시계와 빛바랜 사진 조각이었다.",
						"english": "Deep within the compressor, Dax found an old watch and a faded photo fragment.",
						"japanese": "圧縮機の奥深くでダックスの手に触れたのは、古びた時計と色あせた写真の断片だった。",
						"chinese": "在压缩机深处，达克斯手中抓住的是一块旧手表和一张褪色的照片碎片。",
						"french": "Au fond du compresseur, Dax trouva une vieille montre et un fragment de photo décoloré.",
						"spanish": "En lo profundo del compresor, Dax encontró un reloj viejo y un fragmento de foto descolorida.",
						"vietnamese": "Sâu bên trong máy nén, Dax tìm thấy một chiếc đồng hồ cũ và một mảnh ảnh đã phai màu.",
						"thai": "ลึกเข้าไปในเครื่องอัด แด็กซ์พบนาฬิกาเก่าและเศษภาพถ่ายที่ซีดจาง",
						"hindi": "कंप्रेसर के गहरे में, डैक्स को एक पुरानी घड़ी और एक धुंधली तस्वीर का टुकड़ा मिला।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이건… 실종자들의 유품이잖아!",
						"english": "These are... the missing people's belongings!",
						"japanese": "これは…行方不明者の遺品じゃないか！",
						"chinese": "这…这不是失踪者的遗物吗！",
						"french": "Ce sont... les affaires des disparus !",
						"spanish": "¡Estas son... las pertenencias de los desaparecidos!",
						"vietnamese": "Đây là... di vật của những người mất tích!",
						"thai": "นี่มัน...ของใช้ส่วนตัวของผู้สูญหาย!",
						"hindi": "यह तो... लापता लोगों का सामान है!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "그래. 완벽히 지워진 게 아니었어.",
						"english": "Right. They weren't completely erased.",
						"japanese": "ああ。完全に消されたわけじゃなかったんだ。",
						"chinese": "是啊。没有完全被抹去。",
						"french": "Oui. Ce n'était pas complètement effacé.",
						"spanish": "Sí. No fueron completamente borrados.",
						"vietnamese": "Đúng vậy. Chúng không bị xóa hoàn toàn.",
						"thai": "ใช่ ไม่ได้ถูกลบไปทั้งหมด",
						"hindi": "हाँ। वे पूरी तरह से मिटाए नहीं गए थे।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그 순간, 압축기의 굉음이 불규칙적으로 요동쳤다. 마치 살아있는 것처럼.",
						"english": "At that moment, the compressor's roar pulsated erratically. As if alive.",
						"japanese": "その瞬間、圧縮機の轟音が不規則に揺れ動いた。まるで生きているかのように。",
						"chinese": "那一刻，压缩机的轰鸣声不规则地颤动着。仿佛有生命一般。",
						"french": "À cet instant, le rugissement du compresseur vacilla irrégulièrement. Comme s'il était vivant.",
						"spanish": "En ese instante, el estruendo del compresor fluctuó irregularmente. Como si estuviera vivo.",
						"vietnamese": "Khoảnh khắc đó, tiếng gầm của máy nén rung chuyển bất thường. Như thể nó còn sống.",
						"thai": "ในตอนนั้น เสียงคำรามของเครื่องอัดสั่นสะเทือนไม่สม่ำเสมอ ราวกับมีชีวิต",
						"hindi": "उस पल, कंप्रेसर की गर्जना अनियमित रूप से हिलने लगी। जैसे कि वह जीवित हो।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 유품들은… 단순한 실수가 아니야.",
						"english": "These belongings... it's no mere mistake.",
						"japanese": "この遺品は…ただの過ちじゃない。",
						"chinese": "这些遗物…不是简单的失误。",
						"french": "Ces affaires... ce n'est pas une simple erreur.",
						"spanish": "Estos objetos... no son un simple error.",
						"vietnamese": "Những di vật này... không phải là một sai lầm đơn giản.",
						"thai": "ของใช้พวกนี้...ไม่ใช่ความผิดพลาดธรรมดา",
						"hindi": "ये सामान... कोई साधारण गलती नहीं है।"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "누군가 고의로 남겨둔 것일 수도 있어.",
						"english": "Someone might have left them intentionally.",
						"japanese": "誰かが故意に残したのかもしれない。",
						"chinese": "也许是有人故意留下的。",
						"french": "Quelqu'un a pu les laisser intentionnellement.",
						"spanish": "Alguien podría haberlos dejado intencionalmente.",
						"vietnamese": "Có thể ai đó đã cố tình để lại.",
						"thai": "อาจมีคนจงใจทิ้งไว้",
						"hindi": "शायद किसी ने जानबूझकर इन्हें छोड़ा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "저 압축기 소리, 뭔가 이상하지 않아?",
						"english": "That compressor noise, doesn't it sound odd?",
						"japanese": "あの圧縮機の音、何かおかしくないか？",
						"chinese": "那压缩机声，是不是有点奇怪？",
						"french": "Ce bruit de compresseur, il n'y a pas quelque chose d'étrange ?",
						"spanish": "Ese ruido del compresor, ¿no es algo extraño?",
						"vietnamese": "Tiếng máy nén đó, không phải có gì đó lạ sao?",
						"thai": "เสียงเครื่องอัดนั่น มันไม่แปลกเหรอ?",
						"hindi": "उस कंप्रेसर की आवाज, क्या वह अजीब नहीं है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "맞아. 단순한 기계음이 아니야. 리듬이 불규칙해.",
						"english": "Right. It's not just a machine noise. The rhythm is irregular.",
						"japanese": "そうだ。ただの機械音じゃない。リズムが不規則だ。",
						"chinese": "没错。不是单纯的机械声。节奏不规律。",
						"french": "Oui. Ce n'est pas un simple bruit de machine. Le rythme est irrégulier.",
						"spanish": "Exacto. No es un simple sonido mecánico. El ritmo es irregular.",
						"vietnamese": "Đúng vậy. Không phải tiếng máy móc đơn thuần. Nhịp điệu không đều.",
						"thai": "ใช่ ไม่ใช่แค่เสียงเครื่องจักร ธรรมดา จังหวะมันไม่สม่ำเสมอ",
						"hindi": "हाँ। यह सिर्फ एक मशीन की आवाज नहीं है। लय अनियमित है।"
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "마치… 무언가를 짓누르는 고통처럼.",
						"english": "Like... the pain of crushing something.",
						"japanese": "まるで…何かを押し潰す苦痛のように。",
						"chinese": "就像…压碎某物的痛苦。",
						"french": "Comme... la douleur d'écraser quelque chose.",
						"spanish": "Como... el dolor de aplastar algo.",
						"vietnamese": "Giống như... nỗi đau của việc nghiền nát thứ gì đó.",
						"thai": "ราวกับ...ความเจ็บปวดจากการบีบอัดบางสิ่ง",
						"hindi": "जैसे... किसी चीज़ को कुचलने का दर्द।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dax"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "dax",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 깊숙이 들어가는 것 같아. 돌아갈 수 있을까?",
						"english": "It feels like we're going deeper and deeper. Can we go back?",
						"japanese": "どんどん奥深くに入っていくようだ。戻れるかな？",
						"chinese": "感觉越来越深入了。还能回去吗？",
						"french": "On dirait qu'on s'enfonce de plus et plus. Pourrons-nous revenir ?",
						"spanish": "Parece que nos adentramos más y más. ¿Podremos volver?",
						"vietnamese": "Cảm giác như chúng ta đang đi sâu hơn nữa. Liệu có thể quay lại không?",
						"thai": "รู้สึกเหมือนกำลังเข้าไปลึกขึ้นเรื่อยๆ เราจะกลับได้ไหมนะ?",
						"hindi": "लगता है हम और गहराई में जा रहे हैं। क्या हम वापस जा पाएंगे?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "돌아갈 생각 없어. 진실을 밝혀야 해.",
						"english": "No turning back. We have to reveal the truth.",
						"japanese": "戻るつもりはない。真実を明らかにしなければ。",
						"chinese": "没想过要回去。必须揭露真相。",
						"french": "Pas question de faire demi-tour. Il faut révéler la vérité.",
						"spanish": "No pienso volver. Debemos descubrir la verdad.",
						"vietnamese": "Không có ý định quay lại. Chúng ta phải làm sáng tỏ sự thật.",
						"thai": "ไม่มีความคิดที่จะกลับ เราต้องเปิดเผยความจริง",
						"hindi": "वापस जाने का कोई विचार नहीं। हमें सच्चाई का पता लगाना होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "압축기의 울림은 이제 귀를 찢는 비명 같았다. 거대한 그림자가 드리워졌다.",
						"english": "The hum of the compressor was now an ear-splitting scream. A colossal shadow loomed.",
						"japanese": "圧縮機の唸り声は、今や耳をつんざくような悲鳴のようだった。巨大な影が差し込んだ。",
						"chinese": "压缩机的轰鸣声现在如同刺耳的尖叫。巨大的阴影笼罩下来。",
						"french": "Le bourdonnement du compresseur était maintenant un hurlement assourdissant. Une ombre colossale apparut.",
						"spanish": "El zumbido del compresor era ahora un grito ensordecedor. Una sombra colosal se cernió.",
						"vietnamese": "Tiếng rền của máy nén giờ đây như một tiếng thét chói tai. Một bóng đen khổng lồ bao trùm.",
						"thai": "เสียงเครื่องอัดอากาศที่เคยดังก้อง ตอนนี้กลับกลายเป็นเสียงกรีดร้องที่บาดหู เงาขนาดมหึมาทอดตัวลงมา",
						"hindi": "कंप्रेसर की गूँज अब कान फाड़ने वाली चीख जैसी थी। एक विशाल छाया छा गई।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이건… 단순한 기계가 아니야. 누가 조종하고 있어.",
						"english": "This isn't... just a machine. Someone's controlling it.",
						"japanese": "これは…ただの機械じゃない。誰かが操っている。",
						"chinese": "这不…只是台机器。有人在操控它。",
						"french": "Ce n'est pas... juste une machine. Quelqu'un la contrôle.",
						"spanish": "Esto no es... solo una máquina. Alguien la está controlando.",
						"vietnamese": "Đây không... chỉ là một cỗ máy. Ai đó đang điều khiển nó.",
						"thai": "นี่มัน... ไม่ใช่แค่เครื่องจักรธรรมดา มีคนกำลังควบคุมมันอยู่",
						"hindi": "यह... महज़ एक मशीन नहीं है। कोई इसे नियंत्रित कर रहा है।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "압축기의 심장부. 그곳에서 모든 것을 으깨는 자가 모습을 드러냈다.",
						"english": "The heart of the compressor. There, the one who crushes all revealed itself.",
						"japanese": "圧縮機の心臓部。そこで、全てを潰す者が姿を現した。",
						"chinese": "压缩机的心脏。在那里，那个粉碎一切的存在现身了。",
						"french": "Le cœur du compresseur. Là, celui qui écrase tout se révéla.",
						"spanish": "El corazón del compresor. Allí, el que todo lo tritura se reveló.",
						"vietnamese": "Trái tim của máy nén. Tại đó, kẻ nghiền nát mọi thứ đã lộ diện.",
						"thai": "ใจกลางของเครื่องอัดอากาศ ณ ที่แห่งนั้น ผู้บดขยี้ทุกสิ่งได้ปรากฏตัวขึ้น",
						"hindi": "कंप्रेसर का दिल। वहीं, वह जिसने सब कुछ कुचल दिया, प्रकट हुआ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 이곳까지 기어들어 왔느냐.",
						"english": "How dare you crawl in here?",
						"japanese": "よくもここまで這い上がってきたな。",
						"chinese": "竟敢爬到这里来。",
						"french": "Comment oses-tu ramper jusqu'ici ?",
						"spanish": "¿Cómo te atreves a arrastrarte hasta aquí?",
						"vietnamese": "Ngươi dám bò vào tận đây sao?",
						"thai": "กล้าดียังไงถึงคลานเข้ามาถึงที่นี่ได้?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई यहाँ तक रेंगने की?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너희도 곧 압축될 '오물'에 지나지 않아.",
						"english": "You're nothing but 'refuse' that will soon be compressed.",
						"japanese": "お前たちも、すぐに圧縮される「ゴミ」に過ぎない。",
						"chinese": "你们也不过是很快就会被压缩的“垃圾”罢了。",
						"french": "Vous n'êtes rien d'autre que des \"déchets\" qui seront bientôt compressés.",
						"spanish": "No sois más que \"desechos\" que pronto serán comprimidos.",
						"vietnamese": "Các ngươi cũng chỉ là 'rác rưởi' sẽ sớm bị nén lại mà thôi.",
						"thai": "พวกเจ้าก็เป็นแค่ 'ขยะ' ที่จะถูกบีบอัดในไม่ช้า",
						"hindi": "तुम भी महज़ 'कचरा' हो जिसे जल्द ही संपीड़ित कर दिया जाएगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 사라진 사람들을…!",
						"english": "You... the missing people...!",
						"japanese": "お前が…消えた人々を…！",
						"chinese": "你…那些失踪的人们…！",
						"french": "Toi... les personnes disparues...!",
						"spanish": "¡Tú... la gente desaparecida...!",
						"vietnamese": "Ngươi... những người đã mất tích...!",
						"thai": "แก... พวกคนที่หายไป...!",
						"hindi": "तुम... लापता लोग...!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "깔끔하게 '청소'해줬을 뿐이다.",
						"english": "I merely 'cleaned' them up neatly.",
						"japanese": "綺麗に「掃除」してやっただけだ。",
						"chinese": "我只是“清理”干净了而已。",
						"french": "Je les ai simplement \"nettoyés\" proprement.",
						"spanish": "Simplemente los \"limpié\" a fondo.",
						"vietnamese": "Ta chỉ đơn thuần 'dọn dẹp' chúng sạch sẽ thôi.",
						"thai": "ข้าแค่ 'ทำความสะอาด' พวกเขาอย่างเรียบร้อยเท่านั้น",
						"hindi": "मैंने बस उन्हें 'साफ़' कर दिया।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크으… 설마… 여기까지일 줄이야…",
						"english": "Urgh... No way... To think it would end here...",
						"japanese": "くっ…まさか…ここまでとは…。",
						"chinese": "呃…想不到…竟会到此为止…",
						"french": "Ugh... Pas possible... Dire que ça se terminerait ici...",
						"spanish": "Ugh... No puede ser... Pensar que terminaría aquí...",
						"vietnamese": "Ư... Không ngờ... Lại kết thúc tại đây...",
						"thai": "อึก... ไม่จริง... ไม่คิดเลยว่าจะจบลงแค่นี้...",
						"hindi": "उफ़... नहीं... सोचा नहीं था कि यह यहाँ खत्म होगा..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하지만… 나의 '청소'는… 끝나지 않아… Ash는… 진정한 청소를….",
						"english": "But... my 'cleaning' isn't... over... Ash will... truly clean...",
						"japanese": "しかし…私の「掃除」は…終わらない… Ashが…真の掃除を…。",
						"chinese": "但是…我的“清理”…还没结束…Ash会…进行真正的清理…。",
						"french": "Mais... mon \"nettoyage\"... n'est pas terminé... Ash... fera le vrai nettoyage...",
						"spanish": "Pero... mi \"limpieza\"... no ha terminado... Ash... hará la verdadera limpieza...",
						"vietnamese": "Nhưng... việc 'dọn dẹp' của ta... chưa kết thúc... Ash sẽ... thực hiện việc dọn dẹp thật sự...",
						"thai": "แต่ว่า... 'การทำความสะอาด' ของข้า... ยังไม่จบ... แอชจะ... ทำความสะอาดที่แท้จริง...",
						"hindi": "लेकिन... मेरी 'सफाई'... खत्म नहीं हुई... ऐश... सच्ची सफाई करेगा..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "Ash? 그게 무슨 소리야?",
						"english": "Ash? What do you mean?",
						"japanese": "Ash？それはどういう意味だ？",
						"chinese": "Ash？那是什么意思？",
						"french": "Ash ? Que veux-tu dire ?",
						"spanish": "¿Ash? ¿Qué quieres decir?",
						"vietnamese": "Ash? Ngươi có ý gì?",
						"thai": "แอช? นั่นหมายความว่าอะไร?",
						"hindi": "ऐश? तुम्हारा क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "쓰러진 괴물은 마지막으로 알 수 없는 말을 남겼다. 압축기의 굉음이 잠시 멈췄다.",
						"english": "The fallen monster uttered its last enigmatic words. The compressor's roar paused for a moment.",
						"japanese": "倒れた怪物は最後に未知の言葉を残した。圧縮機の轟音が一時止んだ。",
						"chinese": "倒下的怪物留下了最后一句未知的话。压缩机的轰鸣声暂时停止了。",
						"french": "Le monstre terrassé a prononcé ses derniers mots énigmatiques. Le grondement du compresseur s'est tu un instant.",
						"spanish": "El monstruo caído pronunció sus últimas palabras enigmáticas. El rugido del compresor se detuvo por un momento.",
						"vietnamese": "Quái vật ngã xuống thốt ra những lời cuối cùng khó hiểu. Tiếng gầm của máy nén tạm thời ngừng lại.",
						"thai": "สัตว์ประหลาดที่ล้มลงได้กล่าวถ้อยคำสุดท้ายที่ไม่เข้าใจ เสียงคำรามของเครื่องอัดหยุดลงชั่วขณะ",
						"hindi": "गिरे हुए राक्षस ने अपने अंतिम रहस्यमय शब्द कहे। कंप्रेसर की गर्जना एक पल के लिए रुक गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 닥스는 확신했다. 이것은 끝이 아닌, 시작에 불과하다는 것을. Ash의 진짜 '청소'가 무엇인지, 그들은 이제 막 알기 시작했다.",
						"english": "But Daxx was certain. This was not the end, but merely the beginning. They were just starting to understand Ash's true 'cleaning'.",
						"japanese": "しかしダックスは確信していた。これは終わりではなく、始まりに過ぎないと。アッシュの本当の「掃除」とは何なのか、彼らはようやく理解し始めたばかりだった。",
						"chinese": "但达克斯确信。这并非结束，而仅仅是开始。他们才刚刚开始明白Ash真正的“清理”是什么。",
						"french": "Mais Daxx en était certain. Ce n'était pas la fin, mais seulement le début. Ils commençaient tout juste à comprendre le véritable 'nettoyage' d'Ash.",
						"spanish": "Pero Daxx estaba seguro. Esto no era el fin, sino solo el principio. Apenas estaban empezando a comprender la verdadera 'limpieza' de Ash.",
						"vietnamese": "Nhưng Daxx tin chắc. Đây không phải là kết thúc, mà chỉ là khởi đầu. Họ chỉ vừa mới bắt đầu hiểu được 'dọn dẹp' thực sự của Ash là gì.",
						"thai": "แต่แด็กซ์มั่นใจ นี่ไม่ใช่จุดจบ แต่เป็นเพียงจุดเริ่มต้นเท่านั้น พวกเขาเพิ่งจะเริ่มเข้าใจว่า 'การทำความสะอาด' ที่แท้จริงของแอชคืออะไร",
						"hindi": "लेकिन डैक्स को यकीन था। यह अंत नहीं, बल्कि सिर्फ शुरुआत थी। वे अभी-अभी ऐश की असली 'सफाई' को समझना शुरू कर रहे थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들. 너희도 결국 '오물'이 될 뿐.",
						"english": "Insignificant beings. You too will ultimately become 'waste'.",
						"japanese": "取るに足らない者どもめ。お前たちも結局は『汚物』になるだけだ。",
						"chinese": "微不足道的东西。你们最终也只会变成‘废物’。",
						"french": "Créatures insignifiantes. Vous aussi, vous ne deviendrez finalement que des 'déchets'.",
						"spanish": "Seres insignificantes. Vosotros también, al final, solo seréis 'desechos'.",
						"vietnamese": "Lũ hèn mọn. Rồi các ngươi cũng sẽ chỉ trở thành 'rác rưởi' mà thôi.",
						"thai": "สิ่งมีชีวิตไร้ค่า พวกแกเองก็จะต้องกลายเป็น 'ขยะ' ในที่สุด",
						"hindi": "तुच्छ प्राणी। तुम भी अंततः 'कचरा' ही बनोगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ… 終わっていない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas… fini !",
						"spanish": "¡Todavía no… ha terminado!",
						"vietnamese": "Vẫn… chưa kết thúc!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "그래. 너희의 비명이 더 아름다워질 때까지, 계속 압축해주마.",
						"english": "Yes. I will keep compressing you, until your screams become even more beautiful.",
						"japanese": "そうだ。お前たちの悲鳴がもっと美しくなるまで、圧縮し続けてやろう。",
						"chinese": "没错。我会一直压缩你们，直到你们的尖叫变得更加美妙。",
						"french": "Oui. Je continuerai de vous compresser, jusqu'à ce que vos cris deviennent encore plus beaux.",
						"spanish": "Sí. Seguiré comprimiéndoos, hasta que vuestros gritos se vuelvan aún más hermosos.",
						"vietnamese": "Đúng vậy. Ta sẽ tiếp tục nén các ngươi, cho đến khi tiếng thét của các ngươi trở nên mỹ lệ hơn.",
						"thai": "ใช่ ข้าจะบีบอัดพวกเจ้าต่อไป จนกว่าเสียงกรีดร้องของพวกเจ้าจะงดงามยิ่งขึ้น",
						"hindi": "हाँ। मैं तुम्हें तब तक दबाता रहूँगा, जब तक तुम्हारी चीखें और भी खूबसूरत न हो जाएँ।"
					},
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 어둠 속, 버려진 폐상가에 거대한 압축기가 울부짖는다.",
			"사라진 이들의 흔적은 완벽히 지워진다고 했다.",
			"그러나 닥스는 알고 있었다. 모든 것이 사라지는 곳에도, 남겨진 진실은 있다는 것을.",
			"그리고 그 진실은, 단순한 기계음이 아니었다."
		],
		"english": [
			"In the city's darkness, a colossal compressor howls in a derelict arcade.",
			"They said the traces of the vanished would be perfectly erased.",
			"But Dax knew. Even where everything vanishes, a truth remains.",
			"And that truth was no mere mechanical hum."
		],
		"japanese": [
			"街の闇の中、廃れた商店街で巨大な圧縮機が咆哮する。",
			"消えた者たちの痕跡は、完全に消し去られると言われていた。",
			"しかしダックスは知っていた。すべてが消え去る場所にも、残された真実があることを。",
			"そしてその真実は、単なる機械音ではなかった。"
		],
		"chinese": [
			"城市的黑暗中，废弃的商业街里，一台巨大的压缩机在轰鸣。",
			"他们说，消失者的痕迹会被彻底抹去。",
			"然而达克斯知道。即使在万物消逝之处，也有被留下的真相。",
			"而那个真相，并非简单的机械轰鸣。"
		],
		"french": [
			"Dans l'obscurité de la ville, un compresseur colossal hurle dans une galerie marchande abandonnée.",
			"On disait que les traces des disparus seraient parfaitement effacées.",
			"Mais Dax savait. Même là où tout disparaît, une vérité demeure.",
			"Et cette vérité n'était pas un simple bruit de machine."
		],
		"spanish": [
			"En la oscuridad de la ciudad, un compresor colosal ruge en una galería comercial abandonada.",
			"Decían que las huellas de los desaparecidos serían borradas por completo.",
			"Pero Dax sabía. Incluso donde todo desaparece, una verdad perdura.",
			"Y esa verdad no era un mero sonido de máquina."
		],
		"vietnamese": [
			"Trong màn đêm đô thị, một cỗ máy nén khổng lồ đang gầm thét trong khu thương mại hoang phế.",
			"Họ nói rằng dấu vết của những người biến mất sẽ bị xóa sạch hoàn toàn.",
			"Nhưng Dax biết. Ngay cả nơi mọi thứ biến mất, vẫn còn một sự thật bị bỏ lại.",
			"Và sự thật đó, không phải là tiếng máy móc đơn thuần."
		],
		"thai": [
			"ท่ามกลางความมืดมิดของเมือง เครื่องอัดขนาดมหึมากำลังคำรามอยู่ในอาคารพาณิชย์ร้าง",
			"พวกเขาบอกว่าร่องรอยของผู้ที่หายไปจะถูกลบออกอย่างสมบูรณ์",
			"แต่แด็กซ์รู้ แม้ในที่ที่ทุกสิ่งหายไป ความจริงก็ยังคงอยู่",
			"และความจริงนั้น ไม่ใช่แค่เสียงเครื่องจักรธรรมดา"
		],
		"hindi": [
			"शहर के अंधेरे में, एक परित्यक्त व्यावसायिक परिसर में एक विशाल कंप्रेसर दहाड़ता है。",
			"कहा गया था कि गायब हुए लोगों के निशान पूरी तरह से मिटा दिए जाएंगे।",
			"लेकिन डैक्स जानता था। जहाँ सब कुछ गायब हो जाता है, वहाँ भी एक सच्चाई बची रहती है।",
			"और वह सच्चाई, सिर्फ़ एक यांत्रिक ध्वनि नहीं थी।"
		]
	}
} as const;
