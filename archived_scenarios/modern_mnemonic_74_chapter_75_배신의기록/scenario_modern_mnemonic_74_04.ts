export const scenario_modern_mnemonic_74_04 = {
	"scenario_id": "modern_mnemonic_74_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
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
					"type": "speech",
					"content": {
						"korean": "어둠이 짙은 골목, 익숙한 그림자가 나타났다.",
						"english": "In a dark alley, a familiar shadow appeared.",
						"japanese": "暗い路地、見慣れた影が現れた。",
						"chinese": "漆黑的巷子里，一个熟悉的身影出现了。",
						"french": "Dans une ruelle sombre, une silhouette familière apparut.",
						"spanish": "En un callejón oscuro, apareció una sombra familiar.",
						"vietnamese": "Trong con hẻm tối mịt, một bóng hình quen thuộc xuất hiện.",
						"thai": "ในตรอกมืดมิด เงาร่างคุ้นตาปรากฏขึ้น",
						"hindi": "एक अँधेरी गली में, एक जानी-पहचानी परछाई दिखाई दी।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "카이…?",
						"english": "Kai...?",
						"japanese": "カイ…？",
						"chinese": "凯……？",
						"french": "Kai...?",
						"spanish": "¿Kai...?",
						"vietnamese": "Kai...?",
						"thai": "ไค…?",
						"hindi": "काई...?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "방해하지 마. 이건 엠네모닉의 명령이다.",
						"english": "Don't interfere. This is Mnemosynic's command.",
						"japanese": "邪魔をするな。これはムネモニックの命令だ。",
						"chinese": "别碍事。这是姆涅莫尼克的命令。",
						"french": "Ne t'interpose pas. C'est un ordre de Mnemosynic.",
						"spanish": "No interfieras. Esto es una orden de Mnemosynic.",
						"vietnamese": "Đừng cản trở. Đây là lệnh của Mnemosynic.",
						"thai": "อย่าขัดขวาง นี่คือคำสั่งของ Mnemosynic",
						"hindi": "दखल मत दो। यह मेमोसिनिक का आदेश है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "기억이… 조작된 거야.",
						"english": "Your memories... they've been tampered with.",
						"japanese": "記憶が…操作されたんだ。",
						"chinese": "记忆……被篡改了。",
						"french": "Tes souvenirs... ils ont été manipulés.",
						"spanish": "Tus recuerdos... han sido manipulados.",
						"vietnamese": "Ký ức... của cậu đã bị thao túng rồi.",
						"thai": "ความทรงจำ... ถูกบงการ",
						"hindi": "तुम्हारी यादें... उनके साथ छेड़छाड़ की गई है।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "비켜. 네가 엠네모닉에게 접근하면 안 돼.",
						"english": "Stand aside. You can't approach Mnemosynic.",
						"japanese": "退け。お前がムネモニックに近づいてはならない。",
						"chinese": "让开。你不能接近姆涅莫尼克。",
						"french": "Écarte-toi. Tu ne peux pas approcher Mnemosynic.",
						"spanish": "Apártate. No puedes acercarte a Mnemosynic.",
						"vietnamese": "Tránh ra. Cậu không thể tiếp cận Mnemosynic.",
						"thai": "หลีกไป นายเข้าใกล้ Mnemosynic ไม่ได้",
						"hindi": "हट जाओ। तुम मेमोसिनिक के पास नहीं जा सकते।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "우리가 함께했던 일을 기억해? 그게 거짓말이야?",
						"english": "Do you remember what we did together? Was that a lie?",
						"japanese": "私たちが共にしたことを覚えているか？あれは嘘だったのか？",
						"chinese": "你还记得我们一起做过的事吗？那都是谎言吗？",
						"french": "Tu te souviens de ce que nous avons fait ensemble ? C'était un mensonge ?",
						"spanish": "¿Recuerdas lo que hicimos juntos? ¿Fue todo una mentira?",
						"vietnamese": "Cậu có nhớ những gì chúng ta đã làm cùng nhau không? Đó là một lời nói dối sao?",
						"thai": "จำเรื่องที่เราทำด้วยกันได้ไหม? นั่นคือเรื่องโกหกงั้นหรือ?",
						"hindi": "क्या तुम्हें याद है जो हमने साथ किया था? क्या वह सब झूठ था?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…닥쳐.",
						"english": "...Shut up.",
						"japanese": "「…黙れ。」",
						"chinese": "「…闭嘴。」",
						"french": "...Tais-toi.",
						"spanish": "...Cállate.",
						"vietnamese": "...Im đi.",
						"thai": "...หุบปาก!",
						"hindi": "...चुप हो जाओ।"
					},
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "카이의 눈동자가 잠시 흔들렸다. 세뇌가 완벽하진 않았다.",
						"english": "Kai's eyes flickered. The brainwashing wasn't perfect.",
						"japanese": "「カイの瞳が揺らいだ。洗脳は完璧ではなかった。」",
						"chinese": "「凯的瞳孔颤动了一下。洗脑并不完美。」",
						"french": "Les yeux de Kai vacillèrent. Le lavage de cerveau n'était pas parfait.",
						"spanish": "Los ojos de Kai parpadearon. El lavado de cerebro no era perfecto.",
						"vietnamese": "Đôi mắt của Kai dao động. Việc tẩy não không hoàn hảo.",
						"thai": "ดวงตาของไคสั่นไหวเล็กน้อย การล้างสมองยังไม่สมบูรณ์แบบ.",
						"hindi": "काई की आँखें कुछ देर के लिए झिलमिला उठीं। ब्रेनवाशिंग पूरी नहीं हुई थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "머릿속이… 시끄러워. 이게 다 거짓이었단 말인가…?",
						"english": "My mind... it's so loud. Was it all a lie...?",
						"japanese": "「頭の中が…うるさい。これ、全部嘘だったのか…？」",
						"chinese": "「脑子里…好吵。难道这一切都是谎言吗…？」",
						"french": "Ma tête... c'est bruyant. Tout cela n'était-il qu'un mensonge...?",
						"spanish": "Mi mente... qué ruidosa. ¿Todo esto era una mentira...?",
						"vietnamese": "Trong đầu… ồn ào quá. Chẳng lẽ tất cả chỉ là dối trá…?",
						"thai": "ในหัวของฉัน…เสียงดังไปหมด. ทั้งหมดนี่เป็นเรื่องโกหกงั้นหรือ…?",
						"hindi": "मेरा दिमाग़… बहुत शोर कर रहा है। क्या यह सब झूठ था…?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "엠네모닉이 널 조종하고 있어. 진실을 알아야 해.",
						"english": "Mnemonics is controlling you. You need to know the truth.",
						"japanese": "「エムネモニックがお前を操っている。真実を知る必要がある。」",
						"chinese": "「记忆术正在控制你。你需要知道真相。」",
						"french": "Mnemonics te contrôle. Tu dois connaître la vérité.",
						"spanish": "Mnemonics te está controlando. Necesitas saber la verdad.",
						"vietnamese": "Mnemonics đang điều khiển cậu. Cậu cần phải biết sự thật.",
						"thai": "Mnemonics กำลังควบคุมเธออยู่. เธอต้องรู้ความจริง.",
						"hindi": "स्मृति विज्ञान तुम्हें नियंत्रित कर रहा है। तुम्हें सच्चाई जाननी होगी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…엠네모닉의 핵심 네트워크. 거기로 가야겠어.",
						"english": "...Mnemonics' core network. I need to go there.",
						"japanese": "「…エムネモニックのコアネットワーク。そこへ行かなくては。」",
						"chinese": "「…记忆术的核心网络。我必须去那里。」",
						"french": "...Le réseau central de Mnemonics. Je dois y aller.",
						"spanish": "...La red central de Mnemonics. Tengo que ir allí.",
						"vietnamese": "…Mạng lưới cốt lõi của Mnemonics. Mình phải đến đó.",
						"thai": "…เครือข่ายหลักของ Mnemonics. ฉันต้องไปที่นั่น.",
						"hindi": "…स्मृति विज्ञान का मुख्य नेटवर्क। मुझे वहीं जाना होगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "함께 가자. 네 기억을 되찾아줄게.",
						"english": "Let's go together. I'll help you get your memories back.",
						"japanese": "「一緒に行こう。君の記憶を取り戻してあげる。」",
						"chinese": "「我们一起去吧。我会帮你找回记忆。」",
						"french": "Allons-y ensemble. Je t'aiderai à retrouver tes souvenirs.",
						"spanish": "Vamos juntos. Te ayudaré a recuperar tus recuerdos.",
						"vietnamese": "Đi cùng tớ. Tớ sẽ giúp cậu lấy lại ký ức.",
						"thai": "ไปกันเถอะ. ฉันจะช่วยให้เธอได้ความทรงจำกลับคืนมา.",
						"hindi": "चलो साथ चलते हैं। मैं तुम्हें तुम्हारी यादें वापस दिलाऊंगा।"
					},
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "엠네모닉의 핵심 데이터 허브. 모든 것이 기록되어 있었다.",
						"english": "Mnemonics' core data hub. Everything was recorded.",
						"japanese": "「エムネモニックのコアデータハブ。すべてが記録されていた。」",
						"chinese": "「记忆术的核心数据中心。所有一切都被记录在此。」",
						"french": "Le centre de données principal de Mnemonics. Tout y était enregistré.",
						"spanish": "El centro de datos central de Mnemonics. Todo estaba registrado.",
						"vietnamese": "Trung tâm dữ liệu cốt lõi của Mnemonics. Mọi thứ đều đã được ghi lại.",
						"thai": "ศูนย์ข้อมูลหลักของ Mnemonics. ทุกสิ่งถูกบันทึกไว้ที่นี่.",
						"hindi": "स्मृति विज्ञान का मुख्य डेटा हब। सब कुछ रिकॉर्ड किया गया था।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이건… 도시의 모든 거짓말과 밀고 기록이야.",
						"english": "These are... all the city's lies and betrayals.",
						"japanese": "「これは…街の全ての嘘と密告の記録だ。」",
						"chinese": "「这是…这座城市所有的谎言和告密记录。」",
						"french": "Ce sont... tous les mensonges et les dénonciations de la ville.",
						"spanish": "Estos son... todos los engaños y traiciones de la ciudad.",
						"vietnamese": "Đây là… tất cả những lời dối trá và ghi chép tố cáo của thành phố.",
						"thai": "นี่คือ…การโกหกและการทรยศทั้งหมดของเมือง.",
						"hindi": "यह… शहर के सभी झूठ और गद्दारी के रिकॉर्ड हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "비명, 절규… 이 모든 것을 엠네모닉이 저장하고 있었군.",
						"english": "Screams, cries... Mnemonics was storing all of this.",
						"japanese": "「悲鳴、絶叫…エムネモニックがこれら全てを保存していたのか。」",
						"chinese": "「尖叫，呐喊…记忆术居然存储着这一切。」",
						"french": "Cris, hurlements... Mnemonics stockait tout cela.",
						"spanish": "Gritos, lamentos... Mnemonics estaba almacenando todo esto.",
						"vietnamese": "Tiếng la hét, tiếng gào thét… Mnemonics đã lưu trữ tất cả những điều này.",
						"thai": "เสียงกรีดร้อง, เสียงโหยหวน…Mnemonics เก็บทุกสิ่งเหล่านี้ไว้.",
						"hindi": "चीखें, कराहें… स्मृति विज्ञान यह सब कुछ सहेज कर रहा था।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "갑자기 시스템이 경고음을 울렸다. 거대한 존재가 나타났다.",
						"english": "Suddenly, the system blared an alarm. A colossal entity appeared.",
						"japanese": "「突然、システムが警報を鳴らした。巨大な存在が現れた。」",
						"chinese": "「突然，系统发出了警报声。一个巨大的存在出现了。」",
						"french": "Soudain, le système émit une alarme. Une entité colossale apparut.",
						"spanish": "De repente, el sistema emitió una alarma. Una entidad colosal apareció.",
						"vietnamese": "Đột nhiên, hệ thống vang lên tiếng cảnh báo. Một thực thể khổng lồ đã xuất hiện.",
						"thai": "ทันใดนั้น, ระบบส่งเสียงเตือน. สิ่งมีชีวิตขนาดมหึมาปรากฏขึ้น.",
						"hindi": "अचानक, सिस्टम ने चेतावनी की घंटी बजाई। एक विशालकाय सत्ता प्रकट हुई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "이건… 시작일 뿐이다. 엠네모닉은… 너희의 모든 것을 안다.",
						"english": "This is... just the beginning. Mnemosyne... knows everything about you.",
						"japanese": "これは…始まりに過ぎない。ムネモシュネは…お前たちの全てを知っている。",
						"chinese": "这只是…开始。姆涅摩绪涅…了解你们的一切。",
						"french": "Ce n'est… que le début. Mnémosyne… sait tout de vous.",
						"spanish": "Esto es… solo el principio. Mnemosyne… lo sabe todo de vosotros.",
						"vietnamese": "Đây… chỉ là khởi đầu thôi. Mnemosyne… biết tất cả về các ngươi.",
						"thai": "นี่เป็น… แค่จุดเริ่มต้น มเนโมไซน์… รู้ทุกอย่างเกี่ยวกับพวกแก",
						"hindi": "यह... बस शुरुआत है। म्नेमोसिने... तुम्हारे बारे में सब कुछ जानती है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "기억이… 돌아왔어. 엠네모닉, 이 모든 것을 조작했군.",
						"english": "My memories... returned. Mnemosyne, you manipulated all of this.",
						"japanese": "記憶が…戻った。ムネモシュネ、お前が全てを操作していたのか。",
						"chinese": "记忆…回来了。姆涅摩绪涅，你操纵了这一切。",
						"french": "Mes souvenirs… sont revenus. Mnémosyne, tu as tout manipulé.",
						"spanish": "Mis recuerdos… han vuelto. Mnemosyne, tú manipulaste todo esto.",
						"vietnamese": "Ký ức… đã trở lại. Mnemosyne, ngươi đã thao túng tất cả.",
						"thai": "ความทรงจำ… กลับมาแล้ว มเนโมไซน์ แกบงการเรื่องทั้งหมดนี่",
						"hindi": "मेरी याददाश्त... लौट आई। म्नेमोसिने, तुमने यह सब हेरफेर किया।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "도시의 모든 거짓과 밀고… 그걸 엠네모닉이 기록하고 있었어.",
						"english": "All the city's lies and betrayals... Mnemosyne was recording it all.",
						"japanese": "都市の全ての嘘と密告…それをムネモシュネが記録していたのか。",
						"chinese": "城市所有的谎言和告密…姆涅摩绪涅一直在记录着这一切。",
						"french": "Tous les mensonges et les trahisons de la ville… Mnémosyne enregistrait tout.",
						"spanish": "Todas las mentiras y delaciones de la ciudad… Mnemosyne lo estaba registrando todo.",
						"vietnamese": "Tất cả những lời dối trá và tố giác của thành phố… Mnemosyne đã ghi lại tất cả.",
						"thai": "เรื่องโกหกและการทรยศทั้งหมดในเมือง… มเนโมไซน์กำลังบันทึกเรื่องทั้งหมดนั้น",
						"hindi": "शहर के सभी झूठ और विश्वासघात... म्नेमोसिने यह सब रिकॉर्ड कर रही थी।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "엠네모닉의 그물망은 예상보다 훨씬 넓고 깊었다. 진실을 파헤칠수록 거대한 어둠이 다가왔다.",
						"english": "Mnemosyne's web was far wider and deeper than expected. The more we unearthed the truth, the greater the darkness that approached.",
						"japanese": "ムネモシュネの網は、予想よりもはるかに広く深かった。真実を暴くほど、巨大な闇が迫ってきた。",
						"chinese": "姆涅摩绪涅的网络比预想的更广更深。我们越是挖掘真相，越是感受到巨大的黑暗正在逼近。",
						"french": "Le réseau de Mnémosyne était bien plus vaste et profond que prévu. Plus nous déterrions la vérité, plus une obscurité immense nous enveloppait.",
						"spanish": "La red de Mnemosyne era mucho más amplia y profunda de lo esperado. Cuanto más desenterrábamos la verdad, mayor era la oscuridad que se acercaba.",
						"vietnamese": "Mạng lưới của Mnemosyne rộng lớn và sâu sắc hơn nhiều so với dự kiến. Càng đào sâu sự thật, bóng tối khổng lồ càng bao trùm.",
						"thai": "ใยแมงมุมของมเนโมไซน์กว้างและลึกกว่าที่คาดไว้มาก ยิ่งเราค้นพบความจริงมากเท่าไหร่ ความมืดมิดอันยิ่งใหญ่ก็ยิ่งเข้ามาใกล้เท่านั้น",
						"hindi": "म्नेमोसिने का जाल उम्मीद से कहीं अधिक व्यापक और गहरा था। जैसे-जैसे हमने सच्चाई उजागर की, एक विशाल अंधकार हमारे करीब आता गया।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "쓸모없는 저항이다. 너희의 기억은 엠네모닉의 손에 있다.",
						"english": "Your resistance is futile. Your memories are in Mnemosyne's hands.",
						"japanese": "無駄な抵抗だ。お前たちの記憶はムネモシュネの手中にある。",
						"chinese": "这是徒劳的抵抗。你们的记忆都在姆涅摩绪涅的手中。",
						"french": "Votre résistance est inutile. Vos souvenirs sont entre les mains de Mnémosyne.",
						"spanish": "Vuestra resistencia es inútil. Vuestros recuerdos están en manos de Mnemosyne.",
						"vietnamese": "Sự kháng cự của ngươi là vô ích. Ký ức của các ngươi nằm trong tay Mnemosyne.",
						"thai": "การต่อต้านของแกมันไร้ประโยชน์ ความทรงจำของพวกแกอยู่ในมือของมเนโมไซน์แล้ว",
						"hindi": "तुम्हारा प्रतिरोध व्यर्थ है। तुम्हारी यादें म्नेमोसिने के हाथों में हैं।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어. 엠네모닉을….",
						"english": "Damn it... it's not over yet. Mnemosyne...",
						"japanese": "くそっ…まだ終わってない。ムネモシュネを…",
						"chinese": "该死…还没有结束。姆涅摩绪涅…",
						"french": "Merde… ce n'est pas encore fini. Mnémosyne…",
						"spanish": "Maldita sea… aún no ha terminado. Mnemosyne…",
						"vietnamese": "Chết tiệt… vẫn chưa kết thúc. Mnemosyne…",
						"thai": "ให้ตายสิ… ยังไม่จบ! มเนโมไซน์…",
						"hindi": "धिक्कार है... यह अभी खत्म नहीं हुआ है। म्नेमोसिने को..."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "진실을 밝힐 때까지, 멈추지 않아.",
						"english": "Until the truth is revealed, I won't stop.",
						"japanese": "真実が明らかになるまで、私は止まらない。",
						"chinese": "在真相大白之前，我不会停下。",
						"french": "Tant que la vérité ne sera pas révélée, je ne m'arrêterai pas.",
						"spanish": "Hasta que la verdad sea revelada, no me detendré.",
						"vietnamese": "Cho đến khi sự thật được hé lộ, tôi sẽ không dừng lại.",
						"thai": "จนกว่าความจริงจะถูกเปิดเผย ฉันจะไม่หยุด",
						"hindi": "जब तक सच सामने नहीं आता, मैं रुकूँगा नहीं।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "엠네모닉의 기록은 누구도 건드릴 수 없다. 감히 이곳에 발을 들이다니.",
						"english": "Mnemosyne's records are inviolable. How dare you trespass here?",
						"japanese": "ムネモシュネの記録は誰も触れられない。よくもこの場所に足を踏み入れたな。",
						"chinese": "姆涅摩绪涅的记录不容侵犯。你竟敢踏足此地。",
						"french": "Les archives de Mnémosyne sont inviolables. Comment osez-vous fouler ce lieu ?",
						"spanish": "Los registros de Mnemosyne son inviolables. ¿Cómo osas pisar este lugar?",
						"vietnamese": "Kỷ lục của Mnemosyne là bất khả xâm phạm. Ngươi dám đặt chân đến đây sao?",
						"thai": "บันทึกของมเนโมไซน์ไม่มีใครแตะต้องได้ แกกล้าดียังไงถึงมาเหยียบที่นี่!",
						"hindi": "म्नेमोसिने के अभिलेखों को कोई छू नहीं सकता। तुम्हारी हिम्मत कैसे हुई यहाँ कदम रखने की?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우린 진실을 알았어. 이제 너를 막을 거야.",
						"english": "We know the truth. Now we'll stop you.",
						"japanese": "私たちは真実を知った。もうあなたを止められる。",
						"chinese": "我们已经知道了真相。现在我们要阻止你。",
						"french": "Nous connaissons la vérité. Nous allons t'arrêter.",
						"spanish": "Sabemos la verdad. Ahora te detendremos.",
						"vietnamese": "Chúng tôi đã biết sự thật. Giờ chúng tôi sẽ ngăn chặn ngươi.",
						"thai": "เรารู้ความจริงแล้ว ตอนนี้เราจะหยุดแกให้ได้",
						"hindi": "हमें सच पता चल गया है। अब हम तुम्हें रोकेंगे।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네 세뇌는 통하지 않아. 엠네모닉의 꼭두각시.",
						"english": "Your brainwashing won't work. You're Mnemosyne's puppet.",
						"japanese": "お前の洗脳は通用しない。ムネモシュネの傀儡め。",
						"chinese": "你的洗脑对我无效。姆涅摩绪涅的傀儡。",
						"french": "Ton lavage de cerveau ne marchera pas. Marionnette de Mnémosyne.",
						"spanish": "Tu lavado de cerebro no funcionará. Eres el títere de Mnemosyne.",
						"vietnamese": "Thôi miên của ngươi vô dụng thôi. Con rối của Mnemosyne.",
						"thai": "การล้างสมองของแกไม่ได้ผลหรอก! หุ่นเชิดของมเนโมไซน์!",
						"hindi": "तुम्हारा ब्रेनवाश काम नहीं करेगा। तुम म्नेमोसिने की कठपुतली हो।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"카이는 옛 동료였다. 함께 도시의 그림자를 헤쳐나갔던.",
			"그러나 그는 낯선 얼굴로 돌아왔다. 기억이 조작된 채.",
			"놈은 엠네모닉의 손아귀에 있었다. 친구를 잃을 순 없었다.",
			"이제 진실을 파헤쳐야 한다. 모든 것을 기록한 어둠의 심장으로."
		],
		"english": [
			"Kai was an old comrade. We navigated the city's shadows together.",
			"But he returned with a stranger's face. His memories, tampered with.",
			"He was in Mnemosynic's grasp. I couldn't lose a friend.",
			"Now, I must unearth the truth. Into the heart of darkness, where all is recorded."
		],
		"japanese": [
			"カイはかつての仲間だった。共に都市の影を潜り抜けた。",
			"しかし彼は見知らぬ顔で戻ってきた。記憶を操作されたまま。",
			"奴はムネモニックの掌中にあった。友を失うわけにはいかなかった。",
			"今、真実を暴かねばならない。すべてが記録された闇の心臓へ。"
		],
		"chinese": [
			"凯是昔日同伴。我们曾一同穿越都市的阴影。",
			"然而他却以一张陌生的面孔归来。记忆被篡改了。",
			"他在姆涅莫尼克的掌控之中。我不能失去这个朋友。",
			"现在，我必须揭露真相。前往黑暗的心脏，那里记录着一切。"
		],
		"french": [
			"Kai était un ancien camarade. Nous avons traversé les ombres de la ville ensemble.",
			"Mais il est revenu avec un visage étranger. Ses souvenirs, manipulés.",
			"Il était sous l'emprise de Mnemosynic. Je ne pouvais pas perdre un ami.",
			"Maintenant, je dois déterrer la vérité. Au cœur des ténèbres, là où tout est enregistré."
		],
		"spanish": [
			"Kai era un viejo camarada. Juntos, navegamos las sombras de la ciudad.",
			"Pero regresó con un rostro desconocido. Sus recuerdos, manipulados.",
			"Estaba en las garras de Mnemosynic. No podía perder a un amigo.",
			"Ahora, debo desenterrar la verdad. Al corazón de la oscuridad, donde todo está grabado."
		],
		"vietnamese": [
			"Kai từng là đồng đội cũ. Chúng ta đã cùng nhau vượt qua những góc khuất của thành phố.",
			"Nhưng anh ấy trở về với khuôn mặt xa lạ. Ký ức của anh đã bị thao túng.",
			"Hắn ta nằm trong tay Mnemosynic. Tôi không thể để mất một người bạn.",
			"Giờ đây, tôi phải khám phá sự thật. Đi sâu vào trái tim bóng tối, nơi mọi thứ đều được ghi lại."
		],
		"thai": [
			"ไคคือสหายเก่า เราเคยร่วมกันแหวกเงามืดของเมือง",
			"ทว่าเขากลับมาด้วยใบหน้าที่แปลกไป ความทรงจำถูกบงการ",
			"หมอนั่นอยู่ในเงื้อมมือของ Mnemosynic ฉันไม่อาจเสียเพื่อนไปได้",
			"บัดนี้ต้องขุดคุ้ยความจริง เข้าสู่ใจกลางแห่งความมืดที่บันทึกทุกสิ่ง"
		],
		"hindi": [
			"काई मेरा पुराना साथी था। हमने मिलकर शहर की परछाइयों से राह बनाई थी।",
			"मगर वह अजनबी चेहरे के साथ लौटा। उसकी यादें बदल दी गई थीं।",
			"वह मेमोसिनिक की गिरफ्त में था। मैं अपने दोस्त को खो नहीं सकता था।",
			"अब, मुझे सच उजागर करना होगा। अँधेरे के दिल में, जहाँ सब कुछ दर्ज है।"
		]
	}
} as const;
