export const scenario_desert_buff_31_05 = {
	"scenario_id": "desert_buff_31_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "pool_AbsurdPolisher_Buff_V1"
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
						"korean": "사막의 가장 깊은 곳, 모든 것이 소름끼치게 완벽한 광택으로 빛나고 있었다.",
						"english": "In the deepest part of the desert, everything shone with an eerily perfect polish.",
						"japanese": "砂漠の最も深い場所、全てが不気味なほど完璧な光沢で輝いていた。",
						"chinese": "沙漠最深处，一切都闪耀着令人毛骨悚然的完美光泽。",
						"french": "Au plus profond du désert, tout brillait d'un éclat parfaitement sinistre.",
						"spanish": "En lo más profundo del desierto, todo brillaba con un pulido inquietantemente perfecto.",
						"vietnamese": "Ở nơi sâu thẳm nhất của sa mạc, mọi thứ đều sáng bóng với một vẻ hoàn hảo đến rợn người.",
						"thai": "ในส่วนที่ลึกที่สุดของทะเลทราย ทุกสิ่งส่องประกายด้วยความเงางามที่สมบูรณ์แบบจนน่าขนลุก",
						"hindi": "रेगिस्तान के सबसे गहरे हिस्से में, सब कुछ एक भयावह रूप से पूर्ण चमक के साथ चमक रहा था।"
					}
				},
				{
					"content": {
						"korean": "…먼지 한 톨 없어. 여기가 사막이라고?",
						"english": "...Not a speck of dust. Is this a desert?",
						"japanese": "…埃ひとつない。ここが砂漠だと？",
						"chinese": "……一粒灰尘都没有。这里是沙漠吗？",
						"french": "...Pas un grain de poussière. C'est ça un désert ?",
						"spanish": "...Ni una mota de polvo. ¿Esto es un desierto?",
						"vietnamese": "...Không một hạt bụi. Đây là sa mạc sao?",
						"thai": "...ไม่มีฝุ่นสักเม็ด นี่คือทะเลทรายเหรอ?",
						"hindi": "...एक कण धूल नहीं। क्या यह रेगिस्तान है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"duration_ms": 600,
					"type": "direction",
					"action": "focus",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "흐음… 이것 봐라, 새로운 먼지 덩어리들이군!",
						"english": "Hmm... Look at this, new dust bunnies!",
						"japanese": "ふむ…これを見ろ、新たな埃の塊どもめ！",
						"chinese": "嗯……看看这些，新的灰尘团块！",
						"french": "Hmm... Regardez ça, de nouvelles boules de poussière !",
						"spanish": "Hmm... ¡Mira esto, nuevas motas de polvo!",
						"vietnamese": "Hừm... Nhìn này, những cục bụi mới!",
						"thai": "หืม... ดูนี่สิ เจ้าก้อนฝุ่นใหม่เอี่ยม!",
						"hindi": "हम्म... इसे देखो, धूल के नए ढेर!"
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "완벽한 광택을 위해… 아주 섬세하게… 구석구석… 닦아주마! 흐하하하하! 내 이름은 버프! 사막을 위한 최종 광택기다!",
						"english": "For a perfect shine... very delicately... every nook and cranny... I'll polish you! Hahahaha! My name is Buff! The ultimate polisher for the desert!",
						"japanese": "完璧な輝きのために…ごく繊細に…隅々まで…磨き上げてやる！フハハハハ！私の名はバフ！砂漠のための最終研磨機だ！",
						"chinese": "为了完美的抛光……非常细致地……每个角落……我都会擦亮你们！哈哈哈！我叫巴夫！是沙漠的终极抛光机！",
						"french": "Pour une brillance parfaite... très délicatement... chaque recoin... je vais vous polir ! Hahahaha ! Mon nom est Buff ! Le polisseur ultime du désert !",
						"spanish": "Para un brillo perfecto... muy delicadamente... cada rincón... ¡te puliré! ¡Jajajaja! ¡Mi nombre es Buff! ¡El pulidor definitivo del desierto!",
						"vietnamese": "Vì một vẻ sáng hoàn hảo... rất tinh tế... từng ngóc ngách... ta sẽ đánh bóng ngươi! Hahahaha! Tên ta là Buff! Kẻ đánh bóng tối thượng của sa mạc!",
						"thai": "เพื่อความเงางามที่สมบูรณ์แบบ... อย่างประณีต... ทุกซอกทุกมุม... ข้าจะขัดเจ้าให้แวววาว! ฮ่าฮ่าฮ่าฮ่า! ข้าชื่อบัฟ! นักขัดเงาสุดยอดแห่งทะเลทราย!",
						"hindi": "एकदम सही चमक के लिए... बहुत सावधानी से... हर कोने-कोने को... मैं तुम्हें चमका दूंगा! हाहाहाहा! मेरा नाम बफ है! रेगिस्तान का परम पॉलिशर!"
					}
				},
				{
					"content": {
						"korean": "말도 안 돼! 저게… 버프라고?",
						"english": "No way! Is that... Buff?",
						"japanese": "まさか！あれが…バフだと？",
						"chinese": "不可能！那是……巴夫？",
						"french": "Pas possible ! C'est... Buff ?",
						"spanish": "¡No puede ser! ¿Ese es... Buff?",
						"vietnamese": "Không thể nào! Đó là... Buff sao?",
						"thai": "ไม่จริง! นั่นมัน... บัฟเหรอ?",
						"hindi": "यह नहीं हो सकता! क्या वह... बफ है?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "amir",
					"content": {
						"korean": "아미르야. 이 미친 광택을… 막아야 해!",
						"english": "Amir. We have to stop this crazy polishing!",
						"japanese": "アミルよ。この狂った研磨を…止めなければ！",
						"chinese": "阿米尔。我们必须阻止这个疯狂的抛光！",
						"french": "Amir. Il faut arrêter ce polissage fou !",
						"spanish": "Amir. ¡Tenemos que detener este pulido loco!",
						"vietnamese": "Amir. Chúng ta phải ngăn chặn sự đánh bóng điên rồ này!",
						"thai": "อามีร์ เราต้องหยุดการขัดเงาบ้าๆ นี่!",
						"hindi": "अमीर। हमें इस पागलपन भरी पॉलिशिंग को रोकना होगा!"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "사막에 완벽함은 저주다. 너무 깨끗하면… 전부 닦여나가 사라진다는 증거지.",
						"english": "Perfection in the desert is a curse. If it's too clean... it's proof that everything will be polished away and disappear.",
						"japanese": "砂漠における完璧さは呪いだ。あまりに清潔だと…すべてが磨き上げられ、消え去る証拠なのだ。",
						"chinese": "沙漠中的完美是一种诅咒。如果太干净……就是一切都会被擦掉消失的证据。",
						"french": "La perfection dans le désert est une malédiction. Si c'est trop propre... c'est la preuve que tout sera effacé et disparaîtra.",
						"spanish": "La perfección en el desierto es una maldición. Si está demasiado limpio... es la prueba de que todo será pulido y desaparecerá.",
						"vietnamese": "Sự hoàn hảo trên sa mạc là một lời nguyền. Nếu quá sạch... đó là bằng chứng mọi thứ sẽ bị xóa sạch và biến mất.",
						"thai": "ความสมบูรณ์แบบในทะเลทรายคือคำสาป หากมันสะอาดเกินไป... นั่นคือหลักฐานว่าทุกสิ่งจะถูกขัดจนหายไป",
						"hindi": "रेगिस्तान में पूर्णता एक अभिशाप है। यदि यह बहुत साफ है... तो यह इस बात का प्रमाण है कि सब कुछ पॉलिश होकर गायब हो जाएगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "사라진 오아시스들도… 다 버프 짓이라고?",
						"english": "So the lost oases... were all Buff's doing?",
						"japanese": "消えたオアシスも…全部バフの仕業だと？",
						"chinese": "那些消失的绿洲……都是巴夫干的？",
						"french": "Alors les oasis disparues... c'était l'œuvre de Buff ?",
						"spanish": "Entonces, ¿los oasis perdidos... también fueron obra de Buff?",
						"vietnamese": "Vậy những ốc đảo đã mất... cũng là do Buff gây ra sao?",
						"thai": "โอเอซิสที่หายไป... ก็เป็นฝีมือของบัฟเหรอ?",
						"hindi": "तो क्या गायब हुए नखलिस्तान भी... बफ की करतूत थे?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이 거대한 사막이 원래는… 검을 연마하는 곳이었다고 해.",
						"english": "They say this vast desert was originally... a place for sharpening swords.",
						"japanese": "この広大な砂漠は元々…剣を研ぐ場所だったそうだ。",
						"chinese": "据说这片巨大的沙漠原本是……磨剑的地方。",
						"french": "On dit que ce vaste désert était à l'origine... un lieu d'affûtage d'épées.",
						"spanish": "Dicen que este vasto desierto era originalmente... un lugar para afilar espadas.",
						"vietnamese": "Họ nói rằng sa mạc rộng lớn này ban đầu là... nơi mài kiếm.",
						"thai": "ว่ากันว่าทะเลทรายอันกว้างใหญ่นี้แต่เดิมเป็น... สถานที่ลับคมดาบ",
						"hindi": "वे कहते हैं कि यह विशाल रेगिस्तान मूल रूप से... तलवारें तेज करने की जगह थी।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "고대 블레이드마스터들의 연마장이었지. 모든 게 '완벽한 검'이 되기 위한 제물이었어.",
						"english": "It was the training ground of ancient Blademasters. Everything was a sacrifice to become a 'perfect sword'.",
						"japanese": "古代のブレードマスターたちの研磨場だった。すべてが『完璧な剣』となるための生贄だったのだ。",
						"chinese": "那是古代刀剑大师的磨练场。一切都是为了成为‘完美的剑’而献祭的。",
						"french": "C'était le terrain d'entraînement des anciens Maîtres Lames. Tout était un sacrifice pour devenir une 'épée parfaite'.",
						"spanish": "Era el campo de entrenamiento de los antiguos Maestros de la Hoja. Todo era un sacrificio para convertirse en una 'espada perfecta'.",
						"vietnamese": "Đó là trường rèn luyện của các Kiếm Sư cổ đại. Mọi thứ đều là vật hiến tế để trở thành một 'thanh kiếm hoàn hảo'.",
						"thai": "มันคือลานฝึกฝนของปรมาจารย์ดาบโบราณ ทุกสิ่งล้วนเป็นเครื่องบูชาเพื่อเป็น 'ดาบที่สมบูรณ์แบบ'",
						"hindi": "यह प्राचीन ब्लेडमास्टर्स का प्रशिक्षण मैदान था। सब कुछ 'एकदम सही तलवार' बनने के लिए एक बलिदान था।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그럼 우리는… 제물이라는 거야?",
						"english": "So we... are sacrifices?",
						"japanese": "それじゃあ私たちは…生贄だっていうのか？",
						"chinese": "那我们……是祭品吗？",
						"french": "Alors nous... sommes des sacrifices ?",
						"spanish": "¿Entonces nosotros... somos sacrificios?",
						"vietnamese": "Vậy chúng ta... là vật hiến tế sao?",
						"thai": "งั้นพวกเรา... คือเครื่องบูชาเหรอ?",
						"hindi": "तो हम... बलिदान हैं?"
					}
				},
				{
					"content": {
						"korean": "버프는 그 사명을 비틀어 모든 '결함'을 지우려 해. 살아있는 모든 것을.",
						"english": "Buff twists its mission, seeking to erase all 'flaws.' All living things.",
						"japanese": "バフはその使命を捻じ曲げ、あらゆる「欠陥」を消し去ろうとしている。生きとし生けるもの全てを。",
						"chinese": "增益扭曲了它的使命，试图抹去所有“缺陷”。所有活着的生命。",
						"french": "Buff déforme sa mission, cherchant à effacer toutes les 'imperfections'. Toutes les choses vivantes.",
						"spanish": "Buff distorsiona su misión, intentando borrar todos los 'defectos'. Todo ser vivo.",
						"vietnamese": "Buff bóp méo sứ mệnh của nó, cố gắng xóa bỏ mọi 'khuyết điểm'. Mọi sinh vật sống.",
						"thai": "บัฟบิดเบือนภารกิจของมัน พยายามลบ 'ข้อบกพร่อง' ทั้งหมด สิ่งมีชีวิตทุกชนิด",
						"hindi": "बफ़ अपने मिशन को तोड़-मरोड़ कर पेश करता है, सभी 'कमियों' को मिटाने की कोशिश करता है। सभी जीवित चीजों को।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "amir",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "버프의 광택에 비친 네 모습이 일그러지고 있어. 그게 곧 네 운명이 될 거야.",
						"english": "Your reflection in Buff's gleam is distorting. That will soon be your fate.",
						"japanese": "バフの輝きに映るお前の姿が歪んでいる。それがすぐにお前の運命となるだろう。",
						"chinese": "你在增益的光泽中扭曲，那将很快成为你的命运。",
						"french": "Ton reflet dans l'éclat de Buff se déforme. Ce sera bientôt ton destin.",
						"spanish": "Tu reflejo en el brillo de Buff se está distorsionando. Ese será pronto tu destino.",
						"vietnamese": "Hình ảnh của ngươi trong ánh sáng của Buff đang méo mó. Đó sẽ sớm là số phận của ngươi.",
						"thai": "ภาพสะท้อนของเจ้าในแสงเงาของบัฟกำลังบิดเบี้ยว นั่นจะกลายเป็นชะตากรรมของเจ้าในไม่ช้า",
						"hindi": "बफ़ की चमक में तुम्हारी छवि विकृत हो रही है। वही जल्द तुम्हारा भाग्य होगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "이젠… 우리도 곧 사라질 운명이라고?",
						"english": "So now... are we also destined to disappear soon?",
						"japanese": "もう…私たちもすぐ消える運命なの？",
						"chinese": "那么现在…我们也要很快消失了吗？",
						"french": "Alors maintenant... sommes-nous aussi destinés à disparaître bientôt ?",
						"spanish": "¿Entonces ahora... nosotros también estamos destinados a desaparecer pronto?",
						"vietnamese": "Vậy bây giờ... chúng ta cũng sắp biến mất sao?",
						"thai": "ตอนนี้... เราก็มีชะตากรรมที่จะหายไปในไม่ช้าเหรอ?",
						"hindi": "तो अब... क्या हम भी जल्द ही गायब होने वाले हैं?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "아니, 방법이 있어. 버프는 '불완전함'을 받아들이지 못해. 완벽하지 않은 것을 보여줘야 해.",
						"english": "No, there's a way. Buff cannot accept 'imperfection'. We must show it what is not perfect.",
						"japanese": "いや、方法はある。バフは「不完全さ」を受け入れられない。完璧ではないものを見せなければならない。",
						"chinese": "不，有办法。增益无法接受“不完美”。我们必须向它展示不完美的东西。",
						"french": "Non, il y a un moyen. Buff ne peut pas accepter l''imperfection'. Nous devons lui montrer ce qui n'est pas parfait.",
						"spanish": "No, hay un camino. Buff no puede aceptar la 'imperfección'. Debemos mostrarle lo que no es perfecto.",
						"vietnamese": "Không, có cách. Buff không thể chấp nhận 'sự không hoàn hảo'. Chúng ta phải cho nó thấy những gì không hoàn hảo.",
						"thai": "ไม่ มีทาง บัฟไม่ยอมรับ 'ความไม่สมบูรณ์' เราต้องแสดงให้มันเห็นสิ่งที่ไม่สมบูรณ์",
						"hindi": "नहीं, एक रास्ता है। बफ़ 'अपूर्णता' को स्वीकार नहीं कर सकता। हमें उसे दिखाना होगा जो पूर्ण नहीं है।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "버프의 광택이 모든 것을 집어삼켰다. 사막은 다시, 완벽한 침묵 속으로.",
						"english": "The gleam of the buff devoured all. The desert returned, once more, to perfect silence.",
						"japanese": "バフの輝きが全てを飲み込んだ。砂漠は再び、完璧な沈黙の中へ。",
						"chinese": "增益的光芒吞噬了一切。沙漠再次陷入了完美的沉寂。",
						"french": "L'éclat du buff a tout dévoré. Le désert est revenu, une fois de plus, à un silence parfait.",
						"spanish": "El brillo del pulido lo devoró todo. El desierto regresó, una vez más, a un silencio perfecto.",
						"vietnamese": "Ánh sáng của hiệu ứng đã nuốt chửng tất cả. Sa mạc lại chìm vào sự im lặng hoàn hảo.",
						"thai": "แสงแห่งบัฟกลืนกินทุกสิ่ง ทะเลทรายกลับคืนสู่ความเงียบงันที่สมบูรณ์แบบอีกครั้ง",
						"hindi": "बफ की चमक ने सब कुछ निगल लिया। रेगिस्तान फिर से, पूर्ण चुप्पी में लौट आया।"
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "하하하! 완벽한 광택은 불멸이다! 너희 같은 먼지는… 다시 닦여날 뿐!",
						"english": "Hahahaha! Perfect gleam is immortal! Dust like you... will merely be wiped away again!",
						"japanese": "ハハハ！完璧な輝きは不滅だ！お前たちのような塵は…また拭き取られるだけだ！",
						"chinese": "哈哈哈！完美的抛光是不朽的！你们这些尘埃…不过是再次被擦拭掉而已！",
						"french": "Hahahaha ! L'éclat parfait est immortel ! La poussière comme vous... sera simplement essuyée à nouveau !",
						"spanish": "¡Jajajaja! ¡El brillo perfecto es inmortal! ¡El polvo como vosotros... simplemente será limpiado de nuevo!",
						"vietnamese": "Hahaha! Ánh sáng hoàn hảo là bất diệt! Bụi bẩn như các ngươi… sẽ chỉ bị lau sạch lần nữa thôi!",
						"thai": "ฮ่าฮ่าฮ่า! ความเงางามที่สมบูรณ์แบบนั้นเป็นอมตะ! ฝุ่นอย่างพวกแก... ก็แค่ถูกเช็ดออกไปอีกครั้งเท่านั้น!",
						"hindi": "हाहाहा! पूर्ण चमक अमर है! तुम जैसे धूल... बस फिर से मिटा दिए जाओगे!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어! 다시 일어날 거야!",
						"english": "It's not... over yet! I'll rise again!",
						"japanese": "まだ…終わってない！また立ち上がる！",
						"chinese": "还没…结束！我会再次站起来的！",
						"french": "Ce n'est pas... encore fini ! Je me relèverai !",
						"spanish": "¡Aún no... ha terminado! ¡Me levantaré de nuevo!",
						"vietnamese": "Chưa… kết thúc đâu! Ta sẽ lại đứng dậy!",
						"thai": "ยัง...ไม่จบ! ฉันจะลุกขึ้นสู้อีกครั้ง!",
						"hindi": "अभी… खत्म नहीं हुआ! मैं फिर से उठूँगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 광택이 서서히 희미해졌다. 버프의 광기도 함께 잠들었다.",
						"english": "The immense gleam slowly faded. Buff's madness also fell asleep.",
						"japanese": "巨大な輝きが徐々に薄れた。バフの狂気も共に眠りについた。",
						"chinese": "巨大的光泽渐渐褪去。增益的疯狂也随之沉睡。",
						"french": "L'immense éclat s'estompa lentement. La folie de Buff s'est également endormie.",
						"spanish": "El inmenso brillo se desvaneció lentamente. La locura de Buff también se durmió.",
						"vietnamese": "Ánh sáng khổng lồ dần mờ đi. Sự điên rồ của Buff cũng chìm vào giấc ngủ.",
						"thai": "แสงเงาอันยิ่งใหญ่ค่อยๆ จางหายไป ความบ้าคลั่งของบัฟก็หลับใหลไปด้วย",
						"hindi": "विशाल चमक धीरे-धीरे फीकी पड़ गई। बफ़ का पागलपन भी सो गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "크윽… 이… 불완전함… 나를… 더럽히다니… 하지만… 편안해….",
						"english": "Ugh... this... imperfection... to defile me... but... I feel... at peace...",
						"japanese": "くぅ… この… 不完全さ… 私を… 汚すとは… しかし… 楽だ…。",
						"chinese": "呃… 这种… 不完美… 竟然玷污了我… 但是… 感觉… 平静…",
						"french": "Ugh... cette... imperfection... me souiller... mais... je me sens... en paix...",
						"spanish": "Ugh... esta... imperfección... me profana... pero... me siento... en paz...",
						"vietnamese": "Ư... sự... không hoàn hảo này... dám làm ô uế ta... nhưng... thật... bình yên...",
						"thai": "อึก... ความ... ไม่สมบูรณ์แบบนี้... มาทำให้ข้า... สกปรก... แต่... รู้สึก... สงบ...",
						"hindi": "उफ़... यह... अपूर्णता... मुझे... अपवित्र करना... लेकिन... मैं... शांत महसूस कर रहा हूँ..."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "끝났어… 정말로?",
						"english": "It's over... really?",
						"japanese": "終わった… 本当に？",
						"chinese": "结束了… 真的吗？",
						"french": "C'est fini... vraiment ?",
						"spanish": "¿Se acabó... de verdad?",
						"vietnamese": "Kết thúc rồi… thật sao?",
						"thai": "จบแล้ว... จริงหรือ?",
						"hindi": "यह खत्म हो गया… सच में?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사막은 새로운 균열을 얻었다. 완벽함은 사라졌지만, 그 공허함은 새로운 이야기를 품고 있었다. 다음 여정은….",
						"english": "The desert gained a new rift. Perfection vanished, but its void held new stories. The next journey...",
						"japanese": "砂漠は新たな亀裂を得た。完璧さは消え去ったが、その虚無は新たな物語を宿していた。次の旅は…。",
						"chinese": "沙漠获得了一道新裂缝。完美消逝，但那空虚中蕴含着新的故事。下一段旅程是……",
						"french": "Le désert avait une nouvelle faille. La perfection s'était évanouie, mais son vide recelait de nouvelles histoires. Le prochain voyage...",
						"spanish": "El desierto obtuvo una nueva grieta. La perfección se desvaneció, pero su vacío albergaba nuevas historias. La próxima travesía...",
						"vietnamese": "Sa mạc có một vết nứt mới. Sự hoàn hảo biến mất, nhưng khoảng trống đó chứa đựng những câu chuyện mới. Chuyến hành trình tiếp theo là...",
						"thai": "ทะเลทรายได้รับรอยแยกใหม่ ความสมบูรณ์แบบหายไป แต่ความว่างเปล่าของมันกลับมีเรื่องราวใหม่ๆ การเดินทางครั้งต่อไปคือ...",
						"hindi": "रेगिस्तान को एक नई दरार मिली। पूर्णता गायब हो गई, लेकिन उसकी शून्यता में नई कहानियाँ थीं। अगली यात्रा..."
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "버프의 눈동자, 아니, 그 광택은 모든 것을 집어삼킬 듯 빛났다.",
						"english": "Buff's eyes, no, its gleam, shone as if to swallow everything.",
						"japanese": "バフの瞳、いや、その輝きは、全てを飲み込むかのように光り輝いた。",
						"chinese": "增益的眼睛，不，是它的光泽，闪耀着仿佛要吞噬一切。",
						"french": "Les yeux de Buff, non, son éclat, brillaient comme pour tout engloutir.",
						"spanish": "Los ojos de Buff, no, su brillo, resplandecían como para devorarlo todo.",
						"vietnamese": "Đôi mắt của Buff, không, ánh sáng của nó, rực rỡ như thể muốn nuốt chửng mọi thứ.",
						"thai": "ดวงตาของบัฟ ไม่สิ แสงเงาของมัน ส่องประกายราวกับจะกลืนกินทุกสิ่ง",
						"hindi": "बफ़ की आँखें, नहीं, उसकी चमक, सब कुछ निगलने वाली थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "더러운 것들… 내 완벽한 사막에 감히 발을 들이나? 모두 닦아주마! 흐하하하!",
						"english": "Filthy things... how dare you step into my perfect desert? I'll wipe you all clean! Hahahahaha!",
						"japanese": "汚らわしいものめ… よくも私の完璧な砂漠に足を踏み入れたな？ 全て拭き取ってやる！ フハハハハ！",
						"chinese": "肮脏的东西… 竟敢踏入我完美的沙漠？ 我会把你们都擦干净！ 哈哈哈！",
						"french": "Saletés... comment osez-vous fouler mon désert parfait ? Je vais tous vous nettoyer ! Hahahahaha !",
						"spanish": "¡Cosas sucias... cómo osáis pisar mi desierto perfecto? ¡Los limpiaré a todos! ¡Jajajajaja!",
						"vietnamese": "Đồ bẩn thỉu... làm sao ngươi dám đặt chân vào sa mạc hoàn hảo của ta? Ta sẽ lau sạch hết các ngươi! Hahahahaha!",
						"thai": "สิ่งสกปรก... กล้าดียังไงมาเหยียบทะเลทรายอันสมบูรณ์แบบของข้า? ข้าจะเช็ดล้างพวกเจ้าให้หมด! ฮ่าฮ่าฮ่าฮ่า!",
						"hindi": "गंदी चीजें... तुम्हारी हिम्मत कैसे हुई मेरे पूर्ण रेगिस्तान में कदम रखने की? मैं तुम सबको साफ कर दूंगा! हाहाहाहा!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 네 광기 때문에 모든 게 죽었어!",
						"english": "Shut up! Everything died because of your madness!",
						"japanese": "黙れ！ お前の狂気のせいで全てが死んだんだ！",
						"chinese": "闭嘴！ 一切都因为你的疯狂而消亡了！",
						"french": "Tais-toi ! Tout est mort à cause de ta folie !",
						"spanish": "¡Cállate! ¡Todo murió por tu locura!",
						"vietnamese": "Im đi! Mọi thứ đã chết vì sự điên rồ của ngươi!",
						"thai": "หุบปาก! ทุกสิ่งตายไปเพราะความบ้าคลั่งของเจ้า!",
						"hindi": "चुप रहो! तुम्हारी दीवानगी की वजह से सब कुछ मर गया!"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "기억해! 완벽함은 허상이다!",
						"english": "Remember! Perfection is an illusion!",
						"japanese": "覚えておけ！ 完璧さは虚像だ！",
						"chinese": "记住！ 完美是一种幻象！",
						"french": "Souviens-toi ! La perfection est une illusion !",
						"spanish": "¡Recuerda! ¡La perfección es una ilusión!",
						"vietnamese": "Hãy nhớ! Sự hoàn hảo là một ảo ảnh!",
						"thai": "จำไว้! ความสมบูรณ์แบบคือภาพลวงตา!",
						"hindi": "याद रखना! पूर्णता एक भ्रम है!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막의 심장부에 도달한 자들이여, 그대들은 무엇을 보았는가?",
			"완벽함이란 이름의 광기가 모든 것을 닦아내고 있었다.",
			"버프, 본래의 사명을 잊은 채 잔혹한 광택을 뿜어내는 최종 광택기.",
			"이제, 사막 전체가 그 날카로운 심판대 위에 올랐다."
		],
		"english": [
			"Those who reached the heart of the desert, what did you behold?",
			"A madness named Perfection was wiping everything clean.",
			"Buff, the ultimate polisher, emitting a cruel sheen, having forgotten its original purpose.",
			"Now, the entire desert stood upon its sharp judgment seat."
		],
		"japanese": [
			"砂漠の心臓部に到達せし者たちよ、汝ら何を見たか？",
			"完璧という名の狂気が、全てを拭い去っていた。",
			"バフ、本来の使命を忘れ、残酷な輝きを放つ究極の研磨機。",
			"今、砂漠全体がその鋭い審判台に上った。"
		],
		"chinese": [
			"抵达沙漠之心的人们啊，你们看到了什么？",
			"名为“完美”的疯狂正在抹去一切。",
			"抛光，那终极抛光机，遗忘其本职使命，散发着残酷的光泽。",
			"如今，整个沙漠都被置于那锐利的审判台之上。"
		],
		"french": [
			"Vous qui avez atteint le cœur du désert, qu'avez-vous vu ?",
			"Une folie nommée Perfection balayait tout.",
			"Buff, le polisseur ultime, émettant un éclat cruel, ayant oublié son but originel.",
			"Maintenant, tout le désert était sur son siège de jugement aiguisé."
		],
		"spanish": [
			"Aquellos que llegaron al corazón del desierto, ¿qué vieron?",
			"Una locura llamada Perfección estaba borrando todo.",
			"Buff, el pulidor supremo, emitiendo un brillo cruel, habiendo olvidado su propósito original.",
			"Ahora, todo el desierto se encontraba sobre su afilado trono de juicio."
		],
		"vietnamese": [
			"Hỡi những kẻ đã đến trái tim sa mạc, các ngươi đã thấy gì?",
			"Một sự điên rồ mang tên Hoàn Hảo đang xóa sạch mọi thứ.",
			"Buff, cỗ máy đánh bóng tối thượng, phát ra ánh sáng tàn khốc, đã quên đi sứ mệnh ban đầu của mình.",
			"Giờ đây, toàn bộ sa mạc đã đặt mình lên chiếc ghế phán xét sắc bén ấy."
		],
		"thai": [
			"ผู้ที่มาถึงใจกลางทะเลทราย ท่านได้เห็นอะไรบ้าง?",
			"ความบ้าคลั่งที่ชื่อว่าความสมบูรณ์แบบกำลังกวาดล้างทุกสิ่ง",
			"บัฟ เครื่องขัดเงาสุดท้ายที่เปล่งประกายโหดร้าย ลืมภารกิจเดิมไปแล้ว",
			"บัดนี้ ทะเลทรายทั้งผืนได้ขึ้นสู่บัลลังก์แห่งการตัดสินอันแหลมคมนั้นแล้ว"
		],
		"hindi": [
			"हे रेगिस्तान के हृदय तक पहुंचने वालो, तुमने क्या देखा?",
			"पूर्णता नामक एक पागलपन सब कुछ मिटा रहा था।",
			"बफ, अंतिम पॉलिशर, एक क्रूर चमक छोड़ रहा था, अपने मूल उद्देश्य को भूल चुका था।",
			"अब, पूरा रेगिस्तान उसके तीखे न्याय सिंहासन पर आ गया था।"
		]
	},
	"epilogue": {
		"korean": [
			"사막의 잔혹한 광택은 사라졌지만, 그 흔적은 깊게 남아있었다.",
			"버프의 광기가 사라진 자리에는, 새로운 모래바람이 불어왔다.",
			"오랜 세월 '결함'으로 여겨졌던 것들이 비로소 제자리를 찾기 시작했다.",
			"구원인가, 침해인가. 그 경계는 여전히 모호했다.",
			"모든 것이 끝났지만, 사막은 아직 완전히 이해되지 않은 거대한 책과 같았다."
		],
		"english": [
			"The desert's cruel sheen vanished, but its traces remained deep.",
			"Where Buff's madness vanished, a new sandstorm blew in.",
			"Things long considered 'flaws' finally began to find their rightful place.",
			"Salvation, or infringement? The boundary remained ambiguous.",
			"All had ended, yet the desert was like a vast, not fully understood book."
		],
		"japanese": [
			"砂漠の残酷な輝きは消え去ったが、その痕跡は深く残っていた。",
			"バフの狂気が消え去った場所には、新たな砂嵐が吹き荒れた。",
			"長い間「欠陥」と見なされてきたものが、ようやく本来の場所を見つけ始めた。",
			"救済か、それとも侵害か。その境界は依然として曖昧だった。",
			"全てが終わったが、砂漠はまだ完全に理解されていない巨大な書物のようだった。"
		],
		"chinese": [
			"沙漠那残酷的光泽消失了，但其痕迹却深深地留存。",
			"在抛光机的疯狂消散之处，新的沙尘暴吹拂而至。",
			"那些长久以来被视为“缺陷”的事物，终于开始找到它们的位置。",
			"救赎，还是侵犯？那界限依旧模糊。",
			"一切都已结束，但沙漠仍像一本尚未被完全理解的巨著。"
		],
		"french": [
			"L'éclat cruel du désert disparut, mais ses traces restèrent profondes.",
			"Là où la folie de Buff disparut, une nouvelle tempête de sable souffla.",
			"Ce qui fut longtemps considéré comme des \"défauts\" commença enfin à trouver sa juste place.",
			"Salut ou transgression ? La frontière restait ambiguë.",
			"Tout était fini, pourtant le désert était comme un vaste livre encore non entièrement compris."
		],
		"spanish": [
			"El cruel brillo del desierto se desvaneció, pero sus huellas permanecieron profundas.",
			"Donde la locura de Buff desapareció, una nueva tormenta de arena sopló.",
			"Aquello que durante mucho tiempo fue considerado \"defectos\" finalmente comenzó a encontrar su lugar.",
			"¿Salvación o transgresión? El límite seguía siendo ambiguo.",
			"Todo había terminado, sin embargo, el desierto era como un vasto libro aún no completamente comprendido."
		],
		"vietnamese": [
			"Ánh sáng tàn khốc của sa mạc đã biến mất, nhưng dấu vết của nó vẫn còn sâu đậm.",
			"Nơi sự điên rồ của Buff tan biến, một cơn bão cát mới ập đến.",
			"Những thứ từng bị coi là 'khiếm khuyết' cuối cùng cũng bắt đầu tìm thấy vị trí xứng đáng của mình.",
			"Cứu rỗi hay xâm phạm? Ranh giới vẫn còn mơ hồ.",
			"Mọi thứ đã kết thúc, nhưng sa mạc vẫn như một cuốn sách khổng lồ chưa được hiểu hết."
		],
		"thai": [
			"ความเงางามอันโหดร้ายของทะเลทรายได้หายไปแล้ว แต่ร่องรอยของมันยังคงอยู่ลึกซึ้ง",
			"ณ ที่ที่ความบ้าคลั่งของบัฟหายไป พายุทรายลูกใหม่พัดเข้ามา",
			"สิ่งที่เคยถูกมองว่าเป็น 'ข้อบกพร่อง' มาเป็นเวลานาน ในที่สุดก็เริ่มเข้าที่เข้าทางแล้ว",
			"ความรอดหรือการรุกล้ำ? เขตแดนนั้นยังคงคลุมเครืออยู่",
			"ทุกสิ่งสิ้นสุดลงแล้ว แต่ทะเลทรายยังคงเหมือนหนังสือเล่มใหญ่ที่ยังไม่ได้รับการทำความเข้าใจอย่างถ่องแท้"
		],
		"hindi": [
			"रेगिस्तान की क्रूर चमक गायब हो गई, लेकिन उसके निशान गहरे रह गए।",
			"जहां बफ का पागलपन गायब हो गया, वहां एक नया रेतीला तूफान आ गया।",
			"जिन चीजों को लंबे समय से 'दोष' माना जाता था, वे आखिरकार अपनी सही जगह खोजने लगीं।",
			"मुक्ति, या उल्लंघन? सीमा अभी भी अस्पष्ट थी।",
			"सब कुछ समाप्त हो गया था, फिर भी रेगिस्तान एक विशाल, पूरी तरह से न समझी गई किताब जैसा था।"
		]
	}
} as const;
