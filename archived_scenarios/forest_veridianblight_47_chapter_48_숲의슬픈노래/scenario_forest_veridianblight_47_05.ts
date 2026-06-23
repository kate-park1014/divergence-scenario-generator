export const scenario_forest_veridianblight_47_05 = {
	"scenario_id": "forest_veridianblight_47_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "pool_MadOracle_VeridianBlight_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "탐험대는 마침내 숲의 가장 깊은 곳, 고대 제단에 다다랐다.",
						"english": "The expedition finally reached the ancient altar, deep within the forest.",
						"japanese": "探検隊はついに森の最深部、古代の祭壇にたどり着いた。",
						"chinese": "探险队终于抵达了森林最深处的古老祭坛。",
						"french": "L'expédition a finalement atteint l'ancien autel, au plus profond de la forêt.",
						"spanish": "La expedición finalmente llegó al antiguo altar, en lo más profundo del bosque.",
						"vietnamese": "Đoàn thám hiểm cuối cùng đã đến được điện thờ cổ xưa, sâu thẳm trong rừng.",
						"thai": "คณะสำรวจในที่สุดก็มาถึงแท่นบูชาโบราณที่อยู่ลึกที่สุดในป่า",
						"hindi": "अभियान दल अंततः जंगल के सबसे गहरे हिस्से, प्राचीन वेदी तक पहुँच गया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기가… 그 제단인가.",
						"english": "This is… the altar.",
						"japanese": "ここが… あの祭壇か。",
						"chinese": "这里就是…那个祭坛吗。",
						"french": "C'est ici… l'autel.",
						"spanish": "Este es… el altar.",
						"vietnamese": "Đây là… điện thờ đó sao.",
						"thai": "นี่คือ…แท่นบูชานั่นหรือ",
						"hindi": "यह… वही वेदी है।"
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
					"action": "enter",
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "결국 여기까지 왔군. 내가 경고하지 않았나…",
						"english": "So you've come this far. Didn't I warn you…?",
						"japanese": "結局ここまで来たか。警告したはずだが…",
						"chinese": "你们终究还是走到这里了。我不是警告过你们吗…",
						"french": "Vous êtes donc venus jusqu'ici. Ne vous avais-je pas prévenus…?",
						"spanish": "Así que llegasteis hasta aquí. ¿No os advertí…?",
						"vietnamese": "Cuối cùng các ngươi cũng đến đây. Ta đã không cảnh báo sao…",
						"thai": "ในที่สุดพวกเจ้าก็มาถึงที่นี่ ข้าไม่ได้เตือนพวกเจ้าหรือไง…",
						"hindi": "तो तुम यहाँ तक आ गए। क्या मैंने तुम्हें चेतावनी नहीं दी थी…?"
					}
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이곳은… 숲의 비극이 시작된 곳이자, 모든 것이 끝나는 곳.",
						"english": "This place is… where the forest's tragedy began, and where everything ends.",
						"japanese": "ここは… 森の悲劇が始まった場所であり、すべてが終わる場所だ。",
						"chinese": "这里是…森林悲剧的开端，也是一切的终结。",
						"french": "Cet endroit est… là où la tragédie de la forêt a commencé, et où tout se termine.",
						"spanish": "Este lugar es… donde la tragedia del bosque comenzó, y donde todo termina.",
						"vietnamese": "Nơi đây là… nơi bi kịch của khu rừng bắt đầu, và nơi mọi thứ kết thúc.",
						"thai": "ที่นี่คือ…จุดเริ่มต้นโศกนาฏกรรมของป่า และที่ที่ทุกสิ่งจบลง",
						"hindi": "यह स्थान… जहाँ जंगल की त्रासदी शुरू हुई, और जहाँ सब कुछ समाप्त होता है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "들리는가? 이 노랫소리… 과거 부족을 위한 슬픈 자장가였던 것이….",
						"english": "Do you hear it? This song… what was once a sad lullaby for the tribe…",
						"japanese": "聞こえるか？この歌声…かつて部族のための悲しい子守唄だったものが…。",
						"chinese": "听到了吗？这歌声…曾是为部落而唱的悲伤摇篮曲…",
						"french": "L'entendez-vous ? Ce chant… ce qui fut autrefois une triste berceuse pour la tribu…",
						"spanish": "¿Lo oyes? Esta canción… lo que una vez fue una triste nana para la tribu…",
						"vietnamese": "Ngươi có nghe thấy không? Bài hát này… từng là khúc ru buồn cho bộ tộc…",
						"thai": "เจ้าได้ยินไหม? เสียงเพลงนี้…ที่ครั้งหนึ่งเคยเป็นเพลงกล่อมเด็กอันเศร้าสร้อยของชนเผ่า…",
						"hindi": "क्या तुम सुनते हो? यह गीत… जो कभी जनजाति के लिए एक दुखद लोरी थी…"
					},
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아름다운 소리인 줄 알았는데… 점점 섬뜩하게 들려.",
						"english": "I thought it was a beautiful sound… but it's growing eerie.",
						"japanese": "美しい音だと思ったのに…だんだん不気味に聞こえてくる。",
						"chinese": "我以为是美丽的声音…却越来越让人毛骨悚然。",
						"french": "Je croyais que c'était un beau son… mais ça devient de plus en plus étrange.",
						"spanish": "Pensé que era un sonido hermoso… pero se está volviendo espeluznante.",
						"vietnamese": "Tôi cứ nghĩ đó là âm thanh tuyệt đẹp… nhưng giờ nghe càng lúc càng rợn người.",
						"thai": "ฉันคิดว่ามันเป็นเสียงที่ไพเราะ…แต่ตอนนี้มันเริ่มน่าขนลุกแล้ว",
						"hindi": "मुझे लगा यह एक सुंदर आवाज़ है… लेकिन यह धीरे-धीरे डरावनी होती जा रही है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이것은 그녀의 절규다. 모든 것을 하나로 만들려는 광기의 속삭임.",
						"english": "This is her scream. A whisper of madness, trying to make all things one.",
						"japanese": "これは彼女の絶叫だ。すべてを一つにしようとする狂気のささやき。",
						"chinese": "这是她的绝望呐喊。是试图将万物归一的疯狂低语。",
						"french": "C'est son cri. Un murmure de folie, essayant de ne faire qu'un de toutes choses.",
						"spanish": "Este es su grito. Un susurro de locura, intentando hacer que todo sea uno.",
						"vietnamese": "Đây là tiếng thét của cô ấy. Một lời thì thầm điên loạn, muốn biến mọi thứ thành một.",
						"thai": "นี่คือเสียงกรีดร้องของนาง เสียงกระซิบแห่งความบ้าคลั่ง ที่พยายามจะรวมทุกสิ่งให้เป็นหนึ่งเดียว",
						"hindi": "यह उसकी चीख है। एक पागलपन की फुसफुसाहट, जो हर चीज़ को एक बनाना चाहती है।"
					},
					"emotion": "angry",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "숲은… 그녀의 왜곡된 욕망을 그대로 흡수했어.",
						"english": "The forest… absorbed her twisted desires entirely.",
						"japanese": "森は…彼女の歪んだ欲望をそのまま吸収した。",
						"chinese": "森林…完全吸收了她扭曲的欲望。",
						"french": "La forêt… a entièrement absorbé ses désirs tordus.",
						"spanish": "El bosque… absorbió por completo sus deseos retorcidos.",
						"vietnamese": "Khu rừng… đã hấp thụ hoàn toàn những ham muốn méo mó của cô ấy.",
						"thai": "ป่า…ได้ดูดซับความปรารถนาที่บิดเบี้ยวของนางไว้ทั้งหมด",
						"hindi": "जंगल ने… उसकी विकृत इच्छाओं को पूरी तरह से सोख लिया।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bracken",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "제단을 봐. 제물들이… 모두 시들고 썩어있어.",
						"english": "Look at the altar. The offerings… they're all withered and decayed.",
						"japanese": "祭壇を見て。供物が…すべて枯れて腐っている。",
						"chinese": "看那祭坛。祭品们…都枯萎腐烂了。",
						"french": "Regardez l'autel. Les offrandes… sont toutes fanées et pourries.",
						"spanish": "Mira el altar. Las ofrendas… están todas marchitas y podridas.",
						"vietnamese": "Hãy nhìn điện thờ kìa. Các vật tế… đều đã héo úa và mục nát.",
						"thai": "ดูแท่นบูชานั่นสิ เครื่องสังเวย…ทั้งหมดเหี่ยวเฉาและเน่าเปื่อย",
						"hindi": "वेदी को देखो। चढ़ावे… सब मुरझा गए और सड़ गए हैं।"
					},
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"content": {
						"korean": "희생을 위한 제물인데… 어째서 이런 모습이지?",
						"english": "These are offerings for sacrifice… why do they look like this?",
						"japanese": "犠牲のための供物なのに…どうしてこんな姿に？",
						"chinese": "明明是用于献祭的祭品…为什么会变成这样？",
						"french": "Ce sont des offrandes pour le sacrifice… pourquoi sont-elles ainsi ?",
						"spanish": "Son ofrendas para el sacrificio… ¿por qué tienen este aspecto?",
						"vietnamese": "Đây là vật tế cho sự hy sinh… tại sao chúng lại trông như thế này?",
						"thai": "นี่คือเครื่องสังเวยสำหรับการเสียสละ…ทำไมถึงเป็นแบบนี้?",
						"hindi": "ये बलिदान के लिए चढ़ावे हैं… ये ऐसे क्यों दिखते हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그녀는 부족을 구원하려 했지만… 숲은 모든 생명을 흡수했다.",
						"english": "She tried to save the tribe... but the forest absorbed all life.",
						"japanese": "彼女は部族を救おうとしたが…森は全ての生命を吸収した。",
						"chinese": "她试图拯救部落…但森林吞噬了所有生命。",
						"french": "Elle a tenté de sauver la tribu... mais la forêt a absorbé toute vie.",
						"spanish": "Intentó salvar a la tribu... pero el bosque absorbió toda vida.",
						"vietnamese": "Cô ấy đã cố gắng cứu bộ lạc... nhưng khu rừng đã nuốt chửng mọi sự sống.",
						"thai": "เธอพยายามจะช่วยเผ่า...แต่ป่าได้ดูดกลืนทุกชีวิตไปแล้ว",
						"hindi": "उसने जनजाति को बचाने की कोशिश की... लेकिन जंगल ने सभी जीवन को सोख लिया।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그녀의 비극적인 희생은… 오히려 이 숲을 뒤틀리게 만들었어.",
						"english": "Her tragic sacrifice... twisted this forest even further.",
						"japanese": "彼女の悲劇的な犠牲は…むしろこの森を歪ませた。",
						"chinese": "她悲剧性的牺牲…反而让这片森林更加扭曲。",
						"french": "Son sacrifice tragique... a encore plus tordu cette forêt.",
						"spanish": "Su trágico sacrificio... torció aún más este bosque.",
						"vietnamese": "Sự hy sinh bi thảm của cô ấy... lại càng làm khu rừng này thêm biến dạng.",
						"thai": "การเสียสละอันน่าเศร้าของเธอ...กลับทำให้ป่าแห่งนี้บิดเบี้ยวมากยิ่งขึ้น",
						"hindi": "उसका दुखद बलिदान... इस जंगल को और भी विकृत कर गया।"
					},
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우리의 탐험이… 숲을 더 파멸시키고 있는 걸까.",
						"english": "Is our exploration... bringing further ruin to the forest?",
						"japanese": "我々の探検が…森をさらに破滅させているのだろうか。",
						"chinese": "我们的探索…是不是正在让森林更加毁灭？",
						"french": "Notre exploration... serait-elle en train de ruiner davantage la forêt ?",
						"spanish": "¿Nuestra exploración... estará destruyendo aún más el bosque?",
						"vietnamese": "Phải chăng cuộc thám hiểm của chúng ta... đang hủy hoại khu rừng nhiều hơn?",
						"thai": "การสำรวจของเรา...กำลังทำให้ป่าแห่งนี้พังทลายลงไปอีกงั้นหรือ?",
						"hindi": "क्या हमारी खोज... जंगल को और अधिक विनाश की ओर ले जा रही है?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bracken",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "깊은 숲 속… 들려오는가? 부족의 간절한 속삭임이… 절망에 갇힌 영혼들의 울음소리다.",
						"english": "Deep in the forest... do you hear it? The tribe's desperate whispers... the cries of souls trapped in despair.",
						"japanese": "森の奥深く…聞こえるか？部族の切なる囁きが…絶望に囚われた魂たちの叫びだ。",
						"chinese": "森林深处…你听到了吗？部落绝望的低语…那是被困在绝望中的灵魂的哭泣。",
						"french": "Au plus profond de la forêt... l'entends-tu ? Les murmures désespérés de la tribu... les pleurs d'âmes piégées dans le désespoir.",
						"spanish": "En lo profundo del bosque... ¿lo oyes? Los susurros desesperados de la tribu... los gritos de almas atrapadas en la desesperación.",
						"vietnamese": "Sâu thẳm trong rừng... ngươi có nghe thấy không? Tiếng thì thầm khẩn thiết của bộ lạc... tiếng khóc của những linh hồn bị mắc kẹt trong tuyệt vọng.",
						"thai": "ลึกเข้าไปในป่า...ได้ยินหรือไม่? เสียงกระซิบอันสิ้นหวังของเผ่า...เสียงร่ำไห้ของวิญญาณที่จมดิ่งในความสิ้นหวัง",
						"hindi": "घने जंगल में... क्या तुम सुन रहे हो? जनजाति की हताश फुसफुसाहटें... निराशा में फंसी आत्माओं की चीखें।"
					},
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "마치… 모든 희망을 잃은 듯한 소리야.",
						"english": "It sounds as if... all hope has been lost.",
						"japanese": "まるで…全ての希望を失ったような音だ。",
						"chinese": "听起来…就像失去了所有希望。",
						"french": "On dirait... que tout espoir a été perdu.",
						"spanish": "Parece como si... toda esperanza se hubiera perdido.",
						"vietnamese": "Nghe cứ như... mọi hy vọng đã tan biến.",
						"thai": "มันฟังดูเหมือน...ความหวังทั้งหมดได้หายไปแล้ว",
						"hindi": "यह ऐसा लगता है... जैसे सारी उम्मीदें खो गई हों।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "그들은 구원받지 못했어. 그녀의 희생은… 그저 또 다른 비극을 낳았을 뿐.",
						"english": "They were not saved. Her sacrifice... only gave birth to another tragedy.",
						"japanese": "彼らは救われなかった。彼女の犠牲は…ただ別の悲劇を生んだだけだ。",
						"chinese": "他们没有被拯救。她的牺牲…只是又带来了一场悲剧。",
						"french": "Ils n'ont pas été sauvés. Son sacrifice... n'a fait qu'engendrer une autre tragédie.",
						"spanish": "No fueron salvados. Su sacrificio... solo dio a luz a otra tragedia.",
						"vietnamese": "Họ không được cứu. Sự hy sinh của cô ấy... chỉ tạo ra một bi kịch khác.",
						"thai": "พวกเขาไม่ได้รับการช่วยชีวิต การเสียสละของเธอ...เป็นเพียงจุดกำเนิดของโศกนาฏกรรมครั้งใหม่เท่านั้น",
						"hindi": "वे बचाए नहीं गए। उसका बलिदान... बस एक और त्रासदी को जन्म दिया।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "우린 지금… 같은 파멸의 길을 걷고 있다.",
						"english": "We are now... walking the same path of ruin.",
						"japanese": "我々は今…同じ破滅の道を歩んでいる。",
						"chinese": "我们现在…正在走上同样的毁灭之路。",
						"french": "Nous sommes maintenant... en train de marcher sur le même chemin de la ruine.",
						"spanish": "Ahora estamos... caminando por el mismo camino de la ruina.",
						"vietnamese": "Chúng ta bây giờ... đang đi trên cùng một con đường hủy diệt.",
						"thai": "ตอนนี้เรากำลัง...เดินอยู่บนเส้นทางแห่งความพินาศเดียวกัน",
						"hindi": "हम अब... उसी विनाश के रास्ते पर चल रहे हैं।"
					},
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이 선택이… 돌이킬 수 없는 죄책감으로 남을 것인가.",
						"english": "Will this choice... leave us with irreversible guilt?",
						"japanese": "この選択が…取り返しのつかない罪悪感として残るのか。",
						"chinese": "这个选择…会不会留下不可挽回的罪恶感？",
						"french": "Ce choix... nous laissera-t-il une culpabilité irréversible ?",
						"spanish": "¿Esta elección... nos dejará una culpa irreversible?",
						"vietnamese": "Lựa chọn này... liệu có để lại nỗi ân hận không thể cứu vãn?",
						"thai": "การตัดสินใจครั้งนี้...จะเหลือไว้แต่ความรู้สึกผิดที่ไม่อาจแก้ไขได้งั้นหรือ?",
						"hindi": "क्या यह चुनाव... हमें अपरिवर्तनीय अपराधबोध से छोड़ जाएगा?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "고대 제단의 중앙. 숲의 여인, 베리디안 블라이트가 모습을 드러냈다.",
						"english": "At the center of the ancient altar. The Lady of the Forest, Veridian Blight, appeared.",
						"japanese": "古代の祭壇の中央。森の淑女、ベリディアン・ブライトが姿を現した。",
						"chinese": "在古老祭坛的中央。森林女主人，维里迪安·枯萎，现身了。",
						"french": "Au centre de l'ancien autel. La Dame de la Forêt, Veridian Blight, est apparue.",
						"spanish": "En el centro del antiguo altar. La Dama del Bosque, Veridian Blight, apareció.",
						"vietnamese": "Tại trung tâm của bàn thờ cổ. Nữ thần Rừng, Veridian Blight, đã xuất hiện.",
						"thai": "ณ ใจกลางแท่นบูชาโบราณ สตรีแห่งพงไพร, เวริเดียน ไบลท์, ได้ปรากฏตัวขึ้น",
						"hindi": "प्राचीन वेदी के केंद्र में। जंगल की महिला, वेरीडियन ब्लाइट, प्रकट हुई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "왔구나… 나의 자식들.",
						"english": "You have come... my children.",
						"japanese": "来たか…我が子らよ。",
						"chinese": "你们来了…我的孩子们。",
						"french": "Vous êtes venus... mes enfants.",
						"spanish": "Habéis venido... hijos míos.",
						"vietnamese": "Các ngươi đã đến... hỡi các con của ta.",
						"thai": "เจ้ามาแล้ว...ลูกๆ ของข้า",
						"hindi": "तुम आ गए... मेरे बच्चों।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "빛나는 덩굴들이 사납게 솟구쳐 오르며 주변 나무들을 집어삼켰다.",
						"english": "Luminous vines fiercely surged, engulfing nearby trees.",
						"japanese": "輝く蔓が激しく湧き上がり、周りの木々を飲み込んだ。",
						"chinese": "发光的藤蔓猛烈地涌动，吞噬了周围的树木。",
						"french": "Des lianes lumineuses s'élevaient avec fureur, engloutissant les arbres alentour.",
						"spanish": "Vides luminosas surgieron con ferocidad, engullendo los árboles cercanos.",
						"vietnamese": "Những cây leo phát sáng trỗi dậy dữ dội, nuốt chửng những cây cối xung quanh.",
						"thai": "เถาวัลย์เรืองแสงพุ่งขึ้นอย่างดุเดือด กลืนกินต้นไม้รอบข้าง",
						"hindi": "चमकती बेलें उग्रता से उमड़ पड़ीं, आस-पास के पेड़ों को निगल गईं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "나는… 이 숲이자… 모든 생명. 모든 것을… 하나로 돌려놓을 것이다!",
						"english": "I am... this forest... and all life. I will return... everything... to one!",
						"japanese": "私は… この森であり… 全ての命だ。全てを… 一つに戻す！",
						"chinese": "我即是… 这片森林… 也是所有生命。我将把… 一切… 归为一体！",
						"french": "Je suis... cette forêt... et toute vie. Je ramènerai... tout... à l'unité !",
						"spanish": "Soy... este bosque... y toda la vida. ¡Lo devolveré... todo... a uno!",
						"vietnamese": "Ta là... khu rừng này... và mọi sự sống. Ta sẽ đưa... tất cả... trở về làm một!",
						"thai": "ฉันคือ... ป่านี้... และทุกชีวิต ฉันจะนำ... ทุกสิ่ง... กลับคืนสู่หนึ่งเดียว!",
						"hindi": "मैं हूँ... यह जंगल... और हर जीवन। मैं सब कुछ... एक में लौटा दूँगा!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "저게… 숲의 수호자라고? 믿을 수 없어!",
						"english": "That's... the forest guardian? I can't believe it!",
						"japanese": "あれが… 森の守護者だと？信じられない！",
						"chinese": "那就是… 森林的守护者？简直难以置信！",
						"french": "C'est... la gardienne de la forêt ? Je n'arrive pas à y croire !",
						"spanish": "¿Eso es... la guardiana del bosque? ¡No puedo creerlo!",
						"vietnamese": "Đó là... người bảo vệ rừng sao? Không thể tin được!",
						"thai": "นั่นคือ... ผู้พิทักษ์ป่าเหรอ? ไม่น่าเชื่อเลย!",
						"hindi": "वह... जंगल का संरक्षक है? मुझे विश्वास नहीं हो रहा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						1,
						3
					]
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이게… 그녀의 진정한 모습이었어… 비극적인 욕망에 잠식된…",
						"english": "This was... her true form... consumed by tragic desire...",
						"japanese": "これが… 彼女の真の姿だったのか… 悲劇的な欲望に蝕まれた…",
						"chinese": "这就是… 她真实的面貌… 被悲剧性的欲望吞噬…",
						"french": "C'était... sa véritable forme... consumée par un désir tragique...",
						"spanish": "Esta era... su verdadera forma... consumida por un deseo trágico...",
						"vietnamese": "Đây là... hình dáng thật của cô ấy... bị nuốt chửng bởi khát vọng bi thảm...",
						"thai": "นี่คือ... ร่างที่แท้จริงของเธอ... ถูกกลืนกินด้วยความปรารถนาอันน่าเศร้า...",
						"hindi": "यह था... उसका असली रूप... दुखद इच्छा से ग्रस्त..."
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "나의 부족… 나의 모든 것… 내가… 구원하려 했는데… 왜 자꾸 흩어지는 거지?! 어서… 어서 다시 채워줘… 나의… 나의… 전부를…!",
						"english": "My tribe... my everything... I tried to... save it... Why does it keep scattering?! Hurry... hurry, fill me again... My... my... all...!",
						"japanese": "私の部族… 私の全て… 救おうとしたのに… なぜ何度も散らばる？！早く… 早くまた満たしてくれ… 私の… 私の… 全てを…！",
						"chinese": "我的部落… 我的一切… 我曾试图… 拯救… 为什么它总是一再分散？！快… 快再次填满我… 我的… 我的… 全部…！",
						"french": "Ma tribu... tout ce qui m'est cher... J'ai essayé de... la sauver... Pourquoi ne cesse-t-elle de se disperser ?! Vite... vite, remplissez-me de nouveau... Mon... mon... tout... !",
						"spanish": "Mi tribu... mi todo... Intenté... salvarla... ¡¿Por qué sigue dispersándose?! Rápido... rápido, lléname de nuevo... ¡Mi... mi... todo...!",
						"vietnamese": "Bộ tộc của ta... tất cả của ta... Ta đã cố gắng... cứu rỗi... Sao nó cứ tan rã mãi?! Mau... mau lấp đầy ta lần nữa... Tất cả... của ta...!",
						"thai": "เผ่าของฉัน... ทุกสิ่งทุกอย่างของฉัน... ฉันพยายามจะ... ช่วยไว้... ทำไมมันถึงกระจัดกระจายไปเรื่อยๆ?! เร็วเข้า... เร็วเข้า เติมเต็มฉันอีกครั้ง... ของฉัน... ของฉัน... ทั้งหมด...!",
						"hindi": "मेरा कबीला... मेरा सब कुछ... मैंने बचाने की कोशिश की... क्यों यह बिखरता रहता है?! जल्दी... जल्दी, मुझे फिर से भर दो... मेरा... मेरा... सब कुछ...!"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "멈춰! 숲을 파멸시키고 있어!",
						"english": "Stop! You're destroying the forest!",
						"japanese": "やめろ！森を破壊している！",
						"chinese": "住手！你正在毁灭森林！",
						"french": "Arrête ! Tu détruis la forêt !",
						"spanish": "¡Detente! ¡Estás destruyendo el bosque!",
						"vietnamese": "Dừng lại! Ngươi đang phá hủy khu rừng!",
						"thai": "หยุดนะ! เธอกำลังทำลายป่า!",
						"hindi": "रुको! तुम जंगल को तबाह कर रहे हो!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "내 경고가… 결국… 현실이 되었군… 숲은… 멸망할 거야!",
						"english": "My warning... has finally... come true... The forest... will perish!",
						"japanese": "私の警告が… ついに… 現実になったか… 森は… 滅びるだろう！",
						"chinese": "我的警告… 终究… 成真了… 森林… 将会毁灭！",
						"french": "Mon avertissement... s'est finalement... réalisé... La forêt... périra !",
						"spanish": "Mi advertencia... finalmente... se hizo realidad... ¡El bosque... perecerá!",
						"vietnamese": "Lời cảnh báo của ta... cuối cùng... đã thành hiện thực... Khu rừng... sẽ diệt vong!",
						"thai": "คำเตือนของฉัน... ในที่สุด... ก็เป็นจริง... ป่าจะ... พินาศ!",
						"hindi": "मेरी चेतावनी... आखिर... सच हो गई... जंगल... नष्ट हो जाएगा!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "bracken",
					"type": "direction"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 광기는 모든 것을 집어삼켰다. 탐험대는 숲의 일부가 되어갔다.",
						"english": "The forest's madness consumed everything. The expedition team became part of the forest.",
						"japanese": "森の狂気が全てを飲み込んだ。探検隊は森の一部と化していった。",
						"chinese": "森林的疯狂吞噬了一切。探险队逐渐成为了森林的一部分。",
						"french": "La folie de la forêt a tout dévoré. L'équipe d'expédition devint une partie de la forêt.",
						"spanish": "La locura del bosque lo devoró todo. La expedición se convirtió en parte del bosque.",
						"vietnamese": "Sự điên cuồng của rừng đã nuốt chửng mọi thứ. Đoàn thám hiểm dần trở thành một phần của khu rừng.",
						"thai": "ความบ้าคลั่งของป่ากลืนกินทุกสิ่ง ทีมสำรวจกลายเป็นส่วนหนึ่งของป่า",
						"hindi": "जंगल के पागलपन ने सब कुछ निगल लिया। अभियान दल जंगल का हिस्सा बनता चला गया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "모두… 하나가 될지어다… 나의 품 안에서… 영원히… 아하하하…",
						"english": "All shall become one... within my embrace... forever... Ahahaha...",
						"japanese": "全てが…一つになるのだ…私の懐の中で…永遠に…あははは…",
						"chinese": "万物…皆将合一…在我怀中…永恒…啊哈哈哈…",
						"french": "Tous… ne feront qu'un… en mon sein… pour l'éternité… Ahahaha…",
						"spanish": "Todos… seréis uno… en mi abrazo… para siempre… Ajajaja…",
						"vietnamese": "Tất cả… sẽ trở thành một… trong vòng tay của ta… mãi mãi… Ahahaha…",
						"thai": "ทุกสิ่ง… จะกลายเป็นหนึ่ง… ในอ้อมกอดของข้า… ชั่วนิรันดร์… อาฮ่าฮ่าฮ่า…",
						"hindi": "सब… एक हो जाएँगे… मेरी आगोश में… हमेशा के लिए… अहाहाहा…"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직… 포기할 수 없어… 이 비극을… 끝내야 해!",
						"english": "I still… can't give up… I must end… this tragedy!",
						"japanese": "まだ…諦められない…この悲劇を…終わらせなければ！",
						"chinese": "我还…不能放弃…我必须…结束这场悲剧！",
						"french": "Je ne peux pas… encore abandonner… Je dois mettre fin… à cette tragédie !",
						"spanish": "Todavía… no puedo rendirme… ¡Debo poner fin… a esta tragedia!",
						"vietnamese": "Vẫn chưa… thể bỏ cuộc… Phải kết thúc… bi kịch này!",
						"thai": "ยัง… ยอมแพ้ไม่ได้… ต้องจบ… โศกนาฏกรรมนี้!",
						"hindi": "अभी भी… हार नहीं मान सकता… इस त्रासदी को… खत्म करना होगा!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "결국… 이렇게… 다시… 흩어지는구나… 나의… 꿈… 나의… 숲…",
						"english": "In the end... like this... scattering again... My... dream... My... forest...",
						"japanese": "結局… こうして… また… 散っていくのか… 私の… 夢… 私の… 森…",
						"chinese": "最终… 竟是这样… 再次… 散去… 我的… 梦… 我的… 森林…",
						"french": "Finalement... ainsi... se dispersant de nouveau... Mon... rêve... Ma... forêt...",
						"spanish": "Al final... así... dispersándose de nuevo... Mi... sueño... Mi... bosque...",
						"vietnamese": "Cuối cùng... lại như thế này... tan biến lần nữa... Giấc mơ của ta... Khu rừng của ta...",
						"thai": "ในที่สุด... แบบนี้... ก็ต้องกระจัดกระจายไปอีกครั้ง... ความฝันของฉัน... ป่าของฉัน...",
						"hindi": "अंततः... ऐसे ही... फिर से बिखर रहा है... मेरा... सपना... मेरा... जंगल..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 여인은 천천히 스러져갔다. 그녀의 광기는 잦아들었지만, 숲에는 짙은 침묵만이 감돌았다.",
						"english": "The Forest Lady slowly faded. Her madness subsided, but only a deep silence hung over the forest.",
						"japanese": "森の女はゆっくりと消え去った。彼女の狂気は鎮まったが、森には深い沈黙だけが漂っていた。",
						"chinese": "森林之女缓缓消逝。她的疯狂平息了，但森林中只弥漫着深沉的寂静。",
						"french": "La Dame de la Forêt s'évanouit lentement. Sa folie s'apaisa, mais seul un profond silence enveloppa la forêt.",
						"spanish": "La Dama del Bosque se desvaneció lentamente. Su locura se calmó, pero solo un profundo silencio envolvía el bosque.",
						"vietnamese": "Cô gái rừng chậm rãi tan biến. Sự điên loạn của cô đã lắng xuống, nhưng chỉ còn sự tĩnh lặng sâu sắc bao trùm khu rừng.",
						"thai": "สตรีแห่งป่าค่อยๆ เลือนหายไป ความบ้าคลั่งของเธอลดลง แต่มีเพียงความเงียบงันลึกซึ้งปกคลุมอยู่ในป่า",
						"hindi": "वन देवी धीरे-धीरे विलीन हो गई। उसका पागलपन शांत हो गया, लेकिन जंगल पर केवल गहरा सन्नाटा छा गया।"
					}
				},
				{
					"content": {
						"korean": "끝난 건가… 아니, 이 죄책감은… 지워지지 않을 거야.",
						"english": "Is it over...? No, this guilt... will never be erased.",
						"japanese": "終わったのか… いや、この罪悪感は… 消えることはないだろう。",
						"chinese": "结束了吗… 不，这份罪恶感… 将永远无法抹去。",
						"french": "Est-ce fini...? Non, cette culpabilité... ne s'effacera jamais.",
						"spanish": "¿Se acabó...? No, esta culpa... nunca se borrará.",
						"vietnamese": "Kết thúc rồi sao...? Không, cảm giác tội lỗi này... sẽ không bao giờ xóa nhòa.",
						"thai": "จบแล้วเหรอ...? ไม่สิ ความรู้สึกผิดนี้... จะไม่มีวันจางหายไป",
						"hindi": "क्या यह खत्म हो गया...? नहीं, यह अपराधबोध... कभी मिटेगा नहीं।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "구원이었을까, 파멸이었을까. 아무도 답할 수 없었다. 숲은 다시 홀로 남았다.",
						"english": "Was it salvation or ruin? No one could answer. The forest was left alone once more.",
						"japanese": "救いだったのか、破滅だったのか。誰も答えることはできなかった。森は再び一人残された。",
						"chinese": "是救赎还是毁灭？无人能答。森林再次归于寂静。",
						"french": "Était-ce le salut ou la ruine ? Nul ne put répondre. La forêt fut de nouveau seule.",
						"spanish": "¿Fue salvación o ruina? Nadie pudo responder. El bosque quedó solo de nuevo.",
						"vietnamese": "Đó là sự cứu rỗi hay sự hủy diệt? Không ai có thể trả lời. Rừng lại một mình.",
						"thai": "มันคือการไถ่บาปหรือความพินาศ? ไม่มีใครตอบได้ ป่าถูกทิ้งให้อยู่โดดเดี่ยวอีกครั้ง",
						"hindi": "क्या यह मुक्ति थी या विनाश? कोई उत्तर नहीं दे सका। जंगल फिर से अकेला रह गया।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "우리는… 무엇을 남기고 떠나는 걸까.",
						"english": "What will we leave behind... as we depart?",
						"japanese": "私たちは…何を残して去るのだろうか。",
						"chinese": "我们…会留下什么，然后离去呢？",
						"french": "Que laisserons-nous derrière nous… en partant ?",
						"spanish": "¿Qué dejaremos atrás… al marcharnos?",
						"vietnamese": "Chúng ta… sẽ để lại gì khi rời đi?",
						"thai": "เราจะทิ้งอะไรไว้เบื้องหลัง… เมื่อจากไป?",
						"hindi": "हम... क्या छोड़कर जाएँगे?"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"숲은 깊은 침묵 속에 잠겼다. 광기 어린 절규는 사라졌다.",
			"하지만 고요함 속에는, 깨져버린 꿈의 잔해가 흩날렸다.",
			"구원이었을까, 파멸이었을까. 아무도 답할 수 없었다.",
			"그저, 숲은 다시 홀로 남았다. 비극적인 어머니의 빈자리와 함께.",
			"탐험대의 죄책감은, 숲의 그림자처럼 길게 드리워졌다."
		],
		"english": [
			"The forest fell into deep silence. The mad screams were gone.",
			"But in the stillness, shattered fragments of dreams fluttered.",
			"Was it salvation, or ruin? No one could answer.",
			"The forest was simply left alone again. With the tragic emptiness of the mother.",
			"The expedition team's guilt stretched long, like the forest's shadow."
		],
		"japanese": [
			"森は深い沈黙に包まれた。狂気じみた絶叫は消え去った。",
			"しかし静寂の中には、砕け散った夢の残骸が舞い散っていた。",
			"救済だったのか、破滅だったのか。誰も答えることはできなかった。",
			"ただ、森は再び独り残された。悲劇的な母の空虚さと共に。",
			"探検隊の罪悪感は、森の影のように長く伸びた。"
		],
		"chinese": [
			"森林陷入了深沉的寂静。疯狂的尖叫声消失了。",
			"然而，在寂静中，破碎的梦想碎片随风飘散。",
			"是救赎，还是毁灭？无人能答。",
			"森林再次独自留下。伴随着悲剧母亲的空缺。",
			"探险队的罪恶感，像森林的影子一样，长久地笼罩着。"
		],
		"french": [
			"La forêt plongea dans un profond silence. Les cris de folie avaient disparu.",
			"Mais dans le calme, des fragments de rêves brisés voltigeaient.",
			"Était-ce le salut ou la ruine ? Personne ne pouvait répondre.",
			"La forêt fut simplement laissée seule à nouveau. Avec le vide tragique de la mère.",
			"La culpabilité de l'équipe d'expédition s'étendait, longue, comme l'ombre de la forêt."
		],
		"spanish": [
			"El bosque se sumió en un profundo silencio. Los gritos de locura desaparecieron.",
			"Pero en la quietud, fragmentos de sueños rotos revoloteaban.",
			"¿Fue salvación o ruina? Nadie pudo responder.",
			"Simplemente, el bosque quedó solo de nuevo. Con el trágico vacío de la madre.",
			"La culpa de la expedición se extendió, larga, como la sombra del bosque."
		],
		"vietnamese": [
			"Rừng chìm vào sự im lặng sâu thẳm. Những tiếng kêu điên dại đã biến mất.",
			"Nhưng trong sự tĩnh lặng, những mảnh vỡ của giấc mơ tan nát vẫn bay lượn.",
			"Là sự cứu rỗi, hay sự hủy diệt? Không ai có thể trả lời.",
			"Rừng lại một lần nữa cô độc. Cùng với khoảng trống bi thảm của người mẹ.",
			"Cảm giác tội lỗi của đoàn thám hiểm kéo dài, như cái bóng của khu rừng."
		],
		"thai": [
			"ป่าจมดิ่งสู่ความเงียบงัน เสียงกรีดร้องอันบ้าคลั่งได้หายไป",
			"แต่ในความเงียบสงบนั้น เศษซากของความฝันที่แตกสลายยังคงปลิวไสว",
			"เป็นการช่วยให้รอด หรือหายนะกันแน่? ไม่มีใครตอบได้",
			"เพียงแค่ ป่าถูกทิ้งให้โดดเดี่ยวอีกครั้ง พร้อมกับความว่างเปล่าอันน่าเศร้าของมารดา",
			"ความรู้สึกผิดของคณะสำรวจทอดยาว ดุจเงาของป่า"
		],
		"hindi": [
			"जंगल गहरी खामोशी में डूब गया। पागलपन भरी चीखें गायब हो गईं।",
			"पर इस शांति में, टूटे हुए सपनों के अवशेष बिखरे हुए थे।",
			"क्या यह मुक्ति थी, या विनाश? कोई जवाब नहीं दे सका।",
			"बस, जंगल फिर से अकेला रह गया। दुखद माँ की रिक्तता के साथ।",
			"अभियान दल का अपराधबोध, जंगल की छाया की तरह, लंबा खिंच गया।"
		]
	},
	"prologue": {
		"korean": [
			"고대 제단. 숲의 모든 비극이 시작된 곳.",
			"어머니의 절규는 이곳에 갇혔다.",
			"탐험대는 진실을 마주하려 한다.",
			"그러나 그 진실은, 되돌릴 수 없는 파멸을 의미했다.",
			"그리고 그들의 선택은, 숲에 더 깊은 죄책감을 새겼다."
		],
		"english": [
			"Ancient Altar. The birthplace of all the forest's tragedies.",
			"The mother's screams were trapped here.",
			"The expedition team seeks to confront the truth.",
			"But that truth meant irreversible ruin.",
			"And their choice etched deeper guilt into the forest."
		],
		"japanese": [
			"古代の祭壇。森のすべての悲劇が始まった場所。",
			"母の絶叫はここに閉じ込められた。",
			"探検隊は真実と向き合おうとする。",
			"しかしその真実は、取り返しのつかない破滅を意味した。",
			"そして彼らの選択は、森により深い罪悪感を刻み込んだ。"
		],
		"chinese": [
			"古老的祭坛。森林所有悲剧的开端。",
			"母亲的哀嚎被困于此。",
			"探险队试图面对真相。",
			"然而，那真相意味着无法挽回的毁灭。",
			"他们的选择，在森林中刻下了更深的罪恶感。"
		],
		"french": [
			"Autel ancien. Là où toutes les tragédies de la forêt ont commencé.",
			"Les cris de la mère furent piégés ici.",
			"L'équipe d'expédition tente de faire face à la vérité.",
			"Mais cette vérité signifiait une ruine irréversible.",
			"Et leur choix grava une culpabilité plus profonde dans la forêt."
		],
		"spanish": [
			"Altar antiguo. El lugar donde comenzaron todas las tragedias del bosque.",
			"Los gritos de la madre quedaron atrapados aquí.",
			"La expedición se propone enfrentar la verdad.",
			"Pero esa verdad significaba una ruina irreversible.",
			"Y su elección grabó una culpa más profunda en el bosque."
		],
		"vietnamese": [
			"Bàn thờ cổ xưa. Nơi mọi bi kịch của khu rừng bắt đầu.",
			"Tiếng gào thét của người mẹ bị giam cầm tại đây.",
			"Đoàn thám hiểm cố gắng đối mặt với sự thật.",
			"Nhưng sự thật đó lại mang ý nghĩa của sự hủy diệt không thể cứu vãn.",
			"Và lựa chọn của họ đã khắc sâu hơn nữa cảm giác tội lỗi vào khu rừng."
		],
		"thai": [
			"แท่นบูชาโบราณ จุดเริ่มต้นของโศกนาฏกรรมทั้งหมดในป่า",
			"เสียงกรีดร้องของมารดาถูกจองจำอยู่ที่นี่",
			"คณะสำรวจกำลังเผชิญหน้ากับความจริง",
			"แต่ความจริงนั้นหมายถึงความพินาศที่ไม่อาจย้อนกลับได้",
			"และทางเลือกของพวกเขาได้สลักความรู้สึกผิดที่ลึกซึ้งยิ่งขึ้นลงในป่า"
		],
		"hindi": [
			"प्राचीन वेदी। जंगल की सभी त्रासदियों का आरंभ स्थान।",
			"माँ की चीखें यहीं कैद हो गईं।",
			"अभियान दल सत्य का सामना करने की कोशिश करता है।",
			"किंतु वह सत्य, अपरिवर्तनीय विनाश का अर्थ था।",
			"और उनके चुनाव ने जंगल में और गहरा अपराधबोध अंकित कर दिया।"
		]
	}
} as const;
