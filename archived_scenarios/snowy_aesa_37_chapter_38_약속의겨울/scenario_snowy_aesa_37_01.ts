export const scenario_snowy_aesa_37_01 = {
	"scenario_id": "snowy_aesa_37_01",
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
					"content": {
						"korean": "북방의 얼어붙은 대지. 뼈를 에는 바람이 모든 소리를 삼켰다.",
						"english": "The frozen lands of the North. Bone-chilling winds swallowed every sound.",
						"japanese": "北方の凍てついた大地。骨を刺すような風が全ての音を飲み込んだ。",
						"chinese": "北方冻结的大地。刺骨的寒风吞噬了所有的声音。",
						"french": "Les terres gelées du Nord. Des vents glaçants engloutissaient chaque son.",
						"spanish": "Las tierras heladas del Norte. Vientos gélidos se tragaron cada sonido.",
						"vietnamese": "Vùng đất băng giá phương Bắc. Những cơn gió buốt xương nuốt chửng mọi âm thanh.",
						"thai": "ดินแดนน้ำแข็งแห่งแดนเหนือ สายลมหนาวเหน็บกลืนกินทุกสรรพเสียง",
						"hindi": "उत्तर की जमी हुई भूमि। हड्डी गला देने वाली हवाओं ने हर आवाज को निगल लिया था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가 혹한의 북방인가. 소문보다 더하네.",
						"english": "Is this the bitter North? It's even harsher than rumored.",
						"japanese": "ここが酷寒の北方か。噂よりもひどいな。",
						"chinese": "这里就是严寒的北方吗？比传闻中更甚。",
						"french": "C'est donc le Nord glacial ? C'est encore plus rude que les rumeurs.",
						"spanish": "¿Es este el Norte amargo? Es aún más duro de lo que se rumoreaba.",
						"vietnamese": "Đây là phương Bắc khắc nghiệt ư? Khắc nghiệt hơn cả lời đồn.",
						"thai": "นี่คือแดนเหนืออันหนาวเหน็บหรือนี่? รุนแรงกว่าที่ร่ำลือเสียอีก",
						"hindi": "क्या यह कड़ाके की ठंड वाला उत्तर है? यह अफवाहों से भी बदतर है।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "…맞아요. 이곳은 잊혀진 시간의 기록이 숨겨진 곳.",
						"english": "...That's right. This is where the records of forgotten time are hidden.",
						"japanese": "…そうです。ここは忘れ去られた時間の記録が隠された場所。",
						"chinese": "……没错。这里是隐藏着被遗忘时间记录的地方。",
						"french": "...C'est exact. C'est ici que sont cachés les récits du temps oublié.",
						"spanish": "...Así es. Aquí es donde se ocultan los registros del tiempo olvidado.",
						"vietnamese": "...Đúng vậy. Đây là nơi cất giấu những ghi chép về thời gian bị lãng quên.",
						"thai": "...ถูกต้องแล้ว ที่นี่คือที่ซ่อนบันทึกของกาลเวลาที่ถูกลืมเลือน",
						"hindi": "...सही है। यह वह जगह है जहाँ भूले हुए समय के रिकॉर्ड छिपे हुए हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "잊혀진 기록?",
						"english": "Forgotten records?",
						"japanese": "忘れられた記録？",
						"chinese": "遗忘的记录？",
						"french": "Des récits oubliés ?",
						"spanish": "¿Registros olvidados?",
						"vietnamese": "Ghi chép bị lãng quên?",
						"thai": "บันทึกที่ถูกลืม?",
						"hindi": "भूले हुए रिकॉर्ड?"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 얼음 봉우리 안에, 희미한 속삭임이 들려오고 있어요.",
						"english": "Inside those icy peaks, a faint whisper can be heard.",
						"japanese": "あの氷の峰の中に、微かな囁きが聞こえてきます。",
						"chinese": "在那些冰峰之中，可以听到微弱的低语。",
						"french": "À l'intérieur de ces pics glacés, un léger murmure se fait entendre.",
						"spanish": "Dentro de esos picos helados, se puede escuchar un débil susurro.",
						"vietnamese": "Bên trong những đỉnh núi băng giá đó, một tiếng thì thầm yếu ớt có thể được nghe thấy.",
						"thai": "ภายในยอดเขาน้ำแข็งเหล่านั้น มีเสียงกระซิบแผ่วเบาดังออกมา",
						"hindi": "उन बर्फीली चोटियों के अंदर, एक हल्की फुसफुसाहट सुनी जा सकती है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "속삭임?",
						"english": "Whispers?",
						"japanese": "囁き？",
						"chinese": "低语？",
						"french": "Murmures ?",
						"spanish": "¿Susurros?",
						"vietnamese": "Tiếng thì thầm?",
						"thai": "เสียงกระซิบ?",
						"hindi": "फुसफुसाहट?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "일행은 봉우리 정상에 다다랐다. 그곳엔 고대 룬 문양이 새겨진 석판이 있었다.",
						"english": "The party reached the peak. There, a stone tablet etched with ancient runes stood.",
						"japanese": "一行は山頂に辿り着いた。そこには古代ルーン文字が刻まれた石板があった。",
						"chinese": "一行人抵达了山顶。那里有一块刻有古老符文的石碑。",
						"french": "Le groupe atteignit le sommet. Une tablette de pierre gravée de runes antiques s'y dressait.",
						"spanish": "El grupo llegó a la cima. Allí, una tablilla de piedra grabada con runas antiguas se alzaba.",
						"vietnamese": "Đoàn người đã đến đỉnh núi. Ở đó có một phiến đá khắc những ký tự rune cổ đại.",
						"thai": "คณะเดินทางถึงยอดเขา ที่นั่นมีศิลาจารึกอักษรรูนโบราณตั้งอยู่",
						"hindi": "दल चोटी पर पहुँच गया। वहाँ, प्राचीन रुनिक चिह्नों से खुदी हुई एक शिला थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이게 뭐야?",
						"english": "What is this?",
						"japanese": "これは何だ？",
						"chinese": "这是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es esto?",
						"vietnamese": "Cái gì đây?",
						"thai": "นี่คืออะไร?",
						"hindi": "यह क्या है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…고대 룬 문자. 이걸 해독해야 해요.",
						"english": "...Ancient runes. We need to decipher this.",
						"japanese": "…古代ルーン文字だ。これを解読しなければ。",
						"chinese": "……古老的符文。我们必须 decipher 它。",
						"french": "...Des runes antiques. Nous devons les déchiffrer.",
						"spanish": "...Runas antiguas. Necesitamos descifrar esto.",
						"vietnamese": "...Ký tự rune cổ đại. Chúng ta cần giải mã nó.",
						"thai": "...อักษรรูนโบราณ เราต้องถอดรหัสสิ่งนี้",
						"hindi": "...प्राचीन रुनिक चिह्न। हमें इसे समझना होगा।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
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
					"emotion": "base",
					"content": {
						"korean": "이 문양… 깨진 조각들이 이어지질 않아요. 뭔가 부족해.",
						"english": "These markings... the broken pieces don't connect. Something's missing.",
						"japanese": "この文様… 砕けた破片がつながらない。何かが足りない。",
						"chinese": "这些图案……破碎的碎片无法连接。缺少了什么。",
						"french": "Ces motifs... les morceaux brisés ne se connectent pas. Il manque quelque chose.",
						"spanish": "Estos grabados... las piezas rotas no encajan. Falta algo.",
						"vietnamese": "Những ký hiệu này... các mảnh vỡ không khớp. Thiếu gì đó.",
						"thai": "ลวดลายนี้... ชิ้นส่วนที่แตกหักเชื่อมต่อกันไม่ได้ มีบางอย่างขาดหายไป",
						"hindi": "ये निशान... टूटे हुए टुकड़े जुड़ नहीं रहे। कुछ गायब है।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그럼 해석 못 해?",
						"english": "So we can't interpret it?",
						"japanese": "じゃあ、解釈できないのか？",
						"chinese": "那我们无法解读它吗？",
						"french": "Alors, on ne peut pas l'interpréter ?",
						"spanish": "¿Entonces no podemos interpretarlo?",
						"vietnamese": "Vậy không giải thích được sao?",
						"thai": "งั้นก็แปลไม่ได้เหรอ?",
						"hindi": "तो हम इसे समझ नहीं सकते?"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아니요, 기다리면 될 거예요. 잊혀진 기억이 스스로 모습을 드러낼 때까지.",
						"english": "No, we just need to wait. Until forgotten memories reveal themselves.",
						"japanese": "いいえ、待てばいいんです。忘れられた記憶が自ら姿を現すまで。",
						"chinese": "不，我们只需要等待。直到被遗忘的记忆自行显现。",
						"french": "Non, il suffit d'attendre. Jusqu'à ce que les souvenirs oubliés se révèlent d'eux-mêmes.",
						"spanish": "No, solo tenemos que esperar. Hasta que los recuerdos olvidados se revelen por sí mismos.",
						"vietnamese": "Không, chúng ta chỉ cần đợi. Cho đến khi những ký ức bị lãng quên tự hiện ra.",
						"thai": "ไม่ เราแค่ต้องรอ จนกว่าความทรงจำที่ถูกลืมจะปรากฏออกมาเอง",
						"hindi": "नहीं, हमें बस इंतज़ार करना होगा। जब तक भूली हुई यादें खुद सामने न आ जाएं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그 순간, 석판이 격렬하게 흔들리기 시작했다. 섬뜩한 진동이 대지를 울렸다.",
						"english": "At that moment, the stone tablet began to shake violently. An eerie tremor echoed through the ground.",
						"japanese": "その瞬間、石板が激しく揺れ始めた。不気味な振動が大地を揺るがした。",
						"chinese": "那一刻，石碑开始剧烈摇晃。一阵诡异的震动响彻大地。",
						"french": "À cet instant, la tablette de pierre se mit à trembler violemment. Une étrange vibration résonna dans le sol.",
						"spanish": "En ese momento, la tablilla de piedra comenzó a temblar violentamente. Un escalofriante temblor resonó por la tierra.",
						"vietnamese": "Khoảnh khắc đó, phiến đá bắt đầu rung chuyển dữ dội. Một chấn động rợn người vang vọng khắp mặt đất.",
						"thai": "ในขณะนั้น ศิลาจารึกเริ่มสั่นสะเทือนอย่างรุนแรง แรงสั่นสะเทือนที่น่าขนลุกดังไปทั่วพื้นดิน",
						"hindi": "उसी क्षण, शिला violently हिलने लगी। एक भयावह कंपन ने धरती को गुंजा दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 진동은 뭐야?!",
						"english": "What's this tremor?!",
						"japanese": "この振動は何だ？！",
						"chinese": "这震动是什么？！",
						"french": "C'est quoi cette vibration ?!",
						"spanish": "¿Qué es este temblor?!",
						"vietnamese": "Rung động này là gì?!",
						"thai": "แรงสั่นสะเทือนนี้คืออะไร?!",
						"hindi": "यह कंपन क्या है?!"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…'영원의 속삭임'… 파괴의 시한을 알리는 첫 번째 징조예요.",
						"english": "...The 'Whispers of Eternity'... It's the first sign announcing the deadline of destruction.",
						"japanese": "…「永遠の囁き」… 破壊の時限を告げる最初の兆候です。",
						"chinese": "……“永恒的低语”……这是宣告毁灭期限的第一个征兆。",
						"french": "...Les 'Murmures de l'Éternité'... C'est le premier signe annonçant la date limite de la destruction.",
						"spanish": "...Los 'Susurros de la Eternidad'... Es el primer signo que anuncia el plazo de la destrucción.",
						"vietnamese": "...'Lời thì thầm vĩnh cửu'... Đó là dấu hiệu đầu tiên báo hiệu thời hạn của sự hủy diệt.",
						"thai": "...'เสียงกระซิบแห่งนิรันดร์'... มันคือสัญญาณแรกที่ประกาศถึงกำหนดเวลาของการทำลายล้าง",
						"hindi": "...'शाश्वत की फुसफुसाहट'... यह विनाश की समय सीमा की घोषणा करने वाला पहला संकेत है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "대지에 깔린 깊고 섬뜩한 침묵은, 다가올 파괴의 시간을 알리는 듯했다.",
						"english": "A deep, eerie silence lay over the land, as if portending a time of impending destruction.",
						"japanese": "大地を覆う深く不気味な沈黙は、迫り来る破壊の時を告げているようだった。",
						"chinese": "大地笼罩着深邃而诡异的寂静，仿佛预示着即将到来的毁灭时刻。",
						"french": "Un silence profond et inquiétant planait sur la terre, comme pour annoncer un temps de destruction imminente.",
						"spanish": "Un silencio profundo e inquietante cubría la tierra, como presagio de una época de destrucción inminente.",
						"vietnamese": "Sự im lặng sâu thẳm, đáng sợ bao trùm mặt đất, như báo hiệu một kỷ nguyên hủy diệt sắp đến.",
						"thai": "ความเงียบสงัดและน่าขนลุกปกคลุมผืนดิน ราวกับเป็นลางบอกเหตุถึงเวลาแห่งการทำลายล้างที่กำลังจะมาถึง",
						"hindi": "धरती पर एक गहरी, भयावह खामोशी छाई हुई थी, मानो आने वाले विनाश के समय की घोषणा कर रही हो।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "'영원의 속삭임'이라니… 대체 뭐가 파괴된다는 거야?",
						"english": "\"Whispers of Eternity\"... What exactly is being destroyed?",
						"japanese": "「永遠の囁き」だと…一体何が破壊されるんだ？",
						"chinese": "“永恒的低语”……到底是什么会被摧毁？",
						"french": "« Murmures d'éternité »... Qu'est-ce qui est détruit, au juste ?",
						"spanish": "\"Susurros de la Eternidad\"... ¿Qué es exactamente lo que se está destruyendo?",
						"vietnamese": "\"Lời thì thầm vĩnh cửu\"... Rốt cuộc cái gì sẽ bị phá hủy?",
						"thai": "“เสียงกระซิบแห่งนิรันดร์”... แล้วอะไรกันแน่ที่จะถูกทำลาย?",
						"hindi": "\"अनंतकाल की फुसफुसाहट\"... आखिर क्या नष्ट होने वाला है?"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 유적들이 빛을 잃고 얼어붙을 거예요. 모든 것이 사라지는 걸 봤어요, 기록에서.",
						"english": "These ruins will lose their light and freeze over. I saw everything vanish, in the records.",
						"japanese": "これらの遺跡は光を失い、凍りつくでしょう。記録で、すべてが消え去るのを見ました。",
						"chinese": "这些遗迹将会失去光芒并被冻结。我在记录中看到了一切都消失了。",
						"french": "Ces ruines perdront leur lumière et gèleront. J'ai tout vu disparaître, dans les annales.",
						"spanish": "Estas ruinas perderán su luz y se congelarán. Vi cómo todo desaparecía en los registros.",
						"vietnamese": "Những tàn tích này sẽ mất đi ánh sáng và đóng băng. Tôi đã thấy mọi thứ biến mất, trong các ghi chép.",
						"thai": "ซากปรักหักพังเหล่านี้จะสูญเสียแสงและถูกแช่แข็ง ฉันเห็นทุกสิ่งหายไปในบันทึก",
						"hindi": "ये खंडहर अपनी रोशनी खो देंगे और जम जाएँगे। मैंने अभिलेखों में सब कुछ गायब होते देखा है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기록?",
						"english": "Records?",
						"japanese": "記録？",
						"chinese": "记录？",
						"french": "Les annales ?",
						"spanish": "¿Registros?",
						"vietnamese": "Ghi chép?",
						"thai": "บันทึก?",
						"hindi": "अभिलेख?"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "네. 저는 이 잊혀진 역사를 기억하는 기록자. 이 모든 것을 막기 위해 동행한 길잡이죠.",
						"english": "Yes. I am the chronicler who remembers this forgotten history. Your guide, here to prevent all of this.",
						"japanese": "はい。私はこの忘れ去られた歴史を記憶する記録者。このすべてを阻止するために同行した案内人です。",
						"chinese": "是的。我是记录者，记住这段被遗忘的历史。我是你的向导，在此阻止这一切。",
						"french": "Oui. Je suis le chroniqueur qui se souvient de cette histoire oubliée. Votre guide, ici pour empêcher tout cela.",
						"spanish": "Sí. Soy la cronista que recuerda esta historia olvidada. Tu guía, aquí para evitar todo esto.",
						"vietnamese": "Vâng. Tôi là người ghi chép ghi nhớ lịch sử bị lãng quên này. Người dẫn đường đồng hành cùng bạn để ngăn chặn tất cả những điều này.",
						"thai": "ใช่ ฉันคือนักบันทึกที่จดจำประวัติศาสตร์ที่ถูกลืมนี้ ผู้แนะนำที่มาพร้อมกับคุณเพื่อหยุดยั้งเรื่องทั้งหมดนี้",
						"hindi": "हाँ। मैं वह इतिहासकार हूँ जो इस भूली हुई कहानी को याद रखता है। आपका मार्गदर्शक, यह सब रोकने के लिए यहाँ हूँ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼, 이 현상을 막을 방법도 알아?",
						"english": "So, you know how to stop this phenomenon too?",
						"japanese": "じゃあ、この現象を止める方法も知ってるの？",
						"chinese": "那么，你也知道如何阻止这个现象吗？",
						"french": "Alors, vous savez aussi comment arrêter ce phénomène ?",
						"spanish": "Entonces, ¿también sabes cómo detener este fenómeno?",
						"vietnamese": "Vậy, bạn cũng biết cách ngăn chặn hiện tượng này à?",
						"thai": "งั้น เธอก็รู้วิธีหยุดยั้งปรากฏการณ์นี้ด้วยงั้นสิ?",
						"hindi": "तो, क्या आप इस घटना को रोकने का तरीका भी जानते हैं?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…해답은 더 깊은 곳에 있을 거예요. 이 겨울을 조종하는 알 수 없는 힘.",
						"english": "...The answer must be deeper. An unknown power controlling this winter.",
						"japanese": "…答えはもっと深いところにあるでしょう。この冬を操る、未知の力。",
						"chinese": "……答案应该在更深处。一股操控着这个冬天的未知力量。",
						"french": "...La réponse doit être plus profonde. Une force inconnue contrôlant cet hiver.",
						"spanish": "...La respuesta debe estar en un lugar más profundo. Un poder desconocido que controla este invierno.",
						"vietnamese": "...Câu trả lời hẳn phải ở sâu hơn nữa. Một thế lực vô danh đang điều khiển mùa đông này.",
						"thai": "...คำตอบน่าจะอยู่ลึกกว่านั้น พลังที่ไม่รู้จักที่ควบคุมฤดูหนาวนี้",
						"hindi": "...उत्तर और गहरे में होगा। एक अज्ञात शक्ति जो इस सर्दी को नियंत्रित कर रही है।"
					},
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "대지는 더욱 깊은 얼음에 잠식되어 있었다. 발걸음마다 서늘한 기운이 스며들었다.",
						"english": "The land was further encroached by deeper ice. A chilling aura permeated with every step.",
						"japanese": "大地はさらに深い氷に侵食されていた。足を踏み出すたびに、冷たい気が染み込んだ。",
						"chinese": "大地被更深的冰层侵蚀着。每一步都渗透着一股寒意。",
						"french": "La terre était davantage envahie par une glace plus profonde. Une aura glaciale imprégnait chaque pas.",
						"spanish": "La tierra estaba aún más invadida por un hielo más profundo. Un aura helada impregnaba cada paso.",
						"vietnamese": "Mặt đất chìm sâu hơn trong băng giá. Mỗi bước chân đều cảm nhận được luồng khí lạnh lẽo.",
						"thai": "ผืนดินถูกกัดเซาะด้วยน้ำแข็งที่ลึกขึ้นเรื่อยๆ กลิ่นอายเย็นยะเยือกแผ่ซ่านไปทุกย่างก้าว",
						"hindi": "धरती और गहरे बर्फ से घिरी हुई थी। हर कदम पर एक ठंडी आभा समाई हुई थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "점점 더 추워지는 것 같아. 이대로 괜찮을까?",
						"english": "It's getting colder and colder. Will we be okay like this?",
						"japanese": "だんだん寒くなってきた。このままで大丈夫かな？",
						"chinese": "感觉越来越冷了。这样下去没问题吗？",
						"french": "Il fait de plus en plus froid. Est-ce que ça ira comme ça ?",
						"spanish": "Cada vez hace más frío. ¿Estaremos bien así?",
						"vietnamese": "Càng lúc càng lạnh. Liệu chúng ta có ổn không?",
						"thai": "รู้สึกยิ่งหนาวขึ้นเรื่อยๆ เลยนะ อย่างนี้จะโอเคไหม?",
						"hindi": "मुझे और ठंड लग रही है। क्या हम ऐसे ठीक रहेंगे?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이건 단순한 추위가 아니에요. 어떤 거대한 힘이 이 모든 것을…",
						"english": "This isn't just simple cold. Some colossal power is...",
						"japanese": "これはただの寒さじゃない。何か巨大な力がこのすべてを…",
						"chinese": "这不是单纯的寒冷。某种巨大的力量正在……",
						"french": "Ce n'est pas un simple froid. Une puissance colossale est...",
						"spanish": "Esto no es un simple frío. Algún poder colosal está...",
						"vietnamese": "Đây không phải là lạnh đơn thuần. Một thế lực khổng lồ nào đó đang...",
						"thai": "นี่ไม่ใช่แค่ความหนาวธรรมดา มีพลังมหาศาลบางอย่างที่...",
						"hindi": "यह सिर्फ साधारण ठंड नहीं है। कोई विशाल शक्ति इस सब को..."
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "조종하고 있다는 거야?",
						"english": "Are you saying you're controlling it?",
						"japanese": "操っているとでも？",
						"chinese": "你在说你正在操控它吗？",
						"french": "Tu dis que tu le contrôles ?",
						"spanish": "¿Estás diciendo que lo estás controlando?",
						"vietnamese": "Bạn đang nói rằng bạn đang điều khiển nó à?",
						"thai": "คุณกำลังบอกว่าคุณกำลังควบคุมมันอยู่หรือ?",
						"hindi": "क्या तुम कह रहे हो कि तुम इसे नियंत्रित कर रहे हो?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…네. 이대로라면 우린 모두 이 얼음에 갇힐 거예요.",
						"english": "...Yes. If things continue like this, we'll all be trapped in this ice.",
						"japanese": "…はい。このままでは、私たち全員がこの氷に閉じ込められてしまいます。",
						"chinese": "……是的。如果这样下去，我们都会被困在这冰中。",
						"french": "...Oui. Si ça continue comme ça, nous serons tous piégés dans cette glace.",
						"spanish": "...Sí. Si las cosas siguen así, todos quedaremos atrapados en este hielo.",
						"vietnamese": "...Vâng. Nếu cứ tiếp tục thế này, tất cả chúng ta sẽ bị mắc kẹt trong tảng băng này.",
						"thai": "...ใช่ ถ้าเป็นแบบนี้ต่อไป พวกเราทุกคนจะถูกขังอยู่ในน้ำแข็งนี้",
						"hindi": "...हाँ। अगर ऐसा ही चलता रहा, तो हम सब इस बर्फ में फंस जाएंगे।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어. 우리는 답을 찾아야 해.",
						"english": "It can't be stopped. We need to find a solution.",
						"japanese": "止められない。私たちは答えを見つけなければならない。",
						"chinese": "无法阻止。我们必须找到答案。",
						"french": "On ne peut pas l'arrêter. Nous devons trouver une solution.",
						"spanish": "No se puede detener. Tenemos que encontrar una respuesta.",
						"vietnamese": "Không thể dừng lại. Chúng ta phải tìm ra câu trả lời.",
						"thai": "หยุดไม่ได้ เราต้องหาคำตอบ",
						"hindi": "इसे रोका नहीं जा सकता। हमें जवाब ढूंढना होगा।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마침내 마주한 거대한 얼음 굴. 그곳에 정체 모를 존재가 기다리고 있었다.",
						"english": "Finally, facing a massive ice cave. An unknown entity awaited within.",
						"japanese": "ついに巨大な氷の洞窟と対峙。そこには正体不明の存在が待ち受けていた。",
						"chinese": "终于，面对着巨大的冰窟。一个不知名的存在正在那里等候着。",
						"french": "Enfin, face à une immense caverne de glace. Une entité inconnue y attendait.",
						"spanish": "Finalmente, frente a una enorme cueva de hielo. Una entidad desconocida esperaba allí.",
						"vietnamese": "Cuối cùng, đối mặt với một hang băng khổng lồ. Một thực thể không rõ danh tính đang chờ đợi bên trong.",
						"thai": "ในที่สุดก็เผชิญหน้ากับถ้ำน้ำแข็งขนาดใหญ่ มีสิ่งมีชีวิตที่ไม่รู้จักรออยู่ข้างใน",
						"hindi": "अंततः, एक विशाल बर्फ की गुफा का सामना। एक अज्ञात इकाई अंदर प्रतीक्षा कर रही थी।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…미약한 인간들이. 감히 나의 영역에 발을 들이다니.",
						"english": "...Weak humans. How dare you trespass into my domain.",
						"japanese": "…取るに足らない人間どもめ。よくも私の領域に足を踏み入れたな。",
						"chinese": "……渺小的人类。竟敢闯入我的领域。",
						"french": "...Faibles humains. Comment osez-vous pénétrer mon domaine.",
						"spanish": "...Débiles humanos. ¿Cómo os atrevéis a pisar mi dominio?",
						"vietnamese": "...Những con người yếu ớt. Sao dám bước vào lãnh địa của ta.",
						"thai": "...มนุษย์ที่อ่อนแอ กล้าดียังไงมาเหยียบย่ำในอาณาเขตของข้า",
						"hindi": "...कमजोर इंसानो। तुम्हारी हिम्मत कैसे हुई मेरे क्षेत्र में कदम रखने की।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 이 겨울을 조종하는 힘인가!",
						"english": "Are you the power controlling this winter?!",
						"japanese": "お前がこの冬を操る力なのか！",
						"chinese": "你就是掌控这个冬天的力量吗！",
						"french": "Tu es la puissance qui contrôle cet hiver ?!",
						"spanish": "¿Eres tú el poder que controla este invierno?",
						"vietnamese": "Ngươi là sức mạnh điều khiển mùa đông này sao!",
						"thai": "เจ้าคือพลังที่ควบคุมฤดูหนาวนี้ใช่ไหม!",
						"hindi": "क्या तुम इस सर्दी को नियंत्रित करने वाली शक्ति हो!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "건방지게… 너희에게 허락된 건, 영원한 얼음 속 잠식뿐.",
						"english": "Insolent... All that awaits you is eternal engulfment in ice.",
						"japanese": "生意気な… お前たちに許されたのは、永遠の氷の中での浸食だけだ。",
						"chinese": "狂妄……你们被允许的，只有在永恒的冰中被侵蚀。",
						"french": "Insolents... Tout ce qui vous attend, c'est l'engloutissement éternel dans la glace.",
						"spanish": "Insolentes... Lo único que os está permitido es la inmersión eterna en el hielo.",
						"vietnamese": "Hỗn xược... Thứ được phép dành cho các ngươi, chỉ là sự vĩnh viễn bị nhấn chìm trong băng.",
						"thai": "บังอาจ... สิ่งที่พวกเจ้าได้รับอนุญาตคือการจมดิ่งลงไปในน้ำแข็งชั่วนิรันดร์เท่านั้น",
						"hindi": "गुस्ताख... तुम्हें जो मिला है, वह बर्फ में शाश्वत समाधि है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "잠깐… 저건… 잊혀진 룬 문양… {random_boss}의 이름이…!",
						"english": "Wait... that's... a forgotten rune... {random_boss}'s name...!",
						"japanese": "待て… あれは… 忘れられたルーン文字… {random_boss}の名が…！",
						"chinese": "等等……那是……被遗忘的符文……{random_boss}的名字……！",
						"french": "Attends... c'est... une rune oubliée... le nom de {random_boss}...!",
						"spanish": "Espera... eso es... una runa olvidada... ¡el nombre de {random_boss}...!",
						"vietnamese": "Chờ đã... đó là... một ký tự rune bị lãng quên... tên của {random_boss}...!",
						"thai": "เดี๋ยวก่อน... นั่นมัน... อักษรรูนที่ถูกลืมเลือน... ชื่อของ {random_boss}...!",
						"hindi": "रुको... वो... एक भूला हुआ रनिक प्रतीक... {random_boss} का नाम...!"
					},
					"speaker": "eira"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "감히 나의 이름을 입에 담으려 하는가. 소용없다.",
						"english": "How dare you speak my name. It's useless.",
						"japanese": "よくも私の名を口にしようとするな。無駄だ。",
						"chinese": "竟敢提及我的名字。毫无用处。",
						"french": "Comment oses-tu prononcer mon nom. C'est inutile.",
						"spanish": "¿Cómo osas pronunciar mi nombre? Es inútil.",
						"vietnamese": "Ngươi dám nhắc đến tên ta sao. Vô ích thôi.",
						"thai": "เจ้ากล้าดียังไงมาเอ่ยชื่อของข้า ไร้ประโยชน์",
						"hindi": "तुम्हारी हिम्मत कैसे हुई मेरा नाम लेने की। यह बेकार है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 이 힘이… 봉인이… 풀린다고…?!",
						"english": "Ugh... this power... the seal... breaking...?!",
						"japanese": "ぐっ… この力が… 封印が… 解けると…？！",
						"chinese": "呃……这股力量……封印……要解开了……？！",
						"french": "Argh... ce pouvoir... le sceau... se brise...?!",
						"spanish": "Ugh... este poder... ¿el sello... se rompe...?!",
						"vietnamese": "Khụ... sức mạnh này... phong ấn... đang giải phóng sao...?!",
						"thai": "อึก... พลังนี้... ตราผนึก... กำลังจะคลาย...?!",
						"hindi": "उफ़... यह शक्ति... मुहर... टूट रही है...?!"
					}
				},
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "봉인? {random_boss}는… 유적의 수호자가 아니라, 봉인된 존재였어요!",
						"english": "Sealed? {random_boss} was... not the guardian of the ruins, but a sealed being!",
						"japanese": "封印？ {random_boss}は… 遺跡の守護者ではなく、封印された存在だったのね！",
						"chinese": "封印？ {random_boss}… 它不是遗迹的守护者，而是一个被封印的存在！",
						"french": "Scellé ? {random_boss} n'était... pas le gardien des ruines, mais une entité scellée !",
						"spanish": "¿Sellado? ¡{random_boss} no era... el guardián de las ruinas, sino un ser sellado!",
						"vietnamese": "Phong ấn? {random_boss}… không phải là người bảo vệ di tích, mà là một thực thể bị phong ấn!",
						"thai": "ถูกผนึก? {random_boss} ไม่ใช่... ผู้พิทักษ์ซากปรักหักพัง แต่เป็นสิ่งมีชีวิตที่ถูกผนึกไว้!",
						"hindi": "मुहरबंद? {random_boss}… खंडहर का संरक्षक नहीं, बल्कि एक मुहरबंद अस्तित्व था!"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 '영원의 속삭임'도…",
						"english": "Then the 'Whispers of Eternity' also...",
						"japanese": "なら「永遠のささやき」も…",
						"chinese": "那么“永恒的低语”也…",
						"french": "Alors les 'Murmures de l'Éternité' aussi...",
						"spanish": "Entonces los 'Susurros de la Eternidad' también...",
						"vietnamese": "Vậy thì 'Lời thì thầm vĩnh cửu' cũng...",
						"thai": "ถ้าอย่างนั้น 'เสียงกระซิบแห่งนิรันดร์' ก็...",
						"hindi": "तो 'अनंत काल की फुसफुसाहट' भी..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "정체 모를 보스는 사라졌다. 하지만 대지의 진동은 멈추지 않았다.",
						"english": "The mysterious boss vanished. But the tremor of the earth did not stop.",
						"japanese": "正体不明のボスは消えた。しかし大地の振動は止まらなかった。",
						"chinese": "神秘的Boss消失了。但大地的震动并未停止。",
						"french": "Le boss inconnu disparut. Mais les vibrations de la terre ne cessèrent pas.",
						"spanish": "El jefe desconocido desapareció. Pero el temblor de la tierra no se detuvo.",
						"vietnamese": "Con boss bí ẩn biến mất. Nhưng sự rung chuyển của mặt đất không ngừng lại.",
						"thai": "บอสปริศนาหายไปแล้ว แต่แรงสั่นสะเทือนของพื้นโลกยังไม่หยุด",
						"hindi": "रहस्यमय बॉस गायब हो गया। लेकिन पृथ्वी का कंपन नहीं रुका।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이제 시작이다. 이 혹독한 겨울의 진실은, 아직 깊은 얼음 속에 잠들어 있었다.",
						"english": "This is just the beginning. The truth of this harsh winter was still slumbering deep within the ice.",
						"japanese": "これからが始まりだ。この過酷な冬の真実は、まだ深い氷の中に眠っていた。",
						"chinese": "这才刚刚开始。这个严冬的真相，仍沉睡在深厚的冰层之下。",
						"french": "Ce n'est que le début. La vérité de cet hiver rigoureux dormait encore profondément sous la glace.",
						"spanish": "Esto es solo el principio. La verdad de este crudo invierno aún dormía en las profundidades del hielo.",
						"vietnamese": "Đây mới chỉ là khởi đầu. Sự thật về mùa đông khắc nghiệt này vẫn đang ngủ say trong lớp băng sâu thẳm.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น ความจริงของฤดูหนาวอันโหดร้ายนี้ยังคงหลับใหลอยู่ใต้ธารน้ำแข็งอันลึกซึ้ง",
						"hindi": "यह तो बस शुरुआत है। इस कठोर सर्दी का सच अभी भी गहरी बर्फ में सोया हुआ था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 얼음의 힘이 탐험대를 압도했다. 몸속까지 얼어붙는 고통.",
						"english": "The immense power of ice overwhelmed the expedition. A bone-chilling pain.",
						"japanese": "巨大な氷の力が探検隊を圧倒した。体中に凍てつくような痛み。",
						"chinese": "巨大的冰之力量压倒了探险队。连身体都冻结的痛苦。",
						"french": "L'immense pouvoir de la glace submergea l'expédition. Une douleur glaçante jusqu'au plus profond du corps.",
						"spanish": "El inmenso poder del hielo abrumó a la expedición. Un dolor que congelaba hasta los huesos.",
						"vietnamese": "Sức mạnh băng giá khổng lồ đã áp đảo đoàn thám hiểm. Nỗi đau thấu xương.",
						"thai": "พลังน้ำแข็งมหาศาลเข้าครอบงำคณะสำรวจ ความเจ็บปวดที่เยือกแข็งถึงกระดูก",
						"hindi": "बर्फ की विशाल शक्ति ने अभियान दल को अभिभूत कर दिया। शरीर को जमा देने वाला दर्द।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 것들. 감히 나에게 덤비려 했는가.",
						"english": "Insignificant beings. Did you dare to challenge me?",
						"japanese": "くだらぬ者どもめ。よくも我に挑もうとしたな。",
						"chinese": "渺小的存在。竟敢挑战我？",
						"french": "Êtres insignifiants. Osiez-vous me défier ?",
						"spanish": "Seres insignificantes. ¿Osasteis desafiarme?",
						"vietnamese": "Những kẻ hèn mọn. Dám thách thức ta sao?",
						"thai": "พวกไร้ค่า กล้าดียังไงมาท้าทายข้า",
						"hindi": "तुच्छ प्राणी। क्या तुमने मुझे चुनौती देने की हिम्मत की?"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직 끝나지 않았어…!",
						"english": "Ugh... it's not over yet...!",
						"japanese": "くっ…まだ終わってない…！",
						"chinese": "呃…还没结束…！",
						"french": "Ugh... ce n'est pas encore fini...!",
						"spanish": "Ugh... ¡todavía no ha terminado...!",
						"vietnamese": "Khụ… vẫn chưa kết thúc đâu…!",
						"thai": "อึก... ยังไม่จบแค่นี้หรอก...!",
						"hindi": "उफ़… अभी खत्म नहीं हुआ है…!"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "진실은… 반드시 밝혀야 해요…!",
						"english": "The truth... must be revealed...!",
						"japanese": "真実は…必ず明かさなければ…！",
						"chinese": "真相…一定要揭露出来…！",
						"french": "La vérité... doit être révélée...!",
						"spanish": "La verdad... ¡debe ser revelada...!",
						"vietnamese": "Sự thật… nhất định phải được phơi bày…!",
						"thai": "ความจริง... จะต้องถูกเปิดเผย...!",
						"hindi": "सच… ज़रूर सामने आना चाहिए…!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "다시 와라. 허나 그때는… 더 이상 아무것도 남지 않을 것이다.",
						"english": "Come again. But by then... there will be nothing left.",
						"japanese": "また来るがいい。だがその時は…もう何も残っていないだろう。",
						"chinese": "再来吧。但那时…将一无所有。",
						"french": "Revenez. Mais à ce moment-là... il ne restera plus rien.",
						"spanish": "Volved. Pero para entonces... no quedará nada.",
						"vietnamese": "Hãy quay lại đi. Nhưng đến lúc đó… sẽ không còn lại gì nữa đâu.",
						"thai": "กลับมาอีกครั้งเถิด แต่เมื่อถึงตอนนั้น... จะไม่มีอะไรเหลืออีกแล้ว",
						"hindi": "फिर आना। लेकिन तब तक… कुछ भी नहीं बचेगा।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"북방의 혹한. 모든 것이 얼어붙은 대지.",
			"오래된 유적들은 거대한 얼음 속에 갇혀 잠들었다.",
			"그러나 고요함 속에 희미한 속삭임이 들려왔다.",
			"파괴의 시한을 알리는 첫 번째 징조였다.",
			"이 겨울을 조종하는 미지의 힘. 섬뜩한 침묵이 대지를 덮었다."
		],
		"english": [
			"The bitter cold of the North. A land where everything is frozen.",
			"Ancient ruins lay dormant, trapped within colossal ice.",
			"Yet, a faint whisper echoed in the silence.",
			"It was the first sign, heralding the hour of destruction.",
			"An unknown power controlled this winter. An eerie silence fell upon the land."
		],
		"japanese": [
			"北方の酷寒。全てが凍りついた大地。",
			"古代の遺跡は巨大な氷に閉じ込められ、眠りについた。",
			"しかし、静寂の中に微かな囁きが聞こえた。",
			"それは破壊の時を告げる最初の兆候だった。",
			"この冬を操る未知の力。不気味な沈黙が大地を覆った。"
		],
		"chinese": [
			"北方的严寒。万物冻结的大地。",
			"古老的遗迹被困在巨大的冰层中，陷入沉睡。",
			"然而，寂静中传来微弱的低语。",
			"这是预示毁灭时刻的第一个迹象。",
			"操控这个冬天的未知力量。令人毛骨悚然的寂静笼罩着大地。"
		],
		"french": [
			"Le froid glacial du Nord. Une terre où tout est gelé.",
			"Des ruines antiques reposent, piégées dans la glace colossale.",
			"Pourtant, un léger murmure résonnait dans le silence.",
			"C'était le premier signe, annonçant l'heure de la destruction.",
			"Une puissance inconnue contrôlait cet hiver. Un silence inquiétant recouvrait la terre."
		],
		"spanish": [
			"El frío amargo del Norte. Una tierra donde todo está congelado.",
			"Antiguas ruinas yacen dormidas, atrapadas en el hielo colosal.",
			"Sin embargo, un débil susurro resonó en el silencio.",
			"Era la primera señal, anunciando la hora de la destrucción.",
			"Un poder desconocido controlaba este invierno. Un silencio inquietante cubrió la tierra."
		],
		"vietnamese": [
			"Cái lạnh cắt da cắt thịt của phương Bắc. Một vùng đất vạn vật đóng băng.",
			"Những di tích cổ xưa chìm vào giấc ngủ, bị mắc kẹt trong lớp băng khổng lồ.",
			"Tuy nhiên, một tiếng thì thầm yếu ớt vang vọng trong im lặng.",
			"Đó là dấu hiệu đầu tiên, báo trước giờ hủy diệt.",
			"Một sức mạnh vô danh điều khiển mùa đông này. Một sự im lặng đáng sợ bao trùm vùng đất."
		],
		"thai": [
			"ความหนาวเหน็บแห่งแดนเหนือ แผ่นดินที่ทุกสิ่งกลายเป็นน้ำแข็ง",
			"ซากปรักหักพังโบราณหลับใหล ถูกกักขังอยู่ในน้ำแข็งมหึมา",
			"ทว่า เสียงกระซิบแผ่วเบาเล็ดลอดออกมาในความเงียบงัน",
			"มันคือสัญญาณแรกที่บ่งบอกถึงเวลาแห่งการทำลายล้าง",
			"พลังลึกลับควบคุมฤดูหนาวนี้ ความเงียบงันอันน่าขนลุกปกคลุมแผ่นดิน"
		],
		"hindi": [
			"उत्तर की कड़ाके की ठंड। एक ऐसी भूमि जहाँ सब कुछ जम गया है।",
			"प्राचीन खंडहर विशाल बर्फ में फंसे हुए, निष्क्रिय पड़े थे।",
			"फिर भी, खामोशी में एक हल्की फुसफुसाहट गूंज उठी।",
			"यह विनाश की घड़ी का संकेत देने वाला पहला संकेत था।",
			"एक अज्ञात शक्ति इस सर्दी को नियंत्रित कर रही थी। एक डरावनी खामोशी ने धरती को ढक लिया था।"
		]
	}
} as const;
