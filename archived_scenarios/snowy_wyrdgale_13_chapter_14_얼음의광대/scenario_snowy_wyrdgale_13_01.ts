export const scenario_snowy_wyrdgale_13_01 = {
	"scenario_id": "snowy_wyrdgale_13_01",
	"order": 1,
	"act": "intro",
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
					"emotion": "base",
					"content": {
						"korean": "끝없이 펼쳐진 설원. 차가운 공기가 모든 것을 얼렸다.",
						"english": "An endless expanse of snow. Cold air froze everything.",
						"japanese": "果てしなく広がる雪原。冷たい空気がすべてを凍らせた。",
						"chinese": "一望无际的雪原。冰冷的空气冻结了一切。",
						"french": "Une étendue infinie de neige. L'air froid a tout gelé.",
						"spanish": "Una extensión interminable de nieve. El aire frío lo congeló todo.",
						"vietnamese": "Một vùng tuyết trải dài bất tận. Không khí lạnh giá đóng băng mọi thứ.",
						"thai": "ทุ่งหิมะกว้างใหญ่ไร้ที่สิ้นสุด อากาศเย็นจัดแช่แข็งทุกสิ่ง",
						"hindi": "बर्फ का एक अंतहीन विस्तार। ठंडी हवा ने सब कुछ जमा दिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기가 북방…?",
						"english": "This is the North...?",
						"japanese": "ここが北方…？",
						"chinese": "这里是北方……？",
						"french": "C'est le Nord… ?",
						"spanish": "¿Esto es el Norte...?",
						"vietnamese": "Đây là phương Bắc...?",
						"thai": "นี่คือทิศเหนือ...?",
						"hindi": "क्या यह उत्तर है...?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "그래. 유물이 여기 숨겨져 있다는군.",
						"english": "Yes. They say the relic is hidden here.",
						"japanese": "そうだ。遺物がここに隠されているらしい。",
						"chinese": "是的。他们说圣物藏在这里。",
						"french": "Oui. On dit que la relique est cachée ici.",
						"spanish": "Sí. Dicen que la reliquia está escondida aquí.",
						"vietnamese": "Đúng vậy. Họ nói di vật được giấu ở đây.",
						"thai": "ใช่แล้ว พวกเขาว่าโบราณวัตถุซ่อนอยู่ที่นี่",
						"hindi": "हाँ। वे कहते हैं कि अवशेष यहीं छिपा है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이거… 유물 맞아? 그냥 얼음 덩어리 같은데.",
						"english": "Is this... really a relic? Looks like just a chunk of ice.",
						"japanese": "これ…本当に遺物？ただの氷の塊みたいだけど。",
						"chinese": "这……真的是圣物吗？看起来只是一块冰。",
						"french": "C'est... vraiment une relique ? Ça ressemble juste à un morceau de glace.",
						"spanish": "Esto... ¿es realmente una reliquia? Parece solo un trozo de hielo.",
						"vietnamese": "Cái này... thực sự là di vật ư? Trông như một tảng băng thôi.",
						"thai": "นี่...เป็นโบราณวัตถุจริงหรือเปล่า? ดูเหมือนเป็นแค่ก้อนน้ำแข็งนะ",
						"hindi": "क्या यह... वास्तव में एक अवशेष है? बस बर्फ का एक टुकड़ा लग रहा है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이것도 결국 잊혀진 역사일 뿐. 보나마나 지루하겠지.",
						"english": "This is just forgotten history, after all. Probably boring.",
						"japanese": "これも結局、忘れ去られた歴史にすぎない。どうせ退屈だろう。",
						"chinese": "这也只是一段被遗忘的历史。肯定很无聊。",
						"french": "Ce n'est qu'une histoire oubliée, après tout. Probablement ennuyeux.",
						"spanish": "Esto es solo historia olvidada, después de todo. Probablemente aburrido.",
						"vietnamese": "Dù sao đây cũng chỉ là lịch sử bị lãng quên. Chắc là nhàm chán thôi.",
						"thai": "นี่ก็แค่ประวัติศาสตร์ที่ถูกลืมเท่านั้นเอง คงจะน่าเบื่อแน่ๆ",
						"hindi": "यह सब कुछ और नहीं, बस भूला हुआ इतिहास है। शायद उबाऊ होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "탐험대는 기이한 얼음 기둥을 발견했다. 알 수 없는 문양이 새겨져 있었다.",
						"english": "The expedition found a strange ice pillar. Unknown patterns were carved into it.",
						"japanese": "探検隊は奇妙な氷の柱を発見した。未知の文様が刻まれていた。",
						"chinese": "探险队发现了一根奇特的冰柱。上面刻有未知的图案。",
						"french": "L'expédition a découvert un étrange pilier de glace. Des motifs inconnus y étaient gravés.",
						"spanish": "La expedición encontró un extraño pilar de hielo. Tenía patrones desconocidos grabados.",
						"vietnamese": "Đoàn thám hiểm đã tìm thấy một cột băng kỳ lạ. Trên đó khắc những hoa văn không rõ.",
						"thai": "คณะสำรวจพบเสาน้ำแข็งประหลาด มีลวดลายที่ไม่รู้จักสลักอยู่",
						"hindi": "अभियान दल को एक अजीब बर्फीला स्तंभ मिला। उस पर अज्ञात पैटर्न खुदे हुए थे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "저 룬 문자… 해독할 가치도 없군.",
						"english": "Those runes... not worth deciphering.",
						"japanese": "あのルーン文字…解読する価値もないな。",
						"chinese": "那些符文…不值得解读。",
						"french": "Ces runes... ne valent pas la peine d'être déchiffrées.",
						"spanish": "Esas runas... no valen la pena descifrarlas.",
						"vietnamese": "Những ký tự rune đó... không đáng để giải mã.",
						"thai": "รูนนั่น... ไม่มีค่าพอให้ถอดรหัสเลย.",
						"hindi": "वे रून अक्षर... समझने लायक़ भी नहीं हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "근데 왜 이렇게 뜨거워? 얼음인데.",
						"english": "But why is it so hot? It's ice.",
						"japanese": "でも、なんでこんなに熱いんだ？氷なのに。",
						"chinese": "可为什么这么烫？明明是冰啊。",
						"french": "Mais pourquoi fait-il si chaud ? C'est de la glace.",
						"spanish": "¿Pero por qué hace tanto calor? Es hielo.",
						"vietnamese": "Nhưng sao lại nóng thế này? Rõ ràng là băng mà.",
						"thai": "แต่มันทำไมร้อนจัง? ทั้งที่เป็นน้ำแข็ง.",
						"hindi": "पर ये इतना गरम क्यों है? ये तो बर्फ़ है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "겨울의 흔한 변덕일 뿐이야. 신경 쓸 것 없어.",
						"english": "Just a common winter whim. Nothing to worry about.",
						"japanese": "冬によくある気まぐれさ。気にするな。",
						"chinese": "只是冬天的常见把戏。别担心。",
						"french": "Juste un caprice d'hiver. Ne t'inquiète pas.",
						"spanish": "Es solo un capricho de invierno. No hay de qué preocuparse.",
						"vietnamese": "Chỉ là một cơn gió mùa đông thôi. Đừng bận tâm.",
						"thai": "แค่อารมณ์แปรปรวนของหน้าหนาวน่ะ ไม่ต้องไปสนใจหรอก.",
						"hindi": "बस सर्दी की एक आम सनक है। चिंता मत करो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "유물의 표면에서 미약한 진동이 느껴졌다.",
						"english": "A faint vibration was felt on the artifact's surface.",
						"japanese": "遺物の表面から微かな振動が感じられた。",
						"chinese": "文物表面传来微弱的震动。",
						"french": "Une légère vibration fut ressentie à la surface de l'artefact.",
						"spanish": "Se sintió una leve vibración en la superficie del artefacto.",
						"vietnamese": "Cảm thấy một rung động yếu ớt trên bề mặt của di vật.",
						"thai": "รู้สึกได้ถึงแรงสั่นสะเทือนบาง ๆ ที่พื้นผิวของวัตถุโบราณ.",
						"hindi": "कलाकृति की सतह पर एक हल्की सी कंपन महसूस हुई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "변덕 치고는 좀 이상한데?",
						"english": "A bit strange for a whim, don't you think?",
						"japanese": "気まぐれにしては、ちょっと変じゃないか？",
						"chinese": "这作为变幻无常来说有点奇怪吧？",
						"french": "Plutôt étrange pour un caprice, non ?",
						"spanish": "¿Un poco extraño para ser un capricho, no?",
						"vietnamese": "Thấy hơi lạ so với một cơn gió bất chợt đấy chứ?",
						"thai": "สำหรับความแปรปรวนแล้ว มันค่อนข้างแปลกนะ?",
						"hindi": "सनक के हिसाब से ये कुछ ज़्यादा ही अजीब है, है ना?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "유물에 새겨진 룬 문자가 희미하게 빛나기 시작했다.",
						"english": "The runes carved on the artifact began to glow faintly.",
						"japanese": "遺物に刻まれたルーン文字が、かすかに光り始めた。",
						"chinese": "刻在文物上的符文开始发出微弱的光芒。",
						"french": "Les runes gravées sur l'artefact commencèrent à briller faiblement.",
						"spanish": "Las runas grabadas en el artefacto comenzaron a brillar débilmente.",
						"vietnamese": "Các ký tự rune khắc trên di vật bắt đầu phát sáng mờ ảo.",
						"thai": "รูนที่แกะสลักบนวัตถุโบราณเริ่มเปล่งแสงจาง ๆ.",
						"hindi": "कलाकृति पर खुदे रून अक्षर हल्की रोशनी देने लगे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "흐음… 이건 좀 흥미롭군.",
						"english": "Hmm... this is quite interesting.",
						"japanese": "ふむ…これはなかなか興味深い。",
						"chinese": "嗯…这有点意思。",
						"french": "Hmm... c'est plutôt intéressant.",
						"spanish": "Mmm... esto es bastante interesante.",
						"vietnamese": "Hừm... cái này khá thú vị đấy.",
						"thai": "หืม... อันนี้น่าสนใจทีเดียว.",
						"hindi": "ह्म्म्म... ये काफ़ी दिलचस्प है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저 빛… 타이머 아니야?",
						"english": "That light... isn't that a timer?",
						"japanese": "あの光…タイマーじゃないか？",
						"chinese": "那道光…不是计时器吧？",
						"french": "Cette lumière... n'est-ce pas un minuteur ?",
						"spanish": "Esa luz... ¿no es un temporizador?",
						"vietnamese": "Ánh sáng đó... không phải là đồng hồ đếm ngược sao?",
						"thai": "แสงนั่น... มันไม่ใช่ตัวจับเวลาเหรอ?",
						"hindi": "वो रोशनी... क्या वो टाइमर नहीं है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "빙하가 녹는다고? 하! 말도 안 돼.",
						"english": "The glacier is melting? Ha! Impossible.",
						"japanese": "氷河が溶けるって？ハ！ありえない。",
						"chinese": "冰川融化了？哈！不可能。",
						"french": "Le glacier fond ? Ha ! Impossible.",
						"spanish": "El glaciar se está derritiendo? ¡Ja! Imposible.",
						"vietnamese": "Băng hà tan chảy á? Ha! Vô lý.",
						"thai": "ธารน้ำแข็งกำลังละลายเหรอ? ฮ่า! เป็นไปไม่ได้.",
						"hindi": "ग्लेशियर पिघल रहा है? हा! नामुमकिन।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "유물에서 경고음이 울렸다. 빙하 붕괴까지: 59분 59초.",
						"english": "A warning sound echoed from the artifact. Glacier collapse in: 59 minutes 59 seconds.",
						"japanese": "遺物から警告音が鳴り響いた。氷河崩壊まで：59分59秒。",
						"chinese": "文物发出警报声。冰川崩塌倒计时：59分59秒。",
						"french": "Un signal d'alarme retentit de l'artefact. Effondrement du glacier dans : 59 minutes 59 secondes.",
						"spanish": "Sonó una alarma del artefacto. Colapso del glaciar en: 59 minutos 59 segundos.",
						"vietnamese": "Tiếng còi cảnh báo vang lên từ di vật. Sập băng hà trong: 59 phút 59 giây.",
						"thai": "เสียงเตือนดังขึ้นจากวัตถุโบราณ. ธารน้ำแข็งจะถล่มใน: 59 นาที 59 วินาที.",
						"hindi": "कलाकृति से एक चेतावनी की आवाज़ आई। ग्लेशियर टूटने में: 59 मिनट 59 सेकंड।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뭐…?! 야!!! 이건 아니잖아!!!",
						"english": "What...?! Hey!!! This isn't right!!!",
						"japanese": "な…？！おい！！！これは違うだろ！！！",
						"chinese": "什么…？！喂！！！这不对劲！！！",
						"french": "Quoi… ?! Hé !!! Ce n'est pas possible !!!",
						"spanish": "¡¿Qué…?! ¡Oye! ¡Esto no está bien!",
						"vietnamese": "Gì…?! Này!!! Cái này không đúng!!!",
						"thai": "อะไรนะ…?! เฮ้ย!!! นี่มันไม่ถูกนะ!!!",
						"hindi": "क्या…?! अरे!!! ये सही नहीं है!!!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "카운트다운이 빠르게 줄어들었다. 얼음 균열이 번져갔다.",
						"english": "The countdown rapidly decreased. Ice cracks spread.",
						"japanese": "カウントダウンが急速に減っていった。氷の亀裂が広がった。",
						"chinese": "倒计时迅速减少。冰层裂缝蔓延开来。",
						"french": "Le compte à rebours a diminué rapidement. Des fissures de glace se sont propagées.",
						"spanish": "La cuenta atrás disminuyó rápidamente. Las grietas de hielo se extendieron.",
						"vietnamese": "Đồng hồ đếm ngược giảm nhanh chóng. Các vết nứt băng lan rộng.",
						"thai": "การนับถอยหลังลดลงอย่างรวดเร็ว รอยแตกของน้ำแข็งแพร่กระจาย",
						"hindi": "उलटी गिनती तेजी से कम हुई। बर्फ की दरारें फैल गईं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "큰일 났어! 빙하가 녹기 시작해!",
						"english": "We're in trouble! The glacier is starting to melt!",
						"japanese": "大変だ！氷河が溶け始めた！",
						"chinese": "糟了！冰川开始融化了！",
						"french": "C'est grave ! Le glacier commence à fondre !",
						"spanish": "¡Estamos en problemas! ¡El glaciar está empezando a derretirse!",
						"vietnamese": "Chết rồi! Băng tan chảy rồi!",
						"thai": "แย่แล้ว! ธารน้ำแข็งกำลังเริ่มละลาย!",
						"hindi": "मुसीबत हो गई! ग्लेशier पिघलना शुरू हो गया है!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "미쳤어! 기록에도 없는 일이야! 어쩌지?!",
						"english": "Insane! This isn't in the records! What do we do?!",
						"japanese": "正気か！記録にもないことだ！どうしよう？！",
						"chinese": "疯了！这在记录中都没有！怎么办？！",
						"french": "C'est fou ! Ce n'est pas dans les registres ! Que faire ?!",
						"spanish": "¡Una locura! ¡Esto no está en los registros! ¿Qué hacemos?",
						"vietnamese": "Điên rồi! Chuyện này chưa từng có trong ghi chép! Làm sao đây?!",
						"thai": "บ้าไปแล้ว! นี่ไม่ใช่สิ่งที่บันทึกไว้! ทำยังไงดี?!",
						"hindi": "पागलपन! यह रिकॉर्ड में नहीं है! हम क्या करें?!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뒤로 갈 시간 없어. 유물을 멈춰야 해!",
						"english": "No time to go back. We have to stop the artifact!",
						"japanese": "後戻りする時間はない。遺物を止めなければならない！",
						"chinese": "没有时间回头了。必须阻止这件圣物！",
						"french": "Pas le temps de reculer. Nous devons arrêter l'artefact !",
						"spanish": "No hay tiempo para volver. ¡Tenemos que detener el artefacto!",
						"vietnamese": "Không có thời gian quay lại. Phải ngăn chặn di vật này!",
						"thai": "ไม่มีเวลาถอยหลัง เราต้องหยุดยั้งวัตถุโบราณ!",
						"hindi": "पीछे हटने का समय नहीं है। हमें उस कलाकृति को रोकना होगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이런 빌어먹을 유물 같으니!",
						"english": "Damn this cursed artifact!",
						"japanese": "この忌まわしき遺物め！",
						"chinese": "该死的圣物！",
						"french": "Maudit soit cet artefact !",
						"spanish": "¡Maldito sea este artefacto!",
						"vietnamese": "Cái di vật chết tiệt này!",
						"thai": "ไอ้วัตถุโบราณบัดซบนี่!",
						"hindi": "धिक्कार है इस शापित कलाकृति पर!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들. 겨울의 섭리는… 거스를 수 없다.",
						"english": "Fools. The winter's providence… cannot be defied.",
						"japanese": "愚か者ども。冬の摂理は…逆らえない。",
						"chinese": "愚蠢的家伙。冬之摂理…无法违抗。",
						"french": "Fous. La providence de l'hiver… ne peut être défiée.",
						"spanish": "Necios. La providencia del invierno… no puede ser desafiada.",
						"vietnamese": "Những kẻ ngu ngốc. Thiên ý của mùa đông… không thể chống lại.",
						"thai": "พวกคนโง่ เขี้ยวเล็บแห่งฤดูหนาว… ไม่อาจถูกขัดขวางได้",
						"hindi": "मूर्खों। सर्दियों की नियति… का उल्लंघन नहीं किया जा सकता।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not… over yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas… encore fini.",
						"spanish": "Aún… no ha terminado.",
						"vietnamese": "Vẫn… chưa kết thúc đâu.",
						"thai": "ยัง… ไม่จบหรอก",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "빌어먹을. 이렇게 끝날 리 없어!",
						"english": "Damn it. It can't end like this!",
						"japanese": "ちくしょう。こんな終わり方、あるもんか！",
						"chinese": "该死。不可能就这样结束！",
						"french": "Maudits. Ça ne peut pas finir comme ça !",
						"spanish": "¡Maldita sea! ¡No puede terminar así!",
						"vietnamese": "Chết tiệt. Không thể kết thúc như thế này được!",
						"thai": "ให้ตายสิ มันต้องไม่จบแบบนี้!",
						"hindi": "लानत है। यह ऐसे खत्म नहीं हो सकता!"
					},
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 얼음 안에서 움직였다. 유물의 오작동이 불러온 존재.",
						"english": "A colossal shadow moved within the ice. A being summoned by the artifact's malfunction.",
						"japanese": "巨大な影が氷の中で動いた。遺物の誤作動が呼び出した存在。",
						"chinese": "巨大的黑影在冰中移动。那是圣物故障所召唤的存在。",
						"french": "Une ombre colossale bougeait dans la glace. Une entité invoquée par le dysfonctionnement de l'artefact.",
						"spanish": "Una sombra colosal se movía dentro del hielo. Un ser convocado por el mal funcionamiento del artefacto.",
						"vietnamese": "Một bóng đen khổng lồ di chuyển trong băng. Một thực thể được triệu hồi do di vật trục trặc.",
						"thai": "เงาขนาดใหญ่เคลื่อนไหวอยู่ในน้ำแข็ง สิ่งมีชีวิตที่ถูกเรียกออกมาจากการทำงานผิดปกติของวัตถุโบราณ",
						"hindi": "बर्फ के अंदर एक विशाल छाया हिल रही थी। कलाकृति की खराबी से उत्पन्न एक प्राणी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저게… 유물의 힘인가?",
						"english": "Is that... the artifact's power?",
						"japanese": "あれが…遺物の力なのか？",
						"chinese": "那是…圣物的力量吗？",
						"french": "Est-ce là… le pouvoir de l'artefact ?",
						"spanish": "¿Es eso… el poder del artefacto?",
						"vietnamese": "Đó là… sức mạnh của di vật sao?",
						"thai": "นั่นคือ…พลังของวัตถุโบราณหรือ?",
						"hindi": "क्या वह… कलाकृति की शक्ति है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "내 영역을… 침범하는 자들아.",
						"english": "Those who... invade my domain.",
						"japanese": "我が領域を…侵す者たちよ。",
						"chinese": "侵犯…吾之领域者。",
						"french": "Ceux qui… envahissent mon domaine.",
						"spanish": "Aquellos que… invaden mi dominio.",
						"vietnamese": "Những kẻ… xâm phạm lãnh địa của ta.",
						"thai": "พวกที่…บุกรุกอาณาเขตของข้า",
						"hindi": "वे जो… मेरे क्षेत्र पर आक्रमण करते हैं।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 유물을 조종하는 거야?",
						"english": "Are you controlling the artifact?",
						"japanese": "お前が遺物を操っているのか？",
						"chinese": "是你在操控圣物吗？",
						"french": "Est-ce toi qui contrôles l'artefact ?",
						"spanish": "¿Estás controlando el artefacto?",
						"vietnamese": "Ngươi đang điều khiển di vật à?",
						"thai": "เจ้าเป็นคนควบคุมวัตถุโบราณหรือ?",
						"hindi": "क्या तुम कलाकृति को नियंत्रित कर रहे हो?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "얼음은… 모든 것을 얼린다. 감히… 거스르려 하는가.",
						"english": "Ice... freezes all. Do you dare... defy it?",
						"japanese": "氷は…全てを凍らせる。まさか…逆らうというのか。",
						"chinese": "冰…冻结一切。你竟敢…违抗？",
						"french": "La glace… gèle tout. Oseriez-vous… la défier ?",
						"spanish": "El hielo… lo congela todo. ¿Osas… desafiarlo?",
						"vietnamese": "Băng… đóng băng mọi thứ. Ngươi… dám chống lại sao?",
						"thai": "น้ำแข็ง… แช่แข็งทุกสิ่ง เจ้า… กล้าที่จะขัดขืนหรือ?",
						"hindi": "बर्फ़… सब कुछ जमा देती है। क्या तुम… अवज्ञा करने की हिम्मत करते हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "잊혀진 존재의 분노… 기록으로만 봤는데.",
						"english": "The wrath of a forgotten being... I've only seen it in records.",
						"japanese": "忘れ去られた存在の怒り…記録でしか見たことがない。",
						"chinese": "被遗忘者的愤怒…我只在记载中见过。",
						"french": "La fureur d'un être oublié… Je ne l'ai vue que dans les chroniques.",
						"spanish": "La ira de un ser olvidado… Solo lo había visto en registros.",
						"vietnamese": "Cơn thịnh nộ của một tồn tại bị lãng quên… Ta chỉ thấy nó trong ghi chép.",
						"thai": "ความโกรธเกรี้ยวของสิ่งมีชีวิตที่ถูกลืม… ข้าเห็นมันแค่ในบันทึกเท่านั้น",
						"hindi": "एक भूली हुई हस्ती का क्रोध… मैंने इसे केवल अभिलेखों में देखा है।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 나는… 그저… 쉬고 싶었을 뿐….",
						"english": "Ugh… I… merely… wished to rest…",
						"japanese": "くっ…私は…ただ…休みたかっただけなのに…",
						"chinese": "呃…我…只是…想休息而已…",
						"french": "Argh… Je… voulais… juste me reposer…",
						"spanish": "Ugh… Yo… solo… quería descansar…",
						"vietnamese": "Khụ… Ta… chỉ… muốn nghỉ ngơi thôi mà…",
						"thai": "อึก… ข้า… แค่… อยากจะพักผ่อนเท่านั้นเอง…",
						"hindi": "उह… मैं… बस… आराम करना चाहता था…"
					}
				},
				{
					"content": {
						"korean": "멈춰. 모든 건 끝났어.",
						"english": "Stop. It's all over.",
						"japanese": "止まれ。全ては終わった。",
						"chinese": "住手。一切都结束了。",
						"french": "Arrêtez. Tout est fini.",
						"spanish": "Detente. Todo ha terminado.",
						"vietnamese": "Dừng lại. Tất cả đã kết thúc rồi.",
						"thai": "หยุดเถอะ ทุกอย่างจบแล้ว",
						"hindi": "रुको। सब खत्म हो गया है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "불안정한 온기… 그게 바로… 이 존재의 슬픔이었군.",
						"english": "Unstable warmth… that was… this being's sorrow.",
						"japanese": "不安定な温もり…それが…この存在の悲しみだったのか。",
						"chinese": "不稳定的暖意…那正是…这个存在的悲伤啊。",
						"french": "La chaleur instable… c'était… le chagrin de cet être.",
						"spanish": "El calor inestable… esa era… la tristeza de este ser.",
						"vietnamese": "Sự ấm áp không ổn định… đó chính là… nỗi buồn của tồn tại này.",
						"thai": "ความอบอุ่นที่ไม่มั่นคง… นั่นคือ… ความเศร้าโศกของสิ่งมีชีวิตนี้",
						"hindi": "अस्थिर गर्माहट… वही थी… इस प्राणी की उदासी।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "유물의 타이머가 멈췄다. 하지만 빙하의 균열은 이미 깊어졌다.",
						"english": "The artifact's timer stopped. But the glacier's cracks have already deepened.",
						"japanese": "遺物のタイマーは止まった。だが氷河の亀裂は既に深まっていた。",
						"chinese": "文物的计时器停了。但冰川的裂痕已经加深了。",
						"french": "Le minuteur de l'artefact s'est arrêté. Mais les fissures du glacier s'étaient déjà approfondies.",
						"spanish": "El temporizador del artefacto se detuvo. Pero las grietas del glaciar ya se habían profundizado.",
						"vietnamese": "Đồng hồ của di vật đã dừng lại. Nhưng vết nứt của sông băng đã sâu hơn rồi.",
						"thai": "ตัวจับเวลาของวัตถุโบราณหยุดลงแล้ว แต่รอยแยกของธารน้ำแข็งก็ลึกขึ้นแล้ว",
						"hindi": "कलाकृति का टाइमर रुक गया। लेकिन ग्लेशियर की दरारें पहले ही गहरी हो चुकी थीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "새로운 균열은… 더 큰 혼돈을 예고했다.",
						"english": "New cracks… foretold greater chaos.",
						"japanese": "新たな亀裂は…より大きな混沌を予兆していた。",
						"chinese": "新的裂痕…预示着更大的混沌。",
						"french": "De nouvelles fissures… annonçaient un chaos plus grand.",
						"spanish": "Nuevas grietas… presagiaban un caos mayor.",
						"vietnamese": "Những vết nứt mới… báo trước một sự hỗn loạn lớn hơn.",
						"thai": "รอยแยกใหม่… บ่งบอกถึงความวุ่นวายที่ยิ่งใหญ่กว่า",
						"hindi": "नई दरारें… बड़े अराजकता का संकेत थीं।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"북방의 얼어붙은 대지. 혹독한 추위가 모든 것을 집어삼킨 곳.",
			"고대 유물이 영원한 겨울을 약속했지만…",
			"어떤 유물은, 예측 불가능하게 오작동한다.",
			"그리고 그 혼란 속, 침착한 기록자가 있었다."
		],
		"english": [
			"The frozen lands of the North. Where bitter cold devours all.",
			"Ancient relics promised an eternal winter…",
			"Some relics, however, malfunction unpredictably.",
			"And amidst the chaos, there was a calm chronicler."
		],
		"japanese": [
			"北方の凍てついた大地。すべてを呑み込む厳しい寒さの地。",
			"古代の遺物は永遠の冬を約束したが…",
			"しかし、一部の遺物は予測不能に誤作動する。",
			"そしてその混乱の中、冷静な記録者がいた。"
		],
		"chinese": [
			"北方冰封大地。严寒吞噬一切之地。",
			"古代遗物曾承诺永恒的冬天……",
			"然而，一些遗物会不可预测地发生故障。",
			"而在这混乱之中，有一位冷静的记录者。"
		],
		"french": [
			"Les terres gelées du Nord. Là où un froid mordant engloutit tout.",
			"D'anciennes reliques promettaient un hiver éternel…",
			"Cependant, certaines reliques fonctionnent mal de manière imprévisible.",
			"Et au milieu du chaos, il y avait un chroniqueur calme."
		],
		"spanish": [
			"Las tierras heladas del Norte. Donde el frío implacable lo devora todo.",
			"Antiguas reliquias prometían un invierno eterno…",
			"Sin embargo, algunas reliquias funcionan mal de forma impredecible.",
			"Y en medio del caos, había un cronista tranquilo."
		],
		"vietnamese": [
			"Vùng đất phía Bắc đóng băng. Nơi cái lạnh khắc nghiệt nuốt chửng mọi thứ.",
			"Di vật cổ đại đã hứa hẹn một mùa đông vĩnh cửu…",
			"Tuy nhiên, một số di vật lại trục trặc một cách khó lường.",
			"Và giữa sự hỗn loạn ấy, có một người ghi chép bình tĩnh."
		],
		"thai": [
			"ดินแดนน้ำแข็งทางเหนือ ที่ซึ่งความหนาวเย็นอันโหดร้ายกลืนกินทุกสิ่ง",
			"โบราณวัตถุได้ให้คำมั่นถึงฤดูหนาวอันเป็นนิรันดร์…",
			"อย่างไรก็ตาม วัตถุโบราณบางชิ้นก็ทำงานผิดปกติอย่างคาดเดาไม่ได้",
			"และท่ามกลางความโกลาหลนั้น มีผู้บันทึกที่ใจเย็นอยู่"
		],
		"hindi": [
			"उत्तर की जमी हुई भूमि। जहाँ कड़ाके की ठंड सब कुछ निगल जाती है।",
			"प्राचीन अवशेषों ने शाश्वत शीतकाल का वादा किया था…",
			"हालाँकि, कुछ अवशेष अप्रत्याशित रूप से खराब हो जाते हैं।",
			"और इस अराजकता के बीच, एक शांत इतिहासकार था।"
		]
	}
} as const;
