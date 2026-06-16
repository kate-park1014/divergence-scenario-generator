export const scenario_snowy_anya_64_05 = {
	"scenario_id": "snowy_anya_64_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "pool_109"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "빛을 따라온 길. 작은 발자국이 같은 자리를 빙글빙글 돌고 있었다.",
						"english": "The path followed by light. Tiny footsteps circled in the same spot.",
						"japanese": "光を辿った道。小さな足跡が同じ場所をぐるぐると回っていた。",
						"chinese": "循光而至的路径。细小的足迹在原地打着转。",
						"french": "Le chemin suivi par la lumière. De minuscules pas tournaient en rond au même endroit.",
						"spanish": "El camino seguido por la luz. Pequeños pasos daban vueltas en el mismo lugar.",
						"vietnamese": "Con đường theo ánh sáng. Dấu chân nhỏ quanh quẩn ở cùng một chỗ.",
						"thai": "เส้นทางที่แสงนำพามา รอยเท้าเล็กๆ เดินวนเวียนอยู่ที่เดิม",
						"hindi": "प्रकाश का अनुसरण करने वाला मार्ग। छोटे-छोटे पदचिह्न एक ही स्थान पर गोल-गोल घूम रहे थे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…계속 이곳을 맴돈 흔적이야.",
						"english": "…Traces show it's been circling here.",
						"japanese": "…ずっとここをぐるぐる回っていた痕跡だ。",
						"chinese": "……一直在此徘徊的痕迹。",
						"french": "…Des traces de son errance ici.",
						"spanish": "…Rastros de haber estado rondando aquí.",
						"vietnamese": "…Dấu vết cho thấy nó cứ quanh quẩn ở đây.",
						"thai": "…ร่องรอยที่วนเวียนอยู่ที่นี่ไม่หยุด",
						"hindi": "…यहीं मंडराने के निशान हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "어딘가로 향하지 못하고, 그저 같은 자리만 맴돌았네….",
						"english": "Unable to move on, it just circled the same spot….",
						"japanese": "どこへも行けず、ただ同じ場所をぐるぐる回っていたんだね…。",
						"chinese": "无法前往何处，只是在原地徘徊……。",
						"french": "Incapable d'aller quelque part, il a juste tourné en rond au même endroit….",
						"spanish": "Incapaz de ir a ninguna parte, solo dio vueltas en el mismo lugar….",
						"vietnamese": "Không thể đi đâu, nó cứ quanh quẩn ở một chỗ….",
						"thai": "ไปไหนไม่ได้ ได้แต่หมุนวนอยู่ที่เดิม…",
						"hindi": "कहीं जा न सका, बस उसी जगह पर घूमता रहा…।"
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
					"speaker": "inka",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "서리꽃들이… 전부 바깥쪽을 보고 피어 있어.",
						"english": "The frost flowers… are all facing outwards as they bloom.",
						"japanese": "霜の花が…全部外側を向いて咲いている。",
						"chinese": "霜花们……全部都朝外盛开着。",
						"french": "Les fleurs de givre… sont toutes écloses tournées vers l'extérieur.",
						"spanish": "Las flores de escarcha… están todas floreciendo hacia afuera.",
						"vietnamese": "Những bông hoa băng… đều nở hướng ra ngoài.",
						"thai": "ดอกไม้น้ำแข็ง… ทั้งหมดหันหน้าบานออกไปข้างนอก",
						"hindi": "पाला-पुष्प… सभी बाहर की ओर खिल रहे हैं।"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "설원 바깥이라면… 이리로 온 방향인데.",
						"english": "Outside the snowfield… that's the way we came.",
						"japanese": "雪原の外側なら…私たちが来た方向だ。",
						"chinese": "如果是雪原外面……那就是我们来的方向。",
						"french": "Si c'est en dehors du champ de neige… c'est la direction d'où nous sommes venus.",
						"spanish": "Si es fuera del campo de nieve… esa es la dirección por la que vinimos.",
						"vietnamese": "Nếu là bên ngoài tuyết nguyên… đó là hướng chúng ta đã đi tới.",
						"thai": "ถ้าเป็นด้านนอกทุ่งหิมะ… ก็เป็นทิศที่เรามานี่นา",
						"hindi": "अगर यह बर्फीले मैदान के बाहर है… तो वह दिशा है जहाँ से हम आए थे।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…누군가를 기다리는 걸까. 돌아올 이를 위해.",
						"english": "…Are they waiting for someone? For someone to come back.",
						"japanese": "…誰かを待っているのだろうか。戻ってくる人のために。",
						"chinese": "……是在等待某个人吗。为了那个会回来的人。",
						"french": "…Attendent-elles quelqu'un ? Pour celui qui reviendra.",
						"spanish": "¿…Están esperando a alguien? Por aquel que regresará.",
						"vietnamese": "…Có phải đang đợi ai đó không? Để một người quay trở lại.",
						"thai": "…กำลังรอใครบางคนอยู่หรือเปล่านะ? เพื่อคนที่กำลังจะกลับมา",
						"hindi": "…क्या वे किसी का इंतजार कर रहे हैं? जो वापस आएगा, उसके लिए।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "우리를 인도하다가도, 자꾸 저기로 되돌아가.",
						"english": "It guides us, but keeps returning there.",
						"japanese": "私たちを導きながらも、しきりにあそこへ引き返してしまう。",
						"chinese": "即使引导着我们，也总是回到那里去。",
						"french": "Même en nous guidant, il retourne toujours là-bas.",
						"spanish": "Aunque nos guía, siempre regresa allí.",
						"vietnamese": "Dù dẫn lối cho chúng ta, nhưng nó cứ quay lại đó.",
						"thai": "ถึงจะนำทางเราไป แต่ก็กลับไปที่นั่นอีก",
						"hindi": "यह हमें रास्ता दिखाता है, फिर भी बार-बार वहीं लौट जाता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "…떠날 수가 없는 거구나. 여기서 기다려야 하니까.",
						"english": "…So it can't leave. It must wait here.",
						"japanese": "…離れられないんだね。ここで待っていなければならないから。",
						"chinese": "……原来是无法离开啊。因为它必须在这里等待。",
						"french": "…Donc il ne peut pas partir. Parce qu'il doit attendre ici.",
						"spanish": "…Entonces no puede irse. Porque tiene que esperar aquí.",
						"vietnamese": "…Vậy là không thể rời đi. Vì nó phải chờ ở đây.",
						"thai": "…ไปไหนไม่ได้สินะ เพราะต้องรออยู่ที่นี่",
						"hindi": "…तो यह जा नहीं सकता। क्योंकि इसे यहीं इंतजार करना है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "대체 누구를?",
						"english": "Who, though?",
						"japanese": "一体誰を？",
						"chinese": "到底是谁？",
						"french": "Qui, au juste ?",
						"spanish": "¿A quién, entonces?",
						"vietnamese": "Rốt cuộc là ai?",
						"thai": "ใครกันแน่?",
						"hindi": "आखिरकार किसका?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "inka",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "발자국이… 아주 작아.",
						"english": "The footprints… are very small.",
						"japanese": "足跡が…とても小さい。",
						"chinese": "脚印……非常小。",
						"french": "Les empreintes de pas… sont très petites.",
						"spanish": "Las huellas… son muy pequeñas.",
						"vietnamese": "Dấu chân… rất nhỏ.",
						"thai": "รอยเท้า… เล็กมาก",
						"hindi": "पैरों के निशान… बहुत छोटे हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "이건… 어린아이의 발자국인데. 수호자가 아니라….",
						"english": "These are… a child's footprints. Not a guardian's….",
						"japanese": "これは…子供の足跡だ。守護者ではなく…。",
						"chinese": "这……是小孩子的脚印。不是守护者……。",
						"french": "Ce sont… les empreintes d'un enfant. Pas celles d'un gardien….",
						"spanish": "Estas son… huellas de un niño. No de un guardián….",
						"vietnamese": "Đây là… dấu chân của trẻ con. Không phải của người bảo hộ….",
						"thai": "นี่มัน… รอยเท้าเด็กนี่นา ไม่ใช่ของผู้พิทักษ์…",
						"hindi": "यह… एक बच्चे के पैरों के निशान हैं। किसी संरक्षक के नहीं…।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "길 잃은 아이가, 여기서 기다려왔다는 거야?",
						"english": "A lost child, waiting here all this time?",
						"japanese": "迷子の子供が、ずっとここで待っていたというのか？",
						"chinese": "一个迷路的孩子，一直在这里等着吗？",
						"french": "Un enfant perdu, qui attendait ici depuis tout ce temps ?",
						"spanish": "¿Un niño perdido, esperando aquí todo este tiempo?",
						"vietnamese": "Một đứa trẻ lạc, đợi ở đây suốt bấy lâu nay sao?",
						"thai": "เด็กหลงทาง, รออยู่ที่นี่มาตลอดเลยเหรอ?",
						"hindi": "एक खोया हुआ बच्चा, इतने समय से यहाँ इंतज़ार कर रहा था?"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "…기다릴게요. …꼭, 다시….",
						"english": "...I'll wait. ...Surely, again...",
						"japanese": "…待っています。…必ず、また…",
						"chinese": "…我会等的。…一定会，再次…",
						"french": "...J'attendrai. ...Sûrement, encore...",
						"spanish": "...Esperaré. ...Seguro, de nuevo...",
						"vietnamese": "...Con sẽ đợi. ...Chắc chắn, lần nữa...",
						"thai": "...ฉันจะรอ ...แน่นอน, อีกครั้ง...",
						"hindi": "...मैं इंतज़ार करूँगा। ...ज़रूर, फिर से..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그렇게 오랜 시간을… 헛되이….",
						"english": "All that time... in vain...",
						"japanese": "あれほど長い時間を…無駄に…",
						"chinese": "那么长的时间…白白地…",
						"french": "Tout ce temps... en vain...",
						"spanish": "Tanto tiempo... en vano...",
						"vietnamese": "Bấy nhiêu thời gian… uổng phí…",
						"thai": "เวลาอันยาวนานนั้น... ไร้ประโยชน์...",
						"hindi": "इतना लंबा समय... व्यर्थ में..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "가족을 향한 마음은, 사라지지 않는 불꽃 같아서.",
						"english": "The heart for family is like an unextinguishable flame.",
						"japanese": "家族への想いは、消えない炎のようだから。",
						"chinese": "对家人的心意，就像永不熄灭的火焰。",
						"french": "L'amour pour la famille est comme une flamme inextinguible.",
						"spanish": "El amor por la familia es como una llama inextinguible.",
						"vietnamese": "Tấm lòng hướng về gia đình, giống như ngọn lửa không bao giờ tắt.",
						"thai": "ความรู้สึกที่มีต่อครอบครัวนั้น เหมือนเปลวไฟที่ไม่ดับมอด",
						"hindi": "परिवार के लिए दिल, एक कभी न बुझने वाली लौ जैसा है।"
					},
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "작은 빛은 사라졌지만, 그 기다림의 흔적은 여전히 마음속에 남았다.",
						"english": "The faint light faded, but the lingering wait remained in my heart.",
						"japanese": "小さな光は消えたが、その待ち続けた痕跡は心に残った。",
						"chinese": "微光消逝，等待的痕迹却仍留在心中。",
						"french": "La faible lumière a disparu, mais son attente a laissé une trace dans mon cœur.",
						"spanish": "La tenue luz se extinguió, mas la huella de su espera perdura en mi corazón.",
						"vietnamese": "Ánh sáng nhỏ đã tan biến, nhưng dấu vết của sự chờ đợi vẫn còn lại trong tim.",
						"thai": "แสงน้อยนิดเลือนหายไปแล้ว แต่ร่องรอยแห่งการรอคอยยังคงอยู่กลางใจ",
						"hindi": "नन्हीं सी लौ बुझ गई, पर इंतज़ार की टीस दिल में रह गई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "다른 곳으로 향하는 새로운 길이 열렸다. 하지만 여운은 길었다.",
						"english": "A new path opened, but the echo lingered.",
						"japanese": "新たな道が開かれた。だが、その余韻は長く続いた。",
						"chinese": "通往他处的新路已开启，但余味绵长。",
						"french": "Un nouveau chemin s'est ouvert ailleurs. Pourtant, l'écho était long.",
						"spanish": "Se abrió un nuevo camino hacia otro lugar. No obstante, el eco perduró.",
						"vietnamese": "Một lối đi mới đến nơi khác đã mở ra. Song dư vị còn vương vấn.",
						"thai": "ทางใหม่สู่ที่อื่นได้เปิดแล้ว แต่ความรู้สึกยังคงค้างนาน",
						"hindi": "एक नई राह कहीं और खुल गई। पर छाप गहरी रही।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "아직, 안 왔어요. …막지 마요.",
						"english": "Not yet, they're not here. ...Don't stop me.",
						"japanese": "まだ、来てない。…邪魔しないで。",
						"chinese": "还没到。…别阻止我。",
						"french": "Pas encore. …Ne m'arrêtez pas.",
						"spanish": "Aún no ha llegado. ...No me detengas.",
						"vietnamese": "Vẫn chưa tới. ...Đừng cản tôi.",
						"thai": "ยังไม่มา... อย่าขวางเลย",
						"hindi": "अभी तक नहीं आए। ...मुझे मत रोको।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…다시 돌아올 거야. 이 기다림을 끝내러.",
						"english": "...I'll be back. To end this waiting.",
						"japanese": "…また戻ってくる。この待ちを終わらせるために。",
						"chinese": "…我还会回来。来结束这场等待。",
						"french": "...Je reviendrai. Pour mettre fin à cette attente.",
						"spanish": "...Regresaré. Para poner fin a esta espera.",
						"vietnamese": "...Sẽ trở lại. Để chấm dứt chờ đợi này.",
						"thai": "...จะกลับมา เพื่อจบการรอคอยนี้",
						"hindi": "...मैं लौट आऊँगा। इस इंतज़ार को खत्म करने।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…멈출 수 없어요.",
						"english": "...I can't stop.",
						"japanese": "…止められないよ。",
						"chinese": "…我不能停。",
						"french": "...Je ne peux pas m'arrêter.",
						"spanish": "...No puedo detenerme.",
						"vietnamese": "...Không thể ngừng lại.",
						"thai": "...ฉันหยุดไม่ได้",
						"hindi": "...रुक नहीं सकता।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "작은 빛이 가늘게 떨었다. 오래된 외로움이 공간을 채웠다.",
						"english": "A faint light trembled. An old loneliness filled the space.",
						"japanese": "小さな光が震えた。古き孤独が空間を満たしていた。",
						"chinese": "微弱的光芒颤抖着。陈旧的孤独弥漫了整个空间。",
						"french": "Une faible lumière tremblait. Une vieille solitude emplissait l'espace.",
						"spanish": "Una luz tenue tembló. Una antigua soledad llenó el espacio.",
						"vietnamese": "Ánh sáng nhỏ run rẩy. Nỗi cô đơn cũ kỹ tràn ngập không gian.",
						"thai": "แสงน้อยๆ สั่นระริก ความเหงาเก่าแก่เติมเต็มพื้นที่",
						"hindi": "एक हल्की रोशनी काँपी। एक पुरानी उदासी ने जगह भर दी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…아직 안 왔어요. 길을 밝혀두면, 꼭 돌아올 거예요.",
						"english": "...Still hasn't come. If I keep the path lit, they'll surely return.",
						"japanese": "…まだ来ていません。道を照らしておけば、きっと戻ってきます。",
						"chinese": "…还没来。如果我把路照亮，他们一定会回来的。",
						"french": "...Il n'est pas encore venu. Si je garde le chemin éclairé, il reviendra sûrement.",
						"spanish": "...Todavía no ha llegado. Si mantengo el camino iluminado, seguro que volverá.",
						"vietnamese": "...Vẫn chưa đến. Nếu tôi giữ cho con đường sáng, họ chắc chắn sẽ trở về.",
						"thai": "...ยังไม่มาเลย ถ้าฉันเปิดไฟนำทางไว้ พวกเขาต้องกลับมาแน่",
						"hindi": "...अभी तक नहीं आया। अगर मैं रास्ता रोशन रखूँगा, तो वे ज़रूर लौटेंगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "길을 인도한 게, 너 혼자 켜둔 등불이었다니.",
						"english": "To think that the path was guided by your lone lantern.",
						"japanese": "道を導いたのが、君ひとりで灯したランタンだったとは。",
						"chinese": "没想到，指引道路的，竟然是你独自点亮的灯笼。",
						"french": "Dire que le chemin était guidé par ta seule lanterne allumée.",
						"spanish": "Pensar que el camino fue guiado por tu única linterna encendida.",
						"vietnamese": "Con đường được dẫn lối bởi ngọn đèn mà con thắp một mình sao.",
						"thai": "คิดไม่ถึงเลยว่าทางที่นำไปคือตะเกียงที่เจ้าจุดไว้เพียงลำพัง",
						"hindi": "यह जानकर कि रास्ता तुम्हारी अकेली लालटेन से रोशन हुआ था।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "inka",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "아이가… 홀로 얼마나 오랫동안….",
						"english": "The child... alone for so long...",
						"japanese": "あの子が…ひとりでどれほどの時間…",
						"chinese": "孩子…独自一人，等了多久…",
						"french": "L'enfant... seul depuis si longtemps...",
						"spanish": "El niño... solo durante tanto tiempo...",
						"vietnamese": "Đứa bé… một mình, đã bao lâu rồi…",
						"thai": "เด็กคนนั้น... อยู่คนเดียวมานานเท่าไหร่แล้วนะ...",
						"hindi": "बच्चा... इतने समय से अकेला..."
					},
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "기다리면… 올 거예요. 엄마랑, 아빠랑….",
						"english": "If I wait... they'll come. Mom and Dad...",
						"japanese": "待っていれば…来るわ。ママと、パパと…",
						"chinese": "如果我等…他们会来的。妈妈和爸爸…",
						"french": "Si j'attends... ils viendront. Maman et Papa...",
						"spanish": "Si espero... vendrán. Mamá y papá...",
						"vietnamese": "Nếu con đợi… họ sẽ đến. Mẹ và bố…",
						"thai": "ถ้าฉันรอ... พวกเขาจะมา แม่กับพ่อ...",
						"hindi": "अगर मैं इंतज़ार करूँ... तो वे आ जाएँगे। माँ और पापा..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "여기서 계속 기다리게 둘 수는 없어.",
						"english": "I can't let them keep waiting here.",
						"japanese": "ここでずっと待たせるわけにはいかない。",
						"chinese": "不能让他们一直在这里等着。",
						"french": "Je ne peux pas les laisser attendre ici indéfiniment.",
						"spanish": "No puedo dejar que sigan esperando aquí.",
						"vietnamese": "Không thể để họ tiếp tục đợi ở đây.",
						"thai": "จะให้พวกเขารออยู่ที่นี่ตลอดไปไม่ได้",
						"hindi": "मैं उन्हें यहाँ इंतज़ार करते रहने नहीं दे सकता।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"서리꽃이 피어나는 길. 빛을 따라온 길은, 끝없는 기다림의 흔적이었다.",
			"아주 작은 발자국은 한 곳을 맴돌며 누구를 기다려왔을까.",
			"길을 밝히는 빛은, 어쩌면 가장 외로운 등불이었을지도 모른다.",
			"그리고 그 진실은, 너무나 아픈 것이었다."
		],
		"english": [
			"The path where frost flowers bloom. The path followed by light was a trace of endless waiting.",
			"Whose tiny footsteps lingered in one spot, waiting for someone?",
			"The light illuminating the path might have been the loneliest lamp of all.",
			"And that truth was too painful."
		],
		"japanese": [
			"霜の花が咲く道。光を辿った道は、終わりのない待ち時間の痕跡だった。",
			"誰を待っていたのだろうか、小さな足跡が一箇所をさまよっていた。",
			"道を照らす光は、もしかしたら最も孤独な灯火だったのかもしれない。",
			"そしてその真実は、あまりにも痛ましいものだった。"
		],
		"chinese": [
			"霜花绽放之路。循光而至的路径，是无尽等待的痕迹。",
			"谁的细小足迹，曾在一处徘徊，等待着谁？",
			"照亮道路的光，或许是最孤独的灯火。",
			"而那个真相，是如此的痛苦。"
		],
		"french": [
			"Le chemin où fleurissent les fleurs de givre. Le chemin suivi par la lumière était une trace d'attente infinie.",
			"De qui étaient ces minuscules pas qui s'attardaient en un seul endroit, attendant quelqu'un ?",
			"La lumière éclairant le chemin était peut-être la lampe la plus solitaire.",
			"Et cette vérité était trop douloureuse."
		],
		"spanish": [
			"El camino donde florecen las flores de escarcha. El camino seguido por la luz era una huella de espera interminable.",
			"¿Los diminutos pasos de quién deambulaban en un solo lugar, esperando a alguien?",
			"La luz que iluminaba el camino quizás fue la lámpara más solitaria.",
			"Y esa verdad era demasiado dolorosa."
		],
		"vietnamese": [
			"Con đường nơi hoa sương nở. Con đường theo ánh sáng là dấu vết của sự chờ đợi vô tận.",
			"Dấu chân bé xíu ấy đã quanh quẩn một chỗ, chờ đợi ai?",
			"Ánh sáng soi đường, có lẽ là ngọn đèn cô độc nhất.",
			"Và sự thật ấy, thật quá đỗi đau lòng."
		],
		"thai": [
			"เส้นทางที่ดอกไม้น้ำค้างแข็งบานสะพรั่ง เส้นทางที่แสงนำพามาเป็นร่องรอยของการรอคอยที่ไม่สิ้นสุด",
			"รอยเท้าเล็กๆ วนเวียนอยู่กับที่ เฝ้ารอใครบางคนมานานแค่ไหนแล้วนะ",
			"แสงที่ส่องสว่างเส้นทาง อาจเป็นตะเกียงที่โดดเดี่ยวที่สุดก็เป็นได้",
			"และความจริงนั้น ช่างเจ็บปวดเหลือเกิน"
		],
		"hindi": [
			"वह मार्ग जहाँ पाले के फूल खिलते हैं। प्रकाश का अनुसरण करने वाला मार्ग अंतहीन प्रतीक्षा का निशान था।",
			"किसके छोटे-से पदचिह्न एक ही स्थान पर रुके थे, किसी का इंतजार कर रहे थे?",
			"मार्ग को रोशन करने वाली रोशनी, शायद सबसे अकेली लालटेन थी।",
			"और वह सच बहुत दर्दनाक था।"
		]
	},
	"epilogue": {
		"korean": [
			"작은 빛은 꺼졌다. 길을 밝히던 등불은 이제 더 이상 없다.",
			"길 잃은 아이의 외로운 기다림은, 끝난 것일까.",
			"혹은, 또 다른 고통으로 번진 것일까.",
			"모든 것이 명확해졌지만, 마음은 더욱 무거웠다.",
			"이 길의 끝에, 우리가 찾던 진실이 있을까."
		],
		"english": [
			"The small light went out. The lamp that lit the path is no more.",
			"Has the lost child's lonely waiting come to an end?",
			"Or has it spread into another suffering?",
			"Everything became clear, but my heart grew heavier.",
			"At the end of this path, will we find the truth we sought?"
		],
		"japanese": [
			"小さな光は消えた。道を照らしていた灯火は、もうそこにはない。",
			"道に迷った子供の孤独な待ち時間は、終わったのだろうか。",
			"あるいは、また別の苦痛へと広がってしまったのだろうか。",
			"全てが明確になったが、心はさらに重くなった。",
			"この道の終わりに、私たちが探していた真実があるのだろうか。"
		],
		"chinese": [
			"微光熄灭了。曾照亮道路的灯火，已不复存在。",
			"迷路孩子的孤独等待，是否已然终结？",
			"抑或，是蔓延成了另一种痛苦？",
			"一切都已明朗，但内心却更加沉重。",
			"这条路的尽头，会有我们寻找的真相吗？"
		],
		"french": [
			"La petite lumière s'est éteinte. La lampe qui éclairait le chemin n'est plus.",
			"L'attente solitaire de l'enfant perdu a-t-elle pris fin ?",
			"Ou s'est-elle transformée en une autre souffrance ?",
			"Tout était clair, mais le cœur était d'autant plus lourd.",
			"Au bout de ce chemin, y aura-t-il la vérité que nous cherchions ?"
		],
		"spanish": [
			"La pequeña luz se apagó. La lámpara que iluminaba el camino ya no existe.",
			"¿Ha terminado la solitaria espera del niño perdido?",
			"¿O se ha extendido a otro sufrimiento?",
			"Todo quedó claro, pero el corazón se sintió aún más pesado.",
			"Al final de este camino, ¿estará la verdad que buscábamos?"
		],
		"vietnamese": [
			"Ánh sáng nhỏ đã tắt. Ngọn đèn soi đường giờ không còn nữa.",
			"Sự chờ đợi cô đơn của đứa trẻ lạc lối, liệu đã kết thúc?",
			"Hay đã lan thành một nỗi đau khác?",
			"Mọi thứ đã rõ ràng, nhưng lòng lại càng nặng trĩu.",
			"Cuối con đường này, liệu có phải là sự thật mà chúng ta tìm kiếm?"
		],
		"thai": [
			"แสงน้อยนิดดับลง ตะเกียงที่เคยส่องทาง ไม่มีอีกแล้ว",
			"การรอคอยอันโดดเดี่ยวของเด็กที่หลงทาง สิ้นสุดลงแล้วหรือยังนะ",
			"หรือว่ามันได้แพร่กระจายกลายเป็นความเจ็บปวดอื่นไปแล้ว",
			"ทุกสิ่งชัดเจนขึ้น แต่ใจกลับหนักอึ้งยิ่งกว่าเดิม",
			"ที่ปลายทางนี้ จะมีไหมความจริงที่เราตามหา"
		],
		"hindi": [
			"छोटी रोशनी बुझ गई। मार्ग को रोशन करने वाली लालटेन अब नहीं रही।",
			"क्या खोए हुए बच्चे का अकेला इंतजार खत्म हो गया है?",
			"या यह किसी और पीड़ा में बदल गया है?",
			"सब कुछ स्पष्ट हो गया, लेकिन मेरा मन और भारी हो गया।",
			"इस मार्ग के अंत में, क्या हमें वह सच मिलेगा जिसे हम ढूंढ रहे थे?"
		]
	}
} as const;
