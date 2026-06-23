export const scenario_hell_spectra_9_05 = {
	"scenario_id": "hell_spectra_9_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"mire": {
			"id": "mon_833c1501-f6d9-49ef-a3bf-8483358444ec",
			"name": {
				"korean": "수렁",
				"english": "Mire",
				"japanese": "泥沼",
				"chinese": "泥沼",
				"french": "Bourbier",
				"spanish": "Ciénaga",
				"vietnamese": "Vũng lầy",
				"thai": "หล่ม",
				"hindi": "दलदल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/835207dd-0a0a-46b5-ebc9-0349d902c100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39092adf-c27a-4eca-dfc9-57503122c400/public"
		}
	},
	"boss": {
		"pool_id": "pool_ShatteredMemory_Spectra_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 수정들이 공중에 떠다니며, 알 수 없는 비명을 토해냈다.",
						"english": "Giant crystals floated in the air, emitting unknown screams.",
						"japanese": "巨大なクリスタルが空中に浮かび、未知の悲鳴を上げた。",
						"chinese": "巨大的水晶漂浮在空中，发出未知的尖叫。",
						"french": "D'énormes cristaux flottaient dans les airs, émettant des cris inconnus.",
						"spanish": "Cristales gigantes flotaban en el aire, emitiendo gritos desconocidos.",
						"vietnamese": "Những tinh thể khổng lồ lơ lửng trong không trung, phát ra những tiếng hét không rõ.",
						"thai": "ผลึกยักษ์ลอยอยู่ในอากาศ ส่งเสียงกรีดร้องที่ไม่รู้จัก",
						"hindi": "विशाल क्रिस्टल हवा में तैर रहे थे, अज्ञात चीखें निकाल रहे थे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가… 스펙트라가 잠든 곳인가.",
						"english": "Is this... where Spectra sleeps?",
						"japanese": "ここが…スペクトラが眠る場所なのか。",
						"chinese": "这里是…斯佩克特拉沉睡的地方吗？",
						"french": "Est-ce ici… où Spectra repose ?",
						"spanish": "¿Es aquí… donde Spectra duerme?",
						"vietnamese": "Đây là… nơi Spectra đang ngủ sao?",
						"thai": "นี่คือ... ที่ที่สเปกตร้าหลับใหลอยู่หรือ?",
						"hindi": "क्या यह… वह जगह है जहाँ स्पेक्ट्रा सोता है?"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "mire",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "mire",
					"content": {
						"korean": "그래. 이곳에서 모든 기억이 소멸하려 하고 있지.",
						"english": "Yes. Here, all memories are about to vanish.",
						"japanese": "そう。ここで、全ての記憶が消え去ろうとしている。",
						"chinese": "是的。在这里，所有的记忆都即将消失。",
						"french": "Oui. Ici, tous les souvenirs sont sur le point de disparaître.",
						"spanish": "Sí. Aquí, todos los recuerdos están a punto de desvanecerse.",
						"vietnamese": "Đúng vậy. Ở đây, tất cả ký ức đang dần biến mất.",
						"thai": "ใช่ ที่นี่ ความทรงจำทั้งหมดกำลังจะเลือนหายไป",
						"hindi": "हाँ। यहाँ, सभी यादें मिटने वाली हैं।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "스펙트라만이 이 순환을 끝낼 수 있는 유일한 존재다.",
						"english": "Only Spectra can end this cycle.",
						"japanese": "この循環を終わらせられるのは、スペクトラだけだ。",
						"chinese": "只有斯佩克特拉才能结束这个循环。",
						"french": "Seule Spectra peut mettre fin à ce cycle.",
						"spanish": "Solo Spectra puede terminar este ciclo.",
						"vietnamese": "Chỉ có Spectra mới có thể chấm dứt vòng luân hồi này.",
						"thai": "มีเพียงสเปกตร้าเท่านั้นที่สามารถยุติวัฏจักรนี้ได้",
						"hindi": "केवल स्पेक्ट्रा ही इस चक्र को समाप्त कर सकता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "mire"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "mire",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "지옥의 기억은… 쉽게 부서지고 왜곡된다.",
						"english": "Memories of hell... easily break and distort.",
						"japanese": "地獄の記憶は…簡単に壊れ、歪む。",
						"chinese": "地狱的记忆…很容易破碎和扭曲。",
						"french": "Les souvenirs de l'enfer… se brisent et se distordent facilement.",
						"spanish": "Los recuerdos del infierno… se rompen y distorsionan fácilmente.",
						"vietnamese": "Ký ức địa ngục… dễ dàng vỡ nát và méo mó.",
						"thai": "ความทรงจำของนรก... แตกสลายและบิดเบี้ยวได้ง่าย",
						"hindi": "नरक की यादें… आसानी से टूटकर विकृत हो जाती हैं।"
					},
					"speaker": "mire",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "모래처럼 사라지는 파편들… 마음이 아파.",
						"english": "Fragments vanishing like sand... it pains my heart.",
						"japanese": "砂のように消える破片たち…心が痛む。",
						"chinese": "碎片像沙子一样消失…我心痛。",
						"french": "Des fragments s'évanouissant comme du sable… mon cœur souffre.",
						"spanish": "Fragmentos que se desvanecen como arena… me duele el corazón.",
						"vietnamese": "Những mảnh vỡ biến mất như cát… lòng tôi đau.",
						"thai": "ชิ้นส่วนที่หายไปเหมือนทราย... มันเจ็บปวดใจ",
						"hindi": "रेत की तरह गायब होते टुकड़े… मेरा दिल दुखता है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "mire",
					"content": {
						"korean": "그래서 더더욱 스펙트라가 필요해. 모든 것을 지킬… 그녀의 힘이.",
						"english": "That's why Spectra is even more needed. Her power to protect everything.",
						"japanese": "だからこそ、スペクトラがさらに必要なんだ。全てを守る…彼女の力が。",
						"chinese": "所以斯佩克特拉才更需要。她守护一切的力量。",
						"french": "C'est pourquoi Spectra est encore plus nécessaire. Son pouvoir de tout protéger.",
						"spanish": "Por eso se necesita aún más a Spectra. Su poder para protegerlo todo.",
						"vietnamese": "Vì vậy, càng cần Spectra. Sức mạnh của cô ấy để bảo vệ mọi thứ.",
						"thai": "นั่นเป็นเหตุผลว่าทำไมสเปกตร้าจึงจำเป็นยิ่งขึ้น พลังของเธอที่จะปกป้องทุกสิ่ง",
						"hindi": "इसलिए स्पेक्ट्रा की और भी ज़्यादा ज़रूरत है। उसकी शक्ति सब कुछ बचाने के लिए।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은… 이 모든 걸 너무 잘 알고 있어.",
						"english": "You… know all of this too well.",
						"japanese": "あなたは…この全てを知りすぎている。",
						"chinese": "你…太了解这一切了。",
						"french": "Vous… savez tout cela trop bien.",
						"spanish": "Tú… sabes todo esto demasiado bien.",
						"vietnamese": "Anh… biết tất cả điều này quá rõ.",
						"thai": "คุณ... รู้เรื่องทั้งหมดนี้ดีเกินไป",
						"hindi": "तुम… यह सब बहुत अच्छी तरह जानते हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "mire",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "mire",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모두의 기억을 지키는 것. 그것이 이 지옥의 유일한 길이다.",
						"english": "Protecting everyone's memories. That is the only way in this hell.",
						"japanese": "皆の記憶を守ること。それがこの地獄の唯一の道だ。",
						"chinese": "保护所有人的记忆。这是这个地狱唯一的出路。",
						"french": "Protéger les souvenirs de chacun. C'est le seul chemin dans cet enfer.",
						"spanish": "Proteger los recuerdos de todos. Ese es el único camino en este infierno.",
						"vietnamese": "Bảo vệ ký ức của mọi người. Đó là con đường duy nhất trong địa ngục này.",
						"thai": "การปกป้องความทรงจำของทุกคน นั่นคือหนทางเดียวในนรกนี้",
						"hindi": "सभी की यादों की रक्षा करना। यही इस नरक का एकमात्र रास्ता है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신의 눈빛이… 어딘가 깊은 그림자를 드리우고 있어.",
						"english": "Your eyes… cast a deep shadow somewhere.",
						"japanese": "あなたの眼差しが…どこか深い影を落としている。",
						"chinese": "你的眼神…投下了一丝深沉的阴影。",
						"french": "Votre regard… projette une ombre profonde quelque part.",
						"spanish": "Tu mirada… proyecta una sombra profunda en algún lugar.",
						"vietnamese": "Ánh mắt của bạn… đang che phủ một bóng tối sâu thẳm ở đâu đó.",
						"thai": "ดวงตาของคุณ... ทอดเงาลึกบางอย่างอยู่",
						"hindi": "तुम्हारी आँखों में… कहीं गहरी छाया है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…지옥의 고통을 너무 많이 봐서겠지.",
						"english": "...Perhaps I've seen too much of hell's torment.",
						"japanese": "...地獄の苦痛をあまりにも多く見てきたからだろう。",
						"chinese": "...也许是因为见过了太多地狱的苦痛吧。",
						"french": "...Sans doute parce que j'ai vu trop de tourments infernaux.",
						"spanish": "...Quizás porque he visto demasiado el tormento del infierno.",
						"vietnamese": "...Chắc là vì đã thấy quá nhiều nỗi đau địa ngục.",
						"thai": "...คงเป็นเพราะได้เห็นความทรมานของนรกมามากเกินไปแล้วสินะ",
						"hindi": "...शायद इसलिए कि मैंने नर्क की बहुत पीड़ा देखी है।"
					},
					"speaker": "mire",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "왠지 모르게… 불안해져.",
						"english": "Somehow... I'm getting uneasy.",
						"japanese": "なぜだか…不安になってきた。",
						"chinese": "不知为何…感到不安。",
						"french": "D'une certaine manière... je deviens inquiet.",
						"spanish": "De alguna manera... me pongo inquieto.",
						"vietnamese": "Không hiểu sao... tôi cảm thấy bất an.",
						"thai": "ไม่รู้ทำไม... รู้สึกไม่สบายใจ",
						"hindi": "पता नहीं क्यों... बेचैनी हो रही है।"
					},
					"speaker": "character_2",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "mire"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "수많은 기억의 파편들이 회오리치며 압도적인 존재감을 드러냈다.",
						"english": "Countless fragments of memory swirled, revealing an overwhelming presence.",
						"japanese": "無数の記憶の破片が渦巻き、圧倒的な存在感を現した。",
						"chinese": "无数记忆碎片盘旋，显露出压倒性的存在感。",
						"french": "D'innombrables fragments de mémoire tourbillonnaient, révélant une présence écrasante.",
						"spanish": "Innumerables fragmentos de memoria se arremolinaban, revelando una presencia abrumadora.",
						"vietnamese": "Vô số mảnh ký ức xoáy lên, tiết lộ một sự hiện diện áp đảo.",
						"thai": "เศษเสี้ยวความทรงจำนับไม่ถ้วนหมุนวน เผยให้เห็นถึงการปรากฏตัวที่น่าเกรงขาม",
						"hindi": "यादों के अनगिनत टुकड़े घूम रहे थे, एक जबरदस्त उपस्थिति प्रकट कर रहे थे।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저 너머에… 스펙트라가 있어.",
						"english": "Beyond that... lies Spectra.",
						"japanese": "その向こうに…スペクトラがいる。",
						"chinese": "在那边…是斯佩克特拉。",
						"french": "Au-delà de ça... se trouve Spectra.",
						"spanish": "Más allá... está Spectra.",
						"vietnamese": "Phía bên kia... là Spectra.",
						"thai": "ที่อยู่เลยไปนั่น... คือสเปกตรา",
						"hindi": "उसके पार... स्पेक्ट्रा है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이제 모든 진실이 밝혀질 거야. 지옥의 모든 비극이….",
						"english": "Now all truth will be revealed. All the tragedies of hell...",
						"japanese": "今、すべての真実が明らかになるだろう。地獄のあらゆる悲劇が…。",
						"chinese": "现在，所有真相都将揭晓。地狱的所有悲剧…",
						"french": "Maintenant, toute la vérité sera révélée. Toutes les tragédies de l'enfer...",
						"spanish": "Ahora toda la verdad será revelada. Todas las tragedias del infierno...",
						"vietnamese": "Giờ đây, mọi sự thật sẽ được tiết lộ. Mọi bi kịch của địa ngục...",
						"thai": "ตอนนี้ความจริงทุกอย่างจะถูกเปิดเผย โศกนาฏกรรมทั้งหมดของนรก...",
						"hindi": "अब सारी सच्चाई सामने आएगी। नर्क की सारी त्रासदियां..."
					},
					"speaker": "mire",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "진실… 우리가 아는 진실이 맞을까?",
						"english": "Truth... Is it the truth we know?",
						"japanese": "真実…私たちが知る真実が正しいのだろうか？",
						"chinese": "真相…是我们所知的真相吗？",
						"french": "La vérité... Est-ce la vérité que nous connaissons ?",
						"spanish": "¿La verdad... Es la verdad que conocemos?",
						"vietnamese": "Sự thật... Liệu có phải là sự thật mà chúng ta biết?",
						"thai": "ความจริง... นี่คือความจริงที่เรารู้จักหรือเปล่า?",
						"hindi": "सच्चाई... क्या यह वही सच्चाई है जो हम जानते हैं?"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "스펙트라를 감싸던 유리 조각들이 산산이 부서지며 순수한 빛의 형상이 드러났다.",
						"english": "The glass shards encasing Spectra shattered, revealing a form of pure light.",
						"japanese": "「スペクトラを包んでいたガラスの破片が粉々に砕け散り、純粋な光の姿が現れた。」",
						"chinese": "「包裹着斯佩克特拉的玻璃碎片破碎，纯粹的光之形体显现出来。」",
						"french": "« Les éclats de verre qui enveloppaient Spectra se brisèrent en mille morceaux, révélant une forme de lumière pure. »",
						"spanish": "« Los fragmentos de cristal que envolvían a Spectra se hicieron añicos, revelando una forma de luz pura. »",
						"vietnamese": "« Những mảnh kính bao bọc Spectra vỡ tan tành, để lộ hình dáng của ánh sáng thuần khiết. »",
						"thai": "« เศษแก้วที่ห่อหุ้มสเปคตร้าแตกสลาย เผยให้เห็นร่างของแสงบริสุทธิ์ »",
						"hindi": "« स्पेक्ट्रा को घेरे हुए कांच के टुकड़े चकनाचूर हो गए, जिससे शुद्ध प्रकाश का एक रूप प्रकट हुआ। »"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…이 기억은… 너희의 것이 아니었다… 하지만… 나의 세계도… 나의 모든 찬란했던 꿈들도… 모두 부서졌으니…",
						"english": "...These memories... were not yours... But... my world too... all my brilliant dreams... were shattered...",
						"japanese": "「…この記憶は…お前たちのものじゃなかった…だが…私の世界も…私の輝かしい夢も…すべて壊れてしまったから…」",
						"chinese": "「…这些记忆…不属于你们…但是…我的世界也…我所有灿烂的梦想…都破碎了…」",
						"french": "« ...Ces souvenirs... n'étaient pas les vôtres... Mais... mon monde aussi... tous mes rêves brillants... ont été brisés... »",
						"spanish": "« ...Estos recuerdos... no eran vuestros... Pero... mi mundo también... todos mis sueños brillantes... se hicieron añicos... »",
						"vietnamese": "« ...Những ký ức này... không phải của các ngươi... Nhưng... thế giới của ta cũng... tất cả những giấc mơ rực rỡ của ta... đều đã tan vỡ... »",
						"thai": "« ...ความทรงจำเหล่านี้... ไม่ใช่ของพวกเจ้า... แต่... โลกของฉันก็เช่นกัน... ความฝันที่เคยรุ่งโรจน์ทั้งหมดของฉัน... ก็พังทลายลง... »",
						"hindi": "« ...ये यादें... तुम्हारी नहीं थीं... लेकिन... मेरी दुनिया भी... मेरे सभी शानदार सपने... सब चकनाचूर हो गए... »"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "나는… 더는… 잃고 싶지 않았다… 이제… 지켜낼 수 있을까… 이 모든 것을….",
						"english": "I... didn't... want to lose... anymore... Now... can I protect... all of this...?",
						"japanese": "「私は…これ以上…失いたくなかった…今…このすべてを…守り抜けるだろうか…。」",
						"chinese": "「我…不想…再失去…了…现在…我能守护住…这一切吗…。」",
						"french": "« Je... ne voulais... plus perdre... Maintenant... pourrai-je protéger... tout cela...? »",
						"spanish": "« Yo... no quería... perder... más... Ahora... ¿podré proteger... todo esto...? »",
						"vietnamese": "« Ta... đã không... muốn mất... thêm nữa... Giờ đây... liệu ta có thể bảo vệ... tất cả những điều này...? »",
						"thai": "« ฉัน... ไม่อยาก... สูญเสีย... อีกต่อไปแล้ว... ตอนนี้... ฉันจะปกป้อง... ทั้งหมดนี้ได้ไหม...? »",
						"hindi": "« मैं... और कुछ... खोना नहीं चाहता था... अब... क्या मैं... इन सबको... बचा पाऊँगा...? »"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그녀는… 기억의 수호자였어… 지옥의 존재가 아니었어.",
						"english": "She... was the guardian of memories... not a being of hell.",
						"japanese": "「彼女は…記憶の守護者だった…地獄の存在ではなかった。」",
						"chinese": "「她…是记忆的守护者…而不是地狱的存在。」",
						"french": "« Elle... était la gardienne des souvenirs... pas une entité infernale. »",
						"spanish": "« Ella... era la guardiana de los recuerdos... no un ser del infierno. »",
						"vietnamese": "« Cô ấy... là người bảo vệ ký ức... không phải một sinh vật của địa ngục. »",
						"thai": "« เธอ... คือผู้พิทักษ์ความทรงจำ... ไม่ใช่สิ่งมีชีวิตจากนรก »",
						"hindi": "« वह... यादों की संरक्षक थी... नरक की प्राणी नहीं। »"
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "mire",
					"duration_ms": 500
				},
				{
					"speaker": "mire",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "안 돼! 나의 완벽한 시스템이…!",
						"english": "No! My perfect system...!",
						"japanese": "ダメだ！私の完璧なシステムが…！",
						"chinese": "不！我完美的系统…！",
						"french": "Non ! Mon système parfait… !",
						"spanish": "¡No! ¡Mi sistema perfecto...!",
						"vietnamese": "Không! Hệ thống hoàn hảo của ta...!",
						"thai": "ไม่นะ! ระบบอันสมบูรณ์แบบของฉัน...!",
						"hindi": "नहीं! मेरा परिपूर्ण सिस्टम...!"
					}
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"speaker": "mire",
					"action": "exit",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "mire",
					"content": {
						"korean": "이 순환은… 끝나지 않아! 나는… 반드시 돌아온다!",
						"english": "This cycle... won't end! I... will definitely return!",
						"japanese": "この循環は…終わらない！私は…必ず戻ってくる！",
						"chinese": "这个循环…不会结束！我…一定会回来！",
						"french": "Ce cycle… ne finira pas ! Je… reviendrai à coup sûr !",
						"spanish": "¡Este ciclo... no terminará! ¡Yo... regresaré sin falta!",
						"vietnamese": "Vòng lặp này... sẽ không kết thúc! Ta... nhất định sẽ trở lại!",
						"thai": "วงจรนี้... ไม่มีวันสิ้นสุด! ฉัน... จะต้องกลับมาแน่!",
						"hindi": "यह चक्र... खत्म नहीं होगा! मैं... निश्चित रूप से वापस आऊंगा!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "결국… 모든 게 반복되는 거였어. 이 지옥은… 끝없는 회귀였어.",
						"english": "In the end... everything was just a repetition. This hell... was an endless regression.",
						"japanese": "結局…全てが繰り返されるだけだった。この地獄は…終わりのない回帰だった。",
						"chinese": "最终…一切都只是重复。这个地狱…是无尽的回归。",
						"french": "Au final… tout se répétait. Cet enfer… était une régression sans fin.",
						"spanish": "Al final... todo era una repetición. Este infierno... era una regresión interminable.",
						"vietnamese": "Cuối cùng... mọi thứ chỉ là sự lặp lại. Địa ngục này... là một vòng lặp vô tận.",
						"thai": "สุดท้ายแล้ว... ทุกอย่างก็แค่ซ้ำรอยเดิม. นรกนี้... คือการย้อนกลับที่ไม่มีที่สิ้นสุด.",
						"hindi": "अंत में... सब कुछ बस एक दोहराव था। यह नर्क... एक अंतहीन पुनरावृत्ति थी।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "낡은 벽면에서 발견된 낙서가 희미하게 빛났다. '또 다시… 시작되는… 끝없는 회귀….'",
						"english": "Graffiti found on the old wall glowed faintly. 'Once again... beginning... an endless regression...'",
						"japanese": "古い壁に書かれた落書きが微かに光っていた。「またしても…始まる…終わりのない回帰…。」",
						"chinese": "旧墙上发现的涂鸦微微发光。‘又一次…开始的…无尽回归…’",
						"french": "Des graffitis découverts sur le vieux mur brillaient faiblement. « Encore une fois… le début… d'une régression sans fin… »",
						"spanish": "Un grafiti encontrado en la vieja pared brillaba débilmente. 'Una vez más... comenzando... una regresión interminable...'",
						"vietnamese": "Chữ viết nguệch ngoạc trên bức tường cũ lờ mờ phát sáng. 'Lại một lần nữa... bắt đầu... vòng lặp vô tận...'",
						"thai": "ภาพเขียนบนผนังเก่าส่องแสงเรืองรองจางๆ. 'อีกครั้ง... ที่เริ่ม... การย้อนกลับที่ไม่มีที่สิ้นสุด...' ",
						"hindi": "पुरानी दीवार पर मिला भित्तिचित्र धुंधला चमक रहा था। 'एक बार फिर... शुरू हो रहा है... एक अंतहीन पुनरावृत्ति...'"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "…끝낼 수 없어… 이 지옥은… 영원히… 반복될 거야…",
						"english": "...Can't end it... This hell... will repeat... forever...",
						"japanese": "…終わらせられない…この地獄は…永遠に…繰り返されるだろう…",
						"chinese": "…无法结束…这个地狱…将永远…重复…",
						"french": "…Impossible d'y mettre fin… Cet enfer… se répétera… pour toujours…",
						"spanish": "...No puedo terminarlo... Este infierno... se repetirá... para siempre...",
						"vietnamese": "...Không thể kết thúc... Địa ngục này... sẽ lặp lại... mãi mãi...",
						"thai": "...ไม่อาจจบสิ้น... นรกนี้... จะซ้ำรอย... ตลอดไป...",
						"hindi": "...खत्म नहीं कर सकता... यह नर्क... हमेशा... दोहराएगा..."
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니… 우린 여기서 멈추지 않아!",
						"english": "No... We won't stop here!",
						"japanese": "いいえ…私たちはここで止まらない！",
						"chinese": "不…我们不会止步于此！",
						"french": "Non… Nous ne nous arrêterons pas ici !",
						"spanish": "¡No... No nos detendremos aquí!",
						"vietnamese": "Không... Chúng ta sẽ không dừng lại ở đây!",
						"thai": "ไม่นะ... เราจะไม่หยุดแค่นี้!",
						"hindi": "नहीं! हम यहाँ नहीं रुकेंगे!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "mire",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "하찮은 저항이군. 이 모든 것은… 시작일 뿐이다.",
						"english": "A futile resistance. All of this... is just the beginning.",
						"japanese": "些細な抵抗だな。この全ては…始まりに過ぎない。",
						"chinese": "微不足道的抵抗。这一切…都只是开始。",
						"french": "Une résistance futile. Tout cela… n'est que le début.",
						"spanish": "Una resistencia inútil. Todo esto... es solo el principio.",
						"vietnamese": "Một sự kháng cự vô ích. Tất cả những điều này... chỉ là khởi đầu.",
						"thai": "การต่อต้านที่ไร้ค่า. ทั้งหมดนี้... เป็นเพียงแค่จุดเริ่มต้นเท่านั้น.",
						"hindi": "एक तुच्छ प्रतिरोध। यह सब... बस शुरुआत है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "mire"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"speaker": "mire",
					"type": "direction"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 유리 조각들에 둘러싸인 스펙트라가 고통 속에서 빛나고 있었다.",
						"english": "Spectra, surrounded by colossal shards of glass, glowed in agony.",
						"japanese": "巨大なガラスの破片に囲まれたスペクトラが、苦痛の中で輝いていた。",
						"chinese": "斯佩克特拉被巨大的玻璃碎片环绕，在痛苦中闪耀着。",
						"french": "Spectra, entourée de gigantesques éclats de verre, brillait dans l'agonie.",
						"spanish": "Spectra, rodeada de colosales fragmentos de vidrio, brillaba en agonía.",
						"vietnamese": "Spectra, được bao quanh bởi những mảnh kính khổng lồ, phát sáng trong đau đớn.",
						"thai": "สเปกตราที่ถูกห้อมล้อมด้วยเศษกระจกขนาดยักษ์กำลังเปล่งประกายในความเจ็บปวด",
						"hindi": "स्पेक्ट्रा, कांच के विशाल टुकड़ों से घिरी हुई, पीड़ा में चमक रही थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…내… 기억… 사라지지 마… 고통스러워…",
						"english": "...My... memories... don't disappear... it's painful...",
						"japanese": "...私の…記憶…消えないで…苦しい…",
						"chinese": "...我的…记忆…别消失…好痛苦…",
						"french": "...Mes... souvenirs... ne disparaissez pas... c'est douloureux...",
						"spanish": "...Mis... recuerdos... no desaparezcan... es doloroso...",
						"vietnamese": "...Ký ức của tôi... đừng biến mất... thật đau đớn...",
						"thai": "...ความทรงจำของฉัน... อย่าหายไป... มันเจ็บปวด...",
						"hindi": "...मेरी... यादें... गायब मत हो... दर्दनाक है..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "스펙트라…! 저게 그녀의 진짜 모습인가?",
						"english": "Spectra...! Is that her true form?",
						"japanese": "スペクトラ…！あれが彼女の本当の姿なのか？",
						"chinese": "斯佩克特拉…！那是她真正的样子吗？",
						"french": "Spectra... ! Est-ce sa véritable forme ?",
						"spanish": "¡Spectra...! ¿Esa es su verdadera forma?",
						"vietnamese": "Spectra...! Đó có phải là hình dạng thật của cô ấy không?",
						"thai": "สเปกตรา...! นั่นคือร่างที่แท้จริงของเธองั้นเหรอ?",
						"hindi": "स्पेक्ट्रा...! क्या वह उसका असली रूप है?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "mire",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "mire",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "아름답지 않나? 이 완벽한 비극의 시스템이.",
						"english": "Isn't it beautiful? This perfect system of tragedy.",
						"japanese": "美しいだろう？この完璧な悲劇のシステムが。",
						"chinese": "不觉得很美吗？这个完美的悲剧系统。",
						"french": "N'est-ce pas magnifique ? Ce système parfait de tragédie.",
						"spanish": "¿No es hermoso? Este sistema perfecto de tragedia.",
						"vietnamese": "Đẹp chứ? Cái hệ thống bi kịch hoàn hảo này.",
						"thai": "ไม่สวยงามหรอกหรือ? ระบบแห่งโศกนาฏกรรมที่สมบูรณ์แบบนี้",
						"hindi": "खूबसूरत नहीं है क्या? त्रासदी की यह उत्तम प्रणाली।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "미레! 네가 왜 거기서 웃고 있어!",
						"english": "Mire! Why are you laughing there?!",
						"japanese": "「ミレ！どうしてそこで笑っているの！」",
						"chinese": "「米雷！你为什么在那里笑！」",
						"french": "« Mire ! Pourquoi ris-tu là ? »",
						"spanish": "« ¡Mire! ¡¿Por qué te ríes ahí?! »",
						"vietnamese": "« Mire! Sao ngươi lại cười ở đó?! »",
						"thai": "« มีเร! ทำไมถึงหัวเราะอยู่ตรงนั้น! »",
						"hindi": "« मिरे! तुम वहाँ क्यों हँस रहे हो! »"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "난 그저… 지옥의 틈새를 통해 기억을 모아 스펙트라에게 공급해왔을 뿐.",
						"english": "I merely... collected memories through the hellish rifts and supplied them to Spectra.",
						"japanese": "「私はただ…地獄の隙間を通して記憶を集め、スペクトラに供給してきただけ。」",
						"chinese": "「我只是…通过地狱的裂隙收集记忆，并供给给斯佩克特拉。」",
						"french": "« J'ai seulement... collecté des souvenirs à travers les failles infernales et les ai fournis à Spectra. »",
						"spanish": "« Simplemente... he recogido recuerdos a través de las grietas del infierno y se los he suministrado a Spectra. »",
						"vietnamese": "« Ta chỉ là... thu thập ký ức qua những khe nứt địa ngục và cung cấp chúng cho Spectra. »",
						"thai": "« ฉันแค่... รวบรวมความทรงจำผ่านรอยแยกนรกและส่งให้สเปคตร้าเท่านั้นเอง »",
						"hindi": "« मैं तो बस... नरक की दरारों से यादें इकट्ठा करके स्पेक्ट्रा को देता रहा हूँ। »"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "mire"
				},
				{
					"speaker": "mire",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희 또한… 나의 영원한 기억 보존 시스템을 위한… 일부였다.",
						"english": "You too... were but a part of my eternal memory preservation system.",
						"japanese": "「お前たちもまた…私の永遠の記憶保存システムの一部だった。」",
						"chinese": "「你们也…是我永恒记忆保存系统的一部分。」",
						"french": "« Vous aussi... n'étiez qu'une partie de mon système éternel de préservation des souvenirs. »",
						"spanish": "« Vosotros también... fuisteis parte de mi sistema de preservación de memoria eterna. »",
						"vietnamese": "« Các ngươi cũng... chỉ là một phần của hệ thống bảo tồn ký ức vĩnh cửu của ta. »",
						"thai": "« พวกเจ้าก็เช่นกัน... เป็นส่วนหนึ่งของระบบรักษาความทรงจำนิรันดร์ของฉัน »",
						"hindi": "« तुम सब भी... मेरे शाश्वत स्मृति संरक्षण प्रणाली का... एक हिस्सा थे। »"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리를… 이용한 거였어?!",
						"english": "You... used us?!",
						"japanese": "「私たちを…利用したってこと？！」",
						"chinese": "「你…利用了我们？！」",
						"french": "« Tu... nous as utilisés ?! »",
						"spanish": "« ¡¿Nos... usaste?! »",
						"vietnamese": "« Ngươi... đã lợi dụng chúng ta?! »",
						"thai": "« นาย... ใช้พวกเราอย่างนั้นเหรอ?! »",
						"hindi": "« तुमने... हमारा इस्तेमाल किया?! »"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…더는… 잃고 싶지 않아…",
						"english": "...I don't... want to lose... anymore...",
						"japanese": "「…これ以上…失いたくない…」",
						"chinese": "「…我不想…再失去…了…」",
						"french": "« ...Je ne... veux plus... perdre... »",
						"spanish": "« ...Ya no... quiero perder... más... »",
						"vietnamese": "« ...Ta không... muốn mất... thêm nữa... »",
						"thai": "« ...ไม่อยาก... สูญเสีย... อีกแล้ว... »",
						"hindi": "« ...मैं... और कुछ... खोना नहीं चाहता... »"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "mire",
					"content": {
						"korean": "자, 마지막 조각을 완성하자. 이 비극적인 순환의 끝에서….",
						"english": "Now, let's complete the final piece. At the end of this tragic cycle...",
						"japanese": "「さあ、最後のピースを完成させよう。この悲劇的な循環の終焉で…。」",
						"chinese": "「来吧，完成最后一块碎片。在这悲剧循环的尽头…。」",
						"french": "« Bien, complétons la dernière pièce. À la fin de ce cycle tragique... »",
						"spanish": "« Ahora, completemos la última pieza. Al final de este ciclo trágico... »",
						"vietnamese": "« Nào, hãy hoàn thành mảnh ghép cuối cùng. Ở cuối vòng luân hồi bi kịch này... »",
						"thai": "« เอาล่ะ มาเติมเต็มชิ้นส่วนสุดท้ายกัน ที่จุดสิ้นสุดของวงจรโศกนาฏกรรมนี้... »",
						"hindi": "« चलो, अंतिम टुकड़ा पूरा करते हैं। इस दुखद चक्र के अंत में... »"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"지옥의 심장부. 산산이 부서진 기억의 파편들이 소용돌이치는 곳.",
			"그곳에 '스펙트라'가 있었다. 모든 비극의 중심에 선 채.",
			"하지만 진실은 예상치 못한 흑막의 손에서 시작되었다.",
			"오랜 순환의 끝에서, 마침내 지옥의 운명이 드러난다.",
			"과연 이 비극적인 회귀는 멈출 수 있을까?"
		],
		"english": [
			"Heart of Hell. Where fragments of shattered memories swirl.",
			"There stood 'Spectra'. At the heart of all tragedy.",
			"But the truth began in the hands of an unexpected mastermind.",
			"At the end of a long cycle, Hell's destiny is finally revealed.",
			"Can this tragic regression truly be stopped?"
		],
		"japanese": [
			"地獄の心臓部。砕け散った記憶の破片が渦巻く場所。",
			"そこに「スペクトラ」がいた。全ての悲劇の中心に立って。",
			"しかし真実は、予期せぬ黒幕の手で始まった。",
			"長い循環の果てに、ついに地獄の運命が明らかになる。",
			"果たしてこの悲劇的な回帰は止められるのだろうか？"
		],
		"chinese": [
			"地狱深处。破碎记忆的碎片在此旋涡。",
			"‘斯佩克特拉’就在那里。站在所有悲剧的中心。",
			"然而，真相始于一个意想不到的幕后黑手。",
			"漫长循环的尽头，地狱的命运终于揭示。",
			"这场悲剧性的回归，真的能够停止吗？"
		],
		"french": [
			"Au cœur de l'Enfer. Là où des fragments de souvenirs brisés tourbillonnent.",
			"Là se tenait 'Spectra'. Au centre de toute tragédie.",
			"Mais la vérité a commencé entre les mains d'un maître inattendu.",
			"Au terme d'un long cycle, le destin de l'Enfer est enfin révélé.",
			"Cette régression tragique peut-elle vraiment être arrêtée ?"
		],
		"spanish": [
			"El corazón del Infierno. Donde fragmentos de recuerdos rotos se arremolinan.",
			"Allí estaba 'Spectra'. En el centro de toda tragedia.",
			"Pero la verdad comenzó en manos de un cerebro inesperado.",
			"Al final de un largo ciclo, el destino del Infierno finalmente se revela.",
			"¿Podrá detenerse esta trágica regresión?"
		],
		"vietnamese": [
			"Tâm điểm của Địa Ngục. Nơi những mảnh ký ức vỡ tan cuộn xoáy.",
			"Spectra đứng đó. Tại trung tâm của mọi bi kịch.",
			"Nhưng sự thật bắt đầu từ bàn tay của một kẻ chủ mưu không ngờ.",
			"Vào cuối một chu kỳ dài, số phận của Địa Ngục cuối cùng được tiết lộ.",
			"Liệu sự tái diễn bi thảm này có thể dừng lại được không?"
		],
		"thai": [
			"ใจกลางนรก ที่ซึ่งเศษเสี้ยวความทรงจำที่แตกสลายหมุนวน",
			"'สเปคตร้า' ยืนอยู่ที่นั่น ณ ใจกลางของโศกนาฏกรรมทั้งมวล",
			"แต่ความจริงเริ่มต้นขึ้นในเงื้อมมือของผู้อยู่เบื้องหลังที่ไม่คาดคิด",
			"เมื่อสิ้นสุดวัฏจักรที่ยาวนาน ชะตากรรมของนรกก็ถูกเปิดเผยในที่สุด",
			"การหวนคืนอันน่าเศร้าครั้งนี้จะหยุดลงได้จริงหรือ?"
		],
		"hindi": [
			"नरक का हृदय। जहाँ टूटी हुई यादों के टुकड़े घूमते हैं。",
			"वहाँ 'स्पेक्ट्रा' खड़ी थी। हर त्रासदी के केंद्र में।",
			"लेकिन सच्चाई एक अप्रत्याशित मास्टरमाइंड के हाथों शुरू हुई।",
			"एक लंबे चक्र के अंत में, नरक का भाग्य अंततः प्रकट होता है।",
			"क्या इस दुखद प्रतिगमन को वास्तव में रोका जा सकता है?"
		]
	},
	"epilogue": {
		"korean": [
			"스펙트라의 빛이 사라지자, 지옥은 침묵에 잠겼다.",
			"미레의 계획은 좌절되었지만, 그의 말은 메아리쳤다.",
			"이 모든 것이 반복되는 비극이었다는 씁쓸한 깨달음.",
			"과연 이 순환은 끊어질 수 있을까, 아니면… 또 다른 시작일 뿐인가.",
			"지옥의 어둠 속, 희미한 희망의 빛이 흔들렸다. 그것은 구원일까, 새로운 침해일까."
		],
		"english": [
			"As Spectra's light faded, Hell fell silent.",
			"Mire's plan was thwarted, but his words echoed.",
			"The bitter realization that all of this was a repeating tragedy.",
			"Can this cycle truly be broken, or is it... merely another beginning?",
			"In Hell's darkness, a faint light of hope flickered. Was it salvation, or a new encroachment?"
		],
		"japanese": [
			"スペクトラの光が消え去ると、地獄は沈黙に包まれた。",
			"ミレの計画は挫折したが、彼の言葉はこだました。",
			"これらすべてが繰り返される悲劇だったという、苦い認識。",
			"果たしてこの循環は断ち切れるのか、それとも…単なる新たな始まりに過ぎないのか。",
			"地獄の闇の中、かすかな希望の光が揺らめいた。それは救済か、新たな侵食か。"
		],
		"chinese": [
			"随着斯佩克特拉之光的消逝，地狱陷入沉寂。",
			"米雷的计划受挫，但他的话语仍在回响。",
			"所有这一切都不过是一场重复的悲剧，令人心酸的领悟。",
			"这个循环真的能被打破吗，抑或是……仅仅是另一个开始？",
			"地狱的黑暗中，一丝微弱的希望之光摇曳着。那是救赎，还是新的侵犯？"
		],
		"french": [
			"Lorsque la lumière de Spectra s'éteignit, l'Enfer tomba dans le silence.",
			"Le plan de Mire fut contrecarré, mais ses mots résonnèrent.",
			"L'amère réalisation que tout cela n'était qu'une tragédie répétée.",
			"Ce cycle peut-il vraiment être brisé, ou n'est-ce... qu'un autre début ?",
			"Dans les ténèbres de l'Enfer, une faible lueur d'espoir vacillait. Était-ce le salut, ou une nouvelle intrusion ?"
		],
		"spanish": [
			"Mientras la luz de Spectra se desvanecía, el Infierno quedó en silencio.",
			"El plan de Mire fue frustrado, pero sus palabras resonaron.",
			"La amarga constatación de que todo esto era una tragedia repetida.",
			"¿Podrá romperse este ciclo, o es... simplemente otro comienzo?",
			"En la oscuridad del Infierno, una tenue luz de esperanza parpadeó. ¿Era salvación o una nueva invasión?"
		],
		"vietnamese": [
			"Khi ánh sáng của Spectra tan biến, Địa Ngục chìm vào im lặng.",
			"Kế hoạch của Mire bị phá vỡ, nhưng lời nói của hắn vẫn vang vọng.",
			"Nhận ra cay đắng rằng tất cả đây chỉ là một bi kịch lặp lại.",
			"Liệu vòng luân hồi này có thể bị phá vỡ, hay đây chỉ là... một khởi đầu mới?",
			"Trong bóng tối của Địa Ngục, một tia hy vọng mờ nhạt lung lay. Đó là sự cứu rỗi, hay một sự xâm lấn mới?"
		],
		"thai": [
			"เมื่อแสงของสเปคตร้าเลือนหายไป นรกก็ตกอยู่ในความเงียบงัน",
			"แผนการของมิเร่ถูกขัดขวาง แต่คำพูดของเขายังคงก้องกังวาน",
			"ความจริงอันขมขื่นที่ว่าทั้งหมดนี้คือโศกนาฏกรรมที่ซ้ำรอย",
			"วัฏจักรนี้จะถูกทำลายได้จริงหรือ หรือเป็นเพียง... จุดเริ่มต้นใหม่อีกครั้ง",
			"ในความมืดมิดของนรก แสงแห่งความหวังที่ริบหรี่สั่นไหว มันคือความรอดหรือการรุกรานครั้งใหม่กันแน่"
		],
		"hindi": [
			"जैसे ही स्पेक्ट्रा की रोशनी फीकी पड़ी, नरक खामोश हो गया।",
			"मायर की योजना विफल हो गई, लेकिन उसके शब्द गूंजते रहे।",
			"यह कड़वी सच्चाई कि यह सब एक दोहराई जाने वाली त्रासदी थी।",
			"क्या यह चक्र वास्तव में तोड़ा जा सकता है, या यह... महज़ एक और शुरुआत है?",
			"नरक के अंधेरे में, आशा की एक धुंधली रोशनी टिमटिमा रही थी। क्या यह मुक्ति थी, या एक नया अतिक्रमण?"
		]
	}
} as const;
