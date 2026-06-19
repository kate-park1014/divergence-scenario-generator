export const scenario_forest_nutcommander_3_02 = {
	"scenario_id": "forest_nutcommander_3_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
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
						"korean": "풍요롭던 숲은 굶주림으로 가득했다. 동물들의 눈은 공포에 질려 있었다.",
						"english": "The once bountiful forest was filled with hunger. The animals' eyes were wide with fear.",
						"japanese": "豊かだった森は飢餓に満ちていた。動物たちの目は恐怖に怯えていた。",
						"chinese": "曾经富饶的森林充满了饥饿。动物们的眼睛里充满了恐惧。",
						"french": "La forêt autrefois luxuriante était remplie de famine. Les yeux des animaux étaient emplis de terreur.",
						"spanish": "El bosque, antes abundante, estaba lleno de hambre. Los ojos de los animales estaban llenos de miedo.",
						"vietnamese": "Khu rừng từng trù phú nay tràn ngập đói kém. Mắt các loài vật đều kinh hoàng.",
						"thai": "ป่าที่เคยอุดมสมบูรณ์กลับเต็มไปด้วยความหิวโหย ดวงตาของสัตว์ต่างๆ เต็มไปด้วยความกลัว",
						"hindi": "कभी समृद्ध जंगल भूख से भर गया था। जानवरों की आँखें डर से भरी थीं।"
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "briar",
					"duration_ms": 500,
					"spot": [
						5,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "briar",
					"content": {
						"korean": "…여기 봐. 저 녀석들. 전부 굶어 죽어가고 있어.",
						"english": "...Look here. Those guys. They're all starving to death.",
						"japanese": "…ここを見て。あいつら。みんな飢え死にしようとしている。",
						"chinese": "……看这里。那些家伙。它们都快饿死了。",
						"french": "...Regarde ici. Ces créatures. Elles sont toutes en train de mourir de faim.",
						"spanish": "...Mira aquí. Esos. Todos se están muriendo de hambre.",
						"vietnamese": "...Nhìn đây. Bọn chúng. Tất cả đều sắp chết đói rồi.",
						"thai": "...ดูนี่สิ พวกนั้น กำลังจะอดตายกันหมดแล้ว",
						"hindi": "...यहाँ देखो। वे सब भूख से मर रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "도토리가… 이렇게 싹 사라질 리가 없는데.",
						"english": "The acorns... there's no way they could all just disappear like this.",
						"japanese": "ドングリが…こんな風に全部消えるなんてありえない。",
						"chinese": "橡子……不可能就这样全部消失的。",
						"french": "Les glands... c'est impossible qu'ils aient tous disparu comme ça.",
						"spanish": "Las bellotas... no hay forma de que desaparezcan así.",
						"vietnamese": "Hạt dẻ... không thể nào tự dưng biến mất hết như vậy được.",
						"thai": "ลูกโอ๊ก...ไม่มีทางที่จะหายไปหมดแบบนี้",
						"hindi": "बलूत के फल... ऐसे अचानक गायब नहीं हो सकते।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "내가 직접 봤어. 거대한 그림자가 모든 걸 쓸어갔다고.",
						"english": "I saw it myself. A giant shadow swept everything away.",
						"japanese": "私はこの目で見た。巨大な影が全てを奪っていったと。",
						"chinese": "我亲眼看到了。一个巨大的影子把所有东西都卷走了。",
						"french": "Je l'ai vu de mes propres yeux. Une ombre gigantesque a tout emporté.",
						"spanish": "Lo vi con mis propios ojos. Una sombra gigante se llevó todo.",
						"vietnamese": "Tôi đã tận mắt thấy. Một bóng đen khổng lồ đã cuốn trôi tất cả.",
						"thai": "ฉันเห็นเองกับตา เงาขนาดยักษ์กวาดทุกสิ่งไป",
						"hindi": "मैंने खुद देखा है। एक विशाल छाया सब कुछ बहा ले गई।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "briar",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "여기도 마찬가지야. 동물들이 떨고 있어.",
						"english": "It's the same here. The animals are trembling.",
						"japanese": "ここも同じだ。動物たちが震えている。",
						"chinese": "这里也一样。动物们都在颤抖。",
						"french": "C'est pareil ici. Les animaux tremblent.",
						"spanish": "Aquí también es igual. Los animales están temblando.",
						"vietnamese": "Ở đây cũng vậy. Các loài vật đang run rẩy.",
						"thai": "ที่นี่ก็เหมือนกัน สัตว์ต่างๆ กำลังสั่น",
						"hindi": "यहाँ भी वही हाल है। जानवर काँप रहे हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "브라이어. 뭔가 들려?",
						"english": "Briar. Do you hear something?",
						"japanese": "ブライア。何か聞こえる？",
						"chinese": "布莱尔。你听到什么了吗？",
						"french": "Briar. Tu entends quelque chose ?",
						"spanish": "Briar. ¿Oyes algo?",
						"vietnamese": "Briar. Cậu có nghe thấy gì không?",
						"thai": "ไบรเออร์ ได้ยินอะไรไหม?",
						"hindi": "ब्रायर। कुछ सुनाई दे रहा है?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "다들 '장군님'을 무서워해.",
						"english": "Everyone fears 'The General'.",
						"japanese": "みんな「将軍様」を恐れている。",
						"chinese": "大家都害怕“将军大人”。",
						"french": "Tout le monde craint \"le Général\".",
						"spanish": "Todos temen al \"General\".",
						"vietnamese": "Mọi người đều sợ 'Tướng Quân'.",
						"thai": "ทุกคนกลัว 'ท่านแม่ทัพ'",
						"hindi": "सभी 'जनरल' से डरते हैं।"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "장군님? 대체 누구야?",
						"english": "The General? Who exactly is that?",
						"japanese": "将軍様？一体誰なの？",
						"chinese": "将军大人？那到底是谁？",
						"french": "Le Général ? Qui est-ce, au juste ?",
						"spanish": "¿El General? ¿Quién es exactamente?",
						"vietnamese": "Tướng Quân? Rốt cuộc là ai?",
						"thai": "ท่านแม่ทัพ? ใครกันแน่?",
						"hindi": "जनरल? आखिर वह कौन है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "이름을 입에 담는 것조차 두려워하고 있어. 거대한 존재라고만 해.",
						"english": "They're even afraid to speak his name. They only say he's a colossal being.",
						"japanese": "名前を口にするのも恐れている。ただ、巨大な存在だとだけ。",
						"chinese": "他们甚至害怕提及他的名字。只说他是一个巨大的存在。",
						"french": "Ils ont même peur de prononcer son nom. Ils disent seulement que c'est une entité colossale.",
						"spanish": "Temen incluso pronunciar su nombre. Solo dicen que es un ser colosal.",
						"vietnamese": "Họ thậm chí còn sợ nói tên hắn. Chỉ nói rằng hắn là một sinh vật khổng lồ.",
						"thai": "พวกเขากลัวแม้แต่จะเอ่ยชื่อ แค่บอกว่าเป็นสิ่งมีชีวิตขนาดมหึมา",
						"hindi": "वे उसका नाम लेने से भी डरते हैं। बस इतना कहते हैं कि वह एक विशालकाय प्राणी है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "briar",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "땅에는 무언가 거대한 것이 쓸고 간 자국이 선명했다.",
						"english": "Clear marks showed something massive had swept across the ground.",
						"japanese": "地面には、何か巨大なものが通り過ぎた跡がくっきりと残っていた。",
						"chinese": "地面上清晰地留有某种巨大物体扫过的痕迹。",
						"french": "Des marques évidentes montraient que quelque chose d'énorme avait balayé le sol.",
						"spanish": "Claras marcas mostraban que algo masivo había arrasado el suelo.",
						"vietnamese": "Dấu vết rõ ràng cho thấy một thứ gì đó khổng lồ đã quét qua mặt đất.",
						"thai": "มีร่องรอยชัดเจนที่พื้นดินว่ามีบางสิ่งขนาดมหึมาได้กวาดผ่านไป",
						"hindi": "ज़मीन पर साफ निशान थे कि कोई विशाल चीज़ गुज़र चुकी थी।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이 정도 흔적이면… 코끼리라도 지나간 건가?",
						"english": "Traces like these... did an elephant pass by?",
						"japanese": "この程度の痕跡…象でも通ったのか？",
						"chinese": "这种痕迹……难道是大象经过了吗？",
						"french": "Des traces pareilles... un éléphant serait passé par là ?",
						"spanish": "¿Huellas así... habrá pasado un elefante?",
						"vietnamese": "Dấu vết như thế này... liệu có phải voi đã đi qua không?",
						"thai": "ร่องรอยแบบนี้... ช้างเดินผ่านไปเหรอ?",
						"hindi": "ऐसे निशान... क्या कोई हाथी गुज़रा होगा?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "하지만 코끼리는 도토리를 모으지 않아.",
						"english": "But elephants don't collect acorns.",
						"japanese": "しかし、象はドングリを集めない。",
						"chinese": "但大象不收集橡子。",
						"french": "Mais les éléphants ne ramassent pas de glands.",
						"spanish": "Pero los elefantes no recogen bellotas.",
						"vietnamese": "Nhưng voi không thu thập hạt sồi.",
						"thai": "แต่ช้างไม่เก็บลูกโอ๊ก",
						"hindi": "लेकिन हाथी बलूत के फल इकट्ठा नहीं करते।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그럼 대체 누구야? 이 엄청난 양을…",
						"english": "Then who could it be? All this...",
						"japanese": "じゃあ、一体誰なの？この途方もない量を…",
						"chinese": "那到底是谁呢？这么大的量……",
						"french": "Alors qui est-ce ? Toute cette quantité...",
						"spanish": "¿Entonces quién es? Esta cantidad masiva...",
						"vietnamese": "Vậy rốt cuộc là ai? Lượng lớn thế này...",
						"thai": "แล้วใครกันแน่? ปริมาณมหาศาลขนาดนี้...",
						"hindi": "तो फिर कौन है? यह इतनी बड़ी मात्रा..."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…분명 저 위 어딘가에, 장군님이 쌓아뒀을 거야.",
						"english": "...Surely, The General must have piled them up somewhere above.",
						"japanese": "…きっと、あの上のどこかに、将軍様が積み上げたんだ。",
						"chinese": "……肯定在上面某个地方，是将军大人堆积起来的。",
						"french": "...Sûrement, le Général les a empilés quelque part là-haut.",
						"spanish": "...Seguramente, el General los habrá apilado en algún lugar de arriba.",
						"vietnamese": "...Chắc chắn, Tướng Quân đã chất chúng lên ở đâu đó phía trên.",
						"thai": "...แน่นอนว่าท่านแม่ทัพต้องเก็บสะสมไว้ที่ไหนสักแห่งข้างบนนั้น",
						"hindi": "...निश्चित रूप से, जनरल ने उन्हें ऊपर कहीं ढेर कर रखा होगा।"
					},
					"speaker": "briar"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "briar",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 더욱 깊어졌다. 음산한 기운이 발목을 잡아끌었다.",
						"english": "The forest deepened. An eerie aura dragged at my ankles.",
						"japanese": "森はさらに深くなった。陰鬱な気配が足首を掴んだ。",
						"chinese": "森林更深了。一股阴森的气息缠绕着我的脚踝。",
						"french": "La forêt s'épaississait. Une aura sinistre agrippait mes chevilles.",
						"spanish": "El bosque se hizo más profundo. Un aura inquietante me arrastraba por los tobillos.",
						"vietnamese": "Rừng càng lúc càng sâu. Một luồng khí âm u kéo chân tôi lại.",
						"thai": "ป่าลึกเข้าไปอีก บรรยากาศอึมครึมดึงข้อเท้าเอาไว้",
						"hindi": "जंगल और गहरा हो गया। एक भयानक आभा मेरे टखनों को खींच रही थी।"
					}
				},
				{
					"content": {
						"korean": "점점 으스스해지네. 돌아갈까?",
						"english": "It's getting creepier. Should we turn back?",
						"japanese": "だんだん不気味になってきた。引き返すか？",
						"chinese": "越来越阴森了。我们回去吗？",
						"french": "Ça devient de plus en plus étrange. Devrions-nous faire demi-tour ?",
						"spanish": "Se está volviendo más espeluznante. ¿Deberíamos regresar?",
						"vietnamese": "Càng lúc càng rùng rợn. Chúng ta nên quay lại không?",
						"thai": "มันน่าขนลุกขึ้นเรื่อยๆ กลับดีไหม?",
						"hindi": "यह और डरावना होता जा रहा है। क्या हमें वापस जाना चाहिए?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 저들이 굶주려 죽는 걸 두고 볼 수 없어.",
						"english": "No. I can't let them starve to death.",
						"japanese": "いいえ。彼らが飢え死にするのを放っておくことはできません。",
						"chinese": "不。我不能眼睁睁看着他们饿死。",
						"french": "Non. Je ne peux pas les laisser mourir de faim.",
						"spanish": "No. No puedo dejar que mueran de hambre.",
						"vietnamese": "Không. Tôi không thể để họ chết đói.",
						"thai": "ไม่ ฉันปล่อยให้พวกเขาอดตายไม่ได้",
						"hindi": "नहीं। मैं उन्हें भूखा मरने नहीं दे सकता।"
					},
					"speaker": "briar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 위에서 희미하게… 소리가 들리는 것 같아.",
						"english": "Faintly... I think I hear a sound from up there.",
						"japanese": "上からかすかに…何かの音が聞こえる気がします。",
						"chinese": "隐约…我好像听到上面有声音。",
						"french": "Faiblement… Il me semble entendre un son d'en haut.",
						"spanish": "Débilmente… creo que escucho un sonido de allá arriba.",
						"vietnamese": "Loáng thoáng… tôi nghe thấy tiếng động từ phía trên.",
						"thai": "แผ่วๆ... เหมือนได้ยินเสียงจากข้างบน",
						"hindi": "धुंधला सा... मुझे ऊपर से कोई आवाज़ सुनाई दे रही है।"
					},
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "저건… 장군님이 영역을 넓히는 소리야. 곧 숲 전체를 삼킬 기세야.",
						"english": "That's... General's expanding his territory. He's about to swallow the entire forest.",
						"japanese": "あれは…将軍様が縄張りを広げている音だ。すぐに森全体を飲み込む勢いだよ。",
						"chinese": "那是…将军在扩张领地。他很快就要吞噬整个森林了。",
						"french": "C'est… le Général qui étend son territoire. Il est sur le point d'engloutir toute la forêt.",
						"spanish": "Eso es… el General expandiendo su territorio. Parece que pronto se tragará todo el bosque.",
						"vietnamese": "Đó là… tiếng Tướng quân mở rộng lãnh thổ. Sắp nuốt chửng cả khu rừng rồi.",
						"thai": "นั่นมัน... เสียงท่านนายพลกำลังขยายอาณาเขต ดูท่าจะกลืนกินป่าทั้งหมดในไม่ช้า",
						"hindi": "वो… जनरल अपने इलाके का विस्तार कर रहा है। वो जल्द ही पूरे जंगल को निगलने वाला है।"
					},
					"speaker": "briar",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 모습을 드러냈다. 온몸을 도토리로 감싼 채.",
						"english": "A colossal shadow emerged, covered head to toe in acorns.",
						"japanese": "巨大な影が現れた。全身をドングリで覆いながら。",
						"chinese": "一个巨大的影子出现了，全身裹满了橡子。",
						"french": "Une ombre colossale est apparue, recouverte de glands de la tête aux pieds.",
						"spanish": "Una sombra colosal apareció, cubierta de bellotas de pies a cabeza.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện, toàn thân được bao phủ bởi những hạt sồi.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น ปกคลุมไปด้วยลูกโอ๊กทั้งร่าง",
						"hindi": "एक विशालकाय परछाई प्रकट हुई, जो पूरी तरह से बलूत के फलों से ढकी हुई थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 나의 성역에 발을 들이다니! 너희도 도토리의 맛을 모르는구나!",
						"english": "How dare you step into my sanctuary! You clearly don't know the taste of acorns!",
						"japanese": "よくも私の聖域に足を踏み入れたな！お前たちもドングリの味を知らないようだな！",
						"chinese": "竟敢踏入我的圣域！你们这些家伙也不懂橡子的美味！",
						"french": "Comment osez-vous fouler mon sanctuaire ! Vous ne connaissez clairement pas le goût des glands !",
						"spanish": "¡Cómo osas pisar mi santuario! ¡Claramente no conocéis el sabor de las bellotas!",
						"vietnamese": "Dám đặt chân vào thánh địa của ta! Các ngươi rõ ràng không biết vị ngon của hạt sồi!",
						"thai": "กล้าดียังไงมาเหยียบย่างในเขตศักดิ์สิทธิ์ของข้า! พวกเจ้าไม่รู้จักรสชาติของลูกโอ๊กสินะ!",
						"hindi": "इतनी हिम्मत कि मेरे पवित्र स्थान में कदम रखा! तुम लोग बलूत के फल का स्वाद नहीं जानते!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "도토리가… 장군님?",
						"english": "Acorns... General?",
						"japanese": "ドングリが…将軍様？",
						"chinese": "橡子…将军？",
						"french": "Des glands… Général ?",
						"spanish": "¿Bellotas… General?",
						"vietnamese": "Hạt sồi… Tướng quân?",
						"thai": "ลูกโอ๊ก... ท่านนายพล?",
						"hindi": "बलूत के फल... जनरल?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "맙소사… 저게 장군님이란 말이야?",
						"english": "My goodness… Is that really the General?",
						"japanese": "まさか…あれが将軍様だというのか？",
						"chinese": "天哪…那个就是将军？",
						"french": "Bonté divine… C'est ça le Général ?",
						"spanish": "Dios mío… ¿Ese es el General?",
						"vietnamese": "Trời ơi… đó là Tướng quân sao?",
						"thai": "โอ้พระเจ้า... นั่นคือท่านนายพลเหรอ?",
						"hindi": "हे भगवान… क्या वो ही जनरल है?"
					},
					"speaker": "briar"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "나의 위대한 비축량에 도전하는 어리석은 자들! 이 숲의 모든 도토리는 나의 것이다!",
						"english": "Foolish ones who challenge my grand hoard! All the acorns in this forest are mine!",
						"japanese": "我が偉大な貯蔵に挑む愚か者め！この森のドングリはすべて我がものだ！",
						"chinese": "胆敢挑战我伟大储备的愚蠢之徒！这片森林里所有的橡子都是我的！",
						"french": "Imbéciles qui osez défier mon immense réserve ! Tous les glands de cette forêt sont miens !",
						"spanish": "¡Necios que desafían mi gran reserva! ¡Todas las bellotas de este bosque son mías!",
						"vietnamese": "Những kẻ ngu ngốc dám thách thức kho dự trữ vĩ đại của ta! Tất cả hạt sồi trong khu rừng này là của ta!",
						"thai": "พวกโง่เง่าที่กล้าท้าทายคลังเสบียงอันยิ่งใหญ่ของข้า! ลูกโอ๊กทั้งหมดในป่านี้เป็นของข้า!",
						"hindi": "मूर्खों जो मेरे महान भंडार को चुनौती देते हो! इस जंगल के सभी बलूत के फल मेरे हैं!"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "도토리로 쌓인 거대한 몸체가 모든 것을 집어삼켰다.",
						"english": "The gigantic body made of acorns devoured everything.",
						"japanese": "ドングリでできた巨大な体がすべてを飲み込んだ。",
						"chinese": "由橡子堆积而成的巨大身躯吞噬了一切。",
						"french": "Le corps gigantesque fait de glands a tout dévoré.",
						"spanish": "El gigantesco cuerpo hecho de bellotas devoró todo.",
						"vietnamese": "Thân hình khổng lồ chất đầy hạt sồi đã nuốt chửng mọi thứ.",
						"thai": "ร่างมหึมาที่สร้างจากลูกโอ๊คกลืนกินทุกสิ่ง",
						"hindi": "शाहबलूत से बना विशालकाय शरीर सब कुछ निगल गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크하하! 나의 위대한 도토리 군대 앞에 무릎 꿇어라!",
						"english": "Hahaha! Kneel before my mighty acorn army!",
						"japanese": "クハハ！我が偉大なるドングリ軍の前にひざまずけ！",
						"chinese": "哈哈哈！在我的橡子大军面前跪下吧！",
						"french": "Hahaha ! Agenouillez-vous devant mon imposante armée de glands !",
						"spanish": "¡Jajaja! ¡Arrodíllate ante mi poderoso ejército de bellotas!",
						"vietnamese": "Khặc khặc! Quỳ gối trước đội quân hạt sồi hùng mạnh của ta!",
						"thai": "ฮ่าฮ่าฮ่า! คุกเข่าลงต่อหน้ากองทัพลูกโอ๊คอันยิ่งใหญ่ของข้า!",
						"hindi": "हाहाहा! मेरी शक्तिशाली शाहबलूत सेना के सामने घुटने टेको!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "빌어먹을… 다시 도전해야 해.",
						"english": "Damn it... I have to try again.",
						"japanese": "くそ…もう一度挑戦しなければならない。",
						"chinese": "该死……我必须再试一次。",
						"french": "Maudit... Je dois réessayer.",
						"spanish": "Maldita sea... tengo que intentarlo de nuevo.",
						"vietnamese": "Chết tiệt... mình phải thử lại.",
						"thai": "บ้าจริง... ฉันต้องลองใหม่อีกครั้ง",
						"hindi": "धिक्कार है... मुझे फिर से कोशिश करनी होगी।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "끄아아악! 도토리가… 나의 도토리가…! 이렇게 허무하게…!",
						"english": "Argh! My acorns… my acorns…! So futilely…!",
						"japanese": "ぐあああ！ドングリが…私のドングリが…！こんなにもあっけなく…！",
						"chinese": "呃啊啊啊！橡子…我的橡子…！就这样白白地…！",
						"french": "Argh ! Mes glands… mes glands… ! Si vainement… !",
						"spanish": "¡Argh! ¡Mis bellotas… mis bellotas…! ¡Tan inútilmente…!",
						"vietnamese": "Áaaaa! Hạt sồi… hạt sồi của ta…! Thật vô ích…!",
						"thai": "อ๊ากกกก! ลูกโอ๊กของข้า… ลูกโอ๊กของข้า…! จบลงอย่างว่างเปล่าเช่นนี้…!",
						"hindi": "आर्ग! मेरे बलूत के फल... मेरे बलूत के फल...! इतनी व्यर्थता से...!"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그냥 도토리였잖아…",
						"english": "It was just acorns after all…",
						"japanese": "ただのドングリだったじゃないか…",
						"chinese": "原来只是橡子而已…",
						"french": "Ce n'étaient que des glands après tout…",
						"spanish": "Solo eran bellotas después de todo…",
						"vietnamese": "Cuối cùng cũng chỉ là hạt sồi thôi mà…",
						"thai": "ก็แค่ลูกโอ๊กนี่นา...",
						"hindi": "आखिर वो बस बलूत के फल ही तो थे..."
					}
				},
				{
					"speaker": "briar",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "briar",
					"content": {
						"korean": "숲의 균형을 되찾았어… 하지만 그의 광기는 단순한 식탐이 아니었어.",
						"english": "The forest's balance is restored... but his madness wasn't mere gluttony.",
						"japanese": "森の均衡を取り戻した…しかし、彼の狂気は単なる食欲ではなかった。",
						"chinese": "森林的平衡恢复了……但他的疯狂并非仅仅是贪食。",
						"french": "L'équilibre de la forêt est restauré... mais sa folie n'était pas que de la gloutonnerie.",
						"spanish": "El equilibrio del bosque ha sido restaurado... pero su locura no era mera glotonería.",
						"vietnamese": "Sự cân bằng của khu rừng đã trở lại... nhưng sự điên rồ của hắn không phải chỉ vì thèm ăn.",
						"thai": "ความสมดุลของป่ากลับมาแล้ว... แต่ความบ้าคลั่งของเขาไม่ใช่แค่ความตะกละ",
						"hindi": "जंगल का संतुलन बहाल हो गया... लेकिन उसका पागलपन सिर्फ पेटूपन नहीं था।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "무너진 도토리 더미 속에서, 낡은 사냥 도구 조각이 빛을 발했다.",
						"english": "Amidst the fallen acorn pile, a piece of an old hunting tool gleamed.",
						"japanese": "崩れたドングリの山の中で、古い狩猟道具の破片が光を放った。",
						"chinese": "在倒塌的橡子堆中，一块古老的狩猎工具碎片闪耀着光芒。",
						"french": "Au milieu du tas de glands effondré, un morceau d'un vieil outil de chasse brillait.",
						"spanish": "Entre la pila de bellotas derrumbada, un trozo de una antigua herramienta de caza brillaba.",
						"vietnamese": "Giữa đống hạt sồi đổ nát, một mảnh công cụ săn bắn cũ kỹ phát sáng.",
						"thai": "ท่ามกลางกองลูกโอ๊คที่พังทลาย ชิ้นส่วนของอุปกรณ์ล่าสัตว์เก่าแก่ส่องประกาย",
						"hindi": "गिरे हुए शाहबलूत के ढेर के बीच, एक पुराने शिकार उपकरण का टुकड़ा चमक उठा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "장군님의 정체는 밝혀졌지만, 더 깊은 미스터리가 시작되었다.",
						"english": "The General's identity was revealed, but a deeper mystery began.",
						"japanese": "将軍の正体は明らかになったが、より深い謎が始まった。",
						"chinese": "将军的身份被揭示了，但一个更深的谜团开始了。",
						"french": "L'identité du Général a été révélée, mais un mystère plus profond a commencé.",
						"spanish": "La identidad del General fue revelada, pero un misterio más profundo comenzó.",
						"vietnamese": "Danh tính của Tướng quân đã được tiết lộ, nhưng một bí ẩn sâu sắc hơn đã bắt đầu.",
						"thai": "ตัวตนของท่านนายพลถูกเปิดเผยแล้ว แต่ปริศนาที่ลึกซึ้งกว่านั้นเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "जनरल की पहचान उजागर हो गई, लेकिन एक गहरा रहस्य शुरू हो गया।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계수에 기묘한 일이 생겼다.",
			"모든 도토리가 사라지고, 숲의 동물들은 굶주림에 떨었다.",
			"모두가 '장군님'이라 부르는 정체불명의 존재를 두려워했다.",
			"그러나 감춰진 진실은 — 모두의 상상을 초월했다."
		],
		"english": [
			"A strange thing happened to the World Tree.",
			"All acorns vanished, and forest animals trembled with hunger.",
			"Everyone feared an unknown entity they called 'General'.",
			"But the hidden truth — surpassed everyone's imagination."
		],
		"japanese": [
			"世界樹に奇妙なことが起こった。",
			"全てのドングリが消え、森の動物たちは飢えに震えた。",
			"皆が「将軍様」と呼ぶ正体不明の存在を恐れた。",
			"しかし、隠された真実は — 全ての想像を超えていた。"
		],
		"chinese": [
			"世界树发生了奇怪的事情。",
			"所有的橡子都消失了，森林里的动物们在饥饿中颤抖。",
			"每个人都害怕一个他们称之为“将军”的未知存在。",
			"然而，隐藏的真相——超出了所有人的想象。"
		],
		"french": [
			"Un étrange événement est survenu à l'Arbre-monde.",
			"Tous les glands avaient disparu et les animaux de la forêt tremblaient de faim.",
			"Tous craignaient une entité inconnue qu'ils appelaient le « Général ».",
			"Mais la vérité cachée — dépassait l'imagination de tous."
		],
		"spanish": [
			"Algo extraño le sucedió al Árbol del Mundo.",
			"Todas las bellotas desaparecieron y los animales del bosque temblaron de hambre.",
			"Todos temían a una entidad desconocida a la que llamaban 'General'.",
			"Pero la verdad oculta — superaba la imaginación de todos."
		],
		"vietnamese": [
			"Một chuyện kỳ lạ đã xảy ra với Cây Thế Giới.",
			"Tất cả hạt dẻ biến mất, và các loài động vật trong rừng run rẩy vì đói.",
			"Mọi người đều sợ hãi một thực thể không rõ danh tính mà họ gọi là 'Đại tướng'.",
			"Nhưng sự thật bị che giấu — đã vượt xa trí tưởng tượng của mọi người."
		],
		"thai": [
			"มีเรื่องแปลกประหลาดเกิดขึ้นกับต้นไม้โลก",
			"ลูกโอ๊กทั้งหมดหายไป และสัตว์ป่าก็สั่นเทาด้วยความหิวโหย",
			"ทุกคนกลัวสิ่งมีชีวิตที่ไม่รู้จักซึ่งพวกเขาเรียกว่า 'ท่านนายพล'",
			"แต่ความจริงที่ซ่อนอยู่ — เกินจินตนาการของทุกคน"
		],
		"hindi": [
			"विश्व वृक्ष पर कुछ अजीब हुआ।",
			"सभी बलूत के फल गायब हो गए, और जंगल के जानवर भूख से कांप रहे थे।",
			"सब एक अज्ञात सत्ता से डरते थे जिसे वे 'जनरल' कहते थे।",
			"पर छुपा हुआ सच — सबकी कल्पना से परे था।"
		]
	}
} as const;
