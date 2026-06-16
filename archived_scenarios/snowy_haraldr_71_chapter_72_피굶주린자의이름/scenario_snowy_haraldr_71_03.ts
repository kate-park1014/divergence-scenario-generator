export const scenario_snowy_haraldr_71_03 = {
	"scenario_id": "snowy_haraldr_71_03",
	"order": 3,
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
					"content": {
						"korean": "영웅의 전당, 얼어붙은 비석들이 늘어선 곳.",
						"english": "Hall of Heroes, where frozen tablets stood in rows.",
						"japanese": "英雄の殿堂、凍てついた碑石が並ぶ場所。",
						"chinese": "英雄殿堂，冰冷的石碑林立。",
						"french": "Le Panthéon des héros, où des stèles gelées s'alignent.",
						"spanish": "El Salón de los Héroes, donde lápidas congeladas se alineaban.",
						"vietnamese": "Đại sảnh Anh hùng, nơi những tấm bia lạnh giá xếp hàng.",
						"thai": "หอเกียรติยศแห่งวีรบุรุษ ที่ซึ่งศิลาจารึกที่เยือกแข็งเรียงรายอยู่",
						"hindi": "नायकों का सभागार, जहाँ जमी हुई पट्टियाँ कतार में खड़ी थीं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그중 하나만, 이름이 긁혀 지워져 있었다.",
						"english": "Only one of them had its name scratched out.",
						"japanese": "そのうちの一つだけ、名が削り取られ消されていた。",
						"chinese": "其中一块，名字被刮擦抹去。",
						"french": "Sur l'une d'elles seulement, le nom était rayé et effacé.",
						"spanish": "Solo en una de ellas, el nombre había sido rayado y borrado.",
						"vietnamese": "Chỉ một trong số đó, tên bị cạo và xóa đi.",
						"thai": "มีเพียงหนึ่งในนั้นที่ชื่อถูกขีดข่วนลบเลือนไป",
						"hindi": "उनमें से केवल एक का नाम मिटा दिया गया था।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "…이 비석은.",
						"english": "...This tablet.",
						"japanese": "……この碑石は。",
						"chinese": "……这块石碑。",
						"french": "...Cette stèle.",
						"spanish": "...Esta lápida.",
						"vietnamese": "...Tấm bia này.",
						"thai": "...ศิลาจารึกนี้",
						"hindi": "...यह स्मारक।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구 이름이야? 왜 지워졌지?",
						"english": "Whose name is this? Why was it erased?",
						"japanese": "誰の名前だ？ なぜ消された？",
						"chinese": "这是谁的名字？为什么被抹去了？",
						"french": "Quel est ce nom ? Pourquoi a-t-il été effacé ?",
						"spanish": "¿De quién es este nombre? ¿Por qué fue borrado?",
						"vietnamese": "Tên của ai vậy? Sao lại bị xóa đi?",
						"thai": "นี่ชื่อใครกัน? ทำไมถึงถูกลบเลือนไป?",
						"hindi": "यह किसका नाम है? इसे क्यों मिटाया गया?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "기록이 흐릿해. 하지만… 칼로 긁은 자국이 선명해.",
						"english": "The record is faint. But... the sword marks are clear.",
						"japanese": "記録は曖昧だ。だが…刀で削った痕が鮮明に残っている。",
						"chinese": "记载模糊。但是……刀刮的痕迹却很清晰。",
						"french": "Le registre est flou. Mais... les marques d'épée sont nettes.",
						"spanish": "El registro es tenue. Pero... las marcas de cuchillo son claras.",
						"vietnamese": "Ghi chép đã mờ. Nhưng… vết cào bằng dao thì rõ ràng.",
						"thai": "บันทึกเลือนราง แต่…รอยขีดข่วนจากคมดาบกลับชัดเจน",
						"hindi": "रिकॉर्ड धुंधला है। लेकिन... चाकू के निशान स्पष्ट हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 450,
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "단순히 지운 게 아니야. 숨기려고 애쓴 흔적 같아.",
						"english": "It wasn't merely erased. It seems like an attempt to hide something.",
						"japanese": "ただ消しただけじゃない。何かを隠そうとした跡のようだ。",
						"chinese": "不只是简单地抹去。似乎是为了隐藏什么而费尽心思。",
						"french": "Ce n'est pas simplement effacé. Cela ressemble à une tentative de cacher quelque chose.",
						"spanish": "No fue simplemente borrado. Parece un intento de ocultar algo.",
						"vietnamese": "Không chỉ đơn thuần là xóa đi. Dường như là dấu vết của sự cố gắng che giấu.",
						"thai": "นี่ไม่ใช่แค่การลบเลือน ดูเหมือนจะเป็นร่องรอยของการพยายามซ่อนบางสิ่ง",
						"hindi": "इसे सिर्फ मिटाया नहीं गया था। यह कुछ छिपाने की कोशिश जैसा लगता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "글자가 조금 보여?",
						"english": "Can you make out any letters?",
						"japanese": "少し字が見える？",
						"chinese": "能看到一点字吗？",
						"french": "Tu vois des lettres ?",
						"spanish": "¿Se ven un poco las letras?",
						"vietnamese": "Có thấy chữ nào không?",
						"thai": "พอจะเห็นตัวอักษรไหม?",
						"hindi": "क्या तुम्हें कुछ अक्षर दिख रहे हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "흐릿하지만… 첫 글자는 'H' 같아.",
						"english": "It's blurry, but… the first letter looks like 'H'.",
						"japanese": "ぼやけてるけど…最初の字は『H』みたい。",
						"chinese": "很模糊……但第一个字母好像是‘H’。",
						"french": "C'est flou, mais… la première lettre ressemble à un 'H'.",
						"spanish": "Está borroso, pero… la primera letra parece una 'H'.",
						"vietnamese": "Mờ lắm… nhưng chữ đầu tiên có vẻ là 'H'.",
						"thai": "มันเลือนลาง แต่ตัวอักษรแรกดูเหมือน 'H' เลย",
						"hindi": "यह धुंधला है, लेकिन… पहला अक्षर 'H' जैसा लगता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그리고 이 룬 문양… 묘하게 낯익어.",
						"english": "And this rune… it's strangely familiar.",
						"japanese": "そしてこのルーン文字…妙に見覚えがある。",
						"chinese": "而且这个符文…有点眼熟。",
						"french": "Et ce symbole runique… étrangement familier.",
						"spanish": "Y este grabado rúnico… es extrañamente familiar.",
						"vietnamese": "Và ký tự rune này… sao lại quen thuộc lạ thường.",
						"thai": "และอักษรรูนนี่… คุ้นตาแปลกๆ",
						"hindi": "और यह रनिक चिह्न… यह अजीब तरह से परिचित है।"
					},
					"speaker": "eira",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 550,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이름의 조각들이 맞춰지고 있어. 'Haraldr'…",
						"english": "The pieces of the name are coming together. 'Haraldr'…",
						"japanese": "名前の断片が繋がっていく。『Haraldr』…",
						"chinese": "名字的碎片正在拼凑起来。‘Haraldr’……",
						"french": "Les fragments du nom s'assemblent. 'Haraldr'…",
						"spanish": "Las piezas del nombre encajan. 'Haraldr'…",
						"vietnamese": "Các mảnh của cái tên đang khớp lại. 'Haraldr'…",
						"thai": "เศษเสี้ยวของชื่อกำลังรวมกัน 'Haraldr'…",
						"hindi": "नाम के टुकड़े जुड़ रहे हैं। 'Haraldr'…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "Haraldr? 처음 듣는 이름인데.",
						"english": "Haraldr? Never heard that name before.",
						"japanese": "ハラルドル？初めて聞く名前だ。",
						"chinese": "Haraldr？第一次听到这个名字。",
						"french": "Haraldr ? Jamais entendu ce nom.",
						"spanish": "¿Haraldr? Es la primera vez que oigo ese nombre.",
						"vietnamese": "Haraldr? Một cái tên xa lạ.",
						"thai": "ฮาราลเดอร์เหรอ? ไม่เคยได้ยินชื่อนี้มาก่อนเลย",
						"hindi": "हैरल्ड्र? यह नाम मैंने पहले कभी नहीं सुना।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기, 이름 아래에도 뭔가 있었어.",
						"english": "Here, there was something below the name too.",
						"japanese": "ここ、名前の下にも何かあったよ。",
						"chinese": "这里，名字下面也有些东西。",
						"french": "Ici, il y avait aussi quelque chose sous le nom.",
						"spanish": "Aquí, también había algo debajo del nombre.",
						"vietnamese": "Ở đây, dưới tên cũng có gì đó.",
						"thai": "ตรงนี้ ใต้ชื่อก็มีอะไรบางอย่างอยู่ด้วย",
						"hindi": "यहाँ, नाम के नीचे भी कुछ था।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "…격렬하게 긁어 지웠어. 아주 불길한 단어 같아.",
						"english": "…violently scratched out. It seems like a very ominous word.",
						"japanese": "…激しく削り消されている。とても不吉な言葉みたいだ。",
						"chinese": "……被猛烈地刮掉了。好像是一个很不吉利的词。",
						"french": "…violemment effacé. On dirait un mot très sinistre.",
						"spanish": "…borrado con vehemencia. Parece una palabra muy siniestra.",
						"vietnamese": "…bị cạo xóa một cách dữ dội. Dường như là một từ rất đáng ngại.",
						"thai": "…ถูกขูดลบอย่างรุนแรง ดูเหมือนจะเป็นคำที่ไม่เป็นมงคลเอามากๆ",
						"hindi": "…हिंसक रूप से खुरच कर मिटा दिया गया है। यह एक बहुत ही अशुभ शब्द लगता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 400,
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 알겠어. 이 비석의 주인은… 'Haraldr'야.",
						"english": "Now I get it. The owner of this stele is… 'Haraldr'.",
						"japanese": "もう分かった。この石碑の持ち主は…『Haraldr』だ。",
						"chinese": "现在我明白了。这个石碑的主人是……‘Haraldr’。",
						"french": "Maintenant je comprends. Le propriétaire de cette stèle est… 'Haraldr'.",
						"spanish": "Ahora lo entiendo. El dueño de esta estela es… 'Haraldr'.",
						"vietnamese": "Bây giờ tôi hiểu rồi. Chủ nhân của tấm bia này là… 'Haraldr'.",
						"thai": "ตอนนี้ฉันเข้าใจแล้ว เจ้าของศิลาจารึกนี้คือ… 'Haraldr'",
						"hindi": "अब मुझे समझ आया। इस शिलालेख का मालिक… 'हैरल्ड्र' है।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그런데 왜 지운 거지?",
						"english": "But why was it erased?",
						"japanese": "でも、どうして消したんだろう？",
						"chinese": "但是为什么要擦掉呢？",
						"french": "Mais pourquoi a-t-il été effacé ?",
						"spanish": "¿Pero por qué lo borraron?",
						"vietnamese": "Nhưng tại sao lại xóa đi?",
						"thai": "แต่ทำไมถึงถูกลบออกไปล่ะ?",
						"hindi": "लेकिन इसे क्यों मिटाया गया?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 룬 문양… 'H'를 상징해.",
						"english": "This rune… it symbolizes 'H'.",
						"japanese": "このルーン文字…『H』を象徴している。",
						"chinese": "这个符文……象征着‘H’。",
						"french": "Ce symbole runique… il symbolise le 'H'.",
						"spanish": "Este grabado rúnico… simboliza la 'H'.",
						"vietnamese": "Ký tự rune này… nó tượng trưng cho 'H'.",
						"thai": "อักษรรูนนี่… เป็นสัญลักษณ์ของ 'H'",
						"hindi": "यह रनिक चिह्न… 'H' का प्रतीक है।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "어쩐지… {random_boss}의 몸에 새겨진 룬과 똑같아.",
						"english": "Somehow... it's just like the runes carved on {random_boss}'s body.",
						"japanese": "なぜか… {random_boss}の体に刻まれたルーンと同じだ。",
						"chinese": "不知为何……和刻在{random_boss}身上的符文一模一样。",
						"french": "Étrange... c'est exactement comme les runes gravées sur le corps de {random_boss}.",
						"spanish": "Extraño... es idéntico a las runas grabadas en el cuerpo de {random_boss}.",
						"vietnamese": "Không hiểu sao... nó giống hệt những ký tự rune khắc trên người {random_boss}.",
						"thai": "ไม่รู้ทำไม... มันเหมือนกับรูนที่สลักอยู่บนร่างของ {random_boss} เลย",
						"hindi": "पता नहीं क्यों... यह बिल्कुल वैसा ही है जैसा {random_boss} के शरीर पर खुदे हुए रन हैं।"
					}
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그 밑에 지워진 글자는… '피굶주린'.",
						"english": "The erased text beneath it is... 'Bloodthirsty'.",
						"japanese": "その下にある消された文字は…「血に飢えた」だ。",
						"chinese": "下面被抹去的文字是……“嗜血的”。",
						"french": "Le texte effacé en dessous est... « Sanguinaire ».",
						"spanish": "El texto borrado debajo es... 'Sanguinario'.",
						"vietnamese": "Dòng chữ bị xóa bên dưới là... 'Khát máu'.",
						"thai": "ข้อความที่ถูกลบอยู่ข้างใต้คือ... 'กระหายเลือด'",
						"hindi": "उसके नीचे मिटाया हुआ पाठ है... 'रक्तपिपासु'।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "피굶주린 Haraldr…?",
						"english": "Bloodthirsty Haraldr...?",
						"japanese": "血に飢えたHaraldr…？",
						"chinese": "嗜血的Haraldr……？",
						"french": "Haraldr le Sanguinaire... ?",
						"spanish": "Haraldr el Sanguinario...?",
						"vietnamese": "Haraldr Khát máu...?",
						"thai": "Haraldr ผู้กระหายเลือด...?",
						"hindi": "रक्तपिपासु हैराल्ड्र...?"
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…겨우 이름 하나… 기억해낸다고… 달라질 것 같으냐…!",
						"english": "...Just remembering one name... do you think that changes anything...!",
						"japanese": "…たかが名前一つ…思い出したところで…何が変わるというのだ…！",
						"chinese": "……仅仅是记起一个名字……你以为就能改变什么吗……！",
						"french": "...Juste un nom... tu crois que ça va changer quelque chose... !",
						"spanish": "...Solo un nombre... ¿crees que eso cambiará algo...?",
						"vietnamese": "...Chỉ là một cái tên... ngươi nghĩ nó có thể thay đổi được gì sao...!",
						"thai": "...แค่จำชื่อเดียวได้... คิดว่าจะเปลี่ยนอะไรได้งั้นหรือ...!",
						"hindi": "...बस एक नाम याद करने से... क्या तुम्हें लगता है कुछ बदल जाएगा...!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실은… 결국 드러나는 법.",
						"english": "The truth... always reveals itself.",
						"japanese": "真実は… やがて明らかになるものだ。",
						"chinese": "真相…终将大白。",
						"french": "La vérité… finit toujours par éclater.",
						"spanish": "La verdad… siempre sale a la luz.",
						"vietnamese": "Sự thật… cuối cùng sẽ được phơi bày.",
						"thai": "ความจริง… ย่อมถูกเปิดเผยในที่สุด",
						"hindi": "सत्य… अंततः प्रकट होता ही है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "기록은 완성됐어. '피굶주린 Haraldr'… 진실의 무게.",
						"english": "The record is complete. 'Bloodthirsty Haraldr'... the weight of truth.",
						"japanese": "記録は完成した。「血に飢えしハラルドル」…真実の重み。",
						"chinese": "记录已完成。“嗜血的哈拉尔德”…真相之重。",
						"french": "Le dossier est complet. « Haraldr le Sanguinaire »… le poids de la vérité.",
						"spanish": "El registro está completo. 'Haraldr el Sanguinario'... el peso de la verdad.",
						"vietnamese": "Hồ sơ đã hoàn tất. 'Haraldr Khát Máu'... sức nặng của sự thật.",
						"thai": "บันทึกเสร็จสมบูรณ์แล้ว 'ฮารัลดร์ผู้กระหายเลือด'... น้ำหนักของความจริง",
						"hindi": "अभिलेख पूरा हो गया है। 'रक्तपिपासु हरल्ड्र'... सत्य का भार।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "지워졌던 이름이 복원되고, 전설은 깨어났다.",
						"english": "The erased name has been restored, and the legend awakened.",
						"japanese": "消された名が復元され、伝説は目覚めた。",
						"chinese": "被抹去的名字已复原，传说已苏醒。",
						"french": "Le nom effacé a été restauré, et la légende s'est éveillée.",
						"spanish": "El nombre borrado ha sido restaurado, y la leyenda ha despertado.",
						"vietnamese": "Cái tên bị xóa đã được khôi phục, và truyền thuyết đã thức tỉnh.",
						"thai": "นามที่ถูกลบได้ถูกฟื้นคืน และตำนานได้ตื่นขึ้น",
						"hindi": "मिटाया गया नाम बहाल हो गया है, और किंवदंती जागृत हो गई है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그러나 아직 끝나지 않았다. 깨어난 이름은, 더 깊은 어둠을 불렀다.",
						"english": "But it's not over yet. The awakened name has summoned a deeper darkness.",
						"japanese": "しかし、まだ終わってはいない。目覚めた名は、さらなる深き闇を呼んだ。",
						"chinese": "然而尚未结束。苏醒的名字，唤来了更深的黑暗。",
						"french": "Mais ce n'est pas encore fini. Le nom éveillé a invoqué des ténèbres plus profondes.",
						"spanish": "Pero aún no ha terminado. El nombre despertado ha invocado una oscuridad más profunda.",
						"vietnamese": "Nhưng chưa kết thúc. Cái tên thức tỉnh đã triệu hồi một bóng tối sâu thẳm hơn.",
						"thai": "แต่ยังไม่จบสิ้น นามที่ตื่นขึ้นได้เรียกความมืดมิดที่ลึกซึ้งกว่า",
						"hindi": "परन्तु अभी समाप्त नहीं हुआ है। जागृत नाम ने गहन अंधकार को बुलाया है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "아직이다… 너희는 그 이름을 감당할 수 없어.",
						"english": "Not yet... You cannot bear that name.",
						"japanese": "まだだ…お前たちにはその名を背負いきれない。",
						"chinese": "还没…你们无法承受那个名字。",
						"french": "Pas encore… Vous ne pouvez pas supporter ce nom.",
						"spanish": "Todavía no… No podéis soportar ese nombre.",
						"vietnamese": "Chưa đâu… Các ngươi không thể gánh vác cái tên đó.",
						"thai": "ยัง... พวกเจ้าไม่อาจแบกรับนามนั้นได้",
						"hindi": "अभी नहीं… तुम उस नाम को सहन नहीं कर सकते।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…다시 돌아올 거야. 모든 진실을 밝힐 때까지!",
						"english": "...I will return. Until all truth is revealed!",
						"japanese": "…また戻ってくる。全ての真実を明かすまで！",
						"chinese": "……我会再回来。直到所有真相大白为止！",
						"french": "…Je reviendrai. Jusqu'à ce que toute la vérité soit révélée !",
						"spanish": "…Volveré. ¡Hasta que toda la verdad sea revelada!",
						"vietnamese": "…Ta sẽ trở lại. Cho đến khi mọi sự thật được phơi bày!",
						"thai": "...ข้าจะกลับมา จนกว่าความจริงทั้งหมดจะถูกเปิดเผย!",
						"hindi": "…मैं वापस आऊँगा। जब तक सभी सत्य उजागर न हो जाएँ!"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "기록은… 아직 완성되지 않았어.",
						"english": "The record is... not yet complete.",
						"japanese": "記録は…まだ完成していない。",
						"chinese": "记录…尚未完成。",
						"french": "Le dossier n'est… pas encore complet.",
						"spanish": "El registro… aún no está completo.",
						"vietnamese": "Hồ sơ… vẫn chưa hoàn tất.",
						"thai": "บันทึกยัง... ไม่สมบูรณ์",
						"hindi": "अभिलेख… अभी पूरा नहीं हुआ है।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "이제 알겠어. 당신의 진짜 이름은… 피굶주린 Haraldr.",
						"english": "Now I understand. Your true name is... Bloodthirsty Haraldr.",
						"japanese": "これでわかった。あなたの本当の名前は… 血に飢えたHaraldrだ。",
						"chinese": "现在我明白了。你真正的名字是……嗜血的Haraldr。",
						"french": "Maintenant je comprends. Ton vrai nom est... Haraldr le Sanguinaire.",
						"spanish": "Ahora lo entiendo. Tu verdadero nombre es... Haraldr el Sanguinario.",
						"vietnamese": "Bây giờ tôi đã hiểu. Tên thật của ngài là... Haraldr Khát máu.",
						"thai": "ตอนนี้ฉันเข้าใจแล้ว ชื่อที่แท้จริงของคุณคือ... Haraldr ผู้กระหายเลือด",
						"hindi": "अब मैं समझा। तुम्हारा असली नाम है... रक्तपिपासु हैराल्ड्र।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…기억해냈군.",
						"english": "...You remembered.",
						"japanese": "…思い出したな。",
						"chinese": "……你记起来了。",
						"french": "...Tu t'en es souvenu.",
						"spanish": "...Lo recordaste.",
						"vietnamese": "...Ngươi đã nhớ ra.",
						"thai": "...เจ้าจำได้แล้ว",
						"hindi": "...तुम्हें याद आ गया।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 그 전당의…!",
						"english": "You're from that hall's...!",
						"japanese": "貴様が、あの殿堂の…！",
						"chinese": "你是那个殿堂的……！",
						"french": "Tu es de cette salle... !",
						"spanish": "¡Tú eres de esa sala...!",
						"vietnamese": "Ngươi là của sảnh đường đó...!",
						"thai": "เจ้าคือของห้องโถงนั้น...!",
						"hindi": "तुम उस हॉल के हो...!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "내 이름은 잊혀야 했다. 감히, 입에 담다니.",
						"english": "My name was meant to be forgotten. How dare you utter it.",
						"japanese": "私の名前は忘れ去られるべきだった。よくも、口にしたな。",
						"chinese": "我的名字本该被遗忘。你竟敢提起。",
						"french": "Mon nom aurait dû être oublié. Comment oses-tu le prononcer.",
						"spanish": "Mi nombre debía ser olvidado. Cómo te atreves a pronunciarlo.",
						"vietnamese": "Tên ta đáng lẽ phải bị lãng quên. Sao ngươi dám nhắc đến.",
						"thai": "ชื่อของข้าควรถูกลืมเลือน เจ้ากล้าดียังไงถึงพูดมันออกมา",
						"hindi": "मेरा नाम भुला दिया जाना चाहिए था। तुम्हारी हिम्मत कैसे हुई इसे ज़बान पर लाने की।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "너희도… 영원히 잊혀질 것이다.",
						"english": "You too... shall be forgotten forever.",
						"japanese": "お前たちも…永遠に忘れ去られるだろう。",
						"chinese": "你们也会……永远被遗忘。",
						"french": "Vous aussi... vous serez oubliés pour toujours.",
						"spanish": "Vosotros también... seréis olvidados para siempre.",
						"vietnamese": "Các ngươi cũng... sẽ bị lãng quên mãi mãi.",
						"thai": "พวกเจ้าด้วย... จะถูกลืมเลือนไปตลอดกาล",
						"hindi": "तुम भी... हमेशा के लिए भुला दिए जाओगे।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "잊혀진다고… 도망칠 순 없어!",
						"english": "Being forgotten... won't let you escape!",
						"japanese": "忘れ去られたからって…逃げられると思うな！",
						"chinese": "被遗忘……也无法逃脱！",
						"french": "L'oubli... ne vous permettra pas de vous échapper !",
						"spanish": "¡Ser olvidado... no te salvará de escapar!",
						"vietnamese": "Bị lãng quên... không thể giúp ngươi thoát khỏi đâu!",
						"thai": "ถูกลืมเลือนไปแล้ว... หนีไม่พ้นหรอก!",
						"hindi": "भुला दिए जाने से... तुम भाग नहीं सकते!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"영웅의 전당. 잊힌 이름들이 잠들어 있었다.",
			"그러나 한 비석은, 이름조차 지워진 채였다.",
			"기록자 에이라는 알았다. 지워진 것은, 오히려 더욱 선명해진다는 것을.",
			"그것은 그저 이름이 아니었다. 깨어나는 전설, 봉인된 공포."
		],
		"english": [
			"Hall of Heroes. Forgotten names slept within.",
			"Yet, on one tablet, even the name was erased.",
			"Aira, the Chronicler, knew. What was erased often became clearer.",
			"It was more than a name. A legend awakening, a terror sealed away."
		],
		"japanese": [
			"英雄の殿堂。忘れ去られた名が眠っていた。",
			"しかし、ある碑石からは、名さえも消え去っていた。",
			"記録者アイラは知っていた。消されたものほど、かえって鮮明になることを。",
			"それはただの名ではなかった。目覚める伝説、封印された恐怖。"
		],
		"chinese": [
			"英雄殿堂。被遗忘的名字在此长眠。",
			"然而，一块石碑上的名字却被抹去了。",
			"记录者艾拉明白，被抹去的东西，反而会更加清晰。",
			"那不只是一个名字。而是觉醒的传说，被封印的恐惧。"
		],
		"french": [
			"Le Panthéon des héros. Des noms oubliés y reposaient.",
			"Mais sur une stèle, même le nom était effacé.",
			"Aira, la Chroniqueuse, savait. Ce qui était effacé devenait souvent plus clair.",
			"Ce n'était pas qu'un nom. Une légende qui s'éveille, une terreur scellée."
		],
		"spanish": [
			"El Salón de los Héroes. Nombres olvidados dormían allí.",
			"Sin embargo, en una lápida, incluso el nombre había sido borrado.",
			"Aira, la Cronista, lo sabía. Lo que se borraba, a menudo se volvía más claro.",
			"No era solo un nombre. Una leyenda que despertaba, un terror sellado."
		],
		"vietnamese": [
			"Đại sảnh Anh hùng. Những cái tên bị lãng quên đang yên giấc.",
			"Nhưng trên một tấm bia, ngay cả cái tên cũng bị xóa.",
			"Người ghi chép Aira biết. Điều bị xóa đi lại càng trở nên rõ ràng hơn.",
			"Đó không chỉ là một cái tên. Một truyền thuyết đang thức tỉnh, một nỗi kinh hoàng bị phong ấn."
		],
		"thai": [
			"หอเกียรติยศแห่งวีรบุรุษ นามที่ถูกลืมเลือนได้หลับใหลอยู่",
			"ทว่า บนศิลาจารึกหนึ่งนั้น แม้แต่ชื่อก็ยังถูกลบเลือนไป",
			"ไอรา ผู้บันทึกกาลเวลา รู้ดีว่า สิ่งที่ถูกลบเลือนกลับยิ่งชัดเจนขึ้น",
			"นั่นมิใช่เพียงชื่อ แต่คือตำนานที่ตื่นขึ้น ความหวาดกลัวที่ถูกผนึกไว้"
		],
		"hindi": [
			"नायकों का सभागार। भूले हुए नाम वहीं सो रहे थे।",
			"फिर भी, एक स्मारक पर, नाम भी मिटा दिया गया था।",
			"इतिहासकार ऐरा जानती थी। जो मिटाया गया, वह और भी स्पष्ट हो गया।",
			"वह सिर्फ एक नाम नहीं था। एक जागती हुई किंवदंती, एक बंद किया गया आतंक।"
		]
	}
} as const;
