export const scenario_hell_arkhain_2_01 = {
	"scenario_id": "hell_arkhain_2_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"vex": {
			"id": "mon_aa76550e-0b43-4273-a2f8-2463bdc9b848",
			"name": {
				"korean": "벡스",
				"english": "Vex",
				"japanese": "ベックス",
				"chinese": "维克斯",
				"french": "Vex",
				"spanish": "Vex",
				"vietnamese": "Vex",
				"thai": "เว็กซ์",
				"hindi": "वेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6c55d5a5-0393-451b-d41f-fce1a4ee1700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2ea1ea45-9ca6-43b6-2c73-ed5ae7cdaf00/public"
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
						"korean": "지옥의 가장자리에 다다랐다. 불타는 잔해가 사방을 뒤덮었다.",
						"english": "Reached the edge of hell. Burning debris covered everything.",
						"japanese": "地獄の果てにたどり着いた。燃え盛る残骸が辺り一面を覆っていた。",
						"chinese": "抵达地狱的边缘。燃烧的残骸覆盖了四周。",
						"french": "Atteint le bord de l'enfer. Des débris brûlants recouvraient tout.",
						"spanish": "Llegué al borde del infierno. Escombros ardientes cubrían todo.",
						"vietnamese": "Đã đến rìa địa ngục. Mảnh vỡ cháy rụi bao phủ khắp nơi.",
						"thai": "มาถึงขอบนรก. ซากปรักหักพังที่ลุกไหม้ปกคลุมไปทั่ว.",
						"hindi": "नरक के किनारे पहुँच गया। जलते हुए मलबे ने सब कुछ ढक दिया था।"
					}
				},
				{
					"content": {
						"korean": "...어디로 가야 하지?",
						"english": "...Where should I go?",
						"japanese": "…どこへ行けばいい？",
						"chinese": "……我该去哪里？",
						"french": "...Où dois-je aller ?",
						"spanish": "... ¿A dónde debo ir?",
						"vietnamese": "...Tôi nên đi đâu?",
						"thai": "...ฉันควรไปทางไหน?",
						"hindi": "...मुझे कहाँ जाना चाहिए?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "vex",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "vex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "길을 잃었는가? 내가 너의 길을 보여주겠다.",
						"english": "Are you lost? I will show you the way.",
						"japanese": "道に迷ったか？ 私がお前の道を示そう。",
						"chinese": "你迷路了吗？我会给你指路。",
						"french": "Es-tu perdu ? Je te montrerai le chemin.",
						"spanish": "¿Estás perdido? Yo te mostraré el camino.",
						"vietnamese": "Ngươi lạc lối ư? Ta sẽ chỉ cho ngươi con đường.",
						"thai": "เจ้าหลงทางหรือเปล่า? ข้าจะแสดงทางให้เจ้า.",
						"hindi": "क्या तुम भटक गए हो? मैं तुम्हें रास्ता दिखाऊँगा।"
					}
				},
				{
					"content": {
						"korean": "...누구냐?",
						"english": "...Who are you?",
						"japanese": "…誰だ？",
						"chinese": "……你是谁？",
						"french": "...Qui es-tu ?",
						"spanish": "... ¿Quién eres?",
						"vietnamese": "...Ngươi là ai?",
						"thai": "...เจ้าเป็นใคร?",
						"hindi": "...तुम कौन हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 벡스. 그리고 이건, 너를 이끌어줄 반지다.",
						"english": "I am Vex. And this, is the ring that will guide you.",
						"japanese": "私はヴェックス。そしてこれは、お前を導く指輪だ。",
						"chinese": "我是维克斯。而这，是会指引你的戒指。",
						"french": "Je suis Vex. Et ceci est l'anneau qui te guidera.",
						"spanish": "Soy Vex. Y este es el anillo que te guiará.",
						"vietnamese": "Ta là Vex. Và đây là chiếc nhẫn sẽ dẫn lối cho ngươi.",
						"thai": "ข้าคือเว็กซ์. และนี่คือแหวนที่จะนำทางเจ้า.",
						"hindi": "मैं वेक्स हूँ। और यह, वह अंगूठी है जो तुम्हें रास्ता दिखाएगी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "vex"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "반지…?",
						"english": "A ring...?",
						"japanese": "指輪…？",
						"chinese": "戒指……？",
						"french": "Un anneau... ?",
						"spanish": "¿Un anillo...?",
						"vietnamese": "Một chiếc nhẫn...?",
						"thai": "แหวน...?",
						"hindi": "एक अंगूठी...?"
					}
				},
				{
					"content": {
						"korean": "강대한 힘이 깃들어 있지. 올바르게 사용하면, 모든 위험을 넘을 수 있어.",
						"english": "A mighty power dwells within. Use it wisely, and you can overcome all dangers.",
						"japanese": "強大な力が宿っている。正しく使えば、どんな危険も乗り越えられるだろう。",
						"chinese": "蕴藏着强大的力量。若能正确运用，便可战胜一切危险。",
						"french": "Une puissance colossale y réside. Utilisez-la sagement, et vous pourrez surmonter tous les dangers.",
						"spanish": "Un poder inmenso reside aquí. Úsalo con sabiduría y podrás superar todo peligro.",
						"vietnamese": "Một sức mạnh vĩ đại ẩn chứa. Dùng đúng cách, ngươi có thể vượt qua mọi hiểm nguy.",
						"thai": "พลังอันยิ่งใหญ่สถิตอยู่ หากใช้ให้ถูกทาง เจ้าจะก้าวข้ามอันตรายทั้งปวงได้",
						"hindi": "एक महान शक्ति इसमें निहित है। यदि सही ढंग से उपयोग किया जाए, तो तुम सभी खतरों से पार पा सकते हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "vex"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "갈림길에 섰다. 한쪽은 벼랑, 다른 한쪽은 미지의 어둠이었다.",
						"english": "At a crossroads. One path, a cliff; the other, unknown darkness.",
						"japanese": "分かれ道に立った。片方は崖、もう片方は未知の闇だった。",
						"chinese": "身处岔路。一边是悬崖，一边是未知的黑暗。",
						"french": "Face à un carrefour. Un chemin menait à une falaise, l'autre à une obscurité inconnue.",
						"spanish": "En una encrucijada. Un lado, un acantilado; el otro, una oscuridad desconocida.",
						"vietnamese": "Đứng trước ngã ba đường. Một bên là vách đá, bên kia là bóng tối vô định.",
						"thai": "ถึงทางแยก ทางหนึ่งคือหน้าผา อีกทางคือความมืดมิดที่ไม่อาจหยั่งรู้",
						"hindi": "एक चौराहे पर खड़ा था। एक तरफ एक चट्टान, दूसरी तरफ अज्ञात अंधकार।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "vex",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "vex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "막다른 길은 없어. 반지를 쥐면, 답이 보일 거다.",
						"english": "There's no dead end. Grasp the ring, and the answer will appear.",
						"japanese": "行き止まりはない。指輪を握れば、答えが見えるだろう。",
						"chinese": "没有绝路。握住戒指，答案便会显现。",
						"french": "Il n'y a pas d'impasse. Saisis l'anneau, et la réponse te sera révélée.",
						"spanish": "No hay callejones sin salida. Agarra el anillo y la respuesta aparecerá.",
						"vietnamese": "Không có đường cùng. Nắm chặt chiếc nhẫn, và câu trả lời sẽ hiện ra.",
						"thai": "ไม่มีทางตัน หากกำแหวนไว้ คำตอบจะปรากฏ",
						"hindi": "कोई गतिरोध नहीं है। अंगूठी पकड़ो, और उत्तर दिखाई देगा।"
					}
				},
				{
					"content": {
						"korean": "또 반지 얘긴가? 뭔가 찜찜해.",
						"english": "The ring again? Something feels off.",
						"japanese": "また指輪の話か？何だか胡散臭いな。",
						"chinese": "又是戒指？总觉得有点不安。",
						"french": "Encore l'anneau ? Ça me laisse un drôle de sentiment.",
						"spanish": "¿Otra vez el anillo? Algo no me cuadra.",
						"vietnamese": "Lại là chuyện chiếc nhẫn? Có gì đó không ổn.",
						"thai": "เรื่องแหวนอีกแล้วรึ? รู้สึกไม่ค่อยดีเลย",
						"hindi": "फिर अंगूठी की बात? कुछ अजीब लग रहा है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "vex",
					"content": {
						"korean": "쉬운 길을 두고, 굳이 어려운 길을 갈 필요는 없지 않나?",
						"english": "Why take the hard path when there's an easy one?",
						"japanese": "簡単な道があるのに、わざわざ難しい道を選ぶ必要はないだろう？",
						"chinese": "有捷径不走，何必偏要走难路？",
						"french": "Pourquoi prendre le chemin difficile quand il y en a un facile ?",
						"spanish": "¿Por qué tomar el camino difícil cuando hay uno fácil?",
						"vietnamese": "Có đường dễ, hà cớ gì phải chọn đường khó?",
						"thai": "มีทางง่ายๆ ทำไมต้องเลือกทางยากด้วยล่ะ?",
						"hindi": "आसान रास्ता होते हुए, मुश्किल रास्ते पर जाने की क्या ज़रूरत है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "하지만… 너무 쉽게 얻는 건 위험해.",
						"english": "But... things gained too easily can be dangerous.",
						"japanese": "だが…あまりにも簡単に手に入るものは危険だ。",
						"chinese": "可是……太容易得到的东西很危险。",
						"french": "Mais… ce qui est trop facile à obtenir est dangereux.",
						"spanish": "Pero... lo que se consigue demasiado fácil es peligroso.",
						"vietnamese": "Nhưng… thứ có được quá dễ dàng thường nguy hiểm.",
						"thai": "แต่ว่า...สิ่งที่ได้มาง่ายเกินไปก็อันตราย",
						"hindi": "लेकिन… जो चीज़ें बहुत आसानी से मिल जाती हैं, वे खतरनाक हो सकती हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "위험은 어디에나 있지. 중요한 건, 통제할 힘을 가졌는지 아닌지다.",
						"english": "Danger is everywhere. What matters is whether you have the power to control it.",
						"japanese": "危険はどこにでもある。重要なのは、それを制御する力を持っているかどうかだ。",
						"chinese": "危险无处不在。重要的是，你是否有能力掌控它。",
						"french": "Le danger est partout. L'important est d'avoir le pouvoir de le maîtriser.",
						"spanish": "El peligro está en todas partes. Lo importante es si tienes el poder para controlarlo.",
						"vietnamese": "Nguy hiểm ở khắp mọi nơi. Điều quan trọng là ngươi có sức mạnh để kiểm soát nó hay không.",
						"thai": "อันตรายมีอยู่ทุกที่ สิ่งสำคัญคือเจ้ามีพลังที่จะควบคุมมันได้หรือไม่",
						"hindi": "खतरा हर जगह है। महत्वपूर्ण यह है कि क्या तुम्हारे पास उसे नियंत्रित करने की शक्ति है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "vex"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "지옥의 균열 속에서, 거대한 악마들이 그림자처럼 출몰했다.",
						"english": "From the rifts of hell, massive demons emerged like shadows.",
						"japanese": "地獄の裂け目から、巨大な悪魔たちが影のように現れた。",
						"chinese": "地狱裂隙中，巨大的恶魔如影般出没。",
						"french": "Des fissures de l'enfer, des démons massifs surgirent comme des ombres.",
						"spanish": "De las grietas del infierno, demonios gigantes emergieron como sombras.",
						"vietnamese": "Từ những vết nứt địa ngục, lũ quỷ khổng lồ xuất hiện như bóng tối.",
						"thai": "จากรอยแยกแห่งนรก อสูรร้ายมหึมาปรากฏกายราวกับเงา",
						"hindi": "नरक की दरारों से, विशाल राक्षस छाया की तरह प्रकट हुए।"
					}
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "vex"
				},
				{
					"content": {
						"korean": "두려워할 것 없어. 반지의 힘이 너를 지켜줄 테니.",
						"english": "Have no fear. The ring's power will protect you.",
						"japanese": "恐れることはない。指輪の力が君を守ってくれるだろうから。",
						"chinese": "无需恐惧。戒指的力量会守护你。",
						"french": "N'aie crainte. Le pouvoir de l'anneau te protégera.",
						"spanish": "No temas. El poder del anillo te protegerá.",
						"vietnamese": "Đừng sợ hãi. Sức mạnh của chiếc nhẫn sẽ bảo vệ ngươi.",
						"thai": "ไม่ต้องกลัว พลังของแหวนจะปกป้องเจ้าเอง",
						"hindi": "डरने की कोई बात नहीं। अंगूठी की शक्ति तुम्हारी रक्षा करेगी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "vex"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "점점 더 위험해지고 있어. 정말 이 길이 맞는 거야?",
						"english": "It's getting more dangerous. Is this really the right path?",
						"japanese": "ますます危険になっている。本当にこの道で合っているのか？",
						"chinese": "越来越危险了。这条路真的正确吗？",
						"french": "C'est de plus en plus dangereux. Est-ce vraiment le bon chemin ?",
						"spanish": "Se está volviendo más peligroso. ¿Es este realmente el camino correcto?",
						"vietnamese": "Mọi chuyện ngày càng nguy hiểm. Con đường này thực sự đúng sao?",
						"thai": "มันอันตรายขึ้นเรื่อยๆ นี่คือทางที่ถูกต้องจริงๆ เหรอ?",
						"hindi": "यह और भी खतरनाक होता जा रहा है। क्या यह वास्तव में सही रास्ता है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "의심은 판단을 흐리게 할 뿐. 반지는 언제나 최선의 선택을 알려줄 것이다.",
						"english": "Doubt only clouds judgment. The ring will always show the best choice.",
						"japanese": "疑念は判断を曇らせるだけだ。指輪は常に最善の選択を教えてくれるだろう。",
						"chinese": "疑虑只会模糊判断。戒指将永远指引你做出最佳选择。",
						"french": "Le doute ne fait qu'obscurcir le jugement. L'anneau indiquera toujours le meilleur choix.",
						"spanish": "La duda solo nubla el juicio. El anillo siempre te mostrará la mejor elección.",
						"vietnamese": "Nghi ngờ chỉ làm mờ phán đoán. Chiếc nhẫn sẽ luôn chỉ ra lựa chọn tốt nhất.",
						"thai": "ความสงสัยจะบดบังวิจารณญาณเท่านั้น แหวนจะแสดงทางเลือกที่ดีที่สุดเสมอ",
						"hindi": "संदेह केवल निर्णय को धूमिल करता है। अंगूठी हमेशा सबसे अच्छा विकल्प बताएगी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "vex"
				},
				{
					"content": {
						"korean": "이 사람이 너무 믿음직스러운 게 오히려 불안해.",
						"english": "His trustworthiness is almost unsettling.",
						"japanese": "あの人があまりにも信頼できるのが、かえって不安だ。",
						"chinese": "他太值得信赖了，反而让我不安。",
						"french": "Sa fiabilité est presque déconcertante.",
						"spanish": "Que sea tan digno de confianza me inquieta.",
						"vietnamese": "Sự đáng tin cậy của người này lại khiến tôi bất an.",
						"thai": "ความน่าเชื่อถือของเขากลับทำให้ฉันไม่สบายใจ",
						"hindi": "उसका इतना भरोसेमंद होना, मुझे परेशान कर रहा है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "불안은 곧 죽음이다. 나를 믿든, 너의 직감을 믿든.",
						"english": "Anxiety is death. Trust me, or trust your instincts.",
						"japanese": "不安は即ち死だ。私を信じるか、君の直感を信じるか。",
						"chinese": "焦虑即是死亡。相信我，或相信你的直觉。",
						"french": "L'anxiété est la mort. Fais-moi confiance, ou fais confiance à ton instinct.",
						"spanish": "La ansiedad es la muerte. Confía en mí, o confía en tus instintos.",
						"vietnamese": "Lo lắng là cái chết. Tin ta, hoặc tin vào trực giác của ngươi.",
						"thai": "ความกังวลคือความตาย เชื่อฉัน หรือเชื่อสัญชาตญาณของคุณ",
						"hindi": "चिंता ही मृत्यु है। मुझ पर भरोसा करो, या अपनी सहज प्रवृत्ति पर।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "vex"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "선택은 언제나 너의 앞에 있다.",
						"english": "The choice is always before you.",
						"japanese": "選択は常に君の前にある。",
						"chinese": "选择永远在你面前。",
						"french": "Le choix est toujours devant toi.",
						"spanish": "La elección siempre está ante ti.",
						"vietnamese": "Lựa chọn luôn ở trước mặt ngươi.",
						"thai": "ทางเลือกอยู่ตรงหน้าคุณเสมอ",
						"hindi": "चुनाव हमेशा तुम्हारे सामने है।"
					},
					"speaker": "vex"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "핏빛 강이 흐르는 협곡. 돌아갈 길은 이미 사라졌다.",
						"english": "A canyon where a river of blood flows. The way back is already gone.",
						"japanese": "血の河が流れる峡谷。戻る道はもう消えた。",
						"chinese": "血河奔流的峡谷。归途已逝。",
						"french": "Un canyon où coule une rivière de sang. Le chemin du retour a déjà disparu.",
						"spanish": "Un cañón por donde fluye un río de sangre. El camino de regreso ya desapareció.",
						"vietnamese": "Hẻm núi nơi sông máu chảy. Đường về đã biến mất.",
						"thai": "หุบเขาที่แม่น้ำโลหิตไหล ทางกลับได้หายไปแล้ว",
						"hindi": "खून की नदी बहती हुई घाटी। वापसी का रास्ता पहले ही जा चुका है।"
					},
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "vex"
				},
				{
					"speaker": "vex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제 되돌릴 수 없어. 더 이상 망설일 시간도 없다.",
						"english": "There's no turning back now. No more time for hesitation.",
						"japanese": "もう後戻りできない。これ以上ためらう時間もない。",
						"chinese": "覆水难收。没有时间再犹豫了。",
						"french": "On ne peut plus revenir en arrière. Plus de temps pour hésiter.",
						"spanish": "Ya no hay vuelta atrás. No hay más tiempo para dudar.",
						"vietnamese": "Không thể quay lại nữa rồi. Cũng không còn thời gian để do dự.",
						"thai": "ตอนนี้กลับไม่ได้แล้ว ไม่มีเวลาลังเลอีกต่อไป",
						"hindi": "अब वापस नहीं जा सकते। हिचकिचाने का और समय नहीं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 지옥에 끝이 있긴 한 거야?",
						"english": "Is there really an end to this hell?",
						"japanese": "この地獄に終わりはあるのか？",
						"chinese": "这地狱真的有尽头吗？",
						"french": "Y a-t-il vraiment une fin à cet enfer ?",
						"spanish": "¿De verdad hay un fin para este infierno?",
						"vietnamese": "Địa ngục này có thật sự có hồi kết không?",
						"thai": "นรกนี้มีจุดจบจริง ๆ หรือไม่?",
						"hindi": "क्या इस नरक का वाकई कोई अंत है?"
					}
				},
				{
					"content": {
						"korean": "끝은 항상 있지. 그 끝이 어떤 모습일지는 너에게 달렸다.",
						"english": "There's always an end. What that end looks like is up to you.",
						"japanese": "終わりは常にある。その終わりがどのような姿になるかは君次第だ。",
						"chinese": "结局总会到来。它会是什么样子，取决于你。",
						"french": "Il y a toujours une fin. À quoi ressemblera cette fin, c'est à toi de décider.",
						"spanish": "Siempre hay un final. Qué aspecto tendrá ese final depende de ti.",
						"vietnamese": "Luôn có một kết thúc. Kết thúc đó trông như thế nào là tùy thuộc vào ngươi.",
						"thai": "จุดจบมีอยู่เสมอ จุดจบนั้นจะเป็นอย่างไรขึ้นอยู่กับคุณ",
						"hindi": "अंत हमेशा होता है। वह अंत कैसा होगा, यह तुम पर निर्भर करता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "vex"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "반지가 없었다면, 여기까지 오지도 못했겠지...",
						"english": "Without the ring, I wouldn't have made it this far...",
						"japanese": "指輪がなければ、ここまで来られなかっただろう…",
						"chinese": "如果没有戒指，我恐怕也走不到这里...",
						"french": "Sans l'anneau, je n'aurais pas pu aller aussi loin...",
						"spanish": "Sin el anillo, no habría llegado tan lejos...",
						"vietnamese": "Nếu không có chiếc nhẫn, ta đã không thể đến được đây...",
						"thai": "ถ้าไม่มีแหวน ฉันคงมาไม่ถึงขนาดนี้...",
						"hindi": "अगर अंगूठी नहीं होती, तो मैं इतनी दूर तक नहीं आ पाता..."
					},
					"speaker": "character_4"
				},
				{
					"speaker": "vex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그렇다. 반지는 너의 일부가 되어가고 있다.",
						"english": "Indeed. The ring is becoming a part of you.",
						"japanese": "その通りだ。指輪は君の一部になりつつある。",
						"chinese": "没错。戒指正在成为你的一部分。",
						"french": "En effet. L'anneau est en train de devenir une partie de toi.",
						"spanish": "Así es. El anillo se está convirtiendo en parte de ti.",
						"vietnamese": "Đúng vậy. Chiếc nhẫn đang trở thành một phần của ngươi.",
						"thai": "ถูกต้อง แหวนกำลังจะกลายเป็นส่วนหนึ่งของคุณ",
						"hindi": "हाँ। अंगूठी तुम्हारा हिस्सा बनती जा रही है।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "발밑에서 흔들리는 대지. 거대한 무언가가 깨어나고 있었다.",
						"english": "The ground trembled beneath my feet. Something colossal was awakening.",
						"japanese": "足元で揺れる大地。巨大な何かが目覚めようとしていた。",
						"chinese": "脚下的大地在颤抖。某种巨大的东西正在苏醒。",
						"french": "La terre tremblait sous mes pieds. Quelque chose de colossal s'éveillait.",
						"spanish": "La tierra temblaba bajo mis pies. Algo colosal estaba despertando.",
						"vietnamese": "Mặt đất rung chuyển dưới chân. Một thứ gì đó khổng lồ đang thức tỉnh.",
						"thai": "พื้นดินสั่นสะเทือนใต้ฝ่าเท้า สิ่งมหึมากำลังตื่นขึ้นมา",
						"hindi": "पैरों तले धरती कांप रही थी। कुछ विशाल जागृत हो रहा था।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "압도적인 힘 앞에 무릎 꿇었다. 지옥의 심연은 끝이 보이지 않았다.",
						"english": "You knelt before overwhelming power. The abyss of hell had no end in sight.",
						"japanese": "圧倒的な力の前に膝を屈した。地獄の深淵は終わりが見えなかった。",
						"chinese": "在压倒性的力量面前跪倒。地狱的深渊望不到尽头。",
						"french": "Tu t'es agenouillé devant une puissance écrasante. L'abîme de l'enfer ne laissait entrevoir aucune fin.",
						"spanish": "Te arrodillaste ante un poder abrumador. El abismo del infierno no tenía fin a la vista.",
						"vietnamese": "Ngươi đã quỳ gối trước sức mạnh áp đảo. Vực thẳm địa ngục không thấy điểm kết thúc.",
						"thai": "เจ้าคุกเข่าต่อหน้าพลังอันท่วมท้น ห้วงลึกของนรกไร้ซึ่งจุดสิ้นสุด",
						"hindi": "तुम圧倒 शक्ति के सामने घुटने टेक दिए। नरक के अथाह कुंड का कोई अंत नहीं दिख रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "가엾은 자들. 반지에 완전히 홀리지 못했구나.",
						"english": "Pitiful fools. You weren't completely enchanted by the ring.",
						"japanese": "哀れな者たち。指輪に完全に魅入られなかったか。",
						"chinese": "可怜的家伙们。你们未能完全被戒指迷惑。",
						"french": "Pauvres imbéciles. Vous n'avez pas été entièrement envoûtés par l'anneau.",
						"spanish": "Pobres tontos. No fuisteis completamente seducidos por el anillo.",
						"vietnamese": "Những kẻ đáng thương. Ngươi đã không hoàn toàn bị chiếc nhẫn mê hoặc.",
						"thai": "น่าสมเพช พวกเจ้าไม่ได้ถูกแหวนสะกดจนหมดสิ้น",
						"hindi": "बेचारे मूर्खों। तुम अंगूठी से पूरी तरह मुग्ध नहीं हुए।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직은 아니야!",
						"english": "Damn it... not yet!",
						"japanese": "くそっ… まだだ！",
						"chinese": "该死… 还没完！",
						"french": "Bon sang... pas encore !",
						"spanish": "Maldita sea... ¡todavía no!",
						"vietnamese": "Chết tiệt… vẫn chưa!",
						"thai": "บ้าจริง… ยังไม่ถึงเวลา!",
						"hindi": "धिक्कार है... अभी नहीं!"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "vex",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "포기하는가? 반지는 너에게 더 많은 힘을 줄 수 있다.",
						"english": "Are you giving up? The ring can give you more power.",
						"japanese": "諦めるのか？指輪はお前にもっと力を与えられる。",
						"chinese": "要放弃吗？戒指可以给予你更多的力量。",
						"french": "Tu abandonnes ? L'anneau peut te donner plus de pouvoir.",
						"spanish": "¿Te rindes? El anillo puede darte más poder.",
						"vietnamese": "Ngươi định bỏ cuộc sao? Chiếc nhẫn có thể ban cho ngươi thêm sức mạnh.",
						"thai": "จะยอมแพ้หรือ? แหวนสามารถมอบพลังให้เจ้าได้มากกว่านี้",
						"hindi": "क्या तुम हार मान रहे हो? अंगूठी तुम्हें और अधिक शक्ति दे सकती है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "vex"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다시 일어서라. 너의 욕망이 이끄는 대로.",
						"english": "Rise again. As your desires lead.",
						"japanese": "再び立ち上がれ。お前の欲望が導くままに。",
						"chinese": "再次站起来。随你的欲望指引。",
						"french": "Relève-toi. Suis tes désirs.",
						"spanish": "Levántate de nuevo. Como tus deseos te guíen.",
						"vietnamese": "Hãy đứng dậy một lần nữa. Theo sự dẫn dắt của khát vọng ngươi.",
						"thai": "ลุกขึ้นอีกครั้ง ตามความปรารถนาของเจ้า",
						"hindi": "फिर से उठो। जैसा तुम्हारी इच्छाएं तुम्हें ले जाएं।"
					},
					"speaker": "vex"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 앞길을 막아섰다. 지옥의 심연에서 깨어난 자였다.",
						"english": "A colossal shadow blocked our path. It was one awakened from the abyss of hell.",
						"japanese": "巨大な影が道を塞いだ。地獄の深淵から目覚めた者だった。",
						"chinese": "一个巨大的阴影挡住了去路。它是从地狱深渊中苏醒的。",
						"french": "Une ombre colossale barra notre chemin. C'était un être éveillé des abysses de l'enfer.",
						"spanish": "Una sombra colosal bloqueó nuestro camino. Era uno despertado del abismo del infierno.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường chúng tôi. Đó là kẻ thức tỉnh từ vực thẳm địa ngục.",
						"thai": "เงาขนาดมหึมาขวางทางเราไว้ มันคือผู้ตื่นจากขุมนรก",
						"hindi": "एक विशाल छाया ने हमारा रास्ता रोक दिया। वह नर्क के पाताल से जागृत हुआ था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들. 이 심연에서 무엇을 얻으려 하는가?",
						"english": "Fools. What do you seek in this abyss?",
						"japanese": "愚か者ども。この深淵で何を得ようとする？",
						"chinese": "愚蠢的家伙们。你们想从这深渊中得到什么？",
						"french": "Imbéciles. Que cherchez-vous dans cet abîme ?",
						"spanish": "Necios. ¿Qué buscáis en este abismo?",
						"vietnamese": "Bọn ngu xuẩn. Ngươi muốn gì ở vực thẳm này?",
						"thai": "เจ้าพวกโง่เง่า เจ้าต้องการอะไรจากขุมนรกนี้?",
						"hindi": "मूर्खों। इस पाताल में क्या पाना चाहते हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리의 길을 막지 마라!",
						"english": "Don't block our path!",
						"japanese": "我々の道を阻むな！",
						"chinese": "别挡我们的路！",
						"french": "Ne nous barrez pas la route !",
						"spanish": "¡No bloquees nuestro camino!",
						"vietnamese": "Đừng cản đường chúng ta!",
						"thai": "อย่ามาขวางทางเรา!",
						"hindi": "हमारा रास्ता मत रोको!"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "vex",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "침착해. {random_boss}의 약점은 명확하다. 반지의 힘을 사용해라.",
						"english": "Calm down. {random_boss}'s weakness is clear. Use the power of the ring.",
						"japanese": "落ち着け。{random_boss}の弱点は明確だ。指輪の力を使え。",
						"chinese": "冷静。{random_boss}的弱点很明显。使用戒指的力量。",
						"french": "Calme-toi. La faiblesse de {random_boss} est évidente. Utilise le pouvoir de l'anneau.",
						"spanish": "Cálmate. La debilidad de {random_boss} es clara. Usa el poder del anillo.",
						"vietnamese": "Bình tĩnh. Điểm yếu của {random_boss} rất rõ ràng. Hãy sử dụng sức mạnh của chiếc nhẫn.",
						"thai": "ใจเย็นไว้ จุดอ่อนของ {random_boss} ชัดเจน จงใช้พลังของแหวน",
						"hindi": "शांत हो जाओ। {random_boss} की कमजोरी स्पष्ट है। अंगूठी की शक्ति का प्रयोग करो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "vex"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}의 약점? 하찮은 소리!",
						"english": "{random_boss}'s weakness? Nonsense!",
						"japanese": "{random_boss}の弱点？くだらん！",
						"chinese": "{random_boss}的弱点？胡说八道！",
						"french": "La faiblesse de {random_boss} ? Balivernes !",
						"spanish": "¿La debilidad de {random_boss}? ¡Tonterías!",
						"vietnamese": "Điểm yếu của {random_boss}? Vô nghĩa!",
						"thai": "จุดอ่อนของ {random_boss}? เหลวไหล!",
						"hindi": "{random_boss} की कमजोरी? बकवास!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "vex",
					"action": "exit",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"content": {
						"korean": "선택은 너의 몫이다. 싸워라.",
						"english": "The choice is yours. Fight.",
						"japanese": "選択はお前次第だ。戦え。",
						"chinese": "选择权在你。战斗吧。",
						"french": "Le choix t'appartient. Bats-toi.",
						"spanish": "La elección es tuya. Lucha.",
						"vietnamese": "Lựa chọn là của ngươi. Chiến đấu đi.",
						"thai": "การตัดสินใจอยู่ที่เจ้า จงสู้",
						"hindi": "चुनाव तुम्हारा है। लड़ो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "vex"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 보스가 쓰러졌다. 지옥의 기운이 잠시 가라앉았다.",
						"english": "The mysterious boss fell. The hellish aura subsided for a moment.",
						"japanese": "正体不明のボスが倒れた。地獄の気配が一時的に静まった。",
						"chinese": "未知首领倒下了。地狱的气息暂时平息。",
						"french": "Le boss inconnu est tombé. L'aura infernale s'est calmée un instant.",
						"spanish": "El jefe misterioso cayó. El aura infernal se calmó por un momento.",
						"vietnamese": "Tên trùm bí ẩn đã gục ngã. Khí tức địa ngục tạm thời lắng xuống.",
						"thai": "บอสปริศนาล้มลงแล้ว พลังงานจากนรกสงบลงชั่วขณะ",
						"hindi": "रहस्यमयी बॉस गिर गया। नर्क की आभा क्षण भर के लिए शांत हो गई।"
					}
				},
				{
					"content": {
						"korean": "네가… 반지의 힘을… 이해했구나…",
						"english": "You... understood... the power of the ring...",
						"japanese": "お前が…指輪の力を…理解したのか…",
						"chinese": "你…理解了…戒指的力量…",
						"french": "Tu as... compris... le pouvoir de l'anneau...",
						"spanish": "Tú... comprendiste... el poder del anillo...",
						"vietnamese": "Ngươi… đã hiểu… sức mạnh của chiếc nhẫn…",
						"thai": "เจ้า... เข้าใจ... พลังของแหวนแล้วสินะ...",
						"hindi": "तुम... अंगूठी की शक्ति... समझ गए..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝났다!",
						"english": "It's over!",
						"japanese": "終わった！",
						"chinese": "结束了！",
						"french": "C'est fini !",
						"spanish": "¡Se acabó!",
						"vietnamese": "Xong rồi!",
						"thai": "จบแล้ว!",
						"hindi": "खत्म हुआ!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "vex",
					"action": "enter"
				},
				{
					"content": {
						"korean": "예상대로군. 반지의 힘은 언제나 승리할 방법을 보여주지.",
						"english": "As expected. The ring's power always shows a way to victory.",
						"japanese": "予想通りだ。指輪の力は常に勝利への道を示す。",
						"chinese": "果然不出所料。戒指的力量总会指引胜利之路。",
						"french": "Comme prévu. Le pouvoir de l'anneau montre toujours le chemin de la victoire.",
						"spanish": "Como era de esperar. El poder del anillo siempre muestra el camino a la victoria.",
						"vietnamese": "Đúng như dự đoán. Sức mạnh của chiếc nhẫn luôn chỉ lối đến chiến thắng.",
						"thai": "เป็นไปตามคาด พลังของแหวนจะแสดงหนทางสู่ชัยชนะเสมอ",
						"hindi": "जैसा कि अपेक्षित था। अंगूठी की शक्ति हमेशा जीत का रास्ता दिखाती है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "vex"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만, 이것은 시작에 불과하다. 더 큰 힘이 너를 기다리고 있다.",
						"english": "But this is just the beginning. Greater power awaits you.",
						"japanese": "しかし、これは始まりに過ぎない。より大きな力が君を待っている。",
						"chinese": "然而，这仅仅是个开始。更强大的力量正等待着你。",
						"french": "Mais ce n'est que le début. Une puissance plus grande t'attend.",
						"spanish": "Pero esto es solo el principio. Un poder mayor te espera.",
						"vietnamese": "Nhưng đây chỉ là khởi đầu. Sức mạnh lớn hơn đang chờ đợi ngươi.",
						"thai": "แต่นี่เป็นเพียงจุดเริ่มต้น พลังที่ยิ่งใหญ่กว่ากำลังรอเจ้าอยู่",
						"hindi": "लेकिन यह तो बस शुरुआत है। एक बड़ी शक्ति तुम्हारा इंतजार कर रही है।"
					},
					"speaker": "vex"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "벡스의 말과 함께, 반지는 더욱 강렬한 빛을 뿜었다. 다음 목적지를 가리키듯이.",
						"english": "With Vex's words, the ring pulsed with a stronger light, as if pointing to the next destination.",
						"japanese": "ベックスの言葉と共に、指輪はさらに強烈な光を放ち、次の目的地を示すかのように。",
						"chinese": "随着维克斯的话语，戒指散发出更加强烈的光芒，仿佛在指引下一个目的地。",
						"french": "Aux mots de Vex, l'anneau émit une lumière plus intense, comme pour indiquer la prochaine destination.",
						"spanish": "Con las palabras de Vex, el anillo irradió una luz más intensa, como si señalara el próximo destino.",
						"vietnamese": "Cùng với lời của Vex, chiếc nhẫn phát ra ánh sáng càng thêm mãnh liệt, như thể đang chỉ đường đến điểm đến tiếp theo.",
						"thai": "พร้อมกับคำพูดของเว็กซ์ แหวนก็เปล่งประกายแสงแรงกล้า ราวกับชี้ไปที่จุดหมายต่อไป",
						"hindi": "वेक्स के शब्दों के साथ, अंगूठी ने और भी तीव्र प्रकाश फैलाया, मानो अगले गंतव्य की ओर इशारा कर रही हो।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 잿빛 심연. 헤매는 영혼들 앞에",
			"조용한 목소리가 속삭였다.",
			"\"길을 잃었는가? 이 반지가 너를 인도할 것이다.\"",
			"거부할 수 없는 유혹. 혹은… 벗어날 수 없는 굴레."
		],
		"english": [
			"The ashen abyss of hell. Before the wandering souls,",
			"A quiet voice whispered.",
			"\"Are you lost? This ring will guide you.\"",
			"An irresistible temptation. Or... an inescapable bond."
		],
		"japanese": [
			"地獄の灰色の深淵。さまよう魂の前に、",
			"静かな声がささやいた。",
			"「道に迷ったか？ この指輪がお前を導くだろう。」",
			"抗えない誘惑。あるいは…逃れられない束縛。"
		],
		"chinese": [
			"地狱的灰烬深渊。在徘徊的灵魂面前，",
			"一个轻柔的声音低语道。",
			"“你迷路了吗？这枚戒指会指引你。”",
			"无法抗拒的诱惑。亦或是……无法摆脱的枷锁。"
		],
		"french": [
			"L'abîme cendré de l'enfer. Devant les âmes errantes,",
			"Une voix calme chuchota.",
			"« Es-tu perdu ? Cette bague te guidera. »",
			"Une tentation irrésistible. Ou... un lien inéluctable."
		],
		"spanish": [
			"El abismo ceniciento del infierno. Ante las almas errantes,",
			"Una voz tranquila susurró.",
			"« ¿Estás perdido? Este anillo te guiará. »",
			"Una tentación irresistible. O... una atadura ineludible."
		],
		"vietnamese": [
			"Vực sâu tro tàn của địa ngục. Trước những linh hồn lạc lối,",
			"Một giọng nói khẽ thì thầm.",
			"\"Ngươi lạc lối ư? Chiếc nhẫn này sẽ dẫn lối cho ngươi.\"",
			"Một sự cám dỗ không thể chối từ. Hoặc… một xiềng xích không thể thoát ra."
		],
		"thai": [
			"ห้วงเหวสีเทาแห่งนรก. เบื้องหน้าวิญญาณที่หลงทาง,",
			"เสียงเงียบๆ กระซิบแผ่วเบา.",
			"“เจ้าหลงทางหรือเปล่า? แหวนวงนี้จะนำทางเจ้า.”",
			"การล่อลวงที่ไม่อาจต้านทาน. หรือ... พันธนาการที่ไม่อาจหลุดพ้น."
		],
		"hindi": [
			"नरक की राख भरी खाई। भटकती आत्माओं के सामने,",
			"एक शांत आवाज़ फुसफुसाई।",
			"“क्या तुम भटक गए हो? यह अंगूठी तुम्हें राह दिखाएगी।”",
			"एक अनूठा प्रलोभन। या... एक अटूट बंधन।"
		]
	}
} as const;
