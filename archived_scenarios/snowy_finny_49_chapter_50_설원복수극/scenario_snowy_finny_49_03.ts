export const scenario_snowy_finny_49_03 = {
	"scenario_id": "snowy_finny_49_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "절인 청어가 격렬하게 몸부림치며 길을 막았다.",
						"english": "The pickled herring thrashed violently, blocking the way.",
						"japanese": "塩漬けニシンが激しくもがき、道を塞いだ。",
						"chinese": "腌鲱鱼猛烈挣扎，挡住了去路。",
						"french": "Le hareng saur se débattit violemment, bloquant le passage.",
						"spanish": "El arenque encurtido se agitaba violentamente, bloqueando el camino.",
						"vietnamese": "Con cá trích ngâm chua vùng vẫy dữ dội, chắn ngang đường.",
						"thai": "ปลาเฮอร์ริ่งดองดิ้นรนอย่างรุนแรง ขวางทางไว้.",
						"hindi": "अचार वाली हेरिंग हिंसक रूप से तड़प रही थी, रास्ता रोक रही थी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 강해졌잖아!",
						"english": "It's gotten stronger!",
						"japanese": "もっと強くなったじゃないか！",
						"chinese": "它变得更强了！",
						"french": "Il est devenu plus fort !",
						"spanish": "¡Se ha vuelto más fuerte!",
						"vietnamese": "Nó mạnh hơn rồi!",
						"thai": "มันแข็งแกร่งขึ้นแล้วนี่!",
						"hindi": "यह और मजबूत हो गया है!"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "기록에서 봤어요. 이 저주가 심해질수록… 더 난폭해진다고.",
						"english": "I saw it in the records. The worse this curse gets... the more violent it becomes.",
						"japanese": "記録で見ました。この呪いが悪化するほど…もっと凶暴になるって。",
						"chinese": "我在记录里看到过。这个诅咒越严重……它就越狂暴。",
						"french": "Je l'ai vu dans les registres. Plus cette malédiction s'aggrave... plus elle devient violente.",
						"spanish": "Lo vi en los registros. Cuanto peor se pone esta maldición... más violenta se vuelve.",
						"vietnamese": "Tôi thấy trong ghi chép rồi. Lời nguyền này càng tệ… nó càng hung bạo hơn.",
						"thai": "ฉันเห็นในบันทึก ยิ่งคำสาปนี้รุนแรงขึ้นเท่าไหร่… มันก็จะยิ่งดุร้ายขึ้นเท่านั้น.",
						"hindi": "मैंने रिकॉर्ड में देखा था। यह अभिशाप जितना गहरा होता जाएगा... उतना ही हिंसक होता जाएगा।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "저주…?",
						"english": "A curse...?",
						"japanese": "呪い…？",
						"chinese": "诅咒……？",
						"french": "Une malédiction...?",
						"spanish": "¿Una maldición...?",
						"vietnamese": "Lời nguyền…?",
						"thai": "คำสาป…?",
						"hindi": "एक अभिशाप...?"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "고대 룬 문자에서 단서를 찾았어요.",
						"english": "I found a clue in the ancient runes.",
						"japanese": "古代のルーン文字から手がかりを見つけました。",
						"chinese": "我在古老的符文中找到了线索。",
						"french": "J'ai trouvé un indice dans les runes anciennes.",
						"spanish": "Encontré una pista en las antiguas runas.",
						"vietnamese": "Tôi đã tìm thấy manh mối trong các chữ rune cổ đại.",
						"thai": "ฉันเจอเบาะแสในอักษรรูนโบราณ.",
						"hindi": "मुझे प्राचीन रूण अक्षरों में एक सुराग मिला।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "오딘에게 바쳐질 제물이 모독당하면, 가장 혐오하는 형태로 변한다…",
						"english": "If an offering to Odin is defiled, it transforms into the form it most abhors...",
						"japanese": "オーディンに捧げられる生贄が冒涜されれば、最も忌み嫌う姿へと変わる…",
						"chinese": "如果献给奥丁的祭品被亵渎，它就会变成最令人憎恶的形态……",
						"french": "Si une offrande à Odin est profanée, elle prend la forme qu'elle déteste le plus...",
						"spanish": "Si una ofrenda a Odín es profanada, se transforma en la forma que más aborrece...",
						"vietnamese": "Nếu vật hiến tế cho Odin bị ô uế, nó sẽ biến thành hình dạng nó ghét nhất…",
						"thai": "หากเครื่องสังเวยแด่โอดินถูกทำให้แปดเปื้อน มันจะเปลี่ยนร่างเป็นสิ่งที่น่ารังเกียจที่สุด…",
						"hindi": "यदि ओडिन को चढ़ाई गई भेंट को अपवित्र किया जाता है, तो वह सबसे घृणित रूप में बदल जाती है..."
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "설마, 저 청어가…?",
						"english": "Could it be, that herring...?",
						"japanese": "まさか、あのニシンが…？",
						"chinese": "难道说，那条鲱鱼…？",
						"french": "Serait-ce que ce hareng... ?",
						"spanish": "¿Podría ser, ese arenque...?",
						"vietnamese": "Không lẽ, con cá trích kia...?",
						"thai": "เป็นไปไม่ได้, ปลาเฮอร์ริ่งตัวนั้น...?",
						"hindi": "कहीं वह हेरिंग तो नहीं...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "아마도. 헬가르드 족장이… 가장 싫어했던 모습일 겁니다.",
						"english": "Perhaps. It must be the form Chieftain Helgard hated most.",
						"japanese": "おそらく。ヘルガルド族長が…最も嫌っていた姿でしょう。",
						"chinese": "恐怕是。这一定是赫尔加德族长…最憎恶的模样吧。",
						"french": "Probablement. C'est la forme que le chef Helgard détestait le plus.",
						"spanish": "Quizás. Debe ser la forma que el jefe Helgard más odiaba.",
						"vietnamese": "Có lẽ vậy. Hẳn đây là hình dáng mà Tộc trưởng Helgard… ghét nhất.",
						"thai": "อาจจะใช่ นี่อาจเป็นร่างที่หัวหน้าเฮลการ์ด... เกลียดชังที่สุด",
						"hindi": "शायद। यह वह रूप होगा जिससे सरदार हेलगार्ड को… सबसे ज़्यादा नफ़रत थी।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "비린내가 진동했다. 환영이 더욱 선명해지며 헬가르드의 절규가 들려오는 듯했다.",
						"english": "The stench of fish was overwhelming. The illusion grew clearer, and Helgard's screams seemed to echo.",
						"japanese": "生臭さが漂っていた。幻影はさらに鮮明になり、ヘルガルドの絶叫が聞こえてくるようだった。",
						"chinese": "腥味弥漫。幻象愈发清晰，仿佛能听到赫尔加德的惨叫。",
						"french": "L'odeur de poisson était accablante. L'illusion devenait plus nette, et les cris d'Helgard semblaient résonner.",
						"spanish": "El hedor a pescado era abrumador. La ilusión se hizo más clara, y los gritos de Helgard parecían resonar.",
						"vietnamese": "Mùi tanh nồng nặc. Ảo ảnh càng rõ nét hơn, dường như nghe thấy tiếng kêu gào của Helgard.",
						"thai": "กลิ่นคาวคละคลุ้ง ภาพลวงตายิ่งชัดเจนขึ้น ราวกับได้ยินเสียงกรีดร้องของเฮลการ์ด",
						"hindi": "मछली की बदबू फैल गई। भ्रम और स्पष्ट हो गया, और हेलगार्ड की चीखें गूँजती हुई सी लग रही थीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이 저주는 헬가르드의 분노와 슬픔으로 강화돼요.",
						"english": "This curse is strengthened by Helgard's rage and sorrow.",
						"japanese": "この呪いはヘルガルドの怒りと悲しみによって強まります。",
						"chinese": "这个诅咒会因赫尔加德的愤怒和悲伤而增强。",
						"french": "Cette malédiction est renforcée par la rage et le chagrin d'Helgard.",
						"spanish": "Esta maldición se fortalece con la rabia y el dolor de Helgard.",
						"vietnamese": "Lời nguyền này được tăng cường bởi sự phẫn nộ và nỗi buồn của Helgard.",
						"thai": "คำสาปนี้แข็งแกร่งขึ้นด้วยความโกรธและความเศร้าของเฮลการ์ด",
						"hindi": "यह शाप हेलगार्ड के क्रोध और दुख से मज़बूत होता है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그럼 저 청어가 헬가르드 본인이라고?",
						"english": "So that herring is Helgard himself?",
						"japanese": "じゃあ、あのニシンがヘルガルド本人だと？",
						"chinese": "那么那条鲱鱼就是赫尔加德本人？",
						"french": "Alors ce hareng est Helgard lui-même ?",
						"spanish": "¿Así que ese arenque es Helgard en persona?",
						"vietnamese": "Vậy con cá trích kia là Helgard thật sao?",
						"thai": "ถ้าอย่างนั้น ปลาเฮอร์ริ่งตัวนั้นคือเฮลการ์ดเองเหรอ?",
						"hindi": "तो वह हेरिंग हेलगार्ड ख़ुद है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "…아직 확신할 수 없어요. 하지만 저주는 그를 비극으로 몰았죠.",
						"english": "...I can't be sure yet. But the curse drove him to tragedy.",
						"japanese": "…まだ確信はできません。ですが、呪いが彼を悲劇へと追いやったのです。",
						"chinese": "…我还不能确定。但诅咒将他推向了悲剧。",
						"french": "Je ne peux pas encore en être sûr. Mais la malédiction l'a poussé à la tragédie.",
						"spanish": "Todavía no puedo estar seguro. Pero la maldición lo llevó a la tragedia.",
						"vietnamese": "…Vẫn chưa thể chắc chắn. Nhưng lời nguyền đã đẩy anh ta vào bi kịch.",
						"thai": "…ยังไม่แน่ใจนัก แต่คำสาปได้ผลักดันเขาไปสู่โศกนาฏกรรม",
						"hindi": "...मैं अभी तक निश्चित नहीं हो सकता। लेकिन शाप ने उसे त्रासदी की ओर धकेल दिया।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "붉은 빛이 도는 신비한 소금 결정체가 눈밭에 박혀 빛났다.",
						"english": "Mysterious reddish salt crystals were embedded in the snowfield, glowing.",
						"japanese": "赤い光を帯びた神秘的な塩の結晶が、雪原に埋め込まれて輝いていた。",
						"chinese": "散发着红光的神秘盐结晶镶嵌在雪地上，闪耀着。",
						"french": "De mystérieux cristaux de sel rougeâtres étaient incrustés dans le champ de neige, brillant.",
						"spanish": "Misteriosos cristales de sal rojizos estaban incrustados en el campo de nieve, brillando.",
						"vietnamese": "Những tinh thể muối bí ẩn ánh đỏ găm vào bãi tuyết, phát sáng.",
						"thai": "ผลึกเกลือลึกลับเรืองแสงสีแดงปักอยู่ในทุ่งหิมะ เปล่งประกาย",
						"hindi": "लाल रंग के रहस्यमय नमक के क्रिस्टल बर्फ़ीले मैदान में जड़े हुए चमक रहे थे।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						4
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "더 이상 돌아갈 수 없어요. 이 저주를 풀어야만… 그를 구할 수 있어요.",
						"english": "There's no turning back. Only by breaking this curse... can we save him.",
						"japanese": "もう後戻りはできません。この呪いを解かなければ…彼を救うことはできません。",
						"chinese": "已经无法回头了。只有解除这个诅咒…才能拯救他。",
						"french": "On ne peut plus revenir en arrière. Ce n'est qu'en brisant cette malédiction... que nous pourrons le sauver.",
						"spanish": "Ya no hay vuelta atrás. Solo rompiendo esta maldición... podremos salvarlo.",
						"vietnamese": "Không thể quay lại nữa rồi. Chỉ khi hóa giải lời nguyền này… mới có thể cứu anh ấy.",
						"thai": "เรากลับไปไม่ได้แล้ว มีเพียงการถอนคำสาปนี้เท่านั้น... ที่จะช่วยเขาได้",
						"hindi": "अब और पीछे नहीं हट सकते। इस शाप को तोड़कर ही… उसे बचाया जा सकता है।"
					}
				},
				{
					"content": {
						"korean": "구원…?",
						"english": "Salvation...?",
						"japanese": "救済…？",
						"chinese": "救赎…？",
						"french": "Le salut...?",
						"spanish": "¿Salvación...?",
						"vietnamese": "Cứu rỗi...?",
						"thai": "ความรอด...?",
						"hindi": "मुक्ति...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니면, 영원히 고통받게 될 거예요. 이 끔찍한 형태로.",
						"english": "Otherwise, he will suffer forever. In this terrible form.",
						"japanese": "さもなくば、彼は永遠に苦しむことになるでしょう。この恐ろしい姿で。",
						"chinese": "否则，他将永远受苦。以这种可怕的形态。",
						"french": "Sinon, il souffrira éternellement. Sous cette forme terrible.",
						"spanish": "De lo contrario, sufrirá para siempre. En esta terrible forma.",
						"vietnamese": "Nếu không, anh ta sẽ phải chịu đựng mãi mãi. Dưới hình dạng khủng khiếp này.",
						"thai": "มิฉะนั้น เขาจะต้องทนทุกข์ทรมานไปตลอดกาล ในร่างอันน่าสะพรึงกลัวนี้",
						"hindi": "वरना, वह हमेशा के लिए दुख भोगेगा। इस भयानक रूप में।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…멈출 수 없어.",
						"english": "...Can't stop.",
						"japanese": "...止められない。",
						"chinese": "……停不下来。",
						"french": "...Je ne peux pas m'arrêter.",
						"spanish": "...No puedo parar.",
						"vietnamese": "...Không thể dừng lại.",
						"thai": "...หยุดไม่ได้",
						"hindi": "... रुक नहीं सकता।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 절인 청어가 탐험대를 노려봤다.",
						"english": "The colossal pickled herring glared at the expedition.",
						"japanese": "巨大な塩漬けニシンが探検隊を睨みつけた。",
						"chinese": "巨大的腌鲱鱼怒视着探险队。",
						"french": "L'énorme hareng mariné fixa l'expédition.",
						"spanish": "El colosal arenque encurtido fulminó con la mirada a la expedición.",
						"vietnamese": "Con cá trích muối khổng lồ trừng mắt nhìn đội thám hiểm.",
						"thai": "ปลาเฮอร์ริ่งดองขนาดมหึมาจ้องมองคณะสำรวจ",
						"hindi": "विशालकाय अचार वाली हेरिंग ने अभियान दल को घूर कर देखा।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "내 만찬을 방해하는 자들… 모두 죽어라!",
						"english": "Those who disturb my feast... die, all of you!",
						"japanese": "我が晩餐を妨げる者ども… 皆、死ね！",
						"chinese": "胆敢打扰我盛宴的家伙……都去死吧！",
						"french": "Ceux qui troublent mon festin... mourez tous !",
						"spanish": "¡Aquellos que interrumpan mi festín... mueran todos!",
						"vietnamese": "Những kẻ dám phá đám bữa tiệc của ta... chết hết đi!",
						"thai": "พวกที่รบกวนงานเลี้ยงของข้า... จงตายไปให้หมด!",
						"hindi": "जो मेरे भोज में बाधा डालते हैं... सब मर जाओ!"
					}
				},
				{
					"content": {
						"korean": "저 비린내가 더 심해졌어!",
						"english": "That fishy smell got worse!",
						"japanese": "あの生臭さがさらに酷くなった！",
						"chinese": "那股腥味更浓了！",
						"french": "Cette odeur de poisson a empiré !",
						"spanish": "¡Ese olor a pescado ha empeorado!",
						"vietnamese": "Cái mùi tanh đó càng nồng nặc hơn!",
						"thai": "กลิ่นคาวนั่นแรงขึ้นอีก!",
						"hindi": "वह मछली जैसी गंध और भी बदतर हो गई!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "그의 분노가 극에 달했어요. 저주가 정점에 다다른 겁니다.",
						"english": "His rage has reached its peak. The curse is at its zenith.",
						"japanese": "彼の怒りは頂点に達したわ。呪いが最高潮に達したのよ。",
						"chinese": "他的愤怒已达顶峰。诅咒也达到了极点。",
						"french": "Sa fureur a atteint son paroxysme. La malédiction est à son apogée.",
						"spanish": "Su ira ha llegado a su punto máximo. La maldición está en su cénit.",
						"vietnamese": "Cơn thịnh nộ của hắn đã lên đến đỉnh điểm. Lời nguyền đã đạt tới cực độ.",
						"thai": "ความโกรธของเขาถึงขีดสุดแล้ว คำสาปถึงจุดสูงสุดแล้ว",
						"hindi": "उसका क्रोध अपने चरम पर पहुँच गया है। अभिशाप अपने चरमोत्कर्ष पर है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히… 나를… 이 모습으로 만든 너희를…!",
						"english": "How dare you... you who made me... into this form...!",
						"japanese": "よくも…私を…この姿にしたお前たちを…！",
						"chinese": "竟敢……把我……变成这副模样，你们这些家伙……！",
						"french": "Comment osez-vous... vous qui m'avez... réduit à cet état... !",
						"spanish": "¡Cómo os atrevéis... vosotros que me hicisteis... adoptar esta forma...!",
						"vietnamese": "Dám... biến ta... thành ra bộ dạng này... các ngươi...!",
						"thai": "บังอาจ... พวกเจ้าที่ทำให้ข้า... อยู่ในสภาพนี้...!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... तुमने मुझे... इस रूप में बदल दिया...!"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "절인 청어의 거대한 몸체가 탐험대를 덮쳤다.",
						"english": "The gigantic body of the pickled herring engulfed the expedition.",
						"japanese": "巨大な塩漬けニシンの体が探検隊を襲った。",
						"chinese": "巨型腌鲱鱼的身体吞噬了探险队。",
						"french": "Le corps gigantesque du hareng mariné a englouti l'expédition.",
						"spanish": "El gigantesco cuerpo del arenque encurtido engulló a la expedición.",
						"vietnamese": "Thân hình khổng lồ của con cá trích ngâm đã nuốt chửng đoàn thám hiểm.",
						"thai": "ร่างกายมหึมาของปลาเฮอร์ริ่งดองกลืนกินคณะสำรวจ",
						"hindi": "नमकीन हेरिंग के विशाल शरीर ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "하찮은 것들… 감히… 나를…!",
						"english": "Insignificant creatures... How dare you... me...!",
						"japanese": "些末な者どもめ… よくも… 我を…！",
						"chinese": "卑微的家伙们……竟敢……对我……！",
						"french": "Créatures insignifiantes... Comment osez-vous... moi...!",
						"spanish": "¡Criaturas insignificantes... Cómo osáis... a mí...!",
						"vietnamese": "Những kẻ hèn mọn... Dám... ta...!",
						"thai": "พวกไร้ค่า... บังอาจ... มา... ฉัน...!",
						"hindi": "तुच्छ प्राणी... तुम्हारी हिम्मत कैसे हुई... मुझ पर...!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it... It's not over yet!",
						"japanese": "ちくしょう… まだ終わってない！",
						"chinese": "该死……还没结束！",
						"french": "Bon sang... Ce n'est pas encore fini !",
						"spanish": "¡Maldita sea... Esto aún no ha terminado!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc đâu!",
						"thai": "ให้ตายสิ... ยังไม่จบแค่นี้!",
						"hindi": "धिक्कार है... अभी खत्म नहीं हुआ!"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "포기하지 마세요. 기록은 계속됩니다.",
						"english": "Don't give up. The record continues.",
						"japanese": "諦めないでください。記録は続きます。",
						"chinese": "不要放弃。记录仍在继续。",
						"french": "N'abandonnez pas. Le journal continue.",
						"spanish": "No se rinda. El registro continúa.",
						"vietnamese": "Đừng bỏ cuộc. Ký ức sẽ tiếp diễn.",
						"thai": "อย่ายอมแพ้ การบันทึกยังคงดำเนินต่อไป",
						"hindi": "हार मत मानो। रिकॉर्ड जारी है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "절인 청어는 거친 숨을 몰아쉬며 쓰러졌다.",
						"english": "The pickled herring collapsed, gasping for breath.",
						"japanese": "塩漬けニシンは荒い息を吐きながら倒れた。",
						"chinese": "腌鲱鱼喘着粗气倒下了。",
						"french": "Le hareng mariné s'effondra, haletant.",
						"spanish": "El arenque encurtido se desplomó, jadeando.",
						"vietnamese": "Con cá trích muối ngã quỵ, thở hổn hển.",
						"thai": "ปลาเฮอร์ริ่งดองทรุดลง หายใจหอบถี่",
						"hindi": "अचार वाली हेरिंग हाँफते हुए गिर गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "오딘… 내 모든 것을 빼앗아갔으면서… 이 고통까지…!",
						"english": "Odin... you took everything from me... and now even this pain...!",
						"japanese": "オーディン… 私の全てを奪い去ったのに… この苦痛まで…！",
						"chinese": "奥丁……你夺走了我的一切……甚至连这份痛苦……！",
						"french": "Odin... tu m'as tout pris... et maintenant même cette douleur... !",
						"spanish": "Odín... me lo quitaste todo... ¡y ahora hasta este dolor...!",
						"vietnamese": "Odin... ngươi đã cướp đi mọi thứ của ta... và giờ ngay cả nỗi đau này...!",
						"thai": "โอดิน... เจ้าเอาทุกสิ่งไปจากข้า... และตอนนี้แม้แต่ความเจ็บปวดนี้...!",
						"hindi": "ओडिन... तुमने मुझसे सब कुछ छीन लिया... और अब यह दर्द भी...!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저주가 풀린 건가…?",
						"english": "Has the curse been lifted...?",
						"japanese": "呪いは解けたのか…？",
						"chinese": "诅咒解除了吗……？",
						"french": "La malédiction est-elle levée... ?",
						"spanish": "¿Se ha levantado la maldición...?",
						"vietnamese": "Lời nguyền đã được hóa giải sao...?",
						"thai": "คำสาปคลายแล้วหรือ...?",
						"hindi": "क्या अभिशाप हट गया...?"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "…아직 아니에요. 이건 시작에 불과해요. 헬가르드의 비극은… 더 깊어요.",
						"english": "...Not yet. This is just the beginning. The tragedy of Helgard... runs deeper.",
						"japanese": "...まだよ。これは始まりに過ぎないわ。ヘルガルドの悲劇は… もっと深いものよ。",
						"chinese": "……还没。这仅仅是个开始。赫尔加德的悲剧……远不止于此。",
						"french": "...Pas encore. Ce n'est que le début. La tragédie d'Helgard... est plus profonde.",
						"spanish": "...Todavía no. Esto es solo el principio. La tragedia de Helgard... es más profunda.",
						"vietnamese": "...Chưa đâu. Đây mới chỉ là khởi đầu. Bi kịch của Helgard... còn sâu sắc hơn nhiều.",
						"thai": "...ยังค่ะ นี่ยังเป็นแค่จุดเริ่มต้น โศกนาฏกรรมของเฮลการ์ด... ลึกซึ้งกว่านั้นอีก",
						"hindi": "...अभी नहीं। यह सिर्फ शुरुआत है। हेलगार्ड की त्रासदी... और भी गहरी है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "설원 저편에서 희미한 울부짖음이 들려왔다. 마치 누군가의 슬픔처럼.",
						"english": "A faint howl echoed from beyond the snowy plains, like someone's sorrow.",
						"japanese": "雪原の彼方から微かな遠吠えが聞こえてきた。まるで誰かの悲しみのように。",
						"chinese": "雪原深处传来一声微弱的嚎叫，仿佛是某人的悲伤。",
						"french": "Un faible hurlement résonna au-delà des plaines enneigées, comme la tristesse de quelqu'un.",
						"spanish": "Un débil aullido resonó más allá de las llanuras nevadas, como la tristeza de alguien.",
						"vietnamese": "Một tiếng hú yếu ớt vọng lại từ bên kia đồng tuyết, như nỗi buồn của ai đó.",
						"thai": "เสียงหอนแผ่วเบาดังมาจากอีกฟากของทุ่งหิมะ ราวกับความเศร้าของใครบางคน",
						"hindi": "बर्फीले मैदानों के उस पार से एक धीमी चीख सुनाई दी, मानो किसी का दुख हो।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"절인 청어의 저주가 격렬해진다.",
			"에이라는 고대 신화 속 단서를 찾는다.",
			"가장 혐오하는 형태로 변하는 저주.",
			"그 뒤에 숨겨진 헬가르드의 비극이 서서히 드러난다."
		],
		"english": [
			"The curse of the pickled herring intensifies.",
			"Aira seeks clues in ancient myths.",
			"The curse transforms into its most abhorred form.",
			"The tragedy of Helgard, hidden behind it, slowly unfolds."
		],
		"japanese": [
			"塩漬けニシンの呪いが激しさを増す。",
			"エイラは古代神話の手がかりを探す。",
			"呪いは最も忌み嫌う姿へと変わる。",
			"その裏に隠されたヘルガルドの悲劇が徐々に明らかになる。"
		],
		"chinese": [
			"腌鲱鱼的诅咒愈发强烈。",
			"艾拉在古老神话中寻找线索。",
			"诅咒变成了最令人憎恶的形态。",
			"隐藏在幕后的赫尔加德悲剧渐渐浮现。"
		],
		"french": [
			"La malédiction du hareng saur s'intensifie.",
			"Aira cherche des indices dans les mythes anciens.",
			"La malédiction prend la forme qu'elle déteste le plus.",
			"La tragédie d'Helgard, cachée derrière, se révèle lentement."
		],
		"spanish": [
			"La maldición del arenque encurtido se intensifica.",
			"Aira busca pistas en antiguos mitos.",
			"La maldición se transforma en la forma que más aborrece.",
			"La tragedia de Helgard, oculta tras ello, se desvela lentamente."
		],
		"vietnamese": [
			"Lời nguyền cá trích ngâm chua càng dữ dội.",
			"Aira tìm kiếm manh mối trong thần thoại cổ đại.",
			"Lời nguyền biến đổi thành hình dạng đáng ghét nhất.",
			"Bi kịch Helgard ẩn giấu phía sau dần dần hé lộ."
		],
		"thai": [
			"คำสาปแห่งปลาเฮอร์ริ่งดองรุนแรงขึ้น.",
			"ไอราค้นหาเบาะแสในตำนานโบราณ.",
			"คำสาปเปลี่ยนร่างเป็นสิ่งที่น่ารังเกียจที่สุด.",
			"โศกนาฏกรรมของเฮลการ์ดที่ซ่อนอยู่เบื้องหลังค่อยๆ เปิดเผย."
		],
		"hindi": [
			"अचार वाली हेरिंग का अभिशाप गहरा होता जा रहा है।",
			"एइरा प्राचीन मिथकों में सुराग ढूंढती है।",
			"अभिशाप सबसे घृणित रूप में बदल जाता है।",
			"उसके पीछे छिपी हेल्गार्ड की त्रासदी धीरे-धीरे सामने आती है।"
		]
	}
} as const;
