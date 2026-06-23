export const scenario_hell_noctis_30_04 = {
	"scenario_id": "hell_noctis_30_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"drox": {
			"id": "mon_2fc30621-a15f-4371-9e37-295cdcb5675d",
			"name": {
				"korean": "드록스",
				"english": "Drox",
				"japanese": "ドロックス",
				"chinese": "德罗克斯",
				"french": "Drox",
				"spanish": "Drox",
				"vietnamese": "Đrốc",
				"thai": "ดรอกซ์",
				"hindi": "ड्रॉक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/509c0376-2230-4669-d022-7e5336293200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/916b4cfa-f792-4f4a-5346-681095481e00/public"
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
					"content": {
						"korean": "시스템의 경고음이 울렸다. 망각의 영역을 벗어난 자를 추적하듯이.",
						"english": "The system's alarm blared. As if tracking those who strayed beyond oblivion's realm.",
						"japanese": "システムの警報が鳴り響いた。忘却の領域を逸脱した者を追跡するかのように。",
						"chinese": "系统警报响起。仿佛在追踪那些偏离遗忘领域的人。",
						"french": "L'alarme du système retentit. Comme pour traquer ceux qui s'étaient éloignés du domaine de l'oubli.",
						"spanish": "La alarma del sistema sonó. Como si rastreara a aquellos que se salieron del reino del olvido.",
						"vietnamese": "Chuông báo động của hệ thống vang lên. Như thể đang truy lùng những kẻ đã vượt ra ngoài ranh giới lãng quên.",
						"thai": "เสียงเตือนของระบบดังขึ้น ราวกับกำลังติดตามผู้ที่ก้าวออกจากอาณาจักรแห่งการลืมเลือน",
						"hindi": "सिस्टम का अलार्म बज उठा। मानो उन लोगों का पीछा कर रहा हो जो विस्मृति के दायरे से भटक गए थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "drox",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "멈춰라. 더 이상 진실을 탐색해선 안 돼.",
						"english": "Stop. You must not seek the truth any further.",
						"japanese": "止めろ。これ以上真実を探してはならない。",
						"chinese": "住手。你不能再探寻真相了。",
						"french": "Arrête. Tu ne dois pas chercher la vérité davantage.",
						"spanish": "Detente. No debes buscar más la verdad.",
						"vietnamese": "Dừng lại. Ngươi không được tiếp tục tìm kiếm sự thật nữa.",
						"thai": "หยุดเดี๋ยวนี้! อย่าค้นหาความจริงไปมากกว่านี้อีกเลย",
						"hindi": "रुको। तुम्हें अब और सच्चाई की तलाश नहीं करनी चाहिए।"
					},
					"emotion": "base",
					"speaker": "drox",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 뭔데 명령이야?",
						"english": "Who are you to command me?",
						"japanese": "お前は何様のつもりだ、命令するとは？",
						"chinese": "你算什么东西，敢命令我？",
						"french": "Qui es-tu pour me donner des ordres ?",
						"spanish": "¿Quién eres para darme órdenes?",
						"vietnamese": "Ngươi là ai mà dám ra lệnh?",
						"thai": "แกเป็นใครถึงมาสั่งฉัน?",
						"hindi": "तुम होते कौन हो मुझे हुक्म देने वाले?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 드록스. 시스템의 감시자이자 심판관.",
						"english": "I am Droks. The system's Overseer and Judge.",
						"japanese": "私はドロックス。システムの監視者であり審判官だ。",
						"chinese": "我是德罗克斯。系统的监视者兼审判官。",
						"french": "Je suis Droks. Le Gardien et Juge du système.",
						"spanish": "Soy Droks. El Vigilante y Juez del sistema.",
						"vietnamese": "Ta là Droks. Kẻ giám sát và Thẩm phán của hệ thống.",
						"thai": "ข้าคือดรอกซ์ ผู้เฝ้าระวังและผู้ตัดสินแห่งระบบ",
						"hindi": "मैं ड्रॉक्स हूँ। सिस्टम का निगरानीकर्ता और न्यायधीश।"
					},
					"emotion": "base",
					"speaker": "drox"
				},
				{
					"content": {
						"korean": "기억은 죄를 부를 뿐. 망각만이 너희를 구원한다.",
						"english": "Memories only invite sin. Only oblivion saves you.",
						"japanese": "記憶は罪を招くだけだ。忘却だけがお前たちを救う。",
						"chinese": "记忆只会招致罪恶。唯有遗忘才能拯救你们。",
						"french": "Les souvenirs n'engendrent que le péché. Seul l'oubli vous sauvera.",
						"spanish": "Los recuerdos solo traen pecado. Solo el olvido os salvará.",
						"vietnamese": "Ký ức chỉ gọi mời tội lỗi. Chỉ có lãng quên mới cứu rỗi các ngươi.",
						"thai": "ความทรงจำนำมาซึ่งบาปเท่านั้น การลืมเลือนเท่านั้นที่จะช่วยพวกเจ้าได้",
						"hindi": "यादें केवल पाप को आमंत्रित करती हैं। केवल विस्मृति ही तुम्हें बचाएगी।"
					},
					"emotion": "base",
					"speaker": "drox",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "drox",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "drox",
					"content": {
						"korean": "너의 탐색은 더 큰 죄악을 낳을 뿐이다. 이미 고통받는 영혼들을 보았을 텐데.",
						"english": "Your search will only birth greater sins. You must have seen the suffering souls already.",
						"japanese": "お前の探索は、より大きな罪悪を生むだけだ。既に苦しむ魂たちを見たはずだろう。",
						"chinese": "你的探索只会滋生更大的罪恶。你肯定已经看到了那些受苦的灵魂。",
						"french": "Ta quête n'engendrera que de plus grands péchés. Tu as dû déjà voir les âmes souffrantes.",
						"spanish": "Tu búsqueda solo engendrará mayores pecados. Ya habrás visto las almas sufrientes.",
						"vietnamese": "Sự tìm kiếm của ngươi sẽ chỉ sinh ra tội lỗi lớn hơn mà thôi. Chắc hẳn ngươi đã thấy những linh hồn đau khổ rồi.",
						"thai": "การค้นหาของเจ้าจะก่อให้เกิดบาปที่ยิ่งใหญ่กว่าเท่านั้น เจ้าคงเห็นเหล่าวิญญาณที่ทุกข์ทรมานแล้วกระมัง",
						"hindi": "तुम्हारी खोज केवल बड़े पापों को जन्म देगी। तुमने पहले से ही पीड़ित आत्माओं को देखा होगा।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그 고통은 너희 시스템이 강요한 거잖아!",
						"english": "That pain was forced upon us by your system!",
						"japanese": "その苦痛は、お前たちのシステムが強要したものだろう！",
						"chinese": "那痛苦是你们系统强加的！",
						"french": "Cette douleur, c'est votre système qui nous l'a imposée !",
						"spanish": "¡Ese dolor fue impuesto por su sistema!",
						"vietnamese": "Nỗi đau đó là do hệ thống của các ngươi ép buộc!",
						"thai": "ความเจ็บปวดนั้น ระบบของพวกแกเป็นคนบังคับ!",
						"hindi": "वह दर्द तुम्हारे सिस्टम ने थोपा है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우리는 '첫 번째 밤'의 파괴를 막기 위해 존재한다. 너희는 이해할 수 없어.",
						"english": "We exist to prevent the destruction of 'The First Night'. You cannot understand.",
						"japanese": "我々は『最初の夜』の破壊を防ぐために存在する。お前たちには理解できない。",
						"chinese": "我们是为了阻止“第一个夜晚”的毁灭而存在。你们无法理解。",
						"french": "Nous existons pour empêcher la destruction de la 'Première Nuit'. Vous ne pouvez pas comprendre.",
						"spanish": "Existimos para prevenir la destrucción de 'La Primera Noche'. No pueden entender.",
						"vietnamese": "Chúng ta tồn tại để ngăn chặn sự hủy diệt của 'Đêm Đầu Tiên'. Các ngươi không thể hiểu được.",
						"thai": "พวกเรามีอยู่เพื่อยับยั้งการทำลายของ 'ราตรีแรก' พวกแกไม่เข้าใจหรอก",
						"hindi": "हम 'पहली रात' के विनाश को रोकने के लिए मौजूद हैं। तुम समझ नहीं सकते।"
					},
					"speaker": "drox",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "파괴? 거짓된 평화 속에서 영혼들이 사라지는 게 평화야?",
						"english": "Destruction? Is it peace when souls vanish within a false peace?",
						"japanese": "破壊？偽りの平和の中で魂が消えるのが平和だというのか？",
						"chinese": "毁灭？在虚假的和平中灵魂消逝就是和平吗？",
						"french": "Destruction ? Est-ce la paix quand des âmes disparaissent dans une fausse paix ?",
						"spanish": "¿Destrucción? ¿Es paz que las almas desaparezcan en una falsa paz?",
						"vietnamese": "Hủy diệt? Linh hồn biến mất trong sự bình yên giả dối đó là hòa bình sao?",
						"thai": "การทำลายล้าง? การที่วิญญาณหายไปในสันติภาพจอมปลอมนั่นคือสันติภาพเหรอ?",
						"hindi": "विनाश? झूठी शांति में आत्माओं का गायब होना क्या शांति है?"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "drox",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "'밤의 인도자'께서는 '첫 번째 밤'의 광기로부터 모두를 구원하셨다.",
						"english": "'The Nightbringer' saved everyone from the madness of 'The First Night'.",
						"japanese": "『夜の導き手』は、『最初の夜』の狂気から皆を救った。",
						"chinese": "“夜晚引导者”将所有人从“第一个夜晚”的疯狂中解救出来。",
						"french": "Le 'Guide de la Nuit' a sauvé tout le monde de la folie de la 'Première Nuit'.",
						"spanish": "El 'Guía de la Noche' salvó a todos de la locura de 'La Primera Noche'.",
						"vietnamese": "'Người Dẫn Lối Đêm' đã cứu rỗi mọi người khỏi sự điên loạn của 'Đêm Đầu Tiên'.",
						"thai": "'ผู้ชี้นำแห่งรัตติกาล' ได้ช่วยทุกคนให้รอดพ้นจากความบ้าคลั่งของ 'ราตรีแรก'",
						"hindi": "'रात का मार्गदर्शक' ने 'पहली रात' के पागलपन से सबको बचाया।"
					},
					"speaker": "drox",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "구원? 기억을 지우고 존재를 소멸시키는 게 구원이라고?",
						"english": "Salvation? Erasing memories and annihilating existence, that's salvation?",
						"japanese": "救済？記憶を消し、存在を消滅させるのが救済だと？",
						"chinese": "救赎？抹去记忆，消灭存在，这就是救赎吗？",
						"french": "Salut ? Effacer les souvenirs et anéantir l'existence, c'est ça le salut ?",
						"spanish": "¿Salvación? ¿Borrar recuerdos y aniquilar la existencia es salvación?",
						"vietnamese": "Cứu rỗi? Xóa bỏ ký ức và hủy diệt sự tồn tại, đó là cứu rỗi sao?",
						"thai": "การไถ่บาป? ลบความทรงจำและทำลายการมีอยู่ นั่นคือการไถ่บาปเหรอ?",
						"hindi": "मोक्ष? यादें मिटाना और अस्तित्व को खत्म करना क्या मोक्ष है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "망각이야말로 진정한 안식. 기억은 오직 죄와 고통을 반복시킬 뿐.",
						"english": "Oblivion is true peace. Memories only repeat sin and suffering.",
						"japanese": "忘却こそが真の安息。記憶はただ罪と苦痛を繰り返すだけだ。",
						"chinese": "遗忘才是真正的安息。记忆只会重复罪恶和痛苦。",
						"french": "L'oubli est le véritable repos. Les souvenirs ne font que répéter le péché et la souffrance.",
						"spanish": "El olvido es el verdadero descanso. Los recuerdos solo repiten el pecado y el sufrimiento.",
						"vietnamese": "Lãng quên mới là sự an nghỉ thật sự. Ký ức chỉ lặp lại tội lỗi và đau khổ.",
						"thai": "การหลงลืมคือการพักผ่อนที่แท้จริง ความทรงจำมีแต่จะซ้ำเติมบาปและความทุกข์เท่านั้น",
						"hindi": "विस्मृति ही सच्ची शांति है। यादें केवल पाप और पीड़ा को दोहराती हैं।"
					},
					"emotion": "base",
					"speaker": "drox",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네가 찾는 진실은, 결국 너의 영혼마저 파멸로 이끌 것이다.",
						"english": "The truth you seek will ultimately lead your very soul to ruin.",
						"japanese": "お前が探す真実は、結局お前のお前自身の魂さえも破滅へと導くだろう。",
						"chinese": "你所寻求的真相，最终只会将你的灵魂引向毁灭。",
						"french": "La vérité que tu cherches finira par mener ton âme à la ruine.",
						"spanish": "La verdad que buscas, al final, llevará tu propia alma a la ruina.",
						"vietnamese": "Sự thật ngươi tìm kiếm, cuối cùng sẽ dẫn ngay cả linh hồn ngươi đến sự hủy diệt.",
						"thai": "ความจริงที่แกแสวงหา ในที่สุดก็จะนำพาดวงวิญญาณของแกไปสู่ความพินาศ",
						"hindi": "तुम जो सच खोज रहे हो, अंततः तुम्हारी आत्मा को भी विनाश की ओर ले जाएगा।"
					},
					"speaker": "drox",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "나는 내 죄를 외면하지 않아. 너희의 거짓된 평화 속에 갇히지 않을 거야.",
						"english": "I won't turn away from my sins. I won't be trapped in your false peace.",
						"japanese": "私は自分の罪から目を背けない。お前たちの偽りの平和の中に閉じ込められはしない。",
						"chinese": "我不会逃避我的罪孽。我不会被困在你们虚假的和平之中。",
						"french": "Je ne me détournerai pas de mes péchés. Je ne serai pas piégé dans votre fausse paix.",
						"spanish": "No ignoraré mis pecados. No me encerrarán en su falsa paz.",
						"vietnamese": "Ta sẽ không chối bỏ tội lỗi của mình. Ta sẽ không bị giam cầm trong sự bình yên giả dối của các ngươi.",
						"thai": "ฉันจะไม่หลีกหนีจากบาปของฉัน ฉันจะไม่ถูกขังอยู่ในสันติภาพจอมปลอมของพวกแก",
						"hindi": "मैं अपने पापों से मुँह नहीं फेरूँगा। मैं तुम्हारी झूठी शांति में फँसूंगा नहीं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "drox",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 거대한 시스템을 거부하는 자는 영원히 같은 고통을 반복한다.",
						"english": "Those who reject this vast system will forever repeat the same suffering.",
						"japanese": "この巨大なシステムを拒む者は、永遠に同じ苦痛を繰り返す。",
						"chinese": "拒绝这个庞大系统的人，将永远重复同样的痛苦。",
						"french": "Ceux qui rejettent ce vaste système répéteront éternellement la même souffrance.",
						"spanish": "Quienes rechacen este vasto sistema, repetirán eternamente el mismo sufrimiento.",
						"vietnamese": "Kẻ nào từ chối hệ thống vĩ đại này sẽ vĩnh viễn lặp lại cùng một nỗi đau.",
						"thai": "ผู้ที่ปฏิเสธระบบอันยิ่งใหญ่นี้จะวนเวียนอยู่กับความทุกข์ทรมานเดิมๆ ตลอดไป",
						"hindi": "जो इस विशाल प्रणाली को अस्वीकार करते हैं, वे हमेशा एक ही पीड़ा को दोहराते रहेंगे।"
					},
					"emotion": "base",
					"speaker": "drox",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그게 너희가 말하는 '평화'의 끝이잖아. 텅 빈 공허.",
						"english": "That's the end of your 'peace,' isn't it? An empty void.",
						"japanese": "それがお前たちの言う『平和』の終わりだろう。空虚な虚無だ。",
						"chinese": "那就是你们所说的“和平”的终结，一片空虚。",
						"french": "C'est la fin de votre 'paix', n'est-ce pas ? Un vide absolu.",
						"spanish": "Ese es el fin de su 'paz', ¿no? Un vacío absoluto.",
						"vietnamese": "Đó là cái kết của 'hòa bình' mà các ngươi nói, một khoảng không trống rỗng.",
						"thai": "นั่นแหละคือจุดจบของ 'สันติภาพ' ที่พวกแกพูดถึง ความว่างเปล่าที่ไร้แก่นสาร",
						"hindi": "वही तुम्हारी 'शांति' का अंत है, है ना? एक खाली शून्य।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너는 죄인이다. 네 기억이 너의 죄를 증명할 것이다.",
						"english": "You are a sinner. Your memories will prove your guilt.",
						"japanese": "お前は罪人だ。お前の記憶がお前の罪を証明するだろう。",
						"chinese": "你是罪人。你的记忆将证明你的罪行。",
						"french": "Tu es un pécheur. Tes souvenirs prouveront ta culpabilité.",
						"spanish": "Eres un pecador. Tus recuerdos probarán tu culpa.",
						"vietnamese": "Ngươi là kẻ tội đồ. Ký ức của ngươi sẽ chứng minh tội lỗi của ngươi.",
						"thai": "เจ้าคือคนบาป ความทรงจำของเจ้าจะพิสูจน์ความผิดของเจ้า",
						"hindi": "तुम पापी हो। तुम्हारी यादें तुम्हारे पाप को साबित करेंगी。"
					},
					"speaker": "drox",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "나는 도망치지 않아. 진짜 죄는 너희 시스템이 짓고 있는 거야.",
						"english": "I won't run. The real sin is what your system is committing.",
						"japanese": "私は逃げない。真の罪はお前たちのシステムが犯していることだ。",
						"chinese": "我不会逃跑。真正的罪是你们系统正在犯下的。",
						"french": "Je ne fuirai pas. Le vrai péché est celui que votre système commet.",
						"spanish": "No huiré. El verdadero pecado es lo que su sistema está cometiendo.",
						"vietnamese": "Ta sẽ không chạy trốn. Tội lỗi thực sự là những gì hệ thống của các ngươi đang gây ra.",
						"thai": "ฉันไม่หนีหรอก ความผิดที่แท้จริงคือสิ่งที่ระบบของพวกนายกำลังทำอยู่ต่างหาก",
						"hindi": "मैं भागूंगा नहीं। असली पाप वही है जो तुम्हारा सिस्टम कर रहा है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "후회하게 될 것이다. 망각의 굴레는 벗어날 수 없다.",
						"english": "You will regret this. There's no escaping the cycle of oblivion.",
						"japanese": "後悔することになるだろう。忘却の輪からは逃れられない。",
						"chinese": "你会后悔的。遗忘的枷锁无法挣脱。",
						"french": "Tu le regretteras. On ne peut échapper au cycle de l'oubli.",
						"spanish": "Te arrepentirás. No hay escape del ciclo del olvido.",
						"vietnamese": "Ngươi sẽ phải hối hận. Vòng xoáy lãng quên là không thể thoát khỏi.",
						"thai": "เจ้าจะต้องเสียใจ เจ้าไม่อาจหลุดพ้นจากวงเวียนแห่งการลืมเลือนได้",
						"hindi": "तुम्हें पछताना पड़ेगा। विस्मृति के चक्र से बच नहीं सकते।"
					},
					"speaker": "drox"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…네가 아무리 발버둥 쳐도, 시스템은 흔들리지 않는다.",
						"english": "...No matter how much you struggle, the system will not waver.",
						"japanese": "…お前がいくら足掻こうと、システムは揺るがない。",
						"chinese": "…无论你如何挣扎，系统都不会动摇。",
						"french": "...Peu importe tes efforts, le système ne faiblira pas.",
						"spanish": "...Por mucho que te esfuerces, el sistema no se tambaleará.",
						"vietnamese": "…Dù ngươi có giãy giụa thế nào, hệ thống cũng sẽ không lung lay.",
						"thai": "…ไม่ว่าเจ้าจะดิ้นรนแค่ไหน ระบบก็ไม่หวั่นไหว",
						"hindi": "...तुम कितना भी संघर्ष करो, सिस्टम नहीं हिलेगा।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 흔들리기 시작했어. 너희의 거짓된 평화가.",
						"english": "No. It has begun to waver. Your false peace.",
						"japanese": "いや。揺らぎ始めた。お前たちの偽りの平和が。",
						"chinese": "不。它已经开始动摇了。你们虚假的和平。",
						"french": "Non. Il a commencé à vaciller. Votre fausse paix.",
						"spanish": "No. Ha comenzado a tambalearse. Su falsa paz.",
						"vietnamese": "Không. Nó đã bắt đầu lung lay rồi. Sự bình yên giả dối của các ngươi.",
						"thai": "ไม่ มันเริ่มสั่นคลอนแล้ว สันติภาพจอมปลอมของพวกนาย",
						"hindi": "नहीं। यह हिलने लगा है। तुम्हारी झूठी शांति।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "감시자의 눈이 멀었지만, 시스템의 심장은 여전히 고동쳤다.",
						"english": "Though the Watcher's eyes were blinded, the system's heart still pulsed.",
						"japanese": "監視者の目は盲いたが、システムの心臓は依然として鼓動していた。",
						"chinese": "尽管监视者的眼睛失明了，但系统的核心仍在跳动。",
						"french": "Bien que les yeux du Gardien aient été aveuglés, le cœur du système battait toujours.",
						"spanish": "Aunque los ojos del Vigilante fueron cegados, el corazón del sistema aún latía.",
						"vietnamese": "Mặc dù mắt của Kẻ Giám Sát đã mù, nhưng trái tim của hệ thống vẫn đập.",
						"thai": "แม้ดวงตาของผู้เฝ้ามองจะบอด แต่หัวใจของระบบก็ยังคงเต้นอยู่",
						"hindi": "हालांकि पहरेदार की आँखें अंधी हो गईं, फिर भी सिस्टम का दिल धड़कता रहा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "더 깊은 곳에서, '밤의 인도자'의 그림자가 기다리고 있었다.",
						"english": "Deeper still, the shadow of the 'Nightbringer' awaited.",
						"japanese": "さらに奥深くで、「夜の導き手」の影が待ち受けていた。",
						"chinese": "在更深处，\"引夜者\"的阴影正在等候。",
						"french": "Plus profondément encore, l'ombre du « Passeur de Nuit » attendait.",
						"spanish": "Más profundo aún, la sombra del \"Guardián Nocturno\" esperaba.",
						"vietnamese": "Sâu hơn nữa, bóng của 'Kẻ Dẫn Lối Đêm' đang chờ đợi.",
						"thai": "ลึกลงไปกว่านั้น เงาของ 'ผู้นำแห่งรัตติกาล' กำลังรอคอยอยู่",
						"hindi": "और भी गहराई में, 'रात के पथप्रदर्शक' की परछाई इंतज़ार कर रही थी।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "drox",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "drox",
					"emotion": "base",
					"content": {
						"korean": "결국 여기까지 왔군. 이 이상은 시스템의 영역이다.",
						"english": "So you've made it this far. Beyond this point is the system's domain.",
						"japanese": "結局ここまで来たか。これ以上はシステムの領域だ。",
						"chinese": "你终于走到这里了。此地之上是系统的领域。",
						"french": "Tu es enfin arrivé ici. Au-delà, c'est le domaine du système.",
						"spanish": "Finalmente has llegado hasta aquí. Más allá es el dominio del sistema.",
						"vietnamese": "Cuối cùng ngươi cũng đến đây. Hơn nữa, đây là lãnh thổ của hệ thống.",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่ เกินกว่านี้คืออาณาเขตของระบบ",
						"hindi": "आखिर तुम यहाँ तक आ ही गए। इससे आगे सिस्टम का क्षेत्र है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너의 죄를 심판할 자가 여기 있다. {random_boss}, 그를 막아라.",
						"english": "The one who will judge your sins is here. {random_boss}, stop him.",
						"japanese": "お前の罪を裁く者がここにいる。{random_boss}、彼を止めろ。",
						"chinese": "审判你罪孽之人在此。{random_boss}，阻止他。",
						"french": "Celui qui jugera tes péchés est ici. {random_boss}, arrête-le.",
						"spanish": "El que juzgará tus pecados está aquí. {random_boss}, deténlo.",
						"vietnamese": "Kẻ sẽ phán xét tội lỗi của ngươi đang ở đây. {random_boss}, hãy ngăn hắn lại.",
						"thai": "ผู้ที่จะตัดสินความผิดของเจ้าอยู่ที่นี่แล้ว {random_boss} จงหยุดเขาไว้",
						"hindi": "तुम्हारे पापों का न्याय करने वाला यहाँ है। {random_boss}, उसे रोको।"
					},
					"emotion": "base",
					"speaker": "drox"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "심판? 내가 심판받을 죄는 없어!",
						"english": "Judgment? I have no sins to be judged for!",
						"japanese": "裁き？私が裁かれる罪などない！",
						"chinese": "审判？我没有需要被审判的罪孽！",
						"french": "Jugement ? Je n'ai aucun péché à être jugé !",
						"spanish": "¿Juicio? ¡No tengo pecados por los que ser juzgado!",
						"vietnamese": "Phán xét? Ta không có tội lỗi nào để bị phán xét!",
						"thai": "ตัดสินงั้นหรือ? ฉันไม่มีบาปอะไรให้ถูกตัดสิน!",
						"hindi": "न्याय? मेरे पास कोई ऐसा पाप नहीं है जिसके लिए मुझे न्याय मिले!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "잊어야 할 고통을 다시 꺼내려 하는가? 어리석은 영혼이여.",
						"english": "Do you intend to relive the pain that should be forgotten? Oh, foolish soul.",
						"japanese": "忘れるべき苦痛を再び引き出そうとするのか？愚かな魂よ。",
						"chinese": "你打算重新唤醒那些应该被遗忘的痛苦吗？哦，愚蠢的灵魂。",
						"french": "Comptes-tu revivre la douleur qui devrait être oubliée ? Ô âme insensée.",
						"spanish": "¿Pretendes revivir el dolor que debe ser olvidado? Oh, alma insensata.",
						"vietnamese": "Ngươi định khơi lại nỗi đau lẽ ra phải lãng quên sao? Hỡi linh hồn ngu ngốc.",
						"thai": "เจ้าคิดจะนำความเจ็บปวดที่ควรจะถูกลืมเลือนกลับมาอีกครั้งงั้นหรือ? โอ้ วิญญาณที่โง่เขลา",
						"hindi": "क्या तुम उस दर्द को फिर से याद करना चाहते हो जिसे भूल जाना चाहिए? हे मूर्ख आत्मा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "죄를 직면할 용기도 없이, 허무하게 쓰러지는군.",
						"english": "You fall so emptily, without even the courage to face your sins.",
						"japanese": "罪に立ち向かう勇気もなく、むなしく倒れるか。",
						"chinese": "连面对罪恶的勇气都没有，就这样虚无地倒下了吗。",
						"french": "Tu t'effondres si vainement, sans même le courage d'affronter tes péchés.",
						"spanish": "Caes tan vacío, sin siquiera el valor de enfrentar tus pecados.",
						"vietnamese": "Ngươi ngã gục vô ích, không chút dũng khí đối mặt tội lỗi.",
						"thai": "เจ้าล้มลงอย่างว่างเปล่า ไร้แม้ความกล้าที่จะเผชิญหน้ากับบาปของตน",
						"hindi": "अपने पापों का सामना करने की हिम्मत भी नहीं, तुम व्यर्थ ही गिर रहे हो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…나는 포기하지 않아. 진실을 찾을 때까지.",
						"english": "...I won't give up. Not until I find the truth.",
						"japanese": "…私は諦めない。真実を見つけるまで。",
						"chinese": "……我不会放弃。直到找到真相为止。",
						"french": "...Je n'abandonnerai pas. Pas avant d'avoir trouvé la vérité.",
						"spanish": "...No me rendiré. No hasta que encuentre la verdad.",
						"vietnamese": "...Ta sẽ không bỏ cuộc. Cho đến khi tìm thấy sự thật.",
						"thai": "...ข้าจะไม่ยอมแพ้ จนกว่าจะพบความจริง",
						"hindi": "...मैं हार नहीं मानूंगा। जब तक सच नहीं मिल जाता।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "drox"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "결국 깨닫게 될 거다. 망각만이 유일한 해방이라는 것을.",
						"english": "You will eventually realize. That oblivion is the only liberation.",
						"japanese": "結局、気づくだろう。忘却だけが唯一の解放だと。",
						"chinese": "你终会明白。遗忘才是唯一的解脱。",
						"french": "Tu finiras par comprendre. Que l'oubli est la seule libération.",
						"spanish": "Finalmente te darás cuenta. Que el olvido es la única liberación.",
						"vietnamese": "Cuối cùng, ngươi sẽ nhận ra. Lãng quên mới là sự giải thoát duy nhất.",
						"thai": "ในที่สุด เจ้าก็จะตระหนักได้ ว่าการหลงลืมคือหนทางเดียวสู่การปลดปล่อย",
						"hindi": "तुम्हें अंततः एहसास होगा। कि विस्मृति ही एकमात्र मुक्ति है।"
					},
					"speaker": "drox"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"기억을 찾는 여정. 그것은 금지된 문을 여는 일이었다.",
			"시스템은 평화를 약속했지만, 그 약속은 거짓이었다.",
			"감시자는 속삭였다. 망각만이 구원이라고. 죄책감을 강요하며.",
			"하지만 진실은, 잊힌 고통 속에 숨어 있었다."
		],
		"english": [
			"A journey to reclaim memories. It was an act of opening a forbidden door.",
			"The system promised peace, but that promise was a lie.",
			"The Overseer whispered. Only oblivion brings salvation. Forcing guilt upon us.",
			"But the truth was hidden within forgotten pain."
		],
		"japanese": [
			"記憶を探す旅。それは禁じられた扉を開く行為だった。",
			"システムは平和を約束したが、その約束は偽りだった。",
			"監視者は囁いた。忘却だけが救済だと。罪悪感を強要しながら。",
			"しかし真実は、忘れられた苦痛の中に隠されていた。"
		],
		"chinese": [
			"寻找记忆的旅程。那是一次打开禁忌之门的举动。",
			"系统曾许诺和平，但那个承诺是谎言。",
			"监视者低语道。唯有遗忘才是救赎。强加着罪恶感。",
			"然而，真相隐藏在被遗忘的痛苦之中。"
		],
		"french": [
			"Un voyage pour retrouver la mémoire. C'était ouvrir une porte interdite.",
			"Le système promettait la paix, mais cette promesse était un mensonge.",
			"Le Gardien a murmuré. Seul l'oubli apporte le salut. Nous imposant la culpabilité.",
			"Mais la vérité était cachée dans une douleur oubliée."
		],
		"spanish": [
			"Un viaje para recuperar recuerdos. Fue abrir una puerta prohibida.",
			"El sistema prometió paz, pero esa promesa era una mentira.",
			"El Vigilante susurró. Solo el olvido trae la salvación. Imponiendo la culpa.",
			"Pero la verdad estaba oculta en el dolor olvidado."
		],
		"vietnamese": [
			"Hành trình tìm lại ký ức. Đó là việc mở một cánh cửa cấm kỵ.",
			"Hệ thống đã hứa hòa bình, nhưng lời hứa đó là dối trá.",
			"Kẻ giám sát thì thầm. Chỉ có lãng quên mới là cứu rỗi. Ép buộc cảm giác tội lỗi.",
			"Nhưng sự thật ẩn giấu trong nỗi đau bị lãng quên."
		],
		"thai": [
			"การเดินทางเพื่อตามหาความทรงจำ มันคือการเปิดประตูต้องห้าม",
			"ระบบให้คำมั่นถึงสันติภาพ แต่คำมั่นนั้นเป็นเรื่องโกหก",
			"ผู้เฝ้าระวังกระซิบว่า การลืมเลือนเท่านั้นที่จะนำมาซึ่งความรอด บังคับให้รู้สึกผิด",
			"แต่ความจริงซ่อนอยู่ในความเจ็บปวดที่ถูกลืม"
		],
		"hindi": [
			"यादों को वापस पाने की यात्रा। यह एक निषिद्ध दरवाज़ा खोलने का कार्य था।",
			"सिस्टम ने शांति का वादा किया था, लेकिन वह वादा झूठ था।",
			"निगरानीकर्ता ने फुसफुसाया। केवल विस्मृति ही मुक्ति है। हम पर अपराधबोध थोपते हुए।",
			"लेकिन सच्चाई भूले हुए दर्द में छिपी हुई थी।"
		]
	}
} as const;
