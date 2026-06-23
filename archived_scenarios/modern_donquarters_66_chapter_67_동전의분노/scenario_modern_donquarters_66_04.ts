export const scenario_modern_donquarters_66_04 = {
	"scenario_id": "modern_donquarters_66_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
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
						"korean": "폐허가 된 카지노 옆, 낡은 자판기 앞에 사람들이 모여들었다.",
						"english": "Next to the ruined casino, people gathered in front of an old vending machine.",
						"japanese": "廃墟となったカジノの隣、古びた自動販売機の前に人々が集まっていた。",
						"chinese": "在废弃的赌场旁，人们聚集在一台旧自动售货机前。",
						"french": "À côté du casino en ruine, des gens se sont rassemblés devant un vieux distributeur automatique.",
						"spanish": "Junto al casino en ruinas, la gente se reunía frente a una vieja máquina expendedora.",
						"vietnamese": "Bên cạnh sòng bạc đổ nát, mọi người tụ tập trước một chiếc máy bán hàng tự động cũ kỹ.",
						"thai": "ข้างคาสิโนที่ปรักหักพัง ผู้คนรวมตัวกันอยู่หน้าตู้ขายของอัตโนมัติเก่าๆ",
						"hindi": "खंडहर हो चुके कैसीनो के बगल में, एक पुरानी वेंडिंग मशीन के सामने लोग जमा थे।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "더 이상 당하고만 있을 순 없다! 저 악마 같은 기계를 멈춰야 해!",
						"english": "We can't just stand by anymore! We have to stop that devilish machine!",
						"japanese": "もうこれ以上黙って見ていられない！あの悪魔のような機械を止めなければ！",
						"chinese": "我们不能再坐视不理了！必须阻止那台恶魔般的机器！",
						"french": "Nous ne pouvons plus rester les bras croisés ! Nous devons arrêter cette machine diabolique !",
						"spanish": "¡Ya no podemos quedarnos de brazos cruzados! ¡Tenemos que detener esa máquina diabólica!",
						"vietnamese": "Chúng ta không thể chịu đựng thêm nữa! Phải dừng cái máy quỷ quái đó lại!",
						"thai": "เราจะยืนเฉยอยู่ไม่ได้อีกแล้ว! เราต้องหยุดเครื่องจักรปีศาจนั่น!",
						"hindi": "हम और बर्दाश्त नहीं कर सकते! हमें उस शैतानी मशीन को रोकना होगा!"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥스… 당신이 시위를 주도하는군요.",
						"english": "Dax... you're leading the protest.",
						"japanese": "ダックス…あなたが抗議を主導しているんですね。",
						"chinese": "达克斯……你正在领导这场抗议。",
						"french": "Dax… vous menez la manifestation.",
						"spanish": "Dax... estás liderando la protesta.",
						"vietnamese": "Dax... anh đang dẫn đầu cuộc biểu tình.",
						"thai": "แด็กซ์... คุณกำลังนำการประท้วงอยู่สินะ",
						"hindi": "डेक्स... आप विरोध प्रदर्शन का नेतृत्व कर रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "내 가족의 마지막 돈까지 저 자판기가 삼켰어. 모두가 내 상황과 같지!",
						"english": "That vending machine swallowed my family's last money. Everyone's in the same boat as me!",
						"japanese": "あの自動販売機は、私の家族の最後の金まで飲み込んだ。皆、私と同じ状況だ！",
						"chinese": "那台自动售货机吞了我家人最后的钱。大家的情况都和我一样！",
						"french": "Ce distributeur automatique a englouti le dernier argent de ma famille. Tout le monde est dans le même bateau que moi !",
						"spanish": "Esa máquina expendedora se tragó el último dinero de mi familia. ¡Todos están en la misma situación que yo!",
						"vietnamese": "Cái máy bán hàng tự động đó đã nuốt chửng số tiền cuối cùng của gia đình tôi. Mọi người đều ở trong tình cảnh giống tôi!",
						"thai": "ตู้ขายของอัตโนมัตินั่นกลืนกินเงินก้อนสุดท้ายของครอบครัวฉันไป ทุกคนก็ตกอยู่ในสถานการณ์เดียวกับฉัน!",
						"hindi": "उस वेंडिंग मशीन ने मेरे परिवार का आखिरी पैसा भी निगल लिया। सब मेरी जैसी हालत में हैं!"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우리의 돈을 돌려줘! 이 악랄한 시스템을 끝내라!",
						"english": "Give us back our money! End this wicked system!",
						"japanese": "我々の金を返せ！この悪辣なシステムを終わらせろ！",
						"chinese": "把我们的钱还回来！结束这个邪恶的系统！",
						"french": "Rendez-nous notre argent ! Mettez fin à ce système pervers !",
						"spanish": "¡Devuélvannos nuestro dinero! ¡Acaben con este sistema perverso!",
						"vietnamese": "Trả lại tiền cho chúng tôi! Chấm dứt hệ thống độc ác này!",
						"thai": "คืนเงินให้เรา! จบระบบชั่วร้ายนี้ซะ!",
						"hindi": "हमारे पैसे वापस दो! इस दुष्ट व्यवस्था को खत्म करो!"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "자판기에서 꺽꺽거리는 금속음이 울려 퍼졌다. 비웃음 같았다.",
						"english": "A cawing metallic sound echoed from the vending machine. It sounded like a sneer.",
						"japanese": "自動販売機からゴロゴロという金属音が響き渡った。嘲笑うかのようだった。",
						"chinese": "自动售货机里传来咯咯作响的金属声。听起来像是在嘲笑。",
						"french": "Un son métallique rauque résonna du distributeur automatique. Cela ressemblait à un ricanement.",
						"spanish": "Un sonido metálico y chirriante resonó de la máquina expendedora. Sonaba como una burla.",
						"vietnamese": "Một âm thanh kim loại rè rè vang lên từ máy bán hàng tự động. Nghe như một tiếng cười nhạo.",
						"thai": "เสียงโลหะดังครวญครางออกมาจากตู้ขายของอัตโนมัติ มันฟังดูเหมือนการเยาะเย้ย",
						"hindi": "वेंडिंग मशीन से एक कड़कड़ाती धातु की आवाज़ गूंजी। यह एक तिरस्कार जैसा लग रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "저 기계… 우리를 조롱하는 것 같아.",
						"english": "That machine... it seems to be mocking us.",
						"japanese": "あの機械… 私たちを嘲笑っているようだ。",
						"chinese": "那机器… 好像在嘲笑我们。",
						"french": "Cette machine... elle semble se moquer de nous.",
						"spanish": "Esa máquina... parece que se burla de nosotros.",
						"vietnamese": "Cỗ máy đó... dường như đang chế nhạo chúng ta.",
						"thai": "เครื่องนั่น... เหมือนกำลังเย้ยหยันเราอยู่เลย",
						"hindi": "वह मशीन... हमें ताना मार रही है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "저 놈은 우리의 분노를 먹고 자라는 악마야! 물러설 수 없어!",
						"english": "That fiend feeds on our rage! We can't back down!",
						"japanese": "あいつは我々の怒りを糧に育つ悪魔だ！ 引くわけにはいかない！",
						"chinese": "那家伙是吸食我们怒火成长的恶魔！绝不能退缩！",
						"french": "Ce monstre se nourrit de notre rage ! On ne peut pas reculer !",
						"spanish": "¡Esa alimaña se alimenta de nuestra rabia! ¡No podemos retroceder!",
						"vietnamese": "Nó là ác quỷ lớn mạnh nhờ sự phẫn nộ của chúng ta! Không thể lùi bước!",
						"thai": "ไอ้นั่นมันปีศาจที่กินความโกรธของเรา! ถอยไม่ได้เด็ดขาด!",
						"hindi": "वह हमारी नफरत से पलने वाला शैतान है! हम पीछे नहीं हट सकते!"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "자판기가 붉은 빛을 뿜었다. 시위대의 팔에 새겨진 문신이 선명해졌다.",
						"english": "The vending machine glowed red. The tattoos on the protestors' arms became clearer.",
						"japanese": "自動販売機が赤く光った。抗議者の腕に刻まれたタトゥーが鮮明になった。",
						"chinese": "自动贩卖机发出红光。抗议者手臂上的纹身变得清晰起来。",
						"french": "Le distributeur automatique a brillé en rouge. Les tatouages sur les bras des manifestants sont devenus plus nets.",
						"spanish": "La máquina expendedora brilló en rojo. Los tatuajes en los brazos de los manifestantes se hicieron más claros.",
						"vietnamese": "Máy bán hàng tự động phát ra ánh sáng đỏ. Hình xăm trên cánh tay của những người biểu tình trở nên rõ nét hơn.",
						"thai": "ตู้ขายของเปล่งแสงสีแดง รอยสักบนแขนของผู้ประท้วงชัดเจนขึ้น",
						"hindi": "वेंडिंग मशीन लाल चमक उठी। प्रदर्शनकारियों की बाहों पर बने टैटू स्पष्ट हो गए।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "안 돼! 납부 기한이… 더 짧아졌어!",
						"english": "No! The payment deadline... it's shorter!",
						"japanese": "ダメだ！ 支払い期限が… 短くなってる！",
						"chinese": "不！缴费期限… 变短了！",
						"french": "Non ! La date limite de paiement... elle est plus courte !",
						"spanish": "¡No! ¡La fecha límite de pago... se ha acortado!",
						"vietnamese": "Không! Hạn chót nộp phạt... đã ngắn hơn!",
						"thai": "ไม่นะ! กำหนดชำระ... มันสั้นลงแล้ว!",
						"hindi": "नहीं! भुगतान की समय सीमा... और कम हो गई है!"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "벌금… 시위에 대한 벌금인가? 악랄한!",
						"english": "A fine... for protesting? Malicious!",
						"japanese": "罰金… デモに対する罰金か？ 悪質だ！",
						"chinese": "罚款… 是对示威的罚款吗？太恶毒了！",
						"french": "Une amende... pour avoir protesté ? Malveillant !",
						"spanish": "Una multa... ¿por protestar? ¡Malvado!",
						"vietnamese": "Tiền phạt... là phạt vì biểu tình sao? Thật tàn ác!",
						"thai": "ค่าปรับ... เป็นค่าปรับสำหรับการประท้วงเหรอ? ชั่วร้าย!",
						"hindi": "जुर्माना... विरोध प्रदर्शन के लिए? दुर्भावनापूर्ण!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이건 단순히 돈 문제가 아니야. 저 기계는 우리를 파멸시키려 해!",
						"english": "This isn't just about money. That machine is trying to destroy us!",
						"japanese": "これは単なる金の問題じゃない。あの機械は私たちを破滅させようとしている！",
						"chinese": "这不只是钱的问题。那机器想毁灭我们！",
						"french": "Ce n'est pas qu'une question d'argent. Cette machine essaie de nous détruire !",
						"spanish": "Esto no es solo cuestión de dinero. ¡Esa máquina está tratando de destruirnos!",
						"vietnamese": "Đây không chỉ là vấn đề tiền bạc. Cỗ máy đó đang cố gắng hủy diệt chúng ta!",
						"thai": "นี่ไม่ใช่แค่เรื่องเงินหรอกนะ เครื่องนั่นมันกำลังจะทำลายเรา!",
						"hindi": "यह सिर्फ पैसों का मामला नहीं है। वह मशीन हमें तबाह करना चाहती है!"
					},
					"type": "speech",
					"speaker": "dax"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "단순히 돈을 되찾는 게 아니었어. 저 '사업' 자체를 멈춰야 해.",
						"english": "It wasn't just about getting our money back. We have to stop this 'business' itself.",
						"japanese": "単に金を取り戻すだけじゃなかった。あの『事業』そのものを止めなければ。",
						"chinese": "不仅仅是拿回钱。我们必须阻止这个‘生意’本身。",
						"french": "Il ne s'agissait pas seulement de récupérer notre argent. Nous devons arrêter cette 'entreprise' elle-même.",
						"spanish": "No era solo recuperar nuestro dinero. Debemos detener este 'negocio' en sí.",
						"vietnamese": "Không chỉ là lấy lại tiền. Chúng ta phải ngăn chặn 'công việc kinh doanh' này!",
						"thai": "มันไม่ใช่แค่เรื่องการเอาเงินคืนแล้ว เราต้องหยุด 'ธุรกิจ' นี่ให้ได้",
						"hindi": "यह सिर्फ पैसे वापस पाने के बारे में नहीं था। हमें इस 'व्यवसाय' को ही रोकना होगा।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "맞아. 시간이 없어. 이대로 가면 모두 저 기계의 일부가 될 거야!",
						"english": "Right. No time left. If we go on like this, we'll all become part of that machine!",
						"japanese": "そうだ。時間がない。このままじゃ、みんなあの機械の一部になってしまう！",
						"chinese": "没错。没时间了。这样下去，我们都会成为那机器的一部分！",
						"french": "Exact. Plus de temps. Si ça continue comme ça, nous ferons tous partie de cette machine !",
						"spanish": "Cierto. No queda tiempo. ¡Si seguimos así, todos seremos parte de esa máquina!",
						"vietnamese": "Đúng vậy. Không còn thời gian nữa. Cứ thế này, tất cả chúng ta sẽ trở thành một phần của cỗ máy đó!",
						"thai": "ใช่แล้ว ไม่มีเวลาแล้ว ถ้ายังเป็นแบบนี้ เราทุกคนจะกลายเป็นส่วนหนึ่งของเครื่องนั่น!",
						"hindi": "सही है। समय नहीं है। अगर ऐसा चलता रहा, तो हम सब उस मशीन का हिस्सा बन जाएंगे!"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…더 이상 물러설 곳은 없어. 끝을 내야 해.",
						"english": "...There's no turning back now. We have to end this.",
						"japanese": "…もう後には引けない。ケリをつけなければ。",
						"chinese": "…已经没有退路了。必须画上句号。",
						"french": "...Plus de retour en arrière possible. Il faut en finir.",
						"spanish": "...No hay vuelta atrás. Tenemos que acabar con esto.",
						"vietnamese": "...Không còn đường lùi nữa. Chúng ta phải kết thúc chuyện này.",
						"thai": "…ไม่มีที่ให้ถอยแล้ว เราต้องยุติมันซะ",
						"hindi": "...अब कोई पीछे हटने की जगह नहीं है। इसे खत्म करना होगा।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "정체 모를 기계의 냉혹한 광선이 모든 것을 집어삼켰다.",
						"english": "The mysterious machine's merciless beam consumed everything.",
						"japanese": "正体不明の機械の冷酷な光線が全てを飲み込んだ。",
						"chinese": "不明机械的冷酷光线吞噬了一切。",
						"french": "Le rayon impitoyable de la machine inconnue a tout dévoré.",
						"spanish": "El despiadado rayo de la máquina desconocida lo devoró todo.",
						"vietnamese": "Tia sáng lạnh lùng của cỗ máy bí ẩn đã nuốt chửng mọi thứ.",
						"thai": "ลำแสงอันโหดเหี้ยมจากเครื่องจักรนิรนามกลืนกินทุกสิ่ง",
						"hindi": "अज्ञात मशीन की क्रूर किरण ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석군. 너희의 빚은 더욱 불어날 뿐이다.",
						"english": "Foolish. Your debt will only grow further.",
						"japanese": "愚かだな。お前たちの負債はさらに増えるだけだ。",
						"chinese": "愚蠢。你们的债务只会进一步膨胀。",
						"french": "Stupide. Votre dette ne fera que s'accroître.",
						"spanish": "Necios. Vuestra deuda solo crecerá aún más.",
						"vietnamese": "Ngu ngốc. Món nợ của các ngươi sẽ chỉ chồng chất thêm mà thôi.",
						"thai": "โง่เขลา หนี้ของพวกเจ้าจะยิ่งพอกพูนขึ้นเท่านั้น",
						"hindi": "मूर्ख। तुम्हारा कर्ज और बढ़ेगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 반드시 널 멈출 거야!",
						"english": "...It's not over yet. I will definitely stop you!",
						"japanese": "…まだ終わっていない。必ずお前を止めてみせる！",
						"chinese": "…还没结束。我一定会阻止你！",
						"french": "...Ce n'est pas encore fini. Je t'arrêterai coûte que coûte !",
						"spanish": "...Aún no ha terminado. ¡Sin duda te detendré!",
						"vietnamese": "...Vẫn chưa kết thúc. Tôi nhất định sẽ ngăn chặn ngươi!",
						"thai": "...ยังไม่จบ ฉันจะหยุดแกให้ได้!",
						"hindi": "अभी... खत्म नहीं हुआ। मैं तुम्हें ज़रूर रोकूँगा!"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "어둠 속에서 정체 모를 기계가 모습을 드러냈다.",
						"english": "From the darkness, an unknown machine appeared.",
						"japanese": "闇の中から、正体不明の機械が姿を現した。",
						"chinese": "黑暗中，一台不明机器现出了身形。",
						"french": "De l'obscurité, une machine inconnue est apparue.",
						"spanish": "Desde la oscuridad, una máquina desconocida apareció.",
						"vietnamese": "Từ trong bóng tối, một cỗ máy không rõ danh tính đã xuất hiện.",
						"thai": "จากความมืดมิด เครื่องจักรปริศนาได้ปรากฏตัวขึ้น",
						"hindi": "अंधेरे से, एक अज्ञात मशीन प्रकट हुई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하찮은 인간들… 너희의 빚은 이미 감당할 수 없을 만큼 불어났다.",
						"english": "Insignificant humans... your debt has grown beyond what you can bear.",
						"japanese": "取るに足らない人間ども… お前たちの負債は、もはや手に負えないほど膨れ上がった。",
						"chinese": "渺小的人类… 你们的债务已膨胀到无法承受的地步。",
						"french": "Humains insignifiants... votre dette est devenue insoutenable.",
						"spanish": "Humanos insignificantes... vuestra deuda ya ha crecido hasta ser insoportable.",
						"vietnamese": "Những con người hèn mọn... món nợ của các ngươi đã chồng chất đến mức không thể gánh vác nổi.",
						"thai": "มนุษย์ไร้ค่า... หนี้ของพวกเจ้าได้พอกพูนจนเกินจะแบกรับไหวแล้ว",
						"hindi": "तुच्छ मनुष्यों... तुम्हारा कर्ज अब इतना बढ़ गया है कि तुम इसे संभाल नहीं सकते।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 아무리 우리를 억압해도, 우리는 굴복하지 않아!",
						"english": "No matter how much you oppress us, we will not surrender!",
						"japanese": "お前がいくら我々を抑圧しようとも、我々は屈服しない！",
						"chinese": "无论你如何压迫我们，我们都不会屈服！",
						"french": "Peu importe à quel point tu nous opprimes, nous ne céderons pas !",
						"spanish": "¡Por mucho que nos oprimas, no nos rendiremos!",
						"vietnamese": "Dù ngươi có đàn áp chúng ta thế nào đi nữa, chúng ta cũng sẽ không khuất phục!",
						"thai": "ไม่ว่าเจ้าจะกดขี่เราแค่ไหน เราก็จะไม่ยอมแพ้!",
						"hindi": "तुम हमें कितना भी दबाओ, हम झुकेंगे नहीं!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석군. 곧 너희의 '납부 기한'이 끝날 것이다.",
						"english": "...Foolish. Your 'payment due' will soon expire.",
						"japanese": "…愚かだな。間もなくお前たちの「支払い期限」が来るだろう。",
						"chinese": "…愚蠢。你们的‘支付期限’很快就要到了。",
						"french": "...Stupide. Votre 'date d'échéance' arrivera bientôt.",
						"spanish": "...Necios. Vuestro 'plazo de pago' pronto terminará.",
						"vietnamese": "...Ngu ngốc. 'Hạn chót thanh toán' của các ngươi sắp hết rồi.",
						"thai": "...โง่เขลา 'กำหนดชำระ' ของพวกเจ้ากำลังจะหมดลงแล้ว",
						"hindi": "मूर्ख। तुम्हारी 'भुगतान की अंतिम तिथि' जल्द ही समाप्त हो जाएगी।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "크크큭… 겨우 이런 걸로 끝인 줄 아나… 진정한 '빚'의 주인은… 따로 있다…",
						"english": "Heh heh heh... Do you think this is the end? The true master of 'debt' is... elsewhere...",
						"japanese": "ククク… たかがこんなもので終わりだと思うか… 真の「負債」の主は… 別にいる…",
						"chinese": "呵呵呵… 以为这就结束了吗… 真正的‘债务’主人… 另有其人…",
						"french": "Hé hé hé... Penses-tu que c'est la fin ? Le véritable maître de la 'dette' est... ailleurs...",
						"spanish": "Je je je... ¿Creéis que esto es el fin...? El verdadero señor de la 'deuda' es... otro...",
						"vietnamese": "Khà khà khà... Ngươi nghĩ đây là kết thúc ư... Chủ nhân thực sự của 'món nợ' là... kẻ khác...",
						"thai": "คิกคิกคิก... คิดว่าแค่นี้ก็จบแล้วรึไง... 'เจ้าของหนี้' ที่แท้จริง... ยังมีอีก...",
						"hindi": "हँस हँस... क्या तुम्हें लगता है कि यह अंत है? 'कर्ज' का असली मालिक... कहीं और है..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…진정한 주인? 네 배후는 누구야?",
						"english": "...The true master? Who is behind you?",
						"japanese": "…真の主？ お前の背後にいるのは誰だ？",
						"chinese": "…真正的主人？你的幕后黑手是谁？",
						"french": "...Le véritable maître ? Qui est derrière toi ?",
						"spanish": "...¿El verdadero señor? ¿Quién está detrás de ti?",
						"vietnamese": "...Chủ nhân thật sự ư? Kẻ đứng sau ngươi là ai?",
						"thai": "...เจ้าของที่แท้จริง? ใครอยู่เบื้องหลังเจ้า?",
						"hindi": "...असली मालिक? तुम्हारे पीछे कौन है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "정체 모를 기계는 침묵했다. 그러나 더 거대한 존재의 그림자가 느껴졌다.",
						"english": "The mysterious machine fell silent. But the shadow of a greater presence was felt.",
						"japanese": "正体不明の機械は沈黙した。しかし、より巨大な存在の影が感じられた。",
						"chinese": "不明机械沉默了。然而，更巨大存在的影子被感受到了。",
						"french": "La machine inconnue se tut. Mais l'ombre d'une présence plus grande se fit sentir.",
						"spanish": "La máquina desconocida guardó silencio. Pero la sombra de una presencia aún mayor se hizo sentir.",
						"vietnamese": "Cỗ máy bí ẩn im lặng. Nhưng bóng dáng của một sự hiện diện lớn hơn đã được cảm nhận.",
						"thai": "เครื่องจักรนิรนามเงียบลง แต่สัมผัสได้ถึงเงาของบางสิ่งที่ยิ่งใหญ่กว่า",
						"hindi": "अज्ञात मशीन खामोश हो गई। लेकिन एक बड़ी उपस्थिति की छाया महसूस हुई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어. 이 모든 걸 계획한 놈을 찾아야 해.",
						"english": "It's not... over yet. We have to find the one who planned all this.",
						"japanese": "まだ… 終わっていない。この全てを企てた奴を見つけなければならない。",
						"chinese": "还没… 结束。我们必须找到策划这一切的家伙。",
						"french": "Ce n'est pas... encore fini. Nous devons trouver celui qui a tout planifié.",
						"spanish": "Aún no... ha terminado. Tenemos que encontrar a quien planeó todo esto.",
						"vietnamese": "Vẫn... chưa kết thúc. Chúng ta phải tìm ra kẻ đã lên kế hoạch cho tất cả chuyện này.",
						"thai": "ยัง... ไม่จบ เราต้องหาตัวคนที่วางแผนเรื่องทั้งหมดนี้",
						"hindi": "अभी... खत्म नहीं हुआ। हमें उस व्यक्ति को ढूंढना होगा जिसने यह सब योजना बनाई।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"어두운 뒷골목, 돈을 잃은 자들의 울부짖음이 메아리쳤다.",
			"탐욕스러운 자판기는 그들의 절규를 비웃는 듯 꺽꺽거렸다.",
			"이제 돈을 되찾는 싸움을 넘어, 악랄한 시스템을 부숴야 한다.",
			"시간은 얼마 남지 않았다. 빚의 심연이 모두를 집어삼키려 한다."
		],
		"english": [
			"In a dark alley, the wails of those who lost their money echoed.",
			"The greedy vending machine cawed, as if mocking their desperate cries.",
			"Now, beyond fighting to reclaim our money, we must shatter this wicked system.",
			"Time is running out. The abyss of debt is about to swallow everyone."
		],
		"japanese": [
			"暗い裏路地で、金を失った者たちの叫び声が響き渡った。",
			"貪欲な自動販売機は、彼らの叫びを嘲笑うかのようにゴロゴロと音を立てた。",
			"今、金を取り戻す戦いを超え、この悪辣なシステムを打ち破らなければならない。",
			"時間は残り少ない。借金の深淵が、皆を飲み込もうとしている。"
		],
		"chinese": [
			"在黑暗的后巷，失去金钱的人们发出哀嚎，回荡不已。",
			"贪婪的自动售货机咯咯作响，仿佛在嘲笑他们的绝望呐喊。",
			"现在，不仅要夺回我们的钱，更要摧毁这个邪恶的系统。",
			"时间所剩无几。债务的深渊即将吞噬所有人。"
		],
		"french": [
			"Dans une ruelle sombre, les lamentations de ceux qui avaient perdu leur argent résonnaient.",
			"Le distributeur automatique avide gloussa, comme pour se moquer de leurs cris désespérés.",
			"Maintenant, au-delà de la lutte pour récupérer notre argent, nous devons briser ce système pervers.",
			"Le temps est compté. L'abîme de la dette est sur le point d'engloutir tout le monde."
		],
		"spanish": [
			"En un callejón oscuro, los lamentos de quienes perdieron su dinero resonaban.",
			"La codiciosa máquina expendedora graznó, como si se burlara de sus gritos desesperados.",
			"Ahora, más allá de luchar por recuperar nuestro dinero, debemos destrozar este sistema perverso.",
			"El tiempo se acaba. El abismo de la deuda está a punto de tragarse a todos."
		],
		"vietnamese": [
			"Trong con hẻm tối, tiếng gào khóc của những kẻ mất tiền vang vọng.",
			"Chiếc máy bán hàng tự động tham lam kêu rè rè, như thể đang chế nhạo tiếng kêu tuyệt vọng của họ.",
			"Giờ đây, không chỉ là cuộc chiến giành lại tiền, chúng ta phải phá hủy hệ thống độc ác này.",
			"Thời gian không còn nhiều. Vực thẳm nợ nần sắp nuốt chửng tất cả."
		],
		"thai": [
			"ในตรอกมืด เสียงคร่ำครวญของผู้ที่สูญเสียเงินดังก้อง",
			"ตู้ขายของอัตโนมัติที่ละโมบส่งเสียงครวญคราง ราวกับกำลังเย้ยหยันเสียงร้องขอความช่วยเหลือของพวกเขา",
			"ตอนนี้ นอกเหนือจากการต่อสู้เพื่อทวงเงินคืน เราต้องทำลายระบบชั่วร้ายนี้",
			"เวลาเหลือน้อยแล้ว หุบเหวลึกแห่งหนี้สินกำลังจะกลืนกินทุกคน"
		],
		"hindi": [
			"एक अँधेरी गली में, पैसे गंवाने वालों की चीखें गूँज रही थीं।",
			"लालची वेंडिंग मशीन ने कड़कड़ाते हुए आवाज़ की, मानो उनकी बेताब चीखों का मज़ाक उड़ा रही हो।",
			"अब, पैसे वापस पाने की लड़ाई से बढ़कर, हमें इस दुष्ट व्यवस्था को तोड़ना होगा।",
			"समय कम है। कर्ज का अथाह सागर सबको निगलने वाला है।"
		]
	}
} as const;
