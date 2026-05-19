export const scenario_snowy_archduke_finn_aftermath_03 = {
	"scenario_id": "snowy_archduke_finn_aftermath_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"borealis": {
			"id": "mon_8dc13eb3-9244-4413-a74b-ee25681ceab5",
			"name": {
				"korean": "보레아리스",
				"english": "Borealis",
				"japanese": "ボレアリス",
				"chinese": "博瑞利斯",
				"french": "Boréalis",
				"spanish": "Borealis",
				"vietnamese": "Borealis",
				"thai": "โบเรียลิส",
				"hindi": "बोरियालिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bd557ed6-ee94-4ed6-7da8-6f9770585b00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2a79793b-650a-478a-00e2-38f8c8730a00/public"
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
						"korean": "차가운 빙하 속, 발걸음은 더 깊은 곳으로 향했다.",
						"english": "Within the cold glacier, footsteps headed deeper.",
						"japanese": "冷たい氷河の中、足跡はさらに奥へと向かった。",
						"chinese": "在寒冷的冰川中，脚步声走向更深处。",
						"french": "Dans le froid glacier, les pas s'enfonçaient plus profondément.",
						"spanish": "Dentro del frío glaciar, los pasos se dirigieron más profundo.",
						"vietnamese": "Trong sông băng lạnh giá, bước chân tiến sâu hơn.",
						"thai": "ท่ามกลางธารน้ำแข็งอันหนาวเหน็บ, รอยเท้าพาไปสู่ส่วนที่ลึกกว่า.",
						"hindi": "ठंडे ग्लेशियर के भीतर, कदम गहरे अंदर की ओर बढ़े।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "borealis",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…왔군. 예상보다 늦었어.",
						"english": "...You've come. Later than expected.",
						"japanese": "…来たか。思ったより遅いな。",
						"chinese": "……你来了。比预料的晚。",
						"french": "...Tu es là. Plus tard que prévu.",
						"spanish": "...Has llegado. Más tarde de lo esperado.",
						"vietnamese": "...Ngươi đã đến. Muộn hơn dự kiến.",
						"thai": "...มาแล้วสินะ. ช้ากว่าที่คาดไว้.",
						"hindi": "...तुम आ गए। अनुमान से देर हो गई।"
					},
					"speaker": "borealis",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누구냐.",
						"english": "Who are you?",
						"japanese": "誰だ。",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใคร?",
						"hindi": "तुम कौन हो?"
					}
				},
				{
					"content": {
						"korean": "보레아리스. 빙하의 심장을 쫓는 자.",
						"english": "Borealis. The one who chases the heart of the glacier.",
						"japanese": "ボレアリス。氷河の心臓を追う者。",
						"chinese": "博瑞利斯。追逐冰川之心的人。",
						"french": "Boréalis. Celle qui poursuit le cœur du glacier.",
						"spanish": "Borealis. La que persigue el corazón del glaciar.",
						"vietnamese": "Borealis. Kẻ truy đuổi trái tim sông băng.",
						"thai": "โบเรอาลิส. ผู้ไล่ล่าหัวใจของธารน้ำแข็ง.",
						"hindi": "बोरेलिस। ग्लेशियर के दिल का पीछा करने वाला।"
					},
					"type": "speech",
					"speaker": "borealis",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이곳이… 죽어가고 있어.",
						"english": "This place... is dying.",
						"japanese": "ここが…死にかけている。",
						"chinese": "这里……正在死去。",
						"french": "Cet endroit… est en train de mourir.",
						"spanish": "Este lugar… está muriendo.",
						"vietnamese": "Nơi này... đang chết dần.",
						"thai": "ที่นี่... กำลังจะตาย.",
						"hindi": "यह जगह... मर रही है।"
					},
					"type": "speech",
					"speaker": "borealis",
					"emotion": "sad"
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
					"duration_ms": 500,
					"speaker": "borealis",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…이걸 봐.",
						"english": "...Look at this.",
						"japanese": "…これを見ろ。",
						"chinese": "……看这个。",
						"french": "...Regarde ça.",
						"spanish": "...Mira esto.",
						"vietnamese": "...Hãy nhìn cái này.",
						"thai": "...ดูนี่สิ.",
						"hindi": "...इसे देखो।"
					},
					"speaker": "borealis",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "버려진 탐험 장비 조각들. 낡고 해진 채 빙하에 박혀 있었다.",
						"english": "Pieces of abandoned expedition equipment. Old and worn, embedded in the glacier.",
						"japanese": "捨てられた探検装備の破片。古く朽ちて、氷河に埋まっていた。",
						"chinese": "废弃的探险装备碎片。陈旧破损地嵌在冰川中。",
						"french": "Des morceaux d'équipement d'expédition abandonné. Vieux et usés, incrustés dans le glacier.",
						"spanish": "Piezas de equipo de expedición abandonado. Viejas y gastadas, incrustadas en el glaciar.",
						"vietnamese": "Những mảnh thiết bị thám hiểm bị bỏ rơi. Cũ kỹ và sờn rách, kẹt trong sông băng.",
						"thai": "ชิ้นส่วนอุปกรณ์สำรวจที่ถูกทิ้งร้าง. เก่าและทรุดโทรม, ฝังอยู่ในธารน้ำแข็ง.",
						"hindi": "छोड़े गए अभियान उपकरण के टुकड़े। पुराने और घिसे हुए, ग्लेशियर में जमे हुए थे।"
					}
				},
				{
					"content": {
						"korean": "고대 탐사대…?",
						"english": "Ancient expedition...?",
						"japanese": "古代探検隊…？",
						"chinese": "古代探险队…？",
						"french": "Expédition ancienne...?",
						"spanish": "¿Expedición antigua...?",
						"vietnamese": "Đoàn thám hiểm cổ đại...?",
						"thai": "หน่วยสำรวจโบราณ...?",
						"hindi": "प्राचीन अभियान दल...?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 그들도 심장을 찾았지. 그러나… 실패했어.",
						"english": "Yes. They also found the Heart. But... they failed.",
						"japanese": "ええ。彼らも心臓を見つけました。しかし…失敗しました。",
						"chinese": "是的。他们也找到了心脏。但是……失败了。",
						"french": "Oui. Eux aussi ont trouvé le Cœur. Mais... ils ont échoué.",
						"spanish": "Sí. Ellos también encontraron el Corazón. Pero... fallaron.",
						"vietnamese": "Đúng vậy. Họ cũng đã tìm thấy Trái Tim. Nhưng... họ đã thất bại.",
						"thai": "ใช่ พวกเขาเจอหัวใจเหมือนกัน แต่...พวกเขาทำไม่สำเร็จ",
						"hindi": "हाँ। उन्होंने भी हृदय ढूँढा था। पर... वे असफल रहे।"
					},
					"type": "speech",
					"speaker": "borealis",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "지금… 누군가 다시 심장을 노리고 있어.",
						"english": "Now... someone is after the Heart again.",
						"japanese": "今…誰かが再び心臓を狙っている。",
						"chinese": "现在……有人再次盯上了心脏。",
						"french": "Maintenant... quelqu'un vise à nouveau le Cœur.",
						"spanish": "Ahora... alguien busca el Corazón de nuevo.",
						"vietnamese": "Bây giờ... ai đó lại đang nhắm vào Trái Tim.",
						"thai": "ตอนนี้...มีคนกำลังเล็งหัวใจอีกครั้ง",
						"hindi": "अब... कोई फिर से हृदय पर नज़र गड़ाए हुए है।"
					},
					"type": "speech",
					"speaker": "borealis",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "borealis",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "borealis",
					"emotion": "base",
					"content": {
						"korean": "빙하의 심장은… 설산의 생명 그 자체야.",
						"english": "The Glacier's Heart... is the very life of the snow mountain.",
						"japanese": "氷河の心臓は…雪山の生命そのものだ。",
						"chinese": "冰川之心……是雪山生命的本身。",
						"french": "Le Cœur du Glacier... est la vie même de la montagne enneigée.",
						"spanish": "El Corazón del Glaciar... es la vida misma de la montaña nevada.",
						"vietnamese": "Trái Tim Băng Giá... là sự sống của núi tuyết.",
						"thai": "หัวใจแห่งธารน้ำแข็ง...คือชีวิตของภูเขาหิมะ",
						"hindi": "ग्लेशियर का हृदय... हिम पर्वत का जीवन ही है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누가 이걸 노린다는 거지?",
						"english": "Who is after this?",
						"japanese": "誰がこれを狙っているんだ？",
						"chinese": "谁在觊觎这个？",
						"french": "Qui vise cela ?",
						"spanish": "¿Quién busca esto?",
						"vietnamese": "Ai đang nhắm vào điều này?",
						"thai": "ใครกำลังเล็งสิ่งนี้อยู่?",
						"hindi": "कौन इस पर नज़र गड़ाए हुए है?"
					}
				},
				{
					"content": {
						"korean": "욕심 많은 자들. 이 설산을 집어삼키려는… 괴물.",
						"english": "Greedy ones. Monsters... who seek to devour this snow mountain.",
						"japanese": "貪欲な者たち。この雪山を飲み込もうとする…怪物。",
						"chinese": "贪婪之徒。企图吞噬这座雪山的……怪物。",
						"french": "Les avides. Des monstres... qui cherchent à dévorer cette montagne enneigée.",
						"spanish": "Los codiciosos. Monstruos... que buscan devorar esta montaña nevada.",
						"vietnamese": "Những kẻ tham lam. Những con quái vật... muốn nuốt chửng núi tuyết này.",
						"thai": "พวกโลภมาก สัตว์ประหลาด...ที่ต้องการกลืนกินภูเขาหิมะแห่งนี้",
						"hindi": "लालची लोग। राक्षस... जो इस हिम पर्वत को निगल जाना चाहते हैं।"
					},
					"type": "speech",
					"speaker": "borealis",
					"emotion": "angry"
				},
				{
					"speaker": "borealis",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그들은 곧 여기 도착할 거야.",
						"english": "They will arrive here soon.",
						"japanese": "彼らはもうすぐここに着く。",
						"chinese": "他们很快就会到这里。",
						"french": "Ils arriveront bientôt ici.",
						"spanish": "Llegarán aquí pronto.",
						"vietnamese": "Họ sẽ sớm đến đây.",
						"thai": "พวกเขาจะมาถึงที่นี่ในไม่ช้า",
						"hindi": "वे जल्द ही यहाँ पहुँचेंगे।"
					}
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
					"speaker": "borealis",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "더 이상 물러설 곳은 없어.",
						"english": "There's no turning back now.",
						"japanese": "もう後には引けない。",
						"chinese": "已无退路。",
						"french": "Il n'y a plus de retour en arrière.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Không còn đường lùi nữa.",
						"thai": "ไม่มีที่ให้ถอยอีกแล้ว",
						"hindi": "अब और पीछे हटने की जगह नहीं।"
					},
					"speaker": "borealis",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "빙하의 심장은 우리가 지킨다.",
						"english": "We will protect the Glacier's Heart.",
						"japanese": "氷河の心臓は私たちが守る。",
						"chinese": "冰川之心由我们守护。",
						"french": "Nous protégerons le Cœur du Glacier.",
						"spanish": "Protegeremos el Corazón del Glaciar.",
						"vietnamese": "Chúng ta sẽ bảo vệ Trái Tim Băng Giá.",
						"thai": "เราจะปกป้องหัวใจแห่งธารน้ำแข็ง",
						"hindi": "हम ग्लेशियर के हृदय की रक्षा करेंगे।"
					}
				},
				{
					"content": {
						"korean": "늦기 전에… 막아야 해.",
						"english": "Before it's too late... we must stop them.",
						"japanese": "手遅れになる前に…止めなければならない。",
						"chinese": "在为时已晚之前……必须阻止。",
						"french": "Avant qu'il ne soit trop tard... nous devons les arrêter.",
						"spanish": "Antes de que sea tarde... debemos detenerlos.",
						"vietnamese": "Trước khi quá muộn... chúng ta phải ngăn chặn.",
						"thai": "ก่อนจะสายเกินไป...เราต้องหยุดพวกเขา",
						"hindi": "इससे पहले कि बहुत देर हो जाए... हमें उन्हें रोकना होगा।"
					},
					"speaker": "borealis",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 빙하 심장부의 입구를 가로막았다.",
						"english": "A massive shadow blocked the entrance to the Glacier's Heart.",
						"japanese": "巨大な影が氷河の心臓部への入口を塞いでいた。",
						"chinese": "巨大的身影挡住了冰川之心的入口。",
						"french": "Une ombre gigantesque bloquait l'entrée du Cœur du Glacier.",
						"spanish": "Una sombra gigantesca bloqueaba la entrada al Corazón del Glaciar.",
						"vietnamese": "Một bóng đen khổng lồ chặn lối vào trái tim sông băng.",
						"thai": "เงาขนาดมหึมาบดบังทางเข้าสู่ใจกลางธารน้ำแข็ง",
						"hindi": "एक विशाल छाया ने ग्लेशियर के हृदय के प्रवेश द्वार को अवरुद्ध कर दिया।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 감히 나의 길을 막으려 하는가.",
						"english": "Fools. Do you dare block my path?",
						"japanese": "愚かな者たちめ。よくもこの私の道を阻もうとするか。",
						"chinese": "蠢货。竟敢阻碍我的道路。",
						"french": "Imbéciles. Osez-vous barrer mon chemin ?",
						"spanish": "Necios. ¿Os atrevéis a interponeros en mi camino?",
						"vietnamese": "Những kẻ ngu ngốc. Dám cản đường ta sao?",
						"thai": "พวกโง่เง่า! กล้าดียังไงมาขวางทางข้า!",
						"hindi": "मूर्खों। क्या तुम मेरी राह रोकने की हिम्मत करते हो?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 빙하의 심장을 노리는 자냐!",
						"english": "Are you the one after the Glacier's Heart?!",
						"japanese": "貴様が氷河の心臓を狙う者か！",
						"chinese": "你就是觊觎冰川之心的人吗！",
						"french": "Es-tu celui qui convoite le Cœur du Glacier ?!",
						"spanish": "¿¡Eres tú quien busca el Corazón del Glaciar?!",
						"vietnamese": "Ngươi là kẻ đang nhắm vào Trái tim Sông băng sao!",
						"thai": "เจ้าคือผู้ที่หมายปองใจกลางธารน้ำแข็งงั้นรึ!",
						"hindi": "क्या तुम ग्लेशियर के हृदय की तलाश में हो?!"
					}
				},
				{
					"content": {
						"korean": "빙하의 심장은 나의 것이다. 이제 곧… 완전해질 테지.",
						"english": "The Glacier's Heart is mine. Soon... it will be complete.",
						"japanese": "氷河の心臓は私のものだ。もうすぐ…完全になるだろう。",
						"chinese": "冰川之心是我的。很快……它就会完整。",
						"french": "Le Cœur du Glacier est mien. Bientôt... il sera complet.",
						"spanish": "El Corazón del Glaciar es mío. Pronto... estará completo.",
						"vietnamese": "Trái tim Sông băng là của ta. Chẳng mấy chốc… nó sẽ hoàn chỉnh.",
						"thai": "ใจกลางธารน้ำแข็งเป็นของข้า อีกไม่นาน…มันจะสมบูรณ์",
						"hindi": "ग्लेशियर का हृदय मेरा है। जल्द ही... यह पूर्ण हो जाएगा।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "borealis",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "borealis",
					"emotion": "angry",
					"content": {
						"korean": "저것이… 심장을 집어삼키려 해!",
						"english": "That thing... it's trying to devour the Heart!",
						"japanese": "あれが…心臓を飲み込もうとしている！",
						"chinese": "那个……它想吞噬心脏！",
						"french": "Ça... ça essaie de dévorer le Cœur !",
						"spanish": "¡Eso... intenta devorar el Corazón!",
						"vietnamese": "Cái thứ đó… nó đang cố nuốt chửng Trái tim!",
						"thai": "เจ้านั่น…มันกำลังจะกลืนกินหัวใจ!",
						"hindi": "वह चीज़... वह हृदय को निगलने की कोशिश कर रही है!"
					}
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "borealis",
					"type": "direction"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이대로 끝나지 않는다… {random_boss}는… 돌아올 것이다…!",
						"english": "Ugh... it won't end like this... {random_boss} will... return...!",
						"japanese": "くっ…このままでは終わらぬ…{random_boss}は…戻ってくるだろう…！",
						"chinese": "呃啊……不会就这样结束……{random_boss}会……回来的……！",
						"french": "Ugh... ça ne finira pas ainsi... {random_boss} reviendra... !",
						"spanish": "¡Ugh... no terminará así... {random_boss} regresará...!",
						"vietnamese": "Khụ… sẽ không kết thúc thế này đâu… {random_boss} sẽ… trở lại…!",
						"thai": "อึก…มันจะไม่จบลงแค่นี้… {random_boss} จะ…กลับมา…!",
						"hindi": "उफ़... यह ऐसे खत्म नहीं होगा... {random_boss} वापस... आएगा...!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝났나? 빙하의 심장은…",
						"english": "Is it over? The Glacier's Heart...",
						"japanese": "終わったのか？氷河の心臓は…",
						"chinese": "结束了吗？冰川之心……",
						"french": "C'est fini ? Le Cœur du Glacier...",
						"spanish": "¿Terminó? El Corazón del Glaciar...",
						"vietnamese": "Kết thúc rồi sao? Trái tim Sông băng…",
						"thai": "จบแล้วรึ? ใจกลางธารน้ำแข็ง…",
						"hindi": "क्या यह खत्म हो गया? ग्लेशियर का हृदय..."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빙하의 속삭임은 멈췄지만, 여전히 깊은 불안감이 감돌았다.",
						"english": "The whispers of the glacier ceased, but a deep unease lingered.",
						"japanese": "氷河の囁きは止んだが、深い不安感が残っていた。",
						"chinese": "冰川的低语停止了，但深沉的不安感依然萦绕。",
						"french": "Les murmures du glacier cessèrent, mais une profonde inquiétude demeurait.",
						"spanish": "Los susurros del glaciar cesaron, pero una profunda inquietud persistía.",
						"vietnamese": "Lời thì thầm của sông băng đã ngừng, nhưng một nỗi bất an sâu sắc vẫn còn đọng lại.",
						"thai": "เสียงกระซิบของธารน้ำแข็งหยุดลงแล้ว แต่ความรู้สึกไม่สบายใจยังคงอยู่",
						"hindi": "ग्लेशियर की फुसफुसाहट बंद हो गई, लेकिन एक गहरी बेचैनी बनी रही।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "빙하의 심장은 잠시 숨을 돌렸을 뿐, 위협은 아직 끝나지 않았다.",
						"english": "The Glacier's Heart merely caught its breath; the threat is not yet over.",
						"japanese": "氷河の心臓は一時的に息を吹き返したに過ぎず、脅威はまだ終わっていない。",
						"chinese": "冰川之心只是暂时喘息，威胁尚未结束。",
						"french": "Le Cœur du Glacier n'a fait que reprendre son souffle ; la menace n'est pas encore terminée.",
						"spanish": "El Corazón del Glaciar solo tomó un respiro; la amenaza aún no ha terminado.",
						"vietnamese": "Trái tim Sông băng chỉ vừa lấy lại hơi thở; mối đe dọa vẫn chưa kết thúc.",
						"thai": "ใจกลางธารน้ำแข็งแค่ได้พักหายใจชั่วครู่ ภัยคุกคามยังไม่จบลง",
						"hindi": "ग्लेशियर के हृदय ने केवल साँस ली; खतरा अभी खत्म नहीं हुआ है।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "풋… 겨우 이 정도인가? 심장은 나의 것이 될 것이다.",
						"english": "Hmph... Is this all you've got? The Heart will be mine.",
						"japanese": "フッ…この程度か？心臓は私のものとなるだろう。",
						"chinese": "哼……就这点本事吗？心脏将是我的。",
						"french": "Pff... C'est tout ce que tu as ? Le Cœur sera mien.",
						"spanish": "Pff... ¿Es todo lo que tienes? El Corazón será mío.",
						"vietnamese": "Hừm… Chỉ có thế này thôi sao? Trái tim sẽ là của ta.",
						"thai": "หึ…แค่นี้เองรึ? ใจกลางมันจะต้องเป็นของข้า",
						"hindi": "हुंह... बस इतना ही? हृदय मेरा होगा।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크윽… 아직 포기하지 않아…!",
						"english": "Ugh... I won't give up yet!",
						"japanese": "くっ…まだ諦めない…！",
						"chinese": "呃…我还没放弃…！",
						"french": "Ugh... Je n'abandonnerai pas encore !",
						"spanish": "Uf... ¡Aún no me rindo!",
						"vietnamese": "Ư... Ta vẫn chưa bỏ cuộc đâu!",
						"thai": "อึก... ข้ายังไม่ยอมแพ้!",
						"hindi": "उफ़... मैं अभी हार नहीं मानूँगा!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"빙하의 속삭임. 설산 가장 깊은 곳에서 들려오는 소리.",
			"오래된 탐사대의 흔적. 그리고… 죽어가는 심장.",
			"수수께끼의 탐험가가 나타났다. 그녀는 모든 것을 알고 있는 듯했다."
		],
		"english": [
			"Whispers of the glacier. Sounds from the deepest part of the snow mountain.",
			"Traces of an old expedition. And... a dying heart.",
			"A mysterious explorer appeared. She seemed to know everything."
		],
		"japanese": [
			"氷河のささやき。雪山の最も深い場所から聞こえる音。",
			"古い探検隊の痕跡。そして…死につつある心臓。",
			"謎の探検家が現れた。彼女はすべてを知っているようだった。"
		],
		"chinese": [
			"冰川的低语。来自雪山最深处的声音。",
			"古老探险队的痕迹。以及……一颗正在死去的心。",
			"一位神秘的探险家出现了。她似乎知晓一切。"
		],
		"french": [
			"Murmures du glacier. Des sons provenant du plus profond de la montagne enneigée.",
			"Traces d'une ancienne expédition. Et… un cœur mourant.",
			"Une exploratrice mystérieuse est apparue. Elle semblait tout savoir."
		],
		"spanish": [
			"Susurros del glaciar. Sonidos desde lo más profundo de la montaña nevada.",
			"Huellas de una antigua expedición. Y… un corazón agonizante.",
			"Una exploradora misteriosa apareció. Parecía saberlo todo."
		],
		"vietnamese": [
			"Lời thì thầm của sông băng. Âm thanh vọng về từ sâu thẳm nhất của núi tuyết.",
			"Dấu vết của một đoàn thám hiểm cũ. Và... một trái tim đang chết dần.",
			"Một nhà thám hiểm bí ẩn xuất hiện. Cô ấy dường như biết mọi thứ."
		],
		"thai": [
			"เสียงกระซิบของธารน้ำแข็ง. เสียงที่มาจากส่วนลึกที่สุดของภูเขาหิมะ.",
			"ร่องรอยของคณะสำรวจเก่า. และ... หัวใจที่กำลังจะตาย.",
			"นักสำรวจปริศนาปรากฏตัวขึ้น. เธอราวกับรู้ทุกสิ่ง."
		],
		"hindi": [
			"ग्लेशियर की फुसफुसाहट। बर्फीले पहाड़ के सबसे गहरे हिस्से से आती आवाज़।",
			"एक पुराने अभियान के निशान। और… एक मरता हुआ दिल।",
			"एक रहस्यमयी अन्वेषक प्रकट हुई। वह सब कुछ जानती हुई प्रतीत होती थी।"
		]
	}
} as const;
