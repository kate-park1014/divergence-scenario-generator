export const scenario_EndlessApplicant_V0_04 = {
	"scenario_id": "EndlessApplicant_V0_04",
	"order": 4,
	"act": "rising",
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
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "jett",
					"action": "enter"
				},
				{
					"content": {
						"korean": "휴... 이번 면접도 끝났네요.",
						"english": "Phew... This interview is over too.",
						"japanese": "ふう…今回の面接も終わりましたね。",
						"chinese": "呼……这次面试也结束了。",
						"french": "Ouf... Cet entretien est terminé aussi.",
						"spanish": "Uf... Esta entrevista también ha terminado.",
						"vietnamese": "Phù... Cuộc phỏng vấn này cũng kết thúc rồi.",
						"thai": "เฮ้อ... การสัมภาษณ์ครั้งนี้ก็จบลงแล้วสินะ",
						"hindi": "उफ़... यह साक्षात्कार भी खत्म हो गया।"
					},
					"type": "speech",
					"speaker": "jett",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "표정이 좋네요. 합격할 것 같아요?",
						"english": "You look good. Think you'll pass?",
						"japanese": "いい顔してますね。合格しそうですか？",
						"chinese": "你看起来气色不错。觉得能通过吗？",
						"french": "Vous avez bonne mine. Pensez-vous réussir ?",
						"spanish": "Tienes buena cara. ¿Crees que aprobarás?",
						"vietnamese": "Trông bạn tươi tỉnh đấy. Nghĩ là sẽ đậu không?",
						"thai": "สีหน้าดูดีนะ คิดว่าจะผ่านไหม?",
						"hindi": "तुम अच्छे लग रहे हो। लगता है पास हो जाओगे?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "jett",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "거의 다 왔어요. 이번엔 진짜에요.",
						"english": "Almost there. This time, it's real.",
						"japanese": "あと少しです。今回は本当に。",
						"chinese": "快了。这次是真的。",
						"french": "On y est presque. Cette fois, c'est la bonne.",
						"spanish": "Ya casi. Esta vez es de verdad.",
						"vietnamese": "Gần tới rồi. Lần này là thật đấy.",
						"thai": "ใกล้ถึงแล้ว ครั้งนี้ของจริงนะ",
						"hindi": "बस पहुँचने वाले हैं। इस बार, यह असली है।"
					}
				},
				{
					"content": {
						"korean": "그가 두꺼운 이력서 파일을 정리했다. 언뜻 보이는 페이지에 같은 이력이 날짜만 바뀌어 반복되었다.",
						"english": "He tidied up a thick resume file. On a glimpsed page, the same experience was repeated with only the dates changed.",
						"japanese": "彼が分厚い履歴書ファイルを整理した。ちらりと見えたページには、同じ経歴が日付だけ変わって繰り返されていた。",
						"chinese": "他整理着一份厚厚的简历。瞥见的一页上，同样的经历只是改了日期，不断重复着。",
						"french": "Il rangea un épais dossier de CV. Sur une page aperçue, la même expérience se répétait, seules les dates changeaient.",
						"spanish": "Él ordenó un grueso archivo de currículums. En una página vislumbrada, la misma experiencia se repetía con solo las fechas cambiadas.",
						"vietnamese": "Anh ta sắp xếp lại tập hồ sơ dày cộp. Trên một trang thoáng thấy, cùng một kinh nghiệm được lặp đi lặp lại chỉ thay đổi ngày tháng.",
						"thai": "เขาจัดเก็บแฟ้มเรซูเม่หนาเตอะ ในหน้าที่มองเห็นแวบหนึ่ง ประสบการณ์เดิมซ้ำไปซ้ำมา โดยเปลี่ยนแค่วันที่",
						"hindi": "उसने एक मोटी रेज़्यूमे फ़ाइल व्यवस्थित की। एक झलक वाली पृष्ठ पर, वही अनुभव केवल तारीखें बदलकर दोहराया गया था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "jett",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "제트 씨, 그 이력서... 계속 똑같은 거 아니에요?",
						"english": "Mr. Jett, that resume... isn't it always the same?",
						"japanese": "ジェットさん、その履歴書…いつも同じじゃないですか？",
						"chinese": "杰特先生，那份简历……难道一直都没变吗？",
						"french": "Monsieur Jett, ce CV... n'est-ce pas toujours le même ?",
						"spanish": "Señor Jett, ese currículum... ¿no es siempre el mismo?",
						"vietnamese": "Anh Jett, cái hồ sơ đó... không phải lúc nào cũng giống nhau sao?",
						"thai": "คุณเจ็ต เรซูเม่นั่น... มันไม่เหมือนเดิมตลอดหรอกเหรอ?",
						"hindi": "जेट साहब, वह रेज़्यूमे... क्या वह हमेशा एक जैसा नहीं होता?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "jett",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네? 아뇨. 매번 업데이트하고 있죠.",
						"english": "Huh? No. I update it every time.",
						"japanese": "え？いえ。毎回更新してますよ。",
						"chinese": "嗯？不。我每次都有更新。",
						"french": "Hein ? Non. Je le mets à jour à chaque fois.",
						"spanish": "¿Eh? No. Lo actualizo cada vez.",
						"vietnamese": "Hả? Không. Tôi cập nhật nó mỗi lần mà.",
						"thai": "หา? เปล่าครับ ผมอัปเดตทุกครั้งครับ",
						"hindi": "हूँ? नहीं। मैं इसे हर बार अपडेट करता हूँ।"
					}
				},
				{
					"content": {
						"korean": "근데 왜 항상 내용이 같아 보여요?",
						"english": "But why does the content always seem the same?",
						"japanese": "でも、どうしていつも内容が同じように見えるんですか？",
						"chinese": "但为什么内容总是看起来一样？",
						"french": "Mais pourquoi le contenu semble-t-il toujours le même ?",
						"spanish": "¿Pero por qué el contenido siempre parece el mismo?",
						"vietnamese": "Nhưng sao nội dung lúc nào cũng giống nhau vậy?",
						"thai": "แต่ทำไมเนื้อหาถึงดูเหมือนเดิมตลอดเลยล่ะ?",
						"hindi": "लेकिन सामग्री हमेशा एक जैसी क्यों दिखती है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "대기실의 시계는 숫자만 다를 뿐 항상 같은 곳에 박혀 있었다. 누구도 시간이 흐른다고 느끼지 않았다.",
						"english": "The clock in the waiting room was always stuck in the same spot, only the numbers changed. No one felt time passing.",
						"japanese": "待合室の時計は、数字だけが違うだけでいつも同じ場所に止まっていた。誰も時間の流れを感じなかった。",
						"chinese": "等候室的钟表总是停在同一个地方，只有数字在变。没有人感觉到时间的流逝。",
						"french": "L'horloge de la salle d'attente était toujours figée au même endroit, seuls les chiffres changeaient. Personne ne sentait le temps s'écouler.",
						"spanish": "El reloj de la sala de espera siempre estaba clavado en el mismo sitio, solo cambiaban los números. Nadie sentía el paso del tiempo.",
						"vietnamese": "Chiếc đồng hồ trong phòng chờ luôn kẹt ở một chỗ, chỉ có số thay đổi. Không ai cảm thấy thời gian trôi qua.",
						"thai": "นาฬิกาในห้องพักติดอยู่ที่เดิมเสมอ มีเพียงตัวเลขที่เปลี่ยนไป ไม่มีใครรู้สึกถึงการไหลของเวลา",
						"hindi": "प्रतीक्षा कक्ष की घड़ी हमेशा एक ही जगह अटकी रहती थी, बस संख्याएँ बदलती थीं। किसी को समय बीतने का एहसास नहीं हुआ।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "jett",
					"action": "enter"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "하... 또 '결과는 추후에 통보드릴게요.'래.",
						"english": "Ugh... \"We'll notify you of the results later,\" again.",
						"japanese": "はあ…また「結果は後日お知らせします」だって。",
						"chinese": "唉... 又来了，\"结果之后会通知您。\"",
						"french": "Pff... Encore un « Nous vous informerons des résultats ultérieurement. »",
						"spanish": "Uf... Otra vez, \"Le notificaremos los resultados más tarde.\"",
						"vietnamese": "Haizz... Lại là \"Chúng tôi sẽ thông báo kết quả sau.\"",
						"thai": "เฮ้อ... \"จะแจ้งผลให้ทราบภายหลัง\" อีกแล้ว",
						"hindi": "उफ़... फिर से, \"हम आपको परिणामों के बारे में बाद में सूचित करेंगे।\""
					}
				},
				{
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "매번 똑같은 말. 지겹지도 않나.",
						"english": "The same words every time. Don't they get sick of it?",
						"japanese": "毎回同じ言葉。飽きないのかな。",
						"chinese": "每次都一样的话。不觉得烦吗？",
						"french": "Toujours les mêmes mots. Ça ne les lasse pas ?",
						"spanish": "Las mismas palabras cada vez. ¿No se cansan?",
						"vietnamese": "Lần nào cũng y chang. Không thấy chán à?",
						"thai": "คำพูดเดิมๆ ทุกครั้ง ไม่เบื่อบ้างหรือไง?",
						"hindi": "हर बार वही शब्द। क्या वे ऊबते नहीं?"
					}
				},
				{
					"content": {
						"korean": "원래 그래요. 중요한 면접은 신중하게 결정하거든요.",
						"english": "That's how it is. Important interviews require careful deliberation.",
						"japanese": "元々そうですよ。重要な面接は慎重に決めるんです。",
						"chinese": "本来就是那样。重要的面试都会慎重决定。",
						"french": "C'est comme ça. Les entretiens importants nécessitent une décision prudente.",
						"spanish": "Así es. Las entrevistas importantes se deciden con cautela.",
						"vietnamese": "Vốn dĩ là vậy mà. Những buổi phỏng vấn quan trọng cần được cân nhắc kỹ lưỡng.",
						"thai": "มันก็เป็นแบบนั้นแหละครับ การสัมภาษณ์ที่สำคัญต้องตัดสินใจอย่างรอบคอบ",
						"hindi": "ऐसा ही होता है। महत्वपूर्ण साक्षात्कारों में सावधानी से निर्णय लिया जाता है।"
					},
					"type": "speech",
					"speaker": "jett",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너무 익숙해진 거 아니에요?",
						"english": "Aren't you too used to it?",
						"japanese": "慣れすぎじゃないですか？",
						"chinese": "你是不是太习惯了？",
						"french": "Vous ne vous y êtes pas trop habitué ?",
						"spanish": "¿No te has acostumbrado demasiado?",
						"vietnamese": "Không phải là anh/chị quá quen rồi sao?",
						"thai": "คุ้นเคยเกินไปแล้วหรือเปล่า?",
						"hindi": "क्या आपको इसकी बहुत आदत नहीं हो गई है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "jett",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "복도 끝에 작은 표지판이 보였다. 양쪽 모두 'Next →'를 가리키고 있었다.",
						"english": "A small sign was visible at the end of the corridor. Both sides pointed to 'Next →'.",
						"japanese": "廊下の突き当たりに小さな標識が見えた。どちらの方向も「次へ →」を指していた。",
						"chinese": "走廊尽头出现了一个小牌子。两边都指向“Next →”。",
						"french": "Un petit panneau était visible au bout du couloir. Les deux côtés indiquaient « Suivant → ».",
						"spanish": "Al final del pasillo se veía un pequeño letrero. Ambos lados señalaban \"Siguiente →\".",
						"vietnamese": "Một tấm biển nhỏ hiện ra ở cuối hành lang. Cả hai phía đều chỉ \"Tiếp theo →\".",
						"thai": "ป้ายเล็กๆ ปรากฏที่ปลายทางเดิน ทั้งสองข้างชี้ไปที่ 'ถัดไป →'",
						"hindi": "गलियारे के अंत में एक छोटा संकेत चिन्ह दिखाई दिया। दोनों तरफ 'अगला →' की ओर इशारा कर रहे थे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게 뭐야...? 어디로 가라는 거야?",
						"english": "What is this...? Where am I supposed to go?",
						"japanese": "これは何だ…？どこに行けって言うんだ？",
						"chinese": "这是什么...? 到底要我去哪儿？",
						"french": "Qu'est-ce que c'est que ça...? Où suis-je censé aller ?",
						"spanish": "¿Qué es esto...? ¿Adónde se supone que debo ir?",
						"vietnamese": "Cái quái gì đây...? Rốt cuộc là phải đi đâu?",
						"thai": "นี่มันอะไรกัน...? จะให้ฉันไปไหนเนี่ย?",
						"hindi": "यह क्या है...? मुझे कहाँ जाना है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "어딜 가도 '다음'이라는 거잖아! 끝이 없어!",
						"english": "No matter where I go, it's always 'Next'! There's no end!",
						"japanese": "どこへ行っても「次」ってことじゃん！終わりがない！",
						"chinese": "无论去哪儿都是“Next”！没完没了！",
						"french": "Peu importe où je vais, c'est toujours « Suivant » ! Il n'y a pas de fin !",
						"spanish": "¡Vaya donde vaya, siempre es \"Siguiente\"! ¡No hay fin!",
						"vietnamese": "Đi đâu cũng là \"Tiếp theo\"! Không có hồi kết!",
						"thai": "ไม่ว่าจะไปทางไหนก็ 'ถัดไป' ทั้งนั้น! ไม่มีที่สิ้นสุด!",
						"hindi": "मैं कहीं भी जाऊं, हमेशा 'अगला' ही है! इसका कोई अंत नहीं है!"
					},
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "걱정 마세요. 한 발짝만 더 가면 돼요. 분명히.",
						"english": "Don't worry. Just one more step. Definitely.",
						"japanese": "ご心配なく。あと一歩進めばいいんです。きっと。",
						"chinese": "别担心。再走一步就行了。肯定。",
						"french": "Ne vous inquiétez pas. Juste un pas de plus. C'est sûr.",
						"spanish": "No se preocupe. Solo un paso más. Seguro.",
						"vietnamese": "Đừng lo. Chỉ cần một bước nữa thôi. Chắc chắn.",
						"thai": "ไม่ต้องห่วงครับ อีกก้าวเดียวก็ถึงแล้ว รับรอง",
						"hindi": "चिंता मत करो। बस एक कदम और। निश्चित रूप से।"
					},
					"speaker": "jett",
					"emotion": "happy",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "하하하! 또 다시 실패군! 영원히 이곳을 헤맬 것이다!",
						"english": "Hahaha! Failed again! You'll wander here forever!",
						"japanese": "ハハハ！またしても失敗か！永遠にここを彷徨うがいい！",
						"chinese": "哈哈哈！又失败了！你将永远在这里徘徊！",
						"french": "Hahaha ! Encore un échec ! Tu erreras ici pour toujours !",
						"spanish": "¡Jajaja! ¡Otro fracaso! ¡Vagarás aquí para siempre!",
						"vietnamese": "Hahaha! Lại thất bại rồi! Ngươi sẽ lang thang ở đây mãi mãi!",
						"thai": "ฮ่าฮ่าฮ่า! ล้มเหลวอีกแล้ว! เจ้าจะต้องหลงอยู่ที่นี่ตลอดไป!",
						"hindi": "हाहाहा! फिर से नाकाम! तुम हमेशा यहीं भटकते रहोगे!"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다시는... 지지 않아! 언젠가는 진짜 출구를 찾겠어!",
						"english": "Never again... will I lose! Someday, I'll find the real exit!",
						"japanese": "二度と…負けない！いつか本当の出口を見つけてやる！",
						"chinese": "我再也...不会输了！总有一天，我会找到真正的出口！",
						"french": "Plus jamais... je ne perdrai ! Un jour, je trouverai la vraie sortie !",
						"spanish": "¡Nunca más... perderé! ¡Algún día encontraré la salida de verdad!",
						"vietnamese": "Sẽ không... thua nữa! Một ngày nào đó, tôi sẽ tìm thấy lối ra thật sự!",
						"thai": "ฉันจะไม่มีวัน...แพ้อีกแล้ว! สักวันหนึ่ง ฉันจะหาทางออกที่แท้จริงให้เจอ!",
						"hindi": "फिर कभी... नहीं हारूंगा! किसी दिन, मैं असली निकास ढूंढ ही लूंगा!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "jett",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "다음엔... 꼭 합격할 수 있을 거예요. 분명히.",
						"english": "Next time... I'm sure I'll pass. Definitely.",
						"japanese": "次は…きっと合格できます。必ず。",
						"chinese": "下次...我一定能通过的。肯定。",
						"french": "La prochaine fois... je réussirais, c'est sûr. Absolument.",
						"spanish": "La próxima vez... seguro que aprobaré. Sin duda.",
						"vietnamese": "Lần tới... tôi nhất định sẽ đậu. Chắc chắn rồi.",
						"thai": "ครั้งหน้า... ฉันจะต้องผ่านแน่นอน. มั่นใจเลย.",
						"hindi": "अगली बार... मैं ज़रूर पास हो जाऊँगा। यक़ीनन।"
					},
					"type": "speech",
					"speaker": "jett",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "jett",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이번 면접실은... 분위기가 좀 다르네요.",
						"english": "This interview room... the atmosphere feels different.",
						"japanese": "今回の面接室は…雰囲気が少し違いますね。",
						"chinese": "这次的面试室...气氛有点不同啊。",
						"french": "Cette salle d'entretien... l'ambiance est un peu différente.",
						"spanish": "Esta sala de entrevistas... tiene una atmósfera algo distinta.",
						"vietnamese": "Phòng phỏng vấn này... không khí có vẻ khác lạ.",
						"thai": "ห้องสัมภาษณ์นี้... บรรยากาศต่างออกไปหน่อยนะ",
						"hindi": "यह इंटरव्यू रूम... माहौल कुछ अलग है।"
					},
					"type": "speech",
					"speaker": "jett",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환영한다, 새로운 지원자들. 영원한 면접의 세계로.",
						"english": "Welcome, new applicants. To the world of eternal interviews.",
						"japanese": "ようこそ、新たな応募者たちよ。永遠なる面接の世界へ。",
						"chinese": "欢迎，新申请者们。来到永恒面试的世界。",
						"french": "Bienvenue, nouveaux candidats. Dans le monde des entretiens éternels.",
						"spanish": "Bienvenidos, nuevos aspirantes. Al mundo de la entrevista eterna.",
						"vietnamese": "Chào mừng, các ứng viên mới. Đến với thế giới phỏng vấn vĩnh cửu.",
						"thai": "ยินดีต้อนรับ ผู้สมัครใหม่ทุกคน สู่โลกของการสัมภาษณ์อันเป็นนิรันดร์",
						"hindi": "स्वागत है, नए आवेदकों। शाश्वत साक्षात्कार की दुनिया में।"
					}
				},
				{
					"content": {
						"korean": "또 다른 면접관이야? 넌 뭔데!",
						"english": "Another interviewer? What are you?!",
						"japanese": "また別の面接官？お前は何者だ！",
						"chinese": "又一个面试官？你到底是什么东西！",
						"french": "Encore un autre intervieweur ? Qu'est-ce que tu es !",
						"spanish": "¿Otro entrevistador? ¡¿Qué eres tú?!",
						"vietnamese": "Lại một giám khảo khác à? Ngươi là ai vậy!",
						"thai": "นี่มันผู้สัมภาษณ์อีกคนเหรอ? แกเป็นใครกัน!",
						"hindi": "एक और इंटरव्यूअर? तुम कौन हो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 너희의 지루함을 먹고 사는 존재. 면접은 영원히 계속될 것이다!",
						"english": "I am a being that feeds on your boredom. The interviews will continue forever!",
						"japanese": "私はお前たちの退屈を糧とする存在。面接は永遠に続くだろう！",
						"chinese": "我是以你们的无聊为食的存在。面试将永远持续下去！",
						"french": "Je suis une entité qui se nourrit de votre ennui. Les entretiens continueront éternellement !",
						"spanish": "Soy un ser que se alimenta de vuestro aburrimiento. ¡Las entrevistas continuarán para siempre!",
						"vietnamese": "Ta là kẻ sống bằng sự chán nản của các ngươi. Cuộc phỏng vấn sẽ tiếp diễn mãi mãi!",
						"thai": "ฉันคือสิ่งมีชีวิตที่กินความเบื่อหน่ายของพวกแกเป็นอาหาร การสัมภาษณ์จะดำเนินต่อไปชั่วนิรันดร์!",
						"hindi": "मैं तुम्हारी बोरियत पर जीने वाला अस्तित्व हूँ। इंटरव्यू हमेशा जारी रहेगा!"
					}
				},
				{
					"content": {
						"korean": "헛소리 마! 끝을 보여주겠어!",
						"english": "Nonsense! I'll show you the end!",
						"japanese": "でたらめ言うな！終わりを見せてやる！",
						"chinese": "胡说八道！我一定会让你看到结局！",
						"french": "C'est absurde ! Je te montrerai la fin !",
						"spanish": "¡Tonterías! ¡Te mostraré el final!",
						"vietnamese": "Đừng nói nhảm! Ta sẽ cho ngươi thấy kết thúc!",
						"thai": "เพ้อเจ้อ! ฉันจะแสดงจุดจบให้ดู!",
						"hindi": "बकवास बंद करो! मैं तुम्हें अंत दिखाऊंगा!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "크윽... 겨우 한 단계일 뿐... 다음 면접은... 더 지독할 거야...",
						"english": "Ugh... just one stage... The next interview... will be even worse...",
						"japanese": "くっ…たった一つの段階に過ぎぬ…次の面接は…もっとひどいだろう…",
						"chinese": "呃...这只是一步...下一次面试...会更糟糕的...",
						"french": "Argh... juste une étape... Le prochain entretien... sera encore pire...",
						"spanish": "Ugh... solo una etapa... La próxima entrevista... será aún peor...",
						"vietnamese": "Khụ... chỉ là một bước thôi... Cuộc phỏng vấn tiếp theo... sẽ còn tệ hơn...",
						"thai": "อึก... แค่ก้าวเดียวเอง... การสัมภาษณ์ครั้งหน้า... จะโหดกว่านี้...",
						"hindi": "उफ़... बस एक चरण... अगला इंटरव्यू... और भी बुरा होगा..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "끝이 아니라고? 대체 언제까지...",
						"english": "It's not over? Until when, then...",
						"japanese": "終わりじゃないだと？一体いつまで…",
						"chinese": "还没结束？到底要到什么时候...",
						"french": "Ce n'est pas la fin ? Jusqu'à quand, alors...",
						"spanish": "¿No es el final? ¿Hasta cuándo...?",
						"vietnamese": "Chưa kết thúc sao? Rốt cuộc là đến bao giờ...",
						"thai": "ยังไม่จบเหรอ? แล้วจะอีกนานแค่ไหนกัน...",
						"hindi": "खत्म नहीं हुआ? आखिर कब तक..."
					}
				},
				{
					"speaker": "jett",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "jett",
					"emotion": "happy",
					"content": {
						"korean": "괜찮아요. 다시 하면 돼요. 다음엔 꼭 합격할 거예요.",
						"english": "It's okay. We can try again. We'll definitely pass next time.",
						"japanese": "大丈夫です。またやればいいんです。次こそきっと合格しますよ。",
						"chinese": "没关系。再来一次就好。下次一定会通过的。",
						"french": "Ça va. On peut réessayer. On réussira la prochaine fois.",
						"spanish": "Está bien. Podemos intentarlo de nuevo. La próxima vez seguro que aprobamos.",
						"vietnamese": "Không sao đâu. Chúng ta có thể làm lại. Lần tới nhất định sẽ đậu.",
						"thai": "ไม่เป็นไร เราทำใหม่ได้ คราวหน้าต้องผ่านแน่ๆ",
						"hindi": "कोई बात नहीं। हम फिर से कर सकते हैं। अगली बार हम ज़रूर पास होंगे।"
					}
				},
				{
					"content": {
						"korean": "제트의 눈은 여전히 희망으로 빛났다. 하지만 그 희망은, 어딘가 일그러져 있었다.",
						"english": "Jet's eyes still shone with hope. But that hope was, somehow, distorted.",
						"japanese": "ジェットの瞳は依然として希望に輝いていた。しかしその希望は、どこか歪んでいた。",
						"chinese": "杰特的眼中依然闪烁着希望。但那希望，却又带着一丝扭曲。",
						"french": "Les yeux de Jet brillaient toujours d'espoir. Mais cet espoir était, d'une certaine manière, déformé.",
						"spanish": "Los ojos de Jet aún brillaban con esperanza. Pero esa esperanza estaba, de alguna manera, distorsionada.",
						"vietnamese": "Đôi mắt của Jet vẫn rực sáng với hy vọng. Nhưng hy vọng đó, lại có vẻ méo mó.",
						"thai": "ดวงตาของเจ็ตยังคงส่องประกายด้วยความหวัง แต่ความหวังนั้น กลับบิดเบี้ยวไปบ้าง",
						"hindi": "जेट की आँखें अभी भी आशा से चमक रही थीं। लेकिन वह आशा, कहीं न कहीं विकृत थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "면접은 끝나지 않았다. 그들은 여전히 '다음'을 찾아 헤맬 뿐이었다.",
						"english": "The interview wasn't over. They were still just wandering, searching for 'what's next'.",
						"japanese": "面接は終わっていなかった。彼らは依然として「次」を探し彷徨うばかりだった。",
						"chinese": "面试还没有结束。他们仍在四处徘徊，寻找着“下一个”。",
						"french": "L'entretien n'était pas terminé. Ils ne faisaient que errer, à la recherche du 'prochain'.",
						"spanish": "La entrevista no había terminado. Ellos seguían vagando, buscando el 'siguiente'.",
						"vietnamese": "Cuộc phỏng vấn chưa kết thúc. Họ vẫn chỉ đang lang thang, tìm kiếm 'điều tiếp theo'.",
						"thai": "การสัมภาษณ์ยังไม่จบ พวกเขายังคงวนเวียนตามหา 'สิ่งต่อไป' เท่านั้น",
						"hindi": "इंटरव्यू खत्म नहीं हुआ था। वे अभी भी 'अगले' की तलाश में भटक रहे थे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없는 면접. 지루함이 뼈저리게 박힌 공간.",
			"모두가 '다음'을 기다린다. 언젠가는 끝날 거라는 희망 하나로.",
			"한 청년, 제트. 그의 눈은 이상하리만치 차분했다.",
			"그는 이미 이 면접의 일부가 되어 있었다."
		],
		"english": [
			"Endless interviews. A space steeped in bone-weary boredom.",
			"Everyone awaits the 'next'. With the sole hope that it will end someday.",
			"A young man, Jett. His eyes were strangely calm.",
			"He had already become a part of this interview."
		],
		"japanese": [
			"終わりのない面接。骨の髄まで退屈が染み込んだ空間。",
			"皆が「次」を待つ。いつかは終わるという、ただ一つの希望を胸に。",
			"一人の青年、ジェット。彼の瞳は異常なほどに穏やかだった。",
			"彼はすでに、この面接の一部と化していた。"
		],
		"chinese": [
			"永无止境的面试。一个渗透着彻骨无聊的空间。",
			"所有人都在等待“下一个”。只因心中存着终会结束的希望。",
			"一个名叫杰特的年轻人。他的眼神异常平静。",
			"他早已成为这场面试的一部分。"
		],
		"french": [
			"Entretiens interminables. Un espace imprégné d'un ennui accablant.",
			"Chacun attend le « suivant ». Avec le seul espoir que cela se termine un jour.",
			"Un jeune homme, Jett. Ses yeux étaient étrangement calmes.",
			"Il faisait déjà partie de cet entretien."
		],
		"spanish": [
			"Entrevistas interminables. Un espacio impregnado de un aburrimiento exasperante.",
			"Todos esperan el 'siguiente'. Con la única esperanza de que algún día termine.",
			"Un joven, Jett. Sus ojos estaban extrañamente tranquilos.",
			"Él ya se había convertido en parte de esta entrevista."
		],
		"vietnamese": [
			"Phỏng vấn không hồi kết. Một không gian thấm đẫm sự chán chường đến tận xương tủy.",
			"Mọi người đều chờ đợi 'tiếp theo'. Với một niềm hy vọng duy nhất rằng nó sẽ kết thúc vào một ngày nào đó.",
			"Một thanh niên, Jett. Đôi mắt anh ta bình thản đến lạ.",
			"Anh ta đã trở thành một phần của cuộc phỏng vấn này."
		],
		"thai": [
			"สัมภาษณ์ไม่รู้จบ พื้นที่ที่ความเบื่อหน่ายกัดกินถึงกระดูก",
			"ทุกคนต่างรอคอย 'ครั้งต่อไป' ด้วยความหวังเดียวว่าจะจบลงสักวัน",
			"ชายหนุ่มคนหนึ่ง ชื่อเจ็ต ดวงตาของเขาดูสงบอย่างน่าประหลาด",
			"เขาได้กลายเป็นส่วนหนึ่งของการสัมภาษณ์นี้ไปแล้ว"
		],
		"hindi": [
			"अंतहीन साक्षात्कार। हड्डियों तक बोरियत से भरा स्थान।",
			"सब 'अगले' का इंतजार करते हैं। बस इस उम्मीद में कि यह कभी तो खत्म होगा।",
			"एक युवक, जेट। उसकी आँखें अजीब तरह से शांत थीं।",
			"वह पहले ही इस साक्षात्कार का हिस्सा बन चुका था।"
		]
	}
} as const;
