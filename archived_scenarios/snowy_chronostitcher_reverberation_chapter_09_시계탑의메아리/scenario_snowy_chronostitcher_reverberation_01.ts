export const scenario_snowy_chronostitcher_reverberation_01 = {
	"scenario_id": "snowy_chronostitcher_reverberation_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "세상은 조각났다. 시간의 잔해 속에서 모든 것이 뒤틀렸다.",
						"english": "The world shattered. Everything twisted in the shards of time.",
						"japanese": "世界は砕け散った。時の残骸の中で、すべてが歪んだ。",
						"chinese": "世界支离破碎。在时间的残骸中，一切都扭曲了。",
						"french": "Le monde s'est brisé. Tout s'est déformé dans les fragments du temps.",
						"spanish": "El mundo se hizo pedazos. Todo se retorció entre los fragmentos del tiempo.",
						"vietnamese": "Thế giới tan vỡ. Mọi thứ bị bóp méo trong mảnh vụn thời gian.",
						"thai": "โลกพังทลายลง ทุกสิ่งบิดเบี้ยวในเศษซากแห่งกาลเวลา",
						"hindi": "दुनिया बिखर गई। समय के खंडहरों में सब कुछ विकृत हो गया।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "여기도… 시간이 엉망이야.",
						"english": "Here too… time is a mess.",
						"japanese": "ここも…時間がめちゃくちゃだ。",
						"chinese": "这里也…时间一团糟。",
						"french": "Ici aussi… le temps est en désordre.",
						"spanish": "Aquí también… el tiempo es un desastre.",
						"vietnamese": "Ở đây cũng… thời gian thật hỗn loạn.",
						"thai": "ที่นี่ก็… เวลาปั่นป่วนไปหมด",
						"hindi": "यहां भी… समय गड़बड़ है।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bran",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "보다시피. 벨루스가 남긴 광기는 너무 컸어.",
						"english": "As you can see. Bellus's madness was too great.",
						"japanese": "見ての通り。ベルスが残した狂気はあまりにも大きかった。",
						"chinese": "如你所见。贝鲁斯留下的疯狂太大了。",
						"french": "Comme tu le vois. La folie de Bellus était trop grande.",
						"spanish": "Como puedes ver. La locura de Bellus fue demasiado grande.",
						"vietnamese": "Như bạn thấy. Sự điên loạn Bellus để lại quá lớn.",
						"thai": "อย่างที่คุณเห็น ความบ้าคลั่งของเบลลัสช่างยิ่งใหญ่เหลือเกิน",
						"hindi": "जैसा कि तुम देख सकते हो। बेलुस का पागलपन बहुत बड़ा था।"
					},
					"emotion": "sad",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"content": {
						"korean": "난 브란. 벨루스의… 옛 동료였지.",
						"english": "I am Bran. Bellus's… former colleague.",
						"japanese": "私はブラン。ベルスの…かつての仲間だった。",
						"chinese": "我是布兰。贝尔斯的…旧同事。",
						"french": "Je suis Bran. L'ancien… collègue de Bellus.",
						"spanish": "Soy Bran. El… antiguo colega de Bellus.",
						"vietnamese": "Tôi là Bran. Đồng nghiệp cũ của Bellus.",
						"thai": "ฉันคือแบรน อดีตเพื่อนร่วมงานของเบลลัส",
						"hindi": "मैं ब्रान हूँ। बेलुस का… पूर्व सहकर्मी।"
					},
					"emotion": "base",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이 왜 여기에.",
						"english": "Why are you here?",
						"japanese": "なぜあなたがここにいる？",
						"chinese": "你为什么在这里？",
						"french": "Pourquoi êtes-vous ici ?",
						"spanish": "¿Por qué estás aquí?",
						"vietnamese": "Sao bạn lại ở đây?",
						"thai": "ทำไมคุณถึงมาอยู่ที่นี่",
						"hindi": "तुम यहां क्यों हो?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뒤틀린 시간을 어떻게든 복구하고 싶었지만… 실패했어.",
						"english": "I wanted to somehow restore the twisted time… but I failed.",
						"japanese": "歪んだ時間をどうにか修復したかったが…失敗した。",
						"chinese": "我曾想尽办法恢复扭曲的时间…但失败了。",
						"french": "Je voulais en quelque sorte restaurer le temps déformé… mais j'ai échoué.",
						"spanish": "Quise de alguna manera restaurar el tiempo retorcido… pero fallé.",
						"vietnamese": "Tôi muốn bằng cách nào đó khôi phục lại thời gian méo mó… nhưng tôi đã thất bại.",
						"thai": "ฉันอยากจะกอบกู้กาลเวลาที่บิดเบี้ยวนี้ให้กลับคืนมา… แต่ฉันล้มเหลว",
						"hindi": "मैं किसी तरह उलझे हुए समय को बहाल करना चाहता था… लेकिन मैं असफल रहा।"
					},
					"speaker": "bran",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bran",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "bran",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "시간 붕괴… 벨루스의 최종 병기가 모든 것을 망가뜨렸어.",
						"english": "Time collapse... Bellus's ultimate weapon ruined everything.",
						"japanese": "時間崩壊… ベルスの最終兵器が全てを壊した。",
						"chinese": "时间崩塌……贝鲁斯的最终兵器毁掉了一切。",
						"french": "Effondrement temporel... L'arme ultime de Bellus a tout détruit.",
						"spanish": "Colapso temporal... El arma definitiva de Bellus lo arruinó todo.",
						"vietnamese": "Sụp đổ thời gian... Vũ khí tối thượng của Bellus đã phá hủy mọi thứ.",
						"thai": "การล่มสลายของเวลา... อาวุธสุดยอดของเบลลัสทำลายทุกสิ่ง",
						"hindi": "समय का पतन... बेलस के परम हथियार ने सब कुछ बर्बाद कर दिया।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "최종 병기?",
						"english": "Ultimate weapon?",
						"japanese": "最終兵器？",
						"chinese": "最终兵器？",
						"french": "Arme ultime ?",
						"spanish": "¿Arma definitiva?",
						"vietnamese": "Vũ khí tối thượng?",
						"thai": "อาวุธสุดยอด?",
						"hindi": "परम हथियार?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "그래. 지금도 그 잔재가 세상을 뒤틀고 있어.",
						"english": "Yes. Even now, its remnants are distorting the world.",
						"japanese": "ええ。今もその残骸が世界を歪めている。",
						"chinese": "是的。直到现在，它的残余仍在扭曲着世界。",
						"french": "Oui. Même maintenant, ses vestiges tordent le monde.",
						"spanish": "Sí. Incluso ahora, sus restos están distorsionando el mundo.",
						"vietnamese": "Đúng vậy. Ngay cả bây giờ, tàn dư của nó vẫn đang bóp méo thế giới.",
						"thai": "ใช่แล้ว แม้ตอนนี้ เศษซากของมันก็ยังบิดเบือนโลกอยู่",
						"hindi": "हाँ। आज भी, इसके अवशेष दुनिया को विकृत कर रहे हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "어떤 이는 과거의 행복한 순간을 끊임없이 되뇌었다.",
						"english": "Some kept replaying happy moments from the past.",
						"japanese": "ある者は過去の幸せな瞬間を繰り返し思い出していた。",
						"chinese": "有些人不断地重温着过去幸福的瞬间。",
						"french": "Certains revivaient constamment les moments heureux du passé.",
						"spanish": "Algunos revivían constantemente momentos felices del pasado.",
						"vietnamese": "Một số người liên tục hồi tưởng lại những khoảnh khắc hạnh phúc trong quá khứ.",
						"thai": "บางคนก็เอาแต่ย้ำคิดถึงช่วงเวลาแห่งความสุขในอดีต",
						"hindi": "कुछ लोग अतीत के सुखद पलों को बार-बार दोहराते रहे।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사람들이… 고통받고 있어.",
						"english": "People are... suffering.",
						"japanese": "人々が…苦しんでいる。",
						"chinese": "人们…正在受苦。",
						"french": "Les gens… souffrent.",
						"spanish": "La gente está... sufriendo.",
						"vietnamese": "Mọi người đang… đau khổ.",
						"thai": "ผู้คนกำลัง... ทรมาน",
						"hindi": "लोग... पीड़ित हैं।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "멈춰야 해. 더 늦기 전에.",
						"english": "We must stop it. Before it's too late.",
						"japanese": "止めなければ。手遅れになる前に。",
						"chinese": "必须阻止它。趁还来得及。",
						"french": "Il faut l'arrêter. Avant qu'il ne soit trop tard.",
						"spanish": "Debemos detenerlo. Antes de que sea demasiado tarde.",
						"vietnamese": "Phải ngăn chặn nó. Trước khi quá muộn.",
						"thai": "ต้องหยุดมัน ก่อนที่จะสายเกินไป",
						"hindi": "हमें इसे रोकना होगा। इससे पहले कि बहुत देर हो जाए।"
					},
					"speaker": "bran",
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 500
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "벨루스의 최종 병기. '크로노스 리버서'의 잔재가 아직 남아있어.",
						"english": "Bellus's ultimate weapon. The remnants of 'Chronos Reverser' still remain.",
						"japanese": "ベルスの最終兵器。『クロノスリバーサー』の残骸がまだ残っている。",
						"chinese": "贝鲁斯的最终兵器。《时空逆转者》的残余仍然存在。",
						"french": "L'arme ultime de Bellus. Les vestiges du « Chronos Reverser » subsistent encore.",
						"spanish": "El arma definitiva de Bellus. Los restos del \"Chronos Reverser\" aún permanecen.",
						"vietnamese": "Vũ khí tối thượng của Bellus. Tàn dư của 'Kẻ Đảo Ngược Thời Gian' vẫn còn.",
						"thai": "อาวุธสุดยอดของเบลลัส เศษซากของ 'โครโนส รีเวอร์เซอร์' ยังคงอยู่",
						"hindi": "बेलस का परम हथियार। 'क्रोनोस रिवर्सर' के अवशेष अभी भी बाकी हैं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그게 아직도 위험해?",
						"english": "Is it still dangerous?",
						"japanese": "それはまだ危険なのか？",
						"chinese": "它还危险吗？",
						"french": "C'est toujours dangereux ?",
						"spanish": "¿Sigue siendo peligroso?",
						"vietnamese": "Nó vẫn còn nguy hiểm sao?",
						"thai": "มันยังอันตรายอยู่ไหม?",
						"hindi": "क्या यह अभी भी खतरनाक है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 불안정한 시간 에너지 속에서 언제든 폭주할 수 있어.",
						"english": "Within this unstable temporal energy, it could go berserk at any moment.",
						"japanese": "この不安定な時間エネルギーの中で、いつ暴走してもおかしくない。",
						"chinese": "在这种不稳定的时间能量中，它随时都可能失控。",
						"french": "Au milieu de cette énergie temporelle instable, il pourrait s'emballer à tout moment.",
						"spanish": "Dentro de esta energía temporal inestable, podría descontrolarse en cualquier momento.",
						"vietnamese": "Trong nguồn năng lượng thời gian bất ổn này, nó có thể bùng phát bất cứ lúc nào.",
						"thai": "ในพลังงานเวลาที่ไม่เสถียรนี้ มันสามารถคลุ้มคลั่งได้ทุกเมื่อ",
						"hindi": "इस अस्थिर लौकिक ऊर्जा के भीतर, यह किसी भी क्षण अनियंत्रित हो सकता है।"
					},
					"speaker": "bran",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…어딘가 이상해. 내 몸이…",
						"english": "...Something's wrong. My body...",
						"japanese": "…何かがおかしい。私の体が…",
						"chinese": "……哪里不对劲。我的身体……",
						"french": "...Quelque chose ne va pas. Mon corps...",
						"spanish": "...Algo anda mal. Mi cuerpo...",
						"vietnamese": "...Có gì đó không ổn. Cơ thể tôi...",
						"thai": "...มีบางอย่างผิดปกติ ร่างกายของฉัน...",
						"hindi": "...कुछ गड़बड़ है। मेरा शरीर..."
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너도 시간 능력의 영향을 받는 건가… 조심해야 해.",
						"english": "You're affected by the time ability too... Be careful.",
						"japanese": "君も時間の力に影響されているのか… 気をつけろ。",
						"chinese": "你也受到时间能力的影响了吗……小心点。",
						"french": "Toi aussi, tu es affecté par le pouvoir temporel... Fais attention.",
						"spanish": "¿Tú también estás afectado por el poder del tiempo...? Ten cuidado.",
						"vietnamese": "Cậu cũng bị ảnh hưởng bởi năng lực thời gian sao... Cẩn thận đấy.",
						"thai": "เธอก็ได้รับผลกระทบจากพลังแห่งเวลาด้วยเหรอ... ต้องระวังนะ",
						"hindi": "क्या तुम भी समय की शक्ति से प्रभावित हो रहे हो… सावधान रहना।"
					},
					"emotion": "sad",
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…알아.",
						"english": "...I know.",
						"japanese": "…分かってる。",
						"chinese": "……我知道。",
						"french": "...Je sais.",
						"spanish": "...Lo sé.",
						"vietnamese": "...Tôi biết.",
						"thai": "...รู้แล้ว",
						"hindi": "…मुझे पता है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "여기서부터는 더욱 위험해. 시간의 왜곡이 극심한 곳이야.",
						"english": "It's even more dangerous from here. Time is heavily distorted.",
						"japanese": "ここからはさらに危険だ。時間の歪みが極めてひどい場所だ。",
						"chinese": "从这里开始更危险。这里是时间扭曲极其严重的地方。",
						"french": "C'est encore plus dangereux d'ici. C'est un lieu où la distorsion temporelle est extrême.",
						"spanish": "Desde aquí es aún más peligroso. Este es un lugar donde la distorsión del tiempo es extrema.",
						"vietnamese": "Từ đây sẽ còn nguy hiểm hơn. Đây là nơi thời gian bị bóp méo cực độ.",
						"thai": "จากตรงนี้อันตรายยิ่งขึ้นไปอีก ที่นี่คือจุดที่กาลเวลาบิดเบี้ยวรุนแรงที่สุด",
						"hindi": "यहां से और भी खतरा है। यह वह जगह है जहां समय का विकृति अत्यधिक है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…알고 있어. 돌아갈 수 없다는 것도.",
						"english": "...I know. And that we can't go back.",
						"japanese": "…分かってる。もう戻れないことも。",
						"chinese": "……我知道。也知道回不去了。",
						"french": "...Je sais. Et qu'on ne peut pas revenir en arrière.",
						"spanish": "...Lo sé. Y que no podemos volver.",
						"vietnamese": "...Tôi biết. Cả việc không thể quay về nữa.",
						"thai": "...ฉันรู้ และรู้ว่าเรากลับไปไม่ได้แล้ว",
						"hindi": "…मुझे पता है। और यह भी कि हम वापस नहीं जा सकते।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "벨루스가 막으려 했던 진실… 그걸 찾아야만 해.",
						"english": "The truth Bellus tried to hide... We must find it.",
						"japanese": "ベルルスが隠そうとした真実… それを見つけなければならない。",
						"chinese": "贝尔鲁斯试图阻止的真相……我们必须找到它。",
						"french": "La vérité que Bellus a tenté de cacher... Nous devons la trouver.",
						"spanish": "La verdad que Bellus intentó ocultar... Debemos encontrarla.",
						"vietnamese": "Sự thật mà Bellus đã cố gắng ngăn cản... Chúng ta phải tìm ra nó.",
						"thai": "ความจริงที่เบลลัสพยายามจะหยุดยั้ง... เราต้องหามันให้พบ",
						"hindi": "वह सच जिसे बेलस ने रोकने की कोशिश की थी... हमें उसे ढूंढना ही होगा।"
					},
					"speaker": "bran",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뒤틀린 시계탑의 그림자가 길게 드리워졌다. 모든 것이 멈춘 듯했다.",
						"english": "The shadow of the distorted clock tower stretched long. Everything seemed to have stopped.",
						"japanese": "歪んだ時計塔の影が長く伸びた。全てが止まったかのようだった。",
						"chinese": "扭曲钟楼的影子拉得很长。一切仿佛都已停止。",
						"french": "L'ombre de la tour de l'horloge tordue s'allongeait. Tout semblait s'être arrêté.",
						"spanish": "La sombra de la retorcida torre del reloj se proyectaba larga. Todo parecía haberse detenido.",
						"vietnamese": "Bóng của tháp đồng hồ méo mó đổ dài. Mọi thứ dường như đã ngừng lại.",
						"thai": "เงาของหอนาฬิกาบิดเบี้ยวทอดยาว ทุกสิ่งดูเหมือนจะหยุดนิ่ง",
						"hindi": "विकृत घड़ी मीनार की छाया लंबी खिंच गई। सब कुछ थम सा गया था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…겨우… 여기까지인가. 하지만… 이것은 시작일 뿐…",
						"english": "...Is this... as far as I go? But... this is just the beginning...",
						"japanese": "…かろうじて…ここまでか。だが…これは始まりに過ぎない…",
						"chinese": "…仅仅…到此为止吗。但是…这只是个开始…",
						"french": "...À peine... est-ce la fin ? Mais... ce n'est que le début...",
						"spanish": "...Apenas... ¿es este el límite? Pero... esto es solo el principio...",
						"vietnamese": "...Chỉ... đến đây thôi sao? Nhưng... đây chỉ là khởi đầu...",
						"thai": "...แค่นี้...เองหรือ? แต่นี่...เป็นแค่จุดเริ่มต้นเท่านั้น...",
						"hindi": "...बस... यहीं तक? लेकिन... यह तो बस शुरुआत है..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어. 너희가 망가뜨린 시간을 되돌릴 거야.",
						"english": "It's not over yet. I'll turn back the time you've broken.",
						"japanese": "まだ終わってない。お前たちが壊した時間を元に戻す。",
						"chinese": "还没结束。我会把你们破坏的时间拨回原样。",
						"french": "Ce n'est pas encore fini. Je ramènerai le temps que vous avez brisé.",
						"spanish": "Aún no ha terminado. Revertiré el tiempo que habéis destrozado.",
						"vietnamese": "Chưa kết thúc đâu. Ta sẽ quay ngược thời gian mà các ngươi đã phá hỏng.",
						"thai": "ยังไม่จบหรอก ฉันจะย้อนเวลากลับไปแก้ไขสิ่งที่พวกแกทำลาย",
						"hindi": "अभी खत्म नहीं हुआ है। मैं तुम्हारे तोड़े हुए समय को वापस लौटा दूंगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"action": "exit",
					"speaker": "random_boss",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쓰러진 {random_boss}. 하지만 시간의 붕괴는 멈추지 않았다.",
						"english": "{random_boss} falls. But the collapse of time did not stop.",
						"japanese": "{random_boss}は倒れた。しかし、時間の崩壊は止まらなかった。",
						"chinese": "{random_boss}倒下了。但时间的崩坏并未停止。",
						"french": "{random_boss} est tombé. Mais l'effondrement du temps ne s'est pas arrêté.",
						"spanish": "{random_boss} cae. Pero el colapso del tiempo no se detuvo.",
						"vietnamese": "{random_boss} ngã xuống. Nhưng sự sụp đổ của thời gian vẫn không ngừng lại.",
						"thai": "{random_boss} ล้มลงแล้ว แต่การล่มสลายของเวลาก็ยังไม่หยุดยั้ง",
						"hindi": "{random_boss} गिर गया। लेकिन समय का पतन नहीं रुका।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "새로운 위협이… 다가오고 있었다.",
						"english": "A new threat... was approaching.",
						"japanese": "新たな脅威が…迫っていた。",
						"chinese": "新的威胁…正在逼近。",
						"french": "Une nouvelle menace... approchait.",
						"spanish": "Una nueva amenaza... se acercaba.",
						"vietnamese": "Một mối đe dọa mới... đang đến gần.",
						"thai": "ภัยคุกคามใหม่...กำลังคืบคลานเข้ามา",
						"hindi": "एक नया खतरा... करीब आ रहा था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 존재. 이 거대한 흐름을 거스를 순 없어.",
						"english": "Insignificant being. You cannot defy this colossal current.",
						"japanese": "取るに足らない存在め。この巨大な流れに逆らうことはできない。",
						"chinese": "渺小的存在。你无法逆转这股巨大的洪流。",
						"french": "Être insignifiant. Tu ne peux pas défier ce courant colossal.",
						"spanish": "Ser insignificante. No puedes desafiar esta corriente colosal.",
						"vietnamese": "Sinh vật hèn mọn. Ngươi không thể chống lại dòng chảy khổng lồ này.",
						"thai": "เจ้าผู้ไร้ค่า เจ้าไม่อาจต้านทานกระแสอันยิ่งใหญ่นี้ได้",
						"hindi": "तुच्छ प्राणी। तुम इस विशाल धारा का विरोध नहीं कर सकते।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…젠장. 하지만 여기서 멈출 순 없어.",
						"english": "...Damn it. But I can't stop here.",
						"japanese": "…くそ。だが、ここで立ち止まるわけにはいかない。",
						"chinese": "…该死。但我不能止步于此。",
						"french": "...Zut. Mais je ne peux pas m'arrêter ici.",
						"spanish": "...Maldita sea. Pero no puedo detenerme aquí.",
						"vietnamese": "...Chết tiệt. Nhưng ta không thể dừng lại ở đây.",
						"thai": "...ให้ตายสิ แต่ฉันหยุดอยู่แค่นี้ไม่ได้",
						"hindi": "...धिक्कार है। पर मैं यहाँ रुक नहीं सकता।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "언제든 다시 와라. 절망만을 얻을 뿐이지만.",
						"english": "Come again anytime. Though you'll only find despair.",
						"japanese": "いつでもまた来るがいい。絶望しか得られないだろうがな。",
						"chinese": "随时再来吧。虽然你只会得到绝望。",
						"french": "Reviens quand tu veux. Mais tu n'y trouveras que le désespoir.",
						"spanish": "Vuelve cuando quieras. Aunque solo encontrarás desesperación.",
						"vietnamese": "Cứ quay lại bất cứ lúc nào. Mặc dù ngươi sẽ chỉ nhận được sự tuyệt vọng.",
						"thai": "กลับมาได้ทุกเมื่อ แต่เจ้าจะได้รับเพียงความสิ้นหวังเท่านั้น",
						"hindi": "कभी भी वापस आओ। हालांकि तुम्हें केवल निराशा ही मिलेगी।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시간의 잔해가 폭주하는 중심. 거대한 그림자가 나타났다.",
						"english": "At the core where the remnants of time ran wild, a massive shadow appeared.",
						"japanese": "時間の残骸が暴走する中心。巨大な影が現れた。",
						"chinese": "时间残骸暴走的中心。一道巨大的身影出现了。",
						"french": "Au centre où les vestiges du temps s'emballaient, une ombre gigantesque apparut.",
						"spanish": "En el centro donde los restos del tiempo se descontrolaban, apareció una sombra gigantesca.",
						"vietnamese": "Tại trung tâm nơi tàn tích thời gian bùng nổ, một bóng đen khổng lồ xuất hiện.",
						"thai": "ใจกลางที่ซากเวลาคลุ้มคลั่ง เงาร่างมหึมาปรากฏขึ้น",
						"hindi": "समय के अवशेषों के केंद्र में, जहां वे बेकाबू हो रहे थे, एक विशाल छाया प्रकट हुई।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 자. 부서진 시간을 거스르려 하는가.",
						"english": "Fool. Do you dare defy broken time?",
						"japanese": "愚か者め。壊れた時間に逆らおうとするか。",
						"chinese": "愚蠢的家伙。你敢违抗破碎的时间吗？",
						"french": "Imbécile. Oserez-vous défier le temps brisé ?",
						"spanish": "Necio. ¿Intentas desafiar el tiempo roto?",
						"vietnamese": "Kẻ ngu ngốc. Ngươi dám chống lại thời gian đã vỡ nát ư?",
						"thai": "คนโง่เง่า เจ้ากล้าที่จะฝืนเวลาที่แตกสลายงั้นรึ",
						"hindi": "मूर्ख। क्या तुम टूटे हुए समय का विरोध करने की कोशिश कर रहे हो?"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너야말로… 시간을 더 이상 망가뜨리지 마.",
						"english": "No, you... Stop breaking time.",
						"japanese": "お前こそ… これ以上時間を壊すな。",
						"chinese": "你才……别再破坏时间了。",
						"french": "C'est toi qui... Ne détruis pas davantage le temps.",
						"spanish": "Tú eres el que... No dañes más el tiempo.",
						"vietnamese": "Ngươi mới chính là... Đừng phá hủy thời gian nữa.",
						"thai": "แกนั่นแหละ... อย่าทำลายเวลาไปมากกว่านี้อีกเลย",
						"hindi": "तुम ही हो... समय को और मत बिगाड़ो।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "모든 것은 이미 정해졌다. 발버둥 쳐봐야 소용없다.",
						"english": "Everything is already set. Struggling is futile.",
						"japanese": "全ては既に定められている。もがいても無駄だ。",
						"chinese": "一切都已注定。挣扎也无济于事。",
						"french": "Tout est déjà décidé. Lutter est inutile.",
						"spanish": "Todo ya está decidido. Es inútil que luches.",
						"vietnamese": "Mọi thứ đã được định đoạt. Vùng vẫy cũng vô ích.",
						"thai": "ทุกสิ่งได้ถูกกำหนดไว้แล้ว ดิ้นรนไปก็ไร้ประโยชน์",
						"hindi": "सब कुछ पहले से तय है। छटपटाना बेकार है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"시간의 잔해. 세상은 조각났다.",
			"과거와 미래가 뒤섞인 혼란.",
			"벨루스의 광기가 남긴 흔적은 너무 깊었다.",
			"이제, 부서진 시간을 바로잡을 차례."
		],
		"english": [
			"Shards of time. The world shattered.",
			"Chaos where past and future intertwine.",
			"Bellus's madness left too deep a mark.",
			"Now, it's time to mend the broken time."
		],
		"japanese": [
			"時の残骸。世界は砕け散った。",
			"過去と未来が混じり合う混沌。",
			"ベルスの狂気が残した痕跡はあまりにも深かった。",
			"今、壊れた時間を修復する時だ。"
		],
		"chinese": [
			"时间的残骸。世界支离破碎。",
			"过去与未来交织的混乱。",
			"贝鲁斯的疯狂留下了太深的痕迹。",
			"现在，是时候修正破碎的时间了。"
		],
		"french": [
			"Fragments du temps. Le monde s'est brisé.",
			"Un chaos où le passé et le futur s'entremêlent.",
			"La folie de Bellus a laissé une marque trop profonde.",
			"Maintenant, il est temps de réparer le temps brisé."
		],
		"spanish": [
			"Fragmentos del tiempo. El mundo se hizo pedazos.",
			"Un caos donde el pasado y el futuro se entrelazan.",
			"La locura de Bellus dejó una marca demasiado profunda.",
			"Ahora, es el momento de reparar el tiempo roto."
		],
		"vietnamese": [
			"Mảnh vụn thời gian. Thế giới tan vỡ.",
			"Hỗn loạn nơi quá khứ và tương lai đan xen.",
			"Dấu vết điên loạn của Bellus quá sâu đậm.",
			"Bây giờ, là lúc sửa chữa thời gian đã vỡ."
		],
		"thai": [
			"เศษซากแห่งกาลเวลา โลกพังทลายลง",
			"ความสับสนวุ่นวายที่อดีตและอนาคตพันกัน",
			"ร่องรอยแห่งความบ้าคลั่งของเบลลัสลึกซึ้งเกินไป",
			"ถึงเวลาแก้ไขกาลเวลาที่แตกสลายแล้ว"
		],
		"hindi": [
			"समय के खंडहर। दुनिया बिखर गई।",
			"अतीत और भविष्य का उलझा हुआ भ्रम।",
			"बेलुस के पागलपन ने बहुत गहरा निशान छोड़ा।",
			"अब, टूटे हुए समय को ठीक करने का समय है।"
		]
	}
} as const;
