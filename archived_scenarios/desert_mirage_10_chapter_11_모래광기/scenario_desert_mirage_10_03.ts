export const scenario_desert_mirage_10_03 = {
	"scenario_id": "desert_mirage_10_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ferro": {
			"id": "mon_5c70c6fb-4f52-4d23-99f0-5feaf177dd7d",
			"name": {
				"korean": "페로",
				"english": "Ferro",
				"japanese": "フェロ",
				"chinese": "费罗",
				"french": "Ferro",
				"spanish": "Ferro",
				"vietnamese": "Ferro",
				"thai": "เฟอร์โร",
				"hindi": "फेरो"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3074391-6f80-4537-3ad2-d4347b9d5500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3c6cecf-f0c6-42f7-cda1-ddf11348ad00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "고대 도시의 잔해. 한때 푸르렀던 흔적만 남았다.",
						"english": "Ruins of an ancient city. Only traces of its former lushness remain.",
						"japanese": "古代都市の残骸。かつて緑豊かだった痕跡だけが残る。",
						"chinese": "古老城市的残骸。只剩下昔日繁盛的痕迹。",
						"french": "Ruines d'une cité antique. Seules subsistent les traces de sa splendeur passée.",
						"spanish": "Ruinas de una ciudad antigua. Solo quedan rastros de su antigua exuberancia.",
						"vietnamese": "Tàn tích của một thành phố cổ đại. Chỉ còn lại dấu vết của sự tươi tốt một thời.",
						"thai": "ซากปรักหักพังของเมืองโบราณ เหลือเพียงร่องรอยความเขียวขจีในอดีต",
						"hindi": "एक प्राचीन शहर के खंडहर। केवल उसकी पुरानी हरियाली के निशान बचे हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 그… 환영으로 봤던 도시인가?",
						"english": "Is this... the city I saw in my vision?",
						"japanese": "ここが…幻で見たあの都市なのか？",
						"chinese": "这里就是……我在幻象中看到的城市吗？",
						"french": "C'est donc ici... la ville que j'ai vue en vision ?",
						"spanish": "¿Es esta... la ciudad que vi en mi visión?",
						"vietnamese": "Đây là... thành phố mà tôi đã thấy trong ảo ảnh sao?",
						"thai": "ที่นี่คือ... เมืองที่ฉันเห็นในนิมิตหรือเปล่า?",
						"hindi": "क्या यह... वही शहर है जिसे मैंने अपनी दृष्टि में देखा था?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ferro",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "놀랍군. 이 비석… 해독해야 할 기록이 있어.",
						"english": "Amazing. This stele... it holds records to be deciphered.",
						"japanese": "驚きだ。この石碑…解読すべき記録がある。",
						"chinese": "真令人惊讶。这块石碑……有待解读的记录。",
						"french": "Incroyable. Cette stèle... elle contient des écrits à déchiffrer.",
						"spanish": "Asombroso. Esta estela... tiene registros por descifrar.",
						"vietnamese": "Thật kinh ngạc. Tấm bia này... có những ghi chép cần được giải mã.",
						"thai": "น่าทึ่งมาก ศิลาจารึกนี้... มีบันทึกที่ต้องถอดรหัส",
						"hindi": "अद्भुत। यह शिला... इसमें deciphered किए जाने वाले रिकॉर्ड हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "제발… 이 사막의 진실을 알려줘.",
						"english": "Please... reveal the truth of this desert.",
						"japanese": "頼む…この砂漠の真実を教えてくれ。",
						"chinese": "拜托了……请告诉我这片沙漠的真相。",
						"french": "S'il vous plaît... révélez la vérité de ce désert.",
						"spanish": "Por favor... revela la verdad de este desierto.",
						"vietnamese": "Làm ơn... hãy tiết lộ sự thật về sa mạc này.",
						"thai": "โปรด... เปิดเผยความจริงของทะเลทรายนี้",
						"hindi": "कृपया... इस रेगिस्तान का सच बताओ।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "ferro",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "ferro",
					"content": {
						"korean": "해석했어… 충격적인 내용이야.",
						"english": "I've deciphered it... the contents are shocking.",
						"japanese": "解読した…衝撃的な内容だ。",
						"chinese": "我解读出来了……内容令人震惊。",
						"french": "Je l'ai déchiffré... le contenu est choquant.",
						"spanish": "Lo he descifrado... el contenido es impactante.",
						"vietnamese": "Tôi đã giải mã được... nội dung thật sốc.",
						"thai": "ฉันถอดรหัสได้แล้ว... เนื้อหาน่าตกใจ",
						"hindi": "मैंने इसे decipher कर लिया है... सामग्री चौंकाने वाली है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐든 말해봐. 더 이상은…",
						"english": "Tell me anything. No more...",
						"japanese": "何でも話してくれ。これ以上は…",
						"chinese": "告诉我吧。我不能再等了……",
						"french": "Dis-moi tout. Plus maintenant...",
						"spanish": "Dime lo que sea. Ya no más...",
						"vietnamese": "Hãy nói bất cứ điều gì. Không thể chịu đựng thêm nữa...",
						"thai": "บอกฉันมาเถอะ ไม่ว่าอะไรก็ตาม ฉันทนไม่ไหวแล้ว",
						"hindi": "कुछ भी बताओ। अब और नहीं..."
					},
					"emotion": "angry"
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "이 왕국은… 스스로 사막이 되려 했어.",
						"english": "This kingdom... tried to become a desert itself.",
						"japanese": "この王国は…自ら砂漠になろうとしたんだ。",
						"chinese": "这个王国…曾想把自己变成沙漠。",
						"french": "Ce royaume... a voulu devenir un désert de lui-même.",
						"spanish": "Este reino... intentó convertirse en un desierto por sí mismo.",
						"vietnamese": "Vương quốc này... đã tự biến mình thành sa mạc.",
						"thai": "อาณาจักรนี้... พยายามที่จะกลายเป็นทะเลทรายด้วยตัวเอง",
						"hindi": "इस राज्य ने... खुद को रेगिस्तान बनाने की कोशिश की थी।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐라고? 말도 안 돼! 왜?",
						"english": "What? That's absurd! Why?",
						"japanese": "何だって？信じられない！なぜだ？",
						"chinese": "什么？荒谬！为什么？",
						"french": "Quoi ? C'est absurde ! Pourquoi ?",
						"spanish": "¿Qué? ¡Eso es absurdo! ¿Por qué?",
						"vietnamese": "Gì cơ? Thật vô lý! Tại sao?",
						"thai": "อะไรนะ? เหลวไหลสิ้นดี! ทำไมล่ะ?",
						"hindi": "क्या? यह बेतुका है! क्यों?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "ferro",
					"content": {
						"korean": "그 실패가… 지금의 이 사막을 만들었어.",
						"english": "That failure... created this desert we see now.",
						"japanese": "その失敗が…今のこの砂漠を作り出したんだ。",
						"chinese": "那次失败…造就了现在的这片沙漠。",
						"french": "Cet échec... a créé ce désert actuel.",
						"spanish": "Ese fracaso... creó este desierto actual.",
						"vietnamese": "Thất bại đó... đã tạo nên sa mạc này.",
						"thai": "ความล้มเหลวนั้น... ได้สร้างทะเลทรายแห่งนี้ขึ้นมา",
						"hindi": "उस विफलता ने... इस रेगिस्तान को बनाया।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ferro",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ferro",
					"content": {
						"korean": "비극이야. 광기만이 남아 이 땅을 뒤덮었어.",
						"english": "It's a tragedy. Only madness remains, covering this land.",
						"japanese": "悲劇だ。狂気だけが残り、この地を覆った。",
						"chinese": "这是个悲剧。只有疯狂留存，覆盖了这片土地。",
						"french": "C'est une tragédie. Seule la folie demeure, couvrant cette terre.",
						"spanish": "Es una tragedia. Solo la locura permanece, cubriendo esta tierra.",
						"vietnamese": "Thật bi thảm. Chỉ còn sự điên loạn bao trùm mảnh đất này.",
						"thai": "เป็นโศกนาฏกรรม ความบ้าคลั่งเท่านั้นที่ยังคงปกคลุมผืนดินนี้",
						"hindi": "यह एक त्रासदी है। केवल पागलपन बचा है, जिसने इस भूमि को ढक लिया है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "그럼 우린… 영원히 여기서 미쳐가는 건가?",
						"english": "So... are we to go mad here forever?",
						"japanese": "じゃあ俺たちは…ここで永遠に狂っていくのか？",
						"chinese": "那么我们…会永远在这里发疯吗？",
						"french": "Alors... allons-nous devenir fous ici pour toujours ?",
						"spanish": "¿Entonces... vamos a enloquecer aquí para siempre?",
						"vietnamese": "Vậy chúng ta... sẽ điên loạn mãi mãi ở đây sao?",
						"thai": "ถ้าอย่างนั้นพวกเรา... จะต้องบ้าคลั่งอยู่ที่นี่ตลอดไปหรือเปล่า?",
						"hindi": "तो क्या हम... हमेशा के लिए यहीं पागल होते रहेंगे?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "내 손이… 모래처럼 변해가…",
						"english": "My hand... is turning to sand...",
						"japanese": "俺の手が…砂のように変わっていく…",
						"chinese": "我的手…正在变成沙子…",
						"french": "Ma main... se transforme en sable...",
						"spanish": "Mi mano... se está convirtiendo en arena...",
						"vietnamese": "Tay ta... đang biến thành cát...",
						"thai": "มือของฉัน... กำลังกลายเป็นทราย...",
						"hindi": "मेरा हाथ... रेत में बदल रहा है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ferro",
					"content": {
						"korean": "변이가 가속되고 있어. 이성을 잃지 마…! (고대 비석을 가리키며) 이 기록에… 푸른 대륙에서 온 위대한 검객의 전설이 희미하게 남아있어.",
						"english": "The mutation is accelerating. Don't lose your mind...! (Pointing to an ancient stele) This record... faintly holds the legend of a great swordsman from the Blue Continent.",
						"japanese": "変異が加速している。理性を失うな…！ (古代の石碑を指しながら) この記録に…青い大陸から来た偉大な剣士の伝説がかすかに残っている。",
						"chinese": "变异正在加速。别失去理智…！（指着一块古老的石碑）这记载里…隐约留存着一位来自蓝色大陆的伟大剑客的传说。",
						"french": "La mutation s'accélère. Ne perds pas la raison...! (Désignant une ancienne stèle) Ce registre... conserve faiblement la légende d'un grand épéiste venu du Continent Bleu.",
						"spanish": "La mutación se está acelerando. ¡No pierdas la cordura...! (Señalando una antigua estela) En este registro... queda débilmente la leyenda de un gran espadachín del Continente Azul.",
						"vietnamese": "Biến dị đang tăng tốc. Đừng mất lý trí...! (Chỉ vào một tấm bia cổ) Trong ghi chép này... còn mờ nhạt truyền thuyết về một kiếm khách vĩ đại đến từ Lục địa Xanh.",
						"thai": "การกลายพันธุ์กำลังเร่งตัวขึ้น อย่าเสียสติไปนะ...! (ชี้ไปที่ศิลาจารึกโบราณ) ในบันทึกนี้... ยังคงมีตำนานของยอดนักดาบผู้ยิ่งใหญ่จากทวีปสีครามหลงเหลืออยู่จางๆ",
						"hindi": "उत्परिवर्तन तेज़ हो रहा है। अपना होश मत खोना...! (एक प्राचीन शिलालेख की ओर इशारा करते हुए) इस अभिलेख में... नीले महाद्वीप से आए एक महान तलवारबाज की किंवदंती धुंधली सी बची है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "희망이… 있다는 건가?",
						"english": "So... there's hope?",
						"japanese": "希望が…あるってことか？",
						"chinese": "意思是…还有希望吗？",
						"french": "Il y a... de l'espoir, alors ?",
						"spanish": "¿Hay... esperanza, entonces?",
						"vietnamese": "Có... hy vọng sao?",
						"thai": "นี่... มีความหวังงั้นหรือ?",
						"hindi": "तो... उम्मीद है?"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모래 변이가 육체를 빠르게 잠식했다. 이성은 흐려지고, 분노만이 남았다.",
						"english": "The sand mutation rapidly encroached upon the body. Reason blurred, and only wrath remained.",
						"japanese": "砂の変異が肉体を急速に侵食した。理性は薄れ、怒りだけが残った。",
						"chinese": "沙化变异迅速侵蚀了肉体。理智变得模糊，只剩下愤怒。",
						"french": "La mutation de sable a rapidement envahi le corps. La raison s'est troublée, seule la colère est restée.",
						"spanish": "La mutación de arena invadió rápidamente el cuerpo. La razón se nubló, y solo quedó la ira.",
						"vietnamese": "Biến dị cát nhanh chóng xâm chiếm cơ thể. Lý trí mờ nhạt, chỉ còn lại sự phẫn nộ.",
						"thai": "การกลายพันธุ์ของทรายได้กัดกินร่างกายอย่างรวดเร็ว สติปัญญาเลือนราง เหลือเพียงความโกรธแค้นเท่านั้น",
						"hindi": "रेत के उत्परिवर्तन ने शरीर को तेज़ी से घेर लिया। विवेक धुंधला हो गया, और केवल क्रोध ही बचा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "귓가에 들려… 과거의 환청이… (손목의 모래 균열을 보며) 내 몸이…!",
						"english": "I hear... hallucinations from the past... (Looking at the sand cracks on their wrist) My body...!",
						"japanese": "耳元で聞こえる…過去の幻聴が… (手首の砂の亀裂を見ながら) 俺の体が…！",
						"chinese": "耳边响起…过去的幻听…（看着手腕上的沙裂）我的身体…！",
						"french": "J'entends... des hallucinations du passé... (Regardant les fissures de sable sur son poignet) Mon corps...!",
						"spanish": "Escucho... alucinaciones del pasado... (Mirando las grietas de arena en su muñeca) ¡Mi cuerpo...!",
						"vietnamese": "Tai ta nghe thấy... ảo thanh từ quá khứ... (Nhìn vết nứt cát trên cổ tay) Cơ thể ta...!",
						"thai": "ฉันได้ยิน... ภาพหลอนจากอดีต... (มองรอยแตกทรายบนข้อมือ) ร่างกายของฉัน...!",
						"hindi": "मुझे सुनाई दे रहा है... अतीत के मतिभ्रम... (अपनी कलाई पर रेत की दरारें देखकर) मेरा शरीर...!"
					},
					"type": "speech"
				},
				{
					"speaker": "ferro",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "ferro",
					"content": {
						"korean": "안 돼! 버텨야 해! 이대로 광기에 잠식될 순 없어!",
						"english": "No! I must resist! I can't let this madness consume me!",
						"japanese": "だめだ！耐えなければ！このまま狂気に飲まれるわけにはいかない！",
						"chinese": "不行！我必须坚持住！不能就这样被疯狂吞噬！",
						"french": "Non ! Je dois tenir bon ! Je ne peux pas me laisser consumer par cette folie !",
						"spanish": "¡No! ¡Debo resistir! ¡No puedo dejar que esta locura me consuma!",
						"vietnamese": "Không! Phải chịu đựng! Không thể để sự điên loạn này nuốt chửng mình được!",
						"thai": "ไม่นะ! ต้องทนไว้! ปล่อยให้ความบ้าคลั่งกลืนกินไม่ได้!",
						"hindi": "नहीं! मुझे टिके रहना होगा! मैं इस पागलपन को मुझे निगलने नहीं दे सकता!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이 모든 걸… 부숴버릴 거야…! 모든 광기를…!",
						"english": "I'll… shatter all of this…! All the madness…!",
						"japanese": "この全てを…破壊してやる…！全ての狂気を…！",
						"chinese": "我要…摧毁这一切…！所有的疯狂…！",
						"french": "Je… briserai tout cela… ! Toute cette folie… !",
						"spanish": "¡Destruiré… todo esto…! ¡Toda la locura…!",
						"vietnamese": "Ta sẽ… phá hủy tất cả…! Tất cả sự điên loạn…!",
						"thai": "ข้าจะ… ทำลายทุกสิ่ง…! ความบ้าคลั่งทั้งหมด…!",
						"hindi": "मैं यह सब… तोड़ दूंगा…! सारा पागलपन…!"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "크하하… 감히 인간들이 여기까지 왔군. 어리석은 것들.",
						"english": "Hahaha… Mortals dare to come this far. Foolish creatures.",
						"japanese": "クハハ… 人間どもがここまで来るとはな。愚かな者たちめ。",
						"chinese": "哈哈哈… 人类竟然敢走到这里。愚蠢的家伙们。",
						"french": "Hahaha… Des mortels osent venir jusqu'ici. Créatures insensées.",
						"spanish": "Jajaja… ¿Humanos se atreven a llegar tan lejos? Estúpidos.",
						"vietnamese": "Khà khà… Loài người dám đến tận đây sao. Bọn ngu ngốc.",
						"thai": "คึคึคึ… มนุษย์กล้ามาถึงที่นี่รึ. พวกโง่เง่า.",
						"hindi": "हाहाहा… नश्वर प्राणी इतनी दूर आने की हिम्मत करते हैं। मूर्ख जीव।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 사막의 광기인가!",
						"english": "Are you… the madness of this desert!",
						"japanese": "お前が…この砂漠の狂気か！",
						"chinese": "你就是…这片沙漠的疯狂吗！",
						"french": "Tu es… la folie de ce désert !",
						"spanish": "¡Tú eres… la locura de este desierto!",
						"vietnamese": "Ngươi… là sự điên loạn của sa mạc này sao!",
						"thai": "เจ้าคือ… ความบ้าคลั่งแห่งทะเลทรายนี้หรือ!",
						"hindi": "क्या तुम… इस रेगिस्तान का पागलपन हो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "파멸만이 너희를 구원할 것이다. 내게 덤벼라!",
						"english": "Only ruin will save you. Come at me!",
						"japanese": "破滅だけがお前たちを救うだろう。かかってこい！",
						"chinese": "只有毁灭才能拯救你们。向我进攻吧！",
						"french": "Seule la ruine vous sauvera. Attaquez-moi !",
						"spanish": "Solo la ruina os salvará. ¡Atacadme!",
						"vietnamese": "Chỉ có sự hủy diệt mới cứu rỗi được các ngươi. Hãy tấn công ta đi!",
						"thai": "มีแต่ความพินาศเท่านั้นที่จะช่วยพวกเจ้าได้. เข้ามาเลย!",
						"hindi": "केवल विनाश ही तुम्हें बचाएगा। मुझ पर हमला करो!"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "미련한 것들. 어차피 모두 모래가 될 운명! 하하하!",
						"english": "Foolish creatures. All are destined to become sand anyway! Hahaha!",
						"japanese": "愚かな者たちめ。どうせ皆砂になる運命だ！ハハハ！",
						"chinese": "愚蠢的家伙们。反正都会变成沙子！哈哈哈！",
						"french": "Créatures insensées. Vous êtes tous destinés à devenir du sable de toute façon ! Hahaha !",
						"spanish": "Estúpidos. ¡Todos estáis destinados a convertiros en arena de todos modos! ¡Jajajaja!",
						"vietnamese": "Bọn ngu ngốc. Đằng nào thì tất cả cũng sẽ thành cát bụi thôi! Ha ha ha!",
						"thai": "พวกโง่เขลา. ยังไงซะทุกคนก็ต้องกลายเป็นทราย! ฮ่าฮ่าฮ่า!",
						"hindi": "मूर्ख जीव। वैसे भी सबका रेत बन जाना ही नियति है! हाहाहा!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 포기할 수 없어… 반드시 막을 거야…",
						"english": "Not yet... Can't give up... I will stop it!",
						"japanese": "まだ… 諦められない… 必ず止める！",
						"chinese": "还没… 不能放弃… 我一定要阻止！",
						"french": "Pas encore... Je ne peux pas abandonner... Je l'arrêterai !",
						"spanish": "Todavía no... No puedo rendirme... ¡Lo detendré!",
						"vietnamese": "Chưa... Không thể từ bỏ... Tôi nhất định phải ngăn chặn!",
						"thai": "ยัง... ยอมแพ้ไม่ได้... ฉันต้องหยุดมันให้ได้!",
						"hindi": "अभी नहीं... मैं हार नहीं मान सकता... मैं इसे रोकूंगा ही!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크아악… 이럴 리가… 나의… 광기는… 영원하다… {random_boss}는 사라지지 않아…",
						"english": "Gaaah… This can't be… My… madness… is eternal… {random_boss} won't disappear…",
						"japanese": "クアアア… まさか… 私の… 狂気は… 永遠だ… {random_boss}は消えない…",
						"chinese": "嘎啊… 这不可能… 我的… 疯狂… 是永恒的… {random_boss}不会消失的…",
						"french": "Aaaah… C'est impossible… Ma… folie… est éternelle… {random_boss} ne disparaîtra pas…",
						"spanish": "¡Aaaah…! Esto no puede ser… Mi… locura… es eterna… {random_boss} no desaparecerá…",
						"vietnamese": "Áaaaa… Không thể nào… Sự điên loạn của ta… là vĩnh cửu… {random_boss} sẽ không biến mất…",
						"thai": "ก๊าาา… ไม่จริง… ความบ้าคลั่งของข้า… เป็นนิรันดร์… {random_boss} จะไม่หายไป…",
						"hindi": "आआह… ऐसा नहीं हो सकता… मेरा… पागलपन… शाश्वत है… {random_boss} गायब नहीं होगा…"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝났나… 드디어…",
						"english": "Is it over… Finally…",
						"japanese": "終わったのか… ついに…",
						"chinese": "结束了吗… 终于…",
						"french": "C'est fini… Enfin…",
						"spanish": "¿Ha terminado… Por fin…?",
						"vietnamese": "Kết thúc rồi sao… Cuối cùng thì…",
						"thai": "จบแล้วรึ… ในที่สุด…",
						"hindi": "क्या यह खत्म हो गया… आखिरकार…"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 {random_boss}의 잔해는 모래가 되어 흩어졌다.",
						"english": "The remains of the fallen {random_boss} scattered into sand.",
						"japanese": "倒れた{random_boss}の残骸は砂となって散っていった。",
						"chinese": "倒下的{random_boss}的残骸化作沙粒四散。",
						"french": "Les vestiges du {random_boss} vaincu se sont dispersés en sable.",
						"spanish": "Los restos del {random_boss} caído se dispersaron como arena.",
						"vietnamese": "Tàn dư của {random_boss} đã gục ngã tan thành cát bụi.",
						"thai": "ซากของ {random_boss} ที่ล้มลงกลายเป็นทรายและกระจัดกระจายไป.",
						"hindi": "गिरे हुए {random_boss} के अवशेष रेत में बिखर गए।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그러나 사막의 속삭임은 멈추지 않았다. 더 깊은 곳에서, 또 다른 광기가 기다리고 있었다.",
						"english": "But the whispers of the desert did not cease. Deeper within, another madness awaited.",
						"japanese": "しかし、砂漠の囁きは止まなかった。さらに深い場所で、別の狂気が待ち受けていた。",
						"chinese": "然而，沙漠的低语并未停止。在更深处，另一种疯狂正在等待。",
						"french": "Mais les murmures du désert ne cessèrent pas. Plus profondément, une autre folie attendait.",
						"spanish": "Pero los susurros del desierto no cesaron. En lo más profundo, otra locura aguardaba.",
						"vietnamese": "Nhưng những lời thì thầm của sa mạc vẫn không ngừng. Sâu hơn nữa, một sự điên loạn khác đang chờ đợi.",
						"thai": "แต่เสียงกระซิบของทะเลทรายก็ไม่หยุดลง. ลึกเข้าไปอีก, ความบ้าคลั่งอีกอย่างกำลังรอคอยอยู่.",
						"hindi": "लेकिन रेगिस्तान की फुसफुसाहट बंद नहीं हुई। और गहराई में, एक और पागलपन इंतज़ार कर रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"한때 푸르렀던 고대 왕국의 폐허.",
			"사막의 모든 진실이 그곳에 잠들어 있었다.",
			"끔찍한 기록이 드러나고, 광기는 모두를 잠식한다.",
			"시간은 흐르고, 모래는 차오른다. 피할 수 없는 운명처럼."
		],
		"english": [
			"Ruins of an ancient kingdom, once lush.",
			"All truths of the desert lay dormant there.",
			"Horrific records surface, madness consumes all.",
			"Time flows, sand rises. Like inescapable fate."
		],
		"japanese": [
			"かつて緑豊かだった古代王国の廃墟。",
			"砂漠のすべての真実がそこに眠っていた。",
			"恐ろしい記録が露わになり、狂気がすべてを蝕む。",
			"時は流れ、砂は積もる。避けられぬ運命のように。"
		],
		"chinese": [
			"曾经郁郁葱葱的古代王国废墟。",
			"沙漠的所有真相都沉睡于此。",
			"恐怖记录浮现，疯狂吞噬一切。",
			"时间流逝，沙尘弥漫。如无法逃避的命运。"
		],
		"french": [
			"Ruines d'un royaume antique, jadis verdoyant.",
			"Toutes les vérités du désert y dormaient.",
			"Des archives horribles refont surface, la folie consume tout.",
			"Le temps s'écoule, le sable monte. Comme un destin inéluctable."
		],
		"spanish": [
			"Ruinas de un antiguo reino, antaño exuberante.",
			"Todas las verdades del desierto yacían dormidas allí.",
			"Registros horribles emergen, la locura lo consume todo.",
			"El tiempo fluye, la arena sube. Como un destino ineludible."
		],
		"vietnamese": [
			"Phế tích của một vương quốc cổ đại, từng xanh tươi.",
			"Mọi sự thật của sa mạc đều ngủ yên tại đó.",
			"Những ghi chép kinh hoàng lộ diện, sự điên loạn nuốt chửng tất cả.",
			"Thời gian trôi, cát vùi lấp. Như số phận không thể tránh khỏi."
		],
		"thai": [
			"ซากปรักหักพังของอาณาจักรโบราณที่ครั้งหนึ่งเคยเขียวขจี",
			"ความจริงทั้งหมดของทะเลทรายหลับใหลอยู่ที่นั่น",
			"บันทึกอันน่าสะพรึงกลัวปรากฏขึ้น ความวิกลจริตกลืนกินทุกสิ่ง",
			"เวลาก็ผ่านไป ทรายก็พัดขึ้นมา เหมือนโชคชะตาที่มิอาจหลีกเลี่ยง"
		],
		"hindi": [
			"एक प्राचीन साम्राज्य के खंडहर, जो कभी हरा-भरा था।",
			"रेगिस्तान के सभी सत्य वहाँ निष्क्रिय पड़े थे।",
			"भयानक रिकॉर्ड सामने आते हैं, पागलपन सबको निगल जाता है।",
			"समय बहता है, रेत उठती है। एक अपरिहार्य भाग्य की तरह।"
		]
	}
} as const;
