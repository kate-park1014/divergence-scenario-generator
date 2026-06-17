export const scenario_snowy_bellus_17_02 = {
	"scenario_id": "snowy_bellus_17_02",
	"order": 2,
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
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "모든 것이 멈춘 듯 고요했다. 시간조차 얼어붙은 공간.",
						"english": "Everything was still, as if frozen. A space where even time was frozen.",
						"japanese": "全てが止まったように静まり返っていた。時間さえ凍りついた空間。",
						"chinese": "一切都静止了，仿佛时间都被冻结。一个连时间都凝固的空间。",
						"french": "Tout était immobile, comme figé. Un espace où même le temps était gelé.",
						"spanish": "Todo estaba inmóvil, como congelado. Un espacio donde incluso el tiempo estaba congelado.",
						"vietnamese": "Mọi thứ đều tĩnh lặng như đóng băng. Một không gian mà ngay cả thời gian cũng ngừng lại.",
						"thai": "ทุกสิ่งนิ่งงันราวกับถูกแช่แข็ง พื้นที่ที่แม้แต่เวลาก็หยุดนิ่ง",
						"hindi": "सब कुछ रुका हुआ था, मानो जम गया हो। एक ऐसी जगह जहाँ समय भी जम गया था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여긴… 마치 거대한 얼음 박물관 같아.",
						"english": "This place... it's like a giant ice museum.",
						"japanese": "ここは…まるで巨大な氷の博物館みたいだ。",
						"chinese": "这里…就像一个巨大的冰雪博物馆。",
						"french": "Cet endroit... c'est comme un immense musée de glace.",
						"spanish": "Este lugar... es como un gigantesco museo de hielo.",
						"vietnamese": "Nơi này... cứ như một bảo tàng băng khổng lồ vậy.",
						"thai": "ที่นี่...เหมือนพิพิธภัณฑ์น้ำแข็งขนาดยักษ์เลย",
						"hindi": "यह जगह... एक विशाल बर्फ़ीले संग्रहालय जैसी है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "bran"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "길을 잃은 자들이여. 내가 너희를 인도하겠다.",
						"english": "Lost ones. I shall guide you.",
						"japanese": "道に迷いし者たちよ。私が汝らを導こう。",
						"chinese": "迷途者。我将指引你们。",
						"french": "Âmes perdues. Je vous guiderai.",
						"spanish": "Almas perdidas. Yo os guiaré.",
						"vietnamese": "Những kẻ lạc lối. Ta sẽ dẫn dắt các ngươi.",
						"thai": "ผู้หลงทางเอ๋ย ข้าจะนำทางเจ้าเอง",
						"hindi": "भटके हुए लोगों। मैं तुम्हें मार्ग दिखाऊँगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "您是…？",
						"french": "Vous êtes... ?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Ngài là...?",
						"thai": "ท่านคือ...?",
						"hindi": "आप कौन हैं...?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "브란. 이 얼어붙은 기록들을 읽는 자다.",
						"english": "Bran. The one who reads these frozen records.",
						"japanese": "ブラン。この凍りついた記録を読む者だ。",
						"chinese": "布兰。阅读这些冰封记录之人。",
						"french": "Bran. Celui qui lit ces registres gelés.",
						"spanish": "Bran. El que lee estos registros congelados.",
						"vietnamese": "Bran. Kẻ đọc những ghi chép bị đóng băng này.",
						"thai": "แบรน ผู้ที่อ่านบันทึกที่ถูกแช่แข็งเหล่านี้",
						"hindi": "ब्रान। वह जो इन जमी हुई अभिलेखों को पढ़ता है।"
					}
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이곳의 지배자는… 시간을 꿰매는 자, 벨루스.",
						"english": "The ruler of this place... Bellus, the Seamster of Time.",
						"japanese": "この地の支配者は… 時間を縫い合わせる者、ベルス。",
						"chinese": "此地的支配者… 缝合时间者，贝鲁斯。",
						"french": "Le souverain de ces lieux… Bellus, le Couturier du Temps.",
						"spanish": "El gobernante de este lugar... Bellus, el Costurero del Tiempo.",
						"vietnamese": "Kẻ thống trị nơi đây… Bellus, Thợ may thời gian.",
						"thai": "ผู้ปกครองแห่งนี้คือ... เบลลัส, ผู้เย็บปักเวลา.",
						"hindi": "इस स्थान का शासक... वेलस, समय का दर्जी।"
					}
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
					"action": "enter",
					"speaker": "bran",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "벨루스는 그저 파괴자가 아니다.",
						"english": "Bellus isn't merely a Destroyer.",
						"japanese": "ベルスはただの破壊者ではない。",
						"chinese": "贝鲁斯不仅仅是破坏者。",
						"french": "Bellus n'est pas qu'un simple destructeur.",
						"spanish": "Bellus no es simplemente un Destructor.",
						"vietnamese": "Bellus không chỉ là một Kẻ hủy diệt.",
						"thai": "เบลลัสไม่ใช่แค่ผู้ทำลาย.",
						"hindi": "वेलस केवल एक विनाशक नहीं है।"
					},
					"speaker": "bran",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is he?",
						"japanese": "じゃあ、何なんだ？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce qu'il est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì là gì?",
						"thai": "แล้วเขาคืออะไร?",
						"hindi": "तो वह क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 얼어붙은 기억들은… 그가 수집한 순간의 아름다움이다.",
						"english": "These frozen memories... are the beauty of moments he collected.",
						"japanese": "この凍りついた記憶は… 彼が集めた瞬間の美しさだ。",
						"chinese": "这些冻结的记忆… 是他收集的瞬间之美。",
						"french": "Ces souvenirs gelés… sont la beauté des instants qu'il a collectionnés.",
						"spanish": "Estos recuerdos congelados... son la belleza de los momentos que él coleccionó.",
						"vietnamese": "Những ký ức đóng băng này… là vẻ đẹp của những khoảnh khắc mà hắn đã thu thập.",
						"thai": "ความทรงจำที่หยุดนิ่งเหล่านี้... คือความงามของช่วงเวลาที่เขาสะสมไว้.",
						"hindi": "ये जमी हुई यादें... उसके द्वारा एकत्रित पलों की सुंदरता हैं।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 고대 기록에는 '시간을 꿰매는 자'에 대한 전설이 나와.",
						"english": "This ancient record speaks of the legend of the 'Seamster of Time.'",
						"japanese": "この古代の記録には、「時間を縫い合わせる者」の伝説が記されている。",
						"chinese": "这份古老记录中提到了“缝合时间者”的传说。",
						"french": "Cet ancien registre relate la légende du « Couturier du Temps ».",
						"spanish": "Este antiguo registro habla de la leyenda del 'Costurero del Tiempo'.",
						"vietnamese": "Bản ghi cổ xưa này kể về truyền thuyết về 'Thợ may thời gian'.",
						"thai": "บันทึกโบราณนี้กล่าวถึงตำนานของ 'ผู้เย็บปักเวลา'.",
						"hindi": "इस प्राचीन अभिलेख में 'समय के दर्जी' की किंवदंती है।"
					}
				},
				{
					"content": {
						"korean": "가장 행복했던 순간을 영원히 보존하려 했다고.",
						"english": "It says he tried to preserve the happiest moments forever.",
						"japanese": "最も幸せだった瞬間を永遠に保存しようとした、と。",
						"chinese": "据说他试图永远保存最幸福的瞬间。",
						"french": "Il aurait cherché à préserver les instants les plus heureux pour l'éternité.",
						"spanish": "Dice que intentó preservar los momentos más felices para siempre.",
						"vietnamese": "Hắn đã cố gắng bảo tồn những khoảnh khắc hạnh phúc nhất mãi mãi.",
						"thai": "เขาพยายามที่จะเก็บช่วงเวลาแห่งความสุขที่สุดไว้ตลอดไป.",
						"hindi": "उसने सबसे खुशी के पलों को हमेशा के लिए संरक्षित करने की कोशिश की।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "bran",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "이 아름다운 풍경들… 모두 누군가의 가장 소중한 순간이다.",
						"english": "These beautiful landscapes... are all someone's most precious moments.",
						"japanese": "この美しい風景は… 全て誰かの最も大切な瞬間だ。",
						"chinese": "这些美丽的风景… 都是某人最珍贵的瞬间。",
						"french": "Ces magnifiques paysages… sont tous les moments les plus précieux de quelqu'un.",
						"spanish": "Estos hermosos paisajes... son todos los momentos más preciosos de alguien.",
						"vietnamese": "Những phong cảnh tuyệt đẹp này… đều là những khoảnh khắc quý giá nhất của ai đó.",
						"thai": "ทิวทัศน์ที่สวยงามเหล่านี้... ล้วนเป็นช่วงเวลาที่ล้ำค่าที่สุดของใครบางคน.",
						"hindi": "ये खूबसूरत नज़ारे... सब किसी के सबसे अनmol पल हैं।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "하지만… 멈춰있잖아.",
						"english": "But... they're stopped.",
						"japanese": "でも… 止まっているじゃないか。",
						"chinese": "但是… 它们都停滞了。",
						"french": "Mais… ils sont figés.",
						"spanish": "Pero... están detenidos.",
						"vietnamese": "Nhưng… chúng đã dừng lại rồi.",
						"thai": "แต่... พวกมันหยุดนิ่ง.",
						"hindi": "लेकिन... वे रुके हुए हैं।"
					}
				},
				{
					"speaker": "bran",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "벨루스는 그 완벽한 순간을 영원히 가두는 것에 광적으로 집착한다.",
						"english": "Bellus is maniacally obsessed with forever imprisoning those perfect moments.",
						"japanese": "ベルスは、その完璧な瞬間を永遠に閉じ込めることに狂気的に執着している。",
						"chinese": "贝鲁斯痴迷于永远禁锢那些完美的瞬间。",
						"french": "Bellus est obsédé par l'idée d'emprisonner ces moments parfaits pour toujours.",
						"spanish": "Bellus está obsesionado maníacamente con aprisionar esos momentos perfectos para siempre.",
						"vietnamese": "Bellus bị ám ảnh một cách điên cuồng với việc giam cầm những khoảnh khắc hoàn hảo đó mãi mãi.",
						"thai": "เบลลัสหมกมุ่นอย่างบ้าคลั่งกับการกักขังช่วงเวลาที่สมบูรณ์แบบเหล่านั้นไว้ตลอดไป.",
						"hindi": "वेलस उन परिपूर्ण पलों को हमेशा के लिए कैद करने के प्रति उन्मत्त रूप से आसक्त है।"
					}
				},
				{
					"content": {
						"korean": "그게 아름다움이라고?",
						"english": "You call that beautiful?",
						"japanese": "それが美しいと？",
						"chinese": "那就是美吗？",
						"french": "C'est ça, la beauté ?",
						"spanish": "¿A eso le llamas belleza?",
						"vietnamese": "Đó là cái đẹp sao?",
						"thai": "นั่นเรียกว่าสวยงามเหรอ?",
						"hindi": "क्या यह सुंदरता है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그에겐 그렇다. 그의 눈에는 이것이 진정한 구원.",
						"english": "To him, yes. In his eyes, this is true salvation.",
						"japanese": "彼にはそうだ。彼の目には、これこそが真の救済なのだ。",
						"chinese": "对他而言，是的。在他眼中，这才是真正的救赎。",
						"french": "Pour lui, oui. À ses yeux, c'est le véritable salut.",
						"spanish": "Para él, sí. A sus ojos, esta es la verdadera salvación.",
						"vietnamese": "Đối với hắn, đúng vậy. Trong mắt hắn, đây là sự cứu rỗi thật sự.",
						"thai": "สำหรับเขา ใช่แล้ว ในสายตาของเขา นี่คือการช่วยให้รอดที่แท้จริง",
						"hindi": "उसके लिए, हाँ। उसकी नज़रों में, यही सच्ची मुक्ति है।"
					},
					"speaker": "bran",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 시간이 자아내는 경이로운 광경. 그 이면에 숨겨진 왜곡된 집착.",
						"english": "A marvelous spectacle created by frozen time. Behind it, a twisted obsession.",
						"japanese": "凍りついた時間が織りなす驚異の光景。その裏に隠された歪んだ執着。",
						"chinese": "凝固时间造就的奇妙景象。其背后隐藏着扭曲的执念。",
						"french": "Un spectacle merveilleux créé par le temps figé. Derrière, une obsession tordue.",
						"spanish": "Un espectáculo maravilloso creado por el tiempo congelado. Detrás, una obsesión retorcida.",
						"vietnamese": "Một cảnh tượng kỳ diệu do thời gian đóng băng tạo nên. Ẩn sau đó là một nỗi ám ảnh méo mó.",
						"thai": "ภาพอันน่ามหัศจรรย์ที่เกิดจากเวลาที่หยุดนิ่ง เบื้องหลังคือความหลงใหลที่บิดเบือน",
						"hindi": "जमी हुई समय द्वारा निर्मित एक अद्भुत दृश्य। इसके पीछे, एक विकृत जुनून।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "그의 수집은 계속될 것이다. 우리가 막지 않으면.",
						"english": "His collection will continue. Unless we stop him.",
						"japanese": "彼の収集は続くだろう。我々が止めなければ。",
						"chinese": "他的收藏会继续。除非我们阻止他。",
						"french": "Sa collection continuera. À moins que nous ne l'arrêtions.",
						"spanish": "Su colección continuará. A menos que lo detengamos.",
						"vietnamese": "Bộ sưu tập của hắn sẽ tiếp tục. Trừ khi chúng ta ngăn chặn hắn.",
						"thai": "การสะสมของเขาจะดำเนินต่อไป เว้นแต่เราจะหยุดเขา",
						"hindi": "उसका संग्रह जारी रहेगा। जब तक हम उसे रोकते नहीं।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "시간을 꿰매는 자… 대체 뭘 원하는 거야?",
						"english": "The Time-Stitcher... What exactly does he want?",
						"japanese": "時を縫い合わせる者…一体何を望むんだ？",
						"chinese": "缝合时间之人…到底想要什么？",
						"french": "Le Couseur de Temps... Que veut-il exactement ?",
						"spanish": "El Tejedor del Tiempo... ¿Qué quiere exactamente?",
						"vietnamese": "Kẻ khâu vá thời gian... rốt cuộc hắn muốn gì?",
						"thai": "ผู้เย็บเวลา... เขาต้องการอะไรกันแน่?",
						"hindi": "समय को सीने वाला... आखिर वो क्या चाहता है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "왜곡된 집착이 만들어낸 영원한 감옥. 이곳에서 빠져나갈 길은 없다.",
						"english": "An eternal prison born of twisted obsession. There's no escape from here.",
						"japanese": "歪んだ執着が生み出した永遠の監獄。ここから抜け出す道はない。",
						"chinese": "扭曲执念造就的永恒牢笼。此地无路可逃。",
						"french": "Une prison éternelle née d'une obsession tordue. Il n'y a pas d'échappatoire ici.",
						"spanish": "Una prisión eterna nacida de una obsesión retorcida. No hay escape de aquí.",
						"vietnamese": "Một nhà tù vĩnh cửu được tạo ra bởi nỗi ám ảnh méo mó. Không có lối thoát khỏi nơi này.",
						"thai": "คุกนิรันดร์ที่เกิดจากความหลงใหลที่บิดเบือน ไม่มีทางหนีจากที่นี่ได้",
						"hindi": "विकृत जुनून से बनी एक शाश्वत जेल। यहाँ से निकलने का कोई रास्ता नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "돌아갈 수 없어?",
						"english": "Can't we go back?",
						"japanese": "戻れないのか？",
						"chinese": "无法回头吗？",
						"french": "On ne peut pas revenir en arrière ?",
						"spanish": "¿No podemos volver?",
						"vietnamese": "Không thể quay lại sao?",
						"thai": "กลับไปไม่ได้แล้วเหรอ?",
						"hindi": "क्या हम वापस नहीं जा सकते?"
					}
				},
				{
					"content": {
						"korean": "시간은 한 방향으로 흐르지 않는다. 그의 선로 위에서만 의미를 갖지.",
						"english": "Time doesn't flow in one direction. It only holds meaning on his tracks.",
						"japanese": "時間は一方向に流れない。彼の線路の上でのみ意味を持つ。",
						"chinese": "时间并非单向流动。只有在他的轨道上才有意义。",
						"french": "Le temps ne s'écoule pas dans une seule direction. Il n'a de sens que sur ses rails.",
						"spanish": "El tiempo no fluye en una sola dirección. Solo tiene sentido en sus vías.",
						"vietnamese": "Thời gian không chảy một chiều. Nó chỉ có ý nghĩa trên đường ray của hắn.",
						"thai": "เวลาไม่ได้ไหลไปในทิศทางเดียว มันมีความหมายบนรางของเขาเท่านั้น",
						"hindi": "समय एक दिशा में नहीं बहता। इसका अर्थ केवल उसकी पटरियों पर ही है।"
					},
					"speaker": "bran",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼… 되돌려야 해.",
						"english": "Then... we must reverse it.",
						"japanese": "なら…戻さなければ。",
						"chinese": "那么…必须逆转。",
						"french": "Alors... il faut l'inverser.",
						"spanish": "Entonces... debemos revertirlo.",
						"vietnamese": "Vậy thì... phải đảo ngược nó.",
						"thai": "ถ้าอย่างนั้น... ต้องย้อนกลับไป",
						"hindi": "तो... हमें इसे उलटना होगा।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "bran",
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "감히 나의 완벽한 예술을 방해하려는가.",
						"english": "How dare you disrupt my perfect art?",
						"japanese": "よくも私の完璧な芸術を邪魔しようとするか。",
						"chinese": "竟敢妨碍我完美的艺术？",
						"french": "Comment oses-tu perturber mon art parfait ?",
						"spanish": "¿Cómo te atreves a perturbar mi arte perfecto?",
						"vietnamese": "Ngươi dám phá hoại nghệ thuật hoàn hảo của ta sao?",
						"thai": "เจ้ากล้าดียังไงมาขัดขวางศิลปะอันสมบูรณ์แบบของข้า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई मेरी पूर्ण कला में बाधा डालने की।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 가둔 시간들을 되돌려 놓겠어.",
						"english": "I will restore the times you've trapped.",
						"japanese": "お前が閉じ込めた時間を元に戻してやる。",
						"chinese": "我会把你困住的时间都恢复原状。",
						"french": "Je restaurerai les temps que tu as piégés.",
						"spanish": "Restauraré los tiempos que has atrapado.",
						"vietnamese": "Ta sẽ khôi phục lại những thời gian ngươi đã giam cầm.",
						"thai": "ข้าจะคืนช่วงเวลาที่เจ้ากักขังไว้ให้เป็นปกติ",
						"hindi": "मैं उन समयों को वापस लाऊंगा जिन्हें तुमने फंसाया है।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 파괴되는 미래에서 내가 구원한 것들을… 다시 파괴하려 해?",
						"english": "Fools. You try to destroy what I saved from a ruined future?",
						"japanese": "愚かな者たち。破滅する未来から私が救ったものを…再び破壊しようとするのか？",
						"chinese": "愚蠢的家伙们。你们想再次摧毁我从毁灭的未来中拯救出来的一切吗？",
						"french": "Insensés. Vous tentez de détruire ce que j'ai sauvé d'un futur en ruines ?",
						"spanish": "Estúpidos. ¿Intentáis destruir lo que salvé de un futuro en ruinas?",
						"vietnamese": "Lũ ngốc. Các ngươi định phá hủy những gì ta đã cứu khỏi một tương lai đổ nát sao?",
						"thai": "พวกโง่เง่า. เจ้าคิดจะทำลายสิ่งที่ข้าได้ช่วยไว้จากอนาคตที่พังทลายอีกครั้งงั้นรึ?",
						"hindi": "मूर्खों। क्या तुम उन चीज़ों को नष्ट करना चाहते हो जिन्हें मैंने एक विनाशकारी भविष्य से बचाया था?"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "시간은 너희에게 자비롭지 않다.",
						"english": "Time shows no mercy to you.",
						"japanese": "時間は貴様らに慈悲をかけない。",
						"chinese": "时间对你们毫不留情。",
						"french": "Le temps ne vous fera aucune pitié.",
						"spanish": "El tiempo no os tendrá piedad.",
						"vietnamese": "Thời gian không có lòng trắc ẩn với các ngươi.",
						"thai": "เวลาไม่ปรานีพวกเจ้าหรอก.",
						"hindi": "समय तुम्हें कोई दया नहीं दिखाएगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わっていない。",
						"chinese": "还没有……结束。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Aún no... ha terminado.",
						"vietnamese": "Vẫn chưa... kết thúc.",
						"thai": "ยัง... ไม่จบ.",
						"hindi": "अभी... ख़त्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나의 완벽한 예술은 영원할 것이다.",
						"english": "My perfect art will be eternal.",
						"japanese": "私の完璧な芸術は永遠だろう。",
						"chinese": "我的完美艺术将永恒不朽。",
						"french": "Mon art parfait sera éternel.",
						"spanish": "Mi arte perfecto será eterno.",
						"vietnamese": "Nghệ thuật hoàn hảo của ta sẽ là vĩnh cửu.",
						"thai": "ศิลปะที่สมบูรณ์แบบของข้าจะคงอยู่ตลอดไป.",
						"hindi": "मेरी उत्तम कला शाश्वत रहेगी।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 이 완벽한 순간들을… 부수지 마라.",
						"english": "Insignificant beings... Do not shatter these perfect moments.",
						"japanese": "取るに足らない者たち… この完璧な瞬間を… 壊すな。",
						"chinese": "渺小的家伙们……别破坏这些完美的瞬间。",
						"french": "Êtres insignifiants... Ne brisez pas ces moments parfaits.",
						"spanish": "Seres insignificantes... No destruyáis estos momentos perfectos.",
						"vietnamese": "Những kẻ tầm thường... Đừng phá vỡ những khoảnh khắc hoàn hảo này.",
						"thai": "พวกไร้ค่า... อย่าทำลายช่วงเวลาที่สมบูรณ์แบบเหล่านี้เลย.",
						"hindi": "तुच्छ प्राणियों... इन उत्तम क्षणों को मत तोड़ो।"
					}
				},
				{
					"content": {
						"korean": "하지만… 이것은… 시작일 뿐이다.",
						"english": "But... this is... just the beginning.",
						"japanese": "だが…これは…始まりに過ぎない。",
						"chinese": "但是……这……仅仅是开始。",
						"french": "Mais... ce n'est... que le début.",
						"spanish": "Pero... esto es... solo el principio.",
						"vietnamese": "Nhưng... đây... chỉ là khởi đầu.",
						"thai": "แต่... นี่เป็น... เพียงแค่จุดเริ่มต้นเท่านั้น.",
						"hindi": "लेकिन... यह... सिर्फ़ शुरुआत है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "끝났어. 이제 모두 제자리로 돌아갈 거야.",
						"english": "It's over. Now everything will return to its rightful place.",
						"japanese": "終わった。これで全てが元の場所に戻るだろう。",
						"chinese": "结束了。现在一切都将回到原位。",
						"french": "C'est fini. Maintenant, tout va reprendre sa juste place.",
						"spanish": "Se acabó. Ahora todo volverá a su lugar.",
						"vietnamese": "Kết thúc rồi. Giờ thì mọi thứ sẽ trở về đúng vị trí của nó.",
						"thai": "จบแล้ว. ตอนนี้ทุกสิ่งจะกลับสู่ที่ของมัน.",
						"hindi": "ख़त्म हो गया। अब सब कुछ अपनी सही जगह पर वापस आ जाएगा।"
					},
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하나의 시간이 풀려났지만, {random_boss}의 그림자는 여전히 얼어붙은 설원에 남아있었다. 그의 진정한 집착은 아직 드러나지 않았다.",
						"english": "One timeline was freed, but {random_boss}'s shadow still lingered in the frozen wasteland. His true obsession had yet to be revealed.",
						"japanese": "一つの時間が解放されたが、{random_boss}の影は凍てついた雪原に残り続けた。彼の真の執着はまだ明かされていなかった。",
						"chinese": "一条时间线被解放了，但{random_boss}的阴影仍然盘旋在冰冻的雪原上。他真正的执念尚未揭示。",
						"french": "Une ligne temporelle fut libérée, mais l'ombre de {random_boss} persistait dans les terres gelées. Sa véritable obsession n'avait pas encore été révélée.",
						"spanish": "Una línea temporal fue liberada, pero la sombra de {random_boss} aún permanecía en el páramo helado. Su verdadera obsesión aún no había sido revelada.",
						"vietnamese": "Một dòng thời gian đã được giải thoát, nhưng bóng của {random_boss} vẫn còn vương vấn trên vùng đất tuyết đóng băng. Nỗi ám ảnh thực sự của hắn vẫn chưa được tiết lộ.",
						"thai": "หนึ่งช่วงเวลาถูกปลดปล่อย แต่เงาของ {random_boss} ยังคงอยู่ในดินแดนรกร้างที่เยือกแข็ง ความหลงใหลที่แท้จริงของเขายังไม่ถูกเปิดเผย.",
						"hindi": "एक समयरेखा मुक्त हो गई, लेकिन {random_boss} की छाया अभी भी जमे हुए बंजर भूमि में बनी हुई थी। उसका असली जुनून अभी सामने नहीं आया था।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"영원의 설원, 시간조차 얼어붙은 땅.",
			"그곳에는 순간의 아름다움을 탐하는 자가 있다.",
			"기억은 가장 행복한 형태로 박제되고,",
			"그 완벽한 보존 뒤에는, 비틀린 광기가 도사리고 있었다.",
			"길 잃은 시간을 되돌릴 수 있을까?"
		],
		"english": [
			"Eternal snowfield, a land where even time is frozen.",
			"There, one seeks the beauty of a fleeting moment.",
			"Memories are preserved in their happiest form,",
			"Behind that perfect preservation, lurked a twisted madness.",
			"Can lost time be turned back?"
		],
		"japanese": [
			"永遠の雪原、時間さえ凍りついた地。",
			"そこには、刹那の美しさを貪る者がいる。",
			"記憶は最も幸福な形で剥製にされ、",
			"その完璧な保存の裏には、歪んだ狂気が潜んでいた。",
			"失われた時間を取り戻せるのか？"
		],
		"chinese": [
			"永恒的雪原，连时间都被冻结的土地。",
			"那里，有人贪恋瞬间的美丽。",
			"记忆以最幸福的形式被保存，",
			"在那完美的保存背后，潜藏着扭曲的疯狂。",
			"迷失的时间还能挽回吗？"
		],
		"french": [
			"L'étendue de neige éternelle, une terre où même le temps est gelé.",
			"Là, quelqu'un convoite la beauté d'un instant fugace.",
			"Les souvenirs sont embaumés dans leur forme la plus heureuse,",
			"Derrière cette conservation parfaite, se cachait une folie tordue.",
			"Le temps perdu peut-il être ramené ?"
		],
		"spanish": [
			"La llanura nevada eterna, una tierra donde incluso el tiempo está congelado.",
			"Allí, hay quien anhela la belleza de un instante.",
			"Los recuerdos son embalsamados en su forma más feliz,",
			"Detrás de esa perfecta conservación, acechaba una locura retorcida.",
			"¿Se puede recuperar el tiempo perdido?"
		],
		"vietnamese": [
			"Cánh đồng tuyết vĩnh cửu, vùng đất nơi thời gian cũng bị đóng băng.",
			"Ở đó, có kẻ khao khát vẻ đẹp của khoảnh khắc phù du.",
			"Ký ức được lưu giữ dưới hình thái hạnh phúc nhất,",
			"Đằng sau sự bảo tồn hoàn hảo đó, ẩn chứa một sự điên rồ méo mó.",
			"Liệu thời gian đã mất có thể quay trở lại?"
		],
		"thai": [
			"ทุ่งหิมะนิรันดร์ ดินแดนที่แม้แต่เวลาก็ถูกแช่แข็ง",
			"ณ ที่นั้น มีผู้แสวงหาความงามแห่งช่วงเวลา",
			"ความทรงจำถูกเก็บรักษาในรูปแบบที่มีความสุขที่สุด",
			"เบื้องหลังการเก็บรักษาที่สมบูรณ์แบบนั้น มีความบ้าคลั่งที่บิดเบี้ยวซ่อนอยู่",
			"เวลาที่หายไปจะย้อนกลับมาได้หรือไม่?"
		],
		"hindi": [
			"अनंत हिमक्षेत्र, एक ऐसी भूमि जहाँ समय भी जम गया है।",
			"वहाँ, एक ऐसा व्यक्ति है जो क्षणिक सुंदरता को ललचाता है।",
			"यादें अपने सबसे सुखद रूप में संरक्षित हैं,",
			"उस सही संरक्षण के पीछे, एक मुड़ी हुई सनक छिपी हुई थी।",
			"क्या खोया हुआ समय वापस लाया जा सकता है?"
		]
	}
} as const;
