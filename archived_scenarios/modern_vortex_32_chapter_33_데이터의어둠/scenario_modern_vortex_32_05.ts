export const scenario_modern_vortex_32_05 = {
	"scenario_id": "modern_vortex_32_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "pool_Cryptograph_Vortex_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "모든 데이터가 수렴하는 마지막 관문. Vortex의 기록 저장소였다.",
						"english": "The final gateway where all data converged. Vortex's record repository.",
						"japanese": "全てのデータが収束する最後の関門。Vortexの記録貯蔵庫だった。",
						"chinese": "所有数据汇聚的最终关口。Vortex的记录存储库。",
						"french": "La dernière passerelle où toutes les données convergeaient. Le dépôt d'archives de Vortex.",
						"spanish": "La última puerta de entrada donde todos los datos convergían. El repositorio de registros de Vortex.",
						"vietnamese": "Cửa ngõ cuối cùng nơi tất cả dữ liệu hội tụ. Kho lưu trữ hồ sơ của Vortex.",
						"thai": "ประตูสุดท้ายที่ข้อมูลทั้งหมดมารวมกัน เป็นคลังเก็บข้อมูลของ Vortex",
						"hindi": "अंतिम द्वार जहाँ सभी डेटा एकत्रित होते थे। वॉर्टेक्स का रिकॉर्ड भंडार।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가… Vortex의 심장부인가?",
						"english": "Is this... Vortex's core?",
						"japanese": "ここが… Vortexの心臓部か？",
						"chinese": "这里是… Vortex的核心吗？",
						"french": "C'est ici... le cœur de Vortex ?",
						"spanish": "¿Es este... el corazón de Vortex?",
						"vietnamese": "Đây là... trái tim của Vortex ư?",
						"thai": "นี่คือ… ใจกลางของ Vortex หรือ?",
						"hindi": "क्या यह... वॉर्टेक्स का केंद्र है?"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "echo",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "그래. 모든 기록의 시작이자 끝. 동시에 너의 시작과 끝이기도 해.",
						"english": "Yes. The beginning and end of all records. And simultaneously, your beginning and end.",
						"japanese": "うん。全ての記録の始まりであり終わり。同時に君の始まりと終わりでもある。",
						"chinese": "是的。所有记录的开始和结束。同时，也是你的开始和结束。",
						"french": "Oui. Le début et la fin de tous les registres. Et simultanément, ton début et ta fin.",
						"spanish": "Sí. El principio y el fin de todos los registros. Y, al mismo tiempo, tu principio y tu fin.",
						"vietnamese": "Đúng vậy. Khởi đầu và kết thúc của mọi ghi chép. Đồng thời, cũng là khởi đầu và kết thúc của bạn.",
						"thai": "ใช่ จุดเริ่มต้นและจุดสิ้นสุดของบันทึกทั้งหมด และในขณะเดียวกัน ก็คือจุดเริ่มต้นและจุดสิ้นสุดของเธอ",
						"hindi": "हाँ। सभी अभिलेखों की शुरुआत और अंत। और साथ ही, तुम्हारी शुरुआत और अंत भी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "내 시작과 끝…?",
						"english": "My beginning and end...?",
						"japanese": "私の始まりと終わり…？",
						"chinese": "我的开始和结束……？",
						"french": "Mon début et ma fin...?",
						"spanish": "¿Mi principio y mi fin...?",
						"vietnamese": "Khởi đầu và kết thúc của tôi...?",
						"thai": "จุดเริ่มต้นและจุดสิ้นสุดของฉัน...?",
						"hindi": "मेरी शुरुआत और अंत...?"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "Vortex는 모든 것을 기록했지만, 동시에 모든 것을 왜곡했어.",
						"english": "Vortex recorded everything, but at the same time, it distorted everything.",
						"japanese": "Vortexは全てを記録したが、同時に全てを歪めた。",
						"chinese": "Vortex记录了一切，但同时，它也扭曲了一切。",
						"french": "Vortex a tout enregistré, mais en même temps, il a tout déformé.",
						"spanish": "Vortex lo registró todo, pero al mismo tiempo, lo distorsionó todo.",
						"vietnamese": "Vortex đã ghi lại mọi thứ, nhưng đồng thời, nó cũng bóp méo mọi thứ.",
						"thai": "Vortex บันทึกทุกสิ่ง แต่ในขณะเดียวกัน ก็บิดเบือนทุกสิ่ง",
						"hindi": "वोर्टेक्स ने सब कुछ दर्ज किया, लेकिन साथ ही, उसने सब कुछ विकृत भी किया।"
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "깨진 거울…?",
						"english": "A broken mirror...?",
						"japanese": "割れた鏡…？",
						"chinese": "破碎的镜子……？",
						"french": "Un miroir brisé...?",
						"spanish": "¿Un espejo roto...?",
						"vietnamese": "Một tấm gương vỡ...?",
						"thai": "กระจกแตก...?",
						"hindi": "एक टूटा हुआ दर्पण...?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그가 보여주는 질서는 완벽한 반영이 아니야. 그저… 자신의 파편들을 모은 왜곡된 이미지일 뿐.",
						"english": "The order he shows isn't a perfect reflection. It's merely... a distorted image composed of his own fragments.",
						"japanese": "彼が示す秩序は完璧な反映ではない。ただ…自身の破片を集めた歪んだイメージに過ぎない。",
						"chinese": "他所展现的秩序并非完美的映照。那只是……一个由他自身碎片拼凑而成的扭曲影像。",
						"french": "L'ordre qu'il montre n'est pas un reflet parfait. C'est simplement... une image déformée composée de ses propres fragments.",
						"spanish": "El orden que muestra no es un reflejo perfecto. Es simplemente... una imagen distorsionada compuesta por sus propios fragmentos.",
						"vietnamese": "Trật tự mà hắn thể hiện không phải là sự phản chiếu hoàn hảo. Nó chỉ là... một hình ảnh méo mó được tạo thành từ những mảnh vỡ của chính hắn.",
						"thai": "ระเบียบที่เขาแสดงไม่ใช่ภาพสะท้อนที่สมบูรณ์แบบ มันเป็นเพียง... ภาพบิดเบี้ยวที่ประกอบขึ้นจากเศษเสี้ยวของเขาเอง",
						"hindi": "जो व्यवस्था वह दिखाता है, वह एक आदर्श प्रतिबिंब नहीं है। यह सिर्फ... उसके अपने टुकड़ों से बनी एक विकृत छवि है।"
					},
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "그럼 우리가 찾아온 진실도… 다 거짓이었다는 거야?",
						"english": "So, the truth we've been searching for... was all a lie?",
						"japanese": "じゃあ、私たちが探し求めてきた真実も…全て嘘だったってこと？",
						"chinese": "那么，我们一直寻找的真相……也都是谎言吗？",
						"french": "Alors, la vérité que nous avons cherchée... n'était que mensonge ?",
						"spanish": "Entonces, ¿la verdad que hemos estado buscando... era toda una mentira?",
						"vietnamese": "Vậy, sự thật mà chúng ta đã tìm kiếm... đều là dối trá sao?",
						"thai": "งั้นความจริงที่เราตามหามาตลอด... เป็นเรื่องโกหกทั้งหมดเลยเหรอ?",
						"hindi": "तो, जिस सच्चाई की हम तलाश कर रहे थे... वह सब झूठ था?"
					}
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "아니. 진실은 데이터 바닥에 잠들어 있지. 다만, 그 진실을 받아들일 준비가 됐는지… 묻고 싶을 뿐이야.",
						"english": "No. The truth lies dormant at the bottom of the data. I merely... want to ask if you're ready to accept that truth.",
						"japanese": "いや。真実はデータの底に眠っている。ただ、その真実を受け入れる準備ができているか…尋ねたいだけだ。",
						"chinese": "不。真相沉睡在数据的深处。我只是……想问你是否准备好接受那个真相。",
						"french": "Non. La vérité sommeille au fond des données. Je veux juste... demander si tu es prêt à accepter cette vérité.",
						"spanish": "No. La verdad yace dormida en el fondo de los datos. Simplemente... quiero preguntar si estás listo para aceptar esa verdad.",
						"vietnamese": "Không. Sự thật đang ngủ yên dưới đáy dữ liệu. Tôi chỉ... muốn hỏi liệu bạn đã sẵn sàng chấp nhận sự thật đó chưa.",
						"thai": "ไม่ ความจริงหลับใหลอยู่ก้นบึ้งของข้อมูล ฉันแค่... อยากถามว่าเธอพร้อมที่จะยอมรับความจริงนั้นแล้วหรือยัง",
						"hindi": "नहीं। सच्चाई डेटा के तल में निष्क्रिय पड़ी है। मैं बस... पूछना चाहता हूँ कि क्या तुम उस सच्चाई को स्वीकार करने के लिए तैयार हो।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "시스템의 미세한 노이즈를 느꼈을 거야. 때때로 기록에서 사라지는 공백도.",
						"english": "You must have felt the subtle noise in the system. And the occasional blanks that disappear from the records.",
						"japanese": "システムの微細なノイズを感じたはずだ。時折記録から消える空白も。",
						"chinese": "你一定感受到了系统微小的噪音。以及记录中偶尔消失的空白。",
						"french": "Tu as dû sentir le léger bruit dans le système. Et les blancs occasionnels qui disparaissent des registres.",
						"spanish": "Debes haber sentido el sutil ruido en el sistema. Y los espacios en blanco ocasionales que desaparecen de los registros.",
						"vietnamese": "Bạn hẳn đã cảm nhận được nhiễu nhỏ trong hệ thống. Và cả những khoảng trống đôi khi biến mất khỏi các ghi chép.",
						"thai": "เธอคงรู้สึกถึงเสียงรบกวนเล็กน้อยในระบบ และช่องว่างที่หายไปจากบันทึกเป็นครั้งคราว",
						"hindi": "तुम्हें सिस्टम में हल्की-फुल्की गड़बड़ी महसूस हुई होगी। और कभी-कभी अभिलेखों से गायब होने वाले खाली स्थान भी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "기록이… 지워진다는 말인가?",
						"english": "The records... are being erased?",
						"japanese": "記録が…消されるということか？",
						"chinese": "记录……被抹去了吗？",
						"french": "Les registres... sont effacés ?",
						"spanish": "¿Los registros... están siendo borrados?",
						"vietnamese": "Các ghi chép... đang bị xóa ư?",
						"thai": "บันทึก... กำลังถูกลบงั้นหรือ?",
						"hindi": "अभिलेख... मिटाए जा रहे हैं?"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "Vortex는 '정화'라고 불렀지. 불완전한 과거를 지우고 새로운 질서를 만든다고.",
						"english": "Vortex called it 'purification'. Saying it erases the imperfect past and creates a new order.",
						"japanese": "Vortexはそれを「浄化」と呼んだ。不完全な過去を消し去り、新たな秩序を創ると言って。",
						"chinese": "Vortex称之为“净化”。说是为了抹去不完美的过去，创造新的秩序。",
						"french": "Vortex appelait ça la 'purification'. Disant qu'il effaçait le passé imparfait et créait un nouvel ordre.",
						"spanish": "Vortex lo llamaba 'purificación'. Diciendo que borraba el pasado imperfecto y creaba un nuevo orden.",
						"vietnamese": "Vortex gọi đó là 'thanh lọc'. Nói rằng nó xóa bỏ quá khứ không hoàn hảo và tạo ra một trật tự mới.",
						"thai": "Vortex เรียกมันว่า 'การชำระล้าง' โดยบอกว่ามันจะลบอดีตที่ไม่สมบูรณ์และสร้างระเบียบใหม่ขึ้นมา",
						"hindi": "वोर्टेक्स ने इसे 'शुद्धि' कहा था। यह कहकर कि वह अपूर्ण अतीत को मिटाता है और एक नई व्यवस्था बनाता है।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "하지만, 지워진 기록은 사라지지 않아. 그저… 그의 일부가 될 뿐이야.",
						"english": "But erased records don't vanish. They just… become part of him.",
						"japanese": "しかし、消された記録は消え去らない。ただ…彼の一部となるだけだ。",
						"chinese": "然而，被抹去的记录并未消失。它们只是…成为他的一部分。",
						"french": "Mais les registres effacés ne disparaissent pas. Ils deviennent juste… une partie de lui.",
						"spanish": "Pero los registros borrados no desaparecen. Simplemente… se convierten en parte de él.",
						"vietnamese": "Nhưng những ghi chép bị xóa không biến mất. Chúng chỉ… trở thành một phần của hắn.",
						"thai": "แต่บันทึกที่ถูกลบไม่ได้หายไปไหน เพียงแค่…กลายเป็นส่วนหนึ่งของเขา",
						"hindi": "लेकिन मिटाए गए रिकॉर्ड गायब नहीं होते। वे बस… उसका हिस्सा बन जाते हैं।"
					},
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "그의 일부…?",
						"english": "Part of him…?",
						"japanese": "彼の一部…？",
						"chinese": "他的一部分…？",
						"french": "Une partie de lui… ?",
						"spanish": "¿Parte de él…?",
						"vietnamese": "Một phần của hắn…?",
						"thai": "ส่วนหนึ่งของเขา…?",
						"hindi": "उसका हिस्सा…?"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						1,
						3
					],
					"speaker": "echo",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "Vortex에게 기록이 지워진 자들… 그들은 그림자가 되어 그의 힘이 돼.",
						"english": "Those whose records were erased by Vortex… they become shadows, his power.",
						"japanese": "Vortexによって記録が消された者たち…彼らは影となり、彼の力となる。",
						"chinese": "那些被Vortex抹去记录的人…他们化为暗影，成为他的力量。",
						"french": "Ceux dont les registres ont été effacés par Vortex… ils deviennent des ombres, sa puissance.",
						"spanish": "Aquellos cuyos registros fueron borrados por Vortex… se convierten en sombras, en su poder.",
						"vietnamese": "Những kẻ bị Vortex xóa bỏ hồ sơ… chúng trở thành bóng tối, là sức mạnh của hắn.",
						"thai": "ผู้ที่ถูก Vortex ลบบันทึก…พวกเขาจะกลายเป็นเงา เป็นพลังของเขา",
						"hindi": "वे, जिनके रिकॉर्ड वॉरटेक्स द्वारा मिटा दिए गए… वे परछाई बन जाते हैं, उसकी शक्ति बन जाते हैं।"
					},
					"speaker": "echo",
					"emotion": "angry"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "우리가 지켜왔던 모든 것이… 그의 먹이였다는 거야?",
						"english": "Everything we've protected… was his prey?",
						"japanese": "我々が守ってきたものすべてが…彼の餌だったと？",
						"chinese": "我们所守护的一切…都是他的猎物吗？",
						"french": "Tout ce que nous avons protégé… n'était que sa proie ?",
						"spanish": "¿Todo lo que hemos protegido… era su presa?",
						"vietnamese": "Mọi thứ chúng ta đã bảo vệ… đều là con mồi của hắn sao?",
						"thai": "ทุกสิ่งที่เราปกป้องมา…เป็นเหยื่อของเขาหรือนี่?",
						"hindi": "जो कुछ भी हमने बचाया… वह सब उसका शिकार था?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그래. 그리고 더 잔혹한 진실이 있어.",
						"english": "Yes. And there's a more brutal truth.",
						"japanese": "そうだ。そして、もっと残酷な真実がある。",
						"chinese": "是的。还有一个更残酷的真相。",
						"french": "Oui. Et il y a une vérité encore plus brutale.",
						"spanish": "Sí. Y hay una verdad aún más cruel.",
						"vietnamese": "Đúng vậy. Và có một sự thật tàn khốc hơn.",
						"thai": "ใช่ และยังมีเรื่องจริงที่โหดร้ายกว่านั้นอีก",
						"hindi": "हाँ। और एक ज़्यादा क्रूर सच भी है।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "Vortex는 개인의 기억까지 조작해. 네가 잊고 있던 과거… 그것도 그가 만든 공백일 수 있어.",
						"english": "Vortex even manipulates personal memories. The past you've forgotten… it could be a void he created.",
						"japanese": "Vortexは個人の記憶までも操作する。君が忘れていた過去…それも彼が作った空白かもしれない。",
						"chinese": "Vortex甚至操纵个人记忆。你遗忘的过去…那也可能是他制造的空白。",
						"french": "Vortex manipule même les souvenirs personnels. Ton passé oublié… pourrait être un vide qu'il a créé.",
						"spanish": "Vortex incluso manipula los recuerdos personales. El pasado que has olvidado… podría ser un vacío que él creó.",
						"vietnamese": "Vortex thậm chí thao túng ký ức cá nhân. Quá khứ mà ngươi đã quên… đó có thể là một khoảng trống do hắn tạo ra.",
						"thai": "Vortex สามารถบิดเบือนความทรงจำส่วนบุคคลได้ด้วย อดีตที่คุณลืมเลือนไป…นั่นอาจเป็นช่องว่างที่เขาสร้างขึ้นมาก็ได้",
						"hindi": "वॉरटेक्स व्यक्तिगत यादों को भी हेरफेर करता है। जो अतीत तुम भूल गए हो… वह भी उसका बनाया हुआ खालीपन हो सकता है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "내 기억까지…?",
						"english": "Even my memories…?",
						"japanese": "私の記憶まで…？",
						"chinese": "甚至我的记忆…？",
						"french": "Même mes souvenirs… ?",
						"spanish": "¿Incluso mis recuerdos…?",
						"vietnamese": "Cả ký ức của ta…?",
						"thai": "แม้กระทั่งความทรงจำของฉัน…?",
						"hindi": "मेरी यादें भी…?"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이제… 되돌릴 수 없어. 마지막 선택만이 남았어.",
						"english": "Now… it can't be undone. Only one final choice remains.",
						"japanese": "もう…元には戻せない。最後の選択だけが残されている。",
						"chinese": "现在…已无法挽回。只剩下最后的选择。",
						"french": "Maintenant… on ne peut plus revenir en arrière. Seul le dernier choix demeure.",
						"spanish": "Ahora… no se puede deshacer. Solo queda una última elección.",
						"vietnamese": "Giờ đây… không thể quay lại được nữa. Chỉ còn lại lựa chọn cuối cùng.",
						"thai": "ตอนนี้…ไม่อาจย้อนคืนได้แล้ว เหลือเพียงทางเลือกสุดท้ายเท่านั้น",
						"hindi": "अब… इसे पूर्ववत नहीं किया जा सकता। केवल अंतिम विकल्प ही बचा है।"
					},
					"type": "speech",
					"speaker": "echo"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "Vortex의 손아귀에 붙잡힌 모든 기록이 지워지는 소리가 들렸다.",
						"english": "I heard the sound of all records caught in the Vortex's grasp being erased.",
						"japanese": "Vortexの手に捕らわれた全ての記録が消去される音が聞こえた。",
						"chinese": "我听到了所有被Vortex抓住的记录被抹去的声音。",
						"french": "J'ai entendu le son de tous les registres, pris dans l'étreinte du Vortex, être effacés.",
						"spanish": "Escuché el sonido de todos los registros, atrapados en las garras de Vortex, siendo borrados.",
						"vietnamese": "Tôi nghe thấy âm thanh tất cả các ghi chép bị Vortex nắm giữ đang bị xóa bỏ.",
						"thai": "ฉันได้ยินเสียงบันทึกทั้งหมดที่ถูกจับกุมไว้ในเงื้อมมือของ Vortex กำลังถูกลบเลือน",
						"hindi": "मैंने वोर्टेक्स की पकड़ में आए सभी अभिलेखों के मिटाए जाने की आवाज़ सुनी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나의 완벽한 질서에… 흠집을 내려 하다니… 어리석군.",
						"english": "To try and mar my perfect order... Foolish.",
						"japanese": "私の完璧な秩序に… 傷をつけようとするとは… 愚かな。",
						"chinese": "竟然想破坏我完美的秩序……真是愚蠢。",
						"french": "Tenter de ternir mon ordre parfait... C'est insensé.",
						"spanish": "Intentar manchar mi orden perfecto... Qué necio.",
						"vietnamese": "Dám làm hỏng trật tự hoàn hảo của ta... Thật ngu ngốc.",
						"thai": "คิดจะทำลายความสมบูรณ์แบบของข้า... ช่างโง่เขลา",
						"hindi": "मेरे पूर्ण व्यवस्था को... बिगाड़ने की कोशिश करना... मूर्खता है।"
					},
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "…아직 끝나지 않았어. 너의 기록을… 반드시 되돌리겠어.",
						"english": "...It's not over yet. I'll definitely restore your records.",
						"japanese": "…まだ終わっていない。お前の記録を…必ず取り戻してみせる。",
						"chinese": "……还没结束。我一定会……夺回你的记录。",
						"french": "...Ce n'est pas encore fini. Je restaurerai tes registres, c'est certain.",
						"spanish": "Aún no ha terminado. Definitivamente restauraré tus registros.",
						"vietnamese": "...Chưa kết thúc đâu. Ta nhất định sẽ... khôi phục ghi chép của ngươi.",
						"thai": "...ยังไม่จบ ข้าจะนำบันทึกของเจ้า... กลับคืนมาให้ได้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं तुम्हारे अभिलेखों को... निश्चित रूप से वापस लाऊँगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럴 일은 없을 거다. 너의 존재 자체가… 이미 나의 기록이 되었으니.",
						"english": "That won't happen. Your very existence... has already become my record.",
						"japanese": "そんなことはありえない。お前の存在自体が…すでに私の記録となったのだから。",
						"chinese": "那是不可能的。你的存在本身……已经成为了我的记录。",
						"french": "Cela n'arrivera pas. Ton existence même... est déjà devenue mon registre.",
						"spanish": "Eso no sucederá. Tu existencia misma... ya se ha convertido en mi registro.",
						"vietnamese": "Sẽ không có chuyện đó đâu. Sự tồn tại của ngươi... đã trở thành ghi chép của ta rồi.",
						"thai": "ไม่มีทางเกิดขึ้นได้ การมีอยู่ของเจ้า... ได้กลายเป็นบันทึกของข้าไปแล้ว",
						"hindi": "ऐसा नहीं होगा। तुम्हारा अस्तित्व ही... मेरा अभिलेख बन चुका है।"
					},
					"speaker": "boss",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 데이터의 감옥, 그 중앙에 Vortex가 서 있었다. 수많은 기록의 파편들이 그를 이루고 있었다.",
						"english": "In the heart of a colossal data prison stood Vortex. Countless fragments of records formed him.",
						"japanese": "巨大なデータの監獄、その中央にVortexが立っていた。無数の記録の破片が彼を構成していた。",
						"chinese": "在庞大的数据监狱中心，Vortex伫立着。无数记录的碎片构成了他。",
						"french": "Au cœur d'une gigantesque prison de données, Vortex se tenait. D'innombrables fragments de registres le composaient.",
						"spanish": "En el corazón de una colosal prisión de datos, Vortex se erguía. Innumerables fragmentos de registros lo formaban.",
						"vietnamese": "Giữa nhà tù dữ liệu khổng lồ, Vortex đứng đó. Vô số mảnh vỡ hồ sơ tạo nên hắn.",
						"thai": "ณ ใจกลางของคุกข้อมูลขนาดยักษ์ Vortex ยืนอยู่ ชิ้นส่วนบันทึกมากมายประกอบขึ้นเป็นเขา",
						"hindi": "एक विशाल डेटा जेल के केंद्र में, वॉرटेक्स खड़ा था। अनगिनत रिकॉर्ड के टुकड़े उसे बना रहे थे।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "왔군. 나의 완벽한 질서를 깨러 온 불완전한 존재여.",
						"english": "You've arrived. Imperfect being, here to shatter my perfect order.",
						"japanese": "来たな。私の完璧な秩序を破りに来た不完全な存在よ。",
						"chinese": "你来了。不完美的你，前来打破我完美的秩序。",
						"french": "Tu es venu. Être imparfait, venu briser mon ordre parfait.",
						"spanish": "Has llegado. Ser imperfecto, que viene a romper mi orden perfecto.",
						"vietnamese": "Ngươi đã đến. Kẻ không hoàn hảo, đến để phá vỡ trật tự hoàn hảo của ta.",
						"thai": "มาแล้วสินะ เจ้าสิ่งมีชีวิตที่ไม่สมบูรณ์แบบ ที่มาเพื่อทำลายระเบียบอันสมบูรณ์แบบของข้า",
						"hindi": "तुम आ गए। अपूर्ण प्राणी, जो मेरी पूर्ण व्यवस्था को तोड़ने आया है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네가… Vortex인가.",
						"english": "You... are Vortex?",
						"japanese": "「お前が…Vortexか。」",
						"chinese": "你…是Vortex？",
						"french": "Toi… tu es Vortex ?",
						"spanish": "¿Tú… eres Vortex?",
						"vietnamese": "Ngươi… là Vortex?",
						"thai": "เจ้า… คือ Vortex หรือไม่",
						"hindi": "तुम… Vortex हो क्या?"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "그래. 그리고 너는… 내가 완성하려던 마지막 기록이지.",
						"english": "Yes. And you… are the final record I sought to complete.",
						"japanese": "「そうだ。そしてお前は…私が完成させようとしていた最後の記録だ。」",
						"chinese": "没错。而你…是我即将完成的最后记录。",
						"french": "Oui. Et toi… tu es le dernier dossier que je cherchais à compléter.",
						"spanish": "Sí. Y tú… eres el último registro que intentaba completar.",
						"vietnamese": "Đúng vậy. Và ngươi… là bản ghi cuối cùng ta muốn hoàn thành.",
						"thai": "ใช่แล้ว และเจ้า… คือบันทึกสุดท้ายที่ข้าพยายามจะทำให้สมบูรณ์",
						"hindi": "हाँ। और तुम… आखिरी रिकॉर्ड हो जिसे मैं पूरा करना चाहता था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "「どういうことだ？」",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "หมายความว่าอะไร",
						"hindi": "क्या मतलब है तुम्हारा?"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"type": "direction",
					"speaker": "echo",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그는 거짓말하고 있어. 너는 그의 기록이 아니야. 너는… 그의 과거야.",
						"english": "He's lying. You're not his record. You… are his past.",
						"japanese": "「彼は嘘をついている。お前は彼の記録ではない。お前は…彼の過去だ。」",
						"chinese": "他在说谎。你不是他的记录。你…是他的过去。",
						"french": "Il ment. Tu n'es pas son dossier. Tu… es son passé.",
						"spanish": "Está mintiendo. No eres su registro. Tú… eres su pasado.",
						"vietnamese": "Hắn đang nói dối. Ngươi không phải bản ghi của hắn. Ngươi… là quá khứ của hắn.",
						"thai": "เขากำลังโกหก เจ้าไม่ใช่บันทึกของเขา เจ้า… คืออดีตของเขา",
						"hindi": "वह झूठ बोल रहा है। तुम उसका रिकॉर्ड नहीं हो। तुम… उसका अतीत हो।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭐라고?",
						"english": "What did you say?",
						"japanese": "「何だと？」",
						"chinese": "你说什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "ว่าไงนะ",
						"hindi": "क्या कहा?"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "에코! 감히 방해하는가!",
						"english": "Echo! How dare you interfere!",
						"japanese": "「エコー！よくも邪魔をしたな！」",
						"chinese": "Echo！你竟敢妨碍我！",
						"french": "Écho ! Comment oses-tu t'immiscer !",
						"spanish": "¡Eco! ¡Cómo te atreves a interferir!",
						"vietnamese": "Echo! Dám cả gan can thiệp sao!",
						"thai": "เอคโค่! เจ้าบังอาจมาขัดขวางข้าหรือ!",
						"hindi": "इको! तुम्हारी हिम्मत कैसे हुई हस्तक्षेप करने की!"
					},
					"speaker": "boss"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "진실을 마주해, Vortex. 그리고 너의 분신… 아니, 원래의 너였던 이 존재에게도.",
						"english": "Face the truth, Vortex. And you, his double… no, the being who was once you.",
						"japanese": "「真実と向き合え、Vortex。そしてお前の分身…いや、元のお前だったこの存在にも。」",
						"chinese": "面对真相吧，Vortex。还有你的分身…不，是曾经的你。",
						"french": "Fais face à la vérité, Vortex. Et toi, son double… non, l'être que tu étais.",
						"spanish": "Enfrenta la verdad, Vortex. Y tú, su doble… no, el ser que alguna vez fuiste.",
						"vietnamese": "Hãy đối mặt với sự thật đi, Vortex. Và cả ngươi, bản sao của hắn… không, cái kẻ từng là ngươi nữa.",
						"thai": "จงเผชิญหน้ากับความจริงซะ Vortex และเจ้า ผู้เป็นร่างจำแลงของเขา… ไม่สิ ผู้ที่เคยเป็นเจ้า",
						"hindi": "सच्चाई का सामना करो, Vortex। और तुम, उसके हमशक्ल… नहीं, वह सत्ता जो कभी तुम थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "Vortex의 얼굴 전체에 섬광 같은 에러 코드가 번쩍였다. 주변 스크린 속 얼굴들이 일그러졌다.",
						"english": "Flash-like error codes flickered across Vortex's entire face. The faces on the surrounding screens distorted.",
						"japanese": "「Vortexの顔全体に閃光のようなエラーコードが点滅した。周囲のスクリーンに映る顔も歪んだ。」",
						"chinese": "Vortex的整个脸上闪烁着如闪电般的错误代码。周围屏幕中的面孔也扭曲了。",
						"french": "Des codes d'erreur semblables à des éclairs clignotaient sur tout le visage de Vortex. Les visages sur les écrans environnants se déformèrent.",
						"spanish": "Códigos de error similares a destellos parpadearon en todo el rostro de Vortex. Los rostros en las pantallas circundantes se distorsionaron.",
						"vietnamese": "Các mã lỗi như tia chớp nhấp nháy trên toàn bộ khuôn mặt của Vortex. Các khuôn mặt trên màn hình xung quanh méo mó đi.",
						"thai": "รหัสข้อผิดพลาดคล้ายแสงวาบกะพริบทั่วใบหน้าของ Vortex ใบหน้าบนหน้าจอโดยรอบบิดเบี้ยว",
						"hindi": "Vortex के पूरे चेहरे पर बिजली के जैसे एरर कोड चमकने लगे। आसपास की स्क्रीनों पर मौजूद चेहरे बिगड़ गए।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "크크크… 진실은 중요하지 않아. 내가 만드는 것이 곧 진실이니까!",
						"english": "Hee hee hee… The truth doesn't matter. What I create, that is truth!",
						"japanese": "「ククク…真実などどうでもいい。私が創るものこそが真実なのだからな！」",
						"chinese": "呵呵呵…真相不重要。我创造的，才是真相！",
						"french": "Hé hé hé… La vérité n'a pas d'importance. Ce que je crée, c'est la vérité !",
						"spanish": "Je je je… La verdad no importa. ¡Lo que yo creo, eso es la verdad!",
						"vietnamese": "Khà khà khà… Sự thật không quan trọng. Thứ ta tạo ra, đó mới là sự thật!",
						"thai": "ฮ่า ฮ่า ฮ่า… ความจริงไม่สำคัญ สิ่งที่ข้าสร้างขึ้นนั่นแหละคือความจริง!",
						"hindi": "ही ही ही… सच्चाई मायने नहीं रखती। जो मैं बनाता हूँ, वही सच है!"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "당신들의 모든 기록을 내가 지워드리죠. 대신 당신들 자신도 사라질 겁니다!",
						"english": "I'll erase all your records. But in return, you yourselves will vanish!",
						"japanese": "「あなたたちのすべての記録を私が消去して差し上げましょう。その代わり、あなたたち自身も消滅するでしょう！」",
						"chinese": "我将抹去你们所有的记录。作为交换，你们自己也将消失！",
						"french": "J'effacerai tous vos dossiers. Mais en retour, vous disparaîtrez vous-mêmes !",
						"spanish": "Borraré todos sus registros. ¡Pero a cambio, ustedes mismos desaparecerán!",
						"vietnamese": "Ta sẽ xóa sạch mọi bản ghi của các ngươi. Đổi lại, chính các ngươi cũng sẽ biến mất!",
						"thai": "ข้าจะลบทุกบันทึกของพวกเจ้าออก แต่ในทางกลับกัน พวกเจ้าเองก็จะหายไปเช่นกัน!",
						"hindi": "मैं आपके सभी रिकॉर्ड मिटा दूँगा। लेकिन बदले में, आप खुद भी गायब हो जाएँगे!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "허공에서 수많은 데이터 조각들이 소용돌이치며 그의 육체를 찢어발기기 시작했다.",
						"english": "Countless data fragments swirled in the void, beginning to tear his body apart.",
						"japanese": "無数のデータが虚空で渦巻き、彼の肉体を引き裂き始めた。",
						"chinese": "无数数据碎片在虚空中盘旋，开始撕裂他的肉体。",
						"french": "D'innombrables fragments de données tourbillonnaient dans le vide, commençant à déchirer son corps.",
						"spanish": "Innumerables fragmentos de datos se arremolinaban en el vacío, comenzando a desgarrar su cuerpo.",
						"vietnamese": "Vô số mảnh dữ liệu xoáy trong hư không, bắt đầu xé nát cơ thể anh ta.",
						"thai": "ชิ้นส่วนข้อมูลนับไม่ถ้วนหมุนวนอยู่ในความว่างเปล่า เริ่มฉีกกระชากร่างกายของเขา",
						"hindi": "अनगिनत डेटा खंड शून्य में घूमते हुए, उसके शरीर को फाड़ना शुरू कर दिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "진실은… 데이터의 바닥에 잠들어 있었다. 그리고 이제, 너희의 모든 흔적은… 나를 위한… 영원한… 기록이 될 것이다!",
						"english": "The truth... lay dormant at the bottom of the data. And now, all your traces... will become... an eternal... record... for me!",
						"japanese": "真実は…データの底に眠っていた。そして今、お前たちの全ての痕跡は…私のための…永遠の…記録となるだろう！",
						"chinese": "真相…沉睡在数据的底层。而现在，你们所有的痕迹…都将成为…我永恒的…记录！",
						"french": "La vérité... dormait au fond des données. Et maintenant, toutes vos traces... deviendront... un enregistrement... éternel... pour moi !",
						"spanish": "La verdad... yacía dormida en el fondo de los datos. Y ahora, todas vuestras huellas... se convertirán... en un registro... eterno... ¡para mí!",
						"vietnamese": "Sự thật... đã ngủ yên dưới đáy dữ liệu. Và giờ đây, mọi dấu vết của các ngươi... sẽ trở thành... một bản ghi... vĩnh cửu... dành cho ta!",
						"thai": "ความจริง... หลับใหลอยู่ที่ก้นบึ้งของข้อมูล และตอนนี้ ร่องรอยทั้งหมดของพวกเจ้า... จะกลายเป็น... บันทึก... นิรันดร์... ของข้า!",
						"hindi": "सच... डेटा के तल पर सोया हुआ था। और अब, तुम्हारे सभी निशान... मेरे लिए... एक शाश्वत... रिकॉर्ड बन जाएँगे!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "막아야 해! 그가 너의 모든 것을 삼키기 전에!",
						"english": "We have to stop him! Before he devours everything you are!",
						"japanese": "止めなければ！彼がお前の全てを飲み込む前に！",
						"chinese": "必须阻止他！在他吞噬你的一切之前！",
						"french": "Il faut l'arrêter ! Avant qu'il n'engloutisse tout ce que tu es !",
						"spanish": "¡Hay que detenerlo! ¡Antes de que devore todo lo que eres!",
						"vietnamese": "Phải ngăn hắn lại! Trước khi hắn nuốt chửng tất cả của ngươi!",
						"thai": "ต้องหยุดเขา! ก่อนที่เขาจะกลืนกินทุกสิ่งของเจ้า!",
						"hindi": "हमें उसे रोकना होगा! इससे पहले कि वह तुम्हारा सब कुछ निगल जाए!"
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "Vortex… 네 기록을 내가 지워주겠어!",
						"english": "Vortex... I'll erase your records!",
						"japanese": "Vortex… お前の記録は私が消してやる！",
						"chinese": "漩涡…我会抹去你的记录！",
						"french": "Vortex... J'effacerai tes enregistrements !",
						"spanish": "¡Vortex... borraré tus registros!",
						"vietnamese": "Vortex... Ta sẽ xóa sổ ghi chép của ngươi!",
						"thai": "วอร์เท็กซ์... ข้าจะลบข้อมูลของเจ้า!",
						"hindi": "वोर्टेक्स... मैं तुम्हारे रिकॉर्ड मिटा दूँगा!"
					},
					"speaker": "character_1"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "데이터의 폭풍이 멈추고, Vortex의 형상은 산산이 부서졌다.",
						"english": "The data storm ceased, and Vortex's form shattered into pieces.",
						"japanese": "データの嵐が止み、Vortexの姿は粉々に砕け散った。",
						"chinese": "数据风暴平息，Vortex的形体支离破碎。",
						"french": "La tempête de données cessa, et la forme de Vortex vola en éclats.",
						"spanish": "La tormenta de datos cesó, y la forma de Vortex se hizo pedazos.",
						"vietnamese": "Cơn bão dữ liệu ngừng lại, và hình dạng của Vortex vỡ tan tành.",
						"thai": "พายุข้อมูลสงบลง และร่างของวอร์เท็กซ์ก็แตกเป็นเสี่ยงๆ",
						"hindi": "डेटा का तूफान थम गया, और वोर्टेक्स का रूप टुकड़ों में बिखर गया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "크크크… 사라지지 않아… 나의 기록은… 영원히… 이곳에…",
						"english": "Hahaha... I won't disappear... My records... will be here... forever...",
						"japanese": "ククク…消えはしない…私の記録は…永遠に…ここに…",
						"chinese": "呵呵呵…我不会消失…我的记录…将永远…在这里…",
						"french": "Hahaha... Je ne disparaîtrai pas... Mes enregistrements... seront ici... pour toujours...",
						"spanish": "Jajaja... No desapareceré... Mis registros... estarán aquí... para siempre...",
						"vietnamese": "Khà khà khà... Ta sẽ không biến mất... Bản ghi của ta... sẽ ở đây... mãi mãi...",
						"thai": "ฮ่าฮ่าฮ่า... ข้าไม่หายไปหรอก... บันทึกของข้า... จะอยู่ที่นี่... ตลอดไป...",
						"hindi": "हाहाहा... मैं गायब नहीं होऊंगा... मेरे रिकॉर्ड... यहाँ... हमेशा के लिए... रहेंगे..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…사라졌다.",
						"english": "...He's gone.",
						"japanese": "…消えた。",
						"chinese": "…消失了。",
						"french": "...Il a disparu.",
						"spanish": "...Desapareció.",
						"vietnamese": "...Hắn đã biến mất.",
						"thai": "...หายไปแล้ว",
						"hindi": "...वह चला गया।"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "echo",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "완전히 사라진 건 아닐 거야. 그의 파편들이 어딘가에 남아 있을 테니.",
						"english": "He's probably not completely gone. Fragments of him must remain somewhere.",
						"japanese": "完全には消えていないだろう。彼の破片がどこかに残っているはずだ。",
						"chinese": "他可能没有完全消失。他的碎片一定还留在某个地方。",
						"french": "Il n'est probablement pas complètement parti. Des fragments de lui doivent subsister quelque part.",
						"spanish": "Probablemente no se ha ido del todo. Fragmentos de él deben permanecer en algún lugar.",
						"vietnamese": "Hắn có lẽ chưa biến mất hoàn toàn. Những mảnh vỡ của hắn chắc hẳn còn sót lại ở đâu đó.",
						"thai": "เขาคงยังไม่หายไปไหนทั้งหมด เศษเสี้ยวของเขาคงยังเหลืออยู่บ้างที่ไหนสักแห่ง",
						"hindi": "वह शायद पूरी तरह से गायब नहीं हुआ है। उसके टुकड़े कहीं न कहीं ज़रूर बचे होंगे।"
					},
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "그럼… 이건 끝이 아니라는 거야?",
						"english": "So... this isn't the end?",
						"japanese": "じゃあ…これは終わりじゃないってこと？",
						"chinese": "那么…这还没结束吗？",
						"french": "Alors... ce n'est pas la fin ?",
						"spanish": "Entonces... ¿esto no es el final?",
						"vietnamese": "Vậy... đây không phải là kết thúc sao?",
						"thai": "งั้น... นี่ไม่ใช่จุดจบเหรอ?",
						"hindi": "तो... यह अंत नहीं है?"
					}
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "새로운 시작일지도 몰라. 그가 없어야 진정한 기록이 시작될 수 있어.",
						"english": "Perhaps it's a new beginning. True records can only begin without him.",
						"japanese": "新しい始まりかもしれない。彼がいなければ、真の記録は始まらない。",
						"chinese": "也许这是一个新的开始。没有他，真正的记录才能开始。",
						"french": "C'est peut-être un nouveau départ. Les véritables enregistrements ne peuvent commencer qu'en son absence.",
						"spanish": "Quizás sea un nuevo comienzo. Los verdaderos registros solo pueden empezar sin él.",
						"vietnamese": "Có lẽ đây là một khởi đầu mới. Ghi chép thực sự chỉ có thể bắt đầu khi không có hắn.",
						"thai": "บางทีนี่อาจเป็นการเริ่มต้นใหม่ บันทึกที่แท้จริงจะเริ่มได้ก็ต่อเมื่อไม่มีเขา",
						"hindi": "शायद यह एक नई शुरुआत है। सच्चे रिकॉर्ड केवल उसके बिना ही शुरू हो सकते हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "영원한 기록의 감옥은 붕괴했다. 그러나 세상의 데이터는 여전히 불완전했다.",
						"english": "The prison of eternal records collapsed. Yet, the world's data remained incomplete.",
						"japanese": "永遠の記録の監獄は崩壊した。しかし、世界のデータは依然として不完全だった。",
						"chinese": "永恒记录的监狱崩塌了。然而，世界的数据依然不完整。",
						"french": "La prison des registres éternels s'est effondrée. Pourtant, les données du monde restaient incomplètes.",
						"spanish": "La prisión de los registros eternos colapsó. Sin embargo, los datos del mundo seguían incompletos.",
						"vietnamese": "Nhà tù của những ghi chép vĩnh cửu đã sụp đổ. Tuy nhiên, dữ liệu của thế giới vẫn còn dang dở.",
						"thai": "คุกแห่งบันทึกนิรันดร์ได้พังทลายลงแล้ว แต่ข้อมูลของโลกก็ยังคงไม่สมบูรณ์",
						"hindi": "शाश्वत अभिलेखों की कारागार ध्वस्त हो गई। फिर भी, संसार का डेटा अभी भी अधूरा था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어쩌면, 진실이란 기록 속에 없는 것일지도 모른다.",
						"english": "Perhaps, the truth lies outside the records.",
						"japanese": "もしかしたら、真実とは記録の中にないのかもしれない。",
						"chinese": "也许，真相并不存在于记录之中。",
						"french": "Peut-être que la vérité n'existe pas dans les registres.",
						"spanish": "Quizás, la verdad no se encuentre en los registros.",
						"vietnamese": "Có lẽ, sự thật nằm ngoài những ghi chép.",
						"thai": "บางที ความจริงอาจจะอยู่นอกเหนือจากบันทึก",
						"hindi": "शायद, सत्य अभिलेखों में नहीं है।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"Vortex가 사라진 후에도, 도시는 여전히 데이터의 그림자 속에 있었다.",
			"지워진 기록은 돌아오지 않았다. 누군가는 존재 자체를 잊혔다.",
			"이 모든 것이 구원이었을까, 혹은 또 다른 침해의 시작이었을까.",
			"불완전한 진실만이 남았다. 주인공은, 새로운 기록을 찾아 나섰다. 그 불완전함을 완성하기 위해."
		],
		"english": [
			"Even after Vortex vanished, the city remained in the shadow of data.",
			"Erased records never returned. Some were forgotten entirely.",
			"Was all of this salvation, or the beginning of another intrusion?",
			"Only an incomplete truth remained. The protagonist set out to find new records, to complete that imperfection."
		],
		"japanese": [
			"Vortexが消えた後も、都市は依然としてデータの影の中にあった。",
			"消された記録は戻らなかった。誰かは存在自体を忘れ去られた。",
			"これら全ては救済だったのか、それとも別の侵害の始まりだったのか。",
			"不完全な真実だけが残った。主人公は、その不完全さを完成させるため、新たな記録を探しに出た。"
		],
		"chinese": [
			"Vortex消失后，城市仍笼罩在数据的阴影中。",
			"被抹去的记录未能复原。有人甚至被遗忘了存在本身。",
			"这一切是救赎，抑或是另一次侵犯的开端？",
			"只剩下不完整的真相。主人公踏上了寻找新记录的旅程，以完善那份不完整。"
		],
		"french": [
			"Même après la disparition de Vortex, la ville restait dans l'ombre des données.",
			"Les enregistrements effacés ne sont jamais revenus. Certains ont été complètement oubliés.",
			"Tout cela était-il un salut, ou le début d'une autre intrusion ?",
			"Seule une vérité incomplète demeurait. Le protagoniste partit à la recherche de nouveaux enregistrements, pour achever cette imperfection."
		],
		"spanish": [
			"Incluso después de que Vortex desapareciera, la ciudad permaneció en la sombra de los datos.",
			"Los registros borrados nunca regresaron. Algunos fueron completamente olvidados.",
			"¿Fue todo esto una salvación, o el comienzo de otra intrusión?",
			"Solo quedó una verdad incompleta. El protagonista partió en busca de nuevos registros, para completar esa imperfección."
		],
		"vietnamese": [
			"Ngay cả sau khi Vortex biến mất, thành phố vẫn nằm trong bóng tối của dữ liệu.",
			"Những kỷ lục đã bị xóa không bao giờ trở lại. Một số người đã bị lãng quên sự tồn tại.",
			"Tất cả những điều này là sự cứu rỗi, hay sự khởi đầu của một sự xâm nhập khác?",
			"Chỉ còn lại một sự thật không hoàn chỉnh. Nhân vật chính đã lên đường tìm kiếm những kỷ lục mới, để hoàn thiện sự không hoàn chỉnh đó."
		],
		"thai": [
			"แม้ Vortex จะหายไปแล้ว แต่เมืองก็ยังคงอยู่ในเงาของข้อมูล",
			"บันทึกที่ถูกลบไปไม่เคยกลับคืนมา บางคนถูกลืมเลือนไปจากการมีอยู่",
			"ทั้งหมดนี้คือการช่วยให้รอด หรือเป็นจุดเริ่มต้นของการรุกล้ำอีกครั้งกันแน่",
			"เหลือเพียงความจริงที่ไม่สมบูรณ์ ตัวเอกออกเดินทางค้นหาบันทึกใหม่ เพื่อเติมเต็มความไม่สมบูรณ์นั้น"
		],
		"hindi": [
			"वॉर्टेक्स के गायब होने के बाद भी, शहर डेटा की छाया में रहा।",
			"मिटाए गए रिकॉर्ड कभी वापस नहीं आए। कुछ को पूरी तरह से भुला दिया गया।",
			"क्या यह सब मोक्ष था, या किसी और घुसपैठ की शुरुआत?",
			"केवल एक अधूरी सच्चाई बची थी। नायक उस अपूर्णता को पूरा करने के लिए, नए रिकॉर्ड खोजने निकल पड़ा।"
		]
	},
	"prologue": {
		"korean": [
			"데이터의 바다, 그 끝에 다다랐다.",
			"Vortex가 구축한 영원한 기록의 감옥. 모든 진실이 숨겨진 곳.",
			"최초의 조력자, 에코는 마지막 열쇠를 쥐고 있었다.",
			"이곳에서 너는 모든 것을 알게 될 것이다. 그리고 모든 것을 잃을지도 모른다."
		],
		"english": [
			"Reached the end of the data ocean.",
			"The eternal prison of records built by Vortex. Where all truth is hidden.",
			"The first helper, Echo, held the final key.",
			"Here, you will learn everything. And perhaps lose everything."
		],
		"japanese": [
			"データの海、その果てに辿り着いた。",
			"Vortexが築いた永遠の記録の監獄。全ての真実が隠された場所。",
			"最初の協力者、エコーは最後の鍵を握っていた。",
			"ここで、君は全てを知るだろう。そして全てを失うかもしれない。"
		],
		"chinese": [
			"抵达了数据之海的尽头。",
			"Vortex构筑的永恒记录监狱。所有真相隐藏之地。",
			"最初的协助者，回声，掌握着最后的钥匙。",
			"在此，你将知晓一切。也可能失去一切。"
		],
		"french": [
			"Atteint la fin de l'océan de données.",
			"La prison éternelle des archives bâtie par Vortex. Où toute vérité est cachée.",
			"Le premier assistant, Echo, détenait la dernière clé.",
			"Ici, tu sauras tout. Et peut-être tout perdre."
		],
		"spanish": [
			"Alcanzado el fin del océano de datos.",
			"La prisión eterna de los registros construida por Vortex. Donde toda verdad está oculta.",
			"La primera ayudante, Echo, tenía la última llave.",
			"Aquí, lo sabrás todo. Y quizás lo pierdas todo."
		],
		"vietnamese": [
			"Đã đến cuối đại dương dữ liệu.",
			"Nhà tù kỷ lục vĩnh cửu do Vortex xây dựng. Nơi mọi sự thật bị che giấu.",
			"Người hỗ trợ đầu tiên, Echo, đã giữ chìa khóa cuối cùng.",
			"Tại đây, bạn sẽ biết mọi thứ. Và có thể mất tất cả."
		],
		"thai": [
			"มาถึงจุดสิ้นสุดของมหาสมุทรแห่งข้อมูล",
			"คุกแห่งบันทึกนิรันดร์ที่สร้างโดย Vortex ที่ซ่อนความจริงทั้งหมดไว้",
			"ผู้ช่วยเหลือคนแรกอย่างเอคโค่ ถือกุญแจดอกสุดท้ายอยู่",
			"ที่นี่ คุณจะได้รู้ทุกสิ่ง และอาจจะสูญเสียทุกสิ่งไป"
		],
		"hindi": [
			"डेटा के सागर के अंत तक पहुँच गया।",
			"वॉर्टेक्स द्वारा निर्मित अभिलेखों का शाश्वत कारागार। जहाँ हर सच्चाई छिपी है।",
			"पहला सहायक, इको, अंतिम चाबी थामे हुए था।",
			"यहाँ, तुम सब कुछ जान जाओगे। और शायद सब कुछ खो भी दोगे।"
		]
	}
} as const;
