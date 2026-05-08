export const scenario_EndlessApplicant_V0_01 = {
	"scenario_id": "EndlessApplicant_V0_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"jett": {
			"id": "mon_129bd4b6-0b1d-4e25-bfc4-da7441ad43a8",
			"name": {
				"korean": "제트",
				"english": "Jett",
				"japanese": "ジェット",
				"chinese": "杰特",
				"french": "Jett",
				"spanish": "Jett",
				"vietnamese": "Jett",
				"thai": "เจ็ตต์",
				"hindi": "जेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/02a8321f-49c9-45d8-c220-28553a15db00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6b917950-a990-478e-3874-228e44853800/public"
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
						"korean": "고층 빌딩의 끝없는 면접 대기실. 차가운 형광등 아래, 정장 입은 사람들이 앉아있다.",
						"english": "The endless interview waiting room of a skyscraper. Under cold fluorescent lights, people in suits sit.",
						"japanese": "高層ビルの果てしない面接待合室。冷たい蛍光灯の下、スーツを着た人々が座っている。",
						"chinese": "高层建筑中无尽的面试等候室。冰冷的荧光灯下，穿着西装的人们坐着。",
						"french": "La salle d'attente d'entretien infinie d'un gratte-ciel. Sous les lumières fluorescentes froides, des gens en costume sont assis.",
						"spanish": "La interminable sala de espera de entrevistas de un rascacielos. Bajo las frías luces fluorescentes, personas en traje están sentadas.",
						"vietnamese": "Phòng chờ phỏng vấn vô tận của tòa nhà chọc trời. Dưới ánh đèn huỳnh quang lạnh lẽo, những người mặc vest đang ngồi.",
						"thai": "ห้องรอสัมภาษณ์ที่ไม่มีที่สิ้นสุดของตึกระฟ้า ใต้แสงไฟฟลูออเรสเซนต์เย็นยะเยือก ผู้คนในชุดสูทนั่งอยู่",
						"hindi": "गगनचुंबी इमारत का अंतहीन साक्षात्कार प्रतीक्षा कक्ष। ठंडी फ्लोरोसेंट रोशनी के नीचे, सूट पहने लोग बैठे हैं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "jett",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "…다음번엔 분명 다를 거예요.",
						"english": "...It will definitely be different next time.",
						"japanese": "…次はきっと違うはずだ。",
						"chinese": "……下次肯定会不同。",
						"french": "...Cette fois-ci, ce sera sûrement différent.",
						"spanish": "...La próxima vez será definitivamente diferente.",
						"vietnamese": "...Lần tới chắc chắn sẽ khác thôi.",
						"thai": "...ครั้งหน้าจะต้องแตกต่างแน่นอน",
						"hindi": "...अगली बार निश्चित रूप से अलग होगा।"
					},
					"speaker": "jett",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이력서 파일이 꽤 두껍네요. 면접 자주 보시나 봐요.",
						"english": "Your resume file is quite thick. You seem to have a lot of interviews.",
						"japanese": "履歴書ファイルがかなり厚いですね。面接によく行かれるんですね。",
						"chinese": "您的简历文件相当厚。看来您经常参加面试。",
						"french": "Votre dossier de CV est assez épais. Vous semblez passer beaucoup d'entretiens.",
						"spanish": "Su archivo de currículum es bastante grueso. Parece que tiene muchas entrevistas.",
						"vietnamese": "Hồ sơ xin việc của bạn khá dày. Chắc bạn thường xuyên đi phỏng vấn.",
						"thai": "แฟ้มเรซูเม่ของคุณหนามากเลยนะ ดูเหมือนคุณจะไปสัมภาษณ์บ่อย",
						"hindi": "आपकी रिज्यूमे फ़ाइल काफी मोटी है। लगता है आप अक्सर साक्षात्कार देते हैं।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "jett",
					"content": {
						"korean": "네. 항상 '다음'을 준비 중입니다.",
						"english": "Yes. I'm always preparing for 'next'.",
						"japanese": "はい。常に「次」を準備しています。",
						"chinese": "是的。我总是在为“下一次”做准备。",
						"french": "Oui. Je me prépare toujours pour le 'prochain'.",
						"spanish": "Sí. Siempre me estoy preparando para el 'siguiente'.",
						"vietnamese": "Vâng. Tôi luôn chuẩn bị cho 'lần tiếp theo'.",
						"thai": "ครับ/ค่ะ ผม/ดิฉันเตรียมพร้อมสำหรับ 'ครั้งต่อไป' เสมอ",
						"hindi": "हाँ। मैं हमेशा 'अगले' की तैयारी में रहता हूँ।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그의 차례가 호명됐다.",
						"english": "His turn was called.",
						"japanese": "彼の番が呼ばれた。",
						"chinese": "轮到他了。",
						"french": "Son tour a été appelé.",
						"spanish": "Se anunció su turno.",
						"vietnamese": "Đến lượt anh ta được gọi tên.",
						"thai": "ถึงคิวของเขาแล้ว",
						"hindi": "उसकी बारी बुलाई गई।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "다음 지원자분, 에반 씨.",
						"english": "Next applicant, Mr. Evan.",
						"japanese": "次の志願者の方、エバンさん。",
						"chinese": "下一位申请者，埃文先生。",
						"french": "Prochain candidat, M. Evan.",
						"spanish": "Siguiente solicitante, Sr. Evan.",
						"vietnamese": "Ứng viên tiếp theo, anh Evan.",
						"thai": "ผู้สมัครคนต่อไป คุณอีแวน",
						"hindi": "अगले उम्मीदवार, श्रीमान इवान।"
					},
					"type": "speech"
				},
				{
					"speaker": "jett",
					"type": "direction",
					"duration_ms": 500,
					"action": "exit"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…저 문 너머엔 무엇이 있을까.",
						"english": "...What lies beyond that door?",
						"japanese": "…あの扉の向こうには何があるのだろう。",
						"chinese": "...那扇门后面有什么？",
						"french": "...Que se cache-t-il derrière cette porte ?",
						"spanish": "...¿Qué habrá más allá de esa puerta?",
						"vietnamese": "...Có gì đằng sau cánh cửa đó nhỉ?",
						"thai": "...อะไรอยู่เบื้องหลังประตูบานนั้นนะ",
						"hindi": "...उस दरवाज़े के पीछे क्या होगा?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "시간은 흐르지 않는 듯했다. 아니, 흐르지 않았다.",
						"english": "Time seemed to stand still. No, it didn't flow.",
						"japanese": "時間は流れていないようだった。いや、流れていなかった。",
						"chinese": "时间似乎静止了。不，它没有流逝。",
						"french": "Le temps semblait immobile. Non, il ne s'écoulait pas.",
						"spanish": "El tiempo parecía no correr. No, no corría.",
						"vietnamese": "Thời gian dường như đứng yên. Không, nó không trôi.",
						"thai": "เวลาดูเหมือนจะหยุดนิ่ง ไม่สิ มันไม่ไหลเลย",
						"hindi": "समय ठहरा हुआ लग रहा था। नहीं, वह बह नहीं रहा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "벌써 3시간째… 몇 명이나 들어갔지?",
						"english": "It's been 3 hours already... How many have gone in?",
						"japanese": "もう3時間も… 何人入ったんだろう？",
						"chinese": "已经3个小时了……到底进去了多少人？",
						"french": "Déjà 3 heures... Combien sont entrés ?",
						"spanish": "Ya van 3 horas... ¿Cuántos habrán entrado?",
						"vietnamese": "Đã 3 tiếng rồi... Bao nhiêu người đã vào nhỉ?",
						"thai": "สามชั่วโมงแล้ว... มีกี่คนเข้าไปข้างในแล้วนะ?",
						"hindi": "पहले ही 3 घंटे हो गए... कितने लोग अंदर गए?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "다들 그저 '다음'만을 기다리고 있었다.",
						"english": "Everyone was just waiting for 'next'.",
						"japanese": "皆、ただ「次」を待っていた。",
						"chinese": "所有人都只是在等待着“下一个”。",
						"french": "Tous attendaient juste le 'suivant'.",
						"spanish": "Todos esperaban solo el 'siguiente'.",
						"vietnamese": "Mọi người chỉ chờ đợi 'tiếp theo'.",
						"thai": "ทุกคนเพียงแค่รอ 'คนต่อไป'",
						"hindi": "सभी बस 'अगले' का इंतजार कर रहे थे।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "누구나 '다음 기회'를 약속받는다. 다음 라운드, 다음 라운드, 또 다음.",
						"english": "Everyone is promised a 'next chance'. Next round, next round, and next.",
						"japanese": "誰もが「次の機会」を約束される。次のラウンド、次のラウンド、また次。",
						"chinese": "每个人都被承诺有“下一次机会”。下一轮，下一轮，又下一轮。",
						"french": "Tout le monde se voit promettre une 'prochaine chance'. Prochain tour, prochain tour, encore le prochain.",
						"spanish": "A todos se les promete una 'próxima oportunidad'. Próxima ronda, próxima ronda, y otra más.",
						"vietnamese": "Mọi người đều được hứa hẹn 'cơ hội tiếp theo'. Vòng tiếp theo, vòng tiếp theo, rồi lại tiếp theo.",
						"thai": "ทุกคนถูกสัญญาว่าจะได้รับ 'โอกาสหน้า' รอบหน้า รอบหน้า และรอบหน้าอีก",
						"hindi": "हर किसी को 'अगले मौके' का वादा किया जाता है। अगला राउंड, अगला राउंड, और फिर अगला।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…끝은 있는 걸까.",
						"english": "...Will it ever end?",
						"japanese": "…終わりはあるのだろうか。",
						"chinese": "...会有尽头吗？",
						"french": "...Y aura-t-il une fin ?",
						"spanish": "...¿Tendrá esto un fin?",
						"vietnamese": "...Liệu có kết thúc không?",
						"thai": "...มันจะสิ้นสุดลงเมื่อไหร่กันนะ",
						"hindi": "...क्या इसका कोई अंत है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "한 발만 더 가면 된다고, 다들 믿는 것 같았다.",
						"english": "Everyone seemed to believe it was just one more step.",
						"japanese": "あと一歩進めば良いと、皆が信じているようだった。",
						"chinese": "大家似乎都相信，再走一步就行了。",
						"french": "Tout le monde semblait croire qu'il ne restait qu'un pas de plus.",
						"spanish": "Todos parecían creer que solo faltaba un paso más.",
						"vietnamese": "Mọi người dường như đều tin rằng chỉ cần đi thêm một bước nữa.",
						"thai": "ทุกคนดูเหมือนจะเชื่อว่าแค่เดินไปอีกก้าวเดียวก็พอแล้ว",
						"hindi": "सभी को ऐसा लग रहा था कि बस एक कदम और।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "복도 끝은 보이지 않았다. 이어지는 문들, 이어지는 대기실.",
						"english": "The end of the hallway was out of sight. Door after door, waiting room after waiting room.",
						"japanese": "廊下の終わりは見えなかった。続く扉、続く待機室。",
						"chinese": "走廊的尽头看不见。一扇又一扇的门，一个又一个的等候室。",
						"french": "Le bout du couloir était invisible. Des portes qui se suivaient, des salles d'attente qui se succédaient.",
						"spanish": "El final del pasillo no se veía. Puertas que se sucedían, salas de espera que se conectaban.",
						"vietnamese": "Cuối hành lang không nhìn thấy. Cửa nối tiếp cửa, phòng chờ nối tiếp phòng chờ.",
						"thai": "มองไม่เห็นสุดทางเดิน ประตูแล้วประตู ห้องรอแล้วห้องรอ",
						"hindi": "गलियारे का अंत दिखाई नहीं दे रहा था। लगातार दरवाज़े, लगातार प्रतीक्षा कक्ष।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이건… 면접이 아니야.",
						"english": "This... isn't an interview.",
						"japanese": "これは…面接じゃない。",
						"chinese": "这……不是面试。",
						"french": "Ce n'est... pas un entretien.",
						"spanish": "Esto... no es una entrevista.",
						"vietnamese": "Đây... không phải là phỏng vấn.",
						"thai": "นี่...ไม่ใช่การสัมภาษณ์",
						"hindi": "यह... साक्षात्कार नहीं है।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "대체 어디로 가야 나갈 수 있지?",
						"english": "Where do I go to get out of here?",
						"japanese": "一体どこへ行けば出られるんだ？",
						"chinese": "到底要往哪里走才能出去？",
						"french": "Où dois-je aller pour sortir d'ici ?",
						"spanish": "¿Adónde tengo que ir para salir?",
						"vietnamese": "Rốt cuộc phải đi đâu mới thoát ra được?",
						"thai": "ตกลงฉันต้องไปทางไหนถึงจะออกไปได้?",
						"hindi": "आखिर मुझे कहाँ जाना है ताकि मैं बाहर निकल सकूँ?"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "웃기지 마. 난 여기서 나갈 거야.",
						"english": "Don't make me laugh. I'm getting out of here.",
						"japanese": "ふざけるな。俺はここから出ていく。",
						"chinese": "别开玩笑了。我要离开这里。",
						"french": "Ne me fais pas rire. Je vais sortir d'ici.",
						"spanish": "No me hagas reír. Voy a salir de aquí.",
						"vietnamese": "Đừng có đùa. Tôi sẽ ra khỏi đây.",
						"thai": "อย่ามาตลกน่า ฉันจะออกไปจากที่นี่",
						"hindi": "मज़ाक मत करो। मैं यहाँ से निकल रहा हूँ।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "면접은 끝나지 않았다. 이 무한한 미로에서, 진짜 출구를 찾아야 했다.",
						"english": "The interview wasn't over. In this endless maze, I had to find the real exit.",
						"japanese": "面接は終わっていなかった。この無限の迷宮で、本当の出口を見つけなければならなかった。",
						"chinese": "面试还没有结束。在这个无限的迷宫中，我必须找到真正的出口。",
						"french": "L'entretien n'était pas terminé. Dans ce labyrinthe infini, je devais trouver la véritable sortie.",
						"spanish": "La entrevista no había terminado. En este laberinto infinito, tenía que encontrar la salida real.",
						"vietnamese": "Buổi phỏng vấn vẫn chưa kết thúc. Trong mê cung vô tận này, tôi phải tìm ra lối thoát thực sự.",
						"thai": "การสัมภาษณ์ยังไม่จบ ในเขาวงกตอันไร้ขีดจำกัดนี้ ฉันต้องหาทางออกที่แท้จริงให้พบ",
						"hindi": "साक्षात्कार अभी समाप्त नहीं हुआ था। इस अनंत भूलभुलैया में, मुझे असली निकास खोजना था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "새로운 시작, 새로운 도전이 기다리고 있었다.",
						"english": "A new beginning, a new challenge awaited.",
						"japanese": "新たな始まり、新たな挑戦が待っていた。",
						"chinese": "新的开始，新的挑战在等待着。",
						"french": "Un nouveau départ, un nouveau défi attendait.",
						"spanish": "Un nuevo comienzo, un nuevo desafío esperaba.",
						"vietnamese": "Một khởi đầu mới, một thử thách mới đang chờ đợi.",
						"thai": "การเริ่มต้นใหม่ ความท้าทายใหม่กำลังรออยู่",
						"hindi": "एक नई शुरुआत, एक नई चुनौती इंतज़ार कर रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "아직 멀었다. 다음 기회를 노려라.",
						"english": "Not yet. Aim for the next chance.",
						"japanese": "まだだ。次の機会を狙え。",
						"chinese": "还早着呢。瞄准下一次机会吧。",
						"french": "Pas encore. Vise la prochaine opportunité.",
						"spanish": "Todavía no. Apunta a la próxima oportunidad.",
						"vietnamese": "Vẫn còn xa lắm. Hãy nhắm tới cơ hội tiếp theo.",
						"thai": "ยังหรอก ลองโอกาสหน้าดู",
						"hindi": "अभी नहीं। अगले मौके पर नज़र रखो।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…포기하지 않아. 반드시 나갈 거야.",
						"english": "...I won't give up. I'll definitely get out.",
						"japanese": "…諦めない。必ず出ていく。",
						"chinese": "…我不会放弃。我一定会出去的。",
						"french": "...Je n'abandonnerai pas. Je sortirai, c'est sûr.",
						"spanish": "...No me rendiré. Definitivamente saldré.",
						"vietnamese": "…Tôi sẽ không bỏ cuộc. Nhất định tôi sẽ thoát ra.",
						"thai": "...ฉันจะไม่ยอมแพ้ ฉันจะออกไปให้ได้",
						"hindi": "...मैं हार नहीं मानूँगा। मैं निश्चित रूप से बाहर निकलूँगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "영원히 끝나지 않을 것 같은 면접. 다음 도전이 기다렸다.",
						"english": "A seemingly endless interview. The next challenge awaited.",
						"japanese": "永遠に終わらないかのような面接。次の挑戦が待っていた。",
						"chinese": "一场似乎永无止境的面试。下一个挑战在等待。",
						"french": "Une interview qui semblait interminable. Le prochain défi attendait.",
						"spanish": "Una entrevista que parecía interminable. El siguiente desafío esperaba.",
						"vietnamese": "Một cuộc phỏng vấn dường như không bao giờ kết thúc. Thử thách tiếp theo đang chờ đợi.",
						"thai": "การสัมภาษณ์ที่ดูเหมือนจะไม่มีวันสิ้นสุด ความท้าทายต่อไปกำลังรออยู่",
						"hindi": "एक साक्षात्कार जो कभी खत्म न होने वाला लग रहा था। अगली चुनौती इंतज़ार कर रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "복도 저편에서 알 수 없는 그림자가 일렁였다. 형체 없는 압박감.",
						"english": "An unknown shadow flickered at the end of the corridor. A formless pressure.",
						"japanese": "廊下の向こうで未知の影が揺らめいた。形のない圧迫感。",
						"chinese": "走廊尽头，一道莫名的黑影晃动。一种无形的压迫感。",
						"french": "Une ombre inconnue vacilla au bout du couloir. Une pression informe.",
						"spanish": "Una sombra desconocida parpadeó al final del pasillo. Una presión sin forma.",
						"vietnamese": "Một cái bóng không rõ lay động ở cuối hành lang. Một áp lực vô hình.",
						"thai": "เงาประหลาดสั่นไหวอยู่สุดทางเดิน ความกดดันที่ไร้รูปร่าง",
						"hindi": "गलियारे के उस पार एक अज्ञात छाया लहराई। एक निराकार दबाव।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아직, 멀었나.",
						"english": "...Not yet, then.",
						"japanese": "…まだか。",
						"chinese": "…还没到吗。",
						"french": "...Pas encore.",
						"spanish": "¿...Todavía no?",
						"vietnamese": "…Vẫn chưa sao.",
						"thai": "...ยังอีกนานรึไง?",
						"hindi": "...अभी तक नहीं?"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누구냐…!",
						"english": "Who's there...!",
						"japanese": "誰だ…！",
						"chinese": "谁？！",
						"french": "Qui est là… !",
						"spanish": "¡¿Quién eres…?!",
						"vietnamese": "Ai đó…!",
						"thai": "ใครน่ะ…!",
						"hindi": "तुम कौन हो…!"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너의 '다음 기회'는… 영원히 올 거야.",
						"english": "Your 'next chance'... will come forever.",
						"japanese": "君の『次の機会』は…永遠に来るだろう。",
						"chinese": "你的“下一次机会”…将永远到来。",
						"french": "Ta 'prochaine chance'... viendra éternellement.",
						"spanish": "Tu 'próxima oportunidad'... llegará para siempre.",
						"vietnamese": "'Cơ hội tiếp theo' của ngươi… sẽ đến mãi mãi.",
						"thai": "'โอกาสหน้า' ของเจ้า...จะมาถึงตลอดไป",
						"hindi": "तुम्हारा 'अगला मौका'... हमेशा के लिए आता रहेगा।"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"고층 빌딩의 끝없는 대기실.",
			"모두가 '다음 기회'를 약속받았다.",
			"하지만 그 문은 어디로도 이어지지 않았다.",
			"그들이 찾는 것은 합격이 아니었다.",
			"탈출이었다."
		],
		"english": [
			"The endless waiting room of a skyscraper.",
			"Everyone was promised a 'next chance'.",
			"But that door led nowhere.",
			"What they sought wasn't acceptance.",
			"It was escape."
		],
		"japanese": [
			"高層ビルの果てしない待合室。",
			"誰もが「次の機会」を約束された。",
			"しかし、その扉はどこへも続いていなかった。",
			"彼らが求めていたのは合格ではなかった。",
			"それは脱出だった。"
		],
		"chinese": [
			"高层建筑中无尽的等候室。",
			"每个人都被许诺了“下一次机会”。",
			"但这扇门却通往虚无。",
			"他们寻求的并非是录取。",
			"是逃离。"
		],
		"french": [
			"La salle d'attente infinie d'un gratte-ciel.",
			"Chacun s'est vu promettre une 'prochaine chance'.",
			"Mais cette porte ne menait nulle part.",
			"Ce qu'ils cherchaient n'était pas l'acceptation.",
			"C'était l'évasion."
		],
		"spanish": [
			"La sala de espera interminable de un rascacielos.",
			"A todos se les prometió una 'próxima oportunidad'.",
			"Pero esa puerta no llevaba a ninguna parte.",
			"Lo que buscaban no era la aprobación.",
			"Era el escape."
		],
		"vietnamese": [
			"Phòng chờ vô tận của tòa nhà chọc trời.",
			"Mọi người đều được hứa hẹn một 'cơ hội tiếp theo'.",
			"Nhưng cánh cửa đó chẳng dẫn đến đâu.",
			"Thứ họ tìm kiếm không phải là sự chấp nhận.",
			"Đó là sự trốn thoát."
		],
		"thai": [
			"ห้องรอที่ไม่มีที่สิ้นสุดของตึกระฟ้า",
			"ทุกคนได้รับสัญญาว่าจะได้ 'โอกาสครั้งต่อไป'",
			"แต่ประตูนั่นไม่นำไปที่ใดเลย",
			"สิ่งที่พวกเขาแสวงหาไม่ใช่การตอบรับ",
			"มันคือการหลบหนี"
		],
		"hindi": [
			"गगनचुंबी इमारत का अंतहीन प्रतीक्षा कक्ष।",
			"सभी को 'अगले अवसर' का वादा किया गया था।",
			"लेकिन वह दरवाज़ा कहीं नहीं जाता था।",
			"वे जो खोज रहे थे वह स्वीकृति नहीं थी।",
			"यह पलायन था।"
		]
	}
} as const;
