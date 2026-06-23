export const scenario_forest_chant_24_03 = {
	"scenario_id": "forest_chant_24_03",
	"order": 3,
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
		},
		"ela": {
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
		},
		"bracken": {
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
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
						"korean": "오랜 숲은 병들어가고 있었다. 생명의 흔적마저 희미해졌다.",
						"english": "The ancient forest was ailing. Even traces of life were fading.",
						"japanese": "古の森は病んでいた。生命の痕跡さえも薄れていった。",
						"chinese": "古老的森林病了。生命的痕迹也已模糊。",
						"french": "L'ancienne forêt était malade. Même les traces de vie s'estompaient.",
						"spanish": "El antiguo bosque estaba enfermo. Incluso los rastros de vida se desvanecían.",
						"vietnamese": "Rừng già đang bệnh. Ngay cả dấu vết của sự sống cũng mờ nhạt.",
						"thai": "ป่าโบราณกำลังป่วยไข้ แม้แต่ร่องรอยของชีวิตก็เลือนหายไป",
						"hindi": "पुराना जंगल बीमार पड़ रहा था। जीवन के निशान भी फीके पड़ गए थे।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 대체… 무슨 일이야?",
						"english": "What in the world… is happening?",
						"japanese": "これはいったい…どういうことだ？",
						"chinese": "这究竟…是怎么回事？",
						"french": "Mais qu'est-ce que… qu'est-ce qui se passe ?",
						"spanish": "Pero qué demonios… ¿está pasando?",
						"vietnamese": "Chuyện gì… đang xảy ra vậy?",
						"thai": "นี่มัน…เกิดอะไรขึ้น?",
						"hindi": "यह सब… क्या हो रहा है?"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"speaker": "ela",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…왔구나. 숲은 경고하고 있어. 이대로는 안 돼.",
						"english": "…You've come. The forest is warning us. This can't continue.",
						"japanese": "…来たか。森が警告している。このままではいけない。",
						"chinese": "…你来了。森林在警告。不能再这样下去。",
						"french": "…Tu es là. La forêt nous met en garde. Ça ne peut pas continuer ainsi.",
						"spanish": "…Has venido. El bosque nos advierte. Esto no puede seguir así.",
						"vietnamese": "…Ngươi đã đến. Rừng đang cảnh báo. Không thể tiếp tục thế này.",
						"thai": "…มาแล้วสินะ ป่ากำลังเตือนเรา ไม่สามารถปล่อยให้เป็นแบบนี้ต่อไปได้",
						"hindi": "…तुम आ गए। जंगल चेतावनी दे रहा है। यह ऐसे नहीं चल सकता।"
					},
					"speaker": "ela",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "유물에서 느껴지는 이 슬픔은 뭐지?",
						"english": "What is this sorrow I feel from the relic?",
						"japanese": "遺物から感じるこの悲しみは何だ？",
						"chinese": "从遗物中感受到的这份悲伤是什么？",
						"french": "Quelle est cette tristesse que je ressens de l'artefact ?",
						"spanish": "¿Qué es esta tristeza que siento del artefacto?",
						"vietnamese": "Nỗi buồn này tôi cảm nhận từ di vật là gì?",
						"thai": "ความโศกเศร้าที่สัมผัสได้จากวัตถุโบราณนี้คืออะไร?",
						"hindi": "अवशेष से मुझे यह कैसा दुख महसूस हो रहा है?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 이상 현상은 가속화되었다. 기이한 이끼 덩굴이 사방을 뒤덮었다.",
						"english": "The forest's anomalies accelerated. Strange mossy vines covered everything.",
						"japanese": "森の異変は加速した。奇妙な苔の蔓が四方を覆った。",
						"chinese": "森林的异象加速了。奇异的苔藓藤蔓覆盖了四面八方。",
						"french": "Les anomalies de la forêt s'accéléraient. D'étranges lianes de mousse recouvraient tout.",
						"spanish": "Las anomalías del bosque se aceleraron. Extrañas enredaderas de musgo cubrían todo.",
						"vietnamese": "Hiện tượng bất thường của rừng tăng tốc. Những dây leo rêu kỳ lạ bao trùm khắp nơi.",
						"thai": "ปรากฏการณ์ผิดปกติของป่าเร่งตัวขึ้น เถาวัลย์มอสแปลกประหลาดปกคลุมไปทั่วทุกทิศทาง",
						"hindi": "जंगल की विसंगतियाँ तेज़ हो गईं। अजीब काई वाली लताएँ चारों ओर फैल गईं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 악화되고 있어… 시간이 없어.",
						"english": "It's getting worse… There's no time.",
						"japanese": "ますます悪化している…時間がない。",
						"chinese": "情况越来越糟了……没时间了。",
						"french": "Ça empire… Il n'y a plus de temps.",
						"spanish": "Está empeorando… No hay tiempo.",
						"vietnamese": "Mọi thứ đang tệ hơn… Không còn thời gian nữa.",
						"thai": "มันกำลังแย่ลงเรื่อยๆ… ไม่มีเวลาแล้ว",
						"hindi": "यह और बिगड़ रहा है… समय नहीं है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "…잊혀진 대제사장의 비극. 금지된 마법. 기록이 말하고 있다.",
						"english": "...The tragedy of the forgotten High Priest. Forbidden magic. The records speak.",
						"japanese": "...忘れ去られた大神官の悲劇。禁じられた魔法。記録が語っている。",
						"chinese": "...被遗忘的大祭司的悲剧。禁忌魔法。记录正在诉说。",
						"french": "...La tragédie du Grand Prêtre oublié. Magie interdite. Les archives parlent.",
						"spanish": "...La tragedia del Sumo Sacerdote olvidado. Magia prohibida. Los registros hablan.",
						"vietnamese": "...Bi kịch của Đại tư tế bị lãng quên. Phép thuật cấm. Các ghi chép đang nói.",
						"thai": "...โศกนาฏกรรมของมหาปุโรหิตที่ถูกลืม เวทมนตร์ต้องห้าม บันทึกกำลังบอกเล่า",
						"hindi": "...भूले हुए महायाजक की त्रासदी। वर्जित जादू। अभिलेख बता रहे हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "환영… 머리가 아파와.",
						"english": "Visions... My head aches.",
						"japanese": "幻影… 頭が痛い。",
						"chinese": "幻象… 头好痛。",
						"french": "Visions... Ma tête me fait mal.",
						"spanish": "Visiones... Me duele la cabeza.",
						"vietnamese": "Ảo ảnh… Đầu tôi đau quá.",
						"thai": "ภาพหลอน... ฉันปวดหัว",
						"hindi": "दृष्टि... मेरा सिर दुख रहा है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 핵심 지역. 광기에 사로잡힌 동물들의 비명이 울려 퍼졌다.",
						"english": "The forest's core. Screams of animals, gripped by madness, echoed.",
						"japanese": "森の核心部。狂気に囚われた動物たちの悲鳴が響き渡った。",
						"chinese": "森林核心区。被疯狂吞噬的动物们发出尖叫。",
						"french": "Le cœur de la forêt. Les cris des animaux, saisis de folie, résonnaient.",
						"spanish": "El núcleo del bosque. Gritos de animales, presos de la locura, resonaban.",
						"vietnamese": "Khu vực cốt lõi của rừng. Tiếng la hét của những con vật bị sự điên loạn chiếm hữu vang vọng.",
						"thai": "ใจกลางป่า เสียงกรีดร้องของสัตว์ที่ถูกความบ้าคลั่งเข้าครอบงำดังก้อง",
						"hindi": "जंगल का मुख्य क्षेत्र। पागलपन से ग्रस्त जानवरों की चीखें गूँज रही थीं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "briar",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "안 돼… 진정해…!",
						"english": "No... Calm down...!",
						"japanese": "だめだ… 落ち着いて…！",
						"chinese": "不行… 冷静下来…！",
						"french": "Non... Calme-toi...!",
						"spanish": "No... Cálmate...!",
						"vietnamese": "Không... Bình tĩnh lại...!",
						"thai": "ไม่นะ... ใจเย็นๆ...!",
						"hindi": "नहीं... शांत हो जाओ...!"
					},
					"speaker": "briar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그때, 유물에서 섬뜩한 진동과 함께 숲의 생명력이 빨려 들어가는 것이 보였다.",
						"english": "Then, with an eerie vibration from the artifact, the forest's life force was seen being drained away.",
						"japanese": "その時、遺物から不気味な振動と共に、森の生命力が吸い取られていくのが見えた。",
						"chinese": "那时，伴随着文物的诡异震动，森林的生命力被吸走。",
						"french": "Alors, avec une étrange vibration de l'artefact, on vit la force vitale de la forêt être aspirée.",
						"spanish": "Entonces, con una vibración espeluznante del artefacto, se vio cómo la fuerza vital del bosque era drenada.",
						"vietnamese": "Sau đó, với một rung động kỳ lạ từ vật phẩm, sinh lực của khu rừng dường như bị hút cạn.",
						"thai": "จากนั้น ด้วยการสั่นสะเทือนที่น่าขนลุกจากวัตถุโบราณ พลังชีวิตของป่าถูกดูดออกไป",
						"hindi": "फिर, कलाकृति से एक अजीब कंपन के साथ, जंगल की जीवन शक्ति को सूखते हुए देखा गया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이럴 수가… 숲이… 죽어가고 있어…!",
						"english": "Oh no... The forest... it's dying...!",
						"japanese": "まさか… 森が… 死んでいく…！",
						"chinese": "天啊… 森林… 正在死去…！",
						"french": "Oh non... La forêt... elle est en train de mourir...!",
						"spanish": "¡Oh no... El bosque... está muriendo...!",
						"vietnamese": "Ôi không... Rừng... nó đang chết dần...!",
						"thai": "ไม่นะ... ป่ากำลัง... ตายลง...!",
						"hindi": "ओह नहीं... जंगल... मर रहा है...!"
					},
					"speaker": "briar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하나… 전부… 합쳐진다… 영원히…",
						"english": "One... all... merge... forever...",
						"japanese": "一つに… 全てが… 溶け合う… 永遠に…",
						"chinese": "一个… 全部… 合并… 永远…",
						"french": "Un... tout... fusionne... pour toujours...",
						"spanish": "Uno... todo... se fusiona... para siempre...",
						"vietnamese": "Một... tất cả... hợp nhất... mãi mãi...",
						"thai": "หนึ่ง... ทั้งหมด... รวมกัน... ตลอดไป...",
						"hindi": "एक... सब... विलय... हमेशा के लिए..."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 유물이… 숲을… 이용하고 있었어…",
						"english": "This artifact... it was using... the forest...",
						"japanese": "この遺物が… 森を… 利用していたんだ。",
						"chinese": "这个文物… 正在利用… 森林…",
						"french": "Cet artefact... utilisait... la forêt...",
						"spanish": "Este artefacto... estaba usando... el bosque...",
						"vietnamese": "Vật phẩm này... nó đang lợi dụng... khu rừng...",
						"thai": "วัตถุโบราณนี้... มันกำลัง... ใช้ประโยชน์จากป่า...",
						"hindi": "यह कलाकृति... जंगल का... उपयोग कर रही थी..."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "카운트다운이 거의 끝났다. 숲은 죽음의 그림자에 덮여갔다.",
						"english": "The countdown is almost over. The forest was covered by the shadow of death.",
						"japanese": "カウントダウンはほぼ終わった。森は死の影に覆われていった。",
						"chinese": "倒计时即将结束。森林被死亡的阴影笼罩。",
						"french": "Le compte à rebours est presque terminé. La forêt fut recouverte par l'ombre de la mort.",
						"spanish": "La cuenta atrás está casi terminada. El bosque fue cubierto por la sombra de la muerte.",
						"vietnamese": "Đếm ngược gần kết thúc. Rừng bị bao phủ bởi bóng tối của cái chết.",
						"thai": "การนับถอยหลังใกล้จะสิ้นสุดลง ป่าถูกปกคลุมด้วยเงาแห่งความตาย",
						"hindi": "उलटी गिनती लगभग खत्म हो गई है। जंगल मौत की छाया से ढक गया था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "더 이상… 막을 수가 없어. 유물의 힘이 너무 강해…",
						"english": "Can't stop it... anymore. The artifact's power is too strong...",
						"japanese": "もう… 止められない。遺物の力が強すぎる。",
						"chinese": "无法再… 阻止了。文物的力量太强了…",
						"french": "Impossible de l'arrêter... désormais. Le pouvoir de l'artefact est trop fort...",
						"spanish": "No puedo detenerlo... más. El poder del artefacto es demasiado fuerte...",
						"vietnamese": "Không thể ngăn cản... nữa. Sức mạnh của vật phẩm quá lớn...",
						"thai": "หยุดมันไม่ได้... อีกแล้ว พลังของวัตถุโบราณแข็งแกร่งเกินไป...",
						"hindi": "अब और... रोक नहीं सकता। कलाकृति की शक्ति बहुत प्रबल है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "…추방당한 대제사장. 우리의 죄였어.",
						"english": "...The exiled High Priest. It was our sin.",
						"japanese": "...追放された大神官。我々の罪だった。",
						"chinese": "...被放逐的大祭司。那是我们的罪孽。",
						"french": "...Le Grand Prêtre exilé. C'était notre péché.",
						"spanish": "...El Sumo Sacerdote exiliado. Fue nuestro pecado.",
						"vietnamese": "...Đại Tư Tế bị trục xuất. Đó là tội lỗi của chúng ta.",
						"thai": "...มหาปุโรหิตผู้ถูกเนรเทศ มันคือบาปของเรา",
						"hindi": "...निर्वासित महायाजक। यह हमारा पाप था।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "유물은 거대한 뿌리처럼 숲을 휘감으며 모든 생명력을 집어삼키려 했다.",
						"english": "The artifact, like giant roots, entangled the forest, threatening to devour all life force.",
						"japanese": "遺物は巨大な根のように森を巻き込み、すべての生命力を飲み込もうとしていた。",
						"chinese": "遗物如巨根般缠绕森林，试图吞噬所有生命力。",
						"french": "L'artefact, telle une racine géante, s'enroulait autour de la forêt, menaçant de dévorer toute force vitale.",
						"spanish": "El artefacto, como raíces gigantes, envolvió el bosque, amenazando con devorar toda la fuerza vital.",
						"vietnamese": "Cổ vật, như những rễ cây khổng lồ, cuốn lấy khu rừng, đe dọa nuốt chửng mọi sinh lực.",
						"thai": "วัตถุโบราณเหมือนรากไม้ขนาดยักษ์พันรอบป่า พยายามจะกลืนกินพลังชีวิตทั้งหมด",
						"hindi": "कलाकृति, विशाल जड़ों की तरह, जंगल को घेर रही थी, सभी जीवन शक्ति को निगलने की धमकी दे रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "크윽… 잠시 멈출 뿐… 영원한 것은… 나다…",
						"english": "Ugh... Merely a temporary halt... I am... the eternal one...",
						"japanese": "ぐっ…一時的に止まるだけ…永遠なるは…私だ…",
						"chinese": "呃...只是暂时的停止...永恒的...是我...",
						"french": "Ugh... Ce n'est qu'un arrêt temporaire... L'éternel... c'est moi...",
						"spanish": "Ugh... Solo una pausa temporal... El eterno... soy yo...",
						"vietnamese": "Ư... Chỉ là tạm dừng... Kẻ vĩnh cửu... là ta...",
						"thai": "อึก... แค่หยุดชั่วคราว... สิ่งนิรันดร์... คือข้า...",
						"hindi": "उफ़... बस एक अस्थायी रुकावट... शाश्वत... मैं हूँ..."
					}
				},
				{
					"content": {
						"korean": "끝난 게 아니었어…",
						"english": "It wasn't over...",
						"japanese": "終わっていなかった…",
						"chinese": "还没结束...",
						"french": "Ce n'était pas fini...",
						"spanish": "No había terminado...",
						"vietnamese": "Chưa kết thúc...",
						"thai": "ยังไม่จบ...",
						"hindi": "यह खत्म नहीं हुआ था..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "유물은 잠시 침묵했지만, 숲의 고통은 끝나지 않았다. 또 다른 비극의 서막이 열리고 있었다.",
						"english": "The artifact fell silent for a moment, but the forest's suffering was far from over. Another tragedy's prelude was unfolding.",
						"japanese": "遺物は一時的に沈黙したが、森の苦痛は終わっていなかった。新たな悲劇の序幕が開かれようとしていた。",
						"chinese": "遗物暂时沉默，但森林的痛苦并未结束。另一场悲剧的序幕正在拉开。",
						"french": "L'artefact se tut un instant, mais la souffrance de la forêt n'était pas finie. Le prélude d'une autre tragédie se déroulait.",
						"spanish": "El artefacto enmudeció por un momento, pero el sufrimiento del bosque no había terminado. El preludio de otra tragedia se estaba desplegando.",
						"vietnamese": "Cổ vật im lặng một lúc, nhưng nỗi đau của khu rừng vẫn chưa kết thúc. Khúc dạo đầu của một bi kịch khác đang mở ra.",
						"thai": "วัตถุโบราณนิ่งเงียบไปชั่วขณะ แต่ความเจ็บปวดของป่ายังไม่สิ้นสุด ปฐมบทของโศกนาฏกรรมอีกบทกำลังจะเริ่มขึ้น",
						"hindi": "कलाकृति क्षण भर के लिए शांत हो गई, लेकिन जंगल का दुख खत्म नहीं हुआ था। एक और त्रासदी की प्रस्तावना खुल रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 것들. 나의 숲에… 영원히 잠들어라.",
						"english": "Fools. In my forest... sleep eternally.",
						"japanese": "愚かな者たちめ。我が森に…永遠に眠れ。",
						"chinese": "愚蠢的家伙们。在我的森林里...永远沉睡吧。",
						"french": "Imbéciles. Dans ma forêt... dormez éternellement.",
						"spanish": "Necios. En mi bosque... dormid eternamente.",
						"vietnamese": "Lũ ngốc. Trong rừng của ta... hãy ngủ vĩnh viễn đi.",
						"thai": "เจ้าพวกโง่เง่า ในป่าของข้า... จงหลับใหลไปชั่วนิรันดร์",
						"hindi": "मूर्खों। मेरे वन में... अनंत काल तक सोते रहो।"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 다시… 다시 일어선다…!",
						"english": "Damn it... Again... I'll get back up again!",
						"japanese": "くそ… また… また立ち上がる…！",
						"chinese": "该死…… 再…… 再次站起来……！",
						"french": "Mince… Encore… Je me relèverai… !",
						"spanish": "¡Maldita sea… Otra vez… Me levantaré de nuevo…!",
						"vietnamese": "Chết tiệt… Lại… Lại đứng lên…!",
						"thai": "ให้ตายสิ… อีกครั้ง… จะลุกขึ้นอีกครั้ง…!",
						"hindi": "लानत है… फिर से… मैं फिर से खड़ा हो जाऊँगा…!"
					},
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내 유물의 심장부에 도달했다. 모든 재앙의 근원, 광기의 결정체가 그곳에 있었다.",
						"english": "Finally, we reached the artifact's heart. The source of all calamity, the crystallization of madness, resided there.",
						"japanese": "ついに遺物の心臓部に到達した。すべての災厄の根源、狂気の結晶がそこにあった。",
						"chinese": "最终，我们抵达了遗物的核心。所有灾祸的根源，疯狂的结晶，就在那里。",
						"french": "Enfin, nous avons atteint le cœur de l'artefact. La source de toute calamité, la cristallisation de la folie, y résidait.",
						"spanish": "Finalmente, llegamos al corazón del artefacto. La fuente de toda calamidad, la cristalización de la locura, residía allí.",
						"vietnamese": "Cuối cùng, chúng ta đã đến trung tâm của cổ vật. Nguồn gốc của mọi tai ương, sự kết tinh của điên loạn, ngự trị nơi đó.",
						"thai": "ในที่สุดก็มาถึงใจกลางของวัตถุโบราณ แหล่งกำเนิดของหายนะทั้งหมด ผลึกแห่งความบ้าคลั่งอยู่ที่นั่น",
						"hindi": "अंततः, हम कलाकृति के दिल तक पहुँच गए। सभी विपत्तियों का स्रोत, पागलपन का क्रिस्टलीकरण, वहीं स्थित था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "…왔는가. 나의 영원한 숲에 도전하는 자여.",
						"english": "...So you've come. Challenger of my eternal forest.",
						"japanese": "...来たか。我が永遠の森に挑む者よ。",
						"chinese": "...你来了。挑战我永恒森林之人。",
						"french": "...Alors tu es venu. Toi qui défies ma forêt éternelle.",
						"spanish": "...Has venido. Tú que desafías mi bosque eterno.",
						"vietnamese": "...Ngươi đã đến. Kẻ thách thức khu rừng vĩnh cửu của ta.",
						"thai": "...มาแล้วรึ ผู้ท้าทายป่านิรันดร์ของข้า",
						"hindi": "...तो तुम आ गए। मेरे शाश्वत वन के चुनौती देने वाले।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네놈이… 이 모든 것을 꾸민 거야?",
						"english": "You... orchestrated all of this?",
						"japanese": "貴様が…この全てを仕組んだのか？",
						"chinese": "是你...策划了这一切吗？",
						"french": "C'est toi... qui as orchestré tout cela ?",
						"spanish": "¿Tú... orquestaste todo esto?",
						"vietnamese": "Ngươi... đã sắp đặt tất cả những điều này?",
						"thai": "แก... เป็นคนบงการทั้งหมดนี้หรือ?",
						"hindi": "तुमने... यह सब रचा है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "꾸몄다고? 나는 그저… 조화와 영원을 추구할 뿐.",
						"english": "Orchestrated? I merely... seek harmony and eternity.",
						"japanese": "仕組んだだと？私はただ…調和と永遠を追求するのみ。",
						"chinese": "策划？我只是...追求和谐与永恒罢了。",
						"french": "Orchestré ? Je ne fais que... chercher l'harmonie et l'éternité.",
						"spanish": "¿Orquestado? Yo solo... busco la armonía y la eternidad.",
						"vietnamese": "Sắp đặt? Ta chỉ... theo đuổi sự hài hòa và vĩnh cửu.",
						"thai": "บงการ? ข้าแค่... แสวงหาความกลมกลืนและนิรันดร์เท่านั้น",
						"hindi": "रचा है? मैं तो बस... सद्भाव और अनंतता की तलाश में हूँ।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲의 심장부로 향하는 길, 광기는 더욱 짙어졌다.",
			"울부짖는 동물들, 그리고 유물의 기괴한 노래.",
			"브라이어는 눈 앞에서 목격했다. 생명력이 빨려 들어가는 현장을.",
			"모든 것을 하나로 만들려는 왜곡된 열망 — 진실의 그림자가 드리운다."
		],
		"english": [
			"As we delved deeper into the forest's heart, the madness grew thicker.",
			"Howling animals, and the relic's eerie song.",
			"Briar witnessed it firsthand: life force being drained away.",
			"A twisted desire to make everything one – the shadow of truth looms."
		],
		"japanese": [
			"森の奥深くへ進むにつれ、狂気はさらに色濃くなった。",
			"遠吠えする動物たち、そして遺物の不気味な歌。",
			"ブライアーは目の前で目撃した。生命力が吸い取られる現場を。",
			"すべてを一つにしようとする歪んだ願望 — 真実の影が迫る。"
		],
		"chinese": [
			"深入森林之心，疯狂愈发浓重。",
			"嚎叫的野兽，以及遗物诡异的歌声。",
			"布莱尔亲眼目睹了生命力被吸走的景象。",
			"将一切归于一的扭曲欲望——真相的阴影笼罩而来。"
		],
		"french": [
			"En s'enfonçant dans le cœur de la forêt, la folie s'épaississait.",
			"Des animaux hurlants, et le chant étrange de l'artefact.",
			"Briar en fut le témoin direct : la force vitale se vidait.",
			"Un désir tordu de tout unifier — l'ombre de la vérité plane."
		],
		"spanish": [
			"A medida que nos adentrábamos en el corazón del bosque, la locura se hacía más densa.",
			"Animales aullando, y la extraña canción del artefacto.",
			"Briar fue testigo directo: la fuerza vital siendo drenada.",
			"Un deseo retorcido de unificarlo todo — la sombra de la verdad se cierne."
		],
		"vietnamese": [
			"Càng tiến sâu vào lòng rừng, sự điên loạn càng trở nên đậm đặc.",
			"Tiếng hú của muông thú, và bài ca kỳ dị của di vật.",
			"Briar đã chứng kiến tận mắt: sinh lực bị hút cạn.",
			"Một khát khao méo mó muốn hợp nhất mọi thứ – bóng tối của sự thật bao trùm."
		],
		"thai": [
			"ยิ่งลึกเข้าไปในใจกลางป่า ความบ้าคลั่งยิ่งทวีความรุนแรงขึ้น",
			"สัตว์ที่หอนโหยหวน และบทเพลงอันแปลกประหลาดของวัตถุโบราณ",
			"ไบรเออร์เห็นกับตา: พลังชีวิตถูกดูดออกไป",
			"ความปรารถนาอันบิดเบี้ยวที่จะรวมทุกสิ่งให้เป็นหนึ่งเดียว — เงาแห่งความจริงกำลังคืบคลาน"
		],
		"hindi": [
			"जैसे-जैसे हम जंगल के हृदय में गहराई तक गए, पागलपन और गहरा होता गया。",
			"चीखते जानवर, और अवशेष का डरावना गीत।",
			"ब्रायर ने अपनी आँखों से देखा: जीवन शक्ति का खिंचाव।",
			"हर चीज़ को एक करने की एक विकृत इच्छा — सच का साया मंडरा रहा है।"
		]
	}
} as const;
