export const scenario_dune_witness_aftermath_01 = {
	"scenario_id": "dune_witness_aftermath_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
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
					"content": {
						"korean": "앰버는 사막 한가운데서 자라났다. 작은 희망의 증거였다.",
						"english": "Amber grew in the heart of the desert. It was a small proof of hope.",
						"japanese": "アンバーは砂漠の真ん中で育った。小さな希望の証だった。",
						"chinese": "琥珀在沙漠中心生长。那是希望的微小证明。",
						"french": "Ambre a grandi au cœur du désert. C'était une petite preuve d'espoir.",
						"spanish": "Ámbar creció en el corazón del desierto. Era una pequeña prueba de esperanza.",
						"vietnamese": "Hổ Phách lớn lên giữa lòng sa mạc. Đó là một bằng chứng nhỏ nhoi về hy vọng.",
						"thai": "แอมเบอร์เติบโตขึ้นกลางทะเลทราย มันคือหลักฐานเล็กๆ ของความหวัง",
						"hindi": "एम्बर रेगिस्तान के बीच में उगा। यह आशा का एक छोटा सा प्रमाण था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "앰버… 무럭무럭 자라고 있구나.",
						"english": "Amber... you're growing so well.",
						"japanese": "アンバー…すくすく育っているな。",
						"chinese": "琥珀…你长得真好。",
						"french": "Ambre... tu pousses si bien.",
						"spanish": "Ámbar... estás creciendo muy bien.",
						"vietnamese": "Hổ Phách... con đang lớn thật nhanh.",
						"thai": "แอมเบอร์... เจ้าเติบโตขึ้นอย่างดี",
						"hindi": "एम्बर... तुम बहुत अच्छी तरह से बढ़ रहे हो।"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "…모래의 흐름이 심상치 않다.",
						"english": "...The flow of sand is unusual.",
						"japanese": "…砂の流れが尋常ではない。",
						"chinese": "……沙流不寻常。",
						"french": "...Le flux de sable est inhabituel.",
						"spanish": "...El flujo de arena es inusual.",
						"vietnamese": "...Dòng cát không bình thường.",
						"thai": "...กระแสทรายไม่ปกติ",
						"hindi": "...रेत का बहाव असामान्य है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야, 아미르?",
						"english": "What do you mean, Amir?",
						"japanese": "どういうことだ、アミール？",
						"chinese": "你说什么，阿米尔？",
						"french": "Que veux-tu dire, Amir ?",
						"spanish": "¿Qué quieres decir, Amir?",
						"vietnamese": "Ý anh là gì, Amir?",
						"thai": "หมายความว่าอะไร, อามีร์?",
						"hindi": "तुम्हारा क्या मतलब है, अमीर?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "시간이… 뒤틀리고 있다.",
						"english": "Time... is twisting.",
						"japanese": "時間が…歪んでいる。",
						"chinese": "时间……正在扭曲。",
						"french": "Le temps... se tord.",
						"spanish": "El tiempo... se está retorciendo.",
						"vietnamese": "Thời gian... đang bị bóp méo.",
						"thai": "เวลา... กำลังบิดเบี้ยว",
						"hindi": "समय... मुड़ रहा है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "모래 속에서 옛 환영들이 비친다.",
						"english": "Old illusions reflect in the sand.",
						"japanese": "砂の中に昔の幻影が映る。",
						"chinese": "沙中倒映着昔日的幻影。",
						"french": "D'anciennes illusions se reflètent dans le sable.",
						"spanish": "Viejas ilusiones se reflejan en la arena.",
						"vietnamese": "Những ảo ảnh xưa phản chiếu trong cát.",
						"thai": "ภาพลวงตาเก่าๆ สะท้อนอยู่ในทราย",
						"hindi": "रेत में पुरानी भ्रांतियाँ झलकती हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환영? 그게 무슨…",
						"english": "An apparition? What's that…?",
						"japanese": "幻影？それは一体…",
						"chinese": "幻象？那是什么…",
						"french": "Une apparition ? Qu'est-ce que c'est…",
						"spanish": "¿Una aparición? ¿Qué es eso…?",
						"vietnamese": "Ảo ảnh? Đó là gì…",
						"thai": "ภาพหลอน? นั่นมันอะไรกัน…",
						"hindi": "भ्रम? वह क्या है…?"
					}
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "과거의 잔해가 현재를 잠식하는 현상.",
						"english": "A phenomenon where remnants of the past encroach upon the present.",
						"japanese": "過去の残骸が現在を侵食する現象だ。",
						"chinese": "过去的残骸侵蚀现在的现象。",
						"french": "Un phénomène où les vestiges du passé dévorent le présent.",
						"spanish": "Un fenómeno donde los vestigios del pasado invaden el presente.",
						"vietnamese": "Hiện tượng tàn dư quá khứ ăn mòn hiện tại.",
						"thai": "ปรากฏการณ์ที่ซากอดีตกัดกินปัจจุบัน",
						"hindi": "अतीत के अवशेष वर्तमान को निगलने की घटना।"
					}
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "'시간의 균열'… 녀석이 다시 벌어지고 있어.",
						"english": "'Time Rift'... it's opening again.",
						"japanese": "「時の亀裂」… あれが再び開いている。",
						"chinese": "“时间裂缝”… 它又在扩大了。",
						"french": "'La Faille Temporelle'... elle s'ouvre de nouveau.",
						"spanish": "'La Grieta del Tiempo'... se está abriendo de nuevo.",
						"vietnamese": "'Vết Nứt Thời Gian'... nó lại mở ra rồi.",
						"thai": "‘รอยแยกแห่งกาลเวลา’… มันกำลังจะเปิดออกอีกครั้ง",
						"hindi": "'समय की दरार'... वह फिर से खुल रही है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "봉인된 거 아니었어? 오르벨이…",
						"english": "Wasn't it sealed? Orvelle…",
						"japanese": "封印されたんじゃなかったのか？オルベルが…",
						"chinese": "不是被封印了吗？奥尔维尔…",
						"french": "N'était-ce pas scellé ? Orvel…",
						"spanish": "¿No estaba sellado? Orvel…",
						"vietnamese": "Không phải đã bị phong ấn sao? Orvel…",
						"thai": "มันไม่ได้ถูกผนึกไว้เหรอ? ออร์เวลล์…",
						"hindi": "क्या यह सील नहीं था? ऑरवेल…"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "오르벨의 희생이 균열을 막았지만… 근원을 파괴하진 못했다.",
						"english": "Orvelle's sacrifice stopped the rift, but couldn't destroy its source.",
						"japanese": "オルベルの犠牲が亀裂を塞いだが…その根源を破壊することはできなかった。",
						"chinese": "奥尔维尔的牺牲阻止了裂缝… 但未能摧毁其根源。",
						"french": "Le sacrifice d'Orvel a stoppé la faille… mais n'a pas détruit sa source.",
						"spanish": "El sacrificio de Orvel detuvo la grieta… pero no pudo destruir su origen.",
						"vietnamese": "Sự hy sinh của Orvel đã ngăn chặn vết nứt… nhưng không thể phá hủy nguồn gốc của nó.",
						"thai": "การเสียสละของออร์เวลล์หยุดยั้งรอยแยกไว้ได้… แต่ก็ไม่อาจทำลายต้นตอของมันได้",
						"hindi": "ऑรवेल के बलिदान ने दरार को रोक दिया… पर उसके स्रोत को नष्ट नहीं कर सका।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼… 점점 더 심해진다는 거야?",
						"english": "So… it's getting worse?",
						"japanese": "では…ますます悪化するということか？",
						"chinese": "那么… 它是会越来越严重吗？",
						"french": "Alors… ça empire ?",
						"spanish": "¿Entonces… está empeorando?",
						"vietnamese": "Vậy là… nó sẽ ngày càng tệ hơn sao?",
						"thai": "ถ้าอย่างนั้น… มันจะยิ่งแย่ลงไปเรื่อยๆ เหรอ?",
						"hindi": "तो… यह और बदतर होता जाएगा?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래. 이제 사막 전체가 그 영향 아래 놓일 것이다.",
						"english": "Yes. Now the entire desert will fall under its influence.",
						"japanese": "そうだ。今や砂漠全体がその影響下に置かれるだろう。",
						"chinese": "是的。现在整个沙漠都将处于其影响之下。",
						"french": "Oui. Désormais, tout le désert sera sous son influence.",
						"spanish": "Sí. Ahora todo el desierto caerá bajo su influencia.",
						"vietnamese": "Đúng vậy. Giờ đây, toàn bộ sa mạc sẽ nằm dưới ảnh hưởng của nó.",
						"thai": "ใช่ ตอนนี้ทะเลทรายทั้งหมดจะตกอยู่ภายใต้อิทธิพลของมัน",
						"hindi": "हाँ। अब पूरा रेगिस्तान इसके प्रभाव में आ जाएगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "너는… 이 변화의 중심에 서 있다.",
						"english": "You… stand at the center of this change.",
						"japanese": "お前は…この変化の中心に立っている。",
						"chinese": "你… 正处于这场变革的中心。",
						"french": "Tu… te tiens au cœur de ce changement.",
						"spanish": "Tú… estás en el centro de este cambio.",
						"vietnamese": "Ngươi… đang đứng ở trung tâm của sự thay đổi này.",
						"thai": "เจ้า… ยืนอยู่ใจกลางของการเปลี่ยนแปลงนี้",
						"hindi": "तुम… इस बदलाव के केंद्र में खड़े हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…나는 멈출 수 없어. 앰버를 지켜야 해.",
						"english": "…I can't stop. I must protect Amber.",
						"japanese": "…俺は止まれない。アンバーを守らなければ。",
						"chinese": "…我不能停下。我必须保护安柏。",
						"french": "…Je ne peux pas m'arrêter. Je dois protéger Amber.",
						"spanish": "…No puedo detenerme. Debo proteger a Amber.",
						"vietnamese": "…Tôi không thể dừng lại. Tôi phải bảo vệ Amber.",
						"thai": "…ฉันหยุดไม่ได้ ฉันต้องปกป้องแอมเบอร์",
						"hindi": "…मैं रुक नहीं सकता। मुझे एम्बर की रक्षा करनी है।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "amir",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "과거는 집요하다. 한번 열린 시간의 문은 닫기 어려워.",
						"english": "The past is relentless. A time gate, once opened, is hard to close.",
						"japanese": "過去はしつこい。一度開いた時の扉は閉じるのが難しい。",
						"chinese": "过去是顽固的。时间之门一旦开启，便难以关闭。",
						"french": "Le passé est tenace. Une fois ouverte, une porte du temps est difficile à refermer.",
						"spanish": "El pasado es persistente. Una vez abierta, la puerta del tiempo es difícil de cerrar.",
						"vietnamese": "Quá khứ thật cố chấp. Cánh cửa thời gian một khi đã mở thì khó mà đóng lại.",
						"thai": "อดีตช่างหัวแข็ง ประตูแห่งกาลเวลาที่เปิดแล้วยากจะปิด",
						"hindi": "अतीत हठी है। समय का एक बार खुला दरवाजा बंद करना मुश्किल है।"
					},
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우린 어떻게 되는 거야?",
						"english": "What happens to us then?",
						"japanese": "じゃあ、私たちはどうなるの？",
						"chinese": "那我们怎么办？",
						"french": "Alors, qu'est-ce qui nous arrive ?",
						"spanish": "¿Entonces, qué nos pasará?",
						"vietnamese": "Vậy thì chúng ta sẽ ra sao?",
						"thai": "แล้วเราจะเป็นอย่างไร?",
						"hindi": "तो हमारा क्या होगा?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모든 것이 모래로 돌아가거나… 아니면 새로운 시간이 시작되거나.",
						"english": "Everything turns to sand... or a new era begins.",
						"japanese": "全てが砂に戻るか… あるいは新しい時間が始まるかだ。",
						"chinese": "一切都化为沙尘… 亦或开启新的时代。",
						"french": "Tout redevient sable... ou une nouvelle ère commence.",
						"spanish": "Todo se convierte en arena... o una nueva era comienza.",
						"vietnamese": "Mọi thứ trở về cát bụi... hoặc một kỷ nguyên mới bắt đầu.",
						"thai": "ทุกสิ่งจะกลับกลายเป็นผืนทราย… หรือไม่ก็ยุคสมัยใหม่จะเริ่มต้นขึ้น",
						"hindi": "सब कुछ रेत बन जाएगा... या एक नया समय शुरू होगा।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…후자는 우리가 만든다.",
						"english": "...We make the latter happen.",
						"japanese": "…後者は、私たちが作る。",
						"chinese": "…后者由我们来创造。",
						"french": "...C'est à nous de créer le second.",
						"spanish": "...Lo segundo, lo creamos nosotros.",
						"vietnamese": "...Chúng ta sẽ làm cho điều thứ hai thành hiện thực.",
						"thai": "...อย่างหลังนั้น เราจะสร้างมันขึ้นมาเอง",
						"hindi": "...बाद वाला हम बनाएंगे।"
					}
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "이미 돌이킬 수 없는 길에 접어들었다. 명심해라.",
						"english": "We're already on an irreversible path. Remember that.",
						"japanese": "もう後戻りできない道だ。心に刻め。",
						"chinese": "我们已踏上无法回头的路。铭记于心。",
						"french": "Nous sommes déjà sur une voie irréversible. Garde ça à l'esprit.",
						"spanish": "Ya hemos tomado un camino sin retorno. Recuérdalo.",
						"vietnamese": "Chúng ta đã bước vào con đường không thể quay lại. Hãy khắc ghi điều đó.",
						"thai": "เราก้าวสู่เส้นทางที่ไม่อาจย้อนคืนแล้ว จงจำไว้",
						"hindi": "हम पहले ही एक अपरिवर्तनीय रास्ते पर हैं। इसे याद रखना।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "시간은… 되돌아올 것이다.",
						"english": "Time... will return.",
						"japanese": "時は…戻るだろう。",
						"chinese": "时间… 将会逆转。",
						"french": "Le temps... reviendra.",
						"spanish": "El tiempo... regresará.",
						"vietnamese": "Thời gian... sẽ trở lại.",
						"thai": "กาลเวลา… จะหวนคืน",
						"hindi": "समय... लौट आएगा।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 소리야…!",
						"english": "What do you mean...!",
						"japanese": "何を言っているんだ…！",
						"chinese": "你在说什么…！",
						"french": "Qu'est-ce que tu racontes… !",
						"spanish": "¿¡Qué quieres decir…?!",
						"vietnamese": "Ngươi nói cái gì...!",
						"thai": "เจ้ากำลังพูดอะไรกัน…!",
						"hindi": "तुम क्या कह रहे हो...!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "거대한 모래 괴물은 시간의 파편처럼 흩어졌다.",
						"english": "The colossal sand monster scattered like fragments of time.",
						"japanese": "巨大な砂の怪物は時間の破片のように散っていった。",
						"chinese": "巨大的沙怪如时间碎片般消散了。",
						"french": "Le monstre de sable colossal s'est dispersé comme des fragments du temps.",
						"spanish": "El colosal monstruo de arena se dispersó como fragmentos del tiempo.",
						"vietnamese": "Quái vật cát khổng lồ tan biến như những mảnh vỡ thời gian.",
						"thai": "สัตว์ประหลาดทรายยักษ์สลายไปราวกับเศษเสี้ยวแห่งกาลเวลา",
						"hindi": "विशाल रेत का दानव समय के टुकड़ों की तरह बिखर गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "…겨우 시작일 뿐이다.",
						"english": "…It's only the beginning.",
						"japanese": "…これは始まりに過ぎない。",
						"chinese": "……这仅仅是个开始。",
						"french": "…Ce n'est que le début.",
						"spanish": "…Es solo el comienzo.",
						"vietnamese": "…Đây chỉ mới là khởi đầu.",
						"thai": "…นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "…यह तो बस शुरुआत है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "시간의 균열은 더욱 깊어지고 있었다.",
						"english": "The rift in time was deepening.",
						"japanese": "時間の亀裂はさらに深まっていた。",
						"chinese": "时间的裂痕正在加深。",
						"french": "La faille temporelle s'approfondissait.",
						"spanish": "La grieta del tiempo se estaba profundizando.",
						"vietnamese": "Vết nứt thời gian đang ngày càng sâu hơn.",
						"thai": "รอยแยกแห่งกาลเวลาลึกซึ้งยิ่งขึ้น",
						"hindi": "समय की दरार और गहरी होती जा रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래 폭풍 속에서 거대한 그림자가 나타났다.",
						"english": "A colossal shadow emerged from the sandstorm.",
						"japanese": "砂嵐の中から、巨大な影が現れた。",
						"chinese": "巨型黑影自沙尘暴中浮现。",
						"french": "Une ombre colossale émergea de la tempête de sable.",
						"spanish": "Una sombra colosal apareció en la tormenta de arena.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra từ bão cát.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากพายุทราย",
						"hindi": "रेत के तूफान से एक विशाल छाया निकली।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "거스를 수 없는 섭리를 거스르려는 어리석은 자.",
						"english": "Foolish one, trying to defy the irresistible providence.",
						"japanese": "抗えぬ摂理に逆らおうとする愚か者め。",
						"chinese": "愚蠢之人，妄图逆天改命。",
						"french": "Imbécile, tu tentes de défier la providence inéluctable.",
						"spanish": "Necio, intentando desafiar la providencia ineludible.",
						"vietnamese": "Kẻ ngốc, dám chống lại thiên mệnh không thể cưỡng lại.",
						"thai": "เจ้าผู้โง่เขลา ที่พยายามฝืนลิขิตสวรรค์ที่ไม่อาจต้านทาน",
						"hindi": "मूर्ख, अटल विधान को चुनौती देने की कोशिश कर रहा है।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너의 희망은 이 사막에서 사라질 것이다.",
						"english": "Your hope will vanish in this desert.",
						"japanese": "お前の希望は、この砂漠で消え失せるだろう。",
						"chinese": "你的希望将在这片沙漠中消逝。",
						"french": "Ton espoir s'évanouira dans ce désert.",
						"spanish": "Tu esperanza se desvanecerá en este desierto.",
						"vietnamese": "Hy vọng của ngươi sẽ tan biến trong sa mạc này.",
						"thai": "ความหวังของเจ้าจะเลือนหายไปในทะเลทรายแห่งนี้",
						"hindi": "तेरी आशा इस रेगिस्तान में मिट जाएगी।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "희망은 사라지지 않아. 네가 막을 수 없어.",
						"english": "Hope doesn't vanish. You can't stop it.",
						"japanese": "希望は消えない。お前には止められない。",
						"chinese": "希望永不消逝。你无法阻止。",
						"french": "L'espoir ne s'éteint pas. Tu ne peux pas l'arrêter.",
						"spanish": "La esperanza no se desvanece. No puedes detenerla.",
						"vietnamese": "Hy vọng không biến mất. Ngươi không thể ngăn cản.",
						"thai": "ความหวังไม่มีวันจางหาย เจ้าหยุดมันไม่ได้",
						"hindi": "आशा मिटती नहीं। तुम इसे रोक नहीं सकते।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "사막의 섭리가 모든 것을 삼켰다.",
						"english": "The desert's providence swallowed everything.",
						"japanese": "砂漠の摂理がすべてを飲み込んだ。",
						"chinese": "沙漠的法则吞噬了一切。",
						"french": "La providence du désert a tout englouti.",
						"spanish": "La providencia del desierto lo devoró todo.",
						"vietnamese": "Sự an bài của sa mạc đã nuốt chửng mọi thứ.",
						"thai": "พรหมลิขิตแห่งทะเลทรายกลืนกินทุกสิ่ง",
						"hindi": "रेगिस्तान की व्यवस्था ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "미약한 존재여… 순리대로 돌아가라.",
						"english": "Weak entity… return to the natural order.",
						"japanese": "弱き者よ…摂理に還れ。",
						"chinese": "弱小的存在啊……回归本源吧。",
						"french": "Faible entité… retourne à l'ordre naturel.",
						"spanish": "Débil criatura… regresa al orden natural.",
						"vietnamese": "Hỡi kẻ yếu ớt… hãy trở về với lẽ tự nhiên đi.",
						"thai": "เจ้าผู้ไร้กำลัง… จงกลับคืนสู่กฎเกณฑ์แห่งธรรมชาติซะ",
						"hindi": "हे तुच्छ प्राणी… प्रकृति के नियम में लौट जाओ।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직… 끝나지 않았어.",
						"english": "…It's not… over yet.",
						"japanese": "…まだ…終わっていない。",
						"chinese": "……还没……结束。",
						"french": "…Ce n'est pas… encore fini.",
						"spanish": "…Todavía… no ha terminado.",
						"vietnamese": "…Vẫn chưa… kết thúc đâu.",
						"thai": "…ยัง…ไม่จบ",
						"hindi": "…यह… अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"앰버의 작은 싹, 사막에 희망을 속삭였다.",
			"하지만 고요 속엔 불안이 숨 쉬고, 시간이 비틀린다.",
			"현실과 환영, 경계가 흐려지고 과거가 현재를 침범한다.",
			"균열은 다시 열리고, 우리는 모래 속에 갇혔다."
		],
		"english": [
			"Amber's tiny sprout whispered hope in the desert.",
			"But unease breathes in the calm, and time twists.",
			"Reality and illusion, boundaries blur, and the past invades the present.",
			"The rift reopens, and we are trapped in the sand."
		],
		"japanese": [
			"アンバーの小さな芽が、砂漠に希望を囁いた。",
			"しかし静寂の中には不安が潜み、時間が歪む。",
			"現実と幻影、境界が曖昧になり、過去が現在を侵食する。",
			"亀裂は再び開き、私たちは砂の中に閉じ込められた。"
		],
		"chinese": [
			"琥珀的嫩芽，在沙漠中低语着希望。",
			"然而，不安在宁静中滋生，时间扭曲。",
			"现实与幻象，界限模糊，过去侵蚀现在。",
			"裂隙再次开启，我们被困在沙中。"
		],
		"french": [
			"La petite pousse d'Ambre murmurait l'espoir dans le désert.",
			"Mais l'inquiétude respire dans le calme, et le temps se tord.",
			"Réalité et illusion, les frontières s'estompent, et le passé envahit le présent.",
			"La faille se rouvre, et nous sommes piégés dans le sable."
		],
		"spanish": [
			"El pequeño brote de Ámbar susurraba esperanza en el desierto.",
			"Pero la inquietud respira en la calma, y el tiempo se retuerce.",
			"Realidad e ilusión, los límites se difuminan, y el pasado invade el presente.",
			"La grieta se reabre, y estamos atrapados en la arena."
		],
		"vietnamese": [
			"Mầm non bé nhỏ của Hổ Phách thì thầm hy vọng trong sa mạc.",
			"Nhưng sự bất an ẩn chứa trong tĩnh lặng, và thời gian méo mó.",
			"Hiện thực và ảo ảnh, ranh giới mờ nhạt, và quá khứ xâm chiếm hiện tại.",
			"Vết nứt lại mở ra, và chúng ta mắc kẹt trong cát."
		],
		"thai": [
			"หน่ออ่อนของแอมเบอร์กระซิบความหวังในทะเลทราย",
			"แต่ความไม่สบายใจซ่อนอยู่ในความสงบ และกาลเวลากำลังบิดเบี้ยว",
			"ความจริงและภาพลวงตา เส้นแบ่งพร่ามัว และอดีตรุกรานปัจจุบัน",
			"รอยแยกเปิดออกอีกครั้ง และเราติดอยู่ในทราย"
		],
		"hindi": [
			"एम्बर के छोटे अंकुर ने रेगिस्तान में आशा का फुसफुसाहट की।",
			"लेकिन शांति में बेचैनी सांस लेती है, और समय मुड़ता है।",
			"वास्तविकता और भ्रम, सीमाएं धुंधली होती हैं, और अतीत वर्तमान पर हावी होता है।",
			"दरारें फिर से खुलती हैं, और हम रेत में फंस गए।"
		]
	}
} as const;
