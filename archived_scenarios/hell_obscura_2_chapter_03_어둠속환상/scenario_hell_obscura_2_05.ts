export const scenario_hell_obscura_2_05 = {
	"scenario_id": "hell_obscura_2_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "pool_AbyssalSight_Obscura_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모든 것이 일그러졌다. 꿈처럼 아름답던 풍경은 검은 그림자로 변해갔다.",
						"english": "Everything was distorted. The dreamlike beautiful scenery turned into dark shadows.",
						"japanese": "すべてが歪んだ。夢のように美しかった風景は、黒い影へと変わっていった。",
						"chinese": "一切都扭曲了。如梦般美丽的风景变成了黑色阴影。",
						"french": "Tout était déformé. Le paysage magnifique, semblable à un rêve, se transforma en ombres noires.",
						"spanish": "Todo estaba distorsionado. El hermoso paisaje onírico se convirtió en sombras oscuras.",
						"vietnamese": "Mọi thứ đều méo mó. Phong cảnh đẹp như mơ biến thành những bóng đen.",
						"thai": "ทุกสิ่งบิดเบี้ยว ทิวทัศน์ที่สวยงามราวความฝันกลายเป็นเงาดำมืด",
						"hindi": "सब कुछ विकृत हो गया था। सपने जैसा सुंदर दृश्य काले साये में बदल गया।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이게… 진실?",
						"english": "Is this... the truth?",
						"japanese": "これが…真実？",
						"chinese": "这就是……真相？",
						"french": "C'est... la vérité ?",
						"spanish": "¿Esto es... la verdad?",
						"vietnamese": "Đây là... sự thật?",
						"thai": "นี่คือ... ความจริงเหรอ?",
						"hindi": "क्या यह... सच है?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "안 돼… 받아들이지 마…!",
						"english": "No… Don't accept it…!",
						"japanese": "だめだ…受け入れるな…！",
						"chinese": "不…不要接受…！",
						"french": "Non… N'accepte pas… !",
						"spanish": "No… ¡No lo aceptes…!",
						"vietnamese": "Không… Đừng chấp nhận…!",
						"thai": "ไม่นะ… อย่ารับมัน…!",
						"hindi": "नहीं… इसे स्वीकार मत करो…!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "애쉬? 기억났어?",
						"english": "Ash? Do you remember?",
						"japanese": "アッシュ？思い出したの？",
						"chinese": "艾什？你想起来了？",
						"french": "Ash ? Tu te souviens ?",
						"spanish": "¿Ash? ¿Lo recuerdas?",
						"vietnamese": "Ash? Em nhớ ra rồi sao?",
						"thai": "แอช? จำได้แล้วเหรอ?",
						"hindi": "ऐश? तुम्हें याद है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "angry",
					"content": {
						"korean": "이 모든 게… 전부…!",
						"english": "All of this… everything…!",
						"japanese": "この全てが…全部…！",
						"chinese": "这一切…全部…！",
						"french": "Tout ça… tout… !",
						"spanish": "Todo esto… ¡todo…!",
						"vietnamese": "Tất cả những điều này… tất cả…!",
						"thai": "ทั้งหมดนี่… ทั้งหมด…!",
						"hindi": "ये सब… सब कुछ…!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "네가 본 빛은 가짜야. 이 지옥은… 희망을 먹고 자라.",
						"english": "The light you saw is a fake. This hell… feeds on hope.",
						"japanese": "君が見た光は偽物だ。この地獄は…希望を食い尽くして育つ。",
						"chinese": "你看到的光是假的。这地狱…靠希望为生。",
						"french": "La lumière que tu as vue est fausse. Cet enfer… se nourrit d'espoir.",
						"spanish": "La luz que viste es falsa. Este infierno… se alimenta de esperanza.",
						"vietnamese": "Ánh sáng bạn thấy là giả dối. Địa ngục này… lớn lên nhờ hy vọng.",
						"thai": "แสงที่เธอเห็นมันปลอมน่ะ นรกนี่… มันเติบโตด้วยความหวัง",
						"hindi": "जो रोशनी तुमने देखी, वह झूठी है। यह नर्क… उम्मीदों पर जीता है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "희망이… 연료?",
						"english": "Hope… is fuel?",
						"japanese": "希望が…燃料？",
						"chinese": "希望…是燃料？",
						"french": "L'espoir… est un carburant ?",
						"spanish": "¿La esperanza… es combustible?",
						"vietnamese": "Hy vọng… là nhiên liệu?",
						"thai": "ความหวัง… คือเชื้อเพลิง?",
						"hindi": "उम्मीद… ईंधन है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실은… 가장 달콤한 거짓으로 위장되어 끊임없이 반복될 뿐.",
						"english": "The truth… is merely disguised as the sweetest lie, endlessly repeating.",
						"japanese": "真実は…最も甘美な嘘として偽装され、ただ繰り返し続けるだけ。",
						"chinese": "真相…只是伪装成最甜蜜的谎言，不断重复。",
						"french": "La vérité… n'est qu'un doux mensonge déguisé, se répétant sans cesse.",
						"spanish": "La verdad… solo es un dulce engaño disfrazado, repitiéndose sin cesar.",
						"vietnamese": "Sự thật… chỉ là một lời nói dối ngọt ngào được ngụy trang, lặp đi lặp lại không ngừng.",
						"thai": "ความจริง… เป็นแค่คำโกหกที่หอมหวานที่สุดที่ถูกปลอมแปลง และจะซ้ำรอยไม่รู้จบ",
						"hindi": "सच… बस सबसे मीठे झूठ के रूप में छिपा हुआ है, जो अंतहीन रूप से दोहराया जाता है।"
					},
					"speaker": "ash",
					"emotion": "sad"
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
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "그 미소… 빛바랜 사진 속… 네가 찾는 그 그림자도…",
						"english": "That smile… in the faded photo… and the shadow you seek…",
						"japanese": "その笑顔…色褪せた写真の中の…君が探すその影も…",
						"chinese": "那个微笑…泛黄照片里…你寻找的那个影子也…",
						"french": "Ce sourire… dans la photo jaunie… et l'ombre que tu cherches…",
						"spanish": "Esa sonrisa… en la foto descolorida… y la sombra que buscas…",
						"vietnamese": "Nụ cười đó… trong bức ảnh phai màu… và cái bóng bạn đang tìm cũng…",
						"thai": "รอยยิ้มนั่น… ในรูปซีดจาง… แม้แต่เงาที่เธอกำลังตามหา…",
						"hindi": "वो मुस्कान… उस धुंधली तस्वीर में… वो साया भी जिसे तुम ढूंढ रहे हो…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그건 진짜야! 내 기억 속에 선명해!",
						"english": "It's real! It's vivid in my memory!",
						"japanese": "それは本当だ！私の記憶の中に鮮明に！",
						"chinese": "那是真的！在我的记忆中很清晰！",
						"french": "C'est réel ! C'est si clair dans ma mémoire !",
						"spanish": "¡Es real! ¡Está nítido en mi memoria!",
						"vietnamese": "Nó là thật! Nó rõ ràng trong ký ức của tôi!",
						"thai": "มันคือเรื่องจริง! มันยังชัดเจนในความทรงจำของฉัน!",
						"hindi": "वह असली है! वह मेरी यादों में साफ है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아니야… 그건… 오스큐라가 만든 가장 잔인한 환상이야.",
						"english": "No… that's… the cruelest illusion Oscura created.",
						"japanese": "違う…それは…オスクーラが作った最も残酷な幻想だ。",
						"chinese": "不…那…是奥斯库拉制造的最残酷的幻象。",
						"french": "Non… C'est… la plus cruelle des illusions créées par Oscura.",
						"spanish": "No… eso… es la ilusión más cruel creada por Oscura.",
						"vietnamese": "Không… đó… là ảo ảnh tàn nhẫn nhất mà Oscura tạo ra.",
						"thai": "ไม่ใช่… นั่นมัน… ภาพลวงตาที่โหดร้ายที่สุดที่ออสคูร่าสร้างขึ้นมาต่างหาก",
						"hindi": "नहीं… वह… ओस्कुरा द्वारा बनाया गया सबसे क्रूर भ्रम है।"
					},
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "거짓말…!",
						"english": "Lies…!",
						"japanese": "嘘だ…！",
						"chinese": "骗人…！",
						"french": "Mensonges… !",
						"spanish": "¡Mentira…!",
						"vietnamese": "Dối trá…!",
						"thai": "โกหก…!",
						"hindi": "झूठ…!"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ash",
					"spot": [
						2,
						4
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "수많은 눈동자가 어둠 속에서 번뜩였다. 찬란한 장막 곳곳에 균열이 생겼다.",
						"english": "Countless eyes gleamed in the dark. Cracks appeared in the brilliant veil.",
						"japanese": "無数の瞳が闇の中で輝いた。輝かしい帳のあちこちに亀裂が生じた。",
						"chinese": "无数双眼睛在黑暗中闪烁。辉煌的帷幕上出现了裂痕。",
						"french": "D'innombrables yeux ont brillé dans l'obscurité. Des fissures sont apparues partout sur le voile éclatant.",
						"spanish": "Innumerables ojos brillaron en la oscuridad. Aparecieron grietas por todas partes en el velo resplandeciente.",
						"vietnamese": "Vô số đôi mắt lấp lánh trong bóng tối. Những vết nứt xuất hiện khắp tấm màn rực rỡ.",
						"thai": "ดวงตามากมายส่องประกายในความมืด รอยร้าวปรากฏขึ้นทั่วผืนม่านอันรุ่งโรจน์",
						"hindi": "अंधेरे में अनगिनत आँखें चमक उठीं। शानदार आवरण में दरारें पड़ गईं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "봐… 저 균열… 그 뒤에 진짜가 있어. 천상의 시선이… 뒤틀린 거야.",
						"english": "Look… those cracks… The truth lies behind them. The heavenly gaze… it's twisted.",
						"japanese": "見ろ…あの亀裂…その裏に真実がある。天上の視線が…歪められたのだ。",
						"chinese": "看…那些裂痕…背后是真相。天上的视线…它被扭曲了。",
						"french": "Regarde… ces fissures… La vérité se cache derrière. Le regard céleste… il est tordu.",
						"spanish": "Mira… esas grietas… La verdad está detrás. La mirada celestial… está retorcida.",
						"vietnamese": "Nhìn kìa… những vết nứt đó… Sự thật nằm sau chúng. Ánh nhìn thiên đường… đã bị bóp méo.",
						"thai": "ดูสิ…รอยร้าวพวกนั้น…ความจริงอยู่เบื้องหลัง สายตาจากสวรรค์…มันบิดเบี้ยวไปแล้ว",
						"hindi": "देखो… वे दरारें… उनके पीछे असली चीज़ है। स्वर्गीय दृष्टि… वह विकृत हो गई है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "천상의… 시선?",
						"english": "Heavenly… gaze?",
						"japanese": "天上の…視線？",
						"chinese": "天上的…视线？",
						"french": "Céleste… regard ?",
						"spanish": "¿Celestial… mirada?",
						"vietnamese": "Ánh nhìn… thiên đường?",
						"thai": "สายตาจากสวรรค์…หรือ?",
						"hindi": "स्वर्गीय… दृष्टि?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 모든 진실을 꿰뚫으려던 눈이… 스스로 진실을 왜곡하고 있어!",
						"english": "The eye that sought to pierce all truth… is now twisting truth itself!",
						"japanese": "この全ての真実を見通そうとした目が…自ら真実を歪めている！",
						"chinese": "试图洞察所有真相的眼睛…正在扭曲真相本身！",
						"french": "L'œil qui cherchait à percer toute vérité… tord la vérité elle-même !",
						"spanish": "¡El ojo que buscaba atravesar toda verdad… ahora está distorsionando la verdad misma!",
						"vietnamese": "Con mắt muốn xuyên thấu mọi sự thật… đang tự bóp méo sự thật!",
						"thai": "ดวงตาที่พยายามจะมองทะลุทุกความจริง…กำลังบิดเบือนความจริงเสียเอง!",
						"hindi": "वह आँख जो सभी सत्य को भेदना चाहती थी… अब स्वयं सत्य को विकृत कर रही है!"
					},
					"speaker": "ash",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "하하… 결국… 너도… 나의 환상에… 갇히는가…",
						"english": "Haha... In the end... you too... are trapped... in my illusion...",
						"japanese": "ハハ…結局…お前も…俺の幻想に…囚われるのか…",
						"chinese": "哈哈哈…最终…你…也…被困…在我的幻象中吗…",
						"french": "Haha... Finalement... toi aussi... tu es piégé... dans mon illusion...",
						"spanish": "Jaja... Al final... tú también... quedas atrapado... en mi ilusión...",
						"vietnamese": "Haha... Cuối cùng... ngươi cũng... bị nhốt... trong ảo ảnh của ta sao...",
						"thai": "ฮ่าฮ่า... ในที่สุด... เจ้าก็... ติดกับ... ในภาพลวงตาของข้า...",
						"hindi": "हाहा... अंत में... तुम भी... मेरे भ्रम में... फंस गए क्या..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 아니야. 절대로… 포기하지 않아.",
						"english": "...Not yet. I will never... give up.",
						"japanese": "…まだだ。決して…諦めない。",
						"chinese": "…还没。绝不…放弃。",
						"french": "...Pas encore. Je n'abandonnerai... jamais.",
						"spanish": "...Todavía no. Nunca... me rendiré.",
						"vietnamese": "...Chưa đâu. Tuyệt đối... không bỏ cuộc.",
						"thai": "...ยังไม่ใช่ตอนนี้. ข้าจะไม่มีวัน...ยอมแพ้.",
						"hindi": "...अभी नहीं। मैं कभी... हार नहीं मानूंगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "심연의 눈은 다시 빛을 뿜었다. 끝없는 절망의 환상이 재개되었다.",
						"english": "The Abyssal Eye glowed again. The illusion of endless despair resumed.",
						"japanese": "深淵の目は再び光を放った。終わりのない絶望の幻想が再開された。",
						"chinese": "深渊之眼再次发出光芒。无尽绝望的幻象再次开启。",
						"french": "L'Œil des Abysses brilla à nouveau. L'illusion d'un désespoir sans fin reprit.",
						"spanish": "El Ojo del Abismo brilló de nuevo. La ilusión de la desesperación sin fin se reanudó.",
						"vietnamese": "Con mắt vực sâu lại phát sáng. Ảo ảnh tuyệt vọng vô tận lại tiếp tục.",
						"thai": "ดวงตาแห่งห้วงลึกส่องแสงอีกครั้ง ภาพลวงตาแห่งความสิ้นหวังไม่รู้จบได้เริ่มต้นขึ้นใหม่.",
						"hindi": "रसातल की आँख फिर से चमक उठी। अंतहीन निराशा का भ्रम फिर से शुरू हो गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은… 환상은… 영원히… 반복될 뿐…",
						"english": "Foolish… illusions… will only… repeat forever…",
						"japanese": "愚かな…幻想は…永遠に…繰り返されるだけだ…",
						"chinese": "愚蠢的…幻象…只会…永远重复…",
						"french": "Stupides… illusions… ne feront… que se répéter éternellement…",
						"spanish": "Estúpidas… ilusiones… solo… se repetirán para siempre…",
						"vietnamese": "Ảo ảnh… ngu ngốc… sẽ chỉ… lặp lại mãi mãi…",
						"thai": "ภาพลวงตา…อันโง่เขลา…จะวนเวียน…ซ้ำไปตลอดกาล…",
						"hindi": "मूर्ख… भ्रम… बस… हमेशा के लिए दोहराए जाएँगे…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니. 여기서 끝이야. 네 거짓된 시선은.",
						"english": "No. This is where it ends. Your deceitful gaze.",
						"japanese": "いいえ。ここで終わりだ。お前の偽りの視線は。",
						"chinese": "不。到此为止了。你虚伪的视线。",
						"french": "Non. C'est ici que ça se termine. Ton regard trompeur.",
						"spanish": "No. Aquí termina. Tu mirada engañosa.",
						"vietnamese": "Không. Đây là kết thúc. Ánh nhìn dối trá của ngươi.",
						"thai": "ไม่. มันจบลงตรงนี้. สายตาที่หลอกลวงของเจ้า.",
						"hindi": "नहीं। यहीं ख़त्म होता है। तुम्हारी धोखेबाज़ नज़र।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "오스큐라의 거대한 눈이 서서히 감겼다. 뒤틀린 진실의 세상이 부서지기 시작했다.",
						"english": "Oscura's giant eye slowly closed. The world of twisted truth began to shatter.",
						"japanese": "オスキュラの巨大な目がゆっくりと閉じられた。歪んだ真実の世界が崩れ始めた。",
						"chinese": "奥斯库拉的巨眼缓缓闭合。扭曲的真相世界开始崩塌。",
						"french": "L'œil géant d'Oscura se ferma lentement. Le monde de la vérité tordue commença à se briser.",
						"spanish": "El ojo gigante de Oscura se cerró lentamente. El mundo de la verdad retorcida comenzó a desmoronarse.",
						"vietnamese": "Con mắt khổng lồ của Oscura từ từ nhắm lại. Thế giới của sự thật méo mó bắt đầu vỡ vụn.",
						"thai": "ดวงตายักษ์ของออสกูราปิดลงช้าๆ โลกแห่งความจริงที่บิดเบือนเริ่มแตกสลาย.",
						"hindi": "ओस्कुरा की विशाल आँख धीरे-धीरे बंद हो गई। मुड़ी हुई सच्चाई की दुनिया बिखरने लगी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만 여운은 남았다. 모든 환상 속에서 가장 깊었던 그리움은… 과연 무엇이었을까.",
						"english": "But a lingering impression remained. Among all illusions, what was the deepest longing...?",
						"japanese": "しかし、余韻は残った。すべての幻想の中で最も深かった懐かしさは…一体何だったのだろうか。",
						"chinese": "但余韵犹存。在所有幻象中，最深沉的思念究竟是什么呢？",
						"french": "Mais une impression persistante demeurait. Parmi toutes les illusions, quel était le désir le plus profond... ?",
						"spanish": "Pero una impresión persistente permaneció. Entre todas las ilusiones, ¿cuál fue el anhelo más profundo...?",
						"vietnamese": "Nhưng dư âm vẫn còn đọng lại. Trong tất cả ảo ảnh, nỗi khát khao sâu sắc nhất... rốt cuộc là gì?",
						"thai": "แต่ความรู้สึกยังคงอยู่. ในบรรดาภาพลวงตาทั้งหมด ความปรารถนาที่ลึกที่สุดคืออะไรกันแน่?",
						"hindi": "लेकिन एक अधूरी छाप शेष रही। सभी भ्रमों में, सबसे गहरी लालसा क्या थी...?"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"emotion": "angry",
					"content": {
						"korean": "안 돼! 제발… 받아들이지 마! 이건 네 진실이 아니야!",
						"english": "No! Please… don't accept it! This isn't your truth!",
						"japanese": "だめだ！頼む…受け入れるな！これはお前の真実ではない！",
						"chinese": "不！求你…别接受！这不是你的真相！",
						"french": "Non ! S'il te plaît… ne l'accepte pas ! Ce n'est pas ta vérité !",
						"spanish": "¡No! Por favor… ¡no lo aceptes! ¡Esta no es tu verdad!",
						"vietnamese": "Không! Làm ơn… đừng chấp nhận nó! Đây không phải sự thật của ngươi!",
						"thai": "ไม่นะ! ได้โปรด…อย่ารับมัน! นี่ไม่ใช่ความจริงของเจ้า!",
						"hindi": "नहीं! कृपया… इसे स्वीकार मत करो! यह तुम्हारा सत्य नहीं है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "…네가 본 모든 것은 나였다. 진실? 환상은 언제나 진실보다 달콤하지 않던가?",
						"english": "…Everything you saw was me. Truth? Isn't illusion always sweeter than truth?",
						"japanese": "…お前が見た全ては私だった。真実？幻想は常に真実よりも甘美ではないか？",
						"chinese": "…你所看到的一切都是我。真相？幻象难道不总是比真相更甜美吗？",
						"french": "…Tout ce que tu as vu, c'était moi. La vérité ? L'illusion n'est-elle pas toujours plus douce que la vérité ?",
						"spanish": "…Todo lo que viste fui yo. ¿Verdad? ¿Acaso la ilusión no es siempre más dulce que la verdad?",
						"vietnamese": "…Tất cả những gì ngươi thấy đều là ta. Sự thật ư? Chẳng phải ảo ảnh luôn ngọt ngào hơn sự thật sao?",
						"thai": "…ทุกสิ่งที่เจ้าเห็นคือข้าเอง ความจริงงั้นรึ? ภาพลวงตาไม่ใช่หรือที่หอมหวานกว่าความจริงเสมอ?",
						"hindi": "…जो कुछ भी तुमने देखा वह मैं ही था। सत्य? क्या भ्रम हमेशा सत्य से ज़्यादा मधुर नहीं होता?"
					}
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "이곳에선, 내가 곧 진실이다.",
						"english": "Here, I am the truth.",
						"japanese": "ここでは、私が真実だ。",
						"chinese": "在这里，我就是真相。",
						"french": "Ici, je suis la vérité.",
						"spanish": "Aquí, yo soy la verdad.",
						"vietnamese": "Ở đây, ta chính là sự thật.",
						"thai": "ที่นี่ ข้าคือความจริง",
						"hindi": "यहाँ, मैं ही सत्य हूँ।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네 거짓된 진실에… 내 그리움을 짓밟게 두지 않아!",
						"english": "I won't let your false truth… trample my yearning!",
						"japanese": "お前の偽りの真実に…私の郷愁を踏みにじらせはしない！",
						"chinese": "我不会让你的虚假真相…践踏我的思念！",
						"french": "Je ne laisserai pas ta fausse vérité… piétiner ma nostalgie !",
						"spanish": "¡No dejaré que tu falsa verdad… pisotee mi anhelo!",
						"vietnamese": "Ta sẽ không để sự thật giả dối của ngươi… chà đạp nỗi khao khát của ta!",
						"thai": "ข้าจะไม่ยอมให้ความจริงลวงของเจ้า…ย่ำยีความคะนึงหาของข้า!",
						"hindi": "मैं तुम्हारी झूठी सच्चाई को… अपनी लालसा को कुचलने नहीं दूँगा!"
					},
					"type": "speech"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "…네 기억… 전부 조롱당할 거야… 도망쳐!",
						"english": "…Your memories… they'll all be mocked… Run!",
						"japanese": "…お前の記憶…全て嘲笑われるだろう…逃げろ！",
						"chinese": "…你的记忆…都会被嘲弄…快逃！",
						"french": "…Tes souvenirs… ils seront tous moqués… Fuis !",
						"spanish": "…Tus recuerdos… todos serán burlados… ¡Huye!",
						"vietnamese": "…Ký ức của ngươi… tất cả sẽ bị chế giễu… Chạy đi!",
						"thai": "…ความทรงจำของเจ้า…ทั้งหมดจะถูกเยาะเย้ย…หนีไป!",
						"hindi": "…तुम्हारी यादें… सब मज़ाक बन जाएँगी… भागो!"
					},
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"speaker": "ash",
					"direction": "down",
					"type": "direction",
					"action": "exit"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계는 눈을 감았다. 오스큐라의 심연 속에서.",
			"찬란했던 환상은 부서지고, 진실은 발톱을 드러냈다.",
			"애쉬의 절규는 경고였다. 모든 것이 거짓이라고.",
			"이제, 가장 깊은 그리움마저 조롱당할 시간이었다."
		],
		"english": [
			"The world closed its eyes. In the abyss of Oscura.",
			"Brilliant illusions shattered, and truth bared its fangs.",
			"Ash's scream was a warning. That everything was a lie.",
			"Now, even the deepest longing was to be mocked."
		],
		"japanese": [
			"世界は目を閉じた。オスクーラの深淵の中で。",
			"輝かしい幻想は砕け散り、真実はその爪を剥き出しにした。",
			"アッシュの叫びは警告だった。すべてが偽りだと。",
			"今、最も深い郷愁さえも嘲笑される時が来た。"
		],
		"chinese": [
			"世界闭上了双眼。在奥斯库拉的深渊中。",
			"辉煌的幻象破碎，真相露出了爪牙。",
			"艾什的尖叫是警告。一切都是谎言。",
			"如今，连最深的思念都将被嘲弄。"
		],
		"french": [
			"Le monde ferma les yeux. Dans l'abîme d'Oscura.",
			"Les illusions brillantes se brisèrent, et la vérité révéla ses griffes.",
			"Le cri d'Ash était un avertissement. Que tout était mensonge.",
			"Maintenant, même le désir le plus profond serait moqué."
		],
		"spanish": [
			"El mundo cerró los ojos. En el abismo de Oscura.",
			"Las ilusiones brillantes se hicieron añicos, y la verdad mostró sus garras.",
			"El grito de Ash fue una advertencia. Que todo era mentira.",
			"Ahora, incluso el anhelo más profundo sería burlado."
		],
		"vietnamese": [
			"Thế giới nhắm mắt lại. Trong vực thẳm của Oscura.",
			"Những ảo ảnh huy hoàng tan vỡ, và sự thật lộ rõ nanh vuốt.",
			"Tiếng hét của Ash là một lời cảnh báo. Rằng tất cả đều là dối trá.",
			"Giờ đây, ngay cả nỗi nhớ sâu sắc nhất cũng sẽ bị chế nhạo."
		],
		"thai": [
			"โลกปิดตาลง ในห้วงลึกของ Oscura",
			"ภาพลวงตาที่รุ่งโรจน์แตกสลาย และความจริงก็เผยเขี้ยวเล็บ",
			"เสียงกรีดร้องของแอชคือคำเตือน ว่าทุกสิ่งเป็นเรื่องโกหก",
			"บัดนี้ แม้แต่ความปรารถนาที่ลึกซึ้งที่สุดก็ถูกเย้ยหยัน"
		],
		"hindi": [
			"दुनिया ने अपनी आँखें बंद कर लीं। ऑस्कुरा के अथाह कुंड में।",
			"शानदार भ्रम टूट गए, और सच्चाई ने अपने पंजे फैला दिए।",
			"ऐश की चीख एक चेतावनी थी। कि सब कुछ झूठ था।",
			"अब, सबसे गहरी लालसा का भी मज़ाक उड़ाया जाना था।"
		]
	},
	"epilogue": {
		"korean": [
			"지옥의 심연은 침묵했다. 오스큐라의 거짓된 눈은 이제 빛을 잃었다.",
			"모든 환상이 부서진 자리엔, 차가운 진실만이 남았다.",
			"애쉬의 절규는 더 이상 들리지 않았다. 그녀는 무엇을 기억하고 무엇을 잊었을까.",
			"그리움은… 고통스러운 진실보다 달콤한 거짓이었다. 구원이었을까, 또 다른 침해였을까."
		],
		"english": [
			"The abyss of hell was silent. Oscura's false eyes had lost their light.",
			"Where all illusions shattered, only cold truth remained.",
			"Ash's scream was no longer heard. What did she remember, and what did she forget?",
			"Longing... was a sweet lie, sweeter than painful truth. Was it salvation, or another transgression?"
		],
		"japanese": [
			"地獄の深淵は沈黙した。オスクーラの偽りの目は、もはや光を失っていた。",
			"すべての幻想が砕け散った場所には、冷たい真実だけが残った。",
			"アッシュの叫びはもう聞こえなかった。彼女は何を覚え、何を忘れたのだろうか。",
			"郷愁は…苦痛な真実よりも甘い偽りだった。それは救済だったのか、それとも新たな侵害だったのか。"
		],
		"chinese": [
			"地狱的深渊归于沉寂。奥斯库拉虚假的双眼已失去光芒。",
			"所有幻象破碎之处，只剩下冰冷的真相。",
			"艾什的尖叫声不再响起。她记住了什么，又遗忘了什么？",
			"思念……是比痛苦真相更甜蜜的谎言。那是救赎，还是又一次侵犯？"
		],
		"french": [
			"L'abîme des enfers était silencieux. Les faux yeux d'Oscura avaient perdu leur lumière.",
			"Là où toutes les illusions se brisèrent, seule la froide vérité demeura.",
			"Le cri d'Ash ne fut plus entendu. Que se souvenait-elle, et qu'avait-elle oublié ?",
			"Le désir... était un doux mensonge, plus doux que la douloureuse vérité. Était-ce le salut, ou une autre transgression ?"
		],
		"spanish": [
			"El abismo del infierno guardó silencio. Los ojos falsos de Oscura habían perdido su luz.",
			"Donde todas las ilusiones se hicieron añicos, solo la fría verdad permaneció.",
			"El grito de Ash ya no se escuchó. ¿Qué recordaba ella, y qué olvidó?",
			"El anhelo... era una dulce mentira, más dulce que la verdad dolorosa. ¿Fue salvación, u otra transgresión?"
		],
		"vietnamese": [
			"Vực thẳm địa ngục im lặng. Đôi mắt giả dối của Oscura giờ đây đã mất đi ánh sáng.",
			"Nơi tất cả ảo ảnh tan vỡ, chỉ còn lại sự thật lạnh lùng.",
			"Tiếng hét của Ash không còn được nghe thấy nữa. Cô ấy đã nhớ gì, và đã quên gì?",
			"Nỗi nhớ... là một lời nói dối ngọt ngào hơn sự thật đau đớn. Đó là sự cứu rỗi, hay một sự vi phạm khác?"
		],
		"thai": [
			"ห้วงเหวนรกเงียบงัน ดวงตาจอมปลอมของ Oscura สิ้นแสงแล้ว",
			"ณ ที่ที่ภาพลวงตาทั้งมวลแตกสลาย เหลือเพียงความจริงอันเย็นชา",
			"เสียงกรีดร้องของแอชไม่ถูกได้ยินอีกต่อไป เธอจำอะไรได้ และลืมอะไรไปบ้าง?",
			"ความคิดถึง... เป็นคำโกหกที่หอมหวานกว่าความจริงอันเจ็บปวด มันคือความรอด หรือการรุกล้ำอีกครั้ง?"
		],
		"hindi": [
			"नर्क का अथाह कुंड शांत था। ऑस्कura की झूठी आँखों ने अपनी रोशनी खो दी थी।",
			"जहाँ सारे भ्रम टूट गए, वहाँ केवल कड़वी सच्चाई बची।",
			"ऐश की चीख अब नहीं सुनाई देती थी। उसने क्या याद रखा, और क्या भूल गई?",
			"लालसा... दर्दनाक सच्चाई से ज़्यादा मीठा झूठ था। क्या यह मोक्ष था, या एक और अतिक्रमण?"
		]
	}
} as const;
