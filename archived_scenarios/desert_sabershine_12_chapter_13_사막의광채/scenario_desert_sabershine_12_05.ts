export const scenario_desert_sabershine_12_05 = {
	"scenario_id": "desert_sabershine_12_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
		}
	},
	"boss": {
		"pool_id": "pool_GrandGloss_SaberShine_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 빛의 기둥이 사막 중앙에 솟아 있었다. 찬란하면서도 기괴한 모습.",
						"english": "A colossal pillar of light stood in the center of the desert. Both brilliant and bizarre.",
						"japanese": "巨大な光の柱が砂漠の中央にそびえ立っていた。燦然としていながらも、異様な姿。",
						"chinese": "一道巨大的光柱矗立在沙漠中央。它既辉煌又诡异。",
						"french": "Un pilier de lumière colossal se dressait au centre du désert. Magnifique et étrange à la fois.",
						"spanish": "Un colosal pilar de luz se alzaba en el centro del desierto. Brillante y grotesco a la vez.",
						"vietnamese": "Một cột sáng khổng lồ sừng sững giữa sa mạc. Rực rỡ mà cũng kỳ dị.",
						"thai": "เสาแห่งแสงขนาดมหึมาตั้งตระหง่านอยู่กลางทะเลทราย ช่างสุกใสและแปลกประหลาดในเวลาเดียวกัน",
						"hindi": "रेगिस्तान के केंद्र में प्रकाश का एक विशाल स्तंभ खड़ा था। शानदार और अजीब दोनों।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기가… 빛나는 보물의 중심?",
						"english": "Is this... the heart of the shining treasure?",
						"japanese": "ここが…輝く宝の中心？",
						"chinese": "这里是…闪耀宝藏的中心？",
						"french": "C'est ici... le cœur du trésor étincelant ?",
						"spanish": "¿Es aquí... el corazón del tesoro reluciente?",
						"vietnamese": "Đây là… trung tâm của báu vật rực rỡ?",
						"thai": "ที่นี่คือ...ใจกลางของสมบัติอันเจิดจรัสหรือ?",
						"hindi": "क्या यह... चमकते खजाने का केंद्र है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "dune",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래. 하지만 여긴… 보물이 아니야.",
						"english": "Yes. But this is... not treasure.",
						"japanese": "ああ。だがここは…宝ではない。",
						"chinese": "是啊。但这里…不是宝藏。",
						"french": "Oui. Mais ce n'est pas... un trésor.",
						"spanish": "Sí. Pero esto... no es un tesoro.",
						"vietnamese": "Đúng. Nhưng đây... không phải kho báu.",
						"thai": "ใช่ แต่ที่นี่...ไม่ใช่สมบัติ",
						"hindi": "हाँ। पर ये... खज़ाना नहीं है।"
					}
				},
				{
					"content": {
						"korean": "진실은… 끔찍할 거야.",
						"english": "The truth will be... terrible.",
						"japanese": "真実は…恐ろしいだろう。",
						"chinese": "真相会…很可怕。",
						"french": "La vérité sera... terrible.",
						"spanish": "La verdad será... terrible.",
						"vietnamese": "Sự thật sẽ... kinh khủng lắm.",
						"thai": "ความจริงคง...น่ากลัวมาก",
						"hindi": "सच... भयानक होगा।"
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "dune",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "저 빛에 홀린 자들은… 모두 완벽한 조각이 됐어.",
						"english": "Those enchanted by that light... all became perfect sculptures.",
						"japanese": "あの光に魅入られた者たちは…皆、完璧な彫刻になった。",
						"chinese": "那些被光魅惑的人…都变成了完美的雕塑。",
						"french": "Ceux qui furent ensorcelés par cette lumière... sont tous devenus des sculptures parfaites.",
						"spanish": "Aquellos embrujados por esa luz... se convirtieron en esculturas perfectas.",
						"vietnamese": "Những kẻ bị ánh sáng đó mê hoặc... đều trở thành những bức tượng hoàn hảo.",
						"thai": "ผู้ที่ถูกแสงนั้นล่อลวง...ล้วนกลายเป็นประติมากรรมที่สมบูรณ์แบบ",
						"hindi": "उस रौशनी से मोहित लोग... सभी बेहतरीन मूर्तियाँ बन गए।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dune"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "조각…? 사라진 탐험대들이…?",
						"english": "Sculptures...? The lost expeditions...?",
						"japanese": "彫刻…？消えた探検隊が…？",
						"chinese": "雕塑…? 那些失踪的探险队…?",
						"french": "Des sculptures...? Les expéditions disparues...?",
						"spanish": "¿Esculturas...? ¿Las expediciones perdidas...?",
						"vietnamese": "Tượng...? Những đoàn thám hiểm mất tích...?",
						"thai": "ประติมากรรม...? เหล่าคณะสำรวจที่หายไป...?",
						"hindi": "मूर्तियाँ...? क्या गायब हुए खोजकर्ता...?"
					}
				},
				{
					"content": {
						"korean": "생명을 잃고, 영원히 빛나는 장식… 명검을 위한 희생양…",
						"english": "Lifeless, eternally shining ornaments... sacrifices for a legendary sword...",
						"japanese": "命を失い、永遠に輝く装飾…名剣のための犠牲者…",
						"chinese": "失去生命，永远闪耀的装饰…为名剑而牺牲的祭品…",
						"french": "Des ornements sans vie, brillants éternellement... des sacrifices pour une épée légendaire...",
						"spanish": "Ornamentos sin vida, eternamente brillantes... sacrificios para una espada legendaria...",
						"vietnamese": "Mất đi sinh mạng, trở thành vật trang trí vĩnh cửu lấp lánh... vật tế cho thanh kiếm danh tiếng...",
						"thai": "เครื่องประดับที่ไร้ชีวิต ส่องประกายชั่วนิรันดร์...เครื่องสังเวยเพื่อดาบในตำนาน...",
						"hindi": "बेजान, हमेशा चमकने वाले आभूषण... एक महान तलवार के लिए बलिदान..."
					},
					"speaker": "dune",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dune",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "그랜드 글로스… 그 검술 명장이 바란 건… 완전한 검.",
						"english": "Grand Gloss... what that master swordsman desired... a perfect sword.",
						"japanese": "グランド・グロス…その剣術の達人が望んだのは…完璧な剣。",
						"chinese": "格兰德·格洛斯…那位剑术大师所渴望的…是一把完美的剑。",
						"french": "Grand Gloss... ce que ce maître d'épée désirait... une épée parfaite.",
						"spanish": "Grand Gloss... lo que ese maestro espadachín deseaba... una espada perfecta.",
						"vietnamese": "Grand Gloss... điều mà vị kiếm sư bậc thầy đó khao khát... là một thanh kiếm hoàn hảo.",
						"thai": "แกรนด์ กลอส...สิ่งที่ปรมาจารย์ดาบผู้นั้นปรารถนา...คือดาบที่สมบูรณ์แบบ",
						"hindi": "ग्रैंड ग्लोस... उस तलवारबाजी के उस्ताद की ख्वाहिश... एक मुकम्मल तलवार।"
					},
					"speaker": "dune",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그게 보스 이름이었나?",
						"english": "Was that the boss's name?",
						"japanese": "それがボスの名前だったのか？",
						"chinese": "那是Boss的名字吗？",
						"french": "C'était le nom du boss ?",
						"spanish": "¿Era ese el nombre del jefe?",
						"vietnamese": "Đó là tên của boss sao?",
						"thai": "นั่นคือชื่อบอสเหรอ?",
						"hindi": "क्या वो बॉस का नाम था?"
					}
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 그의 광기가, 이 모든 걸 만들었어.",
						"english": "No. His madness created all of this.",
						"japanese": "いや。彼の狂気が、これらすべてを創り出した。",
						"chinese": "不。他的疯狂，创造了这一切。",
						"french": "Non. Sa folie a créé tout cela.",
						"spanish": "No. Su locura creó todo esto.",
						"vietnamese": "Không. Sự điên rồ của hắn đã tạo ra tất cả những thứ này.",
						"thai": "ไม่ ความบ้าคลั่งของเขาสร้างสิ่งเหล่านี้ทั้งหมด",
						"hindi": "नहीं। उसकी दीवानगी ने ये सब बनाया।"
					}
				},
				{
					"content": {
						"korean": "그는 모든 것을… 완벽하게 만들려 했지.",
						"english": "He tried to make everything... perfect.",
						"japanese": "彼はすべてを…完璧にしようとしたのだ。",
						"chinese": "他试图让一切都…完美。",
						"french": "Il a essayé de tout rendre... parfait.",
						"spanish": "Él intentó hacer todo... perfecto.",
						"vietnamese": "Hắn đã cố gắng biến mọi thứ... trở nên hoàn hảo.",
						"thai": "เขาพยายามทำให้ทุกอย่าง...สมบูรณ์แบบ",
						"hindi": "उसने सब कुछ... मुकम्मल बनाने की कोशिश की।"
					},
					"speaker": "dune",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "dune",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "이제 멈춰. 더 가면… 돌아올 수 없어.",
						"english": "Stop now. Go further... and you can't come back.",
						"japanese": "もうやめろ。これ以上行けば…戻れなくなるぞ。",
						"chinese": "现在停下。再往前走…就回不来了。",
						"french": "Arrête maintenant. Va plus loin... et tu ne pourras plus revenir.",
						"spanish": "Detente ahora. Si vas más allá... no podrás regresar.",
						"vietnamese": "Dừng lại bây giờ. Đi xa hơn nữa... ngươi sẽ không thể quay lại.",
						"thai": "หยุดเดี๋ยวนี้ ถ้าไปต่อ...จะกลับมาไม่ได้แล้วนะ",
						"hindi": "अब रुक जाओ। आगे बढ़े तो... वापस नहीं आ पाओगे।"
					},
					"speaker": "dune",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "멈출 수 없어. 여기까지 왔는데.",
						"english": "Can't stop now. Not after coming this far.",
						"japanese": "もう止められない。ここまで来たんだから。",
						"chinese": "不能停下。都已经走到这一步了。",
						"french": "Je ne peux pas m'arrêter. Pas après être venu jusqu'ici.",
						"spanish": "No puedo parar. No después de haber llegado tan lejos.",
						"vietnamese": "Không thể dừng lại. Đã đến nước này rồi.",
						"thai": "หยุดไม่ได้แล้ว มาไกลขนาดนี้แล้ว",
						"hindi": "अब रुक नहीं सकता। इतनी दूर आ गया हूँ।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진실을 마주해야 해. 그래야… 모든 게 끝날 테니까.",
						"english": "I must face the truth. Only then… will everything end.",
						"japanese": "真実と向き合わなければ。そうすれば…すべてが終わる。",
						"chinese": "我必须面对真相。只有这样…一切才会结束。",
						"french": "Je dois faire face à la vérité. Seulement alors… tout prendra fin.",
						"spanish": "Debo enfrentar la verdad. Solo así… todo terminará.",
						"vietnamese": "Tôi phải đối mặt với sự thật. Chỉ khi đó… mọi thứ mới kết thúc.",
						"thai": "ฉันต้องเผชิญหน้ากับความจริง มีแต่ทางนั้น… ทุกอย่างถึงจะจบลง",
						"hindi": "मुझे सच का सामना करना होगा। तभी… सब कुछ खत्म होगा।"
					}
				},
				{
					"content": {
						"korean": "후회할 거야… 너무 늦기 전에…",
						"english": "You'll regret it… Before it's too late…",
						"japanese": "後悔するぞ…手遅れになる前に…",
						"chinese": "你会后悔的…在为时过晚之前…",
						"french": "Tu le regretteras… avant qu'il ne soit trop tard…",
						"spanish": "Te arrepentirás… antes de que sea demasiado tarde…",
						"vietnamese": "Ngươi sẽ hối hận… trước khi quá muộn…",
						"thai": "เจ้าจะต้องเสียใจ… ก่อนที่มันจะสายเกินไป…",
						"hindi": "तुम्हें पछताना पड़ेगा… इससे पहले कि बहुत देर हो जाए…"
					},
					"speaker": "dune",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이 명검에… 흠집이라니! 나의 연마 솜씨가 이리 녹슬었단 말인가?",
						"english": "Ugh… A scratch on this legendary blade! Has my sharpening skill truly rusted so much?",
						"japanese": "くっ…この名剣に…傷だと！我が研磨の腕が、ここまで鈍ったというのか？",
						"chinese": "呃啊……这把名剑上……竟然有划痕！难道我的研磨技艺已经生疏到这种地步了吗？",
						"french": "Ugh… Une éraflure sur cette lame légendaire ! Mon art de l'affûtage est-il à ce point rouillé ?",
						"spanish": "Ugh… ¿Una muesca en esta espada legendaria? ¿Acaso mi habilidad para afilar se ha oxidado tanto?",
						"vietnamese": "Khụ… Một vết xước trên danh kiếm này sao! Chẳng lẽ kỹ năng mài giũa của ta đã cùn mòn đến thế ư?",
						"thai": "อึก… ดาบเล่มนี้… มีรอยขีดข่วนงั้นหรือ! ฝีมือการลับคมของข้าสนิมเกาะขนาดนี้เลยรึไง?",
						"hindi": "उफ़… इस मशहूर तलवार पर… एक खरोंच! क्या मेरी धार बनाने की कला इतनी जंग खा गई है?"
					},
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니야… 감히 나, 그랜드 글로스의 명예를 더럽히는 불경한 존재들! 나의 광채에 취하라!",
						"english": "No… You impious beings dare tarnish the honor of me, Grand Gloss! Revel in my radiance!",
						"japanese": "いや… このグランドグロスたる我の、名誉を汚す不遜な輩よ！我が輝きに酔いしれろ！",
						"chinese": "不……竟敢玷污我，大光泽的荣耀的亵渎者！沉醉于我的光辉之中吧！",
						"french": "Non… Êtres impies, vous osez souiller l'honneur de moi, Grand Gloss ! Enivrez-vous de ma splendeur !",
						"spanish": "¡No… Seres impíos que osáis manchar el honor de mí, Gran Glosa! ¡Emborrachaos de mi resplandor!",
						"vietnamese": "Không… Những kẻ báng bổ dám làm ô nhục danh dự của ta, Grand Gloss! Hãy đắm chìm trong ánh hào quang của ta!",
						"thai": "ไม่… พวกเจ้าผู้ชั่วร้ายกล้ามาแปดเปื้อนเกียรติของข้า แกรนด์กลอสเรอะ! จงเคลิบเคลิ้มในความเจิดจ้าของข้าซะ!",
						"hindi": "नहीं… तुम अधर्मी प्राणी, मेरी, ग्रैंड ग्लॉस की इज़्ज़त को दागदार करने की हिम्मत कैसे करते हो! मेरी चमक में डूब जाओ!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그의 광기가… 끝났다.",
						"english": "His madness… has ended.",
						"japanese": "彼の狂気が…終わった。",
						"chinese": "他的疯狂……结束了。",
						"french": "Sa folie… est terminée.",
						"spanish": "Su locura… ha terminado.",
						"vietnamese": "Sự điên loạn của hắn… đã kết thúc.",
						"thai": "ความบ้าคลั่งของเขา… ได้สิ้นสุดลงแล้ว",
						"hindi": "उसका पागलपन… समाप्त हो गया।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "dune",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "…그는… 완벽한 검을 원했을 뿐이야. 뒤틀린 채로…",
						"english": "…He… merely desired a perfect blade. Twisted as he was…",
						"japanese": "…彼は…完璧な剣を望んだだけだ。歪んだまま…",
						"chinese": "……他……只是想要一把完美的剑。扭曲着……",
						"french": "…Il… ne désirait qu'une lame parfaite. Tordu qu'il était…",
						"spanish": "…Él… solo deseaba una espada perfecta. Retorcido como estaba…",
						"vietnamese": "…Hắn… chỉ khao khát một thanh kiếm hoàn hảo. Trong sự méo mó…",
						"thai": "…เขา… เพียงแค่ต้องการดาบที่สมบูรณ์แบบเท่านั้น ในสภาพที่บิดเบี้ยว…",
						"hindi": "…वह… बस एक उत्तम तलवार चाहता था। भले ही वह मुड़ा हुआ था…"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dune"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "광기의 빛이 꺼지자, 사막은 비로소 침묵을 되찾았다.",
						"english": "As the light of madness faded, the desert finally regained its silence.",
						"japanese": "狂気の光が消え、砂漠はようやく静寂を取り戻した。",
						"chinese": "随着疯狂之光的熄灭，沙漠终于恢复了寂静。",
						"french": "Tandis que la lumière de la folie s'éteignait, le désert retrouva enfin son silence.",
						"spanish": "Al apagarse la luz de la locura, el desierto finalmente recuperó su silencio.",
						"vietnamese": "Khi ánh sáng của sự điên loạn tắt dần, sa mạc cuối cùng cũng lấy lại sự tĩnh lặng của mình.",
						"thai": "เมื่อแสงแห่งความบ้าคลั่งมอดลง ทะเลทรายก็กลับคืนสู่ความเงียบสงบอีกครั้ง",
						"hindi": "जैसे ही पागलपन की रोशनी बुझी, रेगिस्तान ने आखिरकार अपनी चुप्पी वापस पा ली।"
					}
				},
				{
					"content": {
						"korean": "그러나 그랜드 글로스의 그리움은… 여전히 사막에 맴돌았다.",
						"english": "Yet, Grand Gloss's longing… still lingered in the desert.",
						"japanese": "しかし、グランドグロスの郷愁は…未だ砂漠に漂っていた。",
						"chinese": "然而，大光泽的思念……依然萦绕在沙漠中。",
						"french": "Pourtant, la nostalgie de Grand Gloss… planait toujours dans le désert.",
						"spanish": "Sin embargo, el anhelo de Gran Glosa… todavía flotaba en el desierto.",
						"vietnamese": "Tuy nhiên, nỗi nhớ của Grand Gloss… vẫn còn vương vấn trong sa mạc.",
						"thai": "ทว่า ความคิดถึงของแกรนด์กลอส… ยังคงลอยวนอยู่ในทะเลทราย",
						"hindi": "फिर भी, ग्रैंड ग्लॉस की लालसा… अभी भी रेगिस्तान में छाई हुई थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "사막의 심장. 그곳에 찬란한 광채, 세이버샤인이 기다렸다. 웅장하면서도 기괴한 존재.",
						"english": "The Heart of the Desert. There, the brilliant radiance, Sabershine, awaited. A magnificent yet grotesque entity.",
						"japanese": "砂漠の心臓。そこに燦爛たる輝き、セイバーシャインが待っていた。壮麗でありながらも奇怪な存在。",
						"chinese": "沙漠之心。在那儿，灿烂的光辉，光刃，正等待着。一个宏伟而又怪异的存在。",
						"french": "Le Cœur du Désert. Là, la radiance brillante, Sabershine, attendait. Une entité magnifique et pourtant grotesque.",
						"spanish": "El Corazón del Desierto. Allí, el resplandor brillante, Sabershine, esperaba. Una entidad magnífica pero grotesca.",
						"vietnamese": "Trái tim của Sa mạc. Ở đó, ánh sáng rực rỡ, Sabershine, đang chờ đợi. Một thực thể tráng lệ nhưng kỳ dị.",
						"thai": "ใจกลางทะเลทราย ที่นั่น แสงสว่างเจิดจ้า เซเบอร์ไชน์ กำลังรออยู่ สิ่งมีชีวิตที่งดงามแต่ประหลาดพิกล",
						"hindi": "रेगिस्तान का हृदय। वहाँ, शानदार चमक, सेबरशाइन, इंतज़ार कर रहा था। एक भव्य फिर भी विचित्र इकाई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "마침내 왔군… 나의 걸작이 될… 빛나는 재료들이여.",
						"english": "You've finally arrived… my shining materials… that will become my masterpiece.",
						"japanese": "ついに来たか…私の傑作となる…輝く材料たちよ。",
						"chinese": "你们终于来了…我的杰作…闪耀的材料们啊。",
						"french": "Vous êtes enfin arrivés… mes matériaux brillants… qui deviendront mon chef-d'œuvre.",
						"spanish": "Finalmente habéis llegado… mis brillantes materiales… que se convertirán en mi obra maestra.",
						"vietnamese": "Cuối cùng các ngươi cũng đã đến… những nguyên liệu sáng chói của ta… sẽ trở thành kiệt tác của ta.",
						"thai": "ในที่สุดพวกเจ้าก็มาถึงแล้ว… วัตถุดิบอันเจิดจรัสของข้า… ที่จะกลายเป็นผลงานชิ้นเอกของข้า",
						"hindi": "तुम आखिरकार आ गए… मेरी चमकती सामग्री… जो मेरी उत्कृष्ट कृति बनेगी।"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "흠… 완벽하게 벼려지기엔… 아직 멀었군.",
						"english": "Hmm… Still far from being perfectly forged.",
						"japanese": "ふむ…完璧に鍛え上げるには…まだ遠いな。",
						"chinese": "嗯…离完美锻造…还差得远呢。",
						"french": "Hmm… Encore loin d'être parfaitement forgé.",
						"spanish": "Mmm… Todavía lejos de ser forjado a la perfección.",
						"vietnamese": "Hừm… Vẫn còn lâu mới được rèn giũa hoàn hảo.",
						"thai": "หืม… ยังห่างไกลจากความสมบูรณ์แบบในการหลอม",
						"hindi": "हम्म… अभी पूरी तरह से गढ़े जाने से… बहुत दूर है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "dune",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "dune",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "안 돼! 그랜드 글로스! 제발 멈춰! 그들은… 명검이 아니야!",
						"english": "No! Grand Gloss! Please stop! They are… not legendary swords!",
						"japanese": "やめろ！グランドグロス！止めてくれ！彼らは…名剣じゃない！",
						"chinese": "不！大光泽！请住手！他们…不是名剑！",
						"french": "Non ! Grand Gloss ! S'il te plaît, arrête ! Ce ne sont… pas des épées légendaires !",
						"spanish": "¡No! ¡Grand Gloss! ¡Por favor, detente! Ellos no son… ¡espadas legendarias!",
						"vietnamese": "Không! Grand Gloss! Làm ơn dừng lại! Họ… không phải là danh kiếm!",
						"thai": "ไม่นะ! แกรนด์กลอส! ได้โปรดหยุด! พวกเขา… ไม่ใช่ดาบในตำนาน!",
						"hindi": "नहीं! ग्रैंड ग्लॉस! कृपया रुक जाओ! वे… महान तलवारें नहीं हैं!"
					}
				},
				{
					"content": {
						"korean": "네가… 그랜드 글로스였나!",
						"english": "You… were Grand Gloss!",
						"japanese": "お前が…グランドグロスだったのか！",
						"chinese": "你…就是大光泽！",
						"french": "Toi… tu étais Grand Gloss !",
						"spanish": "¡Tú… eras Grand Gloss!",
						"vietnamese": "Ngươi… chính là Grand Gloss!",
						"thai": "เจ้า… คือแกรนด์กลอส!",
						"hindi": "तुम… ग्रैंड ग्लॉस थे!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 완벽을 추구하는 검술 명장. 너희는 나의 빛나는… 재료.",
						"english": "I am a master swordsmith who pursues perfection. You are my shining… materials.",
						"japanese": "私は完璧を追求する剣術の達人。お前たちは私の輝く…材料だ。",
						"chinese": "我是追求完美的剑术大师。你们是我的闪耀…材料。",
						"french": "Je suis un maître forgeron qui recherche la perfection. Vous êtes mes brillants… matériaux.",
						"spanish": "Soy un maestro espadachín que busca la perfección. Vosotros sois mis brillantes… materiales.",
						"vietnamese": "Ta là một kiếm sư bậc thầy theo đuổi sự hoàn hảo. Các ngươi là những nguyên liệu sáng chói của ta.",
						"thai": "ข้าคือนายช่างตีดาบผู้แสวงหาความสมบูรณ์แบบ พวกเจ้าคือ… วัตถุดิบอันเจิดจรัสของข้า",
						"hindi": "मैं पूर्णता का पीछा करने वाला एक मास्टर तलवारबाज हूँ। तुम मेरी चमकती… सामग्री हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "우리의 생명을… 명검으로 만들겠다고?",
						"english": "You'll turn our lives… into legendary swords?",
						"japanese": "私たちの命を…名剣にするというのか？",
						"chinese": "你要把我们的生命…变成名剑？",
						"french": "Tu vas transformer nos vies… en épées légendaires ?",
						"spanish": "¿Convertirás nuestras vidas… en espadas legendarias?",
						"vietnamese": "Ngươi sẽ biến sinh mệnh của chúng ta… thành danh kiếm?",
						"thai": "เจ้าจะเปลี่ยนชีวิตของเรา… ให้กลายเป็นดาบในตำนานงั้นหรือ?",
						"hindi": "तुम हमारे जीवन को… महान तलवारों में बदल दोगे?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들… 나의 칼날을 더럽히지 마라… 너희는… 그저 빛나는 장식품이 될 뿐.",
						"english": "Worthless beings… Do not defile my blade… You shall… merely become shining ornaments.",
						"japanese": "くだらぬ者ども…我が刃を汚すな…お前たちは…ただ輝く装飾品になるだけだ。",
						"chinese": "微不足道的家伙们……别玷污我的刀刃……你们……只会变成闪亮的装饰品。",
						"french": "Misérables créatures… Ne souillez pas ma lame… Vous ne serez… que de brillants ornements.",
						"spanish": "Seres insignificantes… No mancilléis mi hoja… Vosotros… seréis meros adornos relucientes.",
						"vietnamese": "Những kẻ vô dụng… Đừng làm ô uế lưỡi dao của ta… Các ngươi… sẽ chỉ trở thành những vật trang trí lấp lánh mà thôi.",
						"thai": "พวกไร้ค่า… อย่ามาแปดเปื้อนคมดาบของข้า… พวกเจ้า… จะเป็นแค่เครื่องประดับที่เปล่งประกายเท่านั้น",
						"hindi": "तुच्छ प्राणी… मेरी तलवार को अपवित्र मत करो… तुम… बस चमकते आभूषण बन जाओगे।"
					},
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 여기서… 끝낼 수 없어.",
						"english": "Ugh… I cannot… end it here.",
						"japanese": "くっ…ここで…終わらせるわけにはいかない。",
						"chinese": "呃啊……不能……在这里结束。",
						"french": "Ugh… Je ne peux pas… en finir ici.",
						"spanish": "Ugh… No puedo… terminar aquí.",
						"vietnamese": "Khụ… Không thể… kết thúc ở đây được.",
						"thai": "อึก… ข้าจะ… จบลงที่นี่ไม่ได้",
						"hindi": "उफ़… मैं इसे… यहीं खत्म नहीं कर सकता।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dune",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "dune",
					"content": {
						"korean": "도망쳐! 이대로는… 모두 끝이야!",
						"english": "Run! If things stay like this… it's all over!",
						"japanese": "逃げろ！このままでは…全てが終わる！",
						"chinese": "快跑！这样下去……一切都完了！",
						"french": "Fuyez ! Si ça continue comme ça… tout est perdu !",
						"spanish": "¡Huid! Si esto sigue así… ¡todo se acaba!",
						"vietnamese": "Chạy đi! Cứ thế này… thì tất cả sẽ kết thúc!",
						"thai": "หนีไป! ถ้าเป็นแบบนี้… ทุกอย่างก็จบ!",
						"hindi": "भागो! अगर ऐसा रहा तो… सब खत्म हो जाएगा!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"빛나는 보물의 심장. 그곳은 한때 검술 명장의 영역이었다.",
			"오랜 시간 쌓인 광채는 사실, 뒤틀린 그리움의 흔적.",
			"탐험대는 이제, 그 비극의 심연 속으로 발을 내딛는다.",
			"진실은… 상상보다 훨씬 잔혹할 것이다."
		],
		"english": [
			"The heart of the shining treasure. Once, it was the domain of a swordmaster.",
			"The radiance accumulated over ages was, in truth, a trace of twisted longing.",
			"The expedition now steps into the abyss of that tragedy.",
			"The truth... will be far more cruel than imagined."
		],
		"japanese": [
			"輝く宝の心臓。かつては剣術名人の領域だった。",
			"長い間積み重なった輝きは、実は歪んだ郷愁の痕跡。",
			"探検隊は今、その悲劇の深淵へと足を踏み入れる。",
			"真実は…想像よりもはるかに残酷だろう。"
		],
		"chinese": [
			"闪耀宝藏的心脏。那曾是剑术名匠的领域。",
			"岁月积淀的光辉，实则扭曲思念的痕迹。",
			"探险队如今，迈入了那悲剧的深渊。",
			"真相…将比想象中残酷得多。"
		],
		"french": [
			"Le cœur du trésor étincelant. Jadis, c'était le domaine d'un maître épéiste.",
			"L'éclat accumulé au fil du temps n'était en fait qu'une trace d'une nostalgie tordue.",
			"L'expédition s'enfonce maintenant dans l'abîme de cette tragédie.",
			"La vérité... sera bien plus cruelle qu'imaginé."
		],
		"spanish": [
			"El corazón del tesoro reluciente. Una vez, fue el dominio de un maestro espadachín.",
			"El resplandor acumulado a lo largo del tiempo era, en realidad, una huella de anhelo retorcido.",
			"La expedición ahora se adentra en el abismo de esa tragedia.",
			"La verdad... será mucho más cruel de lo imaginado."
		],
		"vietnamese": [
			"Trái tim của báu vật rực rỡ. Nơi đó từng là lãnh địa của một kiếm sư.",
			"Ánh sáng tích tụ theo thời gian, thực chất là dấu vết của nỗi khao khát méo mó.",
			"Đoàn thám hiểm giờ đây, bước chân vào vực thẳm của bi kịch đó.",
			"Sự thật… sẽ tàn khốc hơn nhiều so với tưởng tượng."
		],
		"thai": [
			"หัวใจแห่งสมบัติเจิดจรัส ครั้งหนึ่ง ที่นั่นเคยเป็นอาณาจักรของจอมกระบี่",
			"รัศมีที่สะสมมานาน แท้จริงแล้วคือร่องรอยของความโหยหาที่บิดเบี้ยว",
			"คณะสำรวจกำลังก้าวเข้าสู่ห้วงลึกของโศกนาฏกรรมนั้นแล้ว",
			"ความจริง... จะโหดร้ายกว่าที่จินตนาการไว้มาก"
		],
		"hindi": [
			"चमकते खजाने का दिल। वह कभी तलवारबाज़ी के उस्ताद का क्षेत्र था।",
			"सदियों से जमा हुई चमक, वास्तव में, विकृत लालसा का निशान थी।",
			"अभियान अब उस त्रासदी के अथाह कुंड में कदम रखता है।",
			"सच्चाई... कल्पना से कहीं ज़्यादा क्रूर होगी।"
		]
	},
	"epilogue": {
		"korean": [
			"사막은 다시 고요해졌다. 한때 찬란했던 광채는 거짓말처럼 사라지고.",
			"우리는 승리했지만, 그의 비극적인 그리움은 잊히지 않았다.",
			"그랜드 글로스는 구원받았을까, 아니면 파괴되었을까.",
			"모든 것이 끝났지만, 사막의 모래는 여전히 무언가를 속삭이는 듯했다."
		],
		"english": [
			"The desert fell silent again. The once brilliant radiance vanished as if a lie.",
			"We triumphed, but his tragic longing was not forgotten.",
			"Was Grand Gloss saved, or destroyed?",
			"All was over, yet the desert sands still seemed to whisper something."
		],
		"japanese": [
			"砂漠は再び静寂に包まれた。かつて輝いていた光彩は、嘘のように消え去り。",
			"我々は勝利したが、彼の悲劇的な郷愁は忘れられなかった。",
			"グランドグロスは救われたのか、それとも破壊されたのか。",
			"全てが終わったが、砂漠の砂はまだ何かを囁いているようだった。"
		],
		"chinese": [
			"沙漠再次归于寂静。曾一度灿烂的光辉，如谎言般消逝。",
			"我们虽已胜利，但他悲剧性的思念却未曾被遗忘。",
			"大光泽是获得了救赎，还是被摧毁了呢。",
			"一切都已结束，但沙漠的沙粒似乎仍在低语着什么。"
		],
		"french": [
			"Le désert redevint silencieux. L'éclat jadis resplendissant disparut comme un mensonge.",
			"Nous avons triomphé, mais sa nostalgie tragique n'a pas été oubliée.",
			"Grand Gloss a-t-il été sauvé ou détruit ?",
			"Tout était fini, pourtant les sables du désert semblaient encore murmurer quelque chose."
		],
		"spanish": [
			"El desierto volvió a quedar en silencio. El resplandor una vez brillante desapareció como una mentira.",
			"Triunfamos, pero su trágico anhelo no fue olvidado.",
			"¿Fue Grand Gloss salvado o destruido?",
			"Todo había terminado, sin embargo, las arenas del desierto aún parecían susurrar algo."
		],
		"vietnamese": [
			"Sa mạc lại trở nên tĩnh lặng. Ánh sáng từng rực rỡ biến mất như một lời nói dối.",
			"Chúng ta đã chiến thắng, nhưng nỗi khao khát bi thảm của anh ấy vẫn không bị lãng quên.",
			"Grand Gloss đã được cứu rỗi, hay đã bị hủy diệt?",
			"Mọi thứ đã kết thúc, nhưng cát sa mạc vẫn như đang thì thầm điều gì đó."
		],
		"thai": [
			"ทะเลทรายกลับสู่ความเงียบสงบอีกครั้ง แสงสว่างที่เคยเจิดจรัสหายไปราวกับเป็นเรื่องโกหก",
			"เราชนะแล้ว แต่ความโหยหาอันโศกเศร้าของเขาก็ยังไม่ถูกลืมเลือน",
			"แกรนด์กลอสได้รับการช่วยชีวิต หรือถูกทำลายกันแน่",
			"ทุกสิ่งจบสิ้นลงแล้ว แต่ทรายในทะเลทรายก็ยังคงกระซิบกระซาบอะไรบางอย่างอยู่ดี"
		],
		"hindi": [
			"रेगिस्तान फिर से शांत हो गया। कभी शानदार चमक झूठ की तरह गायब हो गई।",
			"हम जीत गए, लेकिन उसकी दुखद लालसा भूली नहीं गई।",
			"क्या ग्रैंड ग्लोस को बचाया गया, या नष्ट कर दिया गया?",
			"सब कुछ खत्म हो गया था, फिर भी रेगिस्तान की रेत कुछ फुसफुसा रही थी।"
		]
	}
} as const;
