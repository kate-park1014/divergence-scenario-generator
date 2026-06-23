export const scenario_modern_mnemos_15_05 = {
	"scenario_id": "modern_mnemos_15_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "pool_VowKeeper_Mnemos_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "므네모스의 은신처. 잊힌 기록들의 폐허였다.",
						"english": "Mnemos' lair. A ruin of forgotten records.",
						"japanese": "ムネモスの隠れ家。忘れ去られた記録の廃墟だった。",
						"chinese": "姆涅莫斯的巢穴。那是被遗忘记录的废墟。",
						"french": "La cachette de Mnemos. Une ruine de registres oubliés.",
						"spanish": "La guarida de Mnemos. Una ruina de registros olvidados.",
						"vietnamese": "Hang ổ của Mnemos. Một đống đổ nát của những ghi chép bị lãng quên.",
						"thai": "รังของมนีมอส ซากปรักหักพังของบันทึกที่ถูกลืม",
						"hindi": "नेमोस का ठिकाना। भूली हुई अभिलेखों का खंडहर।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bex",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bex",
					"content": {
						"korean": "...결국 여기까지 왔군.",
						"english": "...So you've finally arrived.",
						"japanese": "…結局、ここまで来たか。",
						"chinese": "……终究还是走到这里了。",
						"french": "...Finalement, vous êtes arrivé.",
						"spanish": "...Así que finalmente llegaste.",
						"vietnamese": "...Cuối cùng thì ngươi cũng đến đây.",
						"thai": "...ในที่สุดก็มาถึงที่นี่จนได้สินะ",
						"hindi": "...आखिरकार तुम यहाँ आ ही गए।"
					}
				},
				{
					"content": {
						"korean": "네가 여기 왜 있어?",
						"english": "Why are you here?",
						"japanese": "なぜここにいる？",
						"chinese": "你为什么在这？",
						"french": "Pourquoi es-tu ici ?",
						"spanish": "¿Por qué estás aquí?",
						"vietnamese": "Ngươi tại sao ở đây?",
						"thai": "ทำไมคุณถึงมาอยู่ที่นี่?",
						"hindi": "तुम यहाँ क्यों हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bex",
					"content": {
						"korean": "나는... 처음부터 그의 기록 일부였어. 그저, 너희를 이끌었을 뿐.",
						"english": "I... was part of his records from the start. I merely guided you.",
						"japanese": "私は…最初から彼の記録の一部だった。ただ、君たちを導いただけだ。",
						"chinese": "我……从一开始就是他记录的一部分。只是引导了你们而已。",
						"french": "J'étais... une partie de ses archives depuis le début. Je ne faisais que vous guider.",
						"spanish": "Yo... fui parte de sus registros desde el principio. Solo los guié.",
						"vietnamese": "Ta... ngay từ đầu đã là một phần hồ sơ của hắn. Chỉ là dẫn dắt các ngươi mà thôi.",
						"thai": "ฉัน... เป็นส่วนหนึ่งของบันทึกของเขาตั้งแต่แรก เพียงแค่ชี้นำพวกเธอเท่านั้น",
						"hindi": "मैं... शुरुआत से ही उसके अभिलेखों का हिस्सा था। मैंने बस तुम्हें मार्गदर्शन दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네 모든 정보가 기만이었다는 거군.",
						"english": "So all your information was a deception.",
						"japanese": "君のすべての情報が欺瞞だったというのか。",
						"chinese": "所以你所有的信息都是欺骗。",
						"french": "Donc toutes tes informations étaient une tromperie.",
						"spanish": "Así que toda tu información fue un engaño.",
						"vietnamese": "Vậy ra tất cả thông tin của ngươi đều là lừa dối.",
						"thai": "งั้นข้อมูลทั้งหมดของคุณก็เป็นแค่การหลอกลวงสินะ",
						"hindi": "तो तुम्हारी सारी जानकारी धोखेबाज़ी थी।"
					},
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "bex",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "므네모스는... 과거 갱스터 조직의 마지막 서기장이었어.",
						"english": "Mnemos... was the last secretary-general of a former gangster organization.",
						"japanese": "ムネモスは…かつてのギャング組織の最後の書記長だった。",
						"chinese": "姆涅莫斯……是过去某个黑帮组织的最后一任书记长。",
						"french": "Mnemos... était le dernier secrétaire général d'une ancienne organisation de gangsters.",
						"spanish": "Mnemos... fue el último secretario general de una antigua organización de gánsteres.",
						"vietnamese": "Mnemos... là tổng thư ký cuối cùng của một tổ chức xã hội đen trong quá khứ.",
						"thai": "เนโมส... เป็นเลขาธิการคนสุดท้ายขององค์กรนักเลงในอดีต",
						"hindi": "म्नेमोस... एक पूर्व गैंगस्टर संगठन का आखिरी महासचिव था।"
					},
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "도시 괴담 속 인물이 실존했다는 말인가?",
						"english": "Are you saying the figure from urban legends actually existed?",
						"japanese": "都市伝説の人物が実在したとでもいうのか？",
						"chinese": "你是说都市传说中的人物真的存在？",
						"french": "Tu veux dire que le personnage des légendes urbaines existait réellement ?",
						"spanish": "¿Estás diciendo que la figura de las leyendas urbanas realmente existió?",
						"vietnamese": "Ngươi nói nhân vật trong truyền thuyết đô thị là có thật sao?",
						"thai": "คุณกำลังจะบอกว่าบุคคลในตำนานเมืองมีตัวตนอยู่จริงงั้นหรือ?",
						"hindi": "क्या तुम कह रहे हो कि शहरी किंवदंतियों का पात्र वास्तव में मौजूद था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "조직이 몰락할 때, 그는 모든 맹세를 지키려다... 기억 그 자체가 되었지. 파편처럼 부서지면서.",
						"english": "When the organization fell, he tried to uphold all his vows... and became memory itself. Shattering like fragments.",
						"japanese": "組織が没落した時、彼はすべての誓いを守ろうとして…記憶そのものになった。破片のように砕け散りながら。",
						"chinese": "当组织衰落时，他试图履行所有的誓言……然后成为了记忆本身。像碎片一样破碎着。",
						"french": "Quand l'organisation s'est effondrée, il a essayé de tenir tous ses vœux... et est devenu la mémoire elle-même. Se brisant en fragments.",
						"spanish": "Cuando la organización cayó, intentó cumplir todos sus juramentos... y se convirtió en la memoria misma. Fragmentándose como piezas.",
						"vietnamese": "Khi tổ chức sụp đổ, hắn đã cố gắng giữ mọi lời thề... và trở thành chính ký ức đó. Vỡ nát như những mảnh vụn.",
						"thai": "เมื่อองค์กรล่มสลาย เขาก็พยายามรักษาคำสาบานทั้งหมด... และกลายเป็นความทรงจำเอง แตกสลายเป็นเสี่ยงๆ",
						"hindi": "जब संगठन गिर गया, तो उसने अपने सभी वादों को निभाने की कोशिश की... और वह स्वयं स्मृति बन गया। टुकड़ों की तरह बिखरते हुए।"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그래서 기록들이 불안정했던 거군.",
						"english": "That's why the records were unstable.",
						"japanese": "だから記録が不安定だったのか。",
						"chinese": "所以记录才不稳定。",
						"french": "C'est pourquoi les archives étaient instables.",
						"spanish": "Por eso los registros eran inestables.",
						"vietnamese": "Vì vậy các hồ sơ mới không ổn định.",
						"thai": "นั่นสินะ ทำไมบันทึกถึงไม่เสถียร",
						"hindi": "इसलिए अभिलेख अस्थिर थे।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"direction": "down",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bex",
					"content": {
						"korean": "이제... 그의 비극을 끝내줘.",
						"english": "Now... end his tragedy.",
						"japanese": "さあ…彼の悲劇を終わらせてくれ。",
						"chinese": "现在……结束他的悲剧吧。",
						"french": "Maintenant... mets fin à sa tragédie.",
						"spanish": "Ahora... pon fin a su tragedia.",
						"vietnamese": "Bây giờ... hãy kết thúc bi kịch của hắn.",
						"thai": "ตอนนี้... ช่วยยุติโศกนาฏกรรมของเขาด้วย",
						"hindi": "अब... उसकी त्रासदी को समाप्त करो।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "복잡하게 얽힌 통로가 기억의 미로처럼 이어졌다.",
						"english": "Intricately intertwined passages stretched out like a labyrinth of memories.",
						"japanese": "複雑に絡み合った通路が、記憶の迷路のように続いていた。",
						"chinese": "错综复杂的通道像记忆的迷宫一样延伸着。",
						"french": "Des passages complexes et entrelacés s'étendaient comme un labyrinthe de souvenirs.",
						"spanish": "Pasajes intrincadamente entrelazados se extendían como un laberinto de recuerdos.",
						"vietnamese": "Những lối đi đan xen phức tạp tiếp nối nhau như mê cung ký ức.",
						"thai": "ทางเดินที่พันกันยุ่งเหยิงทอดยาวราวกับเขาวงกตแห่งความทรงจำ",
						"hindi": "जटिल रूप से उलझे हुए मार्ग यादों की भूलभुलैया की तरह फैले हुए थे।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "모든 빚과 맹세가 그에게서 시작되었다는 건가.",
						"english": "So all debts and vows originated from him.",
						"japanese": "すべての借りと誓いが彼から始まったということか。",
						"chinese": "所有的债务和誓言都源于他吗？",
						"french": "Alors toutes les dettes et les vœux provenaient de lui.",
						"spanish": "¿Así que todas las deudas y juramentos se originaron en él?",
						"vietnamese": "Vậy tất cả nợ nần và lời thề đều bắt nguồn từ hắn sao?",
						"thai": "งั้นหนี้สินและคำสาบานทั้งหมดก็เริ่มต้นจากเขาสินะ",
						"hindi": "तो सभी ऋण और प्रतिज्ञाएँ उसी से उत्पन्न हुईं।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 도시의 기이한 사건들이… 그의 집착 때문이었어.",
						"english": "The strange occurrences in this city… were all because of his obsession.",
						"japanese": "この街の奇妙な事件は…彼の執着が原因だった。",
						"chinese": "这座城市发生的诡异事件…都是因为他的执念。",
						"french": "Les étranges événements de cette ville… étaient dus à son obsession.",
						"spanish": "Los extraños sucesos de esta ciudad… fueron a causa de su obsesión.",
						"vietnamese": "Những sự kiện kỳ lạ trong thành phố này… là do sự ám ảnh của hắn.",
						"thai": "เหตุการณ์แปลกประหลาดในเมืองนี้… ล้วนเกิดจากความหมกมุ่นของเขา",
						"hindi": "इस शहर की अजीबोगरीब घटनाएँ... उसकी सनक की वजह से थीं।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "기록의 웅장한 심장부. 그곳에서 거대한 존재감이 느껴졌다.",
						"english": "The grand heart of the records. A massive presence was felt there.",
						"japanese": "記録の壮大な心臓部。そこには巨大な存在感が感じられた。",
						"chinese": "记录的宏伟核心。在那里，感受到了一股巨大的存在感。",
						"french": "Le grand cœur des archives. Une présence massive y était ressentie.",
						"spanish": "El gran corazón de los registros. Allí se percibía una presencia masiva.",
						"vietnamese": "Trái tim vĩ đại của ký ức. Một sự hiện diện khổng lồ được cảm nhận ở đó.",
						"thai": "ใจกลางอันยิ่งใหญ่ของบันทึก สัมผัสได้ถึงการมีอยู่ขนาดมหึมาที่นั่น",
						"hindi": "अभिलेखों का भव्य हृदय। वहाँ एक विशाल उपस्थिति महसूस हुई।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "피할 수 없어. 마지막 맹세를 청산해야 해.",
						"english": "There's no escape. I must settle the final vow.",
						"japanese": "逃れられない。最後の誓いを清算しなければならない。",
						"chinese": "无法逃避。必须了结最后的誓约。",
						"french": "Impossible d'y échapper. Je dois honorer le dernier serment.",
						"spanish": "No hay escape. Debo saldar el último juramento.",
						"vietnamese": "Không thể trốn thoát. Phải thanh toán lời thề cuối cùng.",
						"thai": "หลีกเลี่ยงไม่ได้ ต้องชำระคำสาบานสุดท้าย",
						"hindi": "कोई बच नहीं सकता। मुझे अंतिम प्रतिज्ञा का भुगतान करना होगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이 도시를 옭아맨 그림자를 끝낼 시간이다.",
						"english": "It's time to end the shadow that grips this city.",
						"japanese": "この街を縛る影を終わらせる時が来た。",
						"chinese": "是时候终结缠绕这座城市的阴影了。",
						"french": "Il est temps de mettre fin à l'ombre qui étreint cette ville.",
						"spanish": "Es hora de acabar con la sombra que atenaza esta ciudad.",
						"vietnamese": "Đã đến lúc chấm dứt bóng tối đang kìm kẹp thành phố này.",
						"thai": "ถึงเวลาที่จะยุติเงาที่รัดรึงเมืองนี้แล้ว",
						"hindi": "इस शहर को जकड़ी हुई परछाई को खत्म करने का समय आ गया है।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석군. 기억은 지워지지 않아. 빚은 사라지지 않아.",
						"english": "Foolish. Memories aren't erased. Debts don't vanish.",
						"japanese": "愚かだな。記憶は消えない。借りはなくならない。",
						"chinese": "愚蠢。记忆无法抹去。债务不会消失。",
						"french": "Insensé. Les souvenirs ne s'effacent pas. Les dettes ne disparaissent pas.",
						"spanish": "Necio. Los recuerdos no se borran. Las deudas no desaparecen.",
						"vietnamese": "Ngốc nghếch. Ký ức không bị xóa nhòa. Nợ nần không biến mất.",
						"thai": "โง่เขลา. ความทรงจำไม่ถูกลบเลือน. หนี้ไม่หายไป.",
						"hindi": "मूर्ख। यादें मिटती नहीं। कर्ज खत्म नहीं होते।"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어. 너의 굴레를 끊을 때까지.",
						"english": "It's not over yet. Not until your chains are broken.",
						"japanese": "まだ終わっていない。お前の足枷を断ち切るまでは。",
						"chinese": "还没结束。直到斩断你的枷锁。",
						"french": "Ce n'est pas encore fini. Pas avant d'avoir brisé tes chaînes.",
						"spanish": "Aún no ha terminado. No hasta que rompa tus cadenas.",
						"vietnamese": "Vẫn chưa kết thúc. Cho đến khi ta phá vỡ xiềng xích của ngươi.",
						"thai": "ยังไม่จบ. จนกว่าฉันจะทำลายพันธนาการของเธอ.",
						"hindi": "अभी खत्म नहीं हुआ। जब तक मैं तुम्हारी बेड़ियाँ तोड़ न दूँ।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왔군. 나의 마지막 기록을 파괴할 자여.",
						"english": "You've come. The one who will destroy my final record.",
						"japanese": "来たか。私の最後の記録を破壊する者よ。",
						"chinese": "你来了。那个将要摧毁我最后记录的人。",
						"french": "Tu es venu. Celui qui détruira mon dernier souvenir.",
						"spanish": "Has llegado. El que destruirá mi último registro.",
						"vietnamese": "Ngươi đã đến. Kẻ sẽ hủy diệt ký ức cuối cùng của ta.",
						"thai": "เจ้ามาแล้ว ผู้ที่จะทำลายบันทึกสุดท้ายของข้า",
						"hindi": "तुम आ गए। वह जो मेरे अंतिम अभिलेख को नष्ट करेगा।"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 도시는 빚을 잊지 않아. 깨진 맹세조차도... 반드시 청산되지.",
						"english": "This city doesn't forget its debts. Even broken vows… must be settled.",
						"japanese": "この街は借りを忘れない。破られた誓いすらも…必ず清算される。",
						"chinese": "这座城市不会忘记债务。即使是破碎的誓言…也必须得到清算。",
						"french": "Cette ville n'oublie pas ses dettes. Même les serments brisés… doivent être réglés.",
						"spanish": "Esta ciudad no olvida sus deudas. Incluso los juramentos rotos… deben ser saldados.",
						"vietnamese": "Thành phố này không quên những món nợ. Ngay cả những lời thề đã vỡ… cũng phải được thanh toán.",
						"thai": "เมืองนี้ไม่ลืมหนี้ แม้แต่คำสาบานที่แตกหัก… ก็ต้องถูกชำระ",
						"hindi": "यह शहर अपने कर्ज नहीं भूलता। टूटी हुई प्रतिज्ञाएँ भी... अवश्य चुकानी होंगी।"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 만든 비극은 끝낼 거야.",
						"english": "I will end the tragedy you created.",
						"japanese": "お前が作った悲劇は終わらせる。",
						"chinese": "我将终结你所制造的悲剧。",
						"french": "Je mettrai fin à la tragédie que tu as créée.",
						"spanish": "Pondré fin a la tragedia que creaste.",
						"vietnamese": "Ta sẽ chấm dứt bi kịch mà ngươi đã tạo ra.",
						"thai": "ข้าจะยุติโศกนาฏกรรมที่เจ้าสร้างขึ้น",
						"hindi": "मैं तुम्हारे द्वारा बनाई गई त्रासदी को समाप्त करूँगा।"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "므네모스의 몸을 이루던 파편들이 산산이 흩어졌다.",
						"english": "The fragments that formed Mnemos's body scattered into dust.",
						"japanese": "ムネモスの体を構成していた破片が、バラバラに散った。",
						"chinese": "构成姆涅莫斯身体的碎片四散而开。",
						"french": "Les fragments qui composaient le corps de Mnémos se sont dispersés.",
						"spanish": "Los fragmentos que formaban el cuerpo de Mnemos se dispersaron.",
						"vietnamese": "Những mảnh vỡ tạo nên cơ thể của Mnemos đã tan biến.",
						"thai": "ชิ้นส่วนที่ประกอบเป็นร่างของมเนมอสแตกสลาย",
						"hindi": "म्नेमोस के शरीर को बनाने वाले टुकड़े बिखर गए।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "...이젠... 더 이상... 기록할 필요 없겠지...",
						"english": "...Now... there's no more... need to record...",
						"japanese": "...もう...これ以上...記録する必要はないだろう...",
						"chinese": "...现在...再也...不需要记录了...",
						"french": "...Maintenant... il n'y a plus... besoin d'enregistrer...",
						"spanish": "...Ahora... ya no... hay necesidad de registrar...",
						"vietnamese": "...Bây giờ... không còn... cần phải ghi lại nữa...",
						"thai": "...ตอนนี้... คงไม่ต้อง...บันทึกอีกแล้ว...",
						"hindi": "...अब... और नहीं... रिकॉर्ड करने की ज़रूरत नहीं होगी..."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "내 모든 맹세는... 파괴되었으니.... 빛바랜 기억처럼... 영원히....",
						"english": "All my vows… have been destroyed… Like faded memories… forever…",
						"japanese": "私のすべての誓いは…破壊された…色褪せた記憶のように…永遠に…",
						"chinese": "我所有的誓言…都已被摧毁…如同褪色的记忆…永远…",
						"french": "Tous mes serments… ont été détruits… Comme des souvenirs effacés… pour toujours…",
						"spanish": "Todos mis juramentos… han sido destruidos… Como recuerdos desvanecidos… para siempre…",
						"vietnamese": "Tất cả lời thề của ta… đã bị hủy diệt… Như ký ức phai tàn… mãi mãi…",
						"thai": "คำสาบานทั้งหมดของข้า… ถูกทำลายแล้ว… ดุจความทรงจำที่เลือนหาย… ตลอดไป…",
						"hindi": "मेरी सारी प्रतिज्ञाएँ... नष्ट हो चुकी हैं... फीकी यादों की तरह... हमेशा के लिए..."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그의 슬픔이 느껴지는 것 같아.",
						"english": "I can feel his sorrow.",
						"japanese": "彼の悲しみが伝わってくるようだ。",
						"chinese": "我能感受到他的悲伤。",
						"french": "Je ressens sa tristesse.",
						"spanish": "Siento su tristeza.",
						"vietnamese": "Tôi cảm nhận được nỗi buồn của anh ấy.",
						"thai": "ฉันรู้สึกถึงความเศร้าของเขา.",
						"hindi": "मुझे उसका दुख महसूस हो रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시를 옭아맨 모든 빚과 맹세가 비로소 끝을 맞이했다.",
						"english": "All debts and vows that bound the city have finally met their end.",
						"japanese": "街を縛り付けていた全ての借りと誓いが、ついに終わりを迎えた。",
						"chinese": "束缚着城市的所有债务和誓言，终于迎来了终结。",
						"french": "Toutes les dettes et les serments qui liaient la ville ont enfin trouvé leur fin.",
						"spanish": "Todas las deudas y promesas que ataban la ciudad finalmente han llegado a su fin.",
						"vietnamese": "Mọi món nợ và lời thề trói buộc thành phố cuối cùng đã kết thúc.",
						"thai": "หนี้และคำสาบานทั้งหมดที่ผูกมัดเมืองนี้ไว้ได้สิ้นสุดลงแล้ว.",
						"hindi": "शहर को बांधे रखने वाले सभी कर्ज और शपथ आखिरकार समाप्त हो गए हैं।"
					}
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"므네모스의 기억 파편이 흩어지자, 도시의 하늘이 맑아졌다.",
			"오랜 빚과 맹세의 굴레에서 해방된 듯, 모두가 숨을 쉬었다.",
			"벡스는 사라졌지만, 그가 남긴 진실은 모두의 가슴에 남았다.",
			"구원이었을까, 또 다른 침해였을까. 도시는 새로운 빚을 짊어진 채, 오늘도 기억을 기록한다."
		],
		"english": [
			"As Mnemos' memory shards scattered, the city's sky cleared.",
			"As if freed from the shackles of ancient debts and vows, everyone breathed.",
			"Vex vanished, but the truth he left behind remained in everyone's hearts.",
			"Was it salvation, or another transgression? The city, burdened with new debts, records memories even today."
		],
		"japanese": [
			"ムネモスの記憶の破片が散らばると、都市の空は晴れ渡った。",
			"古い借りと誓いの束縛から解放されたかのように、皆が息をついた。",
			"ベックスは消え去ったが、彼が残した真実は皆の心に残った。",
			"それは救済だったのか、あるいは新たな侵害だったのか。都市は新たな借りを背負い、今日も記憶を記録する。"
		],
		"chinese": [
			"随着姆涅莫斯记忆碎片的散落，城市的天空变得清澈。",
			"仿佛从古老的债务和誓言的桎梏中解脱，所有人都松了一口气。",
			"维克斯消失了，但他留下的真相却留在了每个人的心中。",
			"是救赎，还是另一次侵犯？城市背负着新的债务，即便在今天，也依然记录着记忆。"
		],
		"french": [
			"Tandis que les fragments de mémoire de Mnemos se dispersaient, le ciel de la ville s'éclaircissait.",
			"Comme libérés des chaînes de dettes et de serments anciens, tous respirèrent.",
			"Vex disparut, mais la vérité qu'il laissa derrière lui demeura dans le cœur de chacun.",
			"Était-ce une rédemption, ou une autre transgression ? La ville, accablée de nouvelles dettes, enregistre encore les souvenirs aujourd'hui."
		],
		"spanish": [
			"Al dispersarse los fragmentos de memoria de Mnemos, el cielo de la ciudad se despejó.",
			"Como si se hubieran liberado de las cadenas de antiguas deudas y promesas, todos respiraron.",
			"Vex desapareció, pero la verdad que dejó atrás permaneció en el corazón de todos.",
			"¿Fue salvación, o una transgresión más? La ciudad, cargada con nuevas deudas, registra memorias incluso hoy."
		],
		"vietnamese": [
			"Khi các mảnh ký ức của Mnemos tan biến, bầu trời thành phố trong xanh trở lại.",
			"Dường như được giải thoát khỏi gông cùm của những món nợ và lời thề cũ, mọi người đều thở phào.",
			"Vex đã biến mất, nhưng sự thật hắn để lại vẫn còn trong trái tim mỗi người.",
			"Đó là sự cứu rỗi, hay một sự xâm phạm khác? Thành phố, gánh thêm những món nợ mới, vẫn ghi lại ký ức ngay cả hôm nay."
		],
		"thai": [
			"เมื่อเศษเสี้ยวความทรงจำของมนีมอสกระจายไป ท้องฟ้าของเมืองก็สดใสขึ้น",
			"ราวกับหลุดพ้นจากพันธนาการของหนี้สินและคำสาบานเก่าแก่ ทุกคนก็ถอนหายใจ",
			"เวกซ์หายไป แต่ความจริงที่เขาทิ้งไว้ยังคงอยู่ในใจของทุกคน",
			"มันคือความรอด หรือการล่วงละเมิดครั้งใหม่? เมืองนี้ยังคงแบกรับหนี้สินใหม่ และบันทึกความทรงจำต่อไปในวันนี้"
		],
		"hindi": [
			"जैसे ही नेमोस की यादों के टुकड़े बिखर गए, शहर का आसमान साफ़ हो गया।",
			"मानो पुराने ऋणों और प्रतिज्ञाओं के बंधन से मुक्त होकर, सबने साँस ली।",
			"वेक्स गायब हो गया, लेकिन उसने जो सच छोड़ा, वह सबके दिलों में रह गया।",
			"क्या यह मोक्ष था, या एक और अतिक्रमण? शहर, नए ऋणों के बोझ तले, आज भी यादों को दर्ज करता है।"
		]
	},
	"prologue": {
		"korean": [
			"도시는 기억의 짐을 짊어지고 있었다.",
			"므네모스, 모든 빚과 맹세의 서기장.",
			"이제 그의 은신처에서 모든 진실이 드러날 차례였다.",
			"파편이 흩어지고, 맹세가 부서지며, 비극이 끝을 고한다."
		],
		"english": [
			"The city bore the burden of memory.",
			"Mnemos, scribe of all debts and vows.",
			"Now, in his lair, all truths were to be revealed.",
			"Shards scattered, vows shattered, and tragedy met its end."
		],
		"japanese": [
			"都市は記憶の重荷を背負っていた。",
			"ムネモス、すべての借りと誓いの書記長。",
			"今、彼の隠れ家ですべての真実が明らかになる時だった。",
			"破片が散らばり、誓いが砕け、悲劇が終焉を迎える。"
		],
		"chinese": [
			"城市承载着记忆的重担。",
			"姆涅莫斯，所有债务与誓言的书记官。",
			"如今，在他的巢穴中，所有真相都将揭晓。",
			"碎片散落，誓言破碎，悲剧宣告终结。"
		],
		"french": [
			"La ville portait le fardeau du souvenir.",
			"Mnemos, le scribe de toutes les dettes et serments.",
			"Désormais, dans sa cachette, toutes les vérités devaient être révélées.",
			"Les éclats se dispersaient, les serments se brisaient, et la tragédie touchait à sa fin."
		],
		"spanish": [
			"La ciudad cargaba con el peso de la memoria.",
			"Mnemos, el escriba de todas las deudas y promesas.",
			"Ahora, en su guarida, todas las verdades estaban a punto de ser reveladas.",
			"Los fragmentos se dispersaron, los juramentos se rompieron, y la tragedia llegó a su fin."
		],
		"vietnamese": [
			"Thành phố mang gánh nặng của ký ức.",
			"Mnemos, người ghi chép mọi món nợ và lời thề.",
			"Giờ đây, trong hang ổ của hắn, mọi sự thật sắp được phơi bày.",
			"Mảnh vỡ tan tác, lời thề vỡ nát, và bi kịch kết thúc."
		],
		"thai": [
			"เมืองแบกรับภาระแห่งความทรงจำ",
			"มนีมอส ผู้บันทึกหนี้สินและคำปฏิญาณทั้งมวล",
			"บัดนี้ ในรังของเขา ความจริงทั้งหมดกำลังจะถูกเปิดเผย",
			"เศษเสี้ยวกระจัดกระจาย คำสาบานแตกสลาย โศกนาฏกรรมสิ้นสุดลง"
		],
		"hindi": [
			"शहर यादों का बोझ ढो रहा था।",
			"नेमोस, सभी ऋणों और प्रतिज्ञाओं का लेखक।",
			"अब, उसके ठिकाने में, सभी सच सामने आने वाले थे।",
			"टुकड़े बिखर गए, प्रतिज्ञाएँ टूट गईं, और त्रासदी का अंत हुआ।"
		]
	}
} as const;
