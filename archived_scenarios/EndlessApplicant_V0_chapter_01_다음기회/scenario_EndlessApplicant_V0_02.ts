export const scenario_EndlessApplicant_V0_02 = {
	"scenario_id": "EndlessApplicant_V0_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dan": {
			"id": "mon_c19cd322-c98f-4619-a03f-f756ac8c4b36",
			"name": {
				"korean": "댄",
				"english": "Dan",
				"japanese": "ダン",
				"chinese": "丹",
				"french": "Dan",
				"spanish": "Dan",
				"vietnamese": "Dan",
				"thai": "แดน",
				"hindi": "डैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/3dcb42c7-9b42-46cd-a663-c577becbb500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c6008e6f-833a-4200-b913-87b8aed8ce00/public"
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
						"korean": "낯익은 대기실. 지루한 면접이 또 시작된다.",
						"english": "A familiar waiting room. Another boring interview begins.",
						"japanese": "見慣れた待合室。また退屈な面接が始まる。",
						"chinese": "熟悉的等候室。又一场无聊的面试开始了。",
						"french": "Une salle d'attente familière. Un autre entretien ennuyeux commence.",
						"spanish": "Una sala de espera familiar. Otra entrevista aburrida comienza.",
						"vietnamese": "Một phòng chờ quen thuộc. Một cuộc phỏng vấn nhàm chán nữa lại bắt đầu.",
						"thai": "ห้องรอที่คุ้นเคย การสัมภาษณ์ที่น่าเบื่ออีกครั้งเริ่มต้นขึ้น",
						"hindi": "एक परिचित प्रतीक्षा कक्ष। एक और उबाऊ साक्षात्कार शुरू होता है।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…또야? 지긋지긋해.",
						"english": "...Again? This is tiresome.",
						"japanese": "…また？うんざりだ。",
						"chinese": "…又来了？真是受够了。",
						"french": "...Encore ? C'est épuisant.",
						"spanish": "¿...Otra vez? Esto es agotador.",
						"vietnamese": "...Lại nữa à? Chán ghét quá.",
						"thai": "...อีกแล้วเหรอ? เบื่อจริงๆ",
						"hindi": "...फिर से? यह थकाऊ है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dan",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저기… 저 면접관, 뭔가 이상해요.",
						"english": "Um... that interviewer, something's off about them.",
						"japanese": "あの…あの面接官、何かおかしいです。",
						"chinese": "那个…那个面试官，有点不对劲。",
						"french": "Euh... cet intervieweur, il y a quelque chose d'étrange chez lui.",
						"spanish": "Uhm... ese entrevistador, algo anda mal con él.",
						"vietnamese": "Ưm... người phỏng vấn đó, có gì đó không ổn.",
						"thai": "เอ่อ...กรรมการสัมภาษณ์คนนั้น ดูแปลกๆ นะคะ",
						"hindi": "उम्म... वो इंटरव्यू लेने वाला, कुछ अजीब है उसके बारे में।"
					},
					"speaker": "dan"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你在说什么？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Bạn nói gì vậy?",
						"thai": "หมายความว่ายังไง?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "며칠째 지원자들이 안 돌아와요. 저 괴물이…!",
						"english": "Applicants haven't returned for days. That monster...!",
						"japanese": "何日も応募者が戻ってこないんです。あの怪物が…！",
						"chinese": "好几天了，申请者都没回来。那个怪物…！",
						"french": "Les candidats ne sont pas revenus depuis des jours. Ce monstre... !",
						"spanish": "Los solicitantes no han regresado en días. ¡Ese monstruo...!",
						"vietnamese": "Mấy ngày rồi, các ứng viên không trở lại. Con quái vật đó...!",
						"thai": "ผู้สมัครไม่ได้กลับมาหลายวันแล้วค่ะ สัตว์ประหลาดนั่น...!",
						"hindi": "कई दिनों से आवेदक वापस नहीं आए हैं। वो राक्षस...!"
					},
					"speaker": "dan"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "면접관의 형체가 일그러진다. 펜이 팔이 되고, 입이 늘어난다.",
						"english": "The interviewer's form distorts. A pen becomes an arm, and the mouth stretches.",
						"japanese": "面接官の形が歪む。ペンが腕になり、口が伸びる。",
						"chinese": "面试官的形态扭曲了。笔变成了手臂，嘴巴也拉长了。",
						"french": "La forme de l'intervieweur se déforme. Un stylo devient un bras, et la bouche s'étire.",
						"spanish": "La forma del entrevistador se distorsiona. Un bolígrafo se convierte en un brazo, y la boca se estira.",
						"vietnamese": "Hình dáng của người phỏng vấn bị méo mó. Cây bút biến thành cánh tay, và miệng kéo dài ra.",
						"thai": "รูปร่างของกรรมการสัมภาษณ์บิดเบี้ยว ปากกาเปลี่ยนเป็นแขน และปากก็ยืดยาวออกไป",
						"hindi": "साक्षात्कारकर्ता का रूप विकृत हो जाता है। एक कलम बांह बन जाती है, और मुंह फैल जाता है।"
					}
				},
				{
					"content": {
						"korean": "다음 분, 들어오세요.",
						"english": "Next up, please come in.",
						"japanese": "次の方、どうぞ。",
						"chinese": "下一位，请进。",
						"french": "Suivant, entrez.",
						"spanish": "Siguiente, pase.",
						"vietnamese": "Người tiếp theo, mời vào.",
						"thai": "คนต่อไป เชิญเข้ามา",
						"hindi": "अगला, अंदर आओ।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "괴물이다!",
						"english": "Monster!",
						"japanese": "怪物だ！",
						"chinese": "怪物！",
						"french": "Monstre !",
						"spanish": "¡Monstruo!",
						"vietnamese": "Quái vật!",
						"thai": "สัตว์ประหลาด!",
						"hindi": "राक्षस!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dan",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "저놈이 또! 지원자들을 잡아먹고 있어요!",
						"english": "Not again! It's eating the applicants!",
						"japanese": "またあいつが！応募者たちを食い尽くしている！",
						"chinese": "又是它！它在吞噬应征者！",
						"french": "Encore lui ! Il dévore les candidats !",
						"spanish": "¡Él otra vez! ¡Se está comiendo a los aspirantes!",
						"vietnamese": "Hắn ta lại nữa! Hắn đang nuốt chửng các ứng viên!",
						"thai": "มันอีกแล้ว! มันกำลังกินผู้สมัคร!",
						"hindi": "फिर वही! वह आवेदकों को खा रहा है!"
					},
					"speaker": "dan",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "안 돼! 다른 사람들을 지켜야 해!",
						"english": "No! I must protect the others!",
						"japanese": "だめだ！他の皆を守らなきゃ！",
						"chinese": "不！我必须保护其他人！",
						"french": "Non ! Je dois protéger les autres !",
						"spanish": "¡No! ¡Debo proteger a los demás!",
						"vietnamese": "Không! Tôi phải bảo vệ những người khác!",
						"thai": "ไม่นะ! ฉันต้องปกป้องคนอื่น!",
						"hindi": "नहीं! मुझे दूसरों की रक्षा करनी होगी!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "면접은 계속됩니다. 불합격은 없습니다.",
						"english": "The interview continues. There are no failures.",
						"japanese": "面接は続行される。不合格はない。",
						"chinese": "面试继续。没有不合格者。",
						"french": "L'entretien continue. Il n'y a pas d'échec.",
						"spanish": "La entrevista continúa. No hay reprobados.",
						"vietnamese": "Cuộc phỏng vấn tiếp tục. Không có ai trượt cả.",
						"thai": "การสัมภาษณ์ยังคงดำเนินต่อไป ไม่มีผู้สอบตก",
						"hindi": "साक्षात्कार जारी रहेगा। कोई असफल नहीं होगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "대기실의 시계는 멈춘 듯하다. 시간은 흐르지 않는다.",
						"english": "The waiting room clock is stopped. Time doesn't flow.",
						"japanese": "待合室の時計は止まったようだ。時は流れない。",
						"chinese": "等候室的时钟似乎停了。时间没有流逝。",
						"french": "L'horloge de la salle d'attente semble arrêtée. Le temps ne s'écoule pas.",
						"spanish": "El reloj de la sala de espera parece detenido. El tiempo no fluye.",
						"vietnamese": "Đồng hồ trong phòng chờ như đã dừng lại. Thời gian không trôi.",
						"thai": "นาฬิกาในห้องรอคอยดูเหมือนจะหยุดนิ่ง เวลาไม่ไหลเวียน",
						"hindi": "प्रतीक्षा कक्ष की घड़ी रुकी हुई लगती है। समय नहीं बीतता।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "다음 단계로 가시겠습니까?",
						"english": "Proceed to the next stage?",
						"japanese": "次の段階へ進みますか？",
						"chinese": "要进入下一阶段吗？",
						"french": "Voulez-vous passer à l'étape suivante ?",
						"spanish": "¿Desea pasar a la siguiente fase?",
						"vietnamese": "Bạn có muốn tiếp tục bước tiếp theo không?",
						"thai": "คุณต้องการไปสู่ขั้นตอนต่อไปหรือไม่?",
						"hindi": "क्या आप अगले चरण में आगे बढ़ना चाहेंगे?"
					},
					"speaker": "random_boss",
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
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "dan",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "힘내요! 저 괴물만 없애면 돼요!",
						"english": "Stay strong! Just defeat that monster!",
						"japanese": "頑張れ！あの怪物を倒すだけだ！",
						"chinese": "加油！只要消灭那个怪物就行了！",
						"french": "Courage ! Il suffit d'éliminer ce monstre !",
						"spanish": "¡Ánimo! ¡Solo hay que eliminar a ese monstruo!",
						"vietnamese": "Cố lên! Chỉ cần tiêu diệt con quái vật đó thôi!",
						"thai": "สู้ๆ! แค่กำจัดสัตว์ประหลาดตัวนั้นก็พอ!",
						"hindi": "हिम्मत मत हारो! बस उस राक्षस को खत्म करना है!"
					},
					"speaker": "dan",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "수많은 지원자들. 모두 저에게 흡수되었죠.",
						"english": "Countless applicants. All absorbed by me.",
						"japanese": "数多の応募者たち。皆、私に吸収された。",
						"chinese": "无数的应征者。都被我吸收了。",
						"french": "De nombreux candidats. Tous absorbés par moi.",
						"spanish": "Numerosos aspirantes. Todos absorbidos por mí.",
						"vietnamese": "Vô số ứng viên. Tất cả đã bị tôi hấp thụ.",
						"thai": "ผู้สมัครมากมาย ทุกคนถูกฉันดูดซับไปแล้ว",
						"hindi": "असंख्य आवेदक। सभी मेरे द्वारा समाहित कर लिए गए।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그만둬! 모두 죽은 거야?",
						"english": "Stop! Are they all dead?",
						"japanese": "やめろ！皆、死んだのか？",
						"chinese": "住手！他们都死了吗？",
						"french": "Arrête ! Sont-ils tous morts ?",
						"spanish": "¡Detente! ¿Están todos muertos?",
						"vietnamese": "Dừng lại! Tất cả đều đã chết rồi sao?",
						"thai": "หยุดนะ! พวกเขาทั้งหมดตายแล้วเหรอ?",
						"hindi": "रुको! क्या वे सब मर गए?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아니요. 더 나은 직원이 되었을 뿐.",
						"english": "No. Just a better employee.",
						"japanese": "いいえ。より良い社員になっただけです。",
						"chinese": "不。只是一个更好的员工。",
						"french": "Non. Juste un meilleur employé.",
						"spanish": "No. Solo un empleado mejor.",
						"vietnamese": "Không. Chỉ là một nhân viên tốt hơn thôi.",
						"thai": "ไม่ใช่ แค่เป็นพนักงานที่ดีขึ้นเท่านั้น",
						"hindi": "नहीं। बस एक बेहतर कर्मचारी बन गया।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dan",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "dan",
					"content": {
						"korean": "여기까지 온 건 우리가 처음이에요!",
						"english": "We're the first ones to make it this far!",
						"japanese": "ここまで来たのは私たちが初めてです！",
						"chinese": "我们是第一个走到这里的人！",
						"french": "Nous sommes les premiers à être arrivés aussi loin !",
						"spanish": "¡Somos los primeros en llegar tan lejos!",
						"vietnamese": "Chúng ta là những người đầu tiên đến được đây!",
						"thai": "พวกเราเป็นคนแรกที่มาได้ไกลถึงขนาดนี้!",
						"hindi": "हम ही पहले हैं जो यहाँ तक पहुँचे हैं!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석군요. 당신들도 결국 같은 운명.",
						"english": "Foolish. You too will share the same fate.",
						"japanese": "愚かですね。あなたたちも結局同じ運命です。",
						"chinese": "愚蠢。你们也终将面临同样的命运。",
						"french": "Insensé. Vous aussi partagerez le même destin.",
						"spanish": "Necios. Vosotros también tendréis el mismo destino.",
						"vietnamese": "Ngốc nghếch. Các ngươi rồi cũng chung số phận.",
						"thai": "โง่เขลา เจ้าเองก็ต้องพบชะตากรรมเดียวกันในที่สุด",
						"hindi": "मूर्खता। तुम भी अंततः उसी भाग्य का सामना करोगे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우린 달라! 여기서 끝낼 거야!",
						"english": "We're different! We'll end it here!",
						"japanese": "私たちは違う！ここで終わらせる！",
						"chinese": "我们不一样！我们会在R这里结束它！",
						"french": "Nous sommes différents ! Nous allons y mettre fin ici !",
						"spanish": "¡Somos diferentes! ¡Lo acabaremos aquí!",
						"vietnamese": "Chúng ta khác! Chúng ta sẽ kết thúc nó ở đây!",
						"thai": "พวกเราไม่เหมือนกัน! เราจะจบมันที่นี่!",
						"hindi": "हम अलग हैं! हम इसे यहीं खत्म करेंगे!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "괴물의 그림자가 대기실을 가득 메운다. 탈출구는 보이지 않는다.",
						"english": "The monster's shadow fills the waiting room. No escape in sight.",
						"japanese": "化け物の影が待機室を満たす。脱出口は見当たらない。",
						"chinese": "怪物的影子弥漫了等候室。逃生出口无处可寻。",
						"french": "L'ombre du monstre remplit la salle d'attente. Aucune échappatoire en vue.",
						"spanish": "La sombra del monstruo llena la sala de espera. No hay escapatoria a la vista.",
						"vietnamese": "Bóng của quái vật bao trùm phòng chờ. Không thấy lối thoát.",
						"thai": "เงาของสัตว์ประหลาดปกคลุมห้องรอคอย ไม่เห็นทางหนี",
						"hindi": "राक्षस की परछाई प्रतीक्षा कक्ष को भर देती है। कोई निकास द्वार नहीं दिखता।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "최종 면접입니다. 합격은 당신의 존재를 바칠 때 주어지죠.",
						"english": "This is the final interview. Acceptance is granted when you dedicate your very being.",
						"japanese": "最終面接です。合格は、あなたの存在を捧げた時に与えられます。",
						"chinese": "这是最终面试。只有当你奉献出你的存在时，才能获得通过。",
						"french": "C'est l'entretien final. L'acceptation est accordée lorsque vous dédiez votre être tout entier.",
						"spanish": "Esta es la entrevista final. La aceptación se otorga cuando dedicas tu propia existencia.",
						"vietnamese": "Đây là buổi phỏng vấn cuối cùng. Bạn chỉ được chấp nhận khi cống hiến sự tồn tại của mình.",
						"thai": "นี่คือการสัมภาษณ์รอบสุดท้าย การตอบรับจะได้รับเมื่อคุณอุทิศตนเอง",
						"hindi": "यह अंतिम साक्षात्कार है। स्वीकृति तभी मिलती है जब आप अपना अस्तित्व समर्पित कर दें।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우린 아무것도 바치지 않아! 널 파괴할 뿐!",
						"english": "We won't sacrifice anything! We'll just destroy you!",
						"japanese": "私たちは何も捧げない！あなたを破壊するだけだ！",
						"chinese": "我们什么都不会奉献！只会毁灭你！",
						"french": "Nous ne sacrifierons rien ! Nous allons juste te détruire !",
						"spanish": "¡No sacrificaremos nada! ¡Solo te destruiremos!",
						"vietnamese": "Chúng ta sẽ không hiến tế gì cả! Chỉ có phá hủy ngươi thôi!",
						"thai": "เราจะไม่บูชายัญอะไรทั้งนั้น! เราจะทำลายเจ้าเท่านั้น!",
						"hindi": "हम कुछ भी बलिदान नहीं करेंगे! हम तुम्हें बस नष्ट कर देंगे!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…겨우 중간 단계일 뿐. 이 면접은 끝나지 않아.",
						"english": "...Just an intermediate stage. This interview never ends.",
						"japanese": "…ただの中間段階に過ぎない。この面接は終わらない。",
						"chinese": "……这只是一个中间阶段。这场面试永无止境。",
						"french": "...Ce n'est qu'une étape intermédiaire. Cet entretien ne finit jamais.",
						"spanish": "...Solo una etapa intermedia. Esta entrevista nunca termina.",
						"vietnamese": "...Chỉ là một giai đoạn trung gian thôi. Cuộc phỏng vấn này sẽ không bao giờ kết thúc.",
						"thai": "แค่เพียงขั้นกลางเท่านั้น การสัมภาษณ์นี้จะไม่มีวันสิ้นสุด",
						"hindi": "...बस एक मध्यवर्ती चरण। यह साक्षात्कार कभी खत्म नहीं होता।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 끝났잖아!",
						"english": "What are you talking about? It's over!",
						"japanese": "何を言ってるんだ？終わったじゃないか！",
						"chinese": "你在说什么？已经结束了！",
						"french": "Qu'est-ce que tu racontes ? C'est fini !",
						"spanish": "¿De qué hablas? ¡Se acabó!",
						"vietnamese": "Ngươi đang nói gì vậy? Nó kết thúc rồi mà!",
						"thai": "เจ้ากำลังพูดอะไร? มันจบแล้วไม่ใช่เหรอ!",
						"hindi": "तुम क्या कह रहे हो? यह तो खत्म हो गया!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "인사팀의 포식자가 쓰러졌다. 그러나 복도 저편, 또 다른 대기실이 기다리고 있었다.",
						"english": "The HR department's predator has fallen. Yet, beyond the corridor, another waiting room awaited.",
						"japanese": "人事部の捕食者が倒れた。しかし、廊下の向こうには、別の待機室が待ち構えていた。",
						"chinese": "人力资源部的掠食者倒下了。然而，走廊的另一边，另一个等候室正在等待着。",
						"french": "Le prédateur du service des RH est tombé. Pourtant, au-delà du couloir, une autre salle d'attente attendait.",
						"spanish": "El depredador del departamento de RRHH ha caído. Sin embargo, más allá del pasillo, otra sala de espera aguardaba.",
						"vietnamese": "Kẻ săn mồi của phòng nhân sự đã ngã xuống. Thế nhưng, phía bên kia hành lang, một phòng chờ khác đang đợi sẵn.",
						"thai": "ผู้ล่าของฝ่ายบุคคลล้มลงแล้ว แต่ทว่าอีกฟากหนึ่งของทางเดิน ห้องรอคอยอีกห้องกำลังรออยู่",
						"hindi": "मानव संसाधन विभाग का शिकारी गिर गया। फिर भी, गलियारे के उस पार, एक और प्रतीक्षा कक्ष इंतजार कर रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "불합격. 당신의 존재는… 회사에 적합하지 않습니다.",
						"english": "Disqualified. Your existence… is not suitable for the company.",
						"japanese": "不合格。あなたの存在は… 会社には相応しくありません。",
						"chinese": "不合格。你的存在…不适合公司。",
						"french": "Disqualifié. Votre existence… n'est pas adaptée à l'entreprise.",
						"spanish": "Descalificado. Tu existencia… no es adecuada para la empresa.",
						"vietnamese": "Không đạt. Sự tồn tại của bạn… không phù hợp với công ty.",
						"thai": "ไม่ผ่านการคัดเลือก การมีอยู่ของคุณ… ไม่เหมาะสมกับบริษัท",
						"hindi": "अयोग्य। आपका अस्तित्व… कंपनी के लिए उपयुक्त नहीं है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "다시… 다시 할 거야!",
						"english": "Again… I'll do it again!",
						"japanese": "もう一度… もう一度やる！",
						"chinese": "再来… 我会再来一次！",
						"french": "Encore… Je vais le refaire !",
						"spanish": "Otra vez… ¡Lo haré de nuevo!",
						"vietnamese": "Lại… tôi sẽ làm lại!",
						"thai": "อีกครั้ง… ฉันจะทำอีกครั้ง!",
						"hindi": "फिर से… मैं फिर से करूँगा!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"또 다른 면접 대기실. 끝없는 기다림.",
			"같은 정장, 같은 질문, 같은 대답.",
			"그러나 오늘은 조금 달랐다. 이상한 기운이 감돌았다.",
			"인사팀의 포식자가 눈을 떴다."
		],
		"english": [
			"Another interview waiting room. Endless waiting.",
			"Same suit, same questions, same answers.",
			"But today was a little different. A strange energy hung in the air.",
			"The HR team's predator awakened."
		],
		"japanese": [
			"また別の面接待合室。終わりのない待ち時間。",
			"同じスーツ、同じ質問、同じ答え。",
			"しかし、今日は少し違った。奇妙な気配が漂っていた。",
			"人事部の捕食者が目を覚ました。"
		],
		"chinese": [
			"又一个面试等候室。无尽的等待。",
			"同样的西装，同样的问题，同样的答案。",
			"然而今天却有些不同。一股奇怪的气息弥漫开来。",
			"人力资源部的捕食者睁开了眼睛。"
		],
		"french": [
			"Une autre salle d'attente d'entretien. Une attente interminable.",
			"Même costume, mêmes questions, mêmes réponses.",
			"Mais aujourd'hui, c'était un peu différent. Une étrange atmosphère planait.",
			"Le prédateur de l'équipe RH s'est réveillé."
		],
		"spanish": [
			"Otra sala de espera para entrevistas. Una espera interminable.",
			"El mismo traje, las mismas preguntas, las mismas respuestas.",
			"Pero hoy fue un poco diferente. Una extraña energía flotaba en el ambiente.",
			"El depredador del equipo de RRHH despertó."
		],
		"vietnamese": [
			"Một phòng chờ phỏng vấn khác. Chờ đợi vô tận.",
			"Cùng một bộ đồ, cùng một câu hỏi, cùng một câu trả lời.",
			"Nhưng hôm nay hơi khác một chút. Một luồng khí lạ bao trùm.",
			"Kẻ săn mồi của đội nhân sự đã thức tỉnh."
		],
		"thai": [
			"ห้องรอสัมภาษณ์อีกห้อง การรอคอยที่ไม่มีที่สิ้นสุด",
			"ชุดเดิม คำถามเดิม คำตอบเดิม",
			"แต่วันนี้แตกต่างออกไปเล็กน้อย มีบรรยากาศแปลกๆ ลอยอยู่",
			"นักล่าของทีม HR ตื่นขึ้นแล้ว"
		],
		"hindi": [
			"एक और साक्षात्कार प्रतीक्षा कक्ष। अंतहीन इंतज़ार।",
			"वही सूट, वही सवाल, वही जवाब।",
			"लेकिन आज थोड़ा अलग था। एक अजीब सी ऊर्जा हवा में थी।",
			"एचआर टीम का शिकारी जाग उठा।"
		]
	}
} as const;
