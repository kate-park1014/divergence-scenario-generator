export const scenario_hell_memo_4_03 = {
	"scenario_id": "hell_memo_4_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
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
					"emotion": "base",
					"content": {
						"korean": "용암 강변을 낡은 제복의 배달부가 질주한다. 제 몸의 세 배만 한 소포를 짊어진 채.",
						"english": "Along the lava river, a deliveryman in a worn uniform races, burdened with a package three times his size.",
						"japanese": "溶岩の川辺を、擦り切れた制服の配達人が疾走する。自身の三倍もある小包を背負いながら。",
						"chinese": "在熔岩河畔，一个穿着旧制服的送货员疾驰而过，背负着一个有他身体三倍大的包裹。",
						"french": "Le long de la rivière de lave, un livreur en uniforme usé court, portant un colis trois fois plus grand que lui.",
						"spanish": "A lo largo del río de lava, un repartidor con un uniforme gastado corre, cargando un paquete tres veces más grande que él.",
						"vietnamese": "Dọc bờ sông dung nham, một người đưa thư trong bộ đồng phục cũ kỹ đang phóng đi, vác theo một kiện hàng lớn gấp ba lần cơ thể anh ta.",
						"thai": "ริมแม่น้ำลาวา บุรุษไปรษณีย์ในเครื่องแบบเก่ากำลังวิ่งไป แบกหีบห่อขนาดใหญ่กว่าตัวเขาสามเท่า",
						"hindi": "लावा नदी के किनारे, एक पुरानी वर्दी वाला डिलीवरीमैन दौड़ रहा है, अपने शरीर से तीन गुना बड़ा पार्सल लिए हुए।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저게… 배달부?",
						"english": "Is that... the deliveryman?",
						"japanese": "あれが…配達人？",
						"chinese": "那是……送货员？",
						"french": "C'est... le livreur ?",
						"spanish": "¿Ese es... el repartidor?",
						"vietnamese": "Đó là... người đưa thư?",
						"thai": "นั่น... บุรุษไปรษณีย์หรือ?",
						"hindi": "वह... डिलीवरीमैन है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "brim"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "조심해요! 저 자가 지나간 자리의 풍경이… 일그러지고 있어요!",
						"english": "Be careful! The landscape where he passed... it's distorting!",
						"japanese": "気をつけて！あいつが通り過ぎた場所の風景が…歪んでる！",
						"chinese": "小心！他经过的地方……风景正在扭曲！",
						"french": "Attention ! Le paysage là où il est passé... il se déforme !",
						"spanish": "¡Cuidado! ¡El paisaje por donde pasó... se está distorsionando!",
						"vietnamese": "Cẩn thận! Cảnh vật nơi hắn đi qua... đang bị bóp méo!",
						"thai": "ระวัง! ทิวทัศน์ที่เขาผ่านไป... มันบิดเบี้ยว!",
						"hindi": "सावधान! जिस जगह से वह गुजरा... वह विकृत हो रही है!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "늦었어! 늦었어! 길 막는 악성 민원인들인가!",
						"english": "Too late! Too late! Are these malicious complainants blocking my way?!",
						"japanese": "遅い！遅い！道を邪魔する悪質なクレーマーどもか！",
						"chinese": "太迟了！太迟了！是些挡路的恶意投诉者吗！",
						"french": "Trop tard ! Trop tard ! Des plaignants malveillants me bloquent le chemin ?! ",
						"spanish": "¡Demasiado tarde! ¡Demasiado tarde! ¿Son estos quejicas maliciosos bloqueando mi camino?!",
						"vietnamese": "Muộn rồi! Muộn rồi! Là mấy tên khách hàng khó chịu cản đường sao!",
						"thai": "สายไปแล้ว! สายไปแล้ว! พวกนี้เป็นลูกค้าหัวร้อนที่ขวางทางอยู่หรือไง!",
						"hindi": "बहुत देर हो गई! बहुत देर हो गई! क्या ये रास्ते रोकने वाले दुर्भावनापूर्ण शिकायतकर्ता हैं?!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "민원인? 우리가?",
						"english": "Complainants? Us?",
						"japanese": "クレーマー？我々が？",
						"chinese": "投诉者？我们？",
						"french": "Des plaignants ? Nous ?",
						"spanish": "¿Quejicas? ¿Nosotros?",
						"vietnamese": "Khách hàng khó chịu? Chúng ta?",
						"thai": "ลูกค้าหัวร้อน? เราเนี่ยนะ?",
						"hindi": "शिकायतकर्ता? हम?"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "배달부가 지나간 자리마다, 세상의 풍경이 순간적으로 깜빡였다.",
						"english": "Everywhere the deliveryman passed, the world's landscape flickered momentarily.",
						"japanese": "配達人が通り過ぎた場所ごとに、世界の風景は瞬間的に明滅した。",
						"chinese": "送货员每经过一处，世界的景色都会瞬间闪烁。",
						"french": "Partout où le livreur passait, le paysage du monde vacillait un instant.",
						"spanish": "Dondequiera que el repartidor pasaba, el paisaje del mundo parpadeaba momentáneamente.",
						"vietnamese": "Mỗi nơi người đưa thư đi qua, cảnh vật thế giới lại chớp nhoáng.",
						"thai": "ทุกที่ที่บุรุษไปรษณีย์ผ่านไป ทิวทัศน์ของโลกก็กระพริบชั่วขณะ",
						"hindi": "जहाँ-जहाँ डिलीवरीमैन गुज़रा, दुनिया का परिदृश्य क्षण भर के लिए झिलमिलाया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "시간이… 뒤틀리는 것 같아.",
						"english": "Time… it feels like it's distorting.",
						"japanese": "時間が…歪んでいるようだ。",
						"chinese": "时间…好像扭曲了。",
						"french": "Le temps… semble se tordre.",
						"spanish": "El tiempo… parece distorsionarse.",
						"vietnamese": "Thời gian… cứ như bị bóp méo vậy.",
						"thai": "เวลา… เหมือนกำลังบิดเบี้ยว",
						"hindi": "समय… जैसे मुड़ रहा है।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "brim",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "맞아요! 이 자는 단순한 배달부가 아니에요. 시간을 다루고 있어!",
						"english": "That's right! This person isn't just a delivery guy. They're manipulating time!",
						"japanese": "そうだ！こいつはただの配達員じゃない。時間を操っているんだ！",
						"chinese": "没错！这家伙不只是个快递员。他在操纵时间！",
						"french": "C'est ça ! Ce type n'est pas qu'un livreur. Il manipule le temps !",
						"spanish": "¡Exacto! ¡Esta persona no es solo un repartidor! ¡Está manipulando el tiempo!",
						"vietnamese": "Đúng vậy! Kẻ này không phải là một người giao hàng bình thường. Hắn ta đang điều khiển thời gian!",
						"thai": "ใช่เลย! หมอนี่ไม่ใช่แค่คนส่งของธรรมดา เขาควบคุมเวลาได้!",
						"hindi": "सही कहा! यह सिर्फ एक डिलीवरी वाला नहीं है। यह समय को संभाल रहा है!"
					},
					"type": "speech",
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "방해하지 마! 배달 지연은 용납 못 한다고!",
						"english": "Don't interfere! Delivery delays are unacceptable!",
						"japanese": "邪魔するな！配達の遅延は許されないぞ！",
						"chinese": "别碍事！我可不能容忍送货延迟！",
						"french": "Ne m'interrompez pas ! Les retards de livraison sont inacceptables !",
						"spanish": "¡No interfieras! ¡No puedo permitir retrasos en la entrega!",
						"vietnamese": "Đừng cản đường! Tôi không chấp nhận việc giao hàng chậm trễ đâu!",
						"thai": "อย่าขวาง! ฉันทนการส่งของล่าช้าไม่ได้หรอก!",
						"hindi": "बाधा मत डालो! डिलीवरी में देरी बर्दाश्त नहीं की जाएगी!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "대체 뭘 그렇게 필사적으로 배달하는 거야?",
						"english": "What are you so desperately trying to deliver?",
						"japanese": "一体何をそんなに必死に配達してるんだ？",
						"chinese": "你到底在拼命送什么？",
						"french": "Mais qu'est-ce que tu tentes de livrer avec tant de désespoir ?",
						"spanish": "¿Qué estás entregando con tanta desesperación?",
						"vietnamese": "Rốt cuộc anh đang cố gắng giao cái quái gì vậy?",
						"thai": "ตกลงแกกำลังพยายามส่งอะไรขนาดนั้น?",
						"hindi": "तुम इतनी बेताबी से क्या डिलीवर कर रहे हो?"
					},
					"type": "speech",
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "brim",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "저 소포가… 위험해요. 안에 뭐가 들었는지 확인해야 해요!",
						"english": "That package… it's dangerous. We need to check what's inside!",
						"japanese": "あの小包が…危ない。中身を確認しないと！",
						"chinese": "那个包裹…很危险。我们得看看里面是什么！",
						"french": "Ce colis… est dangereux. Il faut vérifier ce qu'il contient !",
						"spanish": "Ese paquete… es peligroso. ¡Necesitamos revisar qué hay dentro!",
						"vietnamese": "Gói hàng đó… nguy hiểm lắm. Chúng ta phải kiểm tra xem bên trong có gì!",
						"thai": "พัสดุนั่น…อันตรายนะ เราต้องดูว่ามีอะไรอยู่ข้างใน!",
						"hindi": "वह पार्सल… खतरनाक है। हमें देखना होगा कि अंदर क्या है!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "brim"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "안 돼! 절대 안 돼! 이건… 중요한 물건이야! 함부로 열 수 없어!",
						"english": "No! Absolutely not! This is… important! I can't just open it!",
						"japanese": "だめだ！絶対だめだ！これは…重要な物なんだ！勝手に開けるな！",
						"chinese": "不行！绝对不行！这…这是重要的东西！不能随便打开！",
						"french": "Non ! Surtout pas ! C'est… important ! Je ne peux pas l'ouvrir comme ça !",
						"spanish": "¡No! ¡De ninguna manera! ¡Esto es… importante! ¡No puedo abrirlo así como así!",
						"vietnamese": "Không! Tuyệt đối không được! Đây là… một món đồ quan trọng! Không thể tùy tiện mở ra được!",
						"thai": "ไม่นะ! ไม่ได้เด็ดขาด! นี่มัน…ของสำคัญ! เปิดสุ่มสี่สุ่มห้าไม่ได้!",
						"hindi": "नहीं! बिल्कुल नहीं! यह… एक महत्वपूर्ण चीज़ है! इसे यूँ ही नहीं खोल सकते!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 일으킨 소동 때문에 세상이 엉망이야! 멈춰!",
						"english": "The world's a mess because of the chaos you caused! Stop it!",
						"japanese": "お前が起こした騒動のせいで、世界がめちゃくちゃだ！やめろ！",
						"chinese": "因为你造成的骚动，世界都乱套了！住手！",
						"french": "Le monde est sens dessus dessous à cause du chaos que tu as provoqué ! Arrête ça !",
						"spanish": "¡El mundo está hecho un desastre por el caos que has causado! ¡Detente!",
						"vietnamese": "Thế giới đang hỗn loạn vì sự náo động mà ngươi gây ra! Dừng lại đi!",
						"thai": "โลกกำลังวุ่นวายเพราะความปั่นป่วนที่แกก่อ! หยุดเดี๋ยวนี้!",
						"hindi": "तुमने जो हंगामा मचाया है, उसकी वजह से दुनिया अस्त-व्यस्त हो गई है! रुक जाओ!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "어쩔 수 없어! 다들 비켜! 늦으면… 정말 끝장이라고!",
						"english": "No choice! Everyone move aside! If I'm late… it's truly over!",
						"japanese": "仕方ない！みんな退け！遅れたら…本当に終わりなんだ！",
						"chinese": "没办法了！都给我让开！要是迟了…那就真的完了！",
						"french": "Pas le choix ! Poussez-vous tous ! Si je suis en retard… c'est la fin, vraiment !",
						"spanish": "¡No hay remedio! ¡Todos fuera! Si llego tarde… ¡realmente será el fin!",
						"vietnamese": "Không còn cách nào khác! Tất cả tránh ra! Nếu tôi trễ… thì mọi thứ sẽ thực sự kết thúc!",
						"thai": "ไม่มีทางเลือกแล้ว! ทุกคนหลีกไป! ถ้าช้าไป…มันจบสิ้นจริงๆ นะ!",
						"hindi": "कोई चारा नहीं! सब हट जाओ! अगर देर हो गई… तो सचमुच सब खत्म हो जाएगा!"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "대체 무슨 비밀을 감추고 있는 거야?",
						"english": "What secret are you hiding?",
						"japanese": "一体どんな秘密を隠してるんだ？",
						"chinese": "你到底在隐瞒什么秘密？",
						"french": "Quel secret caches-tu donc ?",
						"spanish": "¿Qué secreto estás ocultando?",
						"vietnamese": "Rốt cuộc anh đang che giấu bí mật gì vậy?",
						"thai": "แกกำลังซ่อนความลับอะไรอยู่กันแน่?",
						"hindi": "तुम आखिर क्या राज़ छुपा रहे हो?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "배달부의 움직임은 점점 더 격렬해졌고, 세상은 더욱 크게 일그러져 갔다.",
						"english": "The delivery person's movements grew increasingly frantic, and the world continued to distort even more severely.",
						"japanese": "配達員の動きはますます激しくなり、世界はさらに大きく歪んでいった。",
						"chinese": "快递员的动作越来越剧烈，世界也更加严重地扭曲着。",
						"french": "Les mouvements du livreur devinrent de plus en plus frénétiques, et le monde se déformait encore plus gravement.",
						"spanish": "Los movimientos del repartidor se hicieron cada vez más frenéticos, y el mundo continuó distorsionándose aún más gravemente.",
						"vietnamese": "Hành động của người giao hàng ngày càng dữ dội, và thế giới tiếp tục bị bóp méo trầm trọng hơn.",
						"thai": "การเคลื่อนไหวของคนส่งของรุนแรงขึ้นเรื่อยๆ และโลกก็บิดเบี้ยวมากขึ้นไปอีก",
						"hindi": "डिलीवरी वाले की हरकतें और भी हिंसक हो गईं, और दुनिया और भी बुरी तरह से विकृत होती चली गई।"
					}
				},
				{
					"speaker": "brim",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "단순한 능력이 아니에요! 시간 그 자체를 왜곡하고 있어요! 놈을 멈춰야 해요!",
						"english": "It's not just an ability! It's distorting time itself! We have to stop them!",
						"japanese": "単なる能力じゃない！時間そのものを歪めている！奴を止めなければ！",
						"chinese": "这不仅仅是能力！它正在扭曲时间本身！我们必须阻止它！",
						"french": "Ce n'est pas qu'une simple capacité ! Ça déforme le temps lui-même ! Il faut l'arrêter !",
						"spanish": "¡No es solo una habilidad! ¡Está distorsionando el tiempo mismo! ¡Debemos detenerlo!",
						"vietnamese": "Không chỉ là năng lực! Nó đang bóp méo thời gian! Phải ngăn nó lại!",
						"thai": "นี่ไม่ใช่แค่พลัง! มันกำลังบิดเบือนกาลเวลา! เราต้องหยุดมัน!",
						"hindi": "यह सिर्फ एक क्षमता नहीं है! यह समय को ही विकृत कर रहा है! हमें उसे रोकना होगा!"
					},
					"type": "speech",
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "저 소포에 뭔가 있어! 저걸 뺏어야만 해!",
						"english": "There's something in that package! We have to take it!",
						"japanese": "あの小包に何かある！あれを奪わなければ！",
						"chinese": "那个包裹里有东西！我们必须抢走它！",
						"french": "Il y a quelque chose dans ce colis ! Il faut le récupérer !",
						"spanish": "¡Hay algo en ese paquete! ¡Tenemos que quitárselo!",
						"vietnamese": "Có gì đó trong gói hàng đó! Phải đoạt lấy nó!",
						"thai": "มีบางอย่างอยู่ในพัสดุนั้น! เราต้องแย่งมันมา!",
						"hindi": "उस पैकेज में कुछ है! हमें उसे छीनना होगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "내 임무를… 방해하지 마! 마지막 경고야! 민원인이라고 봐주지 않아!",
						"english": "Don't... interfere with my mission! Last warning! I won't hold back, even for a 'bother'!",
						"japanese": "私の任務を…邪魔するな！最後の警告だ！邪魔者には容赦しない！",
						"chinese": "别…妨碍我的任务！这是最后警告！我不会对‘捣乱者’手下留情！",
						"french": "Ne… perturbe pas ma mission ! Dernier avertissement ! Je n'aurai aucune pitié, même pour un 'fauteur de troubles' !",
						"spanish": "¡No… interfieras en mi misión! ¡Última advertencia! ¡No tendré clemencia, ni siquiera con un 'problemático'!",
						"vietnamese": "Đừng… cản trở nhiệm vụ của ta! Cảnh cáo cuối cùng! Ta sẽ không nương tay dù ngươi là ‘kẻ gây rối’!",
						"thai": "อย่า… ขัดขวางภารกิจของฉัน! นี่คือคำเตือนสุดท้าย! ฉันจะไม่ปรานีกับ 'ตัวก่อกวน'!",
						"hindi": "मेरे मिशन में… दखल मत दो! यह आखिरी चेतावनी है! मैं 'परेशान करने वाले' को भी बख्शूंगा नहीं!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"emotion": "angry",
					"content": {
						"korean": "이대로는 보낼 수 없어!",
						"english": "I can't let them pass like this!",
						"japanese": "このままでは行かせられない！",
						"chinese": "不能就这样放走！",
						"french": "Je ne peux pas les laisser passer ainsi !",
						"spanish": "¡No puedo dejarlos ir así!",
						"vietnamese": "Không thể để họ đi như vậy!",
						"thai": "ฉันปล่อยให้พวกเขาผ่านไปแบบนี้ไม่ได้!",
						"hindi": "मैं उन्हें ऐसे जाने नहीं दे सकता!"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 배달… 실패…! 이건… 내 책임이 아니야… 아니라고… (시간이 멈추는 듯한 단말마)",
						"english": "Ugh… Delivery… failed…! This isn't… my fault… It isn't… (A dying gasp as if time stops)",
						"japanese": "くぅっ…配達…失敗…！これは…俺の責任じゃない…違うんだ… (時間が止まるかのような断末魔)",
						"chinese": "呃… 送货… 失败…！这不是… 我的错… 不是的… (仿佛时间停止般的临终遗言)",
						"french": "Ugh… Livraison… échouée…! Ce n'est pas… ma faute… Non… (Un râle comme si le temps s'arrêtait)",
						"spanish": "Ugh… ¡Entrega… fallida…! Esto no es… mi culpa… No… (Un último aliento como si el tiempo se detuviera)",
						"vietnamese": "Ưgh… Giao hàng… thất bại…! Đây không phải… lỗi của tôi… Không phải… (Hơi thở cuối cùng như thể thời gian ngừng lại)",
						"thai": "อึก… จัดส่ง… ล้มเหลว…! นี่ไม่ใช่… ความผิดของฉัน… ไม่ใช่… (เสียงเฮือกสุดท้ายราวกับเวลาหยุดนิ่ง)",
						"hindi": "उफ़… डिलीवरी… विफल…! यह… मेरी गलती नहीं है… नहीं है… (जैसे समय थम गया हो, एक अंतिम साँस)"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "소포… 안에 아무것도 없어. 이게 다 뭐야?",
						"english": "The package… There's nothing inside. What is all this?",
						"japanese": "小包… 中に何もない。これ、一体何だ？",
						"chinese": "包裹… 里面什么都没有。这到底是什么？",
						"french": "Le colis… Il n'y a rien à l'intérieur. C'est quoi tout ça ?",
						"spanish": "El paquete… No hay nada dentro. ¿Qué es todo esto?",
						"vietnamese": "Gói hàng… Không có gì bên trong. Đây là cái gì vậy?",
						"thai": "พัสดุ… ไม่มีอะไรอยู่ข้างในเลย นี่มันอะไรกัน?",
						"hindi": "पैकेट… अंदर कुछ भी नहीं है। यह सब क्या है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "brim",
					"duration_ms": 500
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "아니요. 빈 게 아니에요. 종잇장들이… 지옥의 언어가 아니에요. 우주적 좌표… 그리고 시간 기록…?",
						"english": "No. It's not empty. The papers… They aren't the language of hell. Cosmic coordinates… and time records…?",
						"japanese": "違う。空っぽじゃない。紙切れが… 地獄の言語じゃない。宇宙座標… そして時間記録…？",
						"chinese": "不。它不是空的。这些纸张… 不是地狱的语言。宇宙坐标… 还有时间记录…？",
						"french": "Non. Ce n'est pas vide. Les papiers… Ce n'est pas le langage de l'enfer. Des coordonnées cosmiques… et des enregistrements temporels…?",
						"spanish": "No. No está vacío. Los papeles… No son el lenguaje del infierno. Coordenadas cósmicas… ¿y registros de tiempo…?",
						"vietnamese": "Không. Nó không trống rỗng. Những tờ giấy… Không phải ngôn ngữ địa ngục. Tọa độ vũ trụ… và ghi chép thời gian…?",
						"thai": "ไม่สิ มันไม่ว่างเปล่า กระดาษพวกนี้… ไม่ใช่ภาษาของนรก พิกัดจักรวาล… และบันทึกเวลา…?",
						"hindi": "नहीं। यह खाली नहीं है। कागजात… वे नरक की भाषा नहीं हैं। ब्रह्मांडीय निर्देशांक… और समय के रिकॉर्ड…?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "배달부는 사라졌다. 거대한 소포는 텅 비어 있었다. 하지만 남겨진 종잇장들은 혼란을 넘어, 잊힌 차원의 비밀을 암시했다. 거대한 게임은 이제 시작이었다.",
						"english": "The deliveryman vanished. The massive package was empty. But the papers left behind hinted at secrets beyond chaos, secrets of forgotten dimensions. The grand game had just begun.",
						"japanese": "配達人は消えた。巨大な小包は空っぽだった。しかし、残された紙切れは混乱を超え、忘れ去られた次元の秘密を暗示していた。壮大なゲームは今始まったばかりだった。",
						"chinese": "送货员消失了。巨大的包裹空空如也。但留下的纸张超越了混乱，暗示着被遗忘维度的秘密。这场宏大的游戏才刚刚开始。",
						"french": "Le livreur avait disparu. L'énorme colis était vide. Mais les papiers laissés derrière insinuaient des secrets au-delà du chaos, des secrets de dimensions oubliées. Le grand jeu venait de commencer.",
						"spanish": "El repartidor desapareció. El enorme paquete estaba vacío. Pero los papeles que quedaron insinuaban secretos más allá del caos, secretos de dimensiones olvidadas. El gran juego acababa de comenzar.",
						"vietnamese": "Người giao hàng biến mất. Gói hàng khổng lồ trống rỗng. Nhưng những tờ giấy còn lại gợi ý về những bí mật vượt ra ngoài sự hỗn loạn, những bí mật của các chiều không gian bị lãng quên. Trò chơi vĩ đại giờ đây mới bắt đầu.",
						"thai": "บุรุษไปรษณีย์หายไป พัสดุขนาดมหึมาว่างเปล่า แต่กระดาษที่เหลือทิ้งไว้บ่งบอกถึงความลับที่อยู่เหนือความสับสนวุ่นวาย ความลับของมิติที่ถูกลืม เกมอันยิ่งใหญ่เพิ่งจะเริ่มต้นขึ้น",
						"hindi": "डिलीवरीमैन गायब हो गया। विशाल पैकेट खाली था। लेकिन पीछे छोड़े गए कागजात अव्यवस्था से परे रहस्यों, भूले हुए आयामों के रहस्यों का संकेत दे रहे थे। भव्य खेल अभी शुरू हुआ था।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…다음에 뭘 해야 하지?",
						"english": "…What should I do next?",
						"japanese": "…次に何をすべきだ？",
						"chinese": "……接下来我该做什么？",
						"french": "…Que dois-je faire ensuite ?",
						"spanish": "…¿Qué debo hacer ahora?",
						"vietnamese": "…Tôi nên làm gì tiếp theo?",
						"thai": "…ต่อไปฉันควรทำอะไร?",
						"hindi": "…आगे मुझे क्या करना चाहिए?"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "시간이 멈췄다. 모든 것이 정지했다.",
						"english": "Time stopped. Everything froze.",
						"japanese": "時間が止まった。全てが静止した。",
						"chinese": "时间停止了。一切都静止了。",
						"french": "Le temps s'est arrêté. Tout s'est figé.",
						"spanish": "El tiempo se detuvo. Todo se inmovilizó.",
						"vietnamese": "Thời gian dừng lại. Mọi thứ đứng yên.",
						"thai": "เวลาหยุดนิ่ง ทุกสิ่งหยุดชะงัก",
						"hindi": "समय रुक गया। सब कुछ थम गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하! 어리석은 민원인들! 지연은… 잠시뿐! 배달은… 반드시… 계속된다!",
						"english": "Ha! Foolish complainants! The delay is… only temporary! Delivery will… certainly… continue!",
						"japanese": "ハッ！愚かな苦情者め！遅延は…一時的なもの！配達は…必ず…続く！",
						"chinese": "哈！愚蠢的投诉者！延迟…只是暂时的！送货…必定…继续！",
						"french": "Ha ! Stupides plaignants ! Le retard n'est… que temporaire ! La livraison… doit… continuer !",
						"spanish": "¡Ja! ¡Estúpidos quejumbrosos! ¡El retraso es… solo temporal! ¡La entrega… sin falta… continuará!",
						"vietnamese": "Ha! Những kẻ than phiền ngu ngốc! Sự chậm trễ… chỉ là tạm thời! Việc giao hàng… chắc chắn… sẽ tiếp tục!",
						"thai": "ฮ่า! พวกขี้บ่นโง่เง่า! ความล่าช้าเป็น… แค่ชั่วคราว! การจัดส่งจะ… ต้อง… ดำเนินต่อไป!",
						"hindi": "हा! मूर्ख शिकायतकर्ता! देरी… बस अस्थायी है! डिलीवरी… निश्चित रूप से… जारी रहेगी!"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장! 다시… 반드시 저 자를 멈춰야 해!",
						"english": "Damn it! Again… I must stop that person!",
						"japanese": "クソッ！もう一度…必ずあいつを止めなければ！",
						"chinese": "该死！必须…再次阻止那家伙！",
						"french": "Zut ! Encore une fois… je dois absolument l'arrêter !",
						"spanish": "¡Maldita sea! De nuevo… ¡debo detener a esa persona!",
						"vietnamese": "Chết tiệt! Lần nữa… tôi phải ngăn chặn tên đó!",
						"thai": "ให้ตายสิ! อีกครั้ง… ฉันต้องหยุดคนนั้นให้ได้!",
						"hindi": "धिक्कार है! फिर से… मुझे उस व्यक्ति को अवश्य रोकना होगा!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "brim"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "저 소포… 다음 장소로 이동하고 있어요. 서둘러야 해요!",
						"english": "That package… It's moving to the next location. We must hurry!",
						"japanese": "あの小包…次の場所へ移動している。急がなければ！",
						"chinese": "那个包裹… 正在前往下一个地点。我们必须快点！",
						"french": "Ce colis… Il se dirige vers la prochaine destination. Il faut se dépêcher !",
						"spanish": "Ese paquete… Se está moviendo al siguiente lugar. ¡Debemos darnos prisa!",
						"vietnamese": "Gói hàng đó… Nó đang di chuyển đến địa điểm tiếp theo. Chúng ta phải nhanh lên!",
						"thai": "พัสดุนั่น… กำลังเคลื่อนที่ไปยังที่ต่อไป เราต้องรีบแล้ว!",
						"hindi": "वह पैकेट… अगली जगह जा रहा है। हमें जल्दी करनी होगी!"
					},
					"speaker": "brim",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내 거대한 그림자가 멈춰 섰다. 숨을 헐떡이며 몸을 뒤흔들었다.",
						"english": "Finally, the colossal shadow halted. It panted, shaking its body.",
						"japanese": "ついに、巨大な影が立ち止まった。息を切らし、体を震わせた。",
						"chinese": "终于，巨大的黑影停了下来。它喘着粗气，全身颤抖。",
						"french": "Enfin, l'ombre colossale s'arrêta. Elle haletait, secouant son corps.",
						"spanish": "Finalmente, la sombra colosal se detuvo. Jadeaba, sacudiendo su cuerpo.",
						"vietnamese": "Cuối cùng, bóng đen khổng lồ dừng lại. Nó thở hổn hển, run rẩy cả người.",
						"thai": "ในที่สุด เงาขนาดมหึมาก็หยุดลง มันหอบหายใจ ตัวสั่นเทา",
						"hindi": "आखिरकार, विशाल छाया रुक गई। वह हाँफ रहा था, अपना शरीर हिला रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하아… 하아… (거친 숨소리) 악성 민원인들이… 또…! 제발, 방해하지 마세요!",
						"english": "Haa... Haa... (Heavy breathing) Those malicious 'troublemakers'... again...! Please, don't interfere!",
						"japanese": "ハァ… ハァ… (荒い息遣い) 悪質な『邪魔者』たちが… また…！頼むから、邪魔しないでください！",
						"chinese": "哈啊… 哈啊… (粗重的喘息声) 那些恶意的‘捣乱者’… 又来了…！拜托，别打扰我！",
						"french": "Haa… Haa… (Respiration laborieuse) Ces 'fauteurs de troubles' malveillants… encore… ! S'il vous plaît, ne m'interrompez pas !",
						"spanish": "Jaa… Jaa… (Respiración agitada) ¡Esos 'problemáticos' maliciosos… otra vez…! ¡Por favor, no interfieran!",
						"vietnamese": "Haa… Haa… (Thở dốc) Những ‘kẻ gây rối’ ác ý… lại nữa…! Làm ơn, đừng cản trở nữa!",
						"thai": "ฮ้า… ฮ้า… (เสียงหอบ) พวก 'ตัวก่อกวน' ร้ายกาจ… อีกแล้ว…! ได้โปรด อย่าขัดขวางเลย!",
						"hindi": "हा… हा… (तेज साँसें) वे दुर्भावनापूर्ण 'परेशान करने वाले'... फिर से...! कृपया, दखल मत दो!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그 소포가 뭔데! 왜 그렇게 필사적이야!",
						"english": "What's in that package?! Why are you so desperate?!",
						"japanese": "あの小包は何なんだ！なぜそんなに必死なんだ！",
						"chinese": "那个包裹到底是什么？！你为什么这么拼命？！",
						"french": "C'est quoi ce colis ?! Pourquoi es-tu si désespéré ?!",
						"spanish": "¡¿Qué hay en ese paquete?! ¡¿Por qué estás tan desesperado?!",
						"vietnamese": "Gói hàng đó là gì! Sao lại liều mạng đến thế!",
						"thai": "พัสดุนั้นคืออะไร! ทำไมถึงได้ทุ่มเทขนาดนั้น!",
						"hindi": "उस पैकेज में क्या है! तुम इतने बेताब क्यों हो!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건… 반드시… 제때… 전달되어야 해! 늦으면… 전부 끝장이야!",
						"english": "This… must… be delivered… on time! If it's late… everything's over!",
						"japanese": "これは… 必ず… 時間通りに… 届けなければならない！遅れたら… 全て終わりだ！",
						"chinese": "这… 必须… 准时… 送达！要是晚了… 就全完了！",
						"french": "Ceci… doit… être livré… à temps ! Si c'est en retard… tout est fini !",
						"spanish": "Esto… debe… ser entregado… a tiempo. Si llega tarde… ¡todo se acaba!",
						"vietnamese": "Cái này… nhất định… phải được giao… đúng hạn! Nếu trễ… thì mọi thứ… sẽ kết thúc!",
						"thai": "นี่… ต้อง… ถูกส่ง… ให้ทันเวลา! ถ้าช้าไป… ทุกอย่าง… ก็จบสิ้น!",
						"hindi": "यह… निश्चित रूप से… समय पर… पहुंचाया जाना चाहिए! अगर देर हुई… तो सब खत्म हो जाएगा!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "brim",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "brim",
					"emotion": "sad",
					"content": {
						"korean": "시간이 뒤틀리고 있어요. 저 소포가 원인이에요! 막아야 해요!",
						"english": "Time is being distorted. That package is the cause! We have to stop it!",
						"japanese": "時間が歪んでいる。あの小包が原因だ！止めなければ！",
						"chinese": "时间正在扭曲。那个包裹是原因！我们必须阻止它！",
						"french": "Le temps se tord. Ce colis en est la cause ! Il faut l'arrêter !",
						"spanish": "El tiempo se está distorsionando. ¡Ese paquete es la causa! ¡Debemos detenerlo!",
						"vietnamese": "Thời gian đang bị bóp méo. Gói hàng đó là nguyên nhân! Phải ngăn chặn nó!",
						"thai": "เวลากำลังบิดเบือนไป พัสดุนั้นคือต้นเหตุ! เราต้องหยุดมัน!",
						"hindi": "समय विकृत हो रहा है। वह पैकेज ही इसका कारण है! हमें उसे रोकना होगा!"
					}
				},
				{
					"content": {
						"korean": "…좋아. 그럼… 방해하는 모든… '민원인'을… 처리한다!",
						"english": "...Alright. Then… I'll deal with… all 'interferers'!",
						"japanese": "…よし。ならば…邪魔をする全ての…『邪魔者』を…処理する！",
						"chinese": "…好。那么… 就处理掉所有… 妨碍我的…‘捣乱者’！",
						"french": "...Bien. Alors… je vais m'occuper de tous les… 'fauteurs de troubles' !",
						"spanish": "...De acuerdo. Entonces… ¡me encargaré de todos los… 'problemáticos'!",
						"vietnamese": "…Được thôi. Vậy thì… ta sẽ xử lý… tất cả ‘kẻ gây rối’…!",
						"thai": "…ดี. งั้นก็… จัดการกับ… 'ตัวก่อกวน'… ทั้งหมดซะ!",
						"hindi": "…ठीक है। तो… मैं सभी… 'परेशान करने वालों' को… निपटाता हूँ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"배달부는 멈추지 않았다. 거대한 소포를 짊어진 채 지옥을 질주했다.",
			"그의 발자국마다 세상이 깜빡였다. 시간이 멈췄다 흐르기를 반복했다.",
			"단순한 배달이 아니었다. 놈은 시간을 짊어지고 있었다.",
			"그리고 우리는, 그 필사적인 배달을 막아야만 했다."
		],
		"english": [
			"The deliveryman didn't stop. He raced through hell, burdened with a colossal package.",
			"With every step, the world flickered. Time stopped and flowed, again and again.",
			"It wasn't a mere delivery. He carried time itself.",
			"And we, we had to stop that desperate delivery."
		],
		"japanese": [
			"配達人は止まらなかった。巨大な小包を背負い、地獄を疾走した。",
			"彼の一歩ごとに世界は明滅した。時間は止まり、そして流れ、を繰り返した。",
			"単なる配達ではなかった。彼は時間を背負っていたのだ。",
			"そして我々は、その必死の配達を止めなければならなかった。"
		],
		"chinese": [
			"送货员没有停下。他背负着一个巨大的包裹，在地狱中疾驰。",
			"他每迈出一步，世界都会闪烁。时间反复停滞又流逝。",
			"这并非一次简单的送货。他背负着时间。",
			"而我们，必须阻止那场拼死的送货。"
		],
		"french": [
			"Le livreur ne s'arrêtait pas. Il traversait l'enfer à toute vitesse, portant un colis colossal.",
			"À chaque pas, le monde vacillait. Le temps s'arrêtait et reprenait, encore et encore.",
			"Ce n'était pas une simple livraison. Il portait le temps lui-même.",
			"Et nous, nous devions arrêter cette livraison désespérée."
		],
		"spanish": [
			"El repartidor no se detuvo. Corrió por el infierno, cargado con un paquete colosal.",
			"Con cada paso, el mundo parpadeaba. El tiempo se detenía y fluía, una y otra vez.",
			"No era una simple entrega. Él llevaba el tiempo.",
			"Y nosotros, teníamos que detener esa entrega desesperada."
		],
		"vietnamese": [
			"Người đưa thư không dừng lại. Anh ta lao qua địa ngục, vác theo một kiện hàng khổng lồ.",
			"Mỗi bước chân của anh ta, thế giới lại chập chờn. Thời gian ngừng rồi lại trôi, lặp đi lặp lại.",
			"Đó không phải là một chuyến giao hàng đơn thuần. Hắn đang vác theo thời gian.",
			"Và chúng ta, phải ngăn chặn chuyến giao hàng đầy tuyệt vọng đó."
		],
		"thai": [
			"บุรุษไปรษณีย์ไม่หยุด เขาเร่งรุดผ่านนรก แบกหีบห่อขนาดมหึมา",
			"ทุกย่างก้าวของเขา โลกก็กระพริบ เวลาหยุดและไหลซ้ำแล้วซ้ำเล่า",
			"นี่ไม่ใช่แค่การส่งของ เขากำลังแบกเวลา",
			"และเรา เราต้องหยุดการจัดส่งที่สิ้นหวังนั้น"
		],
		"hindi": [
			"डिलीवरीमैन रुका नहीं। वह एक विशाल पार्सल लिए हुए, नरक से तेज़ी से गुज़रा।",
			"उसके हर कदम पर दुनिया झिलमिलाती थी। समय बार-बार रुकता और चलता रहा।",
			"यह सिर्फ एक डिलीवरी नहीं थी। वह समय को ढो रहा था।",
			"और हमें, उस बेताब डिलीवरी को रोकना ही था।"
		]
	}
} as const;
