export const scenario_hell_eulalia_24_04 = {
	"scenario_id": "hell_eulalia_24_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"soot": {
			"id": "mon_a0491490-e114-44d8-855c-d2d63b020da1",
			"name": {
				"korean": "그을음",
				"english": "Soot",
				"japanese": "煤",
				"chinese": "煤烟",
				"french": "Suie",
				"spanish": "Hollín",
				"vietnamese": "Bồ hóng",
				"thai": "เขม่า",
				"hindi": "कालिख"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2275d372-4e89-4725-193c-fccc0b944300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d5ba2b-da7c-4b75-42de-07c9cdda5d00/public"
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
						"korean": "지옥의 나락은 더욱 깊어졌다. 시간이 모든 존재를 갉아먹었다.",
						"english": "Hell's abyss deepened further. Time gnawed at all existence.",
						"japanese": "地獄の奈落はさらに深まった。時間がすべての存在を蝕んでいった。",
						"chinese": "地狱深渊更加深邃。时间吞噬着一切存在。",
						"french": "L'abîme de l'enfer s'approfondit. Le temps rongeait toute existence.",
						"spanish": "El abismo del infierno se hizo más profundo. El tiempo carcomía toda existencia.",
						"vietnamese": "Vực thẳm địa ngục càng sâu thêm. Thời gian gặm nhấm mọi sự tồn tại.",
						"thai": "หุบเหวนรกยิ่งลึกขึ้นไปอีก. เวลากัดกินทุกสรรพสิ่ง.",
						"hindi": "नरक की खाई और गहरी हो गई। समय ने हर अस्तित्व को कुतर दिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "soot",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "soot",
					"content": {
						"korean": "시간… 없어. 몸이… 사라져…",
						"english": "Time... running out. My body... fading...",
						"japanese": "時間…ない。体が…消えていく。",
						"chinese": "时间…没了。身体…消失了。",
						"french": "Le temps... s'épuise. Mon corps... disparaît...",
						"spanish": "Tiempo... se acaba. Mi cuerpo... desaparece...",
						"vietnamese": "Thời gian… hết rồi. Cơ thể… biến mất…",
						"thai": "เวลา... ไม่มีแล้ว. ร่างกาย... กำลังหายไป...",
						"hindi": "समय... नहीं है। शरीर... गायब हो रहा है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "수렁! 괜찮아? 얼굴이… 희미해지고 있어!",
						"english": "Su-rung! Are you okay? Your face... it's fading!",
						"japanese": "スルン！大丈夫？顔が…薄くなってる！",
						"chinese": "苏朗！你还好吗？你的脸…正在模糊！",
						"french": "Surung ! Tu vas bien ? Ton visage... s'estompe !",
						"spanish": "¡Su-rung! ¿Estás bien? ¡Tu cara... se está desvaneciendo!",
						"vietnamese": "Su-rung! Cậu ổn chứ? Mặt cậu… đang mờ dần!",
						"thai": "ซูรัง! เป็นอะไรไป? ใบหน้าของนาย... กำลังจางลง!",
						"hindi": "सुरंग! तुम ठीक हो? तुम्हारा चेहरा... धुंधला हो रहा है!"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지옥이… 날 집어삼켜… 모두… 그렇게 될 거야…",
						"english": "Hell... is swallowing me... Everyone... will end up like this...",
						"japanese": "地獄が…私を飲み込む…みんな…そうなるだろう。",
						"chinese": "地狱…正在吞噬我…所有人…都会这样。",
						"french": "L'enfer... m'engloutit... Tout le monde... finira ainsi...",
						"spanish": "El infierno... me está devorando... Todos... terminarán así...",
						"vietnamese": "Địa ngục… đang nuốt chửng tôi… Mọi người… cũng sẽ như vậy…",
						"thai": "นรก... กำลังกลืนกินฉัน... ทุกคน... ก็จะลงเอยแบบนี้...",
						"hindi": "नरक... मुझे निगल रहा है... सब... ऐसे ही हो जाएंगे..."
					},
					"emotion": "angry",
					"speaker": "soot"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "soot",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "soot",
					"content": {
						"korean": "봐… 내 몸에서… 수정 조각들이…",
						"english": "Look... from my body... crystal fragments...",
						"japanese": "見て…私の体から…水晶の破片が。",
						"chinese": "看…从我身上…水晶碎片…",
						"french": "Regarde... de mon corps... des fragments de cristal...",
						"spanish": "Mira... de mi cuerpo... fragmentos de cristal...",
						"vietnamese": "Nhìn kìa… từ cơ thể tôi… những mảnh pha lê…",
						"thai": "ดูสิ... จากร่างกายของฉัน... มีเศษคริสตัล...",
						"hindi": "देखो... मेरे शरीर से... क्रिस्टल के टुकड़े..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "빛을 잃어가고 있어! 이건… 소멸의 징조야!",
						"english": "Losing their light! This... is a sign of annihilation!",
						"japanese": "光を失っていく！これは…消滅の兆候だ！",
						"chinese": "正在失去光芒！这…是毁灭的征兆！",
						"french": "Ils perdent leur lumière ! C'est... un signe d'annihilation !",
						"spanish": "¡Están perdiendo su luz! ¡Esto... es un signo de aniquilación!",
						"vietnamese": "Chúng đang mất đi ánh sáng! Đây… là dấu hiệu của sự hủy diệt!",
						"thai": "กำลังสูญเสียแสงไป! นี่... คือลางบอกเหตุแห่งการล่มสลาย!",
						"hindi": "अपनी रोशनी खो रहे हैं! यह... विनाश का संकेत है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "soot",
					"content": {
						"korean": "이게… 끝이야… 시간이… 얼마 없어…",
						"english": "This is... the end... Time is... running out...",
						"japanese": "これが…終わりだ…時間が…ない…",
						"chinese": "这…就是结局…时间…不多了…",
						"french": "C'est... la fin... Il ne reste... plus beaucoup de temps...",
						"spanish": "Este es... el fin... No queda... mucho tiempo...",
						"vietnamese": "Đây là... kết thúc... Không còn... nhiều thời gian...",
						"thai": "นี่คือ...จุดจบ...เวลา...เหลือน้อยแล้ว...",
						"hindi": "यह... अंत है... समय... बहुत कम है..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "서둘러야 해! 놈들을 막아야 해!",
						"english": "Hurry! We must stop them!",
						"japanese": "急げ！奴らを止めろ！",
						"chinese": "快！我们必须阻止他们！",
						"french": "Dépêchez-vous ! Nous devons les arrêter !",
						"spanish": "¡Deprisa! ¡Debemos detenerlos!",
						"vietnamese": "Nhanh lên! Chúng ta phải ngăn chặn chúng!",
						"thai": "เร็วเข้า! เราต้องหยุดพวกมัน!",
						"hindi": "जल्दी करो! हमें उन्हें रोकना होगा!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "soot",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상… 버틸 수가… 없어… 고통스러워…",
						"english": "I can't... hold on... anymore... It hurts...",
						"japanese": "もう…耐えられない…苦しい…",
						"chinese": "我再也…撑不下去了…好痛苦…",
						"french": "Je ne peux... plus tenir... C'est douloureux...",
						"spanish": "No puedo... aguantar... más... Es doloroso...",
						"vietnamese": "Tôi không thể... chịu đựng... thêm nữa... Đau đớn quá...",
						"thai": "ฉันทน...ไม่ไหวแล้ว...มันเจ็บปวด...",
						"hindi": "मैं और... बर्दाश्त नहीं कर सकता... यह दर्दनाक है..."
					},
					"emotion": "sad",
					"speaker": "soot"
				},
				{
					"content": {
						"korean": "수렁! 정신 차려! 널 두고 갈 수 없어!",
						"english": "Suroong! Snap out of it! We can't leave you!",
						"japanese": "スールン！しっかりしろ！お前を置いていけない！",
						"chinese": "沼泽！清醒过来！我们不能丢下你！",
						"french": "Suroong ! Reprends-toi ! On ne peut pas te laisser !",
						"spanish": "¡Suroong! ¡Despierta! ¡No podemos dejarte!",
						"vietnamese": "Suroong! Tỉnh lại đi! Chúng tôi không thể bỏ lại bạn!",
						"thai": "ซูรุง! ตั้งสติหน่อย! เราทิ้งนายไปไม่ได้!",
						"hindi": "सुरूंग! होश में आओ! हम तुम्हें छोड़कर नहीं जा सकते!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "환영… 기억… 다 사라져… 지옥이… 날 지워가…",
						"english": "Illusions... memories... all fading... Hell... is erasing me...",
						"japanese": "幻影…記憶…全て消えていく…地獄が…私を消していく…",
						"chinese": "幻象…记忆…都在消散…地狱…正在将我抹去…",
						"french": "Illusions... souvenirs... tout disparaît... L'enfer... m'efface...",
						"spanish": "Visiones... recuerdos... todo se desvanece... El infierno... me está borrando...",
						"vietnamese": "Ảo ảnh... ký ức... tất cả biến mất... Địa ngục... đang xóa sổ tôi...",
						"thai": "ภาพลวงตา...ความทรงจำ...ทั้งหมดกำลังเลือนหายไป...นรก...กำลังลบเลือนฉัน...",
						"hindi": "भ्रम... यादें... सब मिट रही हैं... नरक... मुझे मिटा रहा है..."
					},
					"emotion": "sad",
					"speaker": "soot",
					"type": "speech"
				},
				{
					"content": {
						"korean": "안 돼! 우리는 너와 함께 갈 거야!",
						"english": "No! We'll go with you!",
						"japanese": "だめだ！私たちは君と一緒に行く！",
						"chinese": "不！我们会和你一起去！",
						"french": "Non ! Nous irons avec toi !",
						"spanish": "¡No! ¡Iremos contigo!",
						"vietnamese": "Không! Chúng tôi sẽ đi cùng bạn!",
						"thai": "ไม่นะ! พวกเราจะไปกับนาย!",
						"hindi": "नहीं! हम तुम्हारे साथ जाएंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "수렁의 존재는 희미한 아지랑이처럼 흔들렸다. 그의 육체는 점차 지옥에 흡수되고 있었다.",
						"english": "Suroong's presence flickered like a faint haze. His body was slowly being absorbed by hell.",
						"japanese": "スールンの存在は、かすかな霞のように揺らいでいた。彼の肉体は徐々に地獄に吸収されていた。",
						"chinese": "沼泽的存在像模糊的薄雾般摇曳着。他的肉体正逐渐被地狱吞噬。",
						"french": "La présence de Suroong vacillait comme une brume légère. Son corps était lentement absorbé par l'enfer.",
						"spanish": "La presencia de Suroong parpadeaba como una neblina tenue. Su cuerpo estaba siendo absorbido lentamente por el infierno.",
						"vietnamese": "Sự tồn tại của Suroong lung lay như một làn sương mờ. Cơ thể anh ta dần bị địa ngục nuốt chửng.",
						"thai": "การมีอยู่ของซูรุงสั่นไหวราวกับหมอกจางๆ ร่างกายของเขากำลังถูกนรกกลืนกินไปทีละน้อย",
						"hindi": "सुरूंग का अस्तित्व एक धुंधली धुंध की तरह कांप रहा था। उसका शरीर धीरे-धीरे नरक में समा रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "soot",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "늦으면… 모두… 사라져… 너희도… 나처럼…",
						"english": "If we're late... everyone... will vanish... like me...",
						"japanese": "遅ければ…皆…消える…お前たちも…私のように…",
						"chinese": "如果迟了…一切…都会消失…你们也会…像我一样…",
						"french": "Si on tarde... tout... disparaîtra... Vous aussi... comme moi...",
						"spanish": "Si tardamos... todo... desaparecerá... Ustedes también... como yo...",
						"vietnamese": "Nếu trễ... tất cả... sẽ biến mất... Các bạn cũng vậy... như tôi...",
						"thai": "ถ้าช้าไป...ทุกคน...จะหายไป...พวกนายก็จะ...เหมือนฉัน...",
						"hindi": "अगर देर हुई... सब... गायब हो जाएंगे... तुम भी... मेरी तरह..."
					},
					"emotion": "sad",
					"speaker": "soot"
				},
				{
					"type": "speech",
					"content": {
						"korean": "포기하지 마! 아직 끝나지 않았어!",
						"english": "Don't give up! It's not over yet!",
						"japanese": "諦めるな！まだ終わってない！",
						"chinese": "别放弃！还没结束！",
						"french": "N'abandonne pas ! Ce n'est pas encore fini !",
						"spanish": "¡No te rindas! ¡Aún no ha terminado!",
						"vietnamese": "Đừng bỏ cuộc! Vẫn chưa kết thúc!",
						"thai": "อย่ายอมแพ้! ยังไม่จบ!",
						"hindi": "हार मत मानो! अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "soot",
					"content": {
						"korean": "여기가… 끝이야… 돌아갈 수 없어…",
						"english": "This is... the end... There's no turning back...",
						"japanese": "ここが…終わりだ…もう戻れない…",
						"chinese": "这里…就是终点…无法回头了…",
						"french": "C'est... la fin... On ne peut pas revenir en arrière...",
						"spanish": "Este es... el fin... No hay vuelta atrás...",
						"vietnamese": "Đây là... kết thúc... Không thể quay lại...",
						"thai": "นี่คือ...จุดจบ...กลับไปไม่ได้แล้ว...",
						"hindi": "यह... अंत है... वापस नहीं जा सकते..."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "겨우… 이걸로… 끝이라 생각하나… 진정한 절망은… 이제부터…",
						"english": "Barely... Do you think... this is the end...? True despair... begins now...",
						"japanese": "かろうじて… これで… 終わりだとでも…？真の絶望は… これからだ…",
						"chinese": "仅仅… 这样就… 以为结束了吗… 真正的绝望… 才刚开始…",
						"french": "À peine… Pensez-vous… que c'est la fin…? Le véritable désespoir… commence maintenant…",
						"spanish": "Apenas... ¿Creéis... que esto es el fin...? La verdadera desesperación... empieza ahora...",
						"vietnamese": "Vừa hay… các ngươi nghĩ… thế là hết sao…? Tuyệt vọng thật sự… giờ mới bắt đầu…",
						"thai": "แค่… แค่นี้… คิดว่าจะจบแล้วรึ… ความสิ้นหวังที่แท้จริง… กำลังจะเริ่มขึ้น…",
						"hindi": "मुश्किल से… क्या तुम सोचते हो… कि यह अंत है…? असली निराशा… अब शुरू होगी…"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "끝까지 비웃는군! 하지만 우린 멈추지 않아!",
						"english": "Laughing until the very end! But we won't stop!",
						"japanese": "最後まで嘲笑うか！だが、我々は止まらない！",
						"chinese": "嘲笑到最后！但我们不会停下！",
						"french": "Il se moque de nous jusqu'au bout ! Mais nous ne nous arrêterons pas !",
						"spanish": "¡Se burla hasta el final! ¡Pero no nos detendremos!",
						"vietnamese": "Cười nhạo đến cùng! Nhưng chúng ta sẽ không dừng lại!",
						"thai": "หัวเราะเยาะจนถึงที่สุด! แต่เราจะไม่หยุด!",
						"hindi": "अंत तक मज़ाक उड़ा रहा है! लेकिन हम रुकेंगे नहीं!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그림자는 연기처럼 사라졌다. 하지만 수렁의 몸을 이루던 수정 조각들은 완전히 빛을 잃었다.",
						"english": "The shadow vanished like smoke. But the crystal fragments that formed the Bog's body completely lost their light.",
						"japanese": "影は煙のように消え去った。しかし、沼の体を構成していた水晶の破片は完全に光を失った。",
						"chinese": "影子像烟雾一样消失了。但构成沼泽身体的水晶碎片完全失去了光泽。",
						"french": "L'ombre disparut comme de la fumée. Mais les fragments de cristal qui formaient le corps du Bourbier perdirent complètement leur lumière.",
						"spanish": "La sombra se desvaneció como humo. Pero los fragmentos de cristal que formaban el cuerpo del Pantano perdieron completamente su luz.",
						"vietnamese": "Bóng hình biến mất như khói. Nhưng những mảnh pha lê tạo nên cơ thể của Đầm Lầy đã hoàn toàn mất đi ánh sáng.",
						"thai": "เงาหายไปราวกับควัน แต่ชิ้นส่วนคริสตัลที่ประกอบเป็นร่างของบึงนั้นได้สูญเสียแสงไปโดยสิ้นเชิง",
						"hindi": "छाया धुएँ की तरह गायब हो गई। लेकिन दलदल के शरीर को बनाने वाले क्रिस्टल के टुकड़े पूरी तरह से अपनी चमक खो चुके थे।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "soot"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "수렁…!",
						"english": "Bog...!",
						"japanese": "沼…！",
						"chinese": "沼泽…！",
						"french": "Le Bourbier… !",
						"spanish": "¡Pantano...!",
						"vietnamese": "Đầm lầy…!",
						"thai": "บึง…!",
						"hindi": "दलदल…!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "마지막 희망조차 희미해져 갔다. 지옥의 심연은 모든 것을 집어삼키려 했다.",
						"english": "Even the last hope faded. The abyss of hell threatened to swallow everything.",
						"japanese": "最後の希望さえも薄れていった。地獄の深淵は全てを飲み込もうとしていた。",
						"chinese": "连最后的希望也变得模糊。地狱的深渊试图吞噬一切。",
						"french": "Même le dernier espoir s'est estompé. L'abîme de l'enfer menaçait d'engloutir tout.",
						"spanish": "Incluso la última esperanza se desvaneció. El abismo del infierno amenazaba con devorarlo todo.",
						"vietnamese": "Ngay cả hy vọng cuối cùng cũng dần tàn. Vực thẳm của địa ngục cố nuốt chửng mọi thứ.",
						"thai": "แม้แต่ความหวังสุดท้ายก็เริ่มเลือนหายไป ขุมนรกพยายามกลืนกินทุกสิ่ง",
						"hindi": "अंतिम आशा भी धुंधली पड़ती गई। नरक का गर्त सब कुछ निगलने पर आमादा था।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "보아라. 너희의 시간은 끝났다. 소멸할 뿐이다.",
						"english": "Behold. Your time is over. You shall only perish.",
						"japanese": "見よ。お前たちの時間は終わった。消滅するのみだ。",
						"chinese": "瞧。你们的时间结束了。唯有消亡。",
						"french": "Voyez. Votre temps est écoulé. Vous ne ferez que périr.",
						"spanish": "Mirad. Vuestro tiempo ha terminado. Solo os queda perecer.",
						"vietnamese": "Hãy xem. Thời gian của các ngươi đã hết. Chỉ còn là sự hủy diệt.",
						"thai": "ดูสิ. เวลาของพวกเจ้าหมดลงแล้ว. มีแต่ความพินาศเท่านั้น",
						"hindi": "देखो। तुम्हारा समय समाप्त हो गया है। तुम केवल मिट जाओगे।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 아니야! 다시 일어설 거야!",
						"english": "Not yet... No! I'll rise again!",
						"japanese": "まだ…駄目じゃない！また立ち上がる！",
						"chinese": "还没…不！我会再次站起来的！",
						"french": "Pas encore… Non ! Je me relèverai !",
						"spanish": "¡Aún no… No! ¡Me levantaré de nuevo!",
						"vietnamese": "Chưa... Không! Ta sẽ đứng dậy lần nữa!",
						"thai": "ยัง... ไม่! ฉันจะลุกขึ้นอีกครั้ง!",
						"hindi": "अभी नहीं… नहीं! मैं फिर उठ खड़ा होऊंगा!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지옥의 심연은 모든 것을 집어삼키는 듯했다. 절망만이 가득했다.",
						"english": "The abyss of hell seemed to swallow everything. Only despair filled the air.",
						"japanese": "地獄の深淵が全てを飲み込むようだった。絶望だけが満ちていた。",
						"chinese": "地狱的深渊似乎吞噬了一切。只剩下绝望。",
						"french": "L'abîme des enfers semblait tout engloutir. Seul le désespoir régnait.",
						"spanish": "El abismo del infierno parecía devorarlo todo. Solo quedaba desesperación.",
						"vietnamese": "Vực thẳm địa ngục dường như nuốt chửng mọi thứ. Chỉ còn lại sự tuyệt vọng.",
						"thai": "ขุมนรกดูดกลืนทุกสิ่ง ราวกับความสิ้นหวังเท่านั้นที่ยังคงอยู่.",
						"hindi": "नर्क का अगाadh कुंड सब कुछ निगल रहा था। केवल निराशा ही छाई थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 어둠 속에서 정체 모를 그림자가 모습을 드러냈다. 네 번째 중간보스였다.",
						"english": "From the immense darkness, an unknown shadow appeared. It was the fourth mid-boss.",
						"japanese": "巨大な闇の中から、正体不明の影が現れた。それは四番目の中ボスだった。",
						"chinese": "巨大的黑暗中，一个不明身份的影子出现了。那是第四个中级首领。",
						"french": "Une ombre inconnue est apparue des ténèbres immenses. C'était le quatrième boss intermédiaire.",
						"spanish": "Una sombra desconocida emergió de la inmensa oscuridad. Era el cuarto subjefe.",
						"vietnamese": "Từ bóng tối khổng lồ, một bóng hình không rõ danh tính xuất hiện. Đó là trùm phụ thứ tư.",
						"thai": "จากความมืดมิดอันกว้างใหญ่ เงาลึกลับได้ปรากฏขึ้น มันคือบอสรองตัวที่สี่",
						"hindi": "विशाल अंधकार से एक अज्ञात छाया प्रकट हुई। वह चौथा मध्य-बॉस था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "마지막 발악인가, 미물들. 너희의 시간은 끝났다.",
						"english": "Is this your final struggle, you lowly creatures? Your time is up.",
						"japanese": "これが最後のあがきか、下等な者たちよ。お前たちの時間は終わった。",
						"chinese": "这是你们最后的挣扎吗，蝼蚁们？你们的时间结束了。",
						"french": "Est-ce votre dernier sursaut, misérables créatures ? Votre temps est écoulé.",
						"spanish": "¿Es este vuestro último aliento, seres insignificantes? Vuestro tiempo ha terminado.",
						"vietnamese": "Đây là lần vùng vẫy cuối cùng của các ngươi sao, lũ côn trùng? Thời gian của các ngươi đã hết rồi.",
						"thai": "นี่คือการดิ้นรนครั้งสุดท้ายของพวกแกงั้นรึ เจ้าสิ่งมีชีวิตต่ำต้อย? เวลาของพวกแกหมดลงแล้ว",
						"hindi": "क्या यह तुम्हारी अंतिम छटपटाहट है, तुच्छ प्राणियों? तुम्हारा समय समाप्त हो गया।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비켜! 더 이상 잃을 순 없어!",
						"english": "Get out of the way! I can't lose anything more!",
						"japanese": "退け！これ以上、何も失えない！",
						"chinese": "让开！我不能再失去任何东西了！",
						"french": "Poussez-vous ! Je ne peux plus rien perdre !",
						"spanish": "¡Apartaos! ¡No puedo perder nada más!",
						"vietnamese": "Tránh ra! Tôi không thể mất thêm thứ gì nữa!",
						"thai": "หลีกไป! ข้าไม่อาจเสียอะไรไปมากกว่านี้อีกแล้ว!",
						"hindi": "हटो! मैं अब और कुछ नहीं खो सकता!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "soot",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "도망쳐… 힘… 너무 강해…",
						"english": "Run... The power... too strong...",
						"japanese": "逃げろ… 力が… 強すぎる…",
						"chinese": "快跑… 力量… 太强了…",
						"french": "Fuyez… La force… trop puissante…",
						"spanish": "Huid... El poder... demasiado fuerte...",
						"vietnamese": "Chạy đi… Sức mạnh… quá lớn…",
						"thai": "หนีไป… พลัง… แข็งแกร่งเกินไป…",
						"hindi": "भागो… शक्ति… बहुत प्रबल है…"
					},
					"emotion": "sad",
					"speaker": "soot"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"지옥의 가장 깊은 나락. 시간은 멈추지 않고 흘렀다.",
			"수렁의 몸은 지옥의 에너지에 잠식되어, 존재 자체가 희미해져 갔다.",
			"남은 시간은 이제 막바지. 모든 것이 소멸할 위기에 처했다.",
			"절망 속에서, 탐험대는 마지막 결전을 향해 나아간다."
		],
		"english": [
			"The deepest abyss of hell. Time flowed ceaselessly.",
			"The body of Su-rung was consumed by hell's energy, fading into oblivion.",
			"Time was running out. Everything was on the verge of annihilation.",
			"In despair, the expedition pressed on towards the final showdown."
		],
		"japanese": [
			"地獄の最深部。時間は絶え間なく流れた。",
			"スルンの体は地獄のエネルギーに侵食され、その存在自体が薄れていった。",
			"残された時間はわずか。全てが消滅の危機に瀕していた。",
			"絶望の中、探検隊は最後の決戦へと進む。"
		],
		"chinese": [
			"地狱最深渊。时间永不停歇地流逝着。",
			"苏朗的身体被地狱的能量侵蚀，存在本身也变得模糊不清。",
			"所剩时间已不多。一切都面临着毁灭的危机。",
			"在绝望中，探险队走向了最后的决战。"
		],
		"french": [
			"Les abysses les plus profondes de l'enfer. Le temps s'écoulait sans fin.",
			"Le corps de Surung fut consumé par l'énergie de l'enfer, son existence même s'estompant.",
			"Le temps était compté. Tout était au bord de l'annihilation.",
			"Dans le désespoir, l'expédition avançait vers l'affrontement final."
		],
		"spanish": [
			"El abismo más profundo del infierno. El tiempo fluía sin cesar.",
			"El cuerpo de Su-rung fue consumido por la energía del infierno, su existencia misma se desvanecía.",
			"El tiempo se agotaba. Todo estaba al borde de la aniquilación.",
			"En la desesperación, la expedición avanzó hacia la confrontación final."
		],
		"vietnamese": [
			"Vực sâu nhất của địa ngục. Thời gian trôi đi không ngừng nghỉ.",
			"Cơ thể của Su-rung bị năng lượng địa ngục ăn mòn, sự tồn tại của nó dần trở nên mờ nhạt.",
			"Thời gian còn lại đã cạn kiệt. Mọi thứ đang đứng trước bờ vực diệt vong.",
			"Trong tuyệt vọng, đoàn thám hiểm tiến về trận chiến cuối cùng."
		],
		"thai": [
			"ก้นบึ้งที่ลึกที่สุดของนรก. เวลาก็ยังคงไหลไม่หยุดยั้ง.",
			"ร่างของซูรังถูกพลังงานแห่งนรกกัดกิน ทำให้ตัวตนของเขากำลังเลือนหายไป.",
			"เวลาที่เหลือใกล้หมดลงแล้ว. ทุกสิ่งกำลังเผชิญหน้ากับการล่มสลาย.",
			"ท่ามกลางความสิ้นหวัง คณะสำรวจได้มุ่งหน้าสู่การเผชิญหน้าครั้งสุดท้าย."
		],
		"hindi": [
			"नरक की सबसे गहरी खाई। समय बिना रुके बहता रहा。",
			"सुरंग का शरीर नरक की ऊर्जा से भस्म हो गया, उसका अस्तित्व ही मिटता जा रहा था।",
			"शेष समय अब समाप्ति की ओर था। सब कुछ विनाश के कगार पर था।",
			"निराशा में, अभियान दल अंतिम मुकाबले की ओर बढ़ा।"
		]
	}
} as const;
