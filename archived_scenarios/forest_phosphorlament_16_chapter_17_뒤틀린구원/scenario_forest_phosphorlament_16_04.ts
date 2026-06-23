export const scenario_forest_phosphorlament_16_04 = {
	"scenario_id": "forest_phosphorlament_16_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "환하게 빛나는 공간. 영혼의 나무가 뿜어내는 빛이 모든 것을 감쌌다.",
						"english": "A brightly lit space. The light from the Soul Tree enveloped everything.",
						"japanese": "輝く空間。魂の木が放つ光がすべてを包み込んでいた。",
						"chinese": "一个明亮的空间。灵魂之树散发的光芒笼罩着一切。",
						"french": "Un espace lumineux. La lumière de l'Arbre des Âmes enveloppait tout.",
						"spanish": "Un espacio brillantemente iluminado. La luz del Árbol del Alma lo envolvía todo.",
						"vietnamese": "Một không gian sáng rực. Ánh sáng từ Cây Linh Hồn bao trùm mọi thứ.",
						"thai": "พื้นที่สว่างไสว แสงจากต้นไม้วิญญาณโอบล้อมทุกสิ่ง",
						"hindi": "एक चमकता हुआ स्थान। आत्मा के वृक्ष से निकलने वाली रोशनी ने सब कुछ घेर रखा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "ela",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "아름다워… 이곳이 바로 천국이야.",
						"english": "Beautiful... This is heaven.",
						"japanese": "美しい…ここが天国だわ。",
						"chinese": "真美……这里就是天堂。",
						"french": "Magnifique… C'est le paradis.",
						"spanish": "Hermoso... Esto es el cielo.",
						"vietnamese": "Đẹp quá... Đây chính là thiên đường.",
						"thai": "สวยงาม... ที่นี่คือสวรรค์",
						"hindi": "सुंदर... यह स्वर्ग है।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "엘라? 괜찮아?",
						"english": "Ella? Are you alright?",
						"japanese": "エラ？大丈夫？",
						"chinese": "艾拉？你还好吗？",
						"french": "Ella ? Ça va ?",
						"spanish": "¿Ella? ¿Estás bien?",
						"vietnamese": "Ella? Cậu ổn không?",
						"thai": "เอลล่า? เธอไม่เป็นไรนะ?",
						"hindi": "एला? क्या तुम ठीक हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "이제야 고통이 사라졌어. 이 빛이… 모든 걸 치유해줘.",
						"english": "The pain is gone now. This light... it heals everything.",
						"japanese": "やっと痛みが消えたわ。この光が…すべてを癒してくれる。",
						"chinese": "痛苦消失了。这光……治愈了一切。",
						"french": "La douleur a disparu. Cette lumière… elle guérit tout.",
						"spanish": "El dolor ha desaparecido ahora. Esta luz... lo cura todo.",
						"vietnamese": "Giờ thì nỗi đau đã biến mất rồi. Ánh sáng này... nó chữa lành mọi thứ.",
						"thai": "ความเจ็บปวดหายไปแล้ว แสงนี้... มันเยียวยาทุกสิ่ง",
						"hindi": "अब दर्द चला गया है। यह रोशनी... सब कुछ ठीक कर देती है।"
					},
					"emotion": "happy",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "ela",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "너도 느껴봐. 나무가 주는 진정한 평화를.",
						"english": "You feel it too. The true peace the Tree grants.",
						"japanese": "あなたも感じてみて。木が与える真の平和を。",
						"chinese": "你也感受一下。树所赐予的真正平静。",
						"french": "Ressens-le aussi. La vraie paix que l'Arbre octroie.",
						"spanish": "Siéntelo tú también. La verdadera paz que otorga el Árbol.",
						"vietnamese": "Cậu cũng hãy cảm nhận đi. Sự bình yên đích thực mà Cây mang lại.",
						"thai": "นายก็ลองสัมผัสดูสิ สันติสุขที่แท้จริงที่ต้นไม้นี้มอบให้",
						"hindi": "तुम भी महसूस करो। वृक्ष से मिलने वाली सच्ची शांति को।"
					},
					"emotion": "happy",
					"speaker": "ela",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭔가… 이상해. 너무 강렬해.",
						"english": "Something's... off. It's too intense.",
						"japanese": "何か…おかしい。強烈すぎる。",
						"chinese": "有点……奇怪。太强烈了。",
						"french": "Quelque chose… cloche. C'est trop intense.",
						"spanish": "Algo... no está bien. Es demasiado intenso.",
						"vietnamese": "Có gì đó... lạ. Nó quá mãnh liệt.",
						"thai": "มีอะไร... แปลกๆ มันรุนแรงเกินไป",
						"hindi": "कुछ... अजीब है। यह बहुत तीव्र है।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "의심하지 마. 이건 유일한 구원이야. 우리 모두를 위한.",
						"english": "Don't doubt it. This is the only salvation. For all of us.",
						"japanese": "疑わないで。これこそが唯一の救済。私たち皆のための。",
						"chinese": "别怀疑。这是唯一的救赎。为了我们所有人。",
						"french": "Ne doute pas. C'est le seul salut. Pour nous tous.",
						"spanish": "No lo dudes. Esta es la única salvación. Para todos nosotros.",
						"vietnamese": "Đừng nghi ngờ. Đây là sự cứu rỗi duy nhất. Dành cho tất cả chúng ta.",
						"thai": "อย่าสงสัยเลย นี่คือหนทางรอดเดียว เพื่อเราทุกคน",
						"hindi": "शक मत करो। यह एकमात्र मोक्ष है। हम सभी के लिए।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						6,
						3
					],
					"speaker": "ela",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "숲의 모든 생명이 이 나무와 함께해. 너도 그래야만 해.",
						"english": "All life in the forest joins with this tree. You must, too.",
						"japanese": "森の全ての生命がこの木と共にある。あなたもそうするべきだ。",
						"chinese": "森林中所有的生命都与这棵树同在。你也必须如此。",
						"french": "Toute vie dans la forêt s'unit à cet arbre. Toi aussi tu dois le faire.",
						"spanish": "Toda la vida del bosque se une a este árbol. Tú también debes hacerlo.",
						"vietnamese": "Mọi sự sống trong rừng đều hòa cùng cây này. Ngươi cũng phải vậy.",
						"thai": "ทุกชีวิตในป่ารวมเป็นหนึ่งกับต้นไม้นี้ เจ้าก็ต้องเป็นเช่นนั้น",
						"hindi": "जंगल का हर जीवन इस पेड़ के साथ है। तुम्हें भी होना चाहिए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "엘라, 이건… 너 자신이 아니잖아.",
						"english": "Ella, this isn't... yourself.",
						"japanese": "エラ、これは…あなた自身じゃない。",
						"chinese": "艾拉，这不是……你自己。",
						"french": "Ella, ce n'est pas... toi-même.",
						"spanish": "Ella, esto no es... tú misma.",
						"vietnamese": "Ella, đây không phải... chính ngươi.",
						"thai": "เอลล่า นี่ไม่ใช่... ตัวตนของเจ้า",
						"hindi": "एला, यह... तुम खुद नहीं हो।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "진정한 나를 찾은 거야. 합류해. 그렇지 않으면… 고통받을 거야.",
						"english": "I've found my true self. Join us. Otherwise... you will suffer.",
						"japanese": "真の私を見つけたの。加わりなさい。さもなくば…苦しむことになるわ。",
						"chinese": "我找到了真正的自我。加入我们。否则……你将受苦。",
						"french": "J'ai trouvé mon vrai moi. Rejoins-nous. Sinon… tu souffriras.",
						"spanish": "He encontrado mi verdadero yo. Únete a nosotros. De lo contrario... sufrirás.",
						"vietnamese": "Ta đã tìm thấy bản thể chân thật của mình. Hãy tham gia. Bằng không… ngươi sẽ phải chịu đựng.",
						"thai": "ฉันพบตัวตนที่แท้จริงแล้ว เข้าร่วมซะ ไม่อย่างนั้น... เจ้าจะต้องทนทุกข์",
						"hindi": "मैंने अपना सच्चा स्वरूप पा लिया है। शामिल हो जाओ। वरना... तुम कष्ट भोगोगे।"
					},
					"emotion": "angry"
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
					"duration_ms": 500,
					"speaker": "ela",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "왜 거부하는 거야? 너의 모든 고통을 끝낼 수 있는데!",
						"english": "Why do you refuse? I can end all your suffering!",
						"japanese": "なぜ拒むの？あなたの全ての苦痛を終わらせられるのに！",
						"chinese": "你为何拒绝？我能结束你所有的痛苦！",
						"french": "Pourquoi refuses-tu ? Je peux mettre fin à toutes tes souffrances !",
						"spanish": "¿Por qué te niegas? ¡Puedo acabar con todo tu sufrimiento!",
						"vietnamese": "Sao ngươi lại từ chối? Ta có thể chấm dứt mọi đau khổ của ngươi!",
						"thai": "ทำไมเจ้าถึงปฏิเสธ? ข้าสามารถยุติความทุกข์ทั้งหมดของเจ้าได้!",
						"hindi": "तुम क्यों मना कर रहे हो? मैं तुम्हारे सभी दुखों का अंत कर सकता हूँ!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이건 구원이 아니야. 넌 나무에 속고 있어.",
						"english": "This isn't salvation. You're being deceived by the tree.",
						"japanese": "これは救済じゃない。あなたは木に騙されているのよ。",
						"chinese": "这不是救赎。你被树骗了。",
						"french": "Ce n'est pas le salut. Tu es trompé par l'arbre.",
						"spanish": "Esto no es salvación. Estás siendo engañada por el árbol.",
						"vietnamese": "Đây không phải là sự cứu rỗi. Ngươi đang bị cây lừa dối.",
						"thai": "นี่ไม่ใช่หนทางรอด เจ้ากำลังถูกต้นไม้หลอกลวง",
						"hindi": "यह मोक्ष नहीं है। तुम पेड़ से धोखा खा रहे हो।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "닥쳐! 너도 곧 알게 될 거야. 이 위대한 지혜를.",
						"english": "Silence! You'll soon realize. This great wisdom.",
						"japanese": "黙れ！お前もすぐに気づくだろう。この偉大な知恵に。",
						"chinese": "闭嘴！你很快就会明白。这伟大的智慧。",
						"french": "Silence ! Tu réaliseras bientôt. Cette grande sagesse.",
						"spanish": "¡Cállate! Pronto te darás cuenta. De esta gran sabiduría.",
						"vietnamese": "Im đi! Ngươi sẽ sớm nhận ra thôi. Trí tuệ vĩ đại này.",
						"thai": "เงียบซะ! เจ้าจะรู้เองในไม่ช้า ถึงปัญญาอันยิ่งใหญ่นี้",
						"hindi": "चुप रहो! तुम्हें जल्द ही पता चल जाएगा। इस महान ज्ञान के बारे में।"
					},
					"emotion": "angry",
					"speaker": "ela",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항… 결국 너희도 나무의 일부가 될 뿐이다.",
						"english": "Futile resistance... In the end, you too will become part of the tree.",
						"japanese": "「取るに足らない抵抗…結局お前たちも木の S一部になるだけだ。」",
						"chinese": "微不足道的抵抗……最终你们也会成为树的一部分。",
						"french": "Résistance futile... Au final, vous aussi ne serez qu'une partie de l'arbre.",
						"spanish": "Resistencia fútil... Al final, vosotros también seréis parte del árbol.",
						"vietnamese": "Sự kháng cự vô ích... Cuối cùng, các ngươi cũng sẽ trở thành một phần của cái cây mà thôi.",
						"thai": "การต่อต้านที่ไร้ค่า... สุดท้ายพวกเจ้าก็จะกลายเป็นส่วนหนึ่งของต้นไม้",
						"hindi": "निरर्थक प्रतिरोध... अंत में, तुम भी पेड़ का हिस्सा बन जाओगे।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "합류해… 평화로워질 거야…",
						"english": "Join us... you'll find peace...",
						"japanese": "「加わりなさい…平和になるだろう…」",
						"chinese": "加入吧……你会找到平静的……",
						"french": "Rejoignez-nous... vous trouverez la paix...",
						"spanish": "Únete... encontrarás la paz...",
						"vietnamese": "Tham gia đi... ngươi sẽ được bình yên...",
						"thai": "เข้าร่วมกับเรา... แล้วเจ้าจะพบกับความสงบสุข...",
						"hindi": "शामिल हो जाओ... तुम्हें शांति मिलेगी..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "엘라… 아직 포기 못 해. 널 구할 거야.",
						"english": "Ella... I can't give up yet. I'll save you.",
						"japanese": "「エラ…まだ諦めない。君を救ってみせる。」",
						"chinese": "艾拉……我还没放弃。我会救你的。",
						"french": "Ella... Je ne peux pas encore abandonner. Je te sauverai.",
						"spanish": "Ella... No puedo rendirme todavía. Te salvaré.",
						"vietnamese": "Ella... Tôi chưa thể từ bỏ. Tôi sẽ cứu em.",
						"thai": "เอลล่า... ฉันยังยอมแพ้ไม่ได้ ฉันจะช่วยเธอ",
						"hindi": "एला... मैं अभी हार नहीं मान सकता। मैं तुम्हें बचाऊँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크으… 이 정도로는… 숲의 진정한 지혜를… 막을 수 없다…",
						"english": "Urgh... This much... cannot stop... the true wisdom of the forest...",
						"japanese": "「ぐぅ…この程度では…森の真の知恵を…止められぬ…」",
						"chinese": "呃啊……就凭这点……无法阻止……森林真正的智慧……",
						"french": "Ugh... Cela... ne peut pas arrêter... la vraie sagesse de la forêt...",
						"spanish": "Ugh... Esto... no puede detener... la verdadera sabiduría del bosque...",
						"vietnamese": "Ư... Chừng này... không thể ngăn cản... trí tuệ thật sự của khu rừng...",
						"thai": "อึก... แค่นี้... ไม่อาจหยุดยั้ง... ปัญญาที่แท้จริงของป่าได้...",
						"hindi": "उफ़... बस इतना... जंगल की सच्ची बुद्धिमत्ता को... रोक नहीं सकता..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 적이 쓰러지자, 엘라의 눈빛이 잠시 돌아왔다.",
						"english": "As the unknown enemy fell, Ella's eyes briefly returned to normal.",
						"japanese": "「正体不明の敵が倒れると、エラの瞳が一時的に元に戻った。」",
						"chinese": "随着身份不明的敌人倒下，艾拉的眼神短暂地恢复了。",
						"french": "Alors que l'ennemi inconnu tombait, le regard d'Ella revint brièvement à la normale.",
						"spanish": "Cuando el enemigo desconocido cayó, la mirada de Ella volvió brevemente a la normalidad.",
						"vietnamese": "Khi kẻ địch không rõ danh tính ngã xuống, ánh mắt của Ella chợt trở lại bình thường.",
						"thai": "เมื่อศัตรูที่ไม่รู้จักล้มลง แววตาของเอลล่าก็กลับมาเป็นปกติชั่วขณะ",
						"hindi": "जैसे ही अज्ञात शत्रु गिरा, एला की आँखों में क्षण भर के लिए सामान्यता लौट आई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…내가 뭘… 한 거지…?",
						"english": "...What... have I done...?",
						"japanese": "「…私…何てことを…したんだ…？」",
						"chinese": "“……我…做了什么……？”",
						"french": "...Qu'est-ce que j'ai... fait... ?",
						"spanish": "...¿Qué... he hecho...?",
						"vietnamese": "...Mình... đã làm gì...?",
						"thai": "...ฉัน... ทำอะไรลงไป...?",
						"hindi": "...मैंने... क्या कर दिया...?"
					},
					"emotion": "sad",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "괜찮아, 엘라. 이제 괜찮을 거야.",
						"english": "It's okay, Ella. You'll be fine now.",
						"japanese": "「大丈夫だよ、エラ。もう大丈夫だから。」",
						"chinese": "没关系，艾拉。现在会好起来的。",
						"french": "C'est bon, Ella. Tout ira bien maintenant.",
						"spanish": "Está bien, Ella. Estarás bien ahora.",
						"vietnamese": "Không sao đâu, Ella. Bây giờ mọi chuyện sẽ ổn thôi.",
						"thai": "ไม่เป็นไรนะเอลล่า ตอนนี้ทุกอย่างจะดีขึ้น",
						"hindi": "ठीक है, एला। अब तुम ठीक हो जाओगी।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 영혼의 나무는 여전히 빛나고 있었다. 더 깊은 유혹이 기다리는 듯.",
						"english": "However, the Soul Tree still glowed. As if a deeper temptation awaited.",
						"japanese": "「しかし、魂の木は依然として輝いていた。さらなる深い誘惑が待ち受けているかのように。」",
						"chinese": "然而，灵魂之树依然闪耀着。仿佛更深的诱惑正在等待。",
						"french": "Cependant, l'Arbre des Âmes brillait toujours. Comme si une tentation plus profonde attendait.",
						"spanish": "Sin embargo, el Árbol del Alma seguía brillando. Como si una tentación más profunda aguardara.",
						"vietnamese": "Tuy nhiên, Cây Linh Hồn vẫn đang phát sáng. Dường như một sự cám dỗ sâu sắc hơn đang chờ đợi.",
						"thai": "แต่ต้นไม้แห่งวิญญาณยังคงเรืองแสง ราวกับว่ามีสิ่งเย้ายวนที่ลึกซึ้งกว่ารออยู่",
						"hindi": "हालांकि, आत्मा का पेड़ अभी भी चमक रहा था। मानो एक गहरा प्रलोभन इंतजार कर रहा हो।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ela",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "나무가 널 원하지 않아. 방해하지 마.",
						"english": "The tree doesn't want you. Don't interfere.",
						"japanese": "木はお前を望んでいない。邪魔をするな。",
						"chinese": "树不想要你。别碍事。",
						"french": "L'arbre ne te veut pas. N'interfère pas.",
						"spanish": "El árbol no te quiere. No interfieras.",
						"vietnamese": "Cây không muốn ngươi. Đừng cản trở.",
						"thai": "ต้นไม้ไม่ต้องการเจ้า อย่าขัดขวาง",
						"hindi": "पेड़ तुम्हें नहीं चाहता। दखल मत दो।"
					},
					"emotion": "angry",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "엘라, 그만 정신 차려!",
						"english": "Ella, snap out of it!",
						"japanese": "エラ、目を覚ましなさい！",
						"chinese": "艾拉，快清醒过来！",
						"french": "Ella, ressaisis-toi !",
						"spanish": "¡Ella, reacciona!",
						"vietnamese": "Ella, tỉnh lại đi!",
						"thai": "เอลล่า ตั้งสติหน่อย!",
						"hindi": "एला, होश में आओ!"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "엘라의 뒤편에서 거대한 그림자가 일렁였다. 영혼의 나무가 분노하는 듯했다.",
						"english": "A huge shadow flickered behind Ella. The Tree of Souls seemed to be enraged.",
						"japanese": "エラの背後で巨大な影が揺らめいた。魂の木が怒っているようだった。",
						"chinese": "巨大的阴影在艾拉身后晃动。灵魂之树似乎被激怒了。",
						"french": "Une immense ombre vacillait derrière Ella. L'Arbre des Âmes semblait enragé.",
						"spanish": "Una enorme sombra parpadeó detrás de Ella. El Árbol de las Ánimas parecía enfurecido.",
						"vietnamese": "Một cái bóng khổng lồ chập chờn phía sau Ella. Cây Linh Hồn dường như đang nổi giận.",
						"thai": "เงาขนาดใหญ่สั่นไหวอยู่ด้านหลังเอลล่า ต้นไม้แห่งวิญญาณดูเหมือนจะโกรธแค้น",
						"hindi": "एला के पीछे एक विशाल छाया हिल रही थी। आत्माओं का वृक्ष क्रोधित लग रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 필멸자여… 감히 이 숲의 섭리를 거스르는가.",
						"english": "Foolish mortal... Do you dare defy the wisdom of this forest?",
						"japanese": "愚かなる定命の者よ… この森の摂理に逆らうというのか。",
						"chinese": "愚蠢的凡人啊……竟敢违逆这森林的法则。",
						"french": "Mortel insensé... Oses-tu défier la providence de cette forêt ?",
						"spanish": "¡Necio mortal... Osas desafiar la providencia de este bosque!",
						"vietnamese": "Kẻ phàm trần ngu xuẩn... Ngươi dám chống lại quy luật của khu rừng này sao?",
						"thai": "ไอ้มนุษย์หน้าโง่... กล้าดียังไงมาขัดขวางบัญญัติแห่งป่านี้",
						"hindi": "मूर्ख नश्वर... क्या तुम इस जंगल के विधान का उल्लंघन करने का साहस करते हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…네가 엘라를 조종한 거였어?",
						"english": "...You were controlling Ella?",
						"japanese": "「…お前がエラを操っていたのか？」",
						"chinese": "“……是你操纵了艾拉？”",
						"french": "...C'était toi qui contrôlais Ella ?",
						"spanish": "...¿Tú estabas controlando a Ella?",
						"vietnamese": "...Ngươi đã điều khiển Ella sao?",
						"thai": "...แกเป็นคนควบคุมเอลล่าเหรอ?",
						"hindi": "...तुम ही एला को नियंत्रित कर रहे थे?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"영혼의 나무. 그 이름은 속삭임처럼 달콤했다.",
			"고통을 치유하고, 진정한 지혜를 준다고.",
			"그러나 그 빛에 매료된 자들은 — 다시는 돌아오지 못했다.",
			"이 구원의 유혹은, 가장 잔혹한 함정이었다."
		],
		"english": [
			"The Soul Tree. Its name was a sweet whisper.",
			"It heals pain, grants true wisdom.",
			"But those captivated by its light — never returned.",
			"This temptation of salvation was the cruelest trap."
		],
		"japanese": [
			"魂の木。その名は囁きのように甘かった。",
			"苦しみを癒し、真の知恵を与えるという。",
			"しかし、その光に魅せられた者たちは — 二度と戻らなかった。",
			"この救済の誘惑は、最も残酷な罠だった。"
		],
		"chinese": [
			"灵魂之树。它的名字如耳语般甜美。",
			"它能治愈痛苦，赐予真正的智慧。",
			"然而，那些被其光芒吸引的人——再也没有回来。",
			"这救赎的诱惑，是最残酷的陷阱。"
		],
		"french": [
			"L'Arbre des Âmes. Son nom était un doux murmure.",
			"Il guérit la douleur, octroie la vraie sagesse.",
			"Mais ceux captivés par sa lumière — ne revinrent jamais.",
			"Cette tentation de salut était le piège le plus cruel."
		],
		"spanish": [
			"El Árbol del Alma. Su nombre era un dulce susurro.",
			"Cura el dolor, otorga la verdadera sabiduría.",
			"Pero aquellos cautivados por su luz — nunca regresaron.",
			"Esta tentación de salvación fue la trampa más cruel."
		],
		"vietnamese": [
			"Cây Linh Hồn. Tên nó ngọt ngào như lời thì thầm.",
			"Nó chữa lành nỗi đau, ban cho trí tuệ đích thực.",
			"Nhưng những người bị cuốn hút bởi ánh sáng của nó — không bao giờ trở lại.",
			"Cám dỗ cứu rỗi này, là cái bẫy tàn nhẫn nhất."
		],
		"thai": [
			"ต้นไม้วิญญาณ ชื่อของมันหอมหวานราวเสียงกระซิบ",
			"มันเยียวยาความเจ็บปวด มอบปัญญาที่แท้จริง",
			"แต่ผู้ที่ถูกแสงนั้นดึงดูด — ไม่เคยกลับมา",
			"การล่อลวงแห่งความรอดนี้ คือกับดักที่โหดร้ายที่สุด"
		],
		"hindi": [
			"आत्मा का वृक्ष। उसका नाम एक मधुर फुसफुसाहट जैसा था।",
			"यह दर्द को ठीक करता है, सच्ची बुद्धिमत्ता प्रदान करता है।",
			"लेकिन उसकी रोशनी से मोहित लोग — कभी नहीं लौटे।",
			"मुक्ति का यह प्रलोभन, सबसे क्रूर जाल था।"
		]
	}
} as const;
